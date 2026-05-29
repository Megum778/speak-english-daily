import { useState, useCallback } from "react";
import useRecorder from "../hooks/useRecorder";

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

export default function Recorder({ onDurationChange }) {
  const recorder = useRecorder();

  const [first, setFirst] = useState(null);   // { audioUrl, time }
  const [second, setSecond] = useState(null);  // { audioUrl, time }

  const hasFirst = first !== null;
  const hasSecond = second !== null;
  const hasActiveAudio = recorder.audioUrl !== null && !recorder.isRecording;

  const emit = useCallback((t) => { if (onDurationChange) onDurationChange(t); }, [onDurationChange]);

  // 第一遍停止
  const handleStopFirst = useCallback(() => {
    const time = recorder.recordingTime;
    recorder.stop();
    // onstop 是异步的，emit 不需要等 audioUrl
    emit(time);
  }, [recorder, emit]);

  // 保存第一遍（softReset：保留 URL 不销毁）
  const handleSaveFirst = useCallback(() => {
    setFirst({ audioUrl: recorder.audioUrl, time: recorder.recordingTime });
    recorder.softReset();
  }, [recorder]);

  // 第二遍停止并保存（用 getAudioUrl ref 避免闭包过期）
  const handleSaveSecond = useCallback(() => {
    const time = recorder.recordingTime;
    recorder.stop();
    // 轮询等待 onstop 设置 audioUrl
    const check = () => {
      const url = recorder.getAudioUrl();
      if (url) {
        setSecond({ audioUrl: url, time });
        emit(time);
      } else {
        setTimeout(check, 50);
      }
    };
    setTimeout(check, 100);
  }, [recorder, emit]);

  // 舍弃第一遍（reset：销毁 URL）
  const handleDiscardFirst = useCallback(() => {
    setFirst(null);
    recorder.reset();
    emit(0);
  }, [recorder, emit]);

  // 舍弃第二遍并重录
  const handleDiscardSecond = useCallback(() => {
    setSecond(null);
    recorder.reset();
    emit(first ? first.time : 0);
  }, [recorder, emit, first]);

  // 全部重来
  const handleResetAll = useCallback(() => {
    setFirst(null);
    setSecond(null);
    recorder.reset();
    emit(0);
  }, [recorder, emit]);

  if (!recorder.isSupported) {
    return (
      <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6">
        <p className="text-yellow-700 text-sm text-center">
          当前浏览器不支持录音功能，请使用 Chrome 或 Edge 浏览器。
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">录音区</h2>

      {/* 第一遍已保存 */}
      {hasFirst && (
        <div className="mb-3 flex items-center gap-3 text-sm flex-wrap">
          <span className="text-gray-500">第一遍：</span>
          <span className="font-mono text-gray-700">{formatTime(first.time)}</span>
          <audio controls src={first.audioUrl} className="h-8" />
          {!hasSecond && !recorder.isRecording && !hasActiveAudio && (
            <button onClick={handleDiscardFirst} className="text-xs text-gray-400 hover:text-red-500">
              舍弃重录
            </button>
          )}
        </div>
      )}

      {/* 第二遍已保存 */}
      {hasSecond && (
        <div className="mb-3 flex items-center gap-3 text-sm flex-wrap">
          <span className="text-brand-600 font-medium">第二遍：</span>
          <span className="font-mono text-gray-700">{formatTime(second.time)}</span>
          <audio controls src={second.audioUrl} className="h-8" />
          <button onClick={handleDiscardSecond} className="text-xs text-gray-400 hover:text-red-500">
            重录第二遍
          </button>
        </div>
      )}

      {/* 录音中 */}
      {recorder.isRecording && (
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <span className="text-sm text-gray-600">
            {hasFirst ? "第二遍录音中" : "第一遍录音中"}
          </span>
          <span className="text-sm font-mono text-gray-700">{formatTime(recorder.recordingTime)}</span>
        </div>
      )}

      {/* 按钮区 */}
      <div className="flex flex-wrap gap-3 mb-3">

        {/* 状态1：开始第一遍 */}
        {!hasFirst && !recorder.isRecording && !hasActiveAudio && (
          <button onClick={recorder.start} className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium text-sm hover:bg-red-600 transition-colors">
            开始录音
          </button>
        )}

        {/* 录音中 → 停止 */}
        {recorder.isRecording && (
          <button onClick={hasFirst ? handleSaveSecond : handleStopFirst}
            className="px-5 py-2 rounded-lg bg-gray-800 text-white font-medium text-sm hover:bg-gray-900 transition-colors">
            停止录音
          </button>
        )}

        {/* 状态3：第一遍录完待确认 */}
        {hasActiveAudio && !hasFirst && !hasSecond && (
          <>
            <audio controls src={recorder.audioUrl} className="h-9" />
            <button onClick={handleSaveFirst} className="px-4 py-2 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 transition-colors">
              保存第一遍，录第二遍
            </button>
            <button onClick={recorder.reset} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition-colors">
              重录第一遍
            </button>
          </>
        )}

        {/* 状态4：第一遍已保存，开始第二遍 */}
        {hasFirst && !hasSecond && !recorder.isRecording && !hasActiveAudio && (
          <button onClick={recorder.start} className="px-5 py-2 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 transition-colors">
            开始第二次录音
          </button>
        )}

        {/* 状态6：第二遍录完待确认 */}
        {hasActiveAudio && hasFirst && !hasSecond && (
          <>
            <audio controls src={recorder.audioUrl} className="h-9" />
            <button onClick={handleSaveSecond} className="px-4 py-2 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 transition-colors">
              保存第二遍
            </button>
            <button onClick={recorder.reset} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition-colors">
              重录第二遍
            </button>
          </>
        )}

        {/* 状态7：两遍都完成 */}
        {hasSecond && !recorder.isRecording && !hasActiveAudio && (
          <button onClick={handleResetAll} className="px-4 py-2 rounded-lg border border-red-300 text-red-500 text-sm hover:bg-red-50 transition-colors">
            全部重录
          </button>
        )}
      </div>

      {/* 提示 */}
      {hasFirst && !hasSecond && !recorder.isRecording && !hasActiveAudio && (
        <p className="text-xs text-brand-600 bg-brand-50 rounded-lg px-3 py-2">
          建议先回听第一遍录音，找出 1-2 个卡壳点，然后录第二遍。第二遍通常会更流畅。
        </p>
      )}
      {hasSecond && !recorder.isRecording && !hasActiveAudio && (
        <p className="text-xs text-green-600 bg-green-50 rounded-lg px-3 py-2">
          两遍录音完成！打卡时将优先保存第二遍时长。
        </p>
      )}
    </div>
  );
}
