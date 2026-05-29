// ============================================================
// 新概念英语 2 & 3 课程元数据
// 仅包含：课次、标题、关键词、复述表达框架、复述任务、输出步骤
// 不含原文和音频（用户手动粘贴）
// sentencePatterns 已改为可迁移的口语表达框架
// outputSteps 根据 NCE2（故事复述）/ NCE3（观点总结）做了区分
// ============================================================

const nce2 = [
  {
    "id": "2-1",
    "book": 2,
    "lesson": 1,
    "title": "A Private Conversation",
    "titleCn": "私人谈话",
    "keywords": [
      "private",
      "conversation",
      "theatre",
      "play",
      "loudly",
      "angrily",
      "turn round",
      "bear"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：作者去剧院看戏的经历，以及他为何生气。注意使用过去时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-2",
    "book": 2,
    "lesson": 2,
    "title": "Breakfast or Lunch?",
    "titleCn": "早餐还是午餐？",
    "keywords": [
      "until",
      "breakfast",
      "lunch",
      "ring",
      "aunt",
      "repeat",
      "outside"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：叙述者星期天晚起的故事。注意频率副词和感叹句。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-3",
    "book": 2,
    "lesson": 3,
    "title": "Please Send Me a Card",
    "titleCn": "请给我寄一张明信片",
    "keywords": [
      "postcard",
      "spoil",
      "holiday",
      "museum",
      "friendly",
      "waiter",
      "lend"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：作者度假时写明信片的烦恼。使用一般过去时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-4",
    "book": 2,
    "lesson": 4,
    "title": "An Exciting Trip",
    "titleCn": "激动人心的旅行",
    "keywords": [
      "exciting",
      "receive",
      "letter",
      "firm",
      "abroad",
      "work for",
      "a great number of"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：Tim 的澳大利亚之行。注意现在完成时和现在进行时的使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-5",
    "book": 2,
    "lesson": 5,
    "title": "No Wrong Numbers",
    "titleCn": "无错号之虞",
    "keywords": [
      "pigeon",
      "message",
      "cover",
      "distance",
      "request",
      "spare part",
      "service"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：鸽子传信的故事。注意现在完成时的使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-6",
    "book": 2,
    "lesson": 6,
    "title": "Percy Buttons",
    "titleCn": "珀西·巴顿斯",
    "keywords": [
      "beggar",
      "knock",
      "ask for",
      "meal",
      "beer",
      "stand on his head",
      "call at"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：Percy Buttons 乞讨的奇特方式。注意冠词 a/an/the 的使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-7",
    "book": 2,
    "lesson": 7,
    "title": "Too Late",
    "titleCn": "为时太晚",
    "keywords": [
      "detective",
      "airport",
      "expect",
      "valuable",
      "parcel",
      "diamond",
      "steal",
      "guard"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：钻石被盗的故事。注意过去进行时的使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-8",
    "book": 2,
    "lesson": 8,
    "title": "The Best and the Worst",
    "titleCn": "最好的和最差的",
    "keywords": [
      "competition",
      "garden",
      "enter for",
      "neat",
      "path",
      "wooden",
      "prize"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：花园比赛的故事。注意形容词比较级和最高级。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-9",
    "book": 2,
    "lesson": 9,
    "title": "A Cold Welcome",
    "titleCn": "冷遇",
    "keywords": [
      "welcome",
      "crowd",
      "gather",
      "clock",
      "strike",
      "refuse",
      "shout",
      "laugh"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：新年夜钟声延迟的故事。注意时间表达法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-10",
    "book": 2,
    "lesson": 10,
    "title": "Not for Jazz",
    "titleCn": "不适于演奏爵士乐",
    "keywords": [
      "jazz",
      "musical instrument",
      "clavichord",
      "belong to",
      "damage",
      "shock",
      "allow"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：古钢琴被损坏的故事。注意被动语态的使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-11",
    "book": 2,
    "lesson": 11,
    "title": "One Good Turn Deserves Another",
    "titleCn": "礼尚往来",
    "keywords": [
      "turn",
      "deserve",
      "salary",
      "lend",
      "borrow",
      "lawyer",
      "bank",
      "pay back"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：Harry 借钱的故事。注意 lend 和 borrow 的区别。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-12",
    "book": 2,
    "lesson": 12,
    "title": "Goodbye and Good Luck",
    "titleCn": "再见，一路顺风",
    "keywords": [
      "luck",
      "sail",
      "harbour",
      "set out",
      "plenty of",
      "important",
      "take part in"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：送别船长 Charles 的故事。注意一般将来时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-13",
    "book": 2,
    "lesson": 13,
    "title": "The Greenwood Boys",
    "titleCn": "绿林少年",
    "keywords": [
      "group",
      "pop singers",
      "performance",
      "give",
      "at present",
      "arrive",
      "most of"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：Greenwood Boys 巡回演出的故事。注意将来进行时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-14",
    "book": 2,
    "lesson": 14,
    "title": "Do You Speak English?",
    "titleCn": "你会讲英语吗？",
    "keywords": [
      "amusing",
      "experience",
      "wave",
      "lift",
      "reply",
      "language",
      "journey",
      "apart from"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：作者在法国搭便车的故事。注意过去完成时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-15",
    "book": 2,
    "lesson": 15,
    "title": "Good News",
    "titleCn": "佳音",
    "keywords": [
      "secretary",
      "nervous",
      "business",
      "turn",
      "extra",
      "interrupt",
      "look up"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：老板谈话的故事。注意间接引语的使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-16",
    "book": 2,
    "lesson": 16,
    "title": "A Polite Request",
    "titleCn": "彬彬有礼的要求",
    "keywords": [
      "park",
      "traffic",
      "polite",
      "note",
      "reminder",
      "obey",
      "sign",
      "fail"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：违章停车的幽默故事。注意条件句。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-17",
    "book": 2,
    "lesson": 17,
    "title": "Always Young",
    "titleCn": "青春常驻",
    "keywords": [
      "appear",
      "stage",
      "actress",
      "bright",
      "stocking",
      "sock",
      "in spite of",
      "take part in"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：女演员扮年轻的故事。注意 must be 表推测的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-18",
    "book": 2,
    "lesson": 18,
    "title": "He Often Does This!",
    "titleCn": "他经常干这种事！",
    "keywords": [
      "pub",
      "lunch",
      "look for",
      "bill",
      "take",
      "pay",
      "regret"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：小狗藏包的有趣故事。注意过去完成时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-19",
    "book": 2,
    "lesson": 19,
    "title": "Sold Out",
    "titleCn": "票已售完",
    "keywords": [
      "hurry",
      "ticket office",
      "pity",
      "exclaim",
      "return",
      "sadly",
      "at once"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：买票的故事。注意 may/might 的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-20",
    "book": 2,
    "lesson": 20,
    "title": "One Man in a Boat",
    "titleCn": "独坐孤舟",
    "keywords": [
      "catch",
      "fisherman",
      "spend",
      "interested in",
      "give up",
      "instead of",
      "waste"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：钓鱼的乐趣。注意动名词作主语。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-21",
    "book": 2,
    "lesson": 21,
    "title": "Mad or Not?",
    "titleCn": "是不是疯了？",
    "keywords": [
      "mad",
      "reason",
      "sum",
      "determined",
      "noise",
      "drive",
      "passing planes"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：机场附近居民的故事。注意被动语态。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-22",
    "book": 2,
    "lesson": 22,
    "title": "A Glass Envelope",
    "titleCn": "玻璃信封",
    "keywords": [
      "envelope",
      "dream",
      "travelling",
      "age",
      "channel",
      "throw",
      "regularly",
      "decide"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：漂流瓶笔友的浪漫故事。注意介词搭配。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-23",
    "book": 2,
    "lesson": 23,
    "title": "A New House",
    "titleCn": "新居",
    "keywords": [
      "complete",
      "modern",
      "strange",
      "district",
      "get a surprise",
      "work on"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：新房子和旧房子的对比。注意将来时和 there be 句型。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-24",
    "book": 2,
    "lesson": 24,
    "title": "It Could Be Worse",
    "titleCn": "不幸中之万幸",
    "keywords": [
      "manager",
      "upset",
      "complain",
      "contain",
      "honesty",
      "wicked",
      "sympathetic"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：丢钱又找回的故事。注意直接引语和间接引语的混用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-25",
    "book": 2,
    "lesson": 25,
    "title": "Do the English Speak English?",
    "titleCn": "英国人讲的是英语吗？",
    "keywords": [
      "railway",
      "station",
      "porter",
      "foreigner",
      "wonder",
      "arrive in",
      "clearly"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：初到伦敦的语言困惑。注意并列句的连接词。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-26",
    "book": 2,
    "lesson": 26,
    "title": "The Best Art Critics",
    "titleCn": "最佳艺术评论家",
    "keywords": [
      "art",
      "critic",
      "paint",
      "pretend",
      "pattern",
      "curtain",
      "appreciate",
      "notice"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：关于艺术评论的幽默故事。注意一般现在时的使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-27",
    "book": 2,
    "lesson": 27,
    "title": "A Wet Night",
    "titleCn": "雨夜",
    "keywords": [
      "tent",
      "field",
      "camping",
      "put up",
      "cook",
      "campfire",
      "creep",
      "soundly"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：露营遇雨的趣事。注意一系列过去动作的连贯叙述。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-28",
    "book": 2,
    "lesson": 28,
    "title": "No Parking",
    "titleCn": "禁止停车",
    "keywords": [
      "rare",
      "ancient",
      "myth",
      "trouble",
      "effect",
      "Medusa",
      "turn to",
      "ugly"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：Jasper White 和停车问题的故事。注意现在完成时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-29",
    "book": 2,
    "lesson": 29,
    "title": "Taxi!",
    "titleCn": "出租汽车！",
    "keywords": [
      "taxi",
      "land",
      "plough",
      "lonely",
      "on another occasion",
      "refuse",
      "request",
      "roof"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：直升机的士的故事。注意现在完成时描述经历。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-30",
    "book": 2,
    "lesson": 30,
    "title": "Football or Polo?",
    "titleCn": "足球还是水球？",
    "keywords": [
      "polo",
      "kick",
      "towards",
      "nearly",
      "sight",
      "cut",
      "row",
      "in sight"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：河边踢球落水的趣事。注意过去进行时与一般过去时的交替使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-31",
    "book": 2,
    "lesson": 31,
    "title": "Success Story",
    "titleCn": "成功者的故事",
    "keywords": [
      "retire",
      "save",
      "workshop",
      "helper",
      "employ",
      "grandson",
      "success",
      "of his own"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：Frank Hawkins 的创业故事。注意 used to 的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-32",
    "book": 2,
    "lesson": 32,
    "title": "Shopping Made Easy",
    "titleCn": "购物变得很方便",
    "keywords": [
      "once a week",
      "temptation",
      "article",
      "wrap",
      "simply",
      "arrest",
      "dishonest",
      "hand over"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：超市偷窃的故事。注意比较级（as...as, -er than）。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-33",
    "book": 2,
    "lesson": 33,
    "title": "Out of the Darkness",
    "titleCn": "冲出黑暗",
    "keywords": [
      "darkness",
      "explain",
      "storm",
      "rock",
      "shore",
      "light",
      "struggle",
      "hospital"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：海中漂流的经历。注意时间状语从句（before/after/when）。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-34",
    "book": 2,
    "lesson": 34,
    "title": "Quick Work",
    "titleCn": "破案神速",
    "keywords": [
      "station",
      "most",
      "expect",
      "steal",
      "pick up",
      "local",
      "call at",
      "worry"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：自行车被盗又找回的乌龙故事。注意被动语态的现在完成时和进行时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-35",
    "book": 2,
    "lesson": 35,
    "title": "Stop Thief!",
    "titleCn": "捉贼！",
    "keywords": [
      "thief",
      "rush",
      "act",
      "regret",
      "fright",
      "battered",
      "afterwards",
      "recognize"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：出租车司机勇擒小偷的故事。注意 used to 和 be finding 的对比。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-36",
    "book": 2,
    "lesson": 36,
    "title": "Across the Channel",
    "titleCn": "横渡海峡",
    "keywords": [
      "channel",
      "swim",
      "record",
      "strong",
      "succeed",
      "train",
      "anxiously",
      "intend"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：横渡英吉利海峡的故事。注意 be going to 表将来计划。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-37",
    "book": 2,
    "lesson": 37,
    "title": "The Olympic Games",
    "titleCn": "奥林匹克运动会",
    "keywords": [
      "Olympic",
      "hold",
      "immense",
      "stadium",
      "standard",
      "athlete",
      "by the end of",
      "complete"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：奥运会筹备的故事。注意将来完成时 will have done。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-38",
    "book": 2,
    "lesson": 38,
    "title": "Everything Except the Weather",
    "titleCn": "唯独没有考虑到天气",
    "keywords": [
      "except",
      "Mediterranean",
      "complain",
      "continually",
      "bitterly",
      "sunshine",
      "settle down",
      "dream of"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：退休回英国却受不了天气的故事。注意 no sooner...than 和过去完成时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-39",
    "book": 2,
    "lesson": 39,
    "title": "Am I All Right?",
    "titleCn": "我是否痊愈？",
    "keywords": [
      "operation",
      "successful",
      "patient",
      "exchange",
      "inquire",
      "relative",
      "refuse",
      "allow"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：探病问话的幽默故事。注意间接引语的疑问句形式。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-40",
    "book": 2,
    "lesson": 40,
    "title": "Food and Talk",
    "titleCn": "进餐与交谈",
    "keywords": [
      "hostess",
      "fix",
      "globe",
      "despair",
      "unsmiling",
      "tight",
      "next to",
      "look up"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：晚宴上的尴尬对话。注意虚拟条件句 if...would。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-41",
    "book": 2,
    "lesson": 41,
    "title": "Do You Call That a Hat?",
    "titleCn": "你把那个叫帽子吗？",
    "keywords": [
      "rude",
      "hat",
      "mirror",
      "remark",
      "remind",
      "lighthouse",
      "needn't"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：夫妇关于帽子的幽默对话。注意 needn't 和 needn't have done 的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-42",
    "book": 2,
    "lesson": 42,
    "title": "Not Very Musical",
    "titleCn": "并非很懂音乐",
    "keywords": [
      "musical",
      "snake",
      "charmer",
      "market",
      "tune",
      "glimpse",
      "movement",
      "continue"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：耍蛇人的故事。注意感官动词 watch/see + 宾语 + 动词原形/现在分词。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-43",
    "book": 2,
    "lesson": 43,
    "title": "Over the South Pole",
    "titleCn": "飞越南极",
    "keywords": [
      "pole",
      "flight",
      "explorer",
      "crash",
      "clear",
      "aircraft",
      "endless",
      "plain"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：飞越南极的探险故事。注意 can/could 表示能力和可能性。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-44",
    "book": 2,
    "lesson": 44,
    "title": "Through the Forest",
    "titleCn": "穿过森林",
    "keywords": [
      "forest",
      "risk",
      "picnic",
      "edge",
      "strap",
      "possession",
      "breath",
      "up to"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：森林追凶的故事。注意动词-ing 和动词不定式的使用。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-45",
    "book": 2,
    "lesson": 45,
    "title": "A Clear Conscience",
    "titleCn": "问心无愧",
    "keywords": [
      "conscience",
      "wallet",
      "savings",
      "villager",
      "per cent",
      "contain",
      "wrap up",
      "thief"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：钱包失而复得的道德故事。注意被动语态与 must have been 表推测。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-46",
    "book": 2,
    "lesson": 46,
    "title": "Expensive and Uncomfortable",
    "titleCn": "既昂贵又受罪",
    "keywords": [
      "unload",
      "wooden",
      "extremely",
      "discover",
      "admit",
      "confine",
      "normal",
      "occur to"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：偷渡客被发现的故事。注意 account for 和 occur to 的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-47",
    "book": 2,
    "lesson": 47,
    "title": "A Thirsty Ghost",
    "titleCn": "嗜酒的鬼魂",
    "keywords": [
      "thirsty",
      "ghost",
      "haunt",
      "block",
      "furniture",
      "whisky",
      "suggest",
      "shake"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：鬼魂喝酒的灵异故事。注意定语从句和 must have done。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-48",
    "book": 2,
    "lesson": 48,
    "title": "Did You Want to Tell Me Something?",
    "titleCn": "你想对我说什么吗？",
    "keywords": [
      "dentist",
      "pull",
      "cotton wool",
      "collect",
      "nod",
      "meanwhile",
      "remove",
      "search out"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：看牙医的尴尬经历。注意 when 引导的时间状语从句。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-49",
    "book": 2,
    "lesson": 49,
    "title": "The End of a Dream",
    "titleCn": "美梦告终",
    "keywords": [
      "dream",
      "roof",
      "hammock",
      "crash",
      "spring",
      "mattress",
      "gust",
      "sweep"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：屋顶床被风吹落的荒诞故事。注意过去分词短语作状语。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-50",
    "book": 2,
    "lesson": 50,
    "title": "Taken for a Ride",
    "titleCn": "乘车兜风",
    "keywords": [
      "ride",
      "excursion",
      "conductor",
      "view",
      "lose one's way",
      "realize",
      "as far as",
      "prefer"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：坐过站的乘车故事。注意 where to go / where to get off 结构。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-51",
    "book": 2,
    "lesson": 51,
    "title": "Reward for Virtue",
    "titleCn": "对美德的奖赏",
    "keywords": [
      "reward",
      "virtue",
      "diet",
      "forbid",
      "strict",
      "occasionally",
      "pay a visit",
      "embarrass"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：节食失败的幽默故事。注意一般过去时叙述事件。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-52",
    "book": 2,
    "lesson": 52,
    "title": "A Pretty Carpet",
    "titleCn": "漂亮的地毯",
    "keywords": [
      "carpet",
      "temporarily",
      "inch",
      "space",
      "actually",
      "gaze at",
      "add",
      "get in order"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：整理书房的故事。注意现在完成进行时 have been doing。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-53",
    "book": 2,
    "lesson": 53,
    "title": "Hot Snake",
    "titleCn": "触电的蛇",
    "keywords": [
      "hot",
      "snake",
      "cause",
      "examine",
      "accidentally",
      "remains",
      "wind",
      "solve"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：蛇引发森林火灾的奇异故事。注意过去完成进行时 had been trying。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-54",
    "book": 2,
    "lesson": 54,
    "title": "Sticky Fingers",
    "titleCn": "粘糊的手指",
    "keywords": [
      "sticky",
      "fingers",
      "pastry",
      "annoying",
      "dismay",
      "sign",
      "hang up",
      "mix"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：做糕点被打扰的烦恼。注意 as...as 比较句型。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-55",
    "book": 2,
    "lesson": 55,
    "title": "Not a Gold Mine",
    "titleCn": "并非金矿",
    "keywords": [
      "gold",
      "mine",
      "treasure",
      "reveal",
      "search",
      "worthless",
      "disappointed",
      "value"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：寻宝的故事。注意 used to 与 be used to 的区别。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-56",
    "book": 2,
    "lesson": 56,
    "title": "Faster Than Sound!",
    "titleCn": "比声音还快！",
    "keywords": [
      "sound",
      "race",
      "explosion",
      "course",
      "rival",
      "speed",
      "downhill",
      "average"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：老爷车比赛的故事。注意比较级和不同时态的转换。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-57",
    "book": 2,
    "lesson": 57,
    "title": "Can I Help You, Madam?",
    "titleCn": "你要买什么，夫人？",
    "keywords": [
      "madam",
      "jeans",
      "hesitate",
      "serve",
      "scornfully",
      "punish",
      "fur",
      "eager"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：被冷落后报复的购物故事。注意 enjoy + 动名词结构。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-58",
    "book": -56,
    "lesson": "A Blessing in Disguise?",
    "title": "是因祸得福吗？",
    "titleCn": [
      "blessing",
      "disguise",
      "tiny",
      "possess",
      "claim",
      "evil",
      "reputation",
      "victim"
    ],
    "keywords": [
      "This story is about a tree that has a strange reputation.",
      "In a tiny village, there is a tree said to be cursed.",
      "Although the tree has an evil reputation, something unusual happens.",
      "People who touch or damage the tree are said to have good luck.",
      "This story makes me think about how superstitions can twist our thinking."
    ],
    "sentencePatterns": [
      null,
      null,
      null,
      null,
      null
    ],
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-59",
    "book": 2,
    "lesson": 59,
    "title": "In or Out?",
    "titleCn": "进来还是出去？",
    "keywords": [
      "bark",
      "press",
      "paw",
      "patch",
      "expert",
      "develop",
      "habit",
      "remove"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：Rex 小狗开门的故事。注意 used to 和现在完成时的对比。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-60",
    "book": 2,
    "lesson": 60,
    "title": "The Future",
    "titleCn": "未来",
    "keywords": [
      "future",
      "fair",
      "fortune-teller",
      "crystal",
      "relation",
      "impatiently",
      "intend",
      "forget"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：算命的有趣故事。注意间接引语和 the moment 引导的时间状语从句。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-61",
    "book": 2,
    "lesson": 61,
    "title": "Trouble with the Hubble",
    "titleCn": "哈勃望远镜的困境",
    "keywords": [
      "Hubble",
      "telescope",
      "launch",
      "billion",
      "faulty",
      "astronaut",
      "shuttle",
      "distant"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：哈勃望远镜的故事。注意将来时的被动语态 will be done。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-62",
    "book": 2,
    "lesson": 62,
    "title": "After the Fire",
    "titleCn": "大火之后",
    "keywords": [
      "fire",
      "control",
      "smoke",
      "desolate",
      "threaten",
      "surrounding",
      "destruction",
      "flood"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：森林大火后的恢复故事。注意过去完成进行时和被动语态。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-63",
    "book": 2,
    "lesson": 63,
    "title": "She Was Not Amused",
    "titleCn": "她并不觉得好笑",
    "keywords": [
      "amused",
      "circle",
      "praise",
      "sense of humour",
      "wedding",
      "reception",
      "speech",
      "disappointed"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：婚礼演讲的尴尬故事。注意间接引语的转述。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-64",
    "book": 2,
    "lesson": 64,
    "title": "The Channel Tunnel",
    "titleCn": "海峡隧道",
    "keywords": [
      "tunnel",
      "channel",
      "connect",
      "ventilate",
      "chimney",
      "fear",
      "invasion",
      "officially"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：英吉利海峡隧道的历史。注意虚拟语气 if...had done...would have done。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-65",
    "book": 2,
    "lesson": 65,
    "title": "Jumbo versus the Police",
    "titleCn": "小象对警察",
    "keywords": [
      "Jumbo",
      "circus",
      "approach",
      "fortunate",
      "weigh",
      "let off",
      "set off",
      "hold up"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：小象过街引起交通堵塞的故事。注意 should have known 表责备。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-66",
    "book": 2,
    "lesson": 66,
    "title": "Sweet as Honey!",
    "titleCn": "像蜜一样甜！",
    "keywords": [
      "honey",
      "bomber",
      "remote",
      "damage",
      "wreck",
      "rediscover",
      "aerial",
      "rescue"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：二战飞机被发现并修复的故事。注意被动语态的各种时态。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-67",
    "book": 2,
    "lesson": 67,
    "title": "Volcanoes",
    "titleCn": "火山",
    "keywords": [
      "volcano",
      "active",
      "erupt",
      "violently",
      "manage",
      "brilliant",
      "liquid",
      "escape"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：火山学家的冒险故事。注意现在完成时 has spent 和 manage to do。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-68",
    "book": 2,
    "lesson": 68,
    "title": "Persistent",
    "titleCn": "纠缠不休",
    "keywords": [
      "persistent",
      "avoid",
      "insist",
      "pretend",
      "prevent",
      "fancy",
      "cross the street",
      "no matter how"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：如何躲避一个烦人的朋友。注意 avoid/prevent/insist on 等后接动名词的动词。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-69",
    "book": 2,
    "lesson": 69,
    "title": "But Not Murder!",
    "titleCn": "并非谋杀！",
    "keywords": [
      "murder",
      "instruct",
      "acquire",
      "confidence",
      "examiner",
      "suppose",
      "tap",
      "brake"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：驾照考试的有趣故事。注意过去进行时的被动语态 was being tested。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-70",
    "book": 2,
    "lesson": 70,
    "title": "Red for Danger",
    "titleCn": "危险的红色",
    "keywords": [
      "bullfight",
      "drunk",
      "ring",
      "unaware",
      "matador",
      "remark",
      "apparently",
      "criticism"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：醉汉闯斗牛场的荒诞故事。注意 apparently 的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-71",
    "book": 2,
    "lesson": 71,
    "title": "A Famous Clock",
    "titleCn": "一个著名的大钟",
    "keywords": [
      "clock",
      "Big Ben",
      "accurate",
      "official",
      "observe",
      "check",
      "erect",
      "responsible for"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：大本钟的故事。注意 not only...but...as well 的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-72",
    "book": 2,
    "lesson": 72,
    "title": "A Car Called Bluebird",
    "titleCn": "蓝鸟汽车",
    "keywords": [
      "racing",
      "per",
      "burst",
      "average",
      "footstep",
      "speed",
      "record",
      "disappointment"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：Bluebird 赛车的故事。注意数字和度量的英语表达。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-73",
    "book": 2,
    "lesson": 73,
    "title": "The Record-Holder",
    "titleCn": "纪录保持者",
    "keywords": [
      "record-holder",
      "truant",
      "unimaginative",
      "shame",
      "hitchhike",
      "meantime",
      "lorry",
      "border"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：旷课旅行纪录的故事。注意现在完成时和一般过去时的切换。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-74",
    "book": 2,
    "lesson": 74,
    "title": "Out of the Limelight",
    "titleCn": "舞台之外",
    "keywords": [
      "limelight",
      "precaution",
      "fan",
      "shady",
      "sheriff",
      "sneer",
      "perfect",
      "disguise"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：明星躲避粉丝的故事。注意否定比较级 couldn't be better。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-75",
    "book": 2,
    "lesson": 75,
    "title": "SOS",
    "titleCn": "呼救信号",
    "keywords": [
      "SOS",
      "thick",
      "signal",
      "stamp",
      "helicopter",
      "scene",
      "survivor",
      "crash"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：空难求救的故事。注意 not until 的强调句型。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-76",
    "book": 2,
    "lesson": 76,
    "title": "April Fools' Day",
    "titleCn": "愚人节",
    "keywords": [
      "fool",
      "april",
      "harvest",
      "thresh",
      "process",
      "present",
      "champion",
      "studio"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：意大利面条树愚人节恶作剧。注意新闻播报风格的正式表达。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-77",
    "book": 2,
    "lesson": 77,
    "title": "A Successful Operation",
    "titleCn": "一例成功的手术",
    "keywords": [
      "mummy",
      "Egyptian",
      "temple",
      "mark",
      "plate",
      "disease",
      "prove",
      "resin"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：木乃伊手术的医学考古故事。注意现在完成时与现在完成进行时。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-78",
    "book": 2,
    "lesson": 78,
    "title": "The Last One?",
    "titleCn": "最后一枝吗？",
    "keywords": [
      "entitle",
      "calm",
      "nerve",
      "concentration",
      "suffer",
      "symptom",
      "temper",
      "urge"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：戒烟的挣扎。注意 make no effort to do 等表达。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-79",
    "book": 2,
    "lesson": 79,
    "title": "By Air",
    "titleCn": "乘飞机",
    "keywords": [
      "parent",
      "flight attendant",
      "frightened",
      "curious",
      "shut",
      "gain",
      "height",
      "touch down"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：童年飞行恐惧的故事。注意 only 开头的倒装句。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-80",
    "book": 2,
    "lesson": 80,
    "title": "The Crystal Palace",
    "titleCn": "水晶宫",
    "keywords": [
      "crystal",
      "palace",
      "extraordinary",
      "exhibition",
      "iron",
      "profit",
      "remain",
      "burn down"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：水晶宫的故事。注意最高级和被动语态的结合。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-81",
    "book": 2,
    "lesson": 81,
    "title": "Escape",
    "titleCn": "脱逃",
    "keywords": [
      "escape",
      "prisoner",
      "rifle",
      "boldly",
      "blaze",
      "elderly",
      "grey",
      "shoulder"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：战俘逃跑的故事。注意过去完成时和一般过去时的顺序关系。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-82",
    "book": 2,
    "lesson": 82,
    "title": "Monster or Fish?",
    "titleCn": "是妖还是鱼？",
    "keywords": [
      "monster",
      "fisherman",
      "sailor",
      "creature",
      "peculiar",
      "shining",
      "oarfish",
      "claim"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：海怪传说与真实生物的故事。注意 claim to have done 结构。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-83",
    "book": 2,
    "lesson": 83,
    "title": "After the Elections",
    "titleCn": "大选之后",
    "keywords": [
      "election",
      "former",
      "defeat",
      "fanatical",
      "opponent",
      "radical",
      "progressive",
      "suspicious"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：大选后的政治故事。注意现在完成时与现在进行时的语境切换。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-84",
    "book": 2,
    "lesson": 84,
    "title": "On Strike",
    "titleCn": "罢工",
    "keywords": [
      "strike",
      "busman",
      "volunteer",
      "express",
      "agreement",
      "relieve",
      "pressure",
      "to some extent"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：公交罢工的故事。注意 be due to 和 to some extent。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-85",
    "book": 2,
    "lesson": 85,
    "title": "Never Too Old to Learn",
    "titleCn": "活到老学到老",
    "keywords": [
      "inform",
      "headmaster",
      "contribute",
      "gift",
      "album",
      "patience",
      "retirement",
      "farewell"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：老校长退休和学生的祝福。注意 shall 的第一人称将来时用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-86",
    "book": 2,
    "lesson": 86,
    "title": "Out of Control",
    "titleCn": "失控",
    "keywords": [
      "out of control",
      "swing",
      "speedboat",
      "desperately",
      "companion",
      "water ski",
      "buoy",
      "dismay"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：快艇失控的惊险故事。注意 hardly...when 结构。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-87",
    "book": 2,
    "lesson": 87,
    "title": "A Perfect Alibi",
    "titleCn": "极好的不在犯罪现场的证据",
    "keywords": [
      "alibi",
      "commit",
      "inspector",
      "employer",
      "confirm",
      "suggest",
      "truth",
      "suspect"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：谋杀案不在场证明的侦探故事。注意间接引语中时态的一致。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-88",
    "book": 2,
    "lesson": 88,
    "title": "Trapped in a Mine",
    "titleCn": "困在矿井里",
    "keywords": [
      "trap",
      "mine",
      "surface",
      "drill",
      "capsule",
      "layer",
      "beneath",
      "enable"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：矿难救援的故事。注意真实条件句 if...may...。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-89",
    "book": 2,
    "lesson": 89,
    "title": "A Slip of the Tongue",
    "titleCn": "口误",
    "keywords": [
      "slip of the tongue",
      "comedy",
      "queue",
      "advertise",
      "awkward",
      "disappoint",
      "artist",
      "free"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：免费演出广告引发口误的幽默故事。注意 must have done 表推测。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-90",
    "book": 2,
    "lesson": 90,
    "title": "What's for Supper?",
    "titleCn": "晚餐吃什么？",
    "keywords": [
      "supper",
      "chip",
      "overfish",
      "giant",
      "terrify",
      "diver",
      "oil rig",
      "cage"
    ],
    "sentencePatterns": [
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ..."
    ],
    "retellingTask": "请用英语复述：北海渔业的生态故事。注意 have sth done 结构。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-91",
    "book": 2,
    "lesson": 91,
    "title": "Three Men in a Basket",
    "titleCn": "三人同篮",
    "keywords": [
      "balloon",
      "pilot",
      "royal",
      "spy",
      "binoculars",
      "track",
      "make out",
      "descend"
    ],
    "sentencePatterns": [
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ..."
    ],
    "retellingTask": "请用英语复述：神秘热气球的故事。注意 make for 和 make out 等短语动词。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-92",
    "book": 2,
    "lesson": 92,
    "title": "Asking for Trouble",
    "titleCn": "自找麻烦",
    "keywords": [
      "ask for trouble",
      "fast asleep",
      "ladder",
      "shed",
      "sarcastic",
      "tone",
      "disturb",
      "immediately"
    ],
    "sentencePatterns": [
      "At the beginning, ...",
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ..."
    ],
    "retellingTask": "请用英语复述：深夜爬墙被误会的尴尬故事。注意 regret doing 的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-93",
    "book": 2,
    "lesson": 93,
    "title": "A Noble Gift",
    "titleCn": "崇高的礼物",
    "keywords": [
      "noble",
      "gift",
      "statue",
      "liberty",
      "sculptor",
      "site",
      "pedestal",
      "symbol"
    ],
    "sentencePatterns": [
      "The problem started when ...",
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ..."
    ],
    "retellingTask": "请用英语复述：自由女神像的故事。注意被动语态和同位语结构。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-94",
    "book": 2,
    "lesson": 94,
    "title": "Future Champions",
    "titleCn": "未来的冠军",
    "keywords": [
      "champion",
      "instruct",
      "reluctant",
      "weight",
      "underwater",
      "tricycle",
      "compete",
      "gasp"
    ],
    "sentencePatterns": [
      "What happened next was that ...",
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ..."
    ],
    "retellingTask": "请用英语复述：婴儿游泳训练的故事。注意 whether 引导的主语从句。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-95",
    "book": 2,
    "lesson": 95,
    "title": "A Fantasy",
    "titleCn": "纯属虚构",
    "keywords": [
      "fantasy",
      "ambassador",
      "frightful",
      "fire extinguisher",
      "embassy",
      "heaven",
      "definitely",
      "post"
    ],
    "sentencePatterns": [
      "In the end, ...",
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ..."
    ],
    "retellingTask": "请用英语复述：大使馆着火灭火的夸张幽默故事。注意疑问句中 get into such a mess 的用法。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  },
  {
    "id": "2-96",
    "book": 2,
    "lesson": 96,
    "title": "The Dead Return",
    "titleCn": "亡灵返乡",
    "keywords": [
      "dead",
      "festival",
      "lantern",
      "spectacle",
      "drift",
      "guide",
      "expect",
      "all night long"
    ],
    "sentencePatterns": [
      "What makes the story interesting is that ...",
      "If I were in this situation, I would ...",
      "This story is mainly about ...",
      "At the beginning, ...",
      "The problem started when ..."
    ],
    "retellingTask": "请用英语复述：日本亡灵节的故事。注意被动语态和主语补足语。",
    "outputSteps": [
      "Step 1: 先说故事发生在哪里、涉及谁",
      "Step 2: 再说事情是如何开始的",
      "Step 3: 然后说冲突或转折是什么",
      "Step 4: 最后说结局和自己的看法"
    ]
  }
];

const nce3 = [
  {
    "id": "3-1",
    "book": 3,
    "lesson": 1,
    "title": "A Puma at Large",
    "titleCn": "逃遁的美洲狮",
    "keywords": [
      "puma",
      "at large",
      "spot",
      "accumulate",
      "oblige",
      "corner",
      "cling to",
      "disturbing"
    ],
    "sentencePatterns": [
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ..."
    ],
    "retellingTask": "请用英语复述：伦敦郊区出现美洲狮的新闻事件。注意 wherever 引导的让步状语从句。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-2",
    "book": 3,
    "lesson": 2,
    "title": "Thirteen Equals One",
    "titleCn": "十三等于一",
    "keywords": [
      "equal",
      "vicar",
      "raise",
      "torchlight",
      "strike",
      "grocer",
      "figure",
      "start"
    ],
    "sentencePatterns": [
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ..."
    ],
    "retellingTask": "请用英语复述：牧师修钟的幽默故事。注意 is always doing 表反复动作。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-3",
    "book": 3,
    "lesson": 3,
    "title": "An Unknown Goddess",
    "titleCn": "无名女神",
    "keywords": [
      "goddess",
      "archaeologist",
      "Aegean",
      "explore",
      "prosperous",
      "storey",
      "sacred",
      "fragment"
    ],
    "sentencePatterns": [
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ..."
    ],
    "retellingTask": "请用英语复述：爱琴海考古发现的故事。注意 must have been 表过去推测。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-4",
    "book": 3,
    "lesson": 4,
    "title": "The Double Life of Alfred Bloggs",
    "titleCn": "阿尔弗雷德·布洛格斯的双重生活",
    "keywords": [
      "double life",
      "manual",
      "collar",
      "sacrifice",
      "privilege",
      "status",
      "fellow",
      "embarrassed"
    ],
    "sentencePatterns": [
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ..."
    ],
    "retellingTask": "请用英语复述：白领与蓝领工资倒挂的社会现象故事。注意 far more...than 比较级和 as much as 结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-5",
    "book": 3,
    "lesson": 5,
    "title": "The Facts",
    "titleCn": "确切数字",
    "keywords": [
      "editor",
      "extreme",
      "statistics",
      "republic",
      "president",
      "palace",
      "imprison",
      "publish"
    ],
    "sentencePatterns": [
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ..."
    ],
    "retellingTask": "请用英语复述：新闻记者追求事实的荒诞故事。注意过去完成时的被动语态。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-6",
    "book": 3,
    "lesson": 6,
    "title": "Smash-and-Grab",
    "titleCn": "砸橱窗抢劫",
    "keywords": [
      "smash-and-grab",
      "arcade",
      "jewellery",
      "necklace",
      "ring",
      "background",
      "scramble",
      "worth"
    ],
    "sentencePatterns": [
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ..."
    ],
    "retellingTask": "请用英语复述：珠宝店砸窗抢劫的新闻故事。注意动词过去式的生动使用。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-7",
    "book": 3,
    "lesson": 7,
    "title": "Mutilated Ladies",
    "titleCn": "残钞鉴别组",
    "keywords": [
      "mutilated",
      "banknote",
      "safekeeping",
      "identify",
      "spokeswoman",
      "dismay",
      "rescue",
      "claim"
    ],
    "sentencePatterns": [
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ..."
    ],
    "retellingTask": "请用英语复述：残损钞票兑换的故事。注意 It is not unusual for...to do 的正式表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-8",
    "book": 3,
    "lesson": 8,
    "title": "A Famous Monastery",
    "titleCn": "著名的修道院",
    "keywords": [
      "monastery",
      "St. Bernard",
      "pass",
      "found",
      "watchdog",
      "rashly",
      "enclosure",
      "privacy"
    ],
    "sentencePatterns": [
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ..."
    ],
    "retellingTask": "请用英语复述：圣伯纳德修道院和救援犬的故事。注意 Despite 引导的让步状语。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-9",
    "book": 3,
    "lesson": 9,
    "title": "Flying Cats",
    "titleCn": "飞猫",
    "keywords": [
      "cat",
      "fascinate",
      "affectionate",
      "mysterious",
      "submissive",
      "paratrooper",
      "impact",
      "curious"
    ],
    "sentencePatterns": [
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ..."
    ],
    "retellingTask": "请用英语复述：猫的习性和高空坠落的科普故事。注意 never fail to do 的强调表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-10",
    "book": 3,
    "lesson": 10,
    "title": "The Loss of the Titanic",
    "titleCn": "泰坦尼克号的沉没",
    "keywords": [
      "Titanic",
      "colossal",
      "watertight",
      "compartment",
      "flood",
      "float",
      "tragic",
      "iceberg"
    ],
    "sentencePatterns": [
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ..."
    ],
    "retellingTask": "请用英语复述：泰坦尼克号沉没的历史事件。注意 even if 引导的让步虚拟语气。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-11",
    "book": 3,
    "lesson": 11,
    "title": "Not Guilty",
    "titleCn": "无罪",
    "keywords": [
      "guilty",
      "customs",
      "declare",
      "hardened",
      "professional",
      "officious",
      "confidently",
      "perfume"
    ],
    "sentencePatterns": [
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ..."
    ],
    "retellingTask": "请用英语复述：海关检查的幽默故事。注意 tolerant 和 hardened 等形容词的精确使用。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-12",
    "book": 3,
    "lesson": 12,
    "title": "Life on a Desert Island",
    "titleCn": "荒岛生活",
    "keywords": [
      "desert island",
      "realistic",
      "paradise",
      "wretched",
      "starve",
      "element",
      "opportunity",
      "genuinely"
    ],
    "sentencePatterns": [
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ..."
    ],
    "retellingTask": "请用英语复述：对荒岛生活的想象与现实。注意 either...or 的并列结构和对比手法。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-13",
    "book": 3,
    "lesson": 13,
    "title": "It's Only Me",
    "titleCn": "是我，别害怕",
    "keywords": [
      "costume",
      "consist of",
      "sheet",
      "ghost",
      "effective",
      "flee",
      "slam",
      "electric"
    ],
    "sentencePatterns": [
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ..."
    ],
    "retellingTask": "请用英语复述：扮鬼吓人反吓己的幽默故事。注意 intend to do 和 dress up as。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-14",
    "book": 3,
    "lesson": 14,
    "title": "A Noble Gangster",
    "titleCn": "贵族歹徒",
    "keywords": [
      "gangster",
      "protection",
      "promptly",
      "destroy",
      "remarkable",
      "mausoleum",
      "dedicate",
      "valued"
    ],
    "sentencePatterns": [
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ..."
    ],
    "retellingTask": "请用英语复述：中世纪意大利雇佣兵的故事。注意 There was a time when...的叙事句型。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-15",
    "book": 3,
    "lesson": 15,
    "title": "Fifty Pence Worth of Trouble",
    "titleCn": "五十便士的麻烦",
    "keywords": [
      "pence",
      "appreciate",
      "pocket money",
      "thrifty",
      "exchange",
      "rattle",
      "dissolve",
      "reward"
    ],
    "sentencePatterns": [
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ..."
    ],
    "retellingTask": "请用英语复述：零花钱与储蓄罐的故事。注意 go a long way 等习语表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-16",
    "book": 3,
    "lesson": 16,
    "title": "Mary Had a Little Lamb",
    "titleCn": "玛丽有一头小羔羊",
    "keywords": [
      "lamb",
      "prize",
      "possession",
      "fetch",
      "missing",
      "theft",
      "accuse",
      "deny"
    ],
    "sentencePatterns": [
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ..."
    ],
    "retellingTask": "请用英语复述：偷羊引发的邻里纠纷。注意 One of...was...的强调句型。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-17",
    "book": 3,
    "lesson": 17,
    "title": "The Longest Suspension Bridge in the World",
    "titleCn": "世界上最长的吊桥",
    "keywords": [
      "suspension",
      "bridge",
      "Verrazano",
      "agreeable",
      "situate",
      "locate",
      "immortal",
      "span"
    ],
    "sentencePatterns": [
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ..."
    ],
    "retellingTask": "请用英语复述：维拉萨诺大桥的故事。注意非限制性定语从句的运用。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-18",
    "book": 3,
    "lesson": 18,
    "title": "Electric Currents in Modern Art",
    "titleCn": "现代艺术中的电流",
    "keywords": [
      "current",
      "sculpture",
      "mistaken",
      "gallery",
      "oddly",
      "exhibit",
      "shock",
      "emotional"
    ],
    "sentencePatterns": [
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ..."
    ],
    "retellingTask": "请用英语复述：现代艺术展览的故事。注意 rarely 和 any more 配合的否定表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-19",
    "book": 3,
    "lesson": 19,
    "title": "A Very Dear Cat",
    "titleCn": "一只贵重的宝贝猫",
    "keywords": [
      "dear",
      "kidnapper",
      "considerable",
      "wealthy",
      "anonymous",
      "ransom",
      "withdraw",
      "astounded"
    ],
    "sentencePatterns": [
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ..."
    ],
    "retellingTask": "请用英语复述：绑架猫的离奇勒索故事。注意 were instructed to do 的被动表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-20",
    "book": 3,
    "lesson": 20,
    "title": "Pioneer Pilots",
    "titleCn": "飞行员的先驱",
    "keywords": [
      "pioneer",
      "aviator",
      "attempt",
      "endurance",
      "altitude",
      "engine",
      "overcome",
      "companion"
    ],
    "sentencePatterns": [
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ..."
    ],
    "retellingTask": "请用英语复述：早期飞越英吉利海峡竞赛的故事。注意 It looked as if...的推测表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-21",
    "book": 3,
    "lesson": 21,
    "title": "Daniel Mendoza",
    "titleCn": "丹尼尔·门多萨",
    "keywords": [
      "boxing",
      "bare",
      "prizefighter",
      "colourful",
      "crude",
      "popularize",
      "adore",
      "debt"
    ],
    "sentencePatterns": [
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ..."
    ],
    "retellingTask": "请用英语复述：拳击手门多萨的传奇一生。注意 the first man to do 结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-22",
    "book": 3,
    "lesson": 22,
    "title": "By Heart",
    "titleCn": "熟记台词",
    "keywords": [
      "by heart",
      "comedian",
      "lines",
      "falter",
      "cast",
      "aristocrat",
      "imprison",
      "reveal"
    ],
    "sentencePatterns": [
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ..."
    ],
    "retellingTask": "请用英语复述：演员和狱卒的幽默故事。注意 was supposed to have been done 的复杂被动表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-23",
    "book": 3,
    "lesson": 23,
    "title": "One Man's Meat Is Another Man's Poison",
    "titleCn": "各有所爱",
    "keywords": [
      "poison",
      "abuse",
      "snail",
      "delicacy",
      "repulsive",
      "associate with",
      "despise",
      "appeal to"
    ],
    "sentencePatterns": [
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ..."
    ],
    "retellingTask": "请用英语复述：不同文化饮食偏好的议论。注意 appeal to 和 associate...with 的用法。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-24",
    "book": 3,
    "lesson": 24,
    "title": "A Skeleton in the Cupboard",
    "titleCn": "家丑",
    "keywords": [
      "skeleton",
      "cupboard",
      "seemingly",
      "respectable",
      "conceal",
      "vivid",
      "dramatic",
      "ruin"
    ],
    "sentencePatterns": [
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ..."
    ],
    "retellingTask": "请用英语复述：关于不可告人秘密的故事。注意 seemingly 和 respectable 等副词/形容词的精细搭配。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-25",
    "book": 3,
    "lesson": 25,
    "title": "The Cutty Sark",
    "titleCn": "卡蒂萨克号帆船",
    "keywords": [
      "Cutty Sark",
      "sailing",
      "vessel",
      "steamship",
      "era",
      "race",
      "steer",
      "temporary"
    ],
    "sentencePatterns": [
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ..."
    ],
    "retellingTask": "请用英语复述：Cutty Sark 号帆船的历史故事。注意最高级与定语从句的组合。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-26",
    "book": 3,
    "lesson": 26,
    "title": "Wanted: A Large Biscuit Tin",
    "titleCn": "征购大饼干筒",
    "keywords": [
      "biscuit",
      "tin",
      "influence",
      "taste",
      "subtle",
      "advertiser",
      "classify",
      "occupy"
    ],
    "sentencePatterns": [
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ..."
    ],
    "retellingTask": "请用英语复述：广告影响消费者心理的议论文。注意 make it possible for...to do 结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-27",
    "book": 3,
    "lesson": 27,
    "title": "Nothing to Sell and Nothing to Buy",
    "titleCn": "不卖也不买",
    "keywords": [
      "philosopher",
      "wisdom",
      "spiritual",
      "material",
      "beggar",
      "sacrifice",
      "dignity",
      "deliberately"
    ],
    "sentencePatterns": [
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ..."
    ],
    "retellingTask": "请用英语复述：关于物质与精神生活的哲学讨论。注意 It has been said that...的引述结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-28",
    "book": 3,
    "lesson": 28,
    "title": "Five Pounds Too Dear",
    "titleCn": "五镑也太贵",
    "keywords": [
      "wares",
      "anchor",
      "deck",
      "silverware",
      "tempt",
      "bargain",
      "disembark",
      "genuine"
    ],
    "sentencePatterns": [
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ..."
    ],
    "retellingTask": "请用英语复述：港口推销的幽默故事。注意 as 引导的时间状语从句。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-29",
    "book": 3,
    "lesson": 29,
    "title": "Funny or Not?",
    "titleCn": "是否可笑？",
    "keywords": [
      "humour",
      "amusement",
      "comic",
      "universal",
      "dread",
      "recovery",
      "plaster",
      "console"
    ],
    "sentencePatterns": [
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ..."
    ],
    "retellingTask": "请用英语复述：幽默与文化差异的议论。注意 whether...or not 引导的主语从句。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-30",
    "book": 3,
    "lesson": 30,
    "title": "The Death of a Ghost",
    "titleCn": "幽灵之死",
    "keywords": [
      "ghost",
      "haunted",
      "farmhouse",
      "reveal",
      "villager",
      "sword",
      "disappear",
      "mystery"
    ],
    "sentencePatterns": [
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ..."
    ],
    "retellingTask": "请用英语复述：农场闹鬼的真相故事。注意 be thought to be 的被动表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-31",
    "book": 3,
    "lesson": 31,
    "title": "A Lovable Eccentric",
    "titleCn": "可爱的怪人",
    "keywords": [
      "eccentric",
      "disregard",
      "convention",
      "conscious",
      "invariably",
      "routinely",
      "shrewd",
      "apology"
    ],
    "sentencePatterns": [
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ..."
    ],
    "retellingTask": "请用英语复述：关于怪人性格的分析议论。注意 set out to do 和 draw attention to。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-32",
    "book": 3,
    "lesson": 32,
    "title": "A Lost Ship",
    "titleCn": "一艘沉船",
    "keywords": [
      "salvage",
      "sunken",
      "cargo",
      "bullion",
      "seabed",
      "wreck",
      "convoy",
      "torpedo"
    ],
    "sentencePatterns": [
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ..."
    ],
    "retellingTask": "请用英语复述：深海打捞沉船的故事。注意过去完成时的叙事作用。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-33",
    "book": 3,
    "lesson": 33,
    "title": "A Day to Remember",
    "titleCn": "难忘的一天",
    "keywords": [
      "prelude",
      "unforeseen",
      "chain",
      "panic",
      "brake",
      "vehicle",
      "collide",
      "catastrophe"
    ],
    "sentencePatterns": [
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ..."
    ],
    "retellingTask": "请用英语复述：一连串倒霉事件的叙事。注意 when 引导的定语从句和原因链表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-34",
    "book": 3,
    "lesson": 34,
    "title": "A Happy Discovery",
    "titleCn": "幸运的发现",
    "keywords": [
      "antique",
      "fascination",
      "forbidding",
      "labyrinth",
      "masterpiece",
      "miniature",
      "dedicated",
      "knowledgeable"
    ],
    "sentencePatterns": [
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ..."
    ],
    "retellingTask": "请用英语复述：古董店发现珍品的故事。注意 exert...on 和 dedicated to 的搭配。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-35",
    "book": -32,
    "lesson": "Justice Was Done",
    "title": "伸张正义",
    "titleCn": [
      "justice",
      "court",
      "law",
      "innocent",
      "complex",
      "abstract",
      "interference",
      "circumstance"
    ],
    "keywords": [
      "The passage mainly discusses the concept of justice and how it is delivered.",
      "The author makes a distinction between abstract justice and its practical application.",
      "What I find interesting is the idea that justice can happen outside the legal system.",
      "This example shows that sometimes poetic justice is more satisfying than legal justice.",
      "From my point of view, the feeling of fairness is deeply human and universal."
    ],
    "sentencePatterns": [
      null,
      null,
      null,
      null,
      null
    ],
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-36",
    "book": 3,
    "lesson": 36,
    "title": "A Chance in a Million",
    "titleCn": "百万分之一的机遇",
    "keywords": [
      "chance",
      "credulous",
      "improbable",
      "obscure",
      "presume",
      "wicked",
      "plot",
      "bring about"
    ],
    "sentencePatterns": [
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ..."
    ],
    "retellingTask": "请用英语复述：巧合到不可思议的身份替换故事。注意 What was more 的递进表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-37",
    "book": 3,
    "lesson": 37,
    "title": "The Westhaven Express",
    "titleCn": "开往威斯特海温的快车",
    "keywords": [
      "express",
      "board",
      "punctual",
      "condition",
      "unshakable",
      "faith",
      "cancel",
      "consult"
    ],
    "sentencePatterns": [
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ..."
    ],
    "retellingTask": "请用英语复述：乘坐快车却发现不存在的滑稽故事。注意 dawn on 和 not as...as might have been。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-38",
    "book": 3,
    "lesson": 38,
    "title": "The First Calendar",
    "titleCn": "最早的日历",
    "keywords": [
      "calendar",
      "historian",
      "unique",
      "engrave",
      "symbol",
      "definite",
      "shed",
      "archaeologist"
    ],
    "sentencePatterns": [
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ..."
    ],
    "retellingTask": "请用英语复述：日历起源的科普故事。注意 It has long been known that...的学术表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-39",
    "book": 3,
    "lesson": 39,
    "title": "Nothing to Worry About",
    "titleCn": "不必担心",
    "keywords": [
      "rough",
      "boulder",
      "pit",
      "perturb",
      "underestimate",
      "bump",
      "ominous",
      "relief"
    ],
    "sentencePatterns": [
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ..."
    ],
    "retellingTask": "请用英语复述：荒野行车的惊险经历。注意 no sooner...than 和 not that...but that 结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-40",
    "book": 3,
    "lesson": 40,
    "title": "Who's Who",
    "titleCn": "真假难辨",
    "keywords": [
      "hoax",
      "deception",
      "self-respecting",
      "indulge",
      "pneumatic",
      "silly",
      "advance",
      "victim"
    ],
    "sentencePatterns": [
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ..."
    ],
    "retellingTask": "请用英语复述：大学生恶作剧的趣味故事。注意 specialize in 和 keep off 的搭配。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-41",
    "book": 3,
    "lesson": 41,
    "title": "Illusions of Pastoral Peace",
    "titleCn": "宁静田园生活的遐想",
    "keywords": [
      "illusion",
      "pastoral",
      "quiet",
      "superior",
      "cockcrow",
      "twitter",
      "stagger",
      "exotic"
    ],
    "sentencePatterns": [
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ..."
    ],
    "retellingTask": "请用英语复述：城市人对乡村生活的幻想与现实。注意 cease to do 和 picture...as 的表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-42",
    "book": 3,
    "lesson": 42,
    "title": "Modern Cavemen",
    "titleCn": "现代洞穴人",
    "keywords": [
      "caveman",
      "pot-holing",
      "solitude",
      "lure",
      "rig up",
      "precaution",
      "foretell",
      "waterfall"
    ],
    "sentencePatterns": [
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ..."
    ],
    "retellingTask": "请用英语复述：洞穴探险的科普故事。注意 the same...which...的比较结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-43",
    "book": 3,
    "lesson": 43,
    "title": "Fully Insured",
    "titleCn": "全保险",
    "keywords": [
      "insure",
      "premium",
      "admittedly",
      "salvage",
      "capsize",
      "trembler",
      "dive",
      "crane"
    ],
    "sentencePatterns": [
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ..."
    ],
    "retellingTask": "请用英语复述：打捞馅饼盘的荒诞保险故事。注意 It is not uncommon to...的双重否定表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-44",
    "book": 3,
    "lesson": 44,
    "title": "Speed and Comfort",
    "titleCn": "又快捷又舒适",
    "keywords": [
      "transport",
      "civilized",
      "exhaust",
      "motorway",
      "spacious",
      "stuffy",
      "monotonous",
      "lull"
    ],
    "sentencePatterns": [
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ..."
    ],
    "retellingTask": "请用英语复述：不同交通方式的利弊比较。注意 whether...or...的选择结构和 recovering from。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-45",
    "book": 3,
    "lesson": 45,
    "title": "The Power of the Press",
    "titleCn": "新闻报道的威力",
    "keywords": [
      "press",
      "democratic",
      "restrict",
      "abuse",
      "contention",
      "untold",
      "perpetual",
      "odds"
    ],
    "sentencePatterns": [
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ..."
    ],
    "retellingTask": "请用英语复述：新闻媒体对个人生活影响的议论。注意强调句 It was...that...。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-46",
    "book": 3,
    "lesson": 46,
    "title": "Do It Yourself",
    "titleCn": "自己动手",
    "keywords": [
      "do it yourself",
      "tendency",
      "handyman",
      "resourceful",
      "versatile",
      "fuse",
      "mow",
      "adjust"
    ],
    "sentencePatterns": [
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ..."
    ],
    "retellingTask": "请用英语复述：DIY 文化的幽默议论。注意 So...that 的倒装句。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-47",
    "book": 3,
    "lesson": 47,
    "title": "Too High a Price?",
    "titleCn": "代价太高？",
    "keywords": [
      "pollution",
      "pesticide",
      "fertilizer",
      "salmonella",
      "burglar",
      "noise",
      "aircraft",
      "overpopulated"
    ],
    "sentencePatterns": [
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ..."
    ],
    "retellingTask": "请用英语复述：环境污染问题的议论。注意 the price we pay for 的比喻表达和分词作定语。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-48",
    "book": 3,
    "lesson": 48,
    "title": "The Silent Village",
    "titleCn": "沉默的村庄",
    "keywords": [
      "inaccessible",
      "remote",
      "hostile",
      "tourist",
      "architecture",
      "invariably",
      "come to life",
      "alien"
    ],
    "sentencePatterns": [
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ..."
    ],
    "retellingTask": "请用英语复述：探访偏僻山村的旅行故事。注意 inaccessible 和 hostile 等形容词的情感色彩。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-49",
    "book": 3,
    "lesson": 49,
    "title": "The Ideal Servant",
    "titleCn": "理想的仆人",
    "keywords": [
      "servant",
      "domestic",
      "devoted",
      "industrious",
      "preserve",
      "shift",
      "air one's views",
      "dismiss"
    ],
    "sentencePatterns": [
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ..."
    ],
    "retellingTask": "请用英语复述：老仆人忠心耿耿的幽默故事。注意 be attached to 的情感表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-50",
    "book": 3,
    "lesson": 50,
    "title": "New Year Resolutions",
    "titleCn": "新年的决心",
    "keywords": [
      "resolution",
      "mentally",
      "compile",
      "ambitious",
      "downfall",
      "accomplish",
      "slip back into",
      "hypnotize"
    ],
    "sentencePatterns": [
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ..."
    ],
    "retellingTask": "请用英语复述：新年决心的自嘲故事。注意 slip back into 和 be determined to do 的对比。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-51",
    "book": 3,
    "lesson": 51,
    "title": "Predicting the Future",
    "titleCn": "预测未来",
    "keywords": [
      "predict",
      "notoriously",
      "available",
      "mainframe",
      "terminal",
      "multimedia",
      "diagnose",
      "overestimate"
    ],
    "sentencePatterns": [
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ..."
    ],
    "retellingTask": "请用英语复述：计算机发展预测的议论。注意 notoriously 和 bring about 的用法。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-52",
    "book": 3,
    "lesson": 52,
    "title": "Mud Is Mud",
    "titleCn": "实事求是",
    "keywords": [
      "mud",
      "permanent",
      "tint",
      "delicate",
      "shade",
      "outlandish",
      "dispel",
      "discreet"
    ],
    "sentencePatterns": [
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ..."
    ],
    "retellingTask": "请用英语复述：购买奇特化妆品的幽默故事。注意 keeps...on permanent display 的搭配。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-53",
    "book": 3,
    "lesson": 53,
    "title": "In the Public Interest",
    "titleCn": "为了公众的利益",
    "keywords": [
      "Scandinavian",
      "ombudsman",
      "civil servant",
      "secretive",
      "correspondence",
      "accusation",
      "prejudice",
      "parliament"
    ],
    "sentencePatterns": [
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ..."
    ],
    "retellingTask": "请用英语复述：北欧监察官制度的介绍。注意 be subject to 和 be much admired for 的搭配。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-54",
    "book": 3,
    "lesson": 54,
    "title": "Instinct or Cleverness?",
    "titleCn": "是本能还是机智？",
    "keywords": [
      "instinct",
      "cleverness",
      "insect",
      "wage",
      "contaminate",
      "provocation",
      "spider",
      "ant"
    ],
    "sentencePatterns": [
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ..."
    ],
    "retellingTask": "请用英语复述：对昆虫本能与智慧的科普议论。注意 wage war on 和 be brought up to do 的表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-55",
    "book": 3,
    "lesson": 55,
    "title": "From the Earth: Greetings",
    "titleCn": "来自地球的问候",
    "keywords": [
      "astronomy",
      "relative",
      "radio telescope",
      "universe",
      "emission",
      "intelligent",
      "interstellar",
      "uniquely"
    ],
    "sentencePatterns": [
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ..."
    ],
    "retellingTask": "请用英语复述：寻找外星生命的科普故事。注意 chances of...are a million to one 的概率表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-56",
    "book": 3,
    "lesson": 56,
    "title": "Our Neighbour, the River",
    "titleCn": "河流，我们的邻居",
    "keywords": [
      "boundary",
      "pump",
      "overtake",
      "submerge",
      "grapple",
      "upstream",
      "boathook",
      "sweep"
    ],
    "sentencePatterns": [
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ..."
    ],
    "retellingTask": "请用英语复述：农场旁河流洪水的故事。注意 just as 的类比结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-57",
    "book": 3,
    "lesson": 57,
    "title": "Back in the Old Country",
    "titleCn": "重返故里",
    "keywords": [
      "alien",
      "emigrate",
      "absorb",
      "grave",
      "lack",
      "embedded",
      "milestone",
      "retrace"
    ],
    "sentencePatterns": [
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ..."
    ],
    "retellingTask": "请用英语复述：重返故乡的感人故事。注意 let + 宾语 + 动词原形结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-58",
    "book": 3,
    "lesson": 58,
    "title": "A Spot of Bother",
    "titleCn": "一点儿小麻烦",
    "keywords": [
      "bother",
      "ruse",
      "practically",
      "chaos",
      "inconceivable",
      "deter",
      "amuse",
      "regain"
    ],
    "sentencePatterns": [
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ...",
      "The author seems to suggest that ...",
      "One key point is that ..."
    ],
    "retellingTask": "请用英语复述：老太太回家发现被盗的故事。注意 it would never do for...to do 的惯用表达。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-59",
    "book": 3,
    "lesson": 59,
    "title": "Collecting",
    "titleCn": "收藏",
    "keywords": [
      "amass",
      "indiscriminate",
      "clutter",
      "sentimental",
      "mania",
      "sketch",
      "verify",
      "relaxation"
    ],
    "sentencePatterns": [
      "The author seems to suggest that ...",
      "One key point is that ...",
      "Another important point is ...",
      "This example shows how ...",
      "What I find interesting is that ..."
    ],
    "retellingTask": "请用英语复述：关于收藏癖好的议论。注意 tend to do 和 without being aware of doing so。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  },
  {
    "id": "3-60",
    "book": 3,
    "lesson": 60,
    "title": "Too Early and Too Late",
    "titleCn": "太早和太晚",
    "keywords": [
      "punctuality",
      "tolerance",
      "nuisance",
      "energetic",
      "overlook",
      "reproach",
      "fraction",
      "flourish"
    ],
    "sentencePatterns": [
      "This example shows how ...",
      "What I find interesting is that ...",
      "From my point of view, ...",
      "This reminds me of ...",
      "The passage mainly discusses ..."
    ],
    "retellingTask": "请用英语复述：关于守时的议论。注意 Only 开头的倒装句和 as much...as 的比较结构。",
    "outputSteps": [
      "Step 1: 先总结文章主旨",
      "Step 2: 再说 2 个关键观点",
      "Step 3: 提到一个例子或细节",
      "Step 4: 最后表达自己的观点，并联系学习或生活"
    ]
  }
];

export function getAllLessons() {
  return { nce2, nce3 };
}

export function getLessonById(id) {
  return [...nce2, ...nce3].find((l) => l.id === id) || null;
}

export function getLessonsByBook(book) {
  return book === 2 ? nce2 : nce3;
}
