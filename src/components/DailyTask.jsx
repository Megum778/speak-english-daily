import { useState, useEffect, useCallback } from "react";
import { getLessonsByBook } from "../data/materials";

const STORAGE_KEY = "nce-selected-lesson";
const TEXT_STORAGE_PREFIX = "nce-text-";

function loadSelectedLesson() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { book: 2, lessonId: "2-1" };
  } catch {
    return { book: 2, lessonId: "2-1" };
  }
}

function saveSelectedLesson(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadPastedText(lessonId) {
  try {
    return localStorage.getItem(TEXT_STORAGE_PREFIX + lessonId) || "";
  } catch {
    return "";
  }
}

function savePastedText(lessonId, text) {
  localStorage.setItem(TEXT_STORAGE_PREFIX + lessonId, text);
}

// 将 sentencePatterns 按类别分组
function categorizePatterns(patterns, book) {
  if (book === 2) {
    const basic = [];
    const conflict = [];
    const opinion = [];
    for (const p of patterns) {
      if (p.includes("mainly about") || p.includes("At the beginning") || p.includes("In the end")) {
        basic.push(p);
      } else if (p.includes("problem started") || p.includes("happened next")) {
        conflict.push(p);
      } else if (p.includes("makes the story") || p.includes("If I were")) {
        opinion.push(p);
      } else {
        basic.push(p);
      }
    }
    // 补充通用高级表达
    if (opinion.length < 2) opinion.push("What I learned from this story is that ...");
    if (conflict.length < 2) conflict.push("The turning point was when ...");
    if (basic.length < 2) basic.push("The story takes place in ...");
    return { basic, conflict, opinion };
  } else {
    const summary = [];
    const analysis = [];
    const opinion = [];
    for (const p of patterns) {
      if (p.includes("mainly discusses") || p.includes("One key point")) {
        summary.push(p);
      } else if (p.includes("author seems") || p.includes("Another important") || p.includes("example shows")) {
        analysis.push(p);
      } else if (p.includes("find interesting") || p.includes("From my point") || p.includes("reminds me")) {
        opinion.push(p);
      } else {
        analysis.push(p);
      }
    }
    if (summary.length < 2) summary.push("In summary, the key message of this passage is ...");
    if (analysis.length < 2) analysis.push("The evidence presented to support this is ...");
    if (opinion.length < 2) opinion.push("If I were to apply this idea in my own life, I would ...");
    return { summary, analysis, opinion };
  }
}

export default function DailyTask({ onMaterialChange }) {
  const [selected, setSelected] = useState(loadSelectedLesson);
  const [pastedText, setPastedText] = useState("");
  const [showTextArea, setShowTextArea] = useState(false);

  const book = selected.book;
  const lessons = getLessonsByBook(book);
  const currentLesson = lessons.find((l) => l.id === selected.lessonId) || lessons[0];

  const groups = currentLesson.sentencePatterns
    ? categorizePatterns(currentLesson.sentencePatterns, book)
    : null;

  const hasPastedText = pastedText.trim().length > 0;
  const textCharCount = pastedText.replace(/\s/g, "").length;

  // 同步 lesson 变化
  useEffect(() => {
    const realLesson = lessons.find((l) => l.id === selected.lessonId);
    if (!realLesson && lessons.length > 0) {
      const firstId = lessons[0].id;
      setSelected((prev) => ({ ...prev, lessonId: firstId }));
    }
  }, [book, selected.lessonId, lessons]);

  // 加载已粘贴文本，并根据是否有内容决定是否展开
  useEffect(() => {
    const text = loadPastedText(currentLesson.id);
    setPastedText(text);
    setShowTextArea(text.trim().length === 0);
  }, [currentLesson.id]);

  // 通知父组件
  useEffect(() => {
    if (onMaterialChange) {
      onMaterialChange({
        ...currentLesson,
        pastedText,
      });
    }
  }, [currentLesson, pastedText, onMaterialChange]);

  const handleBookChange = useCallback((newBook) => {
    const newLessons = getLessonsByBook(newBook);
    const firstId = newLessons[0]?.id || "";
    const next = { book: newBook, lessonId: firstId };
    setSelected(next);
    saveSelectedLesson(next);
  }, []);

  const handleLessonChange = useCallback((lessonId) => {
    const next = { ...selected, lessonId };
    setSelected(next);
    saveSelectedLesson(next);
  }, [selected]);

  const handleTextChange = useCallback((e) => {
    const text = e.target.value;
    setPastedText(text);
    savePastedText(currentLesson.id, text);
  }, [currentLesson.id]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">今日任务</h2>

      {/* 书本选择 */}
      <div className="flex gap-2 mb-4">
        {[2, 3].map((b) => (
          <button
            key={b}
            onClick={() => handleBookChange(b)}
            className={
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors " +
              (book === b
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200")
            }
          >
            新概念英语 第{b}册
          </button>
        ))}
      </div>

      {/* 课次选择 */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 mb-1.5">选择课次</label>
        <select
          value={selected.lessonId}
          onChange={(e) => handleLessonChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
        >
          {lessons.map((l) => (
            <option key={l.id} value={l.id}>
              Lesson {l.lesson}: {l.title}（{l.titleCn}）
            </option>
          ))}
        </select>
      </div>

      {/* 课文标题 */}
      <div className="mb-4 p-4 bg-brand-50 rounded-lg">
        <h3 className="text-base font-semibold text-brand-700">
          Lesson {currentLesson.lesson}: {currentLesson.title}
        </h3>
        <p className="text-sm text-brand-600 mt-0.5">{currentLesson.titleCn}</p>
      </div>

      {/* 今日口语目标 */}
      <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
        <span className="text-sm font-semibold text-green-800 block mb-2">
          今日口语目标
        </span>
        {book === 2 ? (
          <div className="text-sm text-green-800 space-y-1">
            <p>请用 <strong>45-60 秒</strong> 复述本课故事，并至少包含：</p>
            <ol className="list-decimal list-inside ml-2 space-y-0.5">
              <li>3 个关键词</li>
              <li>2 个复述表达框架</li>
              <li>1 句自己的看法</li>
            </ol>
          </div>
        ) : (
          <div className="text-sm text-green-800 space-y-1">
            <p>请用 <strong>60-90 秒</strong> 总结文章观点，并至少包含：</p>
            <ol className="list-decimal list-inside ml-2 space-y-0.5">
              <li>文章主旨</li>
              <li>2 个关键观点</li>
              <li>1 个例子或细节</li>
              <li>你的个人看法</li>
            </ol>
          </div>
        )}
      </div>

      {/* 原文粘贴区 */}
      <div className="mb-4">
        <button
          onClick={() => setShowTextArea(!showTextArea)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-600 transition-colors"
        >
          <svg className={"w-4 h-4 transition-transform " + (showTextArea ? "rotate-90" : "")} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {hasPastedText && !showTextArea
            ? "已保存原文摘录：" + textCharCount + " 字"
            : "粘贴课文原文（手动粘贴，应用不内置原文）"}
        </button>
        {showTextArea && (
          <textarea
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 mt-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            rows={6}
            value={pastedText}
            onChange={handleTextChange}
            placeholder={"请在此粘贴本课原文...\n\n（出于版权考虑，应用不内置课文原文）"}
          />
        )}
      </div>

      {/* 关键词 */}
      <div className="mb-4">
        <span className="text-xs text-gray-500 font-medium mr-2">关键词：</span>
        {currentLesson.keywords.map((kw) => (
          <span
            key={kw}
            className="inline-block mr-1.5 mb-1.5 px-2 py-0.5 text-xs rounded-full bg-brand-50 text-brand-700"
          >
            {kw}
          </span>
        ))}
      </div>

      {/* 复述表达框架（分组） */}
      {groups && (
        <div className="mb-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <span className="text-sm font-semibold text-amber-800 block mb-3">
            复述表达框架
          </span>

          {book === 2 ? (
            <div className="space-y-3">
              {/* 基础复述 */}
              {groups.basic.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-amber-600">1. 基础复述</span>
                  <ul className="mt-1 space-y-1">
                    {groups.basic.map((sp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 shrink-0">•</span>
                        <span className="text-sm text-amber-900">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* 冲突/转折 */}
              {groups.conflict.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-amber-600">2. 冲突 / 转折</span>
                  <ul className="mt-1 space-y-1">
                    {groups.conflict.map((sp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 shrink-0">•</span>
                        <span className="text-sm text-amber-900">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* 个人观点 */}
              {groups.opinion.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-amber-600">3. 个人观点</span>
                  <ul className="mt-1 space-y-1">
                    {groups.opinion.map((sp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 shrink-0">•</span>
                        <span className="text-sm text-amber-900">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {/* 主旨总结 */}
              {groups.summary.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-amber-600">1. 主旨总结</span>
                  <ul className="mt-1 space-y-1">
                    {groups.summary.map((sp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 shrink-0">•</span>
                        <span className="text-sm text-amber-900">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* 论点分析 */}
              {groups.analysis.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-amber-600">2. 论点分析</span>
                  <ul className="mt-1 space-y-1">
                    {groups.analysis.map((sp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 shrink-0">•</span>
                        <span className="text-sm text-amber-900">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* 个人观点 */}
              {groups.opinion.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-amber-600">3. 个人观点</span>
                  <ul className="mt-1 space-y-1">
                    {groups.opinion.map((sp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 shrink-0">•</span>
                        <span className="text-sm text-amber-900">{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <p className="mt-3 text-xs text-amber-600 border-t border-amber-200 pt-2">
            提示：请至少选择 2 个表达框架用于今天的录音。
          </p>
        </div>
      )}

      {/* 复述任务 */}
      <div className="mb-4 border-l-4 border-brand-500 pl-4 py-1">
        <span className="text-xs text-gray-500 font-medium block mb-1">复述任务：</span>
        <p className="text-sm text-gray-700">{currentLesson.retellingTask}</p>
      </div>

      {/* 输出步骤 */}
      <div className="p-3 bg-gray-50 rounded-lg">
        <span className="text-xs text-gray-500 font-medium block mb-2">输出步骤：</span>
        <ol className="list-decimal list-inside space-y-1">
          {currentLesson.outputSteps.map((s, i) => (
            <li key={i} className="text-sm text-gray-600">{s}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
