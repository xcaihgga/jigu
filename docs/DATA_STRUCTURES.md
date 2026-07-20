# 数据结构与关键函数

## 1. 全局数据变量

### 1.1 评估量表

```javascript
// scales.js
const assessmentScales = [
  {
    id: string,           // 唯一标识符
    name: string,         // 量表全称
    shortName: string,    // 量表简称
    category: string,     // 分类：pain/neck/back/upper/wrist/lower/ankle/function
    description: string,  // 量表描述
    reliability: string,  // 信度信息
    reference: string,    // 参考文献
    totalScore: number,   // 总分
    type: string,         // 输入类型：slider/number/choice/yesno
    // 单题量表
    question: string,     // 问题文本
    labels: [string, string],  // 滑动条标签
    min: number,          // 数字输入最小值
    max: number,          // 数字输入最大值
    // 多题量表
    questions: [{
      text: string,       // 问题文本
      options: [string],  // 选项列表
      scores: [number]    // 对应分值
    }],
    // yesno类型量表
    questions: [string],  // yes/no问题列表
    // 自定义问题量表
    customQuestions: boolean,
    questionCount: number,
    instruction: string,
    // 评分解释
    interpretation: [{
      min: number,
      max: number,
      level: string,      // 等级
      color: string,      // 颜色：success/warning/danger
      desc: string        // 解释描述
    }],
    // 评分计算
    calculate: function(answers, customActivities?) {
      return { score: number, maxScore: number, detail?: string };
    }
  }
];
```

### 1.2 临床工具

```javascript
// clinical-tools.js
const clinicalTools = [
  {
    id: string,           // 唯一标识符
    name: string,         // 工具名称
    category: string,     // 分类：关节测角/肌力评估/痉挛评估/步态分析/感觉评估/反射检查/生命体征/体格评估/运动处方
    description: string,  // 描述
    type: string,         // 类型：reference/calculator
    content: { ... }      // 具体内容
  }
];
```

### 1.3 疾病知识库

```javascript
// knowledge-base.js
const diseaseScaleMap = {
  '疾病名称': {
    core: [string],       // 核心量表名称列表
    recommended: [string],// 推荐量表名称列表
    optional: [string]    // 可选量表名称列表
  }
};

const clinicalGuidelines = [
  {
    id: string,           // 唯一标识符
    title: string,        // 指南标题
    category: string,     // 分类：神经/骨科/心肺/盆底/老年/儿童
    source: string,       // 发布机构
    year: string,         // 发布年份
    recommendations: [{
      text: string,       // 推荐内容
      level: string       // 证据等级：A/B/C
    }],
    relatedScales: [string] // 相关量表名称列表
  }
];
```

### 1.4 康复方案

```javascript
// rehab-protocols.js
const rehabProtocols = [
  {
    id: string,           // 唯一标识符
    category: string,     // 分类：PT/OT/ST
    categoryName: string, // 分类中文名称
    name: string,         // 方案名称
    icon: string,         // 图标标识
    evidence: string,     // 循证来源
    description: string,  // 方案描述
    stages: [{
      name: string,       // 阶段名称
      goal: string,       // 阶段目标
      duration: string,   // 持续时间
      exercises: [string],// 训练内容列表
      cautions: string,   // 注意事项
      criteria?: { ... }  // 进阶标准（部分方案）
    }]
  }
];
```

### 1.5 疼痛方案

```javascript
// pain-protocols.js
const painProtocols = [
  {
    id: string,           // 唯一标识符
    category: string,     // 分类：疼痛
    categoryName: string, // 分类中文名称
    name: string,         // 疼痛类型名称
    icon: string,         // 图标标识
    causes: [string],     // 病因列表
    symptoms: [string],   // 症状列表
    stages: [{
      name: string,       // 阶段名称
      goal: string,       // 阶段目标
      duration: string,   // 持续时间
      exercises: [string],// 处理措施列表
      cautions: string    // 注意事项
    }]
  }
];
```

### 1.6 肌肉数据

