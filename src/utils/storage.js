const STORAGE_KEY = "speak-english-records";

// 使用本地时间生成 YYYY-MM-DD 格式的日期字符串
export function getLocalDateString(date) {
  const d = date || new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

export function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRecords(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
}

export function getTodayRecord() {
  const records = loadRecords();
  const today = getLocalDateString();
  return records.find((r) => r.date === today) || null;
}

export function saveTodayRecord(data) {
  const records = loadRecords();
  const today = getLocalDateString();
  const idx = records.findIndex((r) => r.date === today);
  const record = { ...data, date: today, updatedAt: new Date().toISOString() };

  if (idx >= 0) {
    records[idx] = record;
  } else {
    records.push(record);
  }
  saveRecords(records);
}

export function deleteRecord(date) {
  const records = loadRecords().filter((r) => r.date !== date);
  saveRecords(records);
}

export function clearAllRecords() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getRecentRecords(n = 7) {
  const records = loadRecords();
  return records
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, n);
}

export function getTotalDays() {
  return loadRecords().length;
}

export function getStreak() {
  const records = loadRecords();
  if (records.length === 0) return 0;

  const sorted = records
    .map((r) => r.date)
    .sort((a, b) => new Date(b) - new Date(a));

  const today = getLocalDateString();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = getLocalDateString(yesterdayDate);

  if (sorted[0] !== today && sorted[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);
    const diff = (prev - curr) / 86400000;
    if (diff === 1) {
      streak++;
    } else if (diff > 1) {
      break;
    }
  }
  return streak;
}

export function getWeeklyDuration() {
  const records = loadRecords();
  const now = new Date();
  const dayOfWeek = now.getDay();
  const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const monday = new Date(now);
  monday.setDate(now.getDate() - mondayOffset);
  monday.setHours(0, 0, 0, 0);

  return records
    .filter((r) => new Date(r.date) >= monday)
    .reduce((sum, r) => sum + (r.recordingDuration || 0), 0);
}

// ============ NCE 专项功能 ============

export function getCompletedLessonIds() {
  const records = loadRecords();
  return new Set(records.map((r) => r.lessonId).filter(Boolean));
}

export function getBookProgress(book) {
  const records = loadRecords();
  const lessonIds = new Set(
    records.filter((r) => r.book === book).map((r) => r.lessonId)
  );
  const total = book === 2 ? 96 : 60;
  return { completed: lessonIds.size, total };
}
