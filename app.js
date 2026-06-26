// TEMPLATE_EXPLAINER_PAGE_20260626_1

const GAME_DATA = [
  {id:'memory_match', code:'S001', preview:'previews/memory_match.svg', icon:'🃏', price:20, free:true, path:'games/memory_match_game/index.html', download:'downloads/memory_match.zip'},
  {id:'true_false', code:'S002', preview:'previews/true_false.svg', icon:'⚡', price:20, free:true, path:'games/true_false_flash_game/index.html', download:'downloads/true_false.zip'},
  {id:'sentence_order', code:'S003', preview:'previews/sentence_order.svg', icon:'🧩', price:20, free:false, path:'games/sentence_order_game/index.html', download:'downloads/sentence_order.zip'},
  {id:'treasure_box', code:'S004', preview:'previews/treasure_box.svg', icon:'🎁', price:20, free:false, path:'games/treasure_box_game/index.html', download:'downloads/treasure_box.zip'},
  {id:'lucky_wheel', code:'S005', preview:'previews/lucky_wheel.svg', icon:'🎡', price:20, free:false, path:'games/lucky_wheel_quiz_game/index.html', download:'downloads/lucky_wheel.zip'},
  {id:'classification_conveyor', code:'P001', preview:'previews/classification_conveyor.svg', icon:'📦', price:20, free:false, path:'games/classification_conveyor_game/index.html', download:'downloads/classification_conveyor.zip'},
  {id:'platform_quiz', code:'H001', preview:'previews/platform_quiz.svg', icon:'🕹️', price:20, free:false, path:'games/platform_quiz_adventure_game/index.html', download:'downloads/platform_quiz.zip'},
  {id:'monster_defense', code:'P005', preview:'previews/monster_defense.svg', icon:'👾', price:20, free:false, path:'games/monster_defense_game/index.html', download:'downloads/monster_defense.zip'},
  {id:'whack_mole', code:'S007', preview:'previews/whack_mole.svg', icon:'🔨', price:20, free:false, path:'games/whack_a_mole_quiz_game/index.html', download:'downloads/whack_mole.zip'},
  {id:'text_match', code:'S006', preview:'previews/text_match.svg', icon:'🔤', price:20, free:false, path:'games/tug_spell_game/index.html', download:'downloads/text_match.zip'},
  {id:'bomb_quiz', code:'P003', preview:'previews/bomb_quiz.svg', icon:'💣', price:20, free:false, path:'games/bomb_quiz_game/index.html', download:'downloads/bomb_quiz.zip'},
  {id:'knowledge_race', code:'P004', preview:'previews/knowledge_race.svg', icon:'🏇', price:20, free:false, path:'games/knowledge_race_game/index.html', download:'downloads/knowledge_race.zip'},
  {id:'dungeon_dragon_raid', code:'H003', preview:'previews/dungeon_dragon_raid.svg', icon:'🐉', price:20, free:false, path:'games/dungeon_dragon_raid_game/index.html', download:'downloads/dungeon_dragon_raid.zip'},
  {id:'picture_word_guess', code:'H004', preview:'previews/picture_word_guess.svg', icon:'🖼️', price:20, free:false, path:'games/picture_word_guess_game/index.html', download:'downloads/picture_word_guess.zip'},
  {id:'image_puzzle_speed_race', code:'P002', preview:'previews/image_puzzle_speed_race.svg', icon:'🧩', price:20, free:false, path:'games/image_puzzle_speed_race_game/index.html', download:'downloads/image_puzzle_speed_race.zip'},
  {id:'two_team_puzzle_duel', code:'H006', preview:'previews/two_team_puzzle_duel.svg', icon:'🖼️', price:20, free:false, path:'games/two_team_puzzle_duel_game/index.html', download:'downloads/two_team_puzzle_duel.zip'},
  {id:'island_conquest', code:'H007', preview:'previews/island_conquest.svg', icon:'🏝️', price:20, free:false, path:'games/island_conquest_game/index.html', download:'downloads/island_conquest.zip'},
  {id:'timeline_sort_challenge', code:'P008', preview:'previews/timeline_sort_challenge.svg', icon:'⏳', price:20, free:false, path:'games/timeline_sort_challenge_game/index.html', download:'downloads/timeline_sort_challenge.zip'},
  {id:'image_label_match', code:'P009', preview:'previews/image_label_match.svg', icon:'🏷️', price:20, free:false, path:'games/image_label_match_game/index.html', download:'downloads/image_label_match.zip'},
  {id:'team_relay_quiz', code:'P010', preview:'previews/team_relay_quiz.svg', icon:'🏃', price:20, free:false, path:'games/team_relay_quiz_game/index.html', download:'downloads/team_relay_quiz.zip'},
  {id:'find_difference', code:'P006', preview:'previews/find_difference.svg', icon:'🔎', price:20, free:false, path:'games/find_difference_game/index.html', download:'downloads/find_difference.zip'},
  {id:'keyword_beachhead', code:'P007', preview:'previews/keyword_beachhead.svg', icon:'🏖️', price:20, free:false, path:'games/keyword_beachhead_game/index.html', download:'downloads/keyword_beachhead.zip'},
  {id:'kingdom_resource_battle', code:'H008', preview:'previews/kingdom_resource_battle.svg', icon:'🏰', price:20, free:false, path:'games/kingdom_resource_battle_game/index.html', download:'downloads/kingdom_resource_battle.zip'},
  {id:'spot_diff_v2', code:'H009', preview:'previews/spot_diff_v2.svg', icon:'🔍', price:20, free:false, path:'games/spot_diff_v2_game/index.html', download:'downloads/spot_diff_v2.zip'},
];

const PACKAGES = [
  {id:'single', price:20, type:'single'},
  {id:'pick5', price:50, type:'pick5'},
  {id:'all_access', price:100, type:'all'}
];

const GAME_LEVELS = {
  beginner: ['memory_match','true_false','sentence_order','treasure_box','lucky_wheel','text_match','whack_mole'],
  intermediate: ['classification_conveyor','image_puzzle_speed_race','bomb_quiz','knowledge_race','monster_defense','find_difference','keyword_beachhead','timeline_sort_challenge','image_label_match','team_relay_quiz'],
  advanced: ['platform_quiz','dungeon_dragon_raid','picture_word_guess','two_team_puzzle_duel','island_conquest','kingdom_resource_battle','spot_diff_v2']
};

const LEVEL_ORDER = ['beginner','intermediate','advanced'];

const BASE_FREE_GAMES = ['memory_match','true_false'];
const PROFILE_REWARD_GAME = 'sentence_order';
const MALAYSIA_STATES = ['Johor','Kedah','Kelantan','Melaka','Negeri Sembilan','Pahang','Perak','Perlis','Pulau Pinang','Sabah','Sarawak','Selangor','Terengganu'];
const ORG_TYPES = ['小學','中學','補習中心','幼兒園','其他'];


const LEVEL_TEXT = {
  zh: {
    beginner: {label:'初阶', desc:'规则简单，适合课堂暖身、快速复习、第一次使用。'},
    intermediate: {label:'进阶', desc:'有分组、计时、分类、竞赛或上传题材，适合正式课堂活动。'},
    advanced: {label:'高阶', desc:'有地图、路线、策略、多阶段任务或复杂对战，适合大型白板互动。'}
  },
  en: {
    beginner: {label:'Beginner', desc:'Simple rules for warm-ups, quick review and first-time use.'},
    intermediate: {label:'Intermediate', desc:'Team play, timers, classification, competition or uploaded materials.'},
    advanced: {label:'Advanced', desc:'Maps, routes, strategy, multi-stage missions or complex team battles.'}
  },
  ms: {
    beginner: {label:'Asas', desc:'Peraturan mudah untuk pemanasan, ulang kaji pantas dan penggunaan pertama.'},
    intermediate: {label:'Pertengahan', desc:'Aktiviti kumpulan, masa, klasifikasi, pertandingan atau bahan dimuat naik.'},
    advanced: {label:'Lanjutan', desc:'Peta, laluan, strategi, misi berperingkat atau pertempuran kumpulan yang kompleks.'}
  }
};

const LANGS = [
  {id:'zh', label:'简体中文'},
  {id:'en', label:'English'},
  {id:'ms', label:'Melayu'}
];

const TEMPLATE_COPY = {
  "zh": {
    "kicker": "Classroom Game Template Platform",
    "title": "课堂游戏模板网站",
    "subtitle": "让老师套用现成模板，快速制作互动白板课堂游戏。",
    "heroText": "不用从零开发。选择模板、放入题库或图片素材，就能把复习、抢答、分类、拼图、地图策略等活动变成可玩的课堂游戏。",
    "primary": "查看 24 款模板",
    "secondary": "老师登录 / 购买",
    "stats": [
      [
        "24",
        "课堂游戏模板"
      ],
      [
        "3",
        "初阶 / 进阶 / 高阶"
      ],
      [
        "白板",
        "大按钮互动设计"
      ]
    ],
    "stepsTitle": "老师使用流程",
    "steps": [
      [
        "选择模板",
        "按照科目与课堂目标，选择最合适的游戏模板。"
      ],
      [
        "设定题库",
        "登录后在老师后台输入题目、答案、图片或事件卡。"
      ],
      [
        "白板上课",
        "一键打开白板模式，让学生分组互动、抢答与闯关。"
      ]
    ],
    "catalogTitle": "24 款课堂游戏模板说明",
    "catalogSub": "按初阶、进阶、高阶分类。点击每一款模板可展开查看适合科目、玩法和准备方式。",
    "subject": "适合科目",
    "play": "核心玩法",
    "setup": "老师准备",
    "best": "适合场景",
    "ctaTitle": "准备开始制作课堂游戏？",
    "ctaText": "老师登录后可进入模板库与老师后台；管理员可管理老师账号与授权。",
    "plansTitle": "登录 / 购买入口",
    "plans": [
      [
        "初阶单一模板",
        "RM20 / 款",
        "适合先测试基础互动游戏。"
      ],
      [
        "进阶单一模板",
        "RM30 / 款",
        "适合需要图片、排序、配对或小组竞赛的课堂。"
      ],
      [
        "高阶单一模板",
        "RM50 / 款",
        "适合地图闯关、策略对抗与自带后台的高互动游戏。"
      ],
      [
        "任选五款模板",
        "RM100",
        "可从初阶、进阶、高阶任意选择 5 个模板。"
      ],
      [
        "全部模板",
        "原价 RM790｜特惠 RM300",
        "一次取得全部模板，并包括未来新开发的新游戏。"
      ]
    ],
    "loginTitle": "老师 / 管理员登录",
    "email": "电子邮件",
    "password": "密码",
    "login": "登录",
    "registerTitle": "老师账号申请",
    "name": "姓名",
    "phone": "电话",
    "apply": "送出申请",
    "invalidEmail": "请输入有效电子邮件。",
    "registerSuccess": "申请已送出，请等待管理员批准。"
  },
  "en": {
    "kicker": "Classroom Game Template Platform",
    "title": "Classroom Game Template Platform",
    "subtitle": "Ready-made templates for interactive whiteboard classroom games.",
    "heroText": "No need to build from scratch. Choose a template, add questions or images, and turn review, quizzes, sorting, puzzles and strategy activities into playable classroom games.",
    "primary": "View 24 Templates",
    "secondary": "Teacher Login / Purchase",
    "stats": [
      [
        "24",
        "Game templates"
      ],
      [
        "3",
        "Beginner / Intermediate / Advanced"
      ],
      [
        "Whiteboard",
        "Large touch-friendly controls"
      ]
    ],
    "stepsTitle": "How Teachers Use It",
    "steps": [
      [
        "Choose a template",
        "Select the best game format for your subject and lesson goal."
      ],
      [
        "Set content",
        "After login, enter questions, answers, images or event cards in the teacher backend."
      ],
      [
        "Teach on whiteboard",
        "Launch whiteboard mode for teams to play, answer and compete."
      ]
    ],
    "catalogTitle": "24 Classroom Game Template Guide",
    "catalogSub": "Grouped into Beginner, Intermediate and Advanced. Expand each template to view subjects, gameplay and preparation.",
    "subject": "Suitable subjects",
    "play": "Gameplay",
    "setup": "Teacher setup",
    "best": "Best use",
    "ctaTitle": "Ready to create your classroom game?",
    "ctaText": "Teachers can log in to use templates and backend settings. Admins can manage teacher accounts and authorization.",
    "plansTitle": "Login / Purchase Area",
    "plans": [
      [
        "Beginner single template",
        "RM20 / template",
        "Good for testing a basic classroom game first."
      ],
      [
        "Intermediate single template",
        "RM30 / template",
        "Good for image, sorting, matching or team-competition lessons."
      ],
      [
        "Advanced single template",
        "RM50 / template",
        "Good for map stages, strategy battles and high-interaction templates with built-in settings."
      ],
      [
        "Any 5 templates",
        "RM100",
        "Choose any 5 templates from Beginner, Intermediate or Advanced."
      ],
      [
        "All templates",
        "Total RM790｜Promo RM300",
        "Includes all current templates and future newly developed games."
      ]
    ],
    "loginTitle": "Teacher / Admin Login",
    "email": "Email",
    "password": "Password",
    "login": "Login",
    "registerTitle": "Teacher Account Request",
    "name": "Name",
    "phone": "Phone",
    "apply": "Submit Request",
    "invalidEmail": "Please enter a valid email address.",
    "registerSuccess": "Your request has been submitted. Please wait for admin approval."
  },
  "ms": {
    "kicker": "Platform Templat Permainan Kelas",
    "title": "Platform Templat Permainan Kelas",
    "subtitle": "Templat sedia ada untuk permainan kelas papan putih interaktif.",
    "heroText": "Tidak perlu bina dari kosong. Pilih templat, masukkan soalan atau gambar, dan jadikan ulang kaji, kuiz, klasifikasi, puzzle dan strategi sebagai permainan kelas.",
    "primary": "Lihat 24 Templat",
    "secondary": "Log Masuk / Pembelian",
    "stats": [
      [
        "24",
        "Templat permainan"
      ],
      [
        "3",
        "Asas / Pertengahan / Lanjutan"
      ],
      [
        "Papan putih",
        "Butang besar mesra sentuhan"
      ]
    ],
    "stepsTitle": "Cara Guru Menggunakannya",
    "steps": [
      [
        "Pilih templat",
        "Pilih format permainan yang sesuai dengan subjek dan objektif kelas."
      ],
      [
        "Tetapkan kandungan",
        "Selepas log masuk, masukkan soalan, jawapan, imej atau kad peristiwa."
      ],
      [
        "Main di papan putih",
        "Lancarkan mod papan putih untuk aktiviti kumpulan."
      ]
    ],
    "catalogTitle": "Panduan 24 Templat Permainan Kelas",
    "catalogSub": "Dibahagikan kepada Asas, Pertengahan dan Lanjutan. Buka setiap templat untuk melihat subjek, cara bermain dan persediaan.",
    "subject": "Subjek sesuai",
    "play": "Cara bermain",
    "setup": "Persediaan guru",
    "best": "Kegunaan sesuai",
    "ctaTitle": "Sedia untuk membina permainan kelas?",
    "ctaText": "Guru boleh log masuk untuk menggunakan templat dan tetapan backend. Admin boleh mengurus akaun guru dan kebenaran.",
    "plansTitle": "Log Masuk / Pembelian",
    "plans": [
      [
        "Satu templat asas",
        "RM20 / templat",
        "Sesuai untuk mencuba permainan interaktif asas dahulu."
      ],
      [
        "Satu templat pertengahan",
        "RM30 / templat",
        "Sesuai untuk aktiviti bergambar, susunan, padanan atau pertandingan kumpulan."
      ],
      [
        "Satu templat lanjutan",
        "RM50 / templat",
        "Sesuai untuk peta misi, strategi kumpulan dan templat interaktif dengan tetapan terbina."
      ],
      [
        "Pilih mana-mana 5 templat",
        "RM100",
        "Boleh pilih mana-mana 5 templat daripada Asas, Pertengahan atau Lanjutan."
      ],
      [
        "Semua templat",
        "Jumlah RM790｜Promosi RM300",
        "Termasuk semua templat semasa dan permainan baharu yang dibangunkan pada masa depan."
      ]
    ],
    "loginTitle": "Log Masuk Guru / Admin",
    "email": "Emel",
    "password": "Kata Laluan",
    "login": "Log Masuk",
    "registerTitle": "Permohonan Akaun Guru",
    "name": "Nama",
    "phone": "Telefon",
    "apply": "Hantar Permohonan",
    "invalidEmail": "Sila masukkan alamat emel yang sah.",
    "registerSuccess": "Permohonan telah dihantar. Sila tunggu kelulusan admin."
  }
};

