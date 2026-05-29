import { useState, useEffect, useMemo } from "react";
import { loadRecords } from "../utils/storage";

const CATEGORIES = [
  { key: "retell", label: "复述表达", patterns: [/复述|retell|叙述|story|事件|经历|描述|说|讲/] },
  { key: "opinion", label: "观点表达", patterns: [/观点|opinion|认为|觉得|argue|作者|author|立场|主张/] },
  { key: "summary", label: "总结表达", patterns: [/总结|summary|主旨|概括|overall|main|总之|归纳/] },
  { key: "other", label: "其他表达", patterns: [] },
];

function categorize(expr) {
  for (const cat of CATEGORIES) {
    if (cat.key === "other") continue;
    for (const re of cat.patterns) {
      if (re.test(expr)) return cat.key;
    }
  }
  return "other";
}

export default function ExpressionBank() {
  const [expressions, setExpressions] = useState([]);
  const [show, setShow] = useState(false);

  const refresh = () => {
    const records = loadRecords();
    const all = [];
    for (const r of records) {
      if (r.expressions && r.expressions.trim()) {
        // 按换行拆分多条表达
        const lines = r.expressions.split(/[\n,，、；;]+/).map((s) => s.trim()).filter(Boolean);
        for (const line of lines) {
          all.push({ text: line, date: r.date, lessonId: r.lessonId });
        }
      }
    }
    setExpressions(all);
  };

  useEffect(() => {
    refresh();
    window.addEventListener("record-updated", refresh);
    return () => window.removeEventListener("record-updated", refresh);
  }, []);

  const grouped = useMemo(() => {
    const groups = {};
    for (const cat of CATEGORIES) groups[cat.key] = [];
    for (const expr of expressions) {
      const cat = categorize(expr.text);
      groups[cat].push(expr);
    }
    return groups;
  }, [expressions]);

  if (expressions.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center justify-between w-full text-left"
      >
        <h2 className="text-lg font-semibold text-gray-800">
          我的表达库（{expressions.length} 条）
        </h2>
        <svg className={"w-4 h-4 transition-transform text-gray-400 " + (show ? "rotate-90" : "")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {show && (
        <div className="mt-4 space-y-4">
          {CATEGORIES.map((cat) => {
            const items = grouped[cat.key];
            if (items.length === 0) return null;
            return (
              <div key={cat.key}>
                <span className="text-xs font-medium text-gray-500">{cat.label}（{items.length}）</span>
                <ul className="mt-1.5 space-y-1">
                  {items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700 pl-3 border-l-2 border-brand-200">
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
