#!/usr/bin/env node
// ============================================================
// 肌骨康复速查 - 题库生成脚本
// 从 data.js 中的 muscles / diseases 数据生成 3000+ 道选择题/判断题
// 输出：/workspace/questions.js
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ---------- 1. 读取并解析 data.js ----------

const dataPath = path.join(__dirname, 'data.js');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// 使用 vm 沙箱执行 data.js，提取 muscles / diseases 两个数组
// 将整个文件包裹在 IIFE 中，避免污染外部作用域，并能 return 出局部 const
const wrapperCode = `(function () {\n${dataContent}\nreturn { muscles: muscles, diseases: diseases };\n})()`;
const parsed = vm.runInNewContext(wrapperCode, {});

const muscles = parsed.muscles || [];
const diseases = parsed.diseases || [];

console.log(`[解析] 肌肉 ${muscles.length} 个, 疾病 ${diseases.length} 个`);

// ---------- 2. 工具函数 ----------

// 取字段值（兼容字段名笔误，多个候选键依次尝试）
function getField(obj, ...keys) {
  for (const k of keys) {
    const v = obj[k];
    if (v != null && String(v).trim() !== '') return String(v).trim();
  }
  return '';
}

// 截断到指定长度（按字符），过长加省略号
function truncate(s, n) {
  if (!s) return '';
  s = String(s).replace(/\s+/g, ' ').trim();
  return s.length <= n ? s : s.slice(0, n) + '…';
}

// 取字段的简短描述（用于单选选项）：取第一句或前 N 字符
function shortOption(s, n = 50) {
  if (!s) return '';
  s = String(s).replace(/\s+/g, ' ').trim();
  // 优先匹配第一句（不含换行/句号/分号）
  const m = s.match(/^[^。；;\n•·\-]{3,80}[。；;\n]?/);
  if (m) return m[0].trim().slice(0, n);
  return s.slice(0, n);
}

// 从长文本中提取一个有意义的短语（用于判断题题干）
function extractPhrase(text) {
  if (!text) return '';
  text = String(text);
  // 优先按换行/句号/分号切分，挑出长度合适的片段
  const parts = text.split(/[\n。；;]/).map(s => s.trim())
    .filter(s => s.length >= 6 && s.length <= 60);
  if (parts.length > 0) {
    // 取中段片段，避免太通用
    return parts[Math.floor(parts.length / 2)];
  }
  // 退而求其次，按逗号切
  const parts2 = text.split(/[，,、]/).map(s => s.trim())
    .filter(s => s.length >= 6 && s.length <= 40);
  if (parts2.length > 0) return parts2[0];
  // 兜底：取中段
  return truncate(text, 40);
}

// shuffle 数组（Fisher-Yates）
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 从池中取 n 个互不相同的干扰项（排除正确答案及已排除集合）
function pickDistractors(pool, n, correct, excludeSet) {
  const excl = excludeSet || new Set([correct]);
  const filtered = pool.filter(v => v && v !== correct && !excl.has(v));
  return shuffle(filtered).slice(0, n);
}

// ---------- 3. 题库容器 ----------

const allQuestions = [];

// 添加单选题（自动去重干扰项，不足 3 个则丢弃）
function addSingle(q, correct, distractors, tags) {
  if (!correct || correct.length < 1) return false;
  const seen = new Set([correct]);
  const opts = [];
  for (const d of distractors) {
    if (d && d !== correct && !seen.has(d)) {
      seen.add(d);
      opts.push(d);
    }
    if (opts.length >= 3) break;
  }
  if (opts.length < 3) return false;
  const options = shuffle([correct, ...opts]);
  const answer = options.indexOf(correct);
  allQuestions.push({ q, options, answer, type: 'single', tags });
  return true;
}

// 添加判断题
function addJudge(q, answer, tags) {
  allQuestions.push({ q, answer, type: 'judge', tags });
}

// 生成一道判断题：随机 true / false
// true 时取当前条目字段内容作为题干；false 时取其他条目同字段内容（并验证未出现在当前条目中）
function genJudge(itemName, fieldName, fieldValue, otherPool, tags) {
  if (!fieldValue || fieldValue.length < 8) return;
  const phrase = extractPhrase(fieldValue);
  if (!phrase || phrase.length < 5) return;

  // 50% 概率生成"正确"判断
  if (Math.random() < 0.5) {
    addJudge(`${itemName}的${fieldName}中提及："${truncate(phrase, 50)}"`, true, tags);
    return;
  }
  // 50% 概率生成"错误"判断 - 从其他条目取短语
  const others = shuffle(otherPool.filter(v => v && v !== fieldValue));
  for (const other of others) {
    const op = extractPhrase(other);
    if (op && op !== phrase && op.length >= 5 && !fieldValue.includes(op) && !op.includes(itemName)) {
      addJudge(`${itemName}的${fieldName}中提及："${truncate(op, 50)}"`, false, tags);
      return;
    }
  }
  // 兜底：生成正确判断
  addJudge(`${itemName}的${fieldName}中提及："${truncate(phrase, 50)}"`, true, tags);
}