const TEMPLATE_DETAILS = {
  "zh": {
    "memory_match": {
      "subjects": "语文词汇、英文 / Melayu 单词、数学口诀、科学概念",
      "play": "学生翻开两张卡，找出正确配对，例如词语与解释、图片与名称、问题与答案。",
      "setup": "老师输入配对内容即可使用，适合 5–10 分钟暖身。",
      "best": "适合低年级、复习课、词汇记忆与概念配对。"
    },
    "true_false": {
      "subjects": "任何科目快速判断题、AI素养、安全教育、科学常识",
      "play": "屏幕快速出现判断题，学生选择真或假，系统即时反馈。",
      "setup": "老师准备是非题，适合快速检查全班理解。",
      "best": "适合课堂导入、结课前检测、抢答活动。"
    },
    "sentence_order": {
      "subjects": "华文、英文、Melayu、历史事件、科学流程、作文结构",
      "play": "学生拖动句子或步骤，把内容排成正确顺序。",
      "setup": "老师输入句子、步骤或时间线，学生按逻辑排序。",
      "best": "适合语文句序、流程学习、历史时间线。"
    },
    "treasure_box": {
      "subjects": "语文、数学、科学、常识、道德教育",
      "play": "学生选择宝箱抽题，答对获得奖励或触发惊喜。",
      "setup": "老师输入题库，系统随机抽题，游戏节奏轻松。",
      "best": "适合复习课、奖励机制、低压力互动。"
    },
    "lucky_wheel": {
      "subjects": "全科复习、班级抢答、主题活动",
      "play": "转盘决定题目或挑战，学生分组回答。",
      "setup": "老师输入题目或任务，转盘随机抽取。",
      "best": "适合制造期待感、课堂破冰、复习活动。"
    },
    "text_match": {
      "subjects": "词语配对、拼字、定义配对、公式与答案",
      "play": "学生把文字、答案或标签拖到正确位置，完成对应。",
      "setup": "老师输入两组对应资料，可用于词汇或概念配对。",
      "best": "适合语文词汇、英语单词、数学公式。"
    },
    "whack_mole": {
      "subjects": "快速问答、乘法表、词汇认读、科学概念",
      "play": "地鼠出现题目或答案，学生快速点击正确目标。",
      "setup": "老师准备题库，系统以快节奏呈现。",
      "best": "适合互动白板、高参与度练习、快速复习。"
    },
    "classification_conveyor": {
      "subjects": "科学分类、语文词性、数学图形、图片分类",
      "play": "学生把输送带上的项目分到正确类别。",
      "setup": "老师设置分类名称，并加入文字或图片项目。",
      "best": "适合概念分类、图片识别、知识归纳。"
    },
    "image_puzzle_speed_race": {
      "subjects": "美术、科学图片、地理地图、课文插图、活动照片",
      "play": "老师上传图片，各组轮流拼图，系统记录完成时间。",
      "setup": "上传一张图片，设定拼图难度与组别。",
      "best": "适合看图复习、图像观察、分组竞赛。"
    },
    "bomb_quiz": {
      "subjects": "全科限时复习、考试前抢答、概念检测",
      "play": "倒数炸弹增加紧张感，学生必须在时间内回答。",
      "setup": "输入题库与倒计时，适合短时间高强度复习。",
      "best": "适合高年级、考试复习、竞赛型课堂。"
    },
    "knowledge_race": {
      "subjects": "常识、科学、历史、语言问答、综合测验",
      "play": "答对即可推动赛马或队伍前进，先到终点者获胜。",
      "setup": "老师输入题库与队伍名称，系统自动推进。",
      "best": "适合全班分组对抗与知识竞赛。"
    },
    "monster_defense": {
      "subjects": "数学运算、词汇问答、科学概念、综合复习",
      "play": "怪兽进攻时学生答题防守，答对可击退怪兽。",
      "setup": "输入题库与难度，学生分组合作守关。",
      "best": "适合团队合作、即时反馈、课堂高潮。"
    },
    "find_difference": {
      "subjects": "观察力训练、美术、科学图像、语文细节理解",
      "play": "学生在两张图片中找出不同点。",
      "setup": "老师上传图片或使用示范图，设置差异数量。",
      "best": "适合观察训练、低年级视觉辨识。"
    },
    "keyword_beachhead": {
      "subjects": "关键词复习、阅读理解、历史重点、科学术语",
      "play": "学生抢占关键词据点，答对后占领区域。",
      "setup": "老师输入关键词与提示，分组抢答。",
      "best": "适合主题复习、概念整理、分组抢答。"
    },
    "timeline_sort_challenge": {
      "subjects": "历史时间线、科学实验步骤、作文流程、项目步骤",
      "play": "学生把事件或步骤按正确时间 / 逻辑排序。",
      "setup": "老师输入事件卡片，系统打乱后让学生排列。",
      "best": "适合历史、科学流程、说明文结构。"
    },
    "image_label_match": {
      "subjects": "识图、科学器官、地图、词汇、物品名称",
      "play": "学生把标签拖到对应图片或图片位置。",
      "setup": "老师上传图片并输入标签，学生完成配对。",
      "best": "适合图片教学、实物认知、双语词汇。"
    },
    "team_relay_quiz": {
      "subjects": "全科复习、分组竞赛、单元测验",
      "play": "各组轮流答题，答对推进接力进度。",
      "setup": "老师设置组别、题库与胜利条件。",
      "best": "适合大型课堂、分组合作与课堂总结。"
    },
    "platform_quiz": {
      "subjects": "语文、英文、数学、科学、主题综合问答",
      "play": "角色在平台地图上闯关，遇到题目答对才能继续。",
      "setup": "老师输入关卡题目，学生控制角色挑战。",
      "best": "适合高参与度闯关课、电脑室或白板互动。"
    },
    "dungeon_dragon_raid": {
      "subjects": "综合复习、故事化问答、团队合作课程",
      "play": "两队进入地牢，答题打怪、补血、找钥匙，最后讨伐巨龙。",
      "setup": "老师准备题库与关卡，系统生成 RPG 流程。",
      "best": "适合较长课堂、游戏化复习、成果活动。"
    },
    "picture_word_guess": {
      "subjects": "华文字词、英文单词、Melayu 词汇、看图说话",
      "play": "图片逐格揭开，学生抢答猜词语或答案。",
      "setup": "老师上传图片与答案，设置组数与揭图速度。",
      "best": "适合词汇教学、识图猜词、课堂抢答。"
    },
    "two_team_puzzle_duel": {
      "subjects": "图像观察、地图、科学图片、课文插图",
      "play": "两组同时拼同一张图，最快完成者获胜。",
      "setup": "老师上传图片，设置拼图切割与组别。",
      "best": "适合白板分组竞赛、图像复习、活动暖场。"
    },
    "island_conquest": {
      "subjects": "策略问答、地理、历史、综合复习、团队竞赛",
      "play": "两队在岛屿地图上抢占土地，答题决定行动结果。",
      "setup": "老师设置地图、起点、障碍、回合与题库。",
      "best": "适合高阶策略型课堂与长时段活动。"
    },
    "kingdom_resource_battle": {
      "subjects": "综合问答、AI素养、经济概念、资源管理、项目复习",
      "play": "队伍开发农田、森林与金矿，答题获得资源并触发事件卡。",
      "setup": "老师设置题库、事件卡、回合和目标分数。",
      "best": "适合项目式复习、成果课、分组策略对抗。"
    },
    "spot_diff_v2": {
      "subjects": "观察力训练、图片阅读、艺术、科学图像、安全教育",
      "play": "学生在左图与右图中找碴，系统可显示红色答案图。",
      "setup": "自带后台，可新增、编辑、删除关卡，上传左右图与答案图。",
      "best": "适合多关卡观察挑战、亲子活动、白板互动。"
    }
  },
  "en": {
    "memory_match": {
      "subjects": "Languages, vocabulary, math facts, science terms",
      "play": "Students flip two cards and match pairs such as word-definition, image-label or question-answer.",
      "setup": "Enter matching pairs; ideal for 5–10 minute warm-ups.",
      "best": "Warm-up, vocabulary memory and concept matching."
    },
    "true_false": {
      "subjects": "All subjects, AI literacy, safety education, science facts",
      "play": "Students answer true/false statements with instant feedback.",
      "setup": "Prepare quick statements to check whole-class understanding.",
      "best": "Lesson starters, exit tickets and quick checks."
    },
    "sentence_order": {
      "subjects": "Chinese, English, Malay, history, science procedures, writing",
      "play": "Students drag sentences or steps into the correct order.",
      "setup": "Enter sentences, steps or events; the system shuffles them.",
      "best": "Sequencing, process learning and reading logic."
    },
    "treasure_box": {
      "subjects": "Languages, mathematics, science, general knowledge, values education",
      "play": "Students open treasure boxes to draw questions and earn rewards.",
      "setup": "Enter a question bank; the game randomly draws questions.",
      "best": "Low-pressure review and reward-based interaction."
    },
    "lucky_wheel": {
      "subjects": "All-subject review, class quiz, theme activities",
      "play": "A wheel decides the question or challenge for teams.",
      "setup": "Enter questions or tasks; spin to select randomly.",
      "best": "Class warm-up, review and engagement."
    },
    "text_match": {
      "subjects": "Vocabulary, spelling, definitions, formulas and answers",
      "play": "Students drag matching text, answers or labels to the right places.",
      "setup": "Enter two sets of matching items.",
      "best": "Language vocabulary, formula matching and concept review."
    },
    "whack_mole": {
      "subjects": "Quick quiz, multiplication, vocabulary reading, science concepts",
      "play": "Students quickly click the correct mole/target.",
      "setup": "Prepare a question bank for fast-paced practice.",
      "best": "Whiteboard interaction and rapid recall practice."
    },
    "classification_conveyor": {
      "subjects": "Science classification, grammar, shapes, image sorting",
      "play": "Students sort conveyor items into correct categories.",
      "setup": "Set category names and add text or image items.",
      "best": "Concept grouping, image recognition and knowledge organization."
    },
    "image_puzzle_speed_race": {
      "subjects": "Art, science images, geography maps, textbook pictures",
      "play": "Groups solve image puzzles and the system records time.",
      "setup": "Upload an image and set difficulty/team mode.",
      "best": "Image observation and team competition."
    },
    "bomb_quiz": {
      "subjects": "Timed review, exam preparation, concept checks",
      "play": "A countdown bomb creates urgency while students answer.",
      "setup": "Enter questions and timer settings.",
      "best": "Older students, exam review and fast competition."
    },
    "knowledge_race": {
      "subjects": "General knowledge, science, history, language quiz",
      "play": "Correct answers move the team forward in a race.",
      "setup": "Set questions and teams; the race advances automatically.",
      "best": "Whole-class quiz competition."
    },
    "monster_defense": {
      "subjects": "Math, vocabulary, science, unit review",
      "play": "Students answer questions to defend against monsters.",
      "setup": "Enter questions and difficulty for team defense.",
      "best": "Teamwork and exciting lesson peaks."
    },
    "find_difference": {
      "subjects": "Observation, art, science images, reading details",
      "play": "Students find differences between two images.",
      "setup": "Upload or use sample images and set the number of differences.",
      "best": "Visual discrimination and observation training."
    },
    "keyword_beachhead": {
      "subjects": "Keywords, reading comprehension, history points, science terms",
      "play": "Teams capture keyword zones by answering correctly.",
      "setup": "Enter keywords and clues for team play.",
      "best": "Theme review, concept consolidation and team response."
    },
    "timeline_sort_challenge": {
      "subjects": "History, science experiments, writing process, project steps",
      "play": "Students arrange events or steps in the correct order.",
      "setup": "Enter event cards; the game shuffles them.",
      "best": "History timelines and process learning."
    },
    "image_label_match": {
      "subjects": "Image recognition, science diagrams, maps, vocabulary",
      "play": "Students drag labels to the matching image or position.",
      "setup": "Upload images and enter labels.",
      "best": "Visual learning, diagrams and bilingual vocabulary."
    },
    "team_relay_quiz": {
      "subjects": "All-subject review, team competition, unit tests",
      "play": "Teams answer in relay turns; correct answers advance progress.",
      "setup": "Set teams, questions and win condition.",
      "best": "Large classes and team cooperation."
    },
    "platform_quiz": {
      "subjects": "Languages, math, science, integrated quiz",
      "play": "A character clears platform stages by answering questions.",
      "setup": "Enter stage questions for adventure play.",
      "best": "High-engagement challenge lessons."
    },
    "dungeon_dragon_raid": {
      "subjects": "Integrated review, story quiz, teamwork",
      "play": "Teams raid a dungeon, fight monsters, heal, find keys and defeat a dragon.",
      "setup": "Prepare question bank and stage settings.",
      "best": "Longer review sessions and gamified events."
    },
    "picture_word_guess": {
      "subjects": "Chinese words, English vocabulary, Malay words, picture speaking",
      "play": "Image tiles reveal gradually; teams buzz to guess the word/answer.",
      "setup": "Upload image and answer; set teams and reveal speed.",
      "best": "Vocabulary teaching and picture-based guessing."
    },
    "two_team_puzzle_duel": {
      "subjects": "Image observation, maps, science pictures, textbook images",
      "play": "Two teams solve the same image puzzle at the same time.",
      "setup": "Upload image and set puzzle grid/team mode.",
      "best": "Whiteboard team duel and visual review."
    },
    "island_conquest": {
      "subjects": "Strategy quiz, geography, history, integrated review",
      "play": "Teams conquer hex islands and answer questions to move.",
      "setup": "Set map, starting points, obstacles, rounds and questions.",
      "best": "Advanced strategy lessons and long activities."
    },
    "kingdom_resource_battle": {
      "subjects": "Integrated quiz, AI literacy, economics, resource management",
      "play": "Teams develop farms, forests and mines, earn resources and trigger event cards.",
      "setup": "Set questions, event cards, rounds and target score.",
      "best": "Project-based review and strategic team battle."
    },
    "spot_diff_v2": {
      "subjects": "Observation, image reading, art, science images, safety education",
      "play": "Students spot differences between left/right images with optional red answer mask.",
      "setup": "Built-in admin allows levels to be added, edited and deleted.",
      "best": "Multi-level observation challenges and whiteboard play."
    }
  },
  "ms": {
    "memory_match": {
      "subjects": "Bahasa, kosa kata, fakta matematik, konsep sains",
      "play": "Murid membuka dua kad dan memadankan pasangan yang betul.",
      "setup": "Guru masukkan pasangan padanan; sesuai untuk pemanasan 5–10 minit.",
      "best": "Pemanasan, ingatan kosa kata dan padanan konsep."
    },
    "true_false": {
      "subjects": "Semua subjek, literasi AI, keselamatan, fakta sains",
      "play": "Murid memilih betul atau salah dengan maklum balas segera.",
      "setup": "Sediakan soalan benar/salah untuk semak kefahaman kelas.",
      "best": "Set induksi, penutup dan semakan pantas."
    },
    "sentence_order": {
      "subjects": "Bahasa Cina, Inggeris, Melayu, sejarah, proses sains",
      "play": "Murid menyusun ayat atau langkah mengikut urutan betul.",
      "setup": "Masukkan ayat, langkah atau peristiwa; sistem akan mengacaknya.",
      "best": "Urutan ayat, proses dan logik bacaan."
    },
    "treasure_box": {
      "subjects": "Bahasa, matematik, sains, pengetahuan am, nilai",
      "play": "Murid memilih peti harta untuk mendapatkan soalan dan ganjaran.",
      "setup": "Masukkan bank soalan; sistem memilih secara rawak.",
      "best": "Ulang kaji santai dan interaksi ganjaran."
    },
    "lucky_wheel": {
      "subjects": "Ulang kaji semua subjek, kuiz kelas, aktiviti tema",
      "play": "Roda menentukan soalan atau cabaran untuk kumpulan.",
      "setup": "Masukkan soalan atau tugasan; putar untuk pilih.",
      "best": "Pemanasan, ulang kaji dan penglibatan murid."
    },
    "text_match": {
      "subjects": "Kosa kata, ejaan, definisi, formula dan jawapan",
      "play": "Murid menyeret teks, jawapan atau label ke tempat betul.",
      "setup": "Masukkan dua set item padanan.",
      "best": "Kosa kata, formula dan ulang kaji konsep."
    },
    "whack_mole": {
      "subjects": "Kuiz pantas, sifir, bacaan perkataan, konsep sains",
      "play": "Murid klik sasaran yang betul dengan cepat.",
      "setup": "Sediakan bank soalan untuk latihan pantas.",
      "best": "Papan putih interaktif dan hafalan pantas."
    },
    "classification_conveyor": {
      "subjects": "Klasifikasi sains, tatabahasa, bentuk, gambar",
      "play": "Murid mengelaskan item pada tali sawat ke kategori betul.",
      "setup": "Tetapkan kategori dan tambah item teks atau gambar.",
      "best": "Pengelasan konsep dan pengenalan imej."
    },
    "image_puzzle_speed_race": {
      "subjects": "Seni, gambar sains, peta, ilustrasi buku teks",
      "play": "Kumpulan menyusun puzzle gambar dan masa direkodkan.",
      "setup": "Muat naik imej dan tetapkan tahap/kumpulan.",
      "best": "Pemerhatian imej dan pertandingan kumpulan."
    },
    "bomb_quiz": {
      "subjects": "Ulang kaji berwaktu, persediaan peperiksaan, semakan konsep",
      "play": "Bom kira detik mewujudkan cabaran masa.",
      "setup": "Masukkan soalan dan tetapan masa.",
      "best": "Murid tahap tinggi dan ulang kaji kompetitif."
    },
    "knowledge_race": {
      "subjects": "Pengetahuan am, sains, sejarah, bahasa",
      "play": "Jawapan betul menggerakkan pasukan dalam perlumbaan.",
      "setup": "Tetapkan soalan dan pasukan.",
      "best": "Pertandingan kuiz kelas."
    },
    "monster_defense": {
      "subjects": "Matematik, kosa kata, sains, ulang kaji unit",
      "play": "Murid menjawab soalan untuk mempertahankan diri daripada raksasa.",
      "setup": "Masukkan soalan dan tahap kesukaran.",
      "best": "Kerjasama pasukan dan suasana aktif."
    },
    "find_difference": {
      "subjects": "Pemerhatian, seni, imej sains, perincian bacaan",
      "play": "Murid mencari perbezaan antara dua gambar.",
      "setup": "Muat naik imej atau guna contoh dan tetapkan jumlah perbezaan.",
      "best": "Latihan pemerhatian dan diskriminasi visual."
    },
    "keyword_beachhead": {
      "subjects": "Kata kunci, kefahaman bacaan, sejarah, istilah sains",
      "play": "Pasukan menawan zon kata kunci dengan jawapan betul.",
      "setup": "Masukkan kata kunci dan petunjuk.",
      "best": "Ulang kaji tema dan pengukuhan konsep."
    },
    "timeline_sort_challenge": {
      "subjects": "Sejarah, eksperimen sains, proses menulis, langkah projek",
      "play": "Murid menyusun peristiwa atau langkah mengikut urutan betul.",
      "setup": "Masukkan kad peristiwa dan sistem mengacaknya.",
      "best": "Garis masa sejarah dan pembelajaran proses."
    },
    "image_label_match": {
      "subjects": "Pengenalan gambar, rajah sains, peta, kosa kata",
      "play": "Murid menyeret label ke gambar atau posisi yang betul.",
      "setup": "Muat naik imej dan masukkan label.",
      "best": "Pembelajaran visual dan kosa kata dwibahasa."
    },
    "team_relay_quiz": {
      "subjects": "Ulang kaji semua subjek, pertandingan kumpulan, ujian unit",
      "play": "Pasukan menjawab secara bergilir dan maju apabila betul.",
      "setup": "Tetapkan pasukan, soalan dan syarat kemenangan.",
      "best": "Kelas besar dan kerjasama kumpulan."
    },
    "platform_quiz": {
      "subjects": "Bahasa, matematik, sains, kuiz integrasi",
      "play": "Watak melepasi platform dengan menjawab soalan.",
      "setup": "Masukkan soalan untuk setiap peringkat.",
      "best": "Kelas cabaran yang sangat menarik."
    },
    "dungeon_dragon_raid": {
      "subjects": "Ulang kaji integrasi, kuiz cerita, kerjasama",
      "play": "Pasukan menyerbu dungeon, melawan raksasa dan mengalahkan naga.",
      "setup": "Sediakan bank soalan dan tetapan peringkat.",
      "best": "Sesi ulang kaji panjang dan acara gamifikasi."
    },
    "picture_word_guess": {
      "subjects": "Perkataan Cina, Inggeris, Melayu, bercerita berdasarkan gambar",
      "play": "Bahagian gambar dibuka sedikit demi sedikit dan pasukan meneka.",
      "setup": "Muat naik gambar dan jawapan; tetapkan kumpulan dan kelajuan.",
      "best": "Pengajaran kosa kata dan teka gambar."
    },
    "two_team_puzzle_duel": {
      "subjects": "Pemerhatian gambar, peta, gambar sains, ilustrasi buku",
      "play": "Dua pasukan menyusun gambar yang sama serentak.",
      "setup": "Muat naik gambar dan tetapkan grid/kumpulan.",
      "best": "Pertandingan papan putih dan ulang kaji visual."
    },
    "island_conquest": {
      "subjects": "Kuiz strategi, geografi, sejarah, ulang kaji integrasi",
      "play": "Pasukan menawan pulau heksagon melalui jawapan betul.",
      "setup": "Tetapkan peta, titik mula, halangan, pusingan dan soalan.",
      "best": "Aktiviti strategi tahap tinggi."
    },
    "kingdom_resource_battle": {
      "subjects": "Kuiz integrasi, literasi AI, ekonomi, pengurusan sumber",
      "play": "Pasukan membangunkan ladang, hutan dan lombong serta mencetuskan kad peristiwa.",
      "setup": "Tetapkan soalan, kad peristiwa, pusingan dan skor sasaran.",
      "best": "Ulang kaji berasaskan projek dan strategi kumpulan."
    },
    "spot_diff_v2": {
      "subjects": "Pemerhatian, pembacaan imej, seni, imej sains, keselamatan",
      "play": "Murid mencari perbezaan antara gambar kiri dan kanan.",
      "setup": "Admin terbina membolehkan guru tambah, edit dan padam tahap.",
      "best": "Cabaran pemerhatian berbilang tahap."
    }
  }
};


