import { useState, useEffect } from "react";
import { getTodayRecord } from "../utils/storage";

const EMPTY_FORM = {
  summary: "",
  stuckPoints: "",
  expressions: "",
  improvement: "",
  rating: 3,
};

export default function ReflectionForm({ onSave }) {
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    const todayRecord = getTodayRecord();
    if (todayRecord) {
      setForm({
        summary: todayRecord.summary || "",
        stuckPoints: todayRecord.stuckPoints || "",
        expressions: todayRecord.expressions || "",
        improvement: todayRecord.improvement || "",
        rating: todayRecord.rating || 3,
      });
    }
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.summary.trim()) {
      alert("请至少填写「今天我复述的主要内容」");
      return;
    }
    onSave(form);
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">复盘区</h2>

      <div className="mb-4">
        <label className={labelClass}>今天我复述的主要内容</label>
        <textarea
          className={inputClass}
          rows={2}
          value={form.summary}
          onChange={(e) => handleChange("summary", e.target.value)}
          placeholder="用英文或中文简要概括你今天复述的内容..."
        />
      </div>

      <div className="mb-4">
        <label className={labelClass}>今天卡壳的地方</label>
        <textarea
          className={inputClass}
          rows={2}
          value={form.stuckPoints}
          onChange={(e) => handleChange("stuckPoints", e.target.value)}
          placeholder="哪些地方表达不流畅？为什么会卡住？..."
        />
      </div>

      <div className="mb-4">
        <label className={labelClass}>今天学到的 3 个表达</label>
        <textarea
          className={inputClass}
          rows={2}
          value={form.expressions}
          onChange={(e) => handleChange("expressions", e.target.value)}
          placeholder="写下你今天学到或用到的好表达，每行一个..."
        />
      </div>

      <div className="mb-4">
        <label className={labelClass}>下次想改进的地方</label>
        <textarea
          className={inputClass}
          rows={2}
          value={form.improvement}
          onChange={(e) => handleChange("improvement", e.target.value)}
          placeholder="下次录音你想在哪些方面做得更好？..."
        />
      </div>

      <div className="mb-6">
        <label className={labelClass}>自我评分</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => handleChange("rating", n)}
              className={
                "w-10 h-10 rounded-lg text-sm font-medium transition-colors " +
                (form.rating >= n
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200")
              }
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2.5 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-700 transition-colors"
      >
        完成今日打卡
      </button>
    </form>
  );
}
