# 核心模块详细说明

## 1. 评估量表模块

### 1.1 scales.js - 核心量表

包含20+种常用临床评估量表，分为以下类别：

| 类别 | 量表名称 | ID |
|-----|---------|-----|
| **疼痛评估** | VAS视觉模拟疼痛评分 | `vas` |
| | NRS数字疼痛评分量表 | `nrs` |
| | P4疼痛强度量表 | `p4` |
| **颈椎功能** | NDI颈椎功能障碍指数 | `ndi` |
| | JOA颈椎评分 | `joa-cervical` |
| **腰椎功能** | ODI Oswestry功能障碍指数 | `odi` |
| | JOA腰椎评分 | `joa-lumbar` |
| | Roland-Morris功能障碍问卷 | `roland-morris` |
| **肩关节** | UCLA肩袖评分 | `ucla-shoulder` |
| | Constant-Murley肩关节评分 | `constant-murley` |
| **上肢功能** | DASH上肢功能障碍评定 | `dash` |
| | QuickDASH简短上肢功能评分 | `quickdash` |
| **腕关节** | Cooney腕关节评分 | `cooney-wrist` |
| **肘关节** | Mayo肘关节功能评分 | `mayo-elbow` |
| **髋关节** | HHS髋关节评分 | `hhs` |
| **膝关节** | Lysholm膝关节评分 | `lysholm` |
| | Oxford膝关节评分 | `oxford-knee` |
| | IKDC膝关节评分 | `ikdc` |
| **足踝** | AOFAS踝-后足评分 | `aofas` |
| | FAAM足踝能力评分 | `faam` |
| **功能评估** | PSFS患者特异性功能量表 | `psfs` |
| | Barthel指数 | `barthel` |

#### 量表数据结构

```javascript
{
  id: 'vas',                    // 唯一标识符
  name: 'VAS 视觉模拟疼痛评分',   // 量表全称
  shortName: 'VAS',             // 简称
  category: 'pain',             // 分类
  description: '描述',           // 量表描述
  reliability: '信度信息',       // 信度数据
  reference: '参考文献',         // 文献来源
  totalScore: 10,               // 总分
  type: 'slider',               // 输入类型：slider/number/choice/yesno
  question: '问题',             // 单题量表的问题
  questions: [...],             // 多题量表的问题列表
  interpretation: [...],        // 评分解释区间
  calculate: function(answers) { // 评分计算函数
    return { score: ..., maxScore: ... };
  }
}
```

#### 输入类型说明

| 类型 | 说明 | 适用场景 |
|-----|------|---------|
| `slider` | 滑动条输入 | VAS疼痛评分 |
| `number` | 数字输入 | NRS数字评分 |
| `choice` | 选项选择 | 多选项量表 |
| `yesno` | 是/否选择 | Roland-Morris问卷 |

---

### 1.2 scales-extra.js - 扩展量表

包含认知评估、吞咽评估、心肺评估等专项量表：

- **认知评估**：MMSE简易精神状态、MoCA认知评估、AD8早期痴呆筛查
- **吞咽评估**：洼田饮水试验、GUSS吞咽功能评估、FOIS功能经口摄入分级
- **平衡评估**：Berg平衡量表、TUG起立行走测试、Fugl-Meyer平衡评估
- **心肺评估**：6分钟步行试验、BODE指数、CAT慢阻肺评估测试

---

### 1.3 scales-pro.js - 专业量表

包含进阶专业评估工具：

- **神经功能**：Fugl-Meyer运动功能评估、ASIA脊髓损伤评定、UPDRS帕金森评分
- **肌肉力量**：徒手肌力评定MMT、Oxford肌力分级
- **痉挛评估**：改良Ashworth痉挛量表、Tardieu量表
- **言语功能**：Frenchay构音障碍评估

---

## 2. 临床工具模块 (clinical-tools.js)

### 2.1 模块概述

提供7大类临床参考工具，共计25+项评估方法：