const I18N = {
  zh: {
    appTitle:'课堂游戏模板网站',
    tagline:'老师后台｜模板套用｜白板上课｜离线下载',
    authBullet1:'管理員可控制每個用戶能使用哪些遊戲。',
    authBullet2:'免費註冊即可先用 2 個遊戲，完善資料後再送 1 個。',
    authBullet3:'播放器採用白板專用安全模式，並提供離線 ZIP 下載。',
    authBullet4:'適合互動白板、投影機、電腦螢幕。',
    login:'登录', register:'账号申请', username:'账号', password:'密码', confirmPassword:'确认密码',
    name:'姓名', quickAdmin:'管理员登录', resetDemo:'重置 Demo', loginFail:'登录失败，请检查账号或密码。',
    fillAll:'请完整填写资料', passwordMismatch:'两次密码不一致', accountExists:'账号已存在', registerSuccess:'注册成功，请登录',
    demoAccounts:'測試帳號：admin / admin123 ｜ 一般用戶：teacher / 123456',
    dashboardSub:'免登入版本，老師可直接進入後台設定題庫與遊戲包',
    currentUser:'目前用户', admin:'管理员', user:'用户', logout:'退出',
    accountInfo:'账号资讯', role:'角色', package:'配套', normalUser:'一般用户',
    planInfo:'方案说明', single:'配套 1', pick5:'配套 2', all_access:'配套 3',
    singleDesc:'初阶 RM20 / 款；进阶 RM30 / 款；高阶 RM50 / 款', pick5Desc:'RM100 任选五个模板', allAccessDesc:'原价 RM790，特惠 RM300，包含未来新开发游戏',
    demoBuy:'Demo 購買', chooseSingle:'請在遊戲卡片上選擇要單獨購買的遊戲。',
    openAdmin:'打開老師後台', adminPanel:'老師後台', collapse:'收起',
    adminHelp:'此版本不需要登入；老師可直接設定題庫、素材與遊戲包。',
    authorizedGames:'已授权游戏', operation:'操作', save:'保存设置', selectAll:'全选', clear:'清除',
    freeUser:'免费用户', pack2:'配套 2（五選）', pack3:'配套 3（全授權）',
    playerFeatures:'播放器特色', featureLines:'• 全屏時保持中央安全區<br>• 自動等比放大<br>• 不出現上下軸<br>• 適合互動白板',
    whiteboardMode:'白板專用模式', whiteboardDesc:'打開遊戲後會自動進入中央安全區，按鈕放大，適合互動白板上課。',
    enabled:'預設已開啟', offlineZip:'離線 ZIP 下載', offlineDesc:'老師先制作題庫，再套用版型生成完整遊戲壓縮包。',
    downloadAll:'下载全部离线包', gameMaker:'遊戲制作', makerDesc:'先整理課堂標題與題庫；正式版可自動寫入設定並打包下載。',
    openMaker:'打开制作区', makerTitle:'遊戲制作資料填寫區',
    makerHelp:'老師先選擇遊戲版型，再填入題庫或上傳素材。按「生成遊戲包」後，系統會把版型與題庫打包成完整 ZIP。',
    titlePlaceholder:'課堂遊戲標題，例如：第3課 詞語複習', subjectPlaceholder:'科目 / 年級，例如：華文 三年級',
    questionsPlaceholder:'輸入題目資料。建議格式：\\n題目 | 答案 | 選項A,選項B,選項C\\n或直接貼上你的題庫內容',
    downloadQuestionTxt:'下載題庫 TXT', availableGames:'可用游戏', lockedGames:'尚未授权',
    freeGamesNote:'註冊送 2 個遊戲，完善資料再送 1 個，其餘可單購或升級配套', lockedNote:'管理員可授權，或使用 Demo 購買',
    free:'免費', paid:'付費', available:'已可使用', locked:'未授权', whiteboardClass:'白板上课', downloadZip:'下载ZIP', make:'制作',
    singleBuy:'单款购买', addPick5:'加入五選配套', playing:'正在播放', playerSubtitle:'白板專用｜中央安全區｜無上下軸｜三語切換',
    safe169:'16:9 安全區', safe43:'4:3 安全區', auto:'自動', browserFullscreen:'瀏覽器全屏', close:'關閉',
    announcements1:'免費註冊可先使用 3 個基礎遊戲。', announcements2:'平台已加入三語切換、白板安全顯示、圖片拼圖與孤島搶奪賽。',
    language:'语言',
    gameNames: {
      memory_match:'翻翻樂', true_false:'真假判斷快閃', sentence_order:'句子排序挑戰', treasure_box:'寶箱開開看',
      lucky_wheel:'幸運轉盤問答', classification_conveyor:'分類運輸帶', platform_quiz:'平台闖關問答',
      monster_defense:'怪獸防守戰', whack_mole:'打地鼠問答', text_match:'文字對應', bomb_quiz:'炸彈倒數搶答',
      knowledge_race:'知識賽馬', dungeon_dragon_raid:'地牢巨龍討伐戰', image_puzzle_speed_race:'图片拼图竞速赛', two_team_puzzle_duel:'双组拼图对战', island_conquest:'孤岛抢夺赛', timeline_sort_challenge:'时间线排序挑战', image_label_match:'图片标签配对赛', team_relay_quiz:'团队答题接力赛', find_difference:'大家來找不同', keyword_beachhead:'关键词抢滩战', kingdom_resource_battle:'王国资源争夺战：围绕中央王都开发农田、森林与金矿，并触发随机好坏事件。'
    },
    gameDesc: {
      memory_match:'記憶翻牌配對，適合暖身與小組競賽。', true_false:'快速判斷題，提升反應力與概念辨識。',
      sentence_order:'適合語文課堂，訓練句子與流程排序。', treasure_box:'抽題與闖關式互動，增加課堂驚喜感。',
      lucky_wheel:'轉盤抽題，適合班級搶答活動。', classification_conveyor:'支援圖片與文字分類，老師可按分類上傳圖片，學生在運輸帶上點選正確分類。',
      platform_quiz:'角色闖關搭配問答，遊戲感較強。', monster_defense:'答題防守玩法，適合團體合作。',
      whack_mole:'互動白板很好玩，學生參與度高。', text_match:'詞語、拼字、配對類題目都適合。',
      bomb_quiz:'限時壓力感強，適合複習與競賽。', knowledge_race:'比賽感強，適合全班分組對抗。',
      dungeon_dragon_raid:'地牢RPG闖關，兩隊答題打怪、補血、找鑰匙，最後討伐巨龍。',
      image_puzzle_speed_race:'老师上传图片作为题目，各组轮流拼图，系统记录时间，最快组别胜利。',
      two_team_puzzle_duel:'两组同时拼同一张图片，适合互动白板分组竞赛，最快完成者胜利。',
      island_conquest:'两队在大海上的六边形岛屿抢占土地，可设定胜利条件、起点、海草障碍与回合限制。',
      timeline_sort_challenge:'老师输入事件或步骤，学生拖动卡片排成正确时间线，适合历史、科学流程与项目步骤。',
      image_label_match:'老师上传图片并输入标签，学生把正确标签拖到对应图片，适合识图、词汇与概念学习。',
      team_relay_quiz:'分组轮流答题，答对前进，先完成接力进度的队伍获胜。'
    }
  },
  en: {
    appTitle:'Classroom Game Template Platform',
    tagline:'Admin control | User access | Whiteboard mode | Offline ZIP',
    authBullet1:'Admins can control which games each user can use.',
    authBullet2:'Free registration includes 2 games, and completing the profile unlocks 1 more.',
    authBullet3:'The player uses a whiteboard-safe display mode and supports offline ZIP download.',
    authBullet4:'Suitable for interactive whiteboards, projectors and computer screens.',
    login:'Login', register:'Free registration', username:'Username', password:'Password', confirmPassword:'Confirm password',
    name:'Name', quickAdmin:'Admin login', resetDemo:'Reset demo', loginFail:'Login failed. Please check your username or password.',
    fillAll:'Please complete all fields', passwordMismatch:'The two passwords do not match', accountExists:'This username already exists', registerSuccess:'Registration successful. Please login.',
    demoAccounts:'Demo accounts: admin / admin123 | Teacher: teacher / 123456',
    dashboardSub:'After admin authorization, users only see the games they can use',
    currentUser:'Current user', admin:'Admin', user:'User', logout:'Logout',
    accountInfo:'Account info', role:'Role', package:'Package', normalUser:'Standard user',
    planInfo:'Package plans', single:'Plan 1', pick5:'Plan 2', all_access:'Plan 3',
    singleDesc:'Beginner RM20, Intermediate RM30, Advanced RM50 per template', pick5Desc:'RM100 for any 5 templates', allAccessDesc:'Total RM790, promo RM300, including future new games',
    demoBuy:'Demo purchase', chooseSingle:'Please choose an individual game from the game card.',
    openAdmin:'Open admin panel', adminPanel:'Admin panel', collapse:'Collapse',
    adminHelp:'Admins can set which games each user may use. Free games do not require extra authorization.',
    authorizedGames:'Authorized games', operation:'Actions', save:'Save', selectAll:'Select all', clear:'Clear',
    freeUser:'Free user', pack2:'Plan 2 (pick 5)', pack3:'Plan 3 (all access)',
    playerFeatures:'Player features', featureLines:'• Keeps content in the central safe area<br>• Auto proportional scaling<br>• No vertical scrollbars<br>• Suitable for interactive whiteboards',
    whiteboardMode:'Whiteboard mode', whiteboardDesc:'Games open in a central safe area with larger controls for whiteboard teaching.',
    enabled:'Enabled by default', offlineZip:'Offline ZIP download', offlineDesc:'Teachers create content first, then apply a template to generate a complete game ZIP.',
    downloadAll:'Download all offline pack', gameMaker:'Game maker', makerDesc:'Prepare class title and questions; the full version can write settings and generate a ZIP.',
    openMaker:'Open maker', makerTitle:'Game maker data panel',
    makerHelp:'Choose a game template, then add questions or materials. Click Generate Game Pack to package the template and content into a complete ZIP.',
    titlePlaceholder:'Game title, e.g. Lesson 3 Vocabulary Review', subjectPlaceholder:'Subject / grade, e.g. English Year 3',
    questionsPlaceholder:'Enter questions. Suggested format:\\nQuestion | Answer | Option A,Option B,Option C\\nOr paste your question bank here',
    downloadQuestionTxt:'Download question TXT', availableGames:'Available games', lockedGames:'Not authorized',
    freeGamesNote:'2 games after registration, 1 more after completing profile. Other games can be bought or unlocked with a package.', lockedNote:'Admin may authorize it, or use demo purchase.',
    free:'Free', paid:'Paid', available:'Available', locked:'Locked', whiteboardClass:'Whiteboard class', downloadZip:'Download ZIP', make:'Make',
    singleBuy:'Buy single', addPick5:'Add to pick-5 plan', playing:'Now playing', playerSubtitle:'Whiteboard mode | Central safe area | No scrollbars | Trilingual',
    safe169:'16:9 Safe', safe43:'4:3 Safe', auto:'Auto', browserFullscreen:'Browser fullscreen', close:'Close',
    announcements1:'Free registration includes 3 basic games.', announcements2:'Chinese, English and Malay language switching has been added, while keeping whiteboard-safe display.',
    language:'Language',
    gameNames: {
      memory_match:'Memory Match', true_false:'True/False Flash', sentence_order:'Sentence Order Challenge', treasure_box:'Treasure Box',
      lucky_wheel:'Lucky Wheel Quiz', classification_conveyor:'Classification Conveyor', platform_quiz:'Platform Quiz Adventure',
      monster_defense:'Monster Defense', whack_mole:'Whack-a-Mole Quiz', text_match:'Text Matching', bomb_quiz:'Bomb Countdown Quiz',
      knowledge_race:'Knowledge Race', dungeon_dragon_raid:'Dungeon Dragon Raid', image_puzzle_speed_race:'Image Puzzle Speed Race', two_team_puzzle_duel:'Two-Team Puzzle Duel', island_conquest:'Island Conquest', timeline_sort_challenge:'Timeline Sorting Challenge', image_label_match:'Image Label Matching', team_relay_quiz:'Team Relay Quiz', find_difference:'Let\'s Find the Differences', keyword_beachhead:'Keyword Beachhead Battle', kingdom_resource_battle:'Kingdom Resource Battle'
    },
    gameDesc: {
      memory_match:'A memory card matching game for warm-ups and team competition.', true_false:'Fast true/false questions for reaction and concept checking.',
      sentence_order:'Great for language lessons, sentence order and process sequencing.', treasure_box:'Question drawing and checkpoint gameplay with surprise elements.',
      lucky_wheel:'Spin the wheel to draw questions for class quiz activities.', classification_conveyor:'Supports image and text classification. Teachers upload images by category and students choose the correct conveyor category.',
      platform_quiz:'Character platform adventure with quiz checkpoints.', monster_defense:'Answer questions to defend against monsters in team play.',
      whack_mole:'Highly interactive whiteboard game for class participation.', text_match:'Suitable for vocabulary, spelling and matching tasks.',
      bomb_quiz:'Timed quiz pressure for revision and competition.', knowledge_race:'Race-style team competition for whole-class review.',
      dungeon_dragon_raid:'Dungeon RPG where teams answer, fight monsters, heal, find keys and defeat the dragon.',
      image_puzzle_speed_race:'Teachers upload an image as the question. Teams solve it in turns and the fastest time wins.',
      two_team_puzzle_duel:'Two teams solve the same uploaded image puzzle at the same time. Fastest team wins.',
      island_conquest:'Two teams capture hex islands over the sea, with configurable win condition, starting positions, seaweed barriers and round limit.',
      timeline_sort_challenge:'Teachers enter events or steps. Students drag cards into the correct timeline for history, processes and project steps.',
      image_label_match:'Teachers upload images and labels. Students drag each label to the correct image for vocabulary and concept learning.',
      team_relay_quiz:'Teams answer in turns. Correct answers move forward; the first team to finish the relay wins.',
      find_difference:'Teachers upload an original and a modified image, then mark 5 difference spots. Students play a classic spot-the-difference game on the right image. 5 wrong taps fails; all 5 found clears the round.',
      keyword_beachhead:'Two teams take turns selecting correct keywords. Correct answers capture beach ground and score points.',
      kingdom_resource_battle:'Two kingdoms fight for farms, forests and gold mines. Students answer questions to capture strategic resource nodes.'
    }
  },
  ms: {
    appTitle:'Platform Templat Permainan Kelas',
    tagline:'Kawalan admin | Akses pengguna | Mod papan putih | ZIP luar talian',
    authBullet1:'Admin boleh mengawal permainan yang boleh digunakan oleh setiap pengguna.',
    authBullet2:'Pendaftaran percuma menyediakan 2 permainan, dan lengkap profil untuk membuka 1 lagi.',
    authBullet3:'Pemain menggunakan paparan selamat untuk papan putih dan menyokong muat turun ZIP luar talian.',
    authBullet4:'Sesuai untuk papan putih interaktif, projektor dan skrin komputer.',
    login:'Log masuk', register:'Daftar percuma', username:'Nama pengguna', password:'Kata laluan', confirmPassword:'Sahkan kata laluan',
    name:'Nama', quickAdmin:'Log masuk admin', resetDemo:'Tetapkan semula demo', loginFail:'Log masuk gagal. Sila semak nama pengguna atau kata laluan.',
    fillAll:'Sila lengkapkan semua maklumat', passwordMismatch:'Kata laluan tidak sepadan', accountExists:'Nama pengguna telah wujud', registerSuccess:'Pendaftaran berjaya. Sila log masuk.',
    demoAccounts:'Akaun demo: admin / admin123 | Guru: teacher / 123456',
    dashboardSub:'Selepas kebenaran admin, pengguna hanya melihat permainan yang dibenarkan',
    currentUser:'Pengguna semasa', admin:'Admin', user:'Pengguna', logout:'Log keluar',
    accountInfo:'Maklumat akaun', role:'Peranan', package:'Pakej', normalUser:'Pengguna biasa',
    planInfo:'Pakej', single:'Pakej 1', pick5:'Pakej 2', all_access:'Pakej 3',
    singleDesc:'Asas RM20, Pertengahan RM30, Lanjutan RM50 setiap templat', pick5Desc:'RM100 pilih mana-mana 5 templat', allAccessDesc:'Jumlah RM790, promosi RM300, termasuk permainan baharu akan datang',
    demoBuy:'Beli demo', chooseSingle:'Sila pilih permainan individu daripada kad permainan.',
    openAdmin:'Buka panel admin', adminPanel:'Panel admin', collapse:'Tutup',
    adminHelp:'Admin boleh menetapkan permainan yang boleh digunakan oleh setiap pengguna. Permainan percuma tidak memerlukan kebenaran tambahan.',
    authorizedGames:'Permainan dibenarkan', operation:'Tindakan', save:'Simpan', selectAll:'Pilih semua', clear:'Kosongkan',
    freeUser:'Pengguna percuma', pack2:'Pakej 2 (pilih 5)', pack3:'Pakej 3 (akses penuh)',
    playerFeatures:'Ciri pemain', featureLines:'• Kekalkan kandungan di kawasan selamat tengah<br>• Skala automatik berkadar<br>• Tiada bar skrol menegak<br>• Sesuai untuk papan putih interaktif',
    whiteboardMode:'Mod papan putih', whiteboardDesc:'Permainan dibuka dalam kawasan selamat tengah dengan butang yang lebih besar untuk pengajaran.',
    enabled:'Diaktifkan secara lalai', offlineZip:'Muat turun ZIP luar talian', offlineDesc:'Guru menyediakan kandungan dahulu, kemudian menggunakan templat untuk menjana ZIP permainan lengkap.',
    downloadAll:'Muat turun semua pek luar talian', gameMaker:'Pembina permainan', makerDesc:'Sediakan tajuk kelas dan soalan; versi penuh boleh menjana ZIP secara automatik.',
    openMaker:'Buka pembina', makerTitle:'Panel data pembina permainan',
    makerHelp:'Pilih templat permainan, kemudian tambah soalan atau bahan. Klik Jana Pek Permainan untuk membungkus templat dan kandungan sebagai ZIP lengkap.',
    titlePlaceholder:'Tajuk permainan, contoh: Ulang Kaji Kosa Kata Bab 3', subjectPlaceholder:'Subjek / tahun, contoh: BM Tahun 3',
    questionsPlaceholder:'Masukkan soalan. Format cadangan:\\nSoalan | Jawapan | Pilihan A,Pilihan B,Pilihan C\\nAtau tampal bank soalan anda',
    downloadQuestionTxt:'Muat turun TXT soalan', availableGames:'Permainan tersedia', lockedGames:'Belum dibenarkan',
    freeGamesNote:'2 permainan selepas daftar, 1 lagi selepas lengkap profil. Permainan lain boleh dibeli atau dibuka melalui pakej.', lockedNote:'Admin boleh memberi kebenaran, atau gunakan pembelian demo.',
    free:'Percuma', paid:'Berbayar', available:'Boleh digunakan', locked:'Dikunci', whiteboardClass:'Kelas papan putih', downloadZip:'Muat turun ZIP', make:'Bina',
    singleBuy:'Beli satu', addPick5:'Tambah ke pakej pilih-5', playing:'Sedang dimainkan', playerSubtitle:'Mod papan putih | Kawasan selamat tengah | Tiada skrol | Tiga bahasa',
    safe169:'Selamat 16:9', safe43:'Selamat 4:3', auto:'Auto', browserFullscreen:'Skrin penuh', close:'Tutup',
    announcements1:'Pendaftaran percuma menyediakan 3 permainan asas.', announcements2:'Pertukaran bahasa Cina, Inggeris dan Melayu telah ditambah, dengan paparan selamat papan putih.',
    language:'Bahasa',
    gameNames: {
      memory_match:'Padanan Memori', true_false:'Benar/Palsu Pantas', sentence_order:'Cabaran Susun Ayat', treasure_box:'Buka Peti Harta',
      lucky_wheel:'Kuiz Roda Bertuah', classification_conveyor:'Tali Sawat Klasifikasi', platform_quiz:'Pengembaraan Platform Kuiz',
      monster_defense:'Pertahanan Raksasa', whack_mole:'Kuiz Ketuk Tikus', text_match:'Padanan Teks', bomb_quiz:'Kuiz Bom Kiraan Detik',
      knowledge_race:'Lumba Pengetahuan', dungeon_dragon_raid:'Serbuan Naga Bawah Tanah', image_puzzle_speed_race:'Perlumbaan Pantas Puzzle Gambar', two_team_puzzle_duel:'Duel Puzzle Dua Kumpulan', island_conquest:'Perebutan Pulau', timeline_sort_challenge:'Cabaran Susun Garis Masa', image_label_match:'Padanan Label Gambar', team_relay_quiz:'Kuiz Relay Berkumpulan', find_difference:'Mari Cari Perbezaan', keyword_beachhead:'Pertempuran Pantai Kata Kunci', kingdom_resource_battle:'Pertempuran Sumber Kerajaan'
    },
    gameDesc: {
      memory_match:'Permainan padanan kad memori untuk pemanasan dan pertandingan kumpulan.', true_false:'Soalan benar/palsu pantas untuk semakan konsep.',
      sentence_order:'Sesuai untuk pelajaran bahasa, susunan ayat dan urutan proses.', treasure_box:'Cabutan soalan dan permainan berperingkat dengan unsur kejutan.',
      lucky_wheel:'Putar roda untuk memilih soalan kuiz kelas.', classification_conveyor:'Menyokong klasifikasi gambar dan teks. Guru memuat naik gambar mengikut kategori dan murid memilih kategori yang betul.',
      platform_quiz:'Pengembaraan watak dengan titik kuiz.', monster_defense:'Jawab soalan untuk mempertahankan pasukan daripada raksasa.',
      whack_mole:'Permainan papan putih yang sangat interaktif.', text_match:'Sesuai untuk kosa kata, ejaan dan padanan.',
      bomb_quiz:'Kuiz bermasa untuk ulang kaji dan pertandingan.', knowledge_race:'Pertandingan gaya lumba untuk ulang kaji kelas.',
      dungeon_dragon_raid:'RPG bawah tanah: jawab soalan, lawan raksasa, pulihkan nyawa, cari kunci dan tewaskan naga.',
      image_puzzle_speed_race:'Guru memuat naik gambar sebagai soalan. Kumpulan menyusun secara bergilir dan masa terpantas menang.',
      two_team_puzzle_duel:'Dua kumpulan menyusun puzzle gambar yang sama secara serentak. Kumpulan terpantas menang.',
      island_conquest:'Dua pasukan merebut pulau heksagon di laut, dengan syarat menang, kedudukan mula, halangan rumpai laut dan had pusingan yang boleh ditetapkan.',
      timeline_sort_challenge:'Guru memasukkan peristiwa atau langkah. Murid menyeret kad ke garis masa yang betul.',
      image_label_match:'Guru memuat naik gambar dan label. Murid menyeret label ke gambar yang betul.',
      team_relay_quiz:'Pasukan menjawab secara bergilir. Jawapan betul maju; pasukan pertama tamat menang.',
      find_difference:'Guru memuat naik gambar asal dan gambar diubah, kemudian menanda 5 lokasi perbezaan. Murid bermain gaya klasik cari perbezaan pada gambar kanan. Salah 5 kali gagal; jumpa semua 5 dikira lulus.',
      keyword_beachhead:'Dua kumpulan bergilir-gilir memilih kata kunci yang betul. Jawapan betul merampas pantai dan memperoleh markah.',
      kingdom_resource_battle:'Dua kerajaan berebut ladang, hutan dan lombong emas. Murid menjawab soalan untuk menawan nod sumber secara strategik.'
    }
  }
};

