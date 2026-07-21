// ============================================================
// app.js - 医智学 肌骨康复学习软件主逻辑
// 纯 ES5 语法，兼容旧浏览器
// ============================================================

// ===== 全局状态 =====
var state = {
  coins: 0,
  exp: 0,
  level: 1,
  studyDays: 0,
  completionCount: 0,
  mastery: {},
  lastStudyDate: null,
  streak: 0,
  totalAnswered: 0,
  totalCorrect: 0,
  dailyDoneDate: null,   // 每日打卡完成日期
  dailyDoneCount: 0,     // 当日打卡次数
  examDoneCount: 0,      // 考试完成次数
  tagStats: {},          // 各标签答题统计 {tag: {total, correct}}
  badges: {}             // 已解锁徽章
};

var examModeState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  wrongQuestions: [],
  startTime: 0,
  elapsedTime: 0,
  timerInterval: null,
  isPaused: false,
  mode: 'daily',         // 'daily' | 'exam'
  userAnswers: [],
  finished: false
};

var wrongQuestionBank = [];
var navHistory = [];
var currentTab = 'home';
var currentCategory = 'all';   // 首页分类筛选
var currentLearningMethod = null;
var flashcardCtx = null;       // 闪卡上下文 {points, index, title}

// 知识点字段定义（用于闪卡和详情）
var MUSCLE_FIELDS = [
  { key: '身体区域', label: '身体区域' },
  { key: '主要功能', label: '主要功能' },
  { key: '常见损伤', label: '常见损伤' },
  { key: '评估方法', label: '评估方法' },
  { key: '诊断标准', label: '诊断标准' },
  { key: '急性期处理', label: '急性期处理' },
  { key: '康复训练', label: '康复训练' },
  { key: '激痛点', label: '激痛点' },
  { key: '治疗禁忌', label: '治疗禁忌' },
  { key: '红旗征', label: '红旗征' },
  { key: '关联骨科疾病', label: '关联骨科疾病' },
  { key: '疾病分类', label: '疾病分类' },
  { key: '疾病分级', label: '疾病分级' },
  { key: '典型症状与体征', label: '典型症状与体征' },
  { key: '影像学特征', label: '影像学特征' },
  { key: '鉴别诊断', label: '鉴别诊断' },
  { key: '治疗方案', label: '治疗方案' },
  { key: '康复训练方案', label: '康复训练方案' },
  { key: '康复禁忌动作', label: '康复禁忌动作' },
  { key: '预后转归', label: '预后转归' }
];

var DISEASE_FIELDS = [
  { key: '部位', label: '部位' },
  { key: '疾病分类', label: '疾病分类' },
  { key: '疾病分级', label: '疾病分级' },
  { key: 'ICD10编码', label: 'ICD-10 编码' },
  { key: '红旗征', label: '红旗征/紧急预警' },
  { key: '典型症状与体征', label: '典型症状与体征' },
  { key: '影像学特征', label: '影像学特征' },
  { key: '鉴别诊断', label: '鉴别诊断' },
  { key: '常用评估量表', label: '常用评估量表' },
  { key: '治疗方案', label: '治疗方案' },
  { key: '手术指征', label: '手术指征' },
  { key: '药物治疗', label: '药物治疗' },
  { key: '注射治疗', label: '注射治疗' },
  { key: '康复训练方案', label: '康复训练方案' },
  { key: '康复禁忌动作', label: '康复禁忌动作' },
  { key: '预后转归', label: '预后转归' },
  { key: '常见并发症', label: '常见并发症' },
  { key: '生活方式调整', label: '生活方式调整' },
  { key: '预防措施', label: '预防措施' }
];

// 学习方法定义
var LEARNING_METHODS = {
  feynman: {
    name: '费曼学习法',
    icon: '🎓',
    desc: '用通俗语言讲清楚',
    steps: [
      '选择一个知识点卡片开始学习',
      '仔细阅读该知识点的所有内容',
      '合上卡片，用自己的话向他人解释',
      '遇到卡壳的地方回到原文重新学习',
      '通过做题检验掌握程度'
    ]
  },
  simon: {
    name: '西蒙学习法',
    icon: '🔬',
    desc: '先框架后细节',
    steps: [
      '先浏览知识点的整体框架结构',
      '逐个学习每个细节字段',
      '完成配套练习题巩固',
      '查看反馈，针对薄弱点加强',
      '定期复习错题本'
    ]
  },
  sq3r: {
    name: 'SQ3R学习法',
    icon: '📚',
    desc: '浏览提问阅读背诵复习',
    steps: [
      'Survey 浏览：快速浏览知识点结构',
      'Question 提问：带着问题去阅读',
      'Read 阅读：精读每个字段内容',
      'Recite 背诵：合上卡片复述要点',
      'Review 复习：通过做题回顾'
    ]
  },
  quiz: {
    name: '刷题模式',
    icon: '⚡',
    desc: '直接开始做题',
    steps: [
      '从题库随机抽取题目',
      '逐题作答，即时反馈对错',
      '答错的题目自动加入错题本',
      '完成查看得分和正确率',
      '针对错题反复练习'
    ]
  }
};

// ============================================================
// 工具函数
// ============================================================

