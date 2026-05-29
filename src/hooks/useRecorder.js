import { useState, useRef, useCallback } from "react";

function getBestMimeType() {
  const types = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
  ];
  for (const t of types) {
    if (MediaRecorder.isTypeSupported(t)) return t;
  }
  return "";
}

export default function useRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isSupported] = useState(
    () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder)
  );

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  // ref 同步最新 audioUrl，避免闭包过期问题
  const audioUrlRef = useRef(null);

  const start = useCallback(async () => {
    if (!isSupported) return;
    setAudioUrl(null);
    audioUrlRef.current = null;
    chunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = getBestMimeType();
      const options = mimeType ? { mimeType } : {};
      const mediaRecorder = new MediaRecorder(stream, options);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: mediaRecorder.mimeType || "audio/webm",
        });
        const url = URL.createObjectURL(blob);
        audioUrlRef.current = url;
        setAudioUrl(url);
        stream.getTracks().forEach((t) => t.stop());
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((t) => t + 1);
      }, 1000);
    } catch (err) {
      console.error("Mic access denied:", err);
      alert("无法访问麦克风，请检查浏览器权限。建议使用 Chrome 或 Edge。");
    }
  }, [isSupported]);

  const stop = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [isRecording]);

  // 完全重置（销毁 URL）
  const reset = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    audioUrlRef.current = null;
    setAudioUrl(null);
    setRecordingTime(0);
  }, [audioUrl]);

  // 轻量重置（保留 URL 不销毁）
  const softReset = useCallback(() => {
    audioUrlRef.current = null;
    setAudioUrl(null);
    setRecordingTime(0);
  }, []);

  // 获取当前音频 URL（通过 ref，避免闭包过期）
  const getAudioUrl = useCallback(() => audioUrlRef.current, []);

  return { isRecording, recordingTime, audioUrl, isSupported, start, stop, reset, softReset, getAudioUrl };
}