const STORAGE_KEY = 'classroom_games_hybrid_auth_v1';
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
let state = loadState();
let currentAspectMode = 'auto';
let currentPlayerGame = null;

function L(){ return I18N[state.lang || 'zh'] || I18N.zh; }
function t(key){ return L()[key] ?? I18N.zh[key] ?? key; }
function gameName(id){ return L().gameNames?.[id] || I18N.zh.gameNames[id] || id; }
function gameDesc(id){ return L().gameDesc?.[id] || I18N.zh.gameDesc[id] || ''; }

function gameLevel(id){
  for(const level of LEVEL_ORDER){
    if((GAME_LEVELS[level] || []).includes(id)) return level;
  }
  return 'beginner';
}
function levelText(level){
  return (LEVEL_TEXT[state.lang || 'zh'] || LEVEL_TEXT.zh)[level] || LEVEL_TEXT.zh[level] || {label:level, desc:''};
}
function gameCode(id){
  const game = GAME_DATA.find(g => g.id === id);
  return game?.code || id;
}
function gamePreview(id){
  const game = GAME_DATA.find(g => g.id === id);
  return game?.preview || '';
}
function langSelect(id='langSelect'){
  return `<label class="lang-wrap">${t('language')} <select id="${id}" class="select lang-select">${LANGS.map(l=>`<option value="${l.id}" ${state.lang===l.id?'selected':''}>${l.label}</option>`).join('')}</select></label>`;
}
function bindLangSelects(){
  $$('.lang-select').forEach(sel => {
    sel.onchange = () => { state.lang = sel.value; saveState(); render(); };
  });
}