// HTML 转义，防止 XSS
function escapeHtml(text) {
  if (text === null || text === undefined) { return ''; }
  var s = String(text);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 截断文本
function truncate(text, len) {
  if (!text) { return ''; }
  var s = String(text);
  if (s.length <= len) { return s; }
  return s.substring(0, len) + '...';
}

// Fisher-Yates 洗牌算法
function shuffleArray(arr) {
  var result = arr.slice();
  for (var i = result.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

// 从题库随机抽取题目
function getRandomQuestions(count) {
  var bank = [];
  if (window.questionBank && window.questionBank.all) {
    bank = window.questionBank.all;
  } else if (window.questions && window.questions.length) {
    bank = window.questions;
  }
  if (!bank || bank.length === 0) { return []; }
  var shuffled = shuffleArray(bank);
  var n = Math.min(count, shuffled.length);
  return shuffled.slice(0, n);
}

// 获取今天日期字符串 YYYY-MM-DD
function getTodayStr() {
  var d = new Date();
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  var day = d.getDate();
  if (m < 10) { m = '0' + m; }
  if (day < 10) { day = '0' + day; }
  return y + '-' + m + '-' + day;
}

// ============================================================
// localStorage 持久化
// ============================================================

function loadState() {
  try {
    var raw = localStorage.getItem('yizhixue_state');
    if (raw) {
      var saved = JSON.parse(raw);
      if (saved) {
        for (var k in saved) {
          if (saved.hasOwnProperty(k)) {
            state[k] = saved[k];
          }
        }
      }
    }
    var wrongRaw = localStorage.getItem('yizhixue_wrong');
    if (wrongRaw) {
      var wrongSaved = JSON.parse(wrongRaw);
      if (wrongSaved && wrongSaved.length) {
        wrongQuestionBank = wrongSaved;
      }
    }
  } catch (e) {
    // 读取失败，使用默认状态
  }
}

function saveState() {
  try {
    localStorage.setItem('yizhixue_state', JSON.stringify(state));
    localStorage.setItem('yizhixue_wrong', JSON.stringify(wrongQuestionBank));
  } catch (e) {
    // 存储失败，忽略
  }
}

// 更新等级（根据经验值）
function updateLevel() {
  // 每 100 经验升一级
  var newLevel = Math.floor(state.exp / 100) + 1;
  if (newLevel > state.level) {
    state.level = newLevel;
  }
}

// ============================================================
// 初始化
// ============================================================

function init() {
  loadState();
  updateLevel();

  // 监听数据就绪事件
  window.addEventListener('dataReady', onAppReady);

  // 如果数据已经就绪（事件先触发），直接初始化
  if (window.__dataReady) {
    onAppReady();
  }

  // 15 秒超时检测
  setTimeout(function () {
    if (!window.__dataReady) {
      if (window.__showLoadError) {
        window.__showLoadError('加载超时', '15秒内未完成加载，请刷新重试');
      } else {
        var overlay = document.getElementById('loadingOverlay');
        var err = document.getElementById('errorOverlay');
        if (overlay) { overlay.style.display = 'none'; }
        if (err) { err.style.display = 'flex'; }
      }
    }
  }, 15000);
}

function onAppReady() {
  if (!window.muscles || !window.diseases) { return; }

  // 隐藏加载动画
  var overlay = document.getElementById('loadingOverlay');
  if (overlay) {
    overlay.classList.add('hide');
    setTimeout(function () {
      overlay.style.display = 'none';
    }, 300);
  }

  // 检查每日刷新
  checkDailyRefresh();

  // 渲染首页并更新统计
  updateStats();
  renderHomeContent();
}

// 每日刷新逻辑
function checkDailyRefresh() {
  var today = getTodayStr();
  if (state.lastStudyDate !== today) {
    // 新的一天
    if (state.lastStudyDate) {
      // 计算连续学习
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      var yStr = yesterday.getFullYear() + '-';
      var ym = yesterday.getMonth() + 1;
      var yd = yesterday.getDate();
      if (ym < 10) { ym = '0' + ym; }
      if (yd < 10) { yd = '0' + yd; }
      yStr += ym + '-' + yd;
      if (state.lastStudyDate === yStr) {
        state.streak = state.streak + 1;
      } else {
        state.streak = 1;
      }
    } else {
      state.streak = 1;
    }
    state.studyDays = state.studyDays + 1;
    state.lastStudyDate = today;
    state.dailyDoneCount = 0;
    saveState();
  }
}

// ============================================================
// 顶部统计更新
// ============================================================

function updateStats() {
  updateLevel();
  var coinEl = document.getElementById('coinCount');
  var dayEl = document.getElementById('studyDays');
  var levelEl = document.getElementById('levelDisplay');
  if (coinEl) { coinEl.textContent = state.coins; }
  if (dayEl) { dayEl.textContent = state.studyDays; }
  if (levelEl) { levelEl.textContent = state.level; }
}

// ============================================================
// Tab 切换 & 导航历史
// ============================================================

function switchTab(tab) {
  currentTab = tab;
  // 切换页面显示
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  var target = document.getElementById('page-' + tab);
  if (target) { target.classList.add('active'); }

  // 更新底部导航高亮
  var tabs = document.querySelectorAll('.bottom-nav .tab');
  for (var j = 0; j < tabs.length; j++) {
    tabs[j].classList.remove('active');
    if (tabs[j].getAttribute('data-tab') === tab) {
      tabs[j].classList.add('active');
    }
  }

  // 重置导航历史
  navHistory = [tab];

  // 隐藏返回按钮
  setBackButton(false);

  // 根据页面渲染内容
  if (tab === 'home') {
    renderHomeContent();
  } else if (tab === 'daily') {
    renderDailyStart();
  } else if (tab === 'exam') {
    renderExamStart();
  } else if (tab === 'wrong') {
    renderWrongQuestions();
  } else if (tab === 'stats') {
    renderStats();
  }

  // 滚动到顶部
  window.scrollTo(0, 0);
}

function pushNav(view) {
  navHistory.push(view);
  setBackButton(true);
}

function navBack() {
  // 从结果页/答题页返回到当前 Tab 的开始页
  if (examModeState.mode === 'exam') {
    // 停止计时器
    if (examModeState.timerInterval) {
      clearInterval(examModeState.timerInterval);
      examModeState.timerInterval = null;
    }
    var mask = document.getElementById('pauseMask');
    if (mask) { mask.parentNode.removeChild(mask); }
    examModeState.finished = false;
    renderExamStart();
  } else {
    renderDailyStart();
  }
  // 重置导航历史
  navHistory = [currentTab];
  setBackButton(false);
  window.scrollTo(0, 0);
}

function setBackButton(show) {
  var btn = document.getElementById('backBtn');
  if (btn) {
    btn.style.display = show ? 'flex' : 'none';
  }
}

// ============================================================
// 首页渲染
// ============================================================

function renderHomeContent() {
  var page = document.getElementById('page-home');
  if (!page) { return; }

  var html = '';

  // 学习方法卡片
  html += '<div class="section-title"><span class="dot"></span>选择学习方法</div>';
  html += '<div class="method-grid">';
  html += buildMethodCard('feynman');
  html += buildMethodCard('simon');
  html += buildMethodCard('sq3r');
  html += buildMethodCard('quiz');
  html += '</div>';

  // 知识分类标签
  html += '<div class="section-title"><span class="dot"></span>知识库</div>';
  html += '<div class="tab-bar">';
  html += '<div class="cat-tab ' + (currentCategory === 'all' ? 'active' : '') + '" onclick="filterCategory(\'all\')">全部</div>';
  html += '<div class="cat-tab ' + (currentCategory === 'muscle' ? 'active' : '') + '" onclick="filterCategory(\'muscle\')">肌肉系统</div>';
  html += '<div class="cat-tab ' + (currentCategory === 'disease' ? 'active' : '') + '" onclick="filterCategory(\'disease\')">常见疾病</div>';
  html += '</div>';

  // 知识点卡片列表
  html += '<div id="kpList">' + buildKnowledgeCards() + '</div>';

  page.innerHTML = html;
}

function buildMethodCard(method) {
  var m = LEARNING_METHODS[method];
  if (!m) { return ''; }
  var html = '';
  html += '<div class="method-card ' + method + '" onclick="selectMethod(\'' + method + '\')">';
  html += '<span class="icon">' + m.icon + '</span>';
  html += '<div class="name">' + m.name + '</div>';
  html += '<div class="desc">' + m.desc + '</div>';
  html += '</div>';
  return html;
}

// 选择学习方法
function selectMethod(method) {
  currentLearningMethod = method;
  var m = LEARNING_METHODS[method];
  if (!m) { return; }

  if (method === 'quiz') {
    // 刷题模式直接开始每日打卡
    switchTab('daily');
    return;
  }

  // 其他方法显示引导弹窗
  var html = '';
  html += '<div class="method-guide">';
  html += '<div class="mg-icon">' + m.icon + '</div>';
  html += '<div class="mg-title">' + m.name + '</div>';
  html += '<div>';
  for (var i = 0; i < m.steps.length; i++) {
    html += '<div class="mg-step">';
    html += '<div class="mg-num">' + (i + 1) + '</div>';
    html += '<div class="mg-text">' + escapeHtml(m.steps[i]) + '</div>';
    html += '</div>';
  }
  html += '</div>';
  html += '<button class="btn-primary" style="margin-top:18px" onclick="closeModal();">开始学习</button>';
  html += '</div>';

  openModal(m.name, html);
  // 滚动到知识库
  setTimeout(function () {
    var list = document.getElementById('kpList');
    if (list) { list.scrollIntoView({ behavior: 'smooth' }); }
  }, 100);
}

// 筛选分类
function filterCategory(cat) {
  currentCategory = cat;
  renderHomeContent();
}

// 构建知识点卡片列表
function buildKnowledgeCards() {
  var muscles = window.muscles || [];
  var diseases = window.diseases || [];
  var html = '';

  var showMuscle = (currentCategory === 'all' || currentCategory === 'muscle');
  var showDisease = (currentCategory === 'all' || currentCategory === 'disease');

  if (showMuscle) {
    for (var i = 0; i < muscles.length; i++) {
      html += buildMuscleCard(muscles[i], i);
    }
  }
  if (showDisease) {
    for (var j = 0; j < diseases.length; j++) {
      html += buildDiseaseCard(diseases[j], j);
    }
  }

  if (!html) {
    html = '<div class="empty-state"><div class="e-icon">📭</div><div class="e-text">暂无数据</div></div>';
  }
  return html;
}

function buildMuscleCard(m, index) {
  var html = '';
  var pointCount = MUSCLE_FIELDS.length;
  html += '<div class="kp-card" onclick="showMuscleDetail(' + index + ')">';
  html += '<div class="kp-head">';
  html += '<div class="kp-name">' + escapeHtml(m['肌肉名称'] || '未命名肌肉') + '</div>';
  html += '<div class="kp-badge muscle">肌肉</div>';
  html += '</div>';
  html += '<div class="kp-meta">';
  if (m['身体区域']) {
    html += '<span class="meta-item">📍 ' + escapeHtml(m['身体区域']) + '</span>';
  }
  if (m['疾病分级']) {
    html += '<span class="meta-item">🏆 ' + escapeHtml(m['疾病分级']) + '</span>';
  }
  html += '</div>';
  if (m['主要功能']) {
    html += '<div class="kp-desc">功能：' + escapeHtml(truncate(m['主要功能'], 60)) + '</div>';
  }
  if (m['常见损伤']) {
    html += '<div class="kp-desc">损伤：' + escapeHtml(truncate(m['常见损伤'], 50)) + '</div>';
  }
  html += '<div class="kp-foot">';
  html += '<span class="kp-count">' + pointCount + ' 个知识点</span>';
  html += '<span class="kp-arrow">查看 ›</span>';
  html += '</div>';
  html += '</div>';
  return html;
}

function buildDiseaseCard(d, index) {
  var html = '';
  var pointCount = DISEASE_FIELDS.length;
  html += '<div class="kp-card" onclick="showDiseaseDetail(' + index + ')">';
  html += '<div class="kp-head">';
  html += '<div class="kp-name">' + escapeHtml(d['具体病症'] || '未命名疾病') + '</div>';
  html += '<div class="kp-badge disease">疾病</div>';
  html += '</div>';
  html += '<div class="kp-meta">';
  if (d['部位']) {
    html += '<span class="meta-item">📍 ' + escapeHtml(d['部位']) + '</span>';
  }
  if (d['疾病分类']) {
    html += '<span class="meta-item">🏷 ' + escapeHtml(d['疾病分类']) + '</span>';
  }
  if (d['ICD10编码']) {
    html += '<span class="meta-item">📋 ' + escapeHtml(d['ICD10编码']) + '</span>';
  }
  html += '</div>';
  if (d['典型症状与体征']) {
    html += '<div class="kp-desc">' + escapeHtml(truncate(d['典型症状与体征'], 70)) + '</div>';
  }
  html += '<div class="kp-foot">';
  html += '<span class="kp-count">' + pointCount + ' 个知识点</span>';
  html += '<span class="kp-arrow">查看 ›</span>';
  html += '</div>';
  html += '</div>';
  return html;
}

// 显示肌肉详情
function showMuscleDetail(index) {
  var m = window.muscles[index];
  if (!m) { return; }
  var points = [];
  for (var i = 0; i < MUSCLE_FIELDS.length; i++) {
    var f = MUSCLE_FIELDS[i];
    if (m[f.key]) {
      points.push({ label: f.label, value: m[f.key] });
    }
  }
  showDetailModal(m['肌肉名称'] || '肌肉详情', points, 'muscle', index);
}

// 显示疾病详情
function showDiseaseDetail(index) {
  var d = window.diseases[index];
  if (!d) { return; }
  var points = [];
  for (var i = 0; i < DISEASE_FIELDS.length; i++) {
    var f = DISEASE_FIELDS[i];
    if (d[f.key]) {
      points.push({ label: f.label, value: d[f.key] });
    }
  }
  showDetailModal(d['具体病症'] || '疾病详情', points, 'disease', index);
}

// 显示详情弹窗（含闪卡）
function showDetailModal(title, points, type, dataIndex) {
  if (!points || points.length === 0) {
    openModal(title, '<div class="empty-state"><div class="e-icon">📭</div><div class="e-text">暂无详细数据</div></div>');
    return;
  }
  flashcardCtx = { points: points, index: 0, title: title, type: type, dataIndex: dataIndex };
  renderFlashcardModal();
}

function renderFlashcardModal() {
  if (!flashcardCtx) { return; }
  var ctx = flashcardCtx;
  var point = ctx.points[ctx.index];
  var html = '';
  // 闪卡
  html += '<div class="flashcard" id="flashcard">';
  html += '<div class="fc-label">' + escapeHtml(point.label) + '</div>';
  html += '<div class="fc-value">' + escapeHtml(point.value) + '</div>';
  html += '</div>';
  // 导航
  html += '<div class="fc-nav">';
  html += '<button onclick="prevFlashcard()" ' + (ctx.index === 0 ? 'disabled' : '') + '>‹</button>';
  html += '<span class="fc-index">' + (ctx.index + 1) + ' / ' + ctx.points.length + '</span>';
  html += '<button onclick="nextFlashcard()" ' + (ctx.index === ctx.points.length - 1 ? 'disabled' : '') + '>›</button>';
  html += '</div>';
  // 操作按钮
  html += '<div class="fc-actions">';
  html += '<button class="btn-secondary" onclick="flipFlashcard()">翻转复习</button>';
  if (ctx.type) {
    html += '<button class="btn-primary" onclick="quizThisKnowledge(\'' + ctx.type + '\',' + ctx.dataIndex + ')">测试此知识点</button>';
  }
  html += '</div>';

  openModal(ctx.title, html);
}

// 闪卡导航
function showFlashcard(point, title, index) {
  // 兼容外部调用接口
  if (!flashcardCtx) { return; }
  flashcardCtx.index = index;
  renderFlashcardModal();
}

function nextFlashcard() {
  if (!flashcardCtx) { return; }
  if (flashcardCtx.index < flashcardCtx.points.length - 1) {
    flashcardCtx.index++;
    renderFlashcardModal();
  }
}

function prevFlashcard() {
  if (!flashcardCtx) { return; }
  if (flashcardCtx.index > 0) {
    flashcardCtx.index--;
    renderFlashcardModal();
  }
}

function flipFlashcard() {
  var card = document.getElementById('flashcard');
  if (!card) { return; }
  card.style.transform = (card.style.transform === 'rotateY(180deg)') ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

// 测试此知识点：从题库筛选相关题目
function quizThisKnowledge(type, dataIndex) {
  closeModal();
  // 尝试找相关题目
  var item;
  if (type === 'muscle') {
    item = window.muscles[dataIndex];
  } else {
    item = window.diseases[dataIndex];
  }
  var keyword = '';
  if (type === 'muscle' && item) {
    keyword = item['肌肉名称'] || '';
  } else if (item) {
    keyword = item['具体病症'] || '';
  }

  var related = [];
  var bank = [];
  if (window.questionBank && window.questionBank.all) {
    bank = window.questionBank.all;
  }
  if (keyword && bank.length) {
    for (var i = 0; i < bank.length; i++) {
      var q = bank[i];
      if (q.q && q.q.indexOf(keyword) >= 0) {
        related.push(q);
      }
    }
  }
  if (related.length === 0) {
    // 没有相关题，随机抽
    related = getRandomQuestions(10);
  } else if (related.length > 10) {
    related = shuffleArray(related).slice(0, 10);
  }

  // 先切换到每日打卡 tab（会渲染开始页），再启动测验覆盖内容
  switchTab('daily');
  startDailyQuizWithQuestions(related);
}

// ============================================================
// 弹窗通用方法
// ============================================================

function openModal(title, bodyHtml) {
  var container = document.getElementById('modalContainer');
  if (!container) { return; }
  var html = '';
  html += '<div class="modal-mask" id="modalMask" onclick="onMaskClick(event)">';
  html += '<div class="modal-content" onclick="event.stopPropagation()">';
  html += '<div class="modal-head">';
  html += '<span class="m-title">' + escapeHtml(title) + '</span>';
  html += '<button class="modal-close" onclick="closeModal()">✕</button>';
  html += '</div>';
  html += '<div class="modal-body">' + bodyHtml + '</div>';
  html += '</div>';
  html += '</div>';
  container.innerHTML = html;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var container = document.getElementById('modalContainer');
  if (container) { container.innerHTML = ''; }
  document.body.style.overflow = '';
  flashcardCtx = null;
}

function onMaskClick(e) {
  if (e.target.id === 'modalMask') {
    closeModal();
  }
}

// ============================================================
// 每日打卡
// ============================================================

function renderDailyStart() {
  var page = document.getElementById('page-daily');
  if (!page) { return; }
  setBackButton(false);

  var todayDone = (state.dailyDoneDate === getTodayStr());
  var html = '';
  html += '<div class="start-screen">';
  html += '<div class="big-icon">✅</div>';
  html += '<div class="start-title">每日打卡</div>';
  html += '<div class="start-desc">每天 10 道随机题<br>坚持学习，巩固肌骨康复知识</div>';
  html += '<div class="start-info">';
  html += '<div class="info-item"><div class="info-num">10</div><div class="info-label">题目数</div></div>';
  html += '<div class="info-item"><div class="info-num">' + state.dailyDoneCount + '</div><div class="info-label">今日打卡</div></div>';
  html += '<div class="info-item"><div class="info-num">' + state.streak + '</div><div class="info-label">连续天数</div></div>';
  html += '</div>';
  if (todayDone) {
    html += '<div style="color:var(--success);font-size:13px;margin-bottom:16px">🎉 今日已完成打卡，可继续练习</div>';
  }
  html += '<button class="btn-primary" onclick="startDailyQuiz()">开始打卡</button>';
  html += '</div>';
  page.innerHTML = html;
}

function startDailyQuiz() {
  var questions = getRandomQuestions(10);
  if (questions.length === 0) {
    openModal('提示', '<div class="empty-state"><div class="e-icon">📭</div><div class="e-text">题库尚未加载，请稍后再试</div></div>');
    return;
  }
  startDailyQuizWithQuestions(questions);
}

function startDailyQuizWithQuestions(questions) {
  examModeState.questions = questions;
  examModeState.currentIndex = 0;
  examModeState.score = 0;
  examModeState.answered = false;
  examModeState.wrongQuestions = [];
  examModeState.userAnswers = [];
  examModeState.mode = 'daily';
  examModeState.finished = false;
  examModeState.startTime = 0;
  examModeState.isPaused = false;
  pushNav('daily-question');
  renderExamQuestion();
}

// ============================================================
// 考试模式
// ============================================================

function renderExamStart() {
  var page = document.getElementById('page-exam');
  if (!page) { return; }
  setBackButton(false);

  // 清理计时器
  if (examModeState.timerInterval) {
    clearInterval(examModeState.timerInterval);
    examModeState.timerInterval = null;
  }

  var html = '';
  html += '<div class="start-screen">';
  html += '<div class="big-icon">📝</div>';
  html += '<div class="start-title">考试模式</div>';
  html += '<div class="start-desc">100 道随机题 · 60 分钟<br>检验综合掌握水平，错题自动加入错题本</div>';
  html += '<div class="start-info">';
  html += '<div class="info-item"><div class="info-num">100</div><div class="info-label">题目数</div></div>';
  html += '<div class="info-item"><div class="info-num">60</div><div class="info-label">分钟</div></div>';
  html += '<div class="info-item"><div class="info-num">' + state.examDoneCount + '</div><div class="info-label">已考次数</div></div>';
  html += '</div>';
  html += '<button class="btn-primary" onclick="startExamMode()">开始考试</button>';
  html += '</div>';
  page.innerHTML = html;
}

function startExamMode() {
  var questions = getRandomQuestions(100);
  if (questions.length === 0) {
    openModal('提示', '<div class="empty-state"><div class="e-icon">📭</div><div class="e-text">题库尚未加载，请稍后再试</div></div>');
    return;
  }
  examModeState.questions = questions;
  examModeState.currentIndex = 0;
  examModeState.score = 0;
  examModeState.answered = false;
  examModeState.wrongQuestions = [];
  examModeState.userAnswers = [];
  examModeState.mode = 'exam';
  examModeState.finished = false;
  examModeState.startTime = Date.now();
  examModeState.elapsedTime = 0;
  examModeState.isPaused = false;

  // 启动计时器
  startExamTimer();
  pushNav('exam-question');
  renderExamQuestion();
}

function startExamTimer() {
  if (examModeState.timerInterval) {
    clearInterval(examModeState.timerInterval);
  }
  examModeState.timerInterval = setInterval(function () {
    if (!examModeState.isPaused && !examModeState.finished) {
      updateExamTimer();
    }
  }, 1000);
}

function updateExamTimer() {
  var timerEl = document.getElementById('examTimer');
  if (!timerEl) { return; }
  var elapsed = Math.floor((Date.now() - examModeState.startTime - examModeState.elapsedTime) / 1000);
  var remaining = 60 * 60 - elapsed; // 60 分钟
  if (remaining <= 0) {
    remaining = 0;
    timerEl.textContent = '00:00';
    timerEl.className = 'q-timer danger';
    // 时间到自动提交
    submitExam();
    return;
  }
  var min = Math.floor(remaining / 60);
  var sec = remaining % 60;
  if (min < 10) { min = '0' + min; }
  if (sec < 10) { sec = '0' + sec; }
  timerEl.textContent = min + ':' + sec;
  if (remaining < 60) {
    timerEl.className = 'q-timer danger';
  } else if (remaining < 300) {
    timerEl.className = 'q-timer warn';
  }
}

function pauseExam() {
  if (examModeState.mode !== 'exam') { return; }
  examModeState.isPaused = true;
  examModeState.pauseStart = Date.now();
  // 显示暂停遮罩
  var page = document.getElementById('page-exam');
  if (!page) { return; }
  var mask = document.createElement('div');
  mask.className = 'pause-mask';
  mask.id = 'pauseMask';
  mask.innerHTML = '<div class="p-icon">⏸</div><div class="p-text">考试已暂停</div><button class="btn-primary" style="width:200px" onclick="resumeExam()">继续考试</button>';
  page.appendChild(mask);
}

function resumeExam() {
  examModeState.isPaused = false;
  if (examModeState.pauseStart) {
    examModeState.elapsedTime += Date.now() - examModeState.pauseStart;
    examModeState.pauseStart = 0;
  }
  var mask = document.getElementById('pauseMask');
  if (mask) { mask.parentNode.removeChild(mask); }
}

// ============================================================
// 题目渲染
// ============================================================

function renderExamQuestion() {
  var pageId = (examModeState.mode === 'exam') ? 'page-exam' : 'page-daily';
  var page = document.getElementById(pageId);
  if (!page) { return; }

  if (examModeState.currentIndex >= examModeState.questions.length) {
    submitExam();
    return;
  }

  var q = examModeState.questions[examModeState.currentIndex];
  examModeState.answered = false;

  var html = '';
  // 头部：进度 + 计时/暂停
  html += '<div class="q-header">';
  html += '<div class="q-progress">第 <span class="num">' + (examModeState.currentIndex + 1) + '</span> / ' + examModeState.questions.length + ' 题</div>';
  if (examModeState.mode === 'exam') {
    var elapsed = Math.floor((Date.now() - examModeState.startTime - examModeState.elapsedTime) / 1000);
    var remaining = 60 * 60 - elapsed;
    if (remaining < 0) { remaining = 0; }
    var min = Math.floor(remaining / 60);
    var sec = remaining % 60;
    if (min < 10) { min = '0' + min; }
    if (sec < 10) { sec = '0' + sec; }
    var cls = 'q-timer';
    if (remaining < 60) { cls = 'q-timer danger'; }
    else if (remaining < 300) { cls = 'q-timer warn'; }
    html += '<div style="display:flex;gap:8px;align-items:center">';
    html += '<div class="' + cls + '" id="examTimer">' + min + ':' + sec + '</div>';
    html += '<button class="back-btn" style="background:var(--primary-bg);color:var(--primary)" onclick="pauseExam()">⏸</button>';
    html += '</div>';
  }
  html += '</div>';

  // 题目类型标签
  var typeLabel = (q.type === 'judge') ? '判断题' : '单选题';
  var typeCls = (q.type === 'judge') ? 'judge' : 'single';
  html += '<span class="q-type-tag ' + typeCls + '">' + typeLabel + '</span>';

  // 题干
  html += '<div class="q-question">' + escapeHtml(q.q) + '</div>';

  // 选项
  html += '<div class="q-options" id="qOptions">';
  if (q.type === 'judge') {
    html += buildOption(0, '正确', '✓');
    html += buildOption(1, '错误', '✗');
  } else if (q.options && q.options.length) {
    var labels = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (var i = 0; i < q.options.length; i++) {
      var lbl = labels[i] || String(i + 1);
      html += buildOption(i, q.options[i], lbl);
    }
  }
  html += '</div>';

  // 反馈区
  html += '<div id="qFeedback"></div>';

  // 下一题按钮
  var isLast = (examModeState.currentIndex === examModeState.questions.length - 1);
  var btnText = isLast ? '提交并查看结果' : '下一题';
  html += '<button class="btn-primary btn-block" id="nextBtn" style="display:none" onclick="nextExamQuestion()">' + btnText + '</button>';

  // 考试模式提供放弃按钮
  if (examModeState.mode === 'exam') {
    html += '<div style="text-align:center;margin-top:12px"><button class="btn-secondary" style="width:auto;padding:8px 20px;font-size:13px" onclick="confirmSubmitExam(true)">提前交卷</button></div>';
  }

  page.innerHTML = html;
  window.scrollTo(0, 0);
}

function buildOption(index, text, label) {
  var html = '';
  html += '<div class="q-option" onclick="selectExamOption(' + index + ')">';
  html += '<div class="opt-label">' + escapeHtml(label) + '</div>';
  html += '<div class="opt-text">' + escapeHtml(text) + '</div>';
  html += '</div>';
  return html;
}

function selectExamOption(index) {
  if (examModeState.answered) { return; }
  examModeState.answered = true;

  var q = examModeState.questions[examModeState.currentIndex];
  var correctIndex;
  if (q.type === 'judge') {
    correctIndex = q.answer ? 0 : 1;
  } else {
    correctIndex = q.answer;
  }

  var isCorrect = (index === correctIndex);

  // 记录用户答案
  var userAnswer;
  if (q.type === 'judge') {
    userAnswer = (index === 0); // true/false
  } else {
    userAnswer = index;
  }
  examModeState.userAnswers[examModeState.currentIndex] = userAnswer;

  // 标记选项
  var options = document.querySelectorAll('#qOptions .q-option');
  for (var i = 0; i < options.length; i++) {
    options[i].onclick = null;
    options[i].classList.add('disabled');
    if (i === correctIndex) {
      options[i].classList.add('correct');
    } else if (i === index) {
      options[i].classList.add('wrong');
    }
  }

  // 反馈
  var feedback = document.getElementById('qFeedback');
  var correctText = getCorrectText(q, correctIndex);
  var html = '';
  if (isCorrect) {
    examModeState.score++;
    state.coins += 5;
    state.exp += 10;
    state.totalCorrect++;
    html += '<div class="feedback correct">✓ 答对了！+5🪙 +10经验</div>';
  } else {
    html += '<div class="feedback wrong">✗ 答错了';
    html += '<span class="answer-hint">正确答案：' + escapeHtml(correctText) + '</span>';
    html += '</div>';
    addWrongQuestion(q, userAnswer);
  }
  state.totalAnswered++;
  // 更新标签统计
  updateTagStats(q, isCorrect);

  if (feedback) { feedback.innerHTML = html; }

  // 显示下一题按钮
  var nextBtn = document.getElementById('nextBtn');
  if (nextBtn) { nextBtn.style.display = 'block'; }

  updateStats();
  saveState();
}

function getCorrectText(q, correctIndex) {
  if (q.type === 'judge') {
    return correctIndex === 0 ? '正确' : '错误';
  }
  if (q.options && q.options[correctIndex] !== undefined) {
    return q.options[correctIndex];
  }
  return '';
}

function getUserAnswerText(q, userAnswer) {
  if (q.type === 'judge') {
    return userAnswer ? '正确' : '错误';
  }
  if (q.options && q.options[userAnswer] !== undefined) {
    return q.options[userAnswer];
  }
  return String(userAnswer);
}

function nextExamQuestion() {
  if (!examModeState.answered) { return; }
  if (examModeState.currentIndex >= examModeState.questions.length - 1) {
    submitExam();
    return;
  }
  examModeState.currentIndex++;
  examModeState.answered = false;
  renderExamQuestion();
}

// 更新标签统计
function updateTagStats(q, isCorrect) {
  if (!q.tags || !q.tags.length) { return; }
  for (var i = 0; i < q.tags.length; i++) {
    var tag = q.tags[i];
    if (!state.tagStats[tag]) {
      state.tagStats[tag] = { total: 0, correct: 0 };
    }
    state.tagStats[tag].total++;
    if (isCorrect) {
      state.tagStats[tag].correct++;
    }
  }
}

// ============================================================
// 提交考试
// ============================================================

function confirmSubmitExam(early) {
  if (early) {
    var answered = examModeState.userAnswers.length;
    openModal('确认交卷', '<div style="text-align:center;padding:10px 0"><p style="font-size:14px;color:var(--text-secondary);margin-bottom:8px">已答 ' + answered + ' / ' + examModeState.questions.length + ' 题</p><p style="font-size:13px;color:var(--text-tertiary)">提交后将不能继续作答</p><div class="btn-row"><button class="btn-secondary" onclick="closeModal()">继续答题</button><button class="btn-primary" onclick="closeModal();submitExam()">确认交卷</button></div></div>');
  } else {
    submitExam();
  }
}

function submitExam() {
  if (examModeState.finished) { return; }
  examModeState.finished = true;

  // 停止计时器
  if (examModeState.timerInterval) {
    clearInterval(examModeState.timerInterval);
    examModeState.timerInterval = null;
  }

  // 移除暂停遮罩
  var mask = document.getElementById('pauseMask');
  if (mask) { mask.parentNode.removeChild(mask); }

  var total = examModeState.questions.length;
  var score = examModeState.score;
  var accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
  var elapsedSec = 0;
  if (examModeState.mode === 'exam' && examModeState.startTime) {
    elapsedSec = Math.floor((Date.now() - examModeState.startTime - examModeState.elapsedTime) / 1000);
  }

  // 更新全局统计
  state.completionCount++;
  if (examModeState.mode === 'daily') {
    state.dailyDoneCount++;
    state.dailyDoneDate = getTodayStr();
    state.coins += 20;
    state.exp += 30;
  } else {
    state.examDoneCount++;
    state.coins += 50;
    state.exp += 80;
    // 考试及格额外奖励
    if (accuracy >= 60) {
      state.coins += 30;
      state.exp += 50;
    }
  }

  // 错题已加入错题本（答题时处理）
  saveState();
  updateStats();

  // 渲染结果页
  renderExamResult(score, total, accuracy, elapsedSec);
  pushNav(examModeState.mode + '-result');
  setBackButton(true);
}

function renderExamResult(score, total, accuracy, elapsedSec) {
  var pageId = (examModeState.mode === 'exam') ? 'page-exam' : 'page-daily';
  var page = document.getElementById(pageId);
  if (!page) { return; }

  var emoji = '🎉';
  var title = '完成打卡！';
  if (examModeState.mode === 'exam') {
    title = accuracy >= 60 ? '考试通过！' : '考试未通过';
    if (accuracy >= 90) { emoji = '🏆'; }
    else if (accuracy >= 60) { emoji = '🎉'; }
    else { emoji = '💪'; }
  } else {
    if (accuracy >= 90) { emoji = '🏆'; }
    else if (accuracy >= 60) { emoji = '🎉'; }
    else { emoji = '💪'; }
  }

  var min = Math.floor(elapsedSec / 60);
  var sec = elapsedSec % 60;
  var timeStr = min + '分' + sec + '秒';

  var html = '';
  html += '<div class="result-card">';
  html += '<div class="result-emoji">' + emoji + '</div>';
  html += '<div class="result-title">' + title + '</div>';
  html += '<div class="result-score">' + score + '<span class="small">/' + total + '</span></div>';
  html += '<div class="result-meta">';
  html += '<div><div class="meta-num">' + accuracy + '%</div><div class="meta-label">正确率</div></div>';
  html += '<div><div class="meta-num">' + timeStr + '</div><div class="meta-label">用时</div></div>';
  if (examModeState.wrongQuestions.length > 0) {
    html += '<div><div class="meta-num">' + examModeState.wrongQuestions.length + '</div><div class="meta-label">错题数</div></div>';
  }
  html += '</div>';
  html += '</div>';

  // 错题回顾
  if (examModeState.wrongQuestions.length > 0) {
    html += '<div class="section-title"><span class="dot"></span>错题回顾</div>';
    for (var i = 0; i < examModeState.wrongQuestions.length; i++) {
      html += buildReviewItem(examModeState.wrongQuestions[i]);
    }
  }

  // 按钮
  html += '<div class="btn-row">';
  if (examModeState.wrongQuestions.length > 0) {
    html += '<button class="btn-secondary" onclick="switchTab(\'wrong\')">查看错题本</button>';
  }
  var againText = (examModeState.mode === 'exam') ? '再考一次' : '再来一次';
  var againFn = (examModeState.mode === 'exam') ? 'startExamMode()' : 'startDailyQuiz()';
  html += '<button class="btn-primary" onclick="' + againFn + '">' + againText + '</button>';
  html += '</div>';

  page.innerHTML = html;
  window.scrollTo(0, 0);
}

function buildReviewItem(wq) {
  var html = '';
  html += '<div class="review-item">';
  html += '<div class="r-q">' + escapeHtml(wq.question.q) + '</div>';
  var userText = getUserAnswerText(wq.question, wq.userAnswer);
  var correctIndex;
  if (wq.question.type === 'judge') {
    correctIndex = wq.question.answer ? 0 : 1;
  } else {
    correctIndex = wq.question.answer;
  }
  var correctText = getCorrectText(wq.question, correctIndex);
  html += '<div class="r-ans user-wrong">你的答案：' + escapeHtml(userText) + '</div>';
  html += '<div class="r-ans correct">正确答案：' + escapeHtml(correctText) + '</div>';
  if (wq.question.tags && wq.question.tags.length) {
    html += '<div class="tag-list">';
    for (var i = 0; i < wq.question.tags.length; i++) {
      html += '<span class="tag">' + escapeHtml(wq.question.tags[i]) + '</span>';
    }
    html += '</div>';
  }
  html += '</div>';
  return html;
}

// ============================================================
// 错题本
// ============================================================

function addWrongQuestion(question, userAnswer) {
  // 去重：相同题目只保留一条
  for (var i = 0; i < wrongQuestionBank.length; i++) {
    if (wrongQuestionBank[i].question.q === question.q) {
      wrongQuestionBank[i].userAnswer = userAnswer;
      wrongQuestionBank[i].time = Date.now();
      examModeState.wrongQuestions.push({ question: question, userAnswer: userAnswer });
      saveState();
      return;
    }
  }
  var wq = {
    question: question,
    userAnswer: userAnswer,
    time: Date.now()
  };
  wrongQuestionBank.push(wq);
  examModeState.wrongQuestions.push(wq);
  saveState();
}

function renderWrongQuestions() {
  var page = document.getElementById('page-wrong');
  if (!page) { return; }
  setBackButton(false);

  var html = '';
  html += '<div class="section-title"><span class="dot"></span>错题本';
  if (wrongQuestionBank.length > 0) {
    html += '<span style="font-size:13px;color:var(--text-tertiary);font-weight:500;margin-left:auto">共 ' + wrongQuestionBank.length + ' 题</span>';
  }
  html += '</div>';

  if (wrongQuestionBank.length === 0) {
    html += '<div class="empty-state">';
    html += '<div class="e-icon">📒</div>';
    html += '<div class="e-text">错题本为空</div>';
    html += '<div class="e-text" style="margin-top:8px;font-size:12px">答题时答错的题目会自动加入</div>';
    html += '</div>';
  } else {
    for (var i = 0; i < wrongQuestionBank.length; i++) {
      html += buildWrongItem(wrongQuestionBank[i], i);
    }
    html += '<button class="btn-secondary" style="margin-top:12px" onclick="clearAllWrong()">清空错题本</button>';
  }

  page.innerHTML = html;
}

function buildWrongItem(wq, index) {
  var q = wq.question;
  var userText = getUserAnswerText(q, wq.userAnswer);
  var correctIndex;
  if (q.type === 'judge') {
    correctIndex = q.answer ? 0 : 1;
  } else {
    correctIndex = q.answer;
  }
  var correctText = getCorrectText(q, correctIndex);
  var typeLabel = (q.type === 'judge') ? '判断题' : '单选题';

  var html = '';
  html += '<div class="wrong-item">';
  html += '<div class="w-q"><span style="color:var(--text-tertiary);font-size:11px;margin-right:6px">[' + typeLabel + ']</span>' + escapeHtml(q.q) + '</div>';
  if (q.options && q.type !== 'judge') {
    html += '<div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;line-height:1.5">';
    for (var i = 0; i < q.options.length; i++) {
      var lbl = String.fromCharCode(65 + i);
      var mark = (i === correctIndex) ? ' ✓' : ((i === wq.userAnswer) ? ' ✗' : '');
      html += '<div>' + lbl + '. ' + escapeHtml(q.options[i]) + mark + '</div>';
    }
    html += '</div>';
  }
  html += '<div class="w-row"><span class="w-label">你的答案：</span><span class="w-user">' + escapeHtml(userText) + '</span></div>';
  html += '<div class="w-row"><span class="w-label">正确答案：</span><span class="w-correct">' + escapeHtml(correctText) + '</span></div>';
  html += '<div class="w-foot">';
  html += '<span class="w-time">' + formatTime(wq.time) + '</span>';
  html += '<button class="w-del" onclick="removeWrongQuestion(' + index + ')">已掌握 ✓</button>';
  html += '</div>';
  html += '</div>';
  return html;
}

function formatTime(ts) {
  if (!ts) { return ''; }
  var d = new Date(ts);
  var m = d.getMonth() + 1;
  var day = d.getDate();
  var h = d.getHours();
  var min = d.getMinutes();
  if (m < 10) { m = '0' + m; }
  if (day < 10) { day = '0' + day; }
  if (h < 10) { h = '0' + h; }
  if (min < 10) { min = '0' + min; }
  return m + '-' + day + ' ' + h + ':' + min;
}

function removeWrongQuestion(index) {
  if (index < 0 || index >= wrongQuestionBank.length) { return; }
  wrongQuestionBank.splice(index, 1);
  saveState();
  renderWrongQuestions();
}

function clearAllWrong() {
  if (wrongQuestionBank.length === 0) { return; }
  openModal('确认清空', '<div style="text-align:center;padding:10px 0"><p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">确定清空所有错题吗？此操作不可撤销</p><div class="btn-row"><button class="btn-secondary" onclick="closeModal()">取消</button><button class="btn-primary" onclick="closeModal();doClearWrong()">确认清空</button></div></div>');
}

function doClearWrong() {
  wrongQuestionBank = [];
  saveState();
  renderWrongQuestions();
}

// ============================================================
// 统计页
// ============================================================

function renderStats() {
  var page = document.getElementById('page-stats');
  if (!page) { return; }
  setBackButton(false);

  var accuracy = state.totalAnswered > 0 ? Math.round((state.totalCorrect / state.totalAnswered) * 100) : 0;

  var html = '';
  // 顶部数据卡片
  html += '<div class="stats-grid">';
  html += '<div class="stat-card"><div class="s-icon">📅</div><div class="s-num">' + state.studyDays + '</div><div class="s-label">学习天数</div></div>';
  html += '<div class="stat-card"><div class="s-icon">🎯</div><div class="s-num">' + state.completionCount + '</div><div class="s-label">完成次数</div></div>';
  html += '<div class="stat-card"><div class="s-icon">📝</div><div class="s-num">' + state.totalAnswered + '</div><div class="s-label">答题总数</div></div>';
  html += '<div class="stat-card"><div class="s-icon">📈</div><div class="s-num">' + accuracy + '%</div><div class="s-label">正确率</div></div>';
  html += '</div>';

  // 进度信息
  html += '<div class="card">';
  html += '<div style="display:flex;justify-content:space-between;margin-bottom:8px">';
  html += '<span style="font-size:13px;color:var(--text-secondary)">经验值</span>';
  html += '<span style="font-size:13px;font-weight:600;color:var(--primary)">' + state.exp + ' / ' + (state.level * 100) + '</span>';
  html += '</div>';
  html += '<div class="mastery-bar"><div class="mastery-fill" style="width:' + (state.exp % 100) + '%"></div></div>';
  html += '<div style="display:flex;justify-content:space-between;margin-top:10px;font-size:12px;color:var(--text-tertiary)">';
  html += '<span>💰 金币 ' + state.coins + '</span>';
  html += '<span>🔥 连续 ' + state.streak + ' 天</span>';
  html += '<span>⭐ Lv.' + state.level + '</span>';
  html += '</div>';
  html += '</div>';

  // 知识点掌握度
  html += '<div class="section-title"><span class="dot"></span>知识点掌握度</div>';
  html += '<div class="card">';
  var tags = state.tagStats;
  var tagArr = [];
  for (var k in tags) {
    if (tags.hasOwnProperty(k)) {
      var t = tags[k];
      var pct = t.total > 0 ? Math.round((t.correct / t.total) * 100) : 0;
      tagArr.push({ name: k, pct: pct, total: t.total, correct: t.correct });
    }
  }
  // 按答题数排序，取前 8
  tagArr.sort(function (a, b) { return b.total - a.total; });
  if (tagArr.length === 0) {
    html += '<div class="empty-state" style="padding:24px"><div class="e-icon">📊</div><div class="e-text">暂无答题数据</div></div>';
  } else {
    var showCount = Math.min(8, tagArr.length);
    for (var i = 0; i < showCount; i++) {
      var t2 = tagArr[i];
      html += '<div class="mastery-bar-wrap">';
      html += '<div class="mastery-head"><span class="m-name">' + escapeHtml(t2.name) + '</span><span class="m-pct">' + t2.pct + '% (' + t2.correct + '/' + t2.total + ')</span></div>';
      html += '<div class="mastery-bar"><div class="mastery-fill" style="width:' + t2.pct + '%"></div></div>';
      html += '</div>';
    }
  }
  html += '</div>';

  // 成就徽章
  html += '<div class="section-title"><span class="dot"></span>成就徽章</div>';
  html += '<div class="card">';
  html += '<div class="badge-grid">';
  html += buildBadge('🌱', '初次学习', state.studyDays >= 1);
  html += buildBadge('🔥', '坚持7天', state.streak >= 7);
  html += buildBadge('💪', '坚持30天', state.studyDays >= 30);
  html += buildBadge('✍️', '答题100', state.totalAnswered >= 100);
  html += buildBadge('🎯', '答题500', state.totalAnswered >= 500);
  html += buildBadge('🏆', '正确80%', accuracy >= 80 && state.totalAnswered >= 50);
  html += buildBadge('📝', '完成考试', state.examDoneCount >= 1);
  html += buildBadge('⭐', '满分打卡', examModeState.score === examModeState.questions.length && examModeState.questions.length > 0);
  html += '</div>';
  html += '</div>';

  // 重置按钮
  html += '<button class="btn-secondary" style="margin-top:12px" onclick="confirmReset()">重置学习进度</button>';

  page.innerHTML = html;
}

function buildBadge(icon, name, unlocked) {
  var html = '';
  html += '<div class="badge' + (unlocked ? ' unlocked' : '') + '">';
  html += '<div class="b-icon">' + icon + '</div>';
  html += '<div class="b-name">' + name + '</div>';
  html += '</div>';
  return html;
}

function confirmReset() {
  openModal('重置进度', '<div style="text-align:center;padding:10px 0"><p style="font-size:14px;color:var(--text-secondary);margin-bottom:16px">将清空所有学习记录、金币、错题本，不可恢复</p><div class="btn-row"><button class="btn-secondary" onclick="closeModal()">取消</button><button class="btn-primary" onclick="closeModal();doReset()">确认重置</button></div></div>');
}

function doReset() {
  state = {
    coins: 0, exp: 0, level: 1, studyDays: 0, completionCount: 0,
    mastery: {}, lastStudyDate: null, streak: 0,
    totalAnswered: 0, totalCorrect: 0,
    dailyDoneDate: null, dailyDoneCount: 0, examDoneCount: 0,
    tagStats: {}, badges: {}
  };
  wrongQuestionBank = [];
  saveState();
  updateStats();
  renderStats();
}

// ============================================================
// 启动
// ============================================================

// 兼容性：直接调用 init
init();