// ---------- 4. 收集干扰项池 ----------

// 肌肉相关池（同时兼容字段名笔误）
const M = {
  名称: muscles.map(m => getField(m, '肌肉名称')).filter(Boolean),
  区域: [...new Set(muscles.map(m => getField(m, '身体区域')).filter(Boolean))],
  功能: muscles.map(m => shortOption(getField(m, '主要功能'), 40)).filter(s => s.length >= 3),
  损伤: muscles.map(m => shortOption(getField(m, '常见损伤'), 40)).filter(s => s.length >= 3),
  评估: muscles.map(m => shortOption(getField(m, '评估方法'), 40)).filter(s => s.length >= 3),
  激痛点: muscles.map(m => shortOption(getField(m, '激痛点'), 40)).filter(s => s.length >= 3),
  禁忌: muscles.map(m => shortOption(getField(m, '治疗禁忌'), 40)).filter(s => s.length >= 3),
  红旗: muscles.map(m => getField(m, '红旗征')).filter(s => s.length >= 3),
  关联疾病: muscles.map(m => getField(m, '关联骨科疾病')).filter(Boolean),
  康复: muscles.map(m => shortOption(getField(m, '康复训练'), 40)).filter(s => s.length >= 3),
  急性: muscles.map(m => shortOption(getField(m, '急性期处理', '急期期处理'), 50)).filter(s => s.length >= 3),
};

// 疾病相关池
const D = {
  名称: diseases.map(d => getField(d, '具体病症')).filter(Boolean),
  部位: [...new Set(diseases.map(d => getField(d, '部位')).filter(Boolean))],
  分类: [...new Set(diseases.map(d => getField(d, '疾病分类')).filter(Boolean))],
  分级: [...new Set(diseases.map(d => getField(d, '疾病分级')).filter(Boolean))],
  ICD: diseases.map(d => getField(d, 'ICD-10编码')).filter(Boolean),
  红旗: diseases.map(d => getField(d, '红旗征/紧急预警')).filter(s => s.length >= 5),
  症状: diseases.map(d => getField(d, '典型症状与体征')).filter(s => s.length >= 5),
  影像: diseases.map(d => getField(d, '影像学特征')).filter(s => s.length >= 5),
  鉴别: diseases.map(d => getField(d, '鉴别诊断')).filter(s => s.length >= 5),
  治疗: diseases.map(d => getField(d, '治疗方案')).filter(s => s.length >= 5),
  手术: diseases.map(d => getField(d, '手术指征')).filter(s => s.length >= 5),
  药物: diseases.map(d => getField(d, '药物治疗')).filter(s => s.length >= 5),
  注射: diseases.map(d => getField(d, '注射治疗')).filter(s => s.length >= 5),
  康复: diseases.map(d => getField(d, '康复训练方案')).filter(s => s.length >= 5),
  禁忌: diseases.map(d => getField(d, '康复禁忌动作')).filter(s => s.length >= 5),
  预后: diseases.map(d => getField(d, '预后转归')).filter(s => s.length >= 5),
  并发: diseases.map(d => getField(d, '常见并发症')).filter(s => s.length >= 5),
  生活: diseases.map(d => getField(d, '生活方式调整')).filter(s => s.length >= 5),
  心理: diseases.map(d => getField(d, '心理与行为干预')).filter(s => s.length >= 5),
  辅具: diseases.map(d => getField(d, '辅助器具推荐')).filter(s => s.length >= 5),
  预防: diseases.map(d => getField(d, '预防措施')).filter(s => s.length >= 5),
};

// ---------- 5. 肌肉题目生成 ----------

