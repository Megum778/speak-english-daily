import { useState, useEffect } from "react";
import { getTotalDays, getStreak, getWeeklyDuration, getBookProgress } from "../utils/storage";

function formatDuration(seconds) {
  if (seconds < 60) return seconds + "s";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m < 60) return m + "m " + s + "s";
  const h = Math.floor(m / 60);
  const rm = m % 60;
  return h + "h " + rm + "m " + s + "s";
}

function formatDate() {
  const now = new Date();
  return now.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
}

export default function HeaderStats() {
  const [stats, setStats] = useState({ total: 0, streak: 0, weekly: 0 });
  const [book2, setBook2] = useState({ completed: 0, total: 96 });
  const [book3, setBook3] = useState({ completed: 0, total: 60 });

  const refresh = () => {
    setStats({
      total: getTotalDays(),
      streak: getStreak(),
      weekly: getWeeklyDuration(),
    });
    setBook2(getBookProgress(2));
    setBook3(getBookProgress(3));
  };

  useEffect(() => {
    refresh();
    window.addEventListener("record-updated", refresh);
    return () => window.removeEventListener("record-updated", refresh);
  }, []);

  const items = [
    { label: "累计打卡", value: stats.total + " 天" },
    { label: "连续打卡", value: stats.streak + " 天" },
    { label: "本周时长", value: formatDuration(stats.weekly) },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-brand-700 tracking-tight">
          新概念英语 · 口语输出打卡
        </h1>
        <p className="text-sm text-gray-500 mt-1">{formatDate()}</p>

        <div className="flex gap-6 mt-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-xl font-semibold text-gray-800">{item.value}</div>
              <div className="text-xs text-gray-500">{item.label}</div>
            </div>
          ))}
          <div className="text-center border-l border-gray-200 pl-6">
            <div className="text-sm text-gray-500 mb-1">学习进度</div>
            <div className="flex gap-3 text-xs">
              <span className="text-brand-600 font-medium">
                第2册 {book2.completed}/{book2.total}
              </span>
              <span className="text-gray-400">|</span>
              <span className="text-brand-600 font-medium">
                第3册 {book3.completed}/{book3.total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
