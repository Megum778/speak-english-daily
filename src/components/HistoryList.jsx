import { useState, useEffect } from "react";
import { getRecentRecords, deleteRecord, clearAllRecords } from "../utils/storage";

function formatDuration(s) {
  if (!s) return "—";
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m + "m " + sec + "s";
}

export default function HistoryList() {
  const [records, setRecords] = useState([]);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const refresh = () => setRecords(getRecentRecords(7));

  useEffect(() => {
    refresh();
    window.addEventListener("record-updated", refresh);
    return () => window.removeEventListener("record-updated", refresh);
  }, []);

  const handleDelete = (date) => {
    if (window.confirm("确定要删除 " + date + " 的记录吗？")) {
      deleteRecord(date);
      refresh();
      window.dispatchEvent(new Event("record-updated"));
    }
  };

  const handleClearAll = () => {
    clearAllRecords();
    setShowClearConfirm(false);
    refresh();
    window.dispatchEvent(new Event("record-updated"));
  };

  if (records.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">历史记录</h2>
        <p className="text-sm text-gray-400 text-center py-6">暂无打卡记录，快去完成今天的任务吧！</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">历史记录（最近 7 天）</h2>
        {!showClearConfirm ? (
          <button
            onClick={() => setShowClearConfirm(true)}
            className="text-xs px-2 py-1 rounded border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
          >
            清空全部
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-xs text-red-500">确认清空？</span>
            <button
              onClick={handleClearAll}
              className="text-xs px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            >
              确认
            </button>
            <button
              onClick={() => setShowClearConfirm(false)}
              className="text-xs px-2 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-50"
            >
              取消
            </button>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {records.map((r) => (
          <div
            key={r.date}
            className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-800">{r.date}</span>
              <button
                onClick={() => handleDelete(r.date)}
                className="text-xs text-gray-400 hover:text-red-500 transition-colors"
              >
                删除
              </button>
            </div>

            {r.book && r.lesson ? (
              <div className="mb-2">
                <span className="text-xs font-medium text-brand-600">
                  新概念英语 第{r.book}册 · Lesson {r.lesson}
                </span>
                <div className="text-xs text-gray-500 mt-0.5">
                  {r.lessonTitle || "—"}
                  {r.lessonTitleCn ? " / " + r.lessonTitleCn : ""}
                </div>
              </div>
            ) : (
              <div className="mb-2 text-xs text-gray-500">
                材料：{r.materialTitle || r.lessonTitle || "—"}
              </div>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
              <span>录音时长：{formatDuration(r.recordingDuration)}</span>
              <span>评分：{r.rating || 0}/5</span>
            </div>

            {r.expressions && (
              <div className="mt-2 text-xs text-gray-600">
                <span className="font-medium">学到的表达：</span>
                {r.expressions}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