function genMuscleQuestions(m) {
  const name = getField(m, '肌肉名称');
  if (!name) return;
  const region = getField(m, '身体区域');
  const tags = ['肌肉'];
  if (region) tags.push(region);

  // 5.1 单选题：身体区域
  if (region) {
    addSingle(
      `${name}位于身体的哪个区域？`,
      region,
      pickDistractors(M.区域, 3, region),
      tags
    );
  }

  // 5.2 单选题：主要功能
  const func = shortOption(getField(m, '主要功能'), 40);
  if (func) {
    addSingle(
      `${name}的主要功能是？`,
      func,
      pickDistractors(M.功能, 3, func),
      tags
    );
  }

  // 5.3 单选题：常见损伤
  const inj = shortOption(getField(m, '常见损伤'), 40);
  if (inj) {
    addSingle(
      `${name}的常见损伤是？`,
      inj,
      pickDistractors(M.损伤, 3, inj),
      tags
    );
  }

  // 5.4 单选题：评估方法
  const assess = shortOption(getField(m, '评估方法'), 40);
  if (assess) {
    addSingle(
      `${name}的常用评估方法是？`,
      assess,
      pickDistractors(M.评估, 3, assess),
      tags
    );
  }

  // 5.5 单选题：激痛点
  const tp = shortOption(getField(m, '激痛点'), 40);
  if (tp) {
    addSingle(
      `${name}的常见激痛点位置是？`,
      tp,
      pickDistractors(M.激痛点, 3, tp),
      tags
    );
  }

  // 5.6 单选题：治疗禁忌
  const contra = shortOption(getField(m, '治疗禁忌'), 40);
  if (contra) {
    addSingle(
      `${name}的治疗禁忌包括？`,
      contra,
      pickDistractors(M.禁忌, 3, contra),
      tags
    );
  }

  // 5.7 单选题：红旗征
  const red = getField(m, '红旗征');
  const redShort = shortOption(red, 50);
  if (redShort) {
    addSingle(
      `${name}相关的红旗征是？`,
      redShort,
      pickDistractors(M.红旗.map(r => shortOption(r, 50)), 3, redShort),
      tags
    );
  }

  // 5.8 单选题：关联骨科疾病（交叉题）
  const relDz = getField(m, '关联骨科疾病');
  if (relDz) {
    addSingle(
      `${name}主要关联以下哪种骨科疾病？`,
      relDz,
      pickDistractors(M.关联疾病, 3, relDz),
      [...tags, '交叉题']
    );
  }

  // 5.9 单选题：康复训练
  const rehab = shortOption(getField(m, '康复训练'), 40);
  if (rehab) {
    addSingle(
      `${name}的康复训练包括？`,
      rehab,
      pickDistractors(M.康复, 3, rehab),
      tags
    );
  }

  // 5.10 单选题：急性期处理（兼容字段名笔误）
  const acute = shortOption(getField(m, '急性期处理', '急期期处理'), 50);
  if (acute) {
    addSingle(
      `${name}急性期的处理原则是？`,
      acute,
      pickDistractors(M.急性, 3, acute),
      tags
    );
  }

  // 5.11 判断题：主要功能
  genJudge(name, '主要功能', getField(m, '主要功能'), M.功能, tags);
  // 5.12 判断题：常见损伤
  genJudge(name, '常见损伤', getField(m, '常见损伤'), M.损伤, tags);
  // 5.13 判断题：激痛点
  genJudge(name, '激痛点', getField(m, '激痛点'), M.激痛点, tags);
  // 5.14 判断题：红旗征
  genJudge(name, '红旗征', getField(m, '红旗征'), M.红旗, tags);
  // 5.15 判断题：治疗禁忌
  genJudge(name, '治疗禁忌', getField(m, '治疗禁忌'), M.禁忌, tags);
  // 5.16 判断题：康复训练
  genJudge(name, '康复训练', getField(m, '康复训练'), M.康复, tags);
}

// ---------- 6. 疾病题目生成 ----------

function genDiseaseQuestions(d) {
  const name = getField(d, '具体病症');
  if (!name) return;
  const part = getField(d, '部位');
  const tags = ['疾病'];
  if (part) tags.push(part);

  // 6.1 单选：部位
  if (part) {
    addSingle(
      `${name}主要发生于哪个部位？`,
      part,
      pickDistractors(D.部位, 3, part),
      tags
    );
  }

  // 6.2 单选：疾病分类
  const cls = getField(d, '疾病分类');
  if (cls) {
    addSingle(
      `${name}属于以下哪类疾病？`,
      cls,
      pickDistractors(D.分类, 3, cls),
      tags
    );
  }

  // 6.3 单选：ICD-10 编码
  const icd = getField(d, 'ICD-10编码');
  if (icd) {
    addSingle(
      `${name}的 ICD-10 编码是？`,
      icd,
      pickDistractors(D.ICD, 3, icd),
      tags
    );
  }

  // 6.4 单选：疾病分级
  const grade = getField(d, '疾病分级');
  if (grade) {
    addSingle(
      `${name}的疾病分级是？`,
      grade,
      pickDistractors(D.分级, 3, grade),
      tags
    );
  }

  // 6.5 判断题：红旗征/紧急预警
  genJudge(name, '红旗征/紧急预警', getField(d, '红旗征/紧急预警'), D.红旗, tags);
  // 6.6 判断题：典型症状与体征
  genJudge(name, '典型症状与体征', getField(d, '典型症状与体征'), D.症状, tags);
  // 6.7 判断题：影像学特征
  genJudge(name, '影像学特征', getField(d, '影像学特征'), D.影像, tags);
  // 6.8 判断题：鉴别诊断
  genJudge(name, '鉴别诊断', getField(d, '鉴别诊断'), D.鉴别, tags);
  // 6.9 判断题：治疗方案
  genJudge(name, '治疗方案', getField(d, '治疗方案'), D.治疗, tags);
  // 6.10 判断题：手术指征
  genJudge(name, '手术指征', getField(d, '手术指征'), D.手术, tags);
  // 6.11 判断题：药物治疗
  genJudge(name, '药物治疗', getField(d, '药物治疗'), D.药物, tags);
  // 6.12 判断题：注射治疗
  genJudge(name, '注射治疗', getField(d, '注射治疗'), D.注射, tags);
  // 6.13 判断题：康复训练方案
  genJudge(name, '康复训练方案', getField(d, '康复训练方案'), D.康复, tags);
  // 6.14 判断题：康复禁忌动作
  genJudge(name, '康复禁忌动作', getField(d, '康复禁忌动作'), D.禁忌, tags);
  // 6.15 判断题：预后转归
  genJudge(name, '预后转归', getField(d, '预后转归'), D.预后, tags);
  // 6.16 判断题：常见并发症
  genJudge(name, '常见并发症', getField(d, '常见并发症'), D.并发, tags);
  // 6.17 判断题：生活方式调整
  genJudge(name, '生活方式调整', getField(d, '生活方式调整'), D.生活, tags);
  // 6.18 判断题：辅助器具推荐
  genJudge(name, '辅助器具推荐', getField(d, '辅助器具推荐'), D.辅具, tags);
  // 6.19 判断题：预防措施
  genJudge(name, '预防措施', getField(d, '预防措施'), D.预防, tags);
}