| 类别 | 工具名称 | ID |
|-----|---------|-----|
| **关节测角** | 肩关节活动度 | `rom_shoulder` |
| | 肘关节活动度 | `rom_elbow` |
| | 腕关节活动度 | `rom_wrist` |
| | 髋关节活动度 | `rom_hip` |
| | 膝关节活动度 | `rom_knee` |
| | 踝关节活动度 | `rom_ankle` |
| | 脊柱活动度 | `rom_spine` |
| **肌力评估** | 徒手肌力测试MMT | `mmt` |
| | Oxford肌力分级 | `oxford` |
| | Daniels肌力测试标准 | `daniels` |
| | 肌力分级速查 | `mmt_grade` |
| **痉挛评估** | 改良Ashworth痉挛量表 | `mas_detail` |
| | Tardieu量表 | `tardieu` |
| | Penn痉挛频率量表 | `penn` |
| **步态分析** | 正常步态参数 | `gait_normal` |
| | 常见异常步态 | `gait_abnormal` |
| | 功能性步行分级FAC | `fac` |
| **感觉评估** | 轻触觉评估 | `sensory_light` |
| | 痛觉评估 | `sensory_pain` |
| **反射检查** | 深反射(腱反射) | `reflex_deep` |
| | 浅反射 | `reflex_superficial` |
| **其他工具** | 生命体征参考值 | `vitals` |
| | BMI计算器 | `bmi` |
| | 靶心率计算器 | `target_hr` |
| | 牵伸时间建议 | `stretch_duration` |

### 2.2 关节活动度数据结构

```javascript
{
  id: 'rom_shoulder',
  name: '肩关节活动度',
  category: '关节测角',
  type: 'reference',
  content: {
    joint: '肩关节',
    position: '测量体位',
    goniometer: '量角器放置方法',
    movements: [
      { name: '前屈', normal: '0-180°', functional: '0-120°', notes: '肌肉名称' }
    ]
  }
}
```

### 2.3 计算器类型数据结构

```javascript
{
  id: 'bmi',
  name: 'BMI计算器',
  category: '体格评估',
  type: 'calculator',
  content: {
    formula: 'BMI = 体重(kg) / [身高(m)]²',
    inputs: [
      { name: 'weight', label: '体重', unit: 'kg', type: 'number', min: 20, max: 300 }
    ],
    calculate: function(weight, height) {
      return { bmi: ..., height: ..., weight: ... };
    },
    interpretation: [...]
  }
}
```

---

## 3. 疾病知识库模块 (knowledge-base.js)

### 3.1 模块概述

包含两大核心数据结构：

1. **疾病-评定量表映射** (`diseaseScaleMap`)
2. **临床指南核心推荐摘要** (`clinicalGuidelines`)

### 3.2 疾病-量表映射

覆盖25+种常见疾病，每种疾病分为三级推荐：

| 推荐级别 | 标记 | 说明 |
|---------|------|------|
| core | 🔴 | 核心评定量表，建议所有患者常规使用 |
| recommended | 🟡 | 推荐评定量表，根据病情和阶段选用 |
| optional | 🔵 | 可选评定量表，用于特殊场景或深入研究 |

#### 支持的疾病列表

- 脑卒中、脊髓损伤、脑外伤、帕金森病、多发性硬化
- 脑瘫（儿童）、周围神经损伤、面神经麻痹
- 膝关节骨关节炎、腰椎间盘突出、肩袖损伤
- 髋关节置换术后、颈椎病、骨折后康复
- COPD、冠心病/心绞痛、心力衰竭、肺康复（通用）
- 盆底功能障碍、产后盆底康复、老年综合评估
- 跌倒高风险、认知障碍/痴呆、儿童发育迟缓、ADHD/注意力缺陷

#### 数据结构

```javascript
const diseaseScaleMap = {
  '脑卒中': {
    core: ['Fugl-Meyer上肢', 'Fugl-Meyer下肢', 'Berg平衡量表', 'Barthel指数', '改良Ashworth量表'],
    recommended: ['TUG起立行走', 'MMSE简易精神状态', '洼田饮水试验', 'FIM功能独立性', 'Brunnstrom分期'],
    optional: ['MoCA认知评估', 'HAMD抑郁量表', 'Frenchay构音障碍', '功能性步行分级']
  }
};
```

### 3.3 临床指南

包含20+份最新临床指南推荐摘要，按证据等级标注：

| 证据等级 | 说明 |
|---------|------|
| A | 高质量证据，强烈推荐（多项RCT或Meta分析支持） |
| B | 中等质量证据，推荐（单项RCT或高质量观察性研究） |
| C | 低质量证据，可选（专家共识或病例报告） |

#### 指南分类

| 分类 | 指南名称 |
|-----|---------|
| 神经 | 脑卒中康复指南、脊髓损伤康复临床指南、创伤性脑损伤康复指南 |
| | 帕金森病康复指南、多发性硬化康复指南、面神经麻痹康复指南 |
| | 吞咽障碍康复指南、儿童脑性瘫痪康复指南、儿童发育迟缓康复指南 |
| 骨科 | 膝关节骨关节炎康复指南、腰椎间盘突出症康复指南、肩袖损伤康复指南 |
| | 全髋关节置换围手术期康复指南、颈椎病康复指南、骨折后康复指南 |
| | 骨质疏松症康复指南 |
| 心肺 | COPD肺康复临床实践指南、冠心病心脏康复指南、心力衰竭康复指南 |
| 盆底 | 盆底功能障碍康复专家共识、产后盆底康复指南 |
| 老年 | 老年综合评估专家共识 |