function defaultState(){
  return {
    lang:'zh',
    feedback:[],
    users:[
      {
        id:'u_admin',
        email:'admin@lead.ai',
        username:'admin@lead.ai',
        password:'admin123',
        name:'系統管理員',
        role:'admin',
        accountStatus:'approved',
        disabled:false,
        ownedGames: GAME_DATA.map(g=>g.id),
        package:'all_access',
        profileCompleted:true,
        profile:{email:'admin@lead.ai', phone:'', chineseName:'系統管理員', englishName:'Admin', state:'Johor', orgTypes:['其他']}
      },
      {
        id:'u_teacher',
        email:'teacher@example.com',
        username:'teacher@example.com',
        password:'123456',
        name:'示範老師',
        role:'user',
        accountStatus:'approved',
        disabled:false,
        ownedGames: GAME_DATA.map(g=>g.id),
        package:'all_access',
        profileCompleted:true,
        profile:{email:'teacher@example.com', phone:'', chineseName:'示範老師', englishName:'Demo Teacher', state:'Johor', orgTypes:['學校老師']}
      }
    ],
    currentUser:null
  };
}


function saveMigratedState(nextState){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState)); }catch(e){} }
function ensureDefaultAccounts(parsed){
  parsed.users = Array.isArray(parsed.users) ? parsed.users : [];
  const defaults = defaultState().users;
  defaults.forEach(def => {
    let existing = parsed.users.find(u => normalizeEmail(u.email || u.username) === normalizeEmail(def.email));
    if(!existing){
      parsed.users.push({...def});
      return;
    }
    existing.id = existing.id || def.id;
    existing.email = def.email;
    existing.username = def.email;
    existing.name = existing.name || def.name;
    existing.role = def.role;
    existing.accountStatus = 'approved';
    existing.disabled = false;
    if(def.role === 'admin') {
      existing.password = 'admin123';
      existing.package = 'all_access';
      existing.ownedGames = GAME_DATA.map(g=>g.id);
    }
    if(def.email === 'teacher@example.com') {
      existing.password = '123456';
      existing.package = 'all_access';
      existing.ownedGames = GAME_DATA.map(g=>g.id);
    }
    existing.profile = existing.profile || def.profile;
    existing.profileCompleted = true;
  });
  return parsed;
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(!parsed.users || !Array.isArray(parsed.users)) return defaultState();
      if(!parsed.lang) parsed.lang='zh';
      if(!Array.isArray(parsed.feedback)) parsed.feedback=[];
      parsed.users.forEach(u=>{
        if(!u.email) u.email = u.username && u.username.includes('@') ? u.username : (u.username==='admin'?'admin@lead.ai':`${u.username || 'teacher'}@example.com`);
        u.username = u.email;
        if(!u.profile) u.profile = {email:u.email, phone:'', chineseName:u.name || '', englishName:'', state:'Johor', orgTypes:[]};
        if(!u.profile.email) u.profile.email = u.email;
        if(!u.accountStatus) u.accountStatus = 'approved';
        if(typeof u.disabled !== 'boolean') u.disabled = false;
        if(u.role==='admin') u.profileCompleted = true;
        if(typeof u.profileCompleted !== 'boolean') u.profileCompleted = isProfileComplete(u);
      });
      ensureDefaultAccounts(parsed);
      saveMigratedState(parsed);
      return parsed;
    }
  }catch(e){}
  const initial = defaultState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function resetDemo(){ state = defaultState(); saveState(); render(); }
function getUser(){ return state.users.find(u=>u.id===state.currentUser) || null; }
function findGame(id){ return GAME_DATA.find(g=>g.id===id); }
function userHasAccess(user, gameId){
  if(!user) return false;
  if(user.role==='admin') return true;
  if(user.package==='all_access') return true;
  if(BASE_FREE_GAMES.includes(gameId)) return true;
  return (user.ownedGames || []).includes(gameId);
}

function availableGamesForUser(user){ return GAME_DATA.filter(g => g.free || userHasAccess(user, g.id)); }
function lockedGamesForUser(user){ return GAME_DATA.filter(g => !(g.free || userHasAccess(user, g.id))); }

function normalizeEmail(email){
  return String(email || '').trim().toLowerCase();
}
function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(email));
}
function login(email, password){
  const normalized = normalizeEmail(email);
  const passwordText = String(password || '').trim();
  ensureDefaultAccounts(state);
  let user = state.users.find(u => normalizeEmail(u.email || u.username)===normalized && String(u.password || '').trim()===passwordText);
  if(!user && normalized==='admin@lead.ai' && passwordText==='admin123'){
    ensureDefaultAccounts(state);
    user = state.users.find(u => normalizeEmail(u.email || u.username)==='admin@lead.ai');
  }
  if(!user && normalized==='teacher@example.com' && passwordText==='123456'){
    ensureDefaultAccounts(state);
    user = state.users.find(u => normalizeEmail(u.email || u.username)==='teacher@example.com');
  }
  if(!user) return {ok:false, msg:t('loginFail')};
  if(user.disabled) return {ok:false, msg:'此帳號已停用，請聯絡管理員。'};
  if(user.accountStatus !== 'approved') return {ok:false, msg:'帳號申請已送出，請等待管理員批准。'};
  state.currentUser = user.id;
  saveState();
  render();
  return {ok:true, msg:''};
}
function registerTeacherAccount(name, email, phone){
  const normalized = normalizeEmail(email);
  const teacherName = String(name || '').trim();
  const phoneText = String(phone || '').trim();
  const c = authCopy();
  if(!teacherName || !normalized || !phoneText) return {ok:false, msg:t('fillAll')};
  if(!isValidEmail(normalized)) return {ok:false, msg:c.invalidEmail};
  if(state.users.some(u => normalizeEmail(u.email || u.username)===normalized)) return {ok:false, msg:t('accountExists')};
  state.users.push({
    id:'u_'+Date.now(),
    email:normalized,
    username:normalized,
    password:'123456',
    name:teacherName,
    role:'user',
    accountStatus:'pending',
    disabled:false,
    ownedGames:[],
    package:'free',
    profileCompleted:false,
    profile:{email:normalized, phone:phoneText, chineseName:teacherName, englishName:'', state:'Johor', orgTypes:[]}
  });
  saveState();
  return {ok:true, msg:c.registerSuccess};
}
function register(email, password){
  return registerTeacherAccount(email, email, '');
}
function isProfileComplete(user){
  const p = user?.profile || {};
  return !!(p.email && p.phone && (p.chineseName || p.englishName) && p.state && Array.isArray(p.orgTypes) && p.orgTypes.length);
}
function completeProfile(userId, profile){
  const user = state.users.find(u=>u.id===userId);
  if(!user) return false;
  user.profile = {...(user.profile||{}), ...profile, email:user.email};
  user.name = profile.chineseName || profile.englishName || user.email;
  const wasCompleted = user.profileCompleted;
  user.profileCompleted = isProfileComplete(user);
  if(user.profileCompleted && !wasCompleted && !user.ownedGames.includes(PROFILE_REWARD_GAME)){
    user.ownedGames.push(PROFILE_REWARD_GAME);
  }
  saveState();
  render();
  return true;
}
function submitFeedback(gameCode, message){
  const user = getUser();
  if(!user || !message.trim()) return false;
  state.feedback = state.feedback || [];
  state.feedback.unshift({
    id:'fb_'+Date.now(),
    date:new Date().toLocaleString(),
    userEmail:user.email,
    userName:user.name,
    gameCode:(gameCode||'').trim(),
    message:message.trim()
  });
  saveState();
  render();
  return true;
}

function logout(){ state.currentUser = null; saveState(); closePlayer(); render(); }

function render(){
  updatePlayerLabels();
  const app = $('#app');
  const user = getUser();
  if(!user){
    app.innerHTML = renderAuth();
    bindAuth();
    bindLangSelects();
    return;
  }
  app.innerHTML = renderDashboard(user);
  bindDashboard();
  bindLangSelects();
}


