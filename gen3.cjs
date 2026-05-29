const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "src", "data", "materials.js");
const out = src;

// NCE2 故事复述框架（统一模板池）
const nce2Patterns = [
  "This story is mainly about ...",
  "At the beginning, ...",
  "The problem started when ...",
  "What happened next was that ...",
  "In the end, ...",
  "What makes the story interesting is that ...",
  "If I were in this situation, I would ...",
];

// NCE3 观点总结框架（统一模板池）
const nce3Patterns = [
  "The passage mainly discusses ...",
  "The author seems to suggest that ...",
  "One key point is that ...",
  "Another important point is ...",
  "This example shows how ...",
  "What I find interesting is that ...",
  "From my point of view, ...",
  "This reminds me of ...",
];

// 为每课精选 4-6 条（轮换组合，避免千篇一律）
function pickPatterns(pool, lessonNum) {
  const total = pool.length;
  // 根据课次决定起始偏移和数量
  const start = lessonNum % total;
  const count = 5; // 每课5条
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(pool[(start + i) % total]);
  }
  return result;
}

function pickPatternsNce3(pool, lessonNum) {
  const total = pool.length;
  const start = (lessonNum * 3) % total;
  const count = 5;
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(pool[(start + i) % total]);
  }
  return result;
}

// NCE2 故事复述步骤
const nce2Steps = [
  "Step 1: 先说故事发生在哪里、涉及谁",
  "Step 2: 再说事情是如何开始的",
  "Step 3: 然后说冲突或转折是什么",
  "Step 4: 最后说结局和自己的看法",
];

// NCE3 观点总结步骤
const nce3Steps = [
  "Step 1: 先总结文章主旨",
  "Step 2: 再说 2 个关键观点",
  "Step 3: 提到一个例子或细节",
  "Step 4: 最后表达自己的观点，并联系学习或生活",
];

// 读取 materials.js
let content = fs.readFileSync(src, "utf8");

// 解析 nce2 数组：用正则提取 JSON 数组
const nce2Match = content.match(/const nce2 = (\[[\s\S]*?\]);/);
const nce3Match = content.match(/const nce3 = (\[[\s\S]*?\]);/);

if (!nce2Match || !nce3Match) {
  console.error("Could not parse materials.js");
  process.exit(1);
}

const nce2 = JSON.parse(nce2Match[1]);
const nce3 = JSON.parse(nce3Match[1]);

// 替换 sentencePatterns 和 outputSteps
for (const lesson of nce2) {
  lesson.sentencePatterns = pickPatterns(nce2Patterns, lesson.lesson);
  lesson.outputSteps = nce2Steps;
}

for (const lesson of nce3) {
  lesson.sentencePatterns = pickPatternsNce3(nce3Patterns, lesson.lesson);
  lesson.outputSteps = nce3Steps;
}

// 生成新的 materials.js
const newContent = `// ============================================================
// 新概念英语 2 & 3 课程元数据
// 仅包含：课次、标题、关键词、复述表达框架、复述任务、输出步骤
// 不含原文和音频（用户手动粘贴）
// sentencePatterns 已改为可迁移的口语表达框架
// outputSteps 根据 NCE2（故事复述）/ NCE3（观点总结）做了区分
// ============================================================

const nce2 = ${JSON.stringify(nce2, null, 2)};

const nce3 = ${JSON.stringify(nce3, null, 2)};

export function getAllLessons() {
  return { nce2, nce3 };
}

export function getLessonById(id) {
  return [...nce2, ...nce3].find((l) => l.id === id) || null;
}

export function getLessonsByBook(book) {
  return book === 2 ? nce2 : nce3;
}
`;

fs.writeFileSync(out, newContent, "utf8");
console.log("Updated materials.js:", nce2.length, "NCE2 +", nce3.length, "NCE3 lessons");