---

## 4. 康复方案模块

### 4.1 rehab-protocols.js - 循证康复方案

包含物理治疗（PT）、作业治疗（OT）、言语治疗（ST）三大类方案：

#### 物理治疗方案

| 方案名称 | ID | 循证来源 |
|---------|-----|---------|
| 颈椎手法治疗（CMT）康复方案 | `pt-cmt` | Ottawa Panel循证指南 |
| ACL前交叉韧带重建术后康复方案 | `pt-acl` | Massachusetts General Brigham指南 |
| 腰椎间盘突出症康复方案 | `pt-ldh` | ACP临床实践指南 |
| 膝关节骨关节炎康复方案 | `pt-koa` | OARSI指南 |
| 肩袖损伤术后康复方案 | `pt-rotator-cuff` | ASES指南 |
| 脑卒中肢体功能障碍康复方案 | `pt-stroke` | AHA/ASA指南 |
| 脊髓损伤康复方案 | `pt-sci` | ASIA指南 |
| 骨折后康复方案 | `pt-fracture` | AO/OTA指南 |

#### 作业治疗方案

| 方案名称 | ID | 适用场景 |
|---------|-----|---------|
| 日常生活活动能力训练方案 | `ot-adl` | 脑卒中、脊髓损伤、骨折后 |
| 上肢精细运动训练方案 | `ot-fine-motor` | 脑卒中、周围神经损伤 |
| 认知功能训练方案 | `ot-cognition` | 脑外伤、认知障碍 |
| 职业康复训练方案 | `ot-vocational` | 重返工作岗位 |

#### 言语治疗方案

| 方案名称 | ID | 适用场景 |
|---------|-----|---------|
| 吞咽障碍康复方案 | `st-dysphagia` | 脑卒中、脑外伤吞咽障碍 |
| 构音障碍康复方案 | `st-dysarthria` | 脑卒中、帕金森病 |
| 失语症康复方案 | `st-aphasia` | 脑卒中失语 |

#### 康复方案数据结构

```javascript
{
  id: 'pt-cmt',
  category: 'PT',
  categoryName: '物理治疗',
  name: '颈椎手法治疗（CMT）康复方案',
  icon: 'neck',
  evidence: 'Ottawa Panel循证指南',
  description: '方案描述',
  stages: [
    {
      name: '急性期（病程<6周）',
      goal: '缓解疼痛、预防慢性化',
      duration: '2-3次/周，单次30-45分钟',
      exercises: ['等长收缩训练', '肩部唤醒', '配合冰敷'],
      cautions: '不做关节活动，疼痛加剧立即停止'
    }
  ]
}
```

### 4.2 protocols-pro.js - 专业康复方案

包含进阶康复方案，如：

- 运动损伤专项康复（足球、篮球、羽毛球等）
- 术后快速康复（ERAS）方案
- 神经重症康复方案
- 心肺康复专项方案

---

## 5. 疼痛管理模块 (pain-protocols.js)

### 5.1 模块概述

包含常见肌骨疼痛的分期治疗方案，按身体部位分类：

| 部位 | 疼痛类型 | ID |
|-----|---------|-----|
| **踝足部** | 足底筋膜炎 | `pain-plantar-fasciitis` |
| | 跟腱炎 | `pain-achilles-tendinitis` |
| | 踝关节韧带扭伤 | `pain-ankle-sprain` |
| **膝部** | 髌股关节疼痛综合征 | `pain-patellofemoral` |
| | 内侧副韧带损伤 | `pain-mcl-sprain` |
| | 鹅足腱炎 | `pain-goosefoot-tendinitis` |
| **髋部** | 髋关节撞击综合征 | `pain-fai` |
| | 臀中肌综合征 | `pain-gluteus-medius` |
| | 髂腰肌肌腱炎 | `pain-iliopsoas-tendinitis` |
| **肩肘部** | 网球肘（肱骨外上髁炎） | `pain-tennis-elbow` |
| | 高尔夫球肘（肱骨内上髁炎） | `pain-golfers-elbow` |
| | 肩关节撞击综合征 | `pain-shoulder-impingement` |
| **腕手部** | 腕管综合征 | `pain-carpal-tunnel` |
| | 腱鞘炎 | `pain-tenosynovitis` |
| **腰背部** | 腰肌劳损 | `pain-lumbar-strain` |
| | 肌筋膜炎 | `pain-myofascial-pain` |