function authCopy(){
  const lang = state.lang || 'zh';
  return TEMPLATE_COPY[lang] || TEMPLATE_COPY.zh;
}
function templateInfo(id){
  const lang = state.lang || 'zh';
  return (TEMPLATE_DETAILS[lang] && TEMPLATE_DETAILS[lang][id]) || TEMPLATE_DETAILS.zh[id] || {subjects:'', play:'', setup:'', best:''};
}
function renderLandingStats(c){
  return `<div class="template-stat-grid">${c.stats.map(item=>`<div class="template-stat"><b>${item[0]}</b><span>${item[1]}</span></div>`).join('')}</div>`;
}
function renderLandingSteps(c){
  return `<section class="template-section template-steps-section"><div class="template-section-head"><h2>${c.stepsTitle}</h2></div><div class="template-step-grid">${c.steps.map((s,i)=>`<div class="template-step"><em>${i+1}</em><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div></section>`;
}
function renderTemplateDirectory(c){
  return `<section id="templateCatalog" class="template-section template-catalog-section">
    <div class="template-section-head"><div><h2>${c.catalogTitle}</h2><p>${c.catalogSub}</p></div></div>
    <div class="template-level-list">
      ${LEVEL_ORDER.map(level=>{
        const info = levelText(level);
        const games = (GAME_LEVELS[level] || []).map(id=>findGame(id)).filter(Boolean);
        return `<div class="template-level-block ${level}">
          <div class="template-level-title"><div><b>${info.label}</b><span>${info.desc}</span></div><em>${games.length}</em></div>
          <div class="template-detail-list">
            ${games.map(g=>{
              const d = templateInfo(g.id);
              return `<details class="template-detail-card">
                <summary><span class="template-code ${level}">${g.code}</span><span class="template-icon">${g.icon || '🎮'}</span><strong>${gameName(g.id)}</strong><small>${gameDesc(g.id)}</small></summary>
                <div class="template-detail-body">
                  <div><b>${c.subject}</b><p>${d.subjects}</p></div>
                  <div><b>${c.play}</b><p>${d.play}</p></div>
                  <div><b>${c.setup}</b><p>${d.setup}</p></div>
                  <div><b>${c.best}</b><p>${d.best}</p></div>
                </div>
              </details>`;
            }).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}
function renderPurchaseLogin(c){
  return `<section id="loginPurchase" class="template-section login-purchase-section">
    <div class="template-section-head"><div><h2>${c.plansTitle}</h2><p>${c.ctaText}</p></div></div>
    <div class="purchase-login-grid">
      <div class="plan-grid">${c.plans.map(p=>`<div class="plan-card"><h3>${p[0]}</h3><b>${p[1]}</b><p>${p[2]}</p></div>`).join('')}</div>
      <div class="auth-right formal-auth-right landing-login-panel">
        <div class="formal-auth-top"><h3>${c.loginTitle}</h3></div>
        <div class="formal-form-block">
          <input id="loginEmail" class="input" placeholder="${c.email}" />
          <input id="loginPassword" class="input" placeholder="${c.password}" type="password" />
          <button id="loginBtn" type="button" class="btn formal-primary-btn" onclick="handleLoginClick()">${c.login}</button>
          <p id="loginMsg" class="muted formal-msg"></p>
        </div>
        <div class="formal-divider"></div>
        <h3 class="formal-section-title">${c.registerTitle}</h3>
        <div class="formal-form-block compact">
          <input id="regName" class="input" placeholder="${c.name}" />
          <input id="regEmail" class="input" placeholder="${c.email}" />
          <input id="regPhone" class="input" placeholder="${c.phone}" />
          <button id="registerBtn" type="button" class="btn maker formal-secondary-btn" onclick="handleRegisterClick()">${c.apply}</button>
          <p id="regMsg" class="muted formal-msg"></p>
        </div>
      </div>
    </div>
  </section>`;
}
function renderAuth(){
  const c = authCopy();
  return `
  <div class="template-landing-wrap">
    <header class="template-nav">
      <div class="template-brand"><div class="logo formal-logo">🎮</div><div><b>${c.title}</b><span>${c.subtitle}</span></div></div>
      <div class="template-nav-actions">${langSelect('authLangSelect')}<a class="btn secondary small" href="#templateCatalog">${c.primary}</a><a class="btn small" href="#loginPurchase">${c.secondary}</a></div>
    </header>
    <main class="template-landing-main">
      <section class="template-hero">
        <div class="template-hero-copy">
          <div class="formal-kicker">${c.kicker}</div>
          <h1>${c.title}</h1>
          <p>${c.heroText}</p>
          ${renderLandingStats(c)}
          <div class="template-hero-actions"><a class="btn big" href="#templateCatalog">${c.primary}</a><a class="btn secondary big" href="#loginPurchase">${c.secondary}</a></div>
        </div>
        <div class="template-hero-card">
          <div class="template-preview-window"><div class="preview-toolbar"><i></i><i></i><i></i></div><div class="preview-board"><span>🧩</span><span>🎡</span><span>🏰</span><span>🔎</span></div></div>
          <h3>${c.badge}</h3><p>${c.subtitle}</p>
        </div>
      </section>
      ${renderLandingSteps(c)}
      ${renderTemplateDirectory(c)}
      <section class="template-cta-band"><h2>${c.ctaTitle}</h2><p>${c.ctaText}</p><a class="btn big" href="#loginPurchase">${c.secondary}</a></section>
      ${renderPurchaseLogin(c)}
    </main>
  </div>`;
}

function renderLevelLegend(){
  return `<div class="level-legend compact">
    ${LEVEL_ORDER.map(level=>`<div class="level-chip ${level}"><b>${levelText(level).label}</b><span>${levelText(level).desc}</span></div>`).join('')}
  </div>`;
}
function renderGameGroups(games, accessible, user, prefix=''){
  return LEVEL_ORDER.map(level=>{
    const group = games.filter(g => gameLevel(g.id) === level);
    if(!group.length) return '';
    const info = levelText(level);
    const openAttr = accessible ? 'open' : '';
    return `<details class="level-accordion ${level}" ${openAttr}>
      <summary>
        <div><b>${info.label}</b><span>${info.desc}</span></div>
        <em>${group.length}</em>
      </summary>
      <div class="game-grid simplified-grid">${group.map(g=>gameCard(g, accessible, user)).join('')}</div>
    </details>`;
  }).join('');
}
function renderAuthorizedSummary(user, available){
  const list = available.map(g=>`<span class="summary-game ${gameLevel(g.id)}">${gameCode(g.id)}｜${gameName(g.id)}</span>`).join('');
  return `<div class="authorized-summary">
    <div>
      <h3>目前授權可使用：${available.length} 款</h3>
      <p>已授權遊戲會出現在下方「可使用遊戲」區；未授權遊戲會集中在「未授權遊戲」區。</p>
    </div>
    <div class="summary-game-list">${list}</div>
  </div>`;
}
function renderProfilePanel(user){
  if(user.role==='admin') return '';
  const p = user.profile || {};
  const completed = isProfileComplete(user);
  return `<div class="profile-panel ${completed?'completed':'incomplete'}">
    <div class="profile-head">
      <div>
        <h3>${completed?'老師資料已完成':'完善老師資料，再送 1 個遊戲'}</h3>
        <p>${completed?'已解鎖資料完善獎勵遊戲。':'請填寫電話、姓名、州屬與服務類型。完成後會自動解鎖 S003 句子排序挑戰。'}</p>
      </div>
      <span>${completed?'已完成':'未完成'}</span>
    </div>
    <div class="profile-form">
      <input id="profileEmail" class="input" value="${user.email}" disabled />
      <input id="profilePhone" class="input" placeholder="電話 / WhatsApp" value="${p.phone||''}" />
      <input id="profileChineseName" class="input" placeholder="中文姓名" value="${p.chineseName||''}" />
      <input id="profileEnglishName" class="input" placeholder="英文姓名" value="${p.englishName||''}" />
      <select id="profileState" class="select">
        ${MALAYSIA_STATES.map(s=>`<option value="${s}" ${p.state===s?'selected':''}>${s}</option>`).join('')}
      </select>
      <div class="org-checks">
        ${ORG_TYPES.map(type=>`<label><input type="checkbox" class="profileOrgType" value="${type}" ${(p.orgTypes||[]).includes(type)?'checked':''}> ${type}</label>`).join('')}
      </div>
      <button id="saveProfileBtn" class="btn good">儲存老師資料</button>
    </div>
  </div>`;
}
function renderFeedbackPanel(){
  return `<div class="feedback-panel">
    <div class="filter-row">
      <h3>回饋 / 詢問</h3>
      <div class="muted">若有針對某個遊戲，請寫明遊戲代號，例如 S001、P001、H007。</div>
    </div>
    <div class="feedback-form">
      <input id="feedbackGameCode" class="input" placeholder="遊戲代號，可留空，例如 H007" />
      <textarea id="feedbackMessage" class="input" placeholder="請輸入回饋、問題、建議或希望新增的功能"></textarea>
      <button id="submitFeedbackBtn" class="btn maker">送出回饋</button>
    </div>
  </div>`;
}

function renderDashboard(user){
  const available = user.role==='admin' ? GAME_DATA : availableGamesForUser(user);
  const locked = user.role==='admin' ? [] : lockedGamesForUser(user);
  const roleText = user.role==='admin' ? '管理員' : '老師';
  return `
  <div class="page simplified-page hybrid-dashboard">
    <div class="hero">
      <div class="brand">
        <div class="logo">🎮</div>
        <div>
          <h1>${t('appTitle')}</h1>
          <div class="sub">老師帳號制｜管理員後台｜題庫設定｜白板上課</div>
        </div>
      </div>
      <div class="top-actions">
        ${langSelect('dashLangSelect')}
        <div class="pill teacher-mode-pill">${user.name || user.email}（${roleText}）</div>
        <button id="logoutBtn" class="btn secondary">登出</button>
      </div>
    </div>

    <div class="authorized-summary">
      <div>
        <h3>${user.role==='admin' ? '管理員後台' : '老師遊戲庫'}｜目前可使用：${available.length} 款</h3>
        <p>${user.role==='admin' ? '管理員可新增老師、批准申請、重設密碼、停用帳號，也可進入遊戲庫測試所有遊戲。' : '老師登入後，可使用已授權遊戲，並在老師後台設定題庫、課堂標題與素材。'}</p>
      </div>
      <div class="summary-game-list">${available.map(g=>`<span class="summary-game ${gameLevel(g.id)}">${gameCode(g.id)}｜${gameName(g.id)}</span>`).join('')}</div>
    </div>

    ${user.role==='admin' ? renderAdminPanel() : ''}
    ${renderTeacherBackendPanel()}

    <div class="teacher-simple-layout">
      <div class="card main simplified-main">
        <div class="filter-row">
          <h3>遊戲庫</h3>
          <div class="muted">點開初階 / 進階 / 高階，即可查看該階級遊戲。可直接白板上課，或套用版型進入老師後台。</div>
        </div>
        ${renderGameGroups(available, true, user)}
        ${locked.length ? `<div class="filter-row locked-title"><h3>未授權遊戲（${locked.length}）</h3><div class="muted">請由管理員授權後使用。</div></div>${renderGameGroups(locked, false, user)}`:''}
        ${renderFeedbackPanel()}
      </div>
    </div>
  </div>`;
}

function renderTeacherBackendPanel(){
  return `
  <div id="makerPanel" class="card teacher-backend-panel">
    <div class="filter-row">
      <div>
        <h3>老師後台｜題庫與遊戲包設定</h3>
        <div class="muted">老師登入後可選擇遊戲版型，再輸入題庫 / 素材說明，生成設定資料與對應遊戲包。</div>
      </div>
      <button id="closeMakerBtn" class="btn secondary small">收起後台</button>
    </div>
    <div class="backend-grid">
      <div class="backend-field">
        <label>選擇遊戲版型</label>
        <select id="makerGameSelect" class="select">
          ${GAME_DATA.map(g=>`<option value="${g.id}">${gameCode(g.id)}｜${gameName(g.id)}</option>`).join('')}
        </select>
      </div>
      <div class="backend-field">
        <label>課堂遊戲標題</label>
        <input id="makerTitleInput" class="input" placeholder="${t('titlePlaceholder')}" />
      </div>
      <div class="backend-field">
        <label>科目 / 年級</label>
        <input id="makerSubject" class="input" placeholder="${t('subjectPlaceholder')}" />
      </div>
      <div class="backend-field full">
        <label>題庫 / 素材設定</label>
        <textarea id="makerQuestions" class="input maker-textarea" placeholder="${t('questionsPlaceholder')}"></textarea>
      </div>
    </div>
    <div class="notice backend-notice">
      建議題庫格式：題目｜答案｜選項A,選項B,選項C。圖片類遊戲可在此記錄圖片名稱、答案位置或上傳素材說明；正式部署可再接入自動寫入 game-config.json。
    </div>
    <div class="backend-actions">
      <button id="downloadMakerTxtBtn" class="btn secondary">下載題庫 TXT</button>
      <button id="generateTemplateZipBtn" class="btn download">生成 / 下載遊戲包</button>
      <button id="downloadAllOfflineBtn" class="btn maker">下載全部離線包</button>
    </div>
  </div>`;
}

function renderTeacherTools(user){
  return `
  <div class="teacher-tools">
    <div class="tool-card">
      <h4>🖥️ ${t('whiteboardMode')}</h4>
      <p>${t('whiteboardDesc')}</p>
      <div class="mode-badge">${t('enabled')}</div>
    </div>
    <div class="tool-card">
      <h4>📦 ${t('offlineZip')}</h4>
      <p>${t('offlineDesc')}</p>
      <button id="downloadAllPackBtn" class="btn download small">${t('downloadAll')}</button>
    </div>
    <div class="tool-card">
      <h4>🛠️ ${t('gameMaker')}</h4>
      <p>${t('makerDesc')}</p>
      <button id="openMakerBtn" class="btn maker small">${t('openMaker')}</button>
    </div>
  </div>`;
}

function gameCard(g, accessible, user){
  const level = gameLevel(g.id);
  const code = gameCode(g.id);
  return `<div class="game-card ${accessible?'':'locked'} level-card ${level}">
      <div class="game-preview-wrap">
        <img class="game-preview" src="${gamePreview(g.id)}" alt="${code} ${gameName(g.id)} preview" />
        <div class="game-code-badge">${code}</div>
      </div>
      <h4>${gameName(g.id)}</h4>
      <div class="tag-row">
        <span class="tag level ${level}">${levelText(level).label}</span>
        <span class="tag code">${code}</span>
        ${accessible?`<span class="tag">${t('available')}</span>`:`<span class="tag lock">${t('locked')}</span>`}
      </div>
      <div class="spacer"></div>
      ${accessible
        ? `<div class="card-actions"><button class="btn whiteboard open-game-btn" data-game="${g.id}">${t('whiteboardClass')}</button><button class="btn maker small make-game-btn" data-game="${g.id}">套用版型</button><button class="btn download small generate-game-btn" data-game="${g.id}">生成遊戲包</button></div>`
        : `<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn secondary small buy-single-btn" data-game="${g.id}">${t('singleBuy')}</button><button class="btn small buy-pick5-fast-btn" data-game="${g.id}">${t('addPick5')}</button></div>`}
    </div>`;
}


function renderAdminPanel(){
  const teachers = state.users.filter(u=>u.role!=='admin');
  const pendingCount = teachers.filter(u=>u.accountStatus==='pending').length;
  const feedback = state.feedback || [];
  return `
  <div id="adminPanel" class="card admin-account-panel">
    <div class="filter-row"><h3>管理員後台｜老師帳號管理</h3><div class="muted">待批准：${pendingCount} 位｜老師總數：${teachers.length} 位</div></div>
    <div class="notice">管理員可新增老師帳號、批准老師申請、停用 / 啟用帳號、重設密碼，也可設定老師可使用的遊戲。</div>

    <div class="add-teacher-box">
      <h4>新增老師帳號</h4>
      <div class="backend-grid admin-add-grid">
        <input id="newTeacherName" class="input" placeholder="老师姓名" />
        <input id="newTeacherEmail" class="input" placeholder="老师电子邮件" />
        <input id="newTeacherPhone" class="input" placeholder="电话" />
        <input id="newTeacherPassword" class="input" placeholder="初始密码" />
        <select id="newTeacherPackage" class="select">
          <option value="all_access">全部遊戲授權</option>
          <option value="free">免費 / 基礎授權</option>
          <option value="pick5">五選授權</option>
        </select>
      </div>
      <button id="addTeacherBtn" class="btn maker small">新增老師</button>
      <span id="addTeacherMsg" class="muted"></span>
    </div>

    <table class="admin-table account-table">
      <thead><tr><th>老師帳號</th><th>狀態</th><th>${t('package')}</th><th>${t('authorizedGames')}</th><th>${t('operation')}</th></tr></thead>
      <tbody>
      ${teachers.map(u=>`<tr class="${u.accountStatus==='pending'?'pending-row':''} ${u.disabled?'disabled-row':''}">
        <td><b>${u.name}</b><br><span class="muted">${u.email || u.username}</span><br><span class="muted">${u.profile?.phone ? '电话：' + u.profile.phone : '电话未填'}</span></td>
        <td>${accountStatusBadge(u)}</td>
        <td>
          <select class="select admin-package-select" data-user="${u.id}">
            <option value="free" ${u.package==='free'?'selected':''}>${t('freeUser')}</option>
            <option value="pick5" ${u.package==='pick5'?'selected':''}>${t('pack2')}</option>
            <option value="all_access" ${u.package==='all_access'?'selected':''}>${t('pack3')}</option>
          </select>
        </td>
        <td>${renderGameChecks(u)}</td>
        <td class="account-actions">
          <button class="btn small save-user-btn" data-user="${u.id}">${t('save')}</button>
          ${u.accountStatus==='pending'?`<button class="btn good small approve-teacher-btn" data-user="${u.id}">批准</button>`:''}
          <button class="btn secondary small grant-all-btn" data-user="${u.id}">${t('selectAll')}</button>
          <button class="btn secondary small reset-password-btn" data-user="${u.id}">重設密碼</button>
          <button class="btn ${u.disabled?'maker':'danger'} small disable-teacher-btn" data-user="${u.id}">${u.disabled?'啟用':'停用'}</button>
          <button class="btn danger small delete-teacher-btn" data-user="${u.id}">刪除</button>
        </td>
      </tr>`).join('')}
      </tbody>
    </table>

    <div class="feedback-admin">
      <h3>老師回饋 / 詢問</h3>
      ${feedback.length ? feedback.map(f=>`<div class="feedback-item">
        <b>${f.gameCode || '未指定遊戲'}</b>
        <span>${f.date}｜${f.userName || ''}｜${f.userEmail || ''}</span>
        <p>${f.message}</p>
      </div>`).join('') : `<div class="muted">目前沒有回饋。</div>`}
    </div>
  </div>`;
}

function accountStatusBadge(u){
  if(u.disabled) return '<span class="status-badge disabled">已停用</span>';
  if(u.accountStatus==='pending') return '<span class="status-badge pending">待批准</span>';
  return '<span class="status-badge approved">已批准</span>';
}

function renderGameChecks(user){
  return `<div class="check-grid">${GAME_DATA.filter(g=>!g.free).map(g=>`<label class="check-item"><input type="checkbox" class="admin-game-check" data-user="${user.id}" data-game="${g.id}" ${(user.ownedGames||[]).includes(g.id)?'checked':''}/> <span>${gameName(g.id)}</span></label>`).join('')}</div>`;
}
function packageName(pkg){ return t(pkg) || pkg; }
function packageDesc(pkg){
  if(pkg==='single') return t('singleDesc');
  if(pkg==='pick5') return t('pick5Desc');
  if(pkg==='all_access') return t('allAccessDesc');
  return '';
}
function packageLabel(pkg){
  if(pkg==='all_access') return `${t('all_access')}｜${t('pack3')}`;
  if(pkg==='pick5') return `${t('pick5')}｜${t('pack2')}`;
  if(pkg==='free') return t('freeUser');
  return t('single');
}


function handleLoginClick(){
  const email = $('#loginEmail')?.value?.trim() || '';
  const password = $('#loginPassword')?.value || '';
  const result = login(email, password);
  const msg = $('#loginMsg');
  if(msg) msg.textContent = result.ok ? '' : result.msg;
}
function handleQuickAdminClick(){
  const email = $('#loginEmail');
  const password = $('#loginPassword');
  if(email) email.value='admin@lead.ai';
  if(password) password.value='admin123';
  const result = login('admin@lead.ai','admin123');
  const msg = $('#loginMsg');
  if(msg) msg.textContent = result.ok ? '' : result.msg;
}
function handleRegisterClick(){
  const name = $('#regName')?.value?.trim() || '';
  const email = $('#regEmail')?.value?.trim() || '';
  const phone = $('#regPhone')?.value?.trim() || '';
  const msg = $('#regMsg');
  if(!name || !email || !phone){ if(msg) msg.textContent=t('fillAll'); return; }
  const result = registerTeacherAccount(name, email, phone);
  if(msg) msg.textContent = result.msg;
  if(result.ok){
    if($('#regName')) $('#regName').value='';
    if($('#regEmail')) $('#regEmail').value='';
    if($('#regPhone')) $('#regPhone').value='';
  }
}

function bindAuth(){
  const loginBtn = $('#loginBtn'); if(loginBtn) loginBtn.onclick = handleLoginClick;
  const quickAdminBtn = $('#quickAdminBtn'); if(quickAdminBtn) quickAdminBtn.onclick = handleQuickAdminClick;
  const resetDemoBtn = $('#resetDemoBtn'); if(resetDemoBtn) resetDemoBtn.onclick = resetDemo;
  const registerBtn = $('#registerBtn'); if(registerBtn) registerBtn.onclick = handleRegisterClick;
  ['loginEmail','loginPassword'].forEach(id=>{
    const el = $(id);
    if(el) el.onkeydown = (ev)=>{ if(ev.key==='Enter') handleLoginClick(); };
  });
}


function addTeacherAccount(){
  const name = $('#newTeacherName')?.value?.trim() || '';
  const email = $('#newTeacherEmail')?.value?.trim() || '';
  const phone = $('#newTeacherPhone')?.value?.trim() || '';
  const password = $('#newTeacherPassword')?.value?.trim() || '123456';
  const pkg = $('#newTeacherPackage')?.value || 'all_access';
  const normalized = normalizeEmail(email);
  const msg = $('#addTeacherMsg');
  if(!name || !normalized){ if(msg) msg.textContent='請填寫老师姓名與電郵。'; return; }
  if(!isValidEmail(normalized)){ if(msg) msg.textContent='請輸入有效電郵。'; return; }
  if(state.users.some(u=>normalizeEmail(u.email || u.username)===normalized)){ if(msg) msg.textContent='此電郵已存在。'; return; }
  state.users.push({
    id:'u_'+Date.now(), email:normalized, username:normalized, password, name,
    role:'user', accountStatus:'approved', disabled:false,
    ownedGames: pkg==='all_access' ? GAME_DATA.map(g=>g.id) : [],
    package:pkg,
    profileCompleted:true,
    profile:{email:normalized, phone, chineseName:name, englishName:'', state:'Johor', orgTypes:['学校老师']}
  });
  saveState();
  render();
}
function approveTeacher(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  u.accountStatus='approved'; u.disabled=false;
  if(!u.package) u.package='free';
  saveState(); render();
}
function toggleTeacherDisabled(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  u.disabled = !u.disabled;
  saveState(); render();
}
function deleteTeacherAccount(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  if(!confirm(`確定刪除老師帳號：${u.name || u.email}？`)) return;
  state.users = state.users.filter(x=>x.id!==userId);
  saveState(); render();
}
function resetTeacherPassword(userId){
  const u = state.users.find(x=>x.id===userId); if(!u) return;
  const p = prompt(`請輸入 ${u.name || u.email} 的新密碼：`, '123456');
  if(!p) return;
  u.password = p;
  saveState(); render();
}
function bindDashboard(){
  const logoutBtn = $('#logoutBtn'); if(logoutBtn) logoutBtn.onclick = logout;
  const saveProfileBtn = $('#saveProfileBtn');
  if(saveProfileBtn) saveProfileBtn.onclick = () => {
    const orgTypes = $$('.profileOrgType').filter(x=>x.checked).map(x=>x.value);
    const profile = {
      email:getUser().email,
      phone:$('#profilePhone')?.value?.trim() || '',
      chineseName:$('#profileChineseName')?.value?.trim() || '',
      englishName:$('#profileEnglishName')?.value?.trim() || '',
      state:$('#profileState')?.value || '',
      orgTypes
    };
    completeProfile(getUser().id, profile);
  };
  const submitFeedbackBtn = $('#submitFeedbackBtn');
  if(submitFeedbackBtn) submitFeedbackBtn.onclick = () => {
    const ok = submitFeedback($('#feedbackGameCode')?.value || '', $('#feedbackMessage')?.value || '');
    if(!ok) alert('請先輸入回饋內容。');
  };
  $$('.open-game-btn').forEach(btn => btn.onclick = () => openGame(btn.dataset.game));
  $$('.make-game-btn').forEach(btn => btn.onclick = () => openMaker(btn.dataset.game));
  $$('.generate-game-btn').forEach(btn => btn.onclick = () => generateGamePackage(btn.dataset.game));
  const openMakerBtn = $('#openMakerBtn');
  if(openMakerBtn) openMakerBtn.onclick = () => openMaker();
  const closeMakerBtn = $('#closeMakerBtn');
  if(closeMakerBtn) closeMakerBtn.onclick = () => $('#makerPanel').classList.toggle('hidden');
  const makerGameSelect = $('#makerGameSelect');
  if(makerGameSelect) makerGameSelect.onchange = () => openMaker(makerGameSelect.value);
  const downloadMakerTxtBtn = $('#downloadMakerTxtBtn');
  if(downloadMakerTxtBtn) downloadMakerTxtBtn.onclick = downloadMakerTxt;
  const downloadAllPackBtn = $('#downloadAllPackBtn');
  if(downloadAllPackBtn) downloadAllPackBtn.onclick = () => openMaker();
  const downloadAllOfflineBtn = $('#downloadAllOfflineBtn');
  if(downloadAllOfflineBtn) downloadAllOfflineBtn.onclick = () => location.href = 'downloads/all_classroom_games_offline_pack.zip';
  const generateTemplateZipBtn = $('#generateTemplateZipBtn');
  if(generateTemplateZipBtn) generateTemplateZipBtn.onclick = () => generateGamePackage(makerSelectedGameId);
  $$('.buy-single-btn').forEach(btn => btn.onclick = () => buySingle(btn.dataset.game));
  $$('.buy-package-btn').forEach(btn => btn.onclick = () => buyPackage(btn.dataset.package));
  $$('.buy-pick5-fast-btn').forEach(btn => btn.onclick = () => buyPick5Fast(btn.dataset.game));
  const openAdmin = $('#openAdminBtn');
  if(openAdmin) openAdmin.onclick = () => { $('#adminPanel').classList.remove('hidden'); };
  const closeAdmin = $('#closeAdminBtn');
  if(closeAdmin) closeAdmin.onclick = () => { $('#adminPanel').classList.add('hidden'); };
  $$('.save-user-btn').forEach(btn => btn.onclick = () => saveUserConfig(btn.dataset.user));
  $$('.grant-all-btn').forEach(btn => btn.onclick = () => setAllChecks(btn.dataset.user, true));
  $$('.clear-all-btn').forEach(btn => btn.onclick = () => setAllChecks(btn.dataset.user, false));
  $$('.approve-teacher-btn').forEach(btn => btn.onclick = () => approveTeacher(btn.dataset.user));
  $$('.disable-teacher-btn').forEach(btn => btn.onclick = () => toggleTeacherDisabled(btn.dataset.user));
  $$('.delete-teacher-btn').forEach(btn => btn.onclick = () => deleteTeacherAccount(btn.dataset.user));
  $$('.reset-password-btn').forEach(btn => btn.onclick = () => resetTeacherPassword(btn.dataset.user));
  const addTeacherBtn = $('#addTeacherBtn');
  if(addTeacherBtn) addTeacherBtn.onclick = addTeacherAccount;

  $('#closePlayerBtn').onclick = closePlayer;
  $('#fullscreenBtn').onclick = toggleBrowserFullscreen;
  $('#fit169Btn').onclick = () => { currentAspectMode = '16:9'; fitFrame(); };
  $('#fit43Btn').onclick = () => { currentAspectMode = '4:3'; fitFrame(); };
  $('#fitAutoBtn').onclick = () => { currentAspectMode = 'auto'; fitFrame(); };
  window.onresize = () => { if(!$('#playerOverlay').classList.contains('hidden')) fitFrame(); };
}

function openMaker(gameId){
  const panel = $('#makerPanel');
  if(!panel) return;
  makerSelectedGameId = gameId || makerSelectedGameId;
  panel.classList.remove('hidden');
  panel.scrollIntoView({behavior:'smooth', block:'start'});
  const sel = $('#makerGameSelect');
  if(sel && makerSelectedGameId) sel.value = makerSelectedGameId;
  const title = $('#makerTitleInput');
  if(makerSelectedGameId && title){
    title.value = `${gameCode(makerSelectedGameId)}｜${gameName(makerSelectedGameId)}｜課堂題庫`;
  }
}

function generateGamePackage(gameId){
  const id = gameId || $('#makerGameSelect')?.value || makerSelectedGameId;
  if(!id){
    alert('請先選擇一個遊戲版型。');
    openMaker();
    return;
  }
  const game = findGame(id);
  if(!game) return;
  const title = $('#makerTitleInput')?.value?.trim() || `${gameCode(id)}_${gameName(id)}`;
  const subject = $('#makerSubject')?.value?.trim() || '';
  const questions = $('#makerQuestions')?.value?.trim() || '';
  const meta = [
    `遊戲代碼：${gameCode(id)}`,
    `遊戲版型：${gameName(id)}`,
    `課堂標題：${title}`,
    `科目 / 年級：${subject}`,
    '',
    '題庫 / 素材說明：',
    questions || '尚未填入題庫。'
  ].join('\\n');

  downloadTextFile(`${gameCode(id)}_${title.replace(/[\\/:*?"<>|]/g,'_')}_設定資料.txt`, meta);

  // Static demo limitation:
  // The template ZIP is already prepared in downloads/. In the production version,
  // this button should call the backend to merge teacher content into game-config.json
  // and return a customized ZIP.
  setTimeout(() => {
    location.href = game.download;
  }, 350);
}

function downloadTextFile(filename, content){
  const blob = new Blob([content], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 800);
}

function downloadMakerTxt(){
  const title = $('#makerTitleInput')?.value?.trim() || t('gameMaker');
  const subject = $('#makerSubject')?.value?.trim() || '';
  const questions = $('#makerQuestions')?.value?.trim() || '';
  const content = [
    `${t('makerTitle')}：${title}`,
    `${t('subjectPlaceholder')}：${subject}`,
    '',
    `${t('downloadQuestionTxt')}：`,
    questions || ''
  ].join('\n');
  downloadTextFile(`${title.replace(/[\\/:*?"<>|]/g,'_')}_questions.txt`, content);
}

function setAllChecks(userId, checked){ $$(`.admin-game-check[data-user="${userId}"]`).forEach(el => el.checked = checked); }
function saveUserConfig(userId){
  const user = state.users.find(u => u.id===userId);
  if(!user) return;
  user.package = $(`.admin-package-select[data-user="${userId}"]`).value;
  user.ownedGames = $$(`.admin-game-check[data-user="${userId}"]`).filter(el=>el.checked).map(el=>el.dataset.game);
  saveState();
  render();
}
function buySingle(gameId){
  const user = getUser();
  if(!user || user.role==='admin') return;
  if(!user.ownedGames.includes(gameId)) user.ownedGames.push(gameId);
  if(user.package==='free') user.package = 'single';
  saveState(); render();
  setTimeout(()=>openGame(gameId), 100);
}
function buyPackage(packageId){
  const user = getUser();
  if(!user || user.role==='admin') return;
  if(packageId==='all_access'){
    user.package = 'all_access';
    user.ownedGames = GAME_DATA.filter(g=>!g.free).map(g=>g.id);
  } else if(packageId==='pick5'){
    user.package = 'pick5';
    const locked = GAME_DATA.filter(g=>!g.free).map(g=>g.id).filter(id=>!user.ownedGames.includes(id));
    user.ownedGames = [...new Set([...user.ownedGames, ...locked.slice(0,5)])];
  } else if(packageId==='single') {
    alert(t('chooseSingle'));
    return;
  }
  saveState(); render();
}
function buyPick5Fast(gameId){
  const user = getUser();
  if(!user || user.role==='admin') return;
  user.package = 'pick5';
  const set = new Set(user.ownedGames || []);
  set.add(gameId);
  for(const g of GAME_DATA.filter(g=>!g.free)){
    if(set.size >= 5) break;
    set.add(g.id);
  }
  user.ownedGames = [...set].slice(0,5);
  saveState(); render();
}

function openGame(gameId){
  const user = getUser();
  if(!userHasAccess(user, gameId) && !findGame(gameId)?.free) return;
  const game = findGame(gameId);
  currentPlayerGame = game;
  if(game.id === 'island_conquest') currentAspectMode = '16:9';
  $('#playerGameTitle').textContent = `${t('playing')}：${gameName(game.id)}`;
  $('#playerOverlay').classList.remove('hidden');
  $('#playerOverlay').classList.add('whiteboard-mode');
  document.body.classList.add('overlay-open');
  const iframe = $('#gameFrame');
  const sep = game.path.includes('?') ? '&' : '?';
  iframe.src = `${game.path}${sep}lang=${state.lang || 'zh'}`;
  iframe.onload = () => { stabilizeFrameFit(); };
}
function closePlayer(){
  const overlay = $('#playerOverlay');
  if(overlay){ overlay.classList.add('hidden'); overlay.classList.remove('whiteboard-mode'); }
  document.body.classList.remove('overlay-open');
  const iframe = $('#gameFrame');
  if(iframe) iframe.src = 'about:blank';
}
function toggleBrowserFullscreen(){
  const overlay = $('#playerOverlay');
  if(!document.fullscreenElement){ overlay.requestFullscreen?.(); }
  else { document.exitFullscreen?.(); }
}
function injectIframeSafeStyles(iframe){
  try{
    const doc = iframe.contentDocument;
    if(!doc) return;
    let style = doc.getElementById('safe-stage-style');
    if(!style){
      style = doc.createElement('style');
      style.id = 'safe-stage-style';
      style.textContent = `html,body{overflow:hidden !important; overscroll-behavior:none !important;} body::-webkit-scrollbar, html::-webkit-scrollbar{display:none !important;} *{scrollbar-width:none !important;}`;
      doc.head.appendChild(style);
    }
  }catch(e){ console.warn('Cannot inject styles', e); }
}
function measureDocumentBounds(doc){
  const de = doc.documentElement;
  const body = doc.body;
  const win = doc.defaultView;
  let maxRight = 0;
  let maxBottom = 0;
  try {
    const nodes = [body, ...body.querySelectorAll('*')];
    for(const el of nodes){
      if(!el || !el.getBoundingClientRect) continue;
      const r = el.getBoundingClientRect();
      maxRight = Math.max(maxRight, r.right + (win.scrollX || 0));
      maxBottom = Math.max(maxBottom, r.bottom + (win.scrollY || 0));
    }
  } catch(e) {}
  let w = Math.max(de?.scrollWidth || 0, body?.scrollWidth || 0, de?.offsetWidth || 0, body?.offsetWidth || 0, de?.clientWidth || 0, body?.clientWidth || 0, Math.ceil(maxRight), win?.innerWidth || 0);
  let h = Math.max(de?.scrollHeight || 0, body?.scrollHeight || 0, de?.offsetHeight || 0, body?.offsetHeight || 0, de?.clientHeight || 0, body?.clientHeight || 0, Math.ceil(maxBottom), win?.innerHeight || 0);
  w += 24; h += 48;
  w = Math.max(1024, Math.min(w, 2600));
  h = Math.max(700, Math.min(h, 2200));
  return { w, h };
}
function getNaturalFrameSize(){
  const iframe = $('#gameFrame');

  // Some games use a full-screen setup overlay and absolute-positioned map layers.
  // Measuring every DOM node can make the safe player think the game is much larger/smaller
  // than the real teaching canvas, causing the setup panel to shrink in the middle.
  // Island Conquest is designed as a whiteboard 16:9 canvas, so keep a fixed canvas size.
  if(currentPlayerGame && currentPlayerGame.id === 'island_conquest'){
    return { w: 1520, h: 856 };
  }

  let w = 1600, h = 900;
  try{
    const doc = iframe.contentDocument;
    if(doc){ const measured = measureDocumentBounds(doc); w = measured.w; h = measured.h; }
  }catch(e){}
  return {w,h};
}
function stabilizeFrameFit(){
  const checks = [0, 120, 350, 700, 1200, 1800];
  checks.forEach(delay => setTimeout(() => {
    const iframe = $('#gameFrame');
    if(!iframe || !iframe.contentDocument) return;
    injectIframeSafeStyles(iframe);
    fitFrame();
  }, delay));
}
function fitFrame(){
  const overlay = $('#playerOverlay');
  if(overlay.classList.contains('hidden')) return;
  const stage = $('#playerStage');
  const shell = $('#frameShell');
  const iframe = $('#gameFrame');
  if(!stage || !shell || !iframe) return;
  const pad = 36;
  const availableW = Math.max(320, stage.clientWidth - pad*2);
  const availableH = Math.max(180, stage.clientHeight - pad*2);

  // Special handling for Island Conquest:
  // use a responsive iframe sized directly to the safe 16:9 viewport,
  // instead of scaling a huge internal canvas. This prevents the teacher
  // settings dialog from collapsing into a tiny block in the center.
  if(currentPlayerGame && currentPlayerGame.id === 'island_conquest'){
    const targetRatio = currentAspectMode === '4:3' ? 4/3 : 16/9;
    let shellW = availableW;
    let shellH = shellW / targetRatio;
    if(shellH > availableH){
      shellH = availableH;
      shellW = shellH * targetRatio;
    }
    shellW = Math.floor(shellW);
    shellH = Math.floor(shellH);
    shell.style.width = shellW + 'px';
    shell.style.height = shellH + 'px';
    iframe.style.width = shellW + 'px';
    iframe.style.height = shellH + 'px';
    iframe.style.transformOrigin = 'top left';
    iframe.style.transform = 'none';
    return;
  }

  let {w:baseW, h:baseH} = getNaturalFrameSize();
  if(currentAspectMode === '16:9'){
    const targetRatio = 16/9;
    if(baseW/baseH > targetRatio) baseH = baseW / targetRatio;
    else baseW = baseH * targetRatio;
  } else if(currentAspectMode === '4:3'){
    const targetRatio = 4/3;
    if(baseW/baseH > targetRatio) baseH = baseW / targetRatio;
    else baseW = baseH * targetRatio;
  } else {
    const ratio = baseW / baseH;
    if(ratio > 2.0){ baseH = baseW / (16/9); }
    if(ratio < 1.1){ baseW = baseH * (4/3); }
  }
  const scale = Math.min(availableW/baseW, availableH/baseH);
  const finalScale = Math.max(0.1, scale);
  const shellW = Math.floor(baseW * finalScale);
  const shellH = Math.floor(baseH * finalScale);
  shell.style.width = shellW + 'px';
  shell.style.height = shellH + 'px';
  iframe.style.width = baseW + 'px';
  iframe.style.height = baseH + 'px';
  iframe.style.transformOrigin = 'top left';
  iframe.style.transform = `scale(${finalScale})`;
}


function updatePlayerLabels(){
  const sub = $('#playerSubtitle');
  if(sub) sub.textContent = t('playerSubtitle');
  const b169 = $('#fit169Btn'); if(b169) b169.textContent = t('safe169');
  const b43 = $('#fit43Btn'); if(b43) b43.textContent = t('safe43');
  const ba = $('#fitAutoBtn'); if(ba) ba.textContent = t('auto');
  const bf = $('#fullscreenBtn'); if(bf) bf.textContent = t('browserFullscreen');
  const bc = $('#closePlayerBtn'); if(bc) bc.textContent = t('close');
}

document.addEventListener('keydown', (e)=>{
  if(e.key==='Escape' && !$('#playerOverlay').classList.contains('hidden')) closePlayer();
});
document.addEventListener('fullscreenchange', () => {
  if(!$('#playerOverlay').classList.contains('hidden')) stabilizeFrameFit();
});

I18N.zh.gameNames.picture_word_guess='看圖猜生字';
I18N.zh.gameDesc.picture_word_guess='老師上傳圖片與答案。圖片切成 5×5，每 3 秒自動揭開一片，由 2–4 組學生搶答，老師判斷正確後加分。';
I18N.en.gameNames.picture_word_guess='Picture Word Guess';
I18N.en.gameDesc.picture_word_guess='Teachers upload an image and answer. The image is split into 5×5 tiles, reveals one tile every 3 seconds, and 2–4 teams buzz in to guess.';
I18N.ms.gameNames.picture_word_guess='Teka Perkataan Melalui Gambar';
I18N.ms.gameDesc.picture_word_guess='Guru memuat naik gambar dan jawapan. Gambar dipotong 5×5, satu bahagian dibuka setiap 3 saat, dan 2–4 kumpulan menekan buzzer untuk meneka.';


I18N.zh.gameNames.spot_diff_v2='大家来找碴(自帶后台)';
I18N.zh.gameDesc.spot_diff_v2='高阶找不同游戏。支持左图、右图与红色答案图，后台可新增 / 编辑 / 删除关卡，适合制作多关卡观察力挑战。';
I18N.en.gameNames.spot_diff_v2='Spot the Difference (Built-in Admin)';
I18N.en.gameDesc.spot_diff_v2='Advanced spot-the-difference game with left/right images, red answer mask, rankings, hints, and an admin level editor.';
I18N.ms.gameNames.spot_diff_v2='Cari Perbezaan (Admin Terbina)';
I18N.ms.gameDesc.spot_diff_v2='Permainan cari perbezaan tahap tinggi dengan imej kiri/kanan, mask jawapan merah, ranking, petunjuk dan editor tahap admin.';


// Simplified Chinese display names and descriptions for the template explainer page.
Object.assign(I18N.zh.gameNames, {
  memory_match:'翻翻乐',
  true_false:'真假判断快闪',
  sentence_order:'句子排序挑战',
  treasure_box:'宝箱开开看',
  lucky_wheel:'幸运转盘问答',
  classification_conveyor:'分类输送带',
  platform_quiz:'平台闯关问答',
  monster_defense:'怪兽防守战',
  whack_mole:'打地鼠问答',
  text_match:'文字对应',
  bomb_quiz:'炸弹倒数抢答',
  knowledge_race:'知识赛马',
  dungeon_dragon_raid:'地牢巨龙讨伐战',
  picture_word_guess:'看图猜生字',
  image_puzzle_speed_race:'图片拼图竞速赛',
  two_team_puzzle_duel:'双组拼图对战',
  island_conquest:'孤岛抢夺赛',
  timeline_sort_challenge:'时间线排序挑战',
  image_label_match:'图片标签配对赛',
  team_relay_quiz:'团队答题接力赛',
  find_difference:'大家来找不同',
  keyword_beachhead:'关键词抢滩战',
  kingdom_resource_battle:'王国资源争夺战',
  spot_diff_v2:'大家来找碴(自带后台)'
});
Object.assign(I18N.zh.gameDesc, {
  memory_match:'记忆翻牌配对，适合暖身与小组竞赛。',
  true_false:'快速判断题，提升反应力与概念辨识。',
  sentence_order:'适合语文课堂，训练句子与流程排序。',
  treasure_box:'抽题与闯关式互动，增加课堂惊喜感。',
  lucky_wheel:'转盘抽题，适合班级抢答活动。',
  classification_conveyor:'支持图片与文字分类，老师可按分类上传图片。',
  platform_quiz:'角色闯关搭配问答，游戏感较强。',
  monster_defense:'答题防守玩法，适合团体合作。',
  whack_mole:'互动白板很好玩，学生参与度高。',
  text_match:'词语、拼字、配对类题目都适合。',
  bomb_quiz:'限时压力感强，适合复习与竞赛。',
  knowledge_race:'比赛感强，适合全班分组对抗。',
  dungeon_dragon_raid:'地牢 RPG 闯关，两队答题打怪、补血、找钥匙，最后讨伐巨龙。',
  picture_word_guess:'老师上传图片与答案，图片逐格揭开，由学生抢答猜词。',
  image_puzzle_speed_race:'老师上传图片作为题目，各组轮流拼图，系统记录时间。',
  two_team_puzzle_duel:'两组同时拼同一张图片，最快完成者胜利。',
  island_conquest:'两队在六边形岛屿地图上抢占土地，可设置胜利条件与回合限制。',
  timeline_sort_challenge:'老师输入事件或步骤，学生拖动卡片排成正确时间线。',
  image_label_match:'老师上传图片并输入标签，学生把正确标签拖到对应图片。',
  team_relay_quiz:'分组轮流答题，答对前进，先完成接力进度的队伍获胜。',
  find_difference:'图片找不同玩法，训练观察力与细节辨识。',
  keyword_beachhead:'围绕关键词抢占据点，适合阅读重点与概念复习。',
  kingdom_resource_battle:'围绕中央王都开发农田、森林与金矿，并触发随机事件。',
  spot_diff_v2:'高阶找不同游戏，自带后台，可新增 / 编辑 / 删除关卡。'
});

render();