// ---------- 7. 交叉题生成 ----------

function genCrossQuestions() {
  // 7.1 肌肉 → 关联疾病（跨疾病池取干扰项）
  for (const m of muscles) {
    const mName = getField(m, '肌肉名称');
    const relDz = getField(m, '关联骨科疾病');
    if (mName && relDz) {
      addSingle(
        `以下哪种疾病与 ${mName} 关系最密切？`,
        relDz,
        pickDistractors(D.名称, 3, relDz),
        ['肌肉', '交叉题', getField(m, '身体区域')].filter(Boolean)
      );
    }
  }

  // 7.2 疾病 → 同部位的肌肉（反向交叉）
  for (const d of diseases) {
    const dName = getField(d, '具体病症');
    const part = getField(d, '部位');
    if (!dName || !part) continue;
    // 在肌肉数据中找身体区域与该部位匹配的肌肉（取第一个）
    const samePartMuscles = muscles.filter(m =>
      getField(m, '身体区域') === part || part.includes(getField(m, '身体区域')) || getField(m, '身体区域').includes(part)
    );
    if (samePartMuscles.length === 0) continue;
    const target = samePartMuscles[0];
    const targetName = getField(target, '肌肉名称');
    if (!targetName) continue;
    addSingle(
      `${dName} 发生于 ${part}，以下哪个肌肉也位于该区域？`,
      targetName,
      pickDistractors(M.名称, 3, targetName),
      ['交叉题', '疾病', part]
    );
  }

  // 7.3 疾病 → 疾病分类的混淆（不同疾病、同类不同名）
  for (const d of diseases) {
    const dName = getField(d, '具体病症');
    const cls = getField(d, '疾病分类');
    if (!dName || !cls) continue;
    addSingle(
      `下列疾病中与 "${dName}" 属于同一分类（${cls}）的是？`,
      dName,
      pickDistractors(D.名称.filter(n => n !== dName), 3, dName),
      ['交叉题', '疾病', cls]
    );
  }
}

// ---------- 8. 主流程 ----------

// 生成肌肉题目
for (const m of muscles) genMuscleQuestions(m);

// 生成疾病题目
for (const d of diseases) genDiseaseQuestions(d);

// 生成交叉题
genCrossQuestions();

// 整体打乱顺序
const shuffled = shuffle(allQuestions);

// ---------- 9. 输出 questions.js ----------

const outputPath = path.join(__dirname, 'questions.js');
const header = `// ============================================================
// 肌骨康复速查 - 自动生成的题库
// 由 gen_questions.js 生成，请勿手动编辑
// 生成时间：${new Date().toISOString()}
// 题目总数：${shuffled.length}
// ============================================================

`;

const body = `window.questionBank = ${JSON.stringify({ all: shuffled }, null, 2)};\n`;

fs.writeFileSync(outputPath, header + body, 'utf8');

const singleCount = shuffled.filter(q => q.type === 'single').length;
const judgeCount = shuffled.filter(q => q.type === 'judge').length;

console.log(`[完成] 共生成 ${shuffled.length} 道题，已写入 ${outputPath}`);
console.log(`  - 单选题：${singleCount} 道`);
console.log(`  - 判断题：${judgeCount} 道`);