### 5.2 疼痛方案数据结构

```javascript
{
  id: 'pain-plantar-fasciitis',
  category: '疼痛',
  categoryName: '疼痛治疗',
  name: '足底筋膜炎',
  icon: 'ankle',
  causes: ['超重/BMI高', '足弓塌陷', '小腿后侧肌肉过紧'],
  symptoms: ['足底内侧足跟痛', '长时间不活动后的第一步痛'],
  stages: [
    {
      name: '急性期',
      goal: '减轻炎症和疼痛、减少足底筋膜负荷',
      duration: '1-2周',
      exercises: ['减少训练量', '冰敷足底', '滚冰矿泉水瓶'],
      cautions: '避免长时间站立和负重活动'
    }
  ]
}
```

---

## 6. 肌肉数据模块 (data.js)

### 6.1 模块概述

包含全身主要肌肉的详细信息，共覆盖头颈部、上肢、躯干、下肢四大区域。

### 6.2 肌肉数据结构

```javascript
{
  "序号": "1",
  "身体区域": "头颈部",
  "肌肉名称": "胸锁乳突肌",
  "主要功能": "头颈屈曲、旋转",
  "常见损伤": "斜颈、肌肉痉挛",
  "评估方法": "触诊、活动度",
  "诊断标准": "局部压痛、活动受限",
  "急性期处理": "休息、冰敷、NSAIDs",
  "康复训练": "拉伸、力量训练",
  "扳机点": "胸骨和锁骨附着点",
  "治疗禁忌": "颈椎骨折、肿瘤",
  "红旗征": "进行性神经症状、发热",
  "复查标准": "无痛全范围活动",
  "循证等级": "B级",
  "关联骨科疾病": "斜颈",
  "疾病分类": "颈部畸形类",
  "疾病分级": "C级（基础）",
  "典型症状与体征": "详细描述",
  "影像学特征": "详细描述",
  "鉴别诊断": "详细描述",
  "常用评估量表": "详细描述",
  "分期/严重度分级": "详细描述",
  "治疗方案": "详细描述",
  "手术指征": "详细描述",
  "药物治疗": "详细描述",
  "注射治疗": "详细描述",
  "康复训练方案": "详细描述"
}
```

### 6.3 数据字段说明

| 字段 | 说明 |
|-----|------|
| 身体区域 | 肌肉所在部位（头颈部、上肢、躯干、下肢） |
| 主要功能 | 肌肉的生理功能 |
| 常见损伤 | 该肌肉易发生的损伤类型 |
| 评估方法 | 临床评估手段 |
| 诊断标准 | 损伤的诊断依据 |
| 急性期处理 | 损伤早期的处理措施 |
| 康复训练 | 康复训练方法 |
| 扳机点 | 肌筋膜疼痛触发点位置 |
| 治疗禁忌 | 治疗禁忌证 |
| 红旗征 | 需要紧急处理的警示症状 |
| 复查标准 | 康复效果评估标准 |
| 循证等级 | 治疗方案的证据等级 |
| 关联骨科疾病 | 相关疾病 |
| 典型症状与体征 | 详细的症状描述 |
| 影像学特征 | 影像学检查建议 |
| 鉴别诊断 | 鉴别诊断要点 |
| 常用评估量表 | 推荐使用的评估工具 |
| 分期/严重度分级 | 疾病分期和严重程度分级 |
| 治疗方案 | 详细治疗方案 |
| 手术指征 | 手术治疗的指征 |
| 药物治疗 | 药物治疗建议 |
| 注射治疗 | 注射治疗建议 |
| 康复训练方案 | 详细康复训练计划 |

---

## 7. 模块依赖关系

```
index.html (入口)
    │
    ├── scales.js ───────────┐
    ├── scales-extra.js ─────┤→ 评估量表展示
    └── scales-pro.js ───────┘
    │
    ├── clinical-tools.js ───→ 临床工具展示
    │
    ├── knowledge-base.js ───→ 知识库展示
    │       │
    │       └── scales.js (引用量表名称)
    │
    ├── rehab-protocols.js ──→ 康复方案展示
    │       │
    │       └── knowledge-base.js (引用指南)
    │
    ├── protocols-pro.js ────→ 专业方案展示
    │
    ├── pain-protocols.js ───→ 疼痛方案展示
    │
    └── data.js ─────────────→ 肌肉数据展示
            │
            └── knowledge-base.js (引用疾病信息)
```

---

## 8. 文档导航

- [项目概述](PROJECT_OVERVIEW.md)
- [数据结构与关键函数](DATA_STRUCTURES.md)
- [构建与运行指南](BUILD_GUIDE.md)