```javascript
// data.js
const muscles = [
  {
    "序号": string,
    "身体区域": string,
    "肌肉名称": string,
    "主要功能": string,
    "常见损伤": string,
    "评估方法": string,
    "诊断标准": string,
    "急性期处理": string,
    "康复训练": string,
    "扳机点": string,
    "治疗禁忌": string,
    "红旗征": string,
    "复查标准": string,
    "循证等级": string,
    "关联骨科疾病": string,
    "疾病分类": string,
    "疾病分级": string,
    "典型症状与体征": string,
    "影像学特征": string,
    "鉴别诊断": string,
    "常用评估量表": string,
    "分期/严重度分级": string,
    "治疗方案": string,
    "手术指征": string,
    "药物治疗": string,
    "注射治疗": string,
    "康复训练方案": string
  }
];
```

---

## 2. 关键函数

### 2.1 量表评分计算函数

所有评估量表均实现 `calculate()` 方法，统一评分逻辑：

#### 示例1：VAS视觉模拟疼痛评分

```javascript
calculate: function(answers) {
  return { score: answers[0] || 0, maxScore: 10 };
}
```

#### 示例2：NDI颈椎功能障碍指数（多题量表）

```javascript
calculate: function(answers) {
  let total = 0;
  answers.forEach(a => { total += (a || 0); });
  return { score: total, maxScore: 50 };
}
```

#### 示例3：DASH上肢功能障碍评定（特殊计算公式）

```javascript
calculate: function(answers) {
  let sum = 0;
  answers.forEach(a => { sum += (a || 0); });
  const score = ((sum - 30) / 1.2).toFixed(1);
  return { score: parseFloat(score), maxScore: 100 };
}
```

#### 示例4：PSFS患者特异性功能量表（自定义问题）

```javascript
calculate: function(answers, customActivities) {
  let total = 0;
  let count = 0;
  answers.forEach(a => { 
    if (a !== undefined && a !== null) { 
      total += parseFloat(a) || 0; 
      count++; 
    } 
  });
  const avg = count > 0 ? (total / count).toFixed(1) : 0;
  return { score: parseFloat(avg), maxScore: 10, detail: '平均分' };
}
```

#### 示例5：Roland-Morris功能障碍问卷（yes/no类型）

```javascript
calculate: function(answers) {
  let total = 0;
  answers.forEach(a => { if (a) total++; });
  return { score: total, maxScore: 24 };
}
```

---

### 2.2 临床工具计算器函数

#### BMI计算器

```javascript
calculate: function(weight, height) {
  if (!weight || !height) return null;
  const h = height / 100;
  const bmi = weight / (h * h);
  return {
    bmi: parseFloat(bmi.toFixed(1)),
    height: height,
    weight: weight
  };
}
```

#### 靶心率计算器

```javascript
calculate: function(age, restingHr) {
  if (!age) return null;
  const maxHr = 220 - age;
  const result = {
    maxHr: maxHr,
    moderate: { min: Math.round(maxHr * 0.60), max: Math.round(maxHr * 0.70) },
    vigorous: { min: Math.round(maxHr * 0.70), max: Math.round(maxHr * 0.85) },
    low: { min: Math.round(maxHr * 0.50), max: Math.round(maxHr * 0.60) }
  };
  if (restingHr) {
    result.karvonen = {
      moderate: { 
        min: Math.round((maxHr - restingHr) * 0.40 + restingHr), 
        max: Math.round((maxHr - restingHr) * 0.59 + restingHr) 
      },
      vigorous: { 
        min: Math.round((maxHr - restingHr) * 0.60 + restingHr), 
        max: Math.round((maxHr - restingHr) * 0.84 + restingHr) 
      }
    };
  }
  return result;
}
```

---

## 3. 数据分类体系

### 3.1 量表分类

| 分类代码 | 分类名称 | 说明 |
|---------|---------|------|
| `pain` | 疼痛评估 | 疼痛强度、频率、影响评估 |
| `neck` | 颈椎功能 | 颈椎相关评估量表 |
| `back` | 腰椎功能 | 腰椎相关评估量表 |
| `upper` | 上肢功能 | 肩、肘等上肢关节评估 |
| `wrist` | 腕关节 | 腕关节评估量表 |
| `lower` | 下肢功能 | 髋、膝等下肢关节评估 |
| `ankle` | 足踝功能 | 足踝评估量表 |
| `function` | 功能评估 | 日常生活能力、功能独立性 |

