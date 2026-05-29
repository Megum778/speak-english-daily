import { useState, useCallback, useEffect } from "react";
import HeaderStats from "./components/HeaderStats";
import DailyTask from "./components/DailyTask";
import Recorder from "./components/Recorder";
import ReflectionForm from "./components/ReflectionForm";
import HistoryList from "./components/HistoryList";
import ExpressionBank from "./components/ExpressionBank";
import { saveTodayRecord, getTodayRecord } from "./utils/storage";

export default function App() {
  const [material, setMaterial] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [todayRecord, setTodayRecord] = useState(getTodayRecord);

  useEffect(() => {
    const refresh = () => setTodayRecord(getTodayRecord());
    window.addEventListener("record-updated", refresh);
    return () => window.removeEventListener("record-updated", refresh);
  }, []);

  const handleMaterialChange = useCallback((mat) => {
    setMaterial(mat);
    setRecordingDuration(0);
  }, []);

  const handleDurationChange = useCallback((d) => setRecordingDuration(d), []);

  const handleSave = (formData) => {
    if (!material) {
      alert("请先在「今日任务」中选择课次。");
      return;
    }

    const book = material.book;
    const minDuration = book === 2 ? 45 : 60;
    if (recordingDuration < minDuration) {
      alert(
        "请先完成足够时长的口语录音：新概念英语 2 至少 45 秒，新概念英语 3 至少 60 秒。"
      );
      return;
    }

    saveTodayRecord({
      ...formData,
      book: material.book,
      lesson: material.lesson,
      lessonId: material.id,
      lessonTitle: material.title,
      lessonTitleCn: material.titleCn,
      pastedText: material.pastedText || "",
      recordingDuration,
    });
    window.dispatchEvent(new Event("record-updated"));
    setTodayRecord(getTodayRecord());
    alert("打卡记录已保存！");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderStats />

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {todayRecord && (
          <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-700 text-center">
            今天已经完成打卡，可以更新记录
          </div>
        )}

        <DailyTask onMaterialChange={handleMaterialChange} />
        <Recorder onDurationChange={handleDurationChange} />
        <ReflectionForm onSave={handleSave} />
        <HistoryList />
        <ExpressionBank />
      </main>

      <footer className="text-center py-6 text-xs text-gray-400">
        新概念英语 · 口语输出打卡 —— 每天开口说英语
      </footer>
    </div>
  );
}