### 3.2 临床工具分类

| 分类名称 | 说明 |
|---------|------|
| 关节测角 | 关节活动度参考值 |
| 肌力评估 | 徒手肌力测试标准 |
| 痉挛评估 | 痉挛程度评估工具 |
| 步态分析 | 步态参数与异常步态 |
| 感觉评估 | 感觉功能检查方法 |
| 反射检查 | 深反射与浅反射 |
| 生命体征 | 生命体征参考值 |
| 体格评估 | BMI等体格测量 |
| 运动处方 | 靶心率、牵伸建议 |

### 3.3 康复方案分类

| 分类代码 | 分类名称 | 说明 |
|---------|---------|------|
| `PT` | 物理治疗 | 运动疗法、手法治疗 |
| `OT` | 作业治疗 | 日常生活活动、职业康复 |
| `ST` | 言语治疗 | 吞咽、构音、失语症康复 |

---

## 4. 评分解释颜色体系

| 颜色代码 | 含义 | 适用场景 |
|---------|------|---------|
| `success` | 正常/良好 | 功能正常、轻度障碍 |
| `warning` | 警告/中等 | 中度障碍、需要关注 |
| `danger` | 危险/严重 | 重度障碍、需紧急处理 |

---

## 5. 循证证据等级

| 等级 | 说明 | 推荐强度 |
|-----|------|---------|
| A | 高质量证据（多项RCT或Meta分析支持） | 强烈推荐 |
| B | 中等质量证据（单项RCT或高质量观察性研究） | 推荐 |
| C | 低质量证据（专家共识或病例报告） | 可选 |

---

## 6. 数据扩展指南

### 6.1 添加新评估量表

```javascript
// 在 scales.js 中添加
assessmentScales.push({
  id: 'new-scale-id',
  name: '新量表名称',
  shortName: '简称',
  category: '分类',
  description: '描述',
  reliability: '信度信息',
  reference: '参考文献',
  totalScore: 100,
  type: 'choice',  // slider/number/choice/yesno
  questions: [
    { text: '问题1', options: ['选项1', '选项2'], scores: [0, 1] }
  ],
  interpretation: [
    { min: 0, max: 50, level: '等级1', color: 'success', desc: '描述' }
  ],
  calculate: function(answers) {
    let total = 0;
    answers.forEach(a => { total += (a || 0); });
    return { score: total, maxScore: 100 };
  }
});
```

### 6.2 添加新临床工具

```javascript
// 在 clinical-tools.js 中添加
clinicalTools.push({
  id: 'new-tool-id',
  name: '新工具名称',
  category: '分类',
  description: '描述',
  type: 'reference',  // reference/calculator
  content: {
    // 根据类型添加相应内容
  }
});
```

### 6.3 添加新疾病映射

```javascript
// 在 knowledge-base.js 中添加
diseaseScaleMap['新疾病名称'] = {
  core: ['核心量表1', '核心量表2'],
  recommended: ['推荐量表1'],
  optional: ['可选量表1']
};
```

### 6.4 添加新临床指南

```javascript
// 在 knowledge-base.js 中添加
clinicalGuidelines.push({
  id: 'new-guideline-id',
  title: '新指南标题',
  category: '神经',  // 神经/骨科/心肺/盆底/老年/儿童
  source: '发布机构',
  year: '2024',
  recommendations: [
    { text: '推荐内容', level: 'A' }
  ],
  relatedScales: ['相关量表']
});
```

### 6.5 添加新康复方案

```javascript
// 在 rehab-protocols.js 中添加
rehabProtocols.push({
  id: 'new-protocol-id',
  category: 'PT',  // PT/OT/ST
  categoryName: '物理治疗',
  name: '新方案名称',
  icon: 'knee',  // 图标标识
  evidence: '循证来源',
  description: '描述',
  stages: [
    {
      name: '急性期',
      goal: '目标',
      duration: '时长',
      exercises: ['训练1', '训练2'],
      cautions: '注意事项'
    }
  ]
});
```

---

## 7. 文档导航

- [项目概述](PROJECT_OVERVIEW.md)
- [核心模块详细说明](MODULES_DETAILED.md)
- [构建与运行指南](BUILD_GUIDE.md)