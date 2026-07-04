// 补充康复评估量表数据（scalesExtra）
// 涵盖平衡与协调、运动功能、肌力与痉挛、关节活动度、日常生活、疼痛评估、认知与心理、吞咽与言语共55个量表
// 注：以下量表均为公共领域的医学标准量表，数据结构采用 questions[].options[].score + scoring.levels 形式
const scalesExtra = [

  // ===================== 平衡与协调（8个） =====================

  {
    id: 'berg-balance',
    name: 'Berg平衡量表',
    category: '平衡',
    description: '评估静动态平衡能力，是跌倒风险预测的金标准',
    instructions: '14个测试项目，每项0-4分，总分56分。被检者需在无支撑下完成各项任务，根据完成质量评分',
    questions: [
      { text: '1. 从坐到站', type: 'single', options: [
        { text: '不需要帮助独立完成', score: 4 },
        { text: '需手辅助独立完成', score: 3 },
        { text: '需数次尝试且用手辅助', score: 2 },
        { text: '需最小量帮助', score: 1 },
        { text: '需中/大量帮助', score: 0 }
      ]},
      { text: '2. 无支撑站立', type: 'single', options: [
        { text: '可安全站2分钟', score: 4 },
        { text: '可在监护下站2分钟', score: 3 },
        { text: '可站立30秒', score: 2 },
        { text: '需数次尝试才能站30秒', score: 1 },
        { text: '不能独立站30秒', score: 0 }
      ]},
      { text: '3. 无支撑坐位(双脚着地)', type: 'single', options: [
        { text: '可安全坐2分钟', score: 4 },
        { text: '可在监护下坐2分钟', score: 3 },
        { text: '可坐30秒', score: 2 },
        { text: '可坐10秒', score: 1 },
        { text: '不能坐10秒', score: 0 }
      ]},
      { text: '4. 从站到坐', type: 'single', options: [
        { text: '独立完成且稳定', score: 4 },
        { text: '需手辅助独立完成', score: 3 },
        { text: '坐下时需手控制', score: 2 },
        { text: '需最小量帮助', score: 1 },
        { text: '需中/大量帮助', score: 0 }
      ]},
      { text: '5. 转移(床-椅)', type: 'single', options: [
        { text: '独立安全转移', score: 4 },
        { text: '需手辅助独立完成', score: 3 },
        { text: '需口头提示或监护', score: 2 },
        { text: '需一人帮助', score: 1 },
        { text: '需两人帮助', score: 0 }
      ]},
      { text: '6. 闭目站立', type: 'single', options: [
        { text: '可安全站立10秒', score: 4 },
        { text: '可在监护下站10秒', score: 3 },
        { text: '可站3秒', score: 2 },
        { text: '不能闭眼3秒但站稳', score: 1 },
        { text: '需帮助防跌倒', score: 0 }
      ]},
      { text: '7. 双脚并拢站立', type: 'single', options: [
        { text: '独立安全站10秒', score: 4 },
        { text: '可在监护下站10秒', score: 3 },
        { text: '可双脚并拢站3秒', score: 2 },
        { text: '需帮助但脚可并拢', score: 1 },
        { text: '脚不能并拢且需帮助', score: 0 }
      ]},
      { text: '8. 上肢前伸', type: 'single', options: [
        { text: '可前伸25cm以上', score: 4 },
        { text: '可前伸12cm以上', score: 3 },
        { text: '可前伸5cm以上', score: 2 },
        { text: '前伸需监护', score: 1 },
        { text: '前伸时失去平衡', score: 0 }
      ]},
      { text: '9. 从地面捡起物品', type: 'single', options: [
        { text: '可独立安全捡起', score: 4 },
        { text: '可在监护下捡起', score: 3 },
        { text: '伸手差2-3cm但保持平衡', score: 2 },
        { text: '伸手需监护', score: 1 },
        { text: '不能尝试或需帮助', score: 0 }
      ]},
      { text: '10. 转身向后看', type: 'single', options: [
        { text: '左右侧都可且重心转移好', score: 4 },
        { text: '一侧可另一侧差', score: 3 },
        { text: '只能侧转但保持平衡', score: 2 },
        { text: '转身需监护', score: 1 },
        { text: '转身需帮助', score: 0 }
      ]},
      { text: '11. 转身360°', type: 'single', options: [
        { text: '独立安全在4秒内完成', score: 4 },
        { text: '独立安全但超过4秒', score: 3 },
        { text: '可独立但需监护', score: 2 },
        { text: '需最小量帮助', score: 1 },
        { text: '需大量帮助', score: 0 }
      ]},
      { text: '12. 无支撑双脚交替踏台阶', type: 'single', options: [
        { text: '独立安全每脚放4次', score: 4 },
        { text: '独立放置2次', score: 3 },
        { text: '可独立放1次', score: 2 },
        { text: '需监护或最小帮助', score: 1 },
        { text: '需帮助防跌倒', score: 0 }
      ]},
      { text: '13. 一脚在前站立(串联步态)', type: 'single', options: [
        { text: '独立站稳30秒', score: 4 },
        { text: '可在监护下站30秒', score: 3 },
        { text: '可站10秒', score: 2 },
        { text: '可迈一小步并保持3秒', score: 1 },
        { text: '迈步或站立时失去平衡', score: 0 }
      ]},
      { text: '14. 单腿站立', type: 'single', options: [
        { text: '可独立站10秒以上', score: 4 },
        { text: '可独立站5-10秒', score: 3 },
        { text: '可独立站3-5秒', score: 2 },
        { text: '尝试抬腿但不能站3秒但保持站立', score: 1 },
        { text: '不能尝试或需帮助', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 20, level: '高跌倒风险', advice: '平衡功能严重受损，需辅助行走及跌倒预防干预' },
        { min: 21, max: 40, level: '中跌倒风险', advice: '需系统平衡训练，加强跌倒预防' },
        { min: 41, max: 44, level: '临界平衡', advice: '有一定平衡障碍，建议平衡训练' },
        { min: 45, max: 56, level: '低跌倒风险', advice: '平衡功能良好，可独立安全活动' }
      ]
    }
  },

  {
    id: 'tug',
    name: 'TUG起立行走测试',
    category: '平衡',
    description: 'Timed Up and Go测试，评估起立、行走、转身、坐下的整体活动能力与跌倒风险',
    instructions: '被检者坐于标准椅(座高46cm)，听到开始指令后站起，以平常速度向前走3米，转身走回坐下。记录完成时间',
    questions: [
      { text: '完成3米起立行走并返回坐下的时间', type: 'single', options: [
        { text: '≤10秒(正常)', score: 4 },
        { text: '10-13秒(正常下限)', score: 3 },
        { text: '14-20秒(中度跌倒风险)', score: 2 },
        { text: '20-30秒(高度跌倒风险)', score: 1 },
        { text: '>30秒或不能独立完成(极高风险)', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '极高度跌倒风险', advice: '活动能力严重受限，需辅助行走及全面跌倒预防' },
        { min: 1, max: 1, level: '高度跌倒风险', advice: '需平衡与步行训练，建议辅助器具' },
        { min: 2, max: 2, level: '中度跌倒风险', advice: '建议平衡训练及跌倒预防宣教' },
        { min: 3, max: 3, level: '正常下限', advice: '基本可独立活动，注意维持' },
        { min: 4, max: 4, level: '正常', advice: '活动能力正常' }
      ]
    }
  },

  {
    id: 'frt',
    name: '功能性伸展测试',
    category: '平衡',
    description: 'Functional Reach Test，通过上肢前伸距离评估站立动态平衡与跌倒风险',
    instructions: '被检者靠墙站立，肩部贴墙，握拳上肢前屈90°，记录第三掌骨头位置；再尽量前伸不迈步，记录最远位置。两位置差为伸展距离，取3次最佳值',
    questions: [
      { text: '上肢功能性前伸距离', type: 'single', options: [
        { text: '≥25cm', score: 4 },
        { text: '15-24cm', score: 3 },
        { text: '10-14cm', score: 2 },
        { text: '<10cm', score: 1 },
        { text: '不能完成或需支撑', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '高跌倒风险', advice: '平衡能力严重受损，需辅助及平衡训练' },
        { min: 1, max: 1, level: '高跌倒风险', advice: '跌倒风险高，建议系统平衡训练' },
        { min: 2, max: 2, level: '中度跌倒风险', advice: '有一定跌倒风险，建议平衡训练' },
        { min: 3, max: 3, level: '轻度跌倒风险', advice: '平衡尚可，注意维持' },
        { min: 4, max: 4, level: '低跌倒风险', advice: '平衡功能良好' }
      ]
    }
  },

  {
    id: 'ols',
    name: '单脚站立测试',
    category: '平衡',
    description: 'One-Leg Stance Test，通过单脚站立维持时间评估静动态平衡',
    instructions: '被检者双手叉腰，单脚抬起离地，记录能维持的时间(秒)，分别测试睁眼和闭眼，左右各测取最佳值',
    questions: [
      { text: '睁眼单脚站立时间', type: 'single', options: [
        { text: '>30秒', score: 4 },
        { text: '10-30秒', score: 3 },
        { text: '5-9秒', score: 2 },
        { text: '1-4秒', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '闭眼单脚站立时间', type: 'single', options: [
        { text: '>15秒', score: 4 },
        { text: '5-15秒', score: 3 },
        { text: '3-4秒', score: 2 },
        { text: '1-2秒', score: 1 },
        { text: '不能完成', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 2, level: '高跌倒风险', advice: '平衡功能严重受损，需平衡训练及跌倒预防' },
        { min: 3, max: 4, level: '中度跌倒风险', advice: '平衡功能下降，建议平衡训练' },
        { min: 5, max: 6, level: '轻度跌倒风险', advice: '平衡尚可，注意维持' },
        { min: 7, max: 8, level: '平衡良好', advice: '平衡功能良好' }
      ]
    }
  },

  {
    id: 'romberg',
    name: 'Romberg测试',
    category: '平衡',
    description: '评估本体感觉与前庭功能，比较睁眼与闭眼站立稳定性',
    instructions: '被检者双脚并拢直立，先睁眼观察稳定性，再闭眼，观察是否出现明显晃动或跌倒(检查者注意保护)',
    questions: [
      { text: 'Romberg征结果', type: 'single', options: [
        { text: '阴性:站立稳定,闭眼后无明显晃动', score: 0 },
        { text: '弱阳性:闭眼后轻度晃动但仍能维持', score: 1 },
        { text: '阳性:闭眼后明显晃动或跌倒', score: 2 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '正常', advice: '本体感觉与前庭功能平衡正常' },
        { min: 1, max: 1, level: '可疑异常', advice: '提示可能存在感觉性平衡障碍,建议进一步评估' },
        { min: 2, max: 2, level: '阳性(异常)', advice: '提示感觉性共济失调或平衡障碍,需进一步检查病因' }
      ]
    }
  },

  {
    id: 'finger-nose',
    name: '协调测试(指鼻试验)',
    category: '平衡',
    description: '评估上肢运动协调与小脑功能，含指鼻、轮替、反跳三项',
    instructions: '分别测试指鼻试验(多次快速指鼻)、快速轮替动作(前臂旋前旋后)、反跳试验(对抗阻力突然释放后能否控制)',
    questions: [
      { text: '1. 指鼻试验(指鼻-指检查者手指)', type: 'single', options: [
        { text: '动作准确流畅无辨距不良', score: 4 },
        { text: '轻度辨距不良或震颤', score: 3 },
        { text: '中度辨距不良可完成', score: 2 },
        { text: '明显辨距不良完成困难', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '2. 快速轮替动作', type: 'single', options: [
        { text: '动作流畅快速', score: 4 },
        { text: '轻度减慢或不规则', score: 3 },
        { text: '中度减慢', score: 2 },
        { text: '明显减慢困难', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '3. 反跳试验', type: 'single', options: [
        { text: '对抗阻力释放后能控制无反跳', score: 4 },
        { text: '轻度反跳', score: 3 },
        { text: '中度反跳可自行恢复', score: 2 },
        { text: '明显反跳困难', score: 1 },
        { text: '不能完成', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 3, level: '严重协调障碍', advice: '协调功能严重受损,建议进一步神经学检查' },
        { min: 4, max: 7, level: '中度协调障碍', advice: '协调功能下降,建议协调训练' },
        { min: 8, max: 10, level: '轻度协调障碍', advice: '协调功能轻度异常,建议训练' },
        { min: 11, max: 12, level: '协调正常', advice: '协调功能正常' }
      ]
    }
  },

  {
    id: 'timed-up-go',
    name: '计时起立行走测试(8英尺版)',
    category: '平衡',
    description: '8-Foot Up and Go Test(Rikli & Jones),老年体能测试中评估活动能力与跌倒风险',
    instructions: '被检者坐于椅子上,听到开始后站起,以最快且安全的速度走到8英尺(2.44米)标志线并返回坐下,记录完成时间',
    questions: [
      { text: '完成8英尺起立行走并返回坐下的时间', type: 'single', options: [
        { text: '≤6秒(优秀)', score: 4 },
        { text: '6-8秒(良好)', score: 3 },
        { text: '8-10秒(中等)', score: 2 },
        { text: '10-12秒(及格下限)', score: 1 },
        { text: '>12秒或不能完成(差/高风险)', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '高度跌倒风险', advice: '活动能力差,需辅助及平衡训练' },
        { min: 1, max: 1, level: '跌倒风险增加', advice: '活动能力下降,建议平衡与下肢力量训练' },
        { min: 2, max: 2, level: '中等', advice: '活动能力中等,建议保持锻炼' },
        { min: 3, max: 3, level: '良好', advice: '活动能力良好' },
        { min: 4, max: 4, level: '优秀', advice: '活动能力优秀' }
      ]
    }
  },

  {
    id: 'dgi',
    name: '动态步态指数',
    category: '平衡',
    description: 'Dynamic Gait Index,8项任务评估不同条件下的步态与平衡,预测跌倒风险',
    instructions: '8个步行任务:平地行走、改变速度、水平转头、垂直抬头低头、跨越障碍、绕过障碍、上下台阶、窄道转身。每项0-3分,总分24分',
    questions: [
      { text: '1. 平地以正常速度行走20步', type: 'single', options: [
        { text: '正常独立完成', score: 3 },
        { text: '轻度减慢', score: 2 },
        { text: '明显减慢或需监护', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '2. 改变速度(慢-快-慢)', type: 'single', options: [
        { text: '正常独立完成', score: 3 },
        { text: '轻度减慢', score: 2 },
        { text: '明显减慢或需监护', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '3. 水平转头行走(左右看)', type: 'single', options: [
        { text: '正常独立完成', score: 3 },
        { text: '轻度减慢', score: 2 },
        { text: '明显减慢或需监护', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '4. 垂直抬头低头行走', type: 'single', options: [
        { text: '正常独立完成', score: 3 },
        { text: '轻度减慢', score: 2 },
        { text: '明显减慢或需监护', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '5. 跨越障碍物(鞋盒)', type: 'single', options: [
        { text: '正常独立完成', score: 3 },
        { text: '轻度减慢', score: 2 },
        { text: '明显减慢或需监护', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '6. 绕过障碍物', type: 'single', options: [
        { text: '正常独立完成', score: 3 },
        { text: '轻度减慢', score: 2 },
        { text: '明显减慢或需监护', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '7. 上下台阶', type: 'single', options: [
        { text: '正常独立完成', score: 3 },
        { text: '轻度减慢', score: 2 },
        { text: '明显减慢或需监护', score: 1 },
        { text: '不能完成', score: 0 }
      ]},
      { text: '8. 窄道行走并转身', type: 'single', options: [
        { text: '正常独立完成', score: 3 },
        { text: '轻度减慢', score: 2 },
        { text: '明显减慢或需监护', score: 1 },
        { text: '不能完成', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 12, level: '高跌倒风险', advice: '步态平衡严重受损,需辅助及系统步态训练' },
        { min: 13, max: 18, level: '中度跌倒风险', advice: '步态平衡下降,建议步态与平衡训练' },
        { min: 19, max: 22, level: '轻度跌倒风险', advice: '步态基本正常,建议维持训练' },
        { min: 23, max: 24, level: '正常', advice: '步态平衡功能正常' }
      ]
    }
  },

  // ===================== 运动功能（10个） =====================

  {
    id: 'fm-upper',
    name: 'Fugl-Meyer上肢评估',
    category: '运动功能',
    description: 'FMA-UE,脑卒中后上肢运动功能评估的金标准,33项,0-2分',
    instructions: '33个测试项目,每项0=不能完成,1=部分完成,2=完全完成,总分66分。检查患侧上肢',
    questions: [
      { text: '1. 肱二头肌腱反射', type: 'single', options: [ { text: '可引出', score: 2 }, { text: '不能引出', score: 0 } ]},
      { text: '2. 肱三头肌腱反射', type: 'single', options: [ { text: '可引出', score: 2 }, { text: '不能引出', score: 0 } ]},
      { text: '3. 屈肌协同-肩胛骨上提/肩外展90°/肩外旋/肘屈/前臂旋后', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '4. 伸肌协同-肩内收内旋/肘伸/前臂旋前', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '5. 手触腰椎(手后伸触腰)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '6. 肩屈曲90°肘伸直', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '7. 肩屈90°肘伸直前臂旋前/旋后', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '8. 肩外展90°肘伸直前臂旋前(伴随协同)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '9. 肩屈90-180°肘伸直前臂旋中(伴随协同)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '10. 肘屈90°前臂旋前/旋后(伴随协同)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '11. 肩外展90°肘伸直前臂旋前(分离运动)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '12. 肩屈90-180°肘伸直前臂旋中(分离运动)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '13. 肘屈90°前臂旋前旋后(分离运动)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '14. 腕稳定-肘屈90°腕背伸15°', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '15. 腕稳定-肘伸直腕背伸15°', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '16. 腕屈伸-肘屈90°环形运动', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '17. 腕屈伸-肘伸直环形运动', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '18. 手-集团屈曲', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '19. 手-集团伸展', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '20. 手-钩状抓握(第2-5指)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '21. 手-拇指侧捏', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '22. 手-拇指对捏(捏笔)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '23. 手-圆柱抓握(握杯)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '24. 手-球形抓握(抓网球)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '25. 协同-震颤', type: 'single', options: [ { text: '明显震颤', score: 0 }, { text: '轻度震颤', score: 1 }, { text: '无震颤', score: 2 } ]},
      { text: '26. 协同-辨距不良', type: 'single', options: [ { text: '明显辨距不良', score: 0 }, { text: '轻度辨距不良', score: 1 }, { text: '无辨距不良', score: 2 } ]},
      { text: '27. 协同-速度(指鼻5次)', type: 'single', options: [ { text: '明显减慢', score: 0 }, { text: '轻度减慢', score: 1 }, { text: '正常', score: 2 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 22, level: '严重上肢运动障碍', advice: '上肢运动功能严重受损,需强化康复训练' },
        { min: 23, max: 37, level: '明显上肢运动障碍', advice: '上肢运动功能明显受限,建议系统训练' },
        { min: 38, max: 50, level: '中度上肢运动障碍', advice: '上肢运动功能中度受限,继续训练' },
        { min: 51, max: 65, level: '轻度上肢运动障碍', advice: '上肢运动功能轻度受限,建议巩固训练' },
        { min: 66, max: 66, level: '运动功能正常', advice: '上肢运动功能正常' }
      ]
    }
  },

  {
    id: 'fm-lower',
    name: 'Fugl-Meyer下肢评估',
    category: '运动功能',
    description: 'FMA-LE,脑卒中后下肢运动功能评估,17项,0-2分',
    instructions: '17个测试项目,每项0=不能完成,1=部分完成,2=完全完成,总分34分。检查患侧下肢',
    questions: [
      { text: '1. 反射-膝屈肌反射(跟腱反射)', type: 'single', options: [ { text: '可引出', score: 2 }, { text: '不能引出', score: 0 } ]},
      { text: '2. 反射-跖屈肌反射', type: 'single', options: [ { text: '可引出', score: 2 }, { text: '不能引出', score: 0 } ]},
      { text: '3. 屈肌协同-髋屈/髋外展/髋外旋/膝屈/踝背屈', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '4. 伸肌协同-髋伸/髋内收/膝伸/踝跖屈', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '5. 坐位-膝屈>90°', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '6. 坐位-踝背屈', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '7. 站位-膝屈', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '8. 站位-踝背屈', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '9. 反射-膝反射(协同)', type: 'single', options: [ { text: '可引出', score: 2 }, { text: '不能引出', score: 0 } ]},
      { text: '10. 反射-跖屈反射(协同)', type: 'single', options: [ { text: '可引出', score: 2 }, { text: '不能引出', score: 0 } ]},
      { text: '11. 髋外展(分离)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '12. 髋内旋(分离)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '13. 膝屈伸(分离,仰卧)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '14. 踝背屈(分离,仰卧)', type: 'single', options: [ { text: '完全完成', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '15. 协调-震颤', type: 'single', options: [ { text: '明显震颤', score: 0 }, { text: '轻度震颤', score: 1 }, { text: '无震颤', score: 2 } ]},
      { text: '16. 协调-辨距不良', type: 'single', options: [ { text: '明显辨距不良', score: 0 }, { text: '轻度辨距不良', score: 1 }, { text: '无辨距不良', score: 2 } ]},
      { text: '17. 协调-速度', type: 'single', options: [ { text: '明显减慢', score: 0 }, { text: '轻度减慢', score: 1 }, { text: '正常', score: 2 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 13, level: '严重下肢运动障碍', advice: '下肢运动功能严重受损,需强化康复训练' },
        { min: 14, max: 22, level: '明显下肢运动障碍', advice: '下肢运动功能明显受限,建议系统训练' },
        { min: 23, max: 27, level: '中度下肢运动障碍', advice: '下肢运动功能中度受限,继续训练' },
        { min: 28, max: 33, level: '轻度下肢运动障碍', advice: '下肢运动功能轻度受限,建议巩固训练' },
        { min: 34, max: 34, level: '运动功能正常', advice: '下肢运动功能正常' }
      ]
    }
  },

  {
    id: 'brunnstrom-upper',
    name: 'Brunnstrom分期-上肢',
    category: '运动功能',
    description: '中枢神经损伤后运动恢复的6个阶段分期(上肢)',
    instructions: '观察患侧上肢运动表现,判断所处恢复阶段(I-VI期)',
    questions: [
      { text: '患侧上肢所处恢复阶段', type: 'single', options: [
        { text: 'I期 弛缓期:肌肉松弛无收缩,无反射', score: 0 },
        { text: 'II期 痉挛期:出现联合反应和协同运动,肌张力开始增高', score: 1 },
        { text: 'III期 联带运动期:可随意诱发协同运动,肌张力达高峰', score: 2 },
        { text: 'IV期 部分分离运动期:可完成部分分离运动,肌张力开始下降', score: 3 },
        { text: 'V期 分离运动期:可完成分离运动,肌张力接近正常', score: 4 },
        { text: 'VI期 正常期:运动协调接近正常', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: 'I期 弛缓期', advice: '早期,以被动活动、促通为主' },
        { min: 1, max: 2, level: 'II-III期 痉挛/联带运动期', advice: '抑制痉挛,促进分离运动' },
        { min: 3, max: 3, level: 'IV期 部分分离运动期', advice: '强化分离运动训练' },
        { min: 4, max: 4, level: 'V期 分离运动期', advice: '强化协调与精细训练' },
        { min: 5, max: 5, level: 'VI期 正常期', advice: '运动功能基本恢复,维持训练' }
      ]
    }
  },

  {
    id: 'brunnstrom-lower',
    name: 'Brunnstrom分期-下肢',
    category: '运动功能',
    description: '中枢神经损伤后运动恢复的6个阶段分期(下肢)',
    instructions: '观察患侧下肢运动表现,判断所处恢复阶段(I-VI期)',
    questions: [
      { text: '患侧下肢所处恢复阶段', type: 'single', options: [
        { text: 'I期 弛缓期:肌肉松弛无收缩', score: 0 },
        { text: 'II期 痉挛期:出现联合反应和协同运动', score: 1 },
        { text: 'III期 联带运动期:可随意诱发协同运动', score: 2 },
        { text: 'IV期 部分分离运动期:可完成部分分离运动', score: 3 },
        { text: 'V期 分离运动期:可完成分离运动', score: 4 },
        { text: 'VI期 正常期:运动协调接近正常', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: 'I期 弛缓期', advice: '早期,以被动活动、促通为主' },
        { min: 1, max: 2, level: 'II-III期 痉挛/联带运动期', advice: '抑制痉挛,促进分离运动' },
        { min: 3, max: 3, level: 'IV期 部分分离运动期', advice: '强化分离运动训练' },
        { min: 4, max: 4, level: 'V期 分离运动期', advice: '强化协调与负重训练' },
        { min: 5, max: 5, level: 'VI期 正常期', advice: '运动功能基本恢复,维持训练' }
      ]
    }
  },

  {
    id: 'brunnstrom-hand',
    name: 'Brunnstrom分期-手',
    category: '运动功能',
    description: '中枢神经损伤后手部运动恢复的6个阶段分期',
    instructions: '观察患侧手运动表现,判断所处恢复阶段(I-VI期)',
    questions: [
      { text: '患侧手所处恢复阶段', type: 'single', options: [
        { text: 'I期 弛缓期:手无任何运动', score: 0 },
        { text: 'II期 痉挛期:出现微弱屈指运动', score: 1 },
        { text: 'III期 联带运动期:可完成钩状抓握及释放,无主动伸展', score: 2 },
        { text: 'IV期 部分分离运动期:可拇指侧捏及松开,半随意伸指', score: 3 },
        { text: 'V期 分离运动期:可球状抓握、对捏及伸指', score: 4 },
        { text: 'VI期 正常期:各指可单独运动,协调良好', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: 'I期 弛缓期', advice: '早期,以感觉输入、被动活动为主' },
        { min: 1, max: 2, level: 'II-III期 痉挛/联带运动期', advice: '抑制屈肌痉挛,促进伸指' },
        { min: 3, max: 3, level: 'IV期 部分分离运动期', advice: '强化抓握与对捏训练' },
        { min: 4, max: 4, level: 'V期 分离运动期', advice: '强化精细动作训练' },
        { min: 5, max: 5, level: 'VI期 正常期', advice: '手功能基本恢复,维持训练' }
      ]
    }
  },

  {
    id: 'mas-motor',
    name: 'MAS运动评估量表',
    category: '运动功能',
    description: 'Motor Assessment Scale(Carr & Shepherd),8项评估脑卒中后运动功能,每项0-6分',
    instructions: '8个测试项目,每项0-6分(0=不能完成,6=最佳),总分48分',
    questions: [
      { text: '1. 仰卧到健侧卧', type: 'single', options: [
        { text: '0分 不能完成', score: 0 }, { text: '1分 需大量帮助翻向健侧', score: 1 },
        { text: '2分 需少量帮助翻向健侧', score: 2 }, { text: '3分 自主翻向健侧但下肢滞后', score: 3 },
        { text: '4分 自主完成,患侧上肢先移动', score: 4 }, { text: '5分 自主完成,动作流畅', score: 5 },
        { text: '6分 正常完成', score: 6 }
      ]},
      { text: '2. 仰卧到床边坐', type: 'single', options: [
        { text: '0分 不能完成', score: 0 }, { text: '1分 需两人帮助坐起', score: 1 },
        { text: '2分 需一人帮助坐起', score: 2 }, { text: '3分 需少量帮助坐起', score: 3 },
        { text: '4分 自主坐起但需调整', score: 4 }, { text: '5分 自主流畅坐起', score: 5 },
        { text: '6分 正常完成', score: 6 }
      ]},
      { text: '3. 坐位平衡', type: 'single', options: [
        { text: '0分 不能坐', score: 0 }, { text: '1分 需大量支撑才能坐', score: 1 },
        { text: '2分 需少量支撑坐', score: 2 }, { text: '3分 无支撑坐10秒', score: 3 },
        { text: '4分 无支撑坐,体重可前移', score: 4 }, { text: '5分 无支撑坐,可左右转移重心', score: 5 },
        { text: '6分 正常坐位平衡', score: 6 }
      ]},
      { text: '4. 坐到站', type: 'single', options: [
        { text: '0分 不能站起', score: 0 }, { text: '1分 需两人帮助站起', score: 1 },
        { text: '2分 需一人帮助站起', score: 2 }, { text: '3分 需少量帮助站起', score: 3 },
        { text: '4分 自主站起但需手支撑', score: 4 }, { text: '5分 自主站起,膝伸展充分', score: 5 },
        { text: '6分 正常站起', score: 6 }
      ]},
      { text: '5. 行走', type: 'single', options: [
        { text: '0分 不能行走', score: 0 }, { text: '1分 需两人帮助行走', score: 1 },
        { text: '2分 需一人帮助行走', score: 2 }, { text: '3分 需监护或辅助器具行走3米', score: 3 },
        { text: '4分 独立行走3米', score: 4 }, { text: '5分 独立行走10米,可转身', score: 5 },
        { text: '6分 正常行走', score: 6 }
      ]},
      { text: '6. 上肢功能', type: 'single', options: [
        { text: '0分 上肢无任何功能', score: 0 }, { text: '1分 卧位上举上肢', score: 1 },
        { text: '2分 坐位前屈肩90°维持2秒', score: 2 }, { text: '3分 坐位屈肘手举至头顶', score: 3 },
        { text: '4分 坐位前平举并维持', score: 4 }, { text: '5分 坐位前平举并前臂旋前旋后', score: 5 },
        { text: '6分 上肢功能正常', score: 6 }
      ]},
      { text: '7. 手部精细动作', type: 'single', options: [
        { text: '0分 手无任何功能', score: 0 }, { text: '1分 集团屈指', score: 1 },
        { text: '2分 侧捏(拇指内收)并松开', score: 2 }, { text: '3分 对捏(拇指与各指)并松开', score: 3 },
        { text: '4分 持续抓握及松开圆柱体', score: 4 }, { text: '5分 抓握及操控球形物体', score: 5 },
        { text: '6分 精细动作正常', score: 6 }
      ]},
      { text: '8. 高级手部活动', type: 'single', options: [
        { text: '0分 不能完成', score: 0 }, { text: '1分 抓住物体但需协助定位', score: 1 },
        { text: '2分 抓住物体并移至桌面', score: 2 }, { text: '3分 抓住物体并抬高', score: 3 },
        { text: '4分 抓住物体并跨越中线转移', score: 4 }, { text: '5分 快速操控物体', score: 5 },
        { text: '6分 高级手部活动正常', score: 6 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 15, level: '重度运动障碍', advice: '运动功能严重受损,需大量辅助及康复训练' },
        { min: 16, max: 30, level: '中度运动障碍', advice: '运动功能中度受限,建议系统康复训练' },
        { min: 31, max: 40, level: '轻度运动障碍', advice: '运动功能轻度受限,继续巩固训练' },
        { min: 41, max: 48, level: '运动功能接近正常', advice: '运动功能良好,维持训练' }
      ]
    }
  },

  {
    id: 'rivermead-motor',
    name: 'Rivermead运动指数',
    category: '运动功能',
    description: 'Rivermead Mobility Index,15项评估患者整体活动能力',
    instructions: '15个项目,每项能独立完成=1分,不能=0分,总分15分',
    questions: [
      { text: '1. 翻身(卧位翻身)', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '2. 仰卧到坐位', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '3. 坐位平衡(无支撑坐10秒)', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '4. 坐到站', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '5. 站立(无支撑站10秒)', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '6. 床-椅转移', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '7. 室内行走(可带助行器)', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '8. 室外行走', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '9. 上下台阶(1级)', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '10. 地上捡物', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '11. 上下楼梯(一整层)', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '12. 室外步行15米', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '13. 进出汽车', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '14. 上下4级台阶(无扶手)', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]},
      { text: '15. 跑步10米', type: 'single', options: [ { text: '能独立完成', score: 1 }, { text: '不能', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 5, level: '重度依赖', advice: '活动能力严重受限,需大量辅助' },
        { min: 6, max: 10, level: '中度依赖', advice: '活动能力中度受限,建议康复训练' },
        { min: 11, max: 14, level: '轻度依赖', advice: '基本可独立活动,继续巩固' },
        { min: 15, max: 15, level: '完全独立', advice: '活动能力独立' }
      ]
    }
  },

  {
    id: 'motricity',
    name: 'Motricity指数',
    category: '运动功能',
    description: 'Motricity Index,评估偏瘫侧上下肢6个关键肌群的肌力,可换算0-100分',
    instructions: '检查患侧6个关键动作的肌力(MRC分级),用于评估运动功能恢复',
    questions: [
      { text: '1. 上肢-拇指对捏', type: 'single', options: [
        { text: '0级 无收缩', score: 0 }, { text: '1级 微缩', score: 1 }, { text: '2级 消除重力', score: 2 },
        { text: '3级 抗重力', score: 3 }, { text: '4级 抗部分阻力', score: 4 }, { text: '5级 正常', score: 5 }
      ]},
      { text: '2. 上肢-肘屈曲', type: 'single', options: [
        { text: '0级 无收缩', score: 0 }, { text: '1级 微缩', score: 1 }, { text: '2级 消除重力', score: 2 },
        { text: '3级 抗重力', score: 3 }, { text: '4级 抗部分阻力', score: 4 }, { text: '5级 正常', score: 5 }
      ]},
      { text: '3. 上肢-肩外展', type: 'single', options: [
        { text: '0级 无收缩', score: 0 }, { text: '1级 微缩', score: 1 }, { text: '2级 消除重力', score: 2 },
        { text: '3级 抗重力', score: 3 }, { text: '4级 抗部分阻力', score: 4 }, { text: '5级 正常', score: 5 }
      ]},
      { text: '4. 下肢-踝背屈', type: 'single', options: [
        { text: '0级 无收缩', score: 0 }, { text: '1级 微缩', score: 1 }, { text: '2级 消除重力', score: 2 },
        { text: '3级 抗重力', score: 3 }, { text: '4级 抗部分阻力', score: 4 }, { text: '5级 正常', score: 5 }
      ]},
      { text: '5. 下肢-膝伸展', type: 'single', options: [
        { text: '0级 无收缩', score: 0 }, { text: '1级 微缩', score: 1 }, { text: '2级 消除重力', score: 2 },
        { text: '3级 抗重力', score: 3 }, { text: '4级 抗部分阻力', score: 4 }, { text: '5级 正常', score: 5 }
      ]},
      { text: '6. 下肢-髋屈曲', type: 'single', options: [
        { text: '0级 无收缩', score: 0 }, { text: '1级 微缩', score: 1 }, { text: '2级 消除重力', score: 2 },
        { text: '3级 抗重力', score: 3 }, { text: '4级 抗部分阻力', score: 4 }, { text: '5级 正常', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 5, level: '严重运动障碍', advice: '运动功能严重受损,需强化训练' },
        { min: 6, max: 12, level: '重度运动障碍', advice: '运动功能重度受限,建议系统训练' },
        { min: 13, max: 19, level: '中度运动障碍', advice: '运动功能中度受限,继续训练' },
        { min: 20, max: 25, level: '轻度运动障碍', advice: '运动功能轻度受限,建议巩固' },
        { min: 26, max: 30, level: '运动功能正常', advice: '运动功能基本正常' }
      ]
    }
  },

  {
    id: 'ueda-upper',
    name: '上田敏偏瘫功能评价-上肢',
    category: '运动功能',
    description: '上田敏法,将Brunnstrom分期细化为12级的偏瘫上肢功能评价',
    instructions: '按标准动作检查,判断上肢功能所处阶段(1-12级)',
    questions: [
      { text: '患侧上肢功能阶段', type: 'single', options: [
        { text: '1级 软瘫,无联合反应', score: 0 }, { text: '2级 微弱联合反应', score: 1 },
        { text: '3级 联合反应明显', score: 2 }, { text: '4级 部分协同运动', score: 3 },
        { text: '5级 协同运动充分', score: 4 }, { text: '6级 协同运动+部分分离', score: 5 },
        { text: '7级 部分分离运动', score: 6 }, { text: '8级 分离运动明显', score: 7 },
        { text: '9级 分离运动较充分', score: 8 }, { text: '10级 速度稍慢', score: 9 },
        { text: '11级 速度基本正常', score: 10 }, { text: '12级 正常', score: 11 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 2, level: '弛缓期(1-3级)', advice: '以促通、被动活动为主' },
        { min: 3, max: 5, level: '痉挛/协同期(4-6级)', advice: '抑制痉挛,促进分离运动' },
        { min: 6, max: 8, level: '分离运动期(7-9级)', advice: '强化分离运动训练' },
        { min: 9, max: 11, level: '基本恢复期(10-12级)', advice: '强化速度与协调,维持训练' }
      ]
    }
  },

  {
    id: 'ueda-lower',
    name: '上田敏偏瘫功能评价-下肢',
    category: '运动功能',
    description: '上田敏法,将Brunnstrom分期细化为12级的偏瘫下肢功能评价',
    instructions: '按标准动作检查,判断下肢功能所处阶段(1-12级)',
    questions: [
      { text: '患侧下肢功能阶段', type: 'single', options: [
        { text: '1级 软瘫,无联合反应', score: 0 }, { text: '2级 微弱联合反应', score: 1 },
        { text: '3级 联合反应明显', score: 2 }, { text: '4级 部分协同运动', score: 3 },
        { text: '5级 协同运动充分', score: 4 }, { text: '6级 协同运动+部分分离', score: 5 },
        { text: '7级 部分分离运动', score: 6 }, { text: '8级 分离运动明显', score: 7 },
        { text: '9级 分离运动较充分', score: 8 }, { text: '10级 速度稍慢', score: 9 },
        { text: '11级 速度基本正常', score: 10 }, { text: '12级 正常', score: 11 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 2, level: '弛缓期(1-3级)', advice: '以促通、被动活动为主' },
        { min: 3, max: 5, level: '痉挛/协同期(4-6级)', advice: '抑制痉挛,促进分离运动' },
        { min: 6, max: 8, level: '分离运动期(7-9级)', advice: '强化分离运动及负重训练' },
        { min: 9, max: 11, level: '基本恢复期(10-12级)', advice: '强化步态与协调,维持训练' }
      ]
    }
  },

  // ===================== 肌力与痉挛（6个） =====================

  {
    id: 'mmt-grade',
    name: 'MMT徒手肌力测试(0-5级)',
    category: '肌力与痉挛',
    description: '徒手肌力测试,Lovett 6级分级法评估肌肉力量',
    instructions: '检查目标肌肉对抗重力及阻力的能力,分级0-5级',
    questions: [
      { text: '受测肌肉肌力等级', type: 'single', options: [
        { text: '0级 无肌肉收缩(完全瘫痪)', score: 0 },
        { text: '1级 有肌肉收缩但无关节活动', score: 1 },
        { text: '2级 消除重力下可完成全范围活动', score: 2 },
        { text: '3级 抗重力下可完成全范围活动', score: 3 },
        { text: '4级 抗重力及部分阻力下完成全范围活动', score: 4 },
        { text: '5级 抗重力及充分阻力下完成(正常)', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '0级 完全瘫痪', advice: '完全瘫痪,以被动活动、防萎缩为主' },
        { min: 1, max: 1, level: '1级 微缩', advice: '仅有肌肉收缩,可行促通训练' },
        { min: 2, max: 2, level: '2级 差', advice: '消除重力可活动,可行抗重力训练' },
        { min: 3, max: 3, level: '3级 尚可', advice: '可抗重力,需加强抗阻训练' },
        { min: 4, max: 4, level: '4级 良好', advice: '可抗部分阻力,继续强化' },
        { min: 5, max: 5, level: '5级 正常', advice: '肌力正常' }
      ]
    }
  },

  {
    id: 'ashworth-modified',
    name: '改良Ashworth痉挛量表',
    category: '肌力与痉挛',
    description: 'Modified Ashworth Scale,评估肌张力增高程度',
    instructions: '被动牵伸目标肌群,根据阻力大小及出现范围分级',
    questions: [
      { text: '受测肌群肌张力等级', type: 'single', options: [
        { text: '0级 肌张力无增加', score: 0 },
        { text: '1级 肌张力轻度增加,ROM末出现卡住或释放', score: 1 },
        { text: '1+级 肌张力轻度增加,ROM前50%内出现卡住', score: 2 },
        { text: '2级 肌张力明显增加,大部分ROM内阻力增加', score: 3 },
        { text: '3级 肌张力严重增加,被动活动困难', score: 4 },
        { text: '4级 僵直,被动活动时呈僵直状态', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '正常肌张力', advice: '肌张力正常' },
        { min: 1, max: 2, level: '轻度痉挛', advice: '轻度肌张力增高,观察或适当牵伸' },
        { min: 3, max: 3, level: '中度痉挛', advice: '明显肌张力增高,建议牵伸及抗痉挛治疗' },
        { min: 4, max: 5, level: '重度痉挛', advice: '严重肌张力增高/僵直,需药物及综合抗痉挛治疗' }
      ]
    }
  },

  {
    id: 'tardieu',
    name: '改良Tardieu量表',
    category: '肌力与痉挛',
    description: 'Modified Tardieu Scale,评估速度依赖性肌张力增高,区分痉挛与挛缩',
    instructions: '以两种速度(V1慢速、V3快速)被动牵伸肌群,记录反应类型Y分级(0-5)及角度R1/R2',
    questions: [
      { text: 'V3快速被动牵伸时的反应类型(Y)', type: 'single', options: [
        { text: '0级 全ROM内无阻力', score: 0 },
        { text: '1级 轻微catch,全ROM内释放', score: 1 },
        { text: '2级 catch后释放,无疲劳性阵挛', score: 2 },
        { text: '3级 疲劳性阵挛(≥10秒内在一定角度停止)', score: 3 },
        { text: '4级 持续性阵挛(<10秒)', score: 4 },
        { text: '5级 关节僵硬(R1=R2)', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '无痉挛', advice: '肌张力正常,无速度依赖性增高' },
        { min: 1, max: 2, level: '轻度痉挛', advice: '轻度痉挛,建议牵伸训练' },
        { min: 3, max: 4, level: '中度痉挛', advice: '中度痉挛,建议综合抗痉挛治疗' },
        { min: 5, max: 5, level: '重度痉挛', advice: '严重痉挛,需药物及综合治疗' }
      ]
    }
  },

  {
    id: 'penn',
    name: 'Penn痉挛频率评分',
    category: '肌力与痉挛',
    description: 'Penn Spasm Frequency Score,评估脊髓损伤后痉挛发生频率',
    instructions: '根据24小时内痉挛发作频率分级(0-4分)',
    questions: [
      { text: '24小时内痉挛发作频率', type: 'single', options: [
        { text: '0级 无痉挛发作', score: 0 },
        { text: '1级 痉挛由刺激诱发(自发性少)', score: 1 },
        { text: '2级 痉挛发作每小时少于1次', score: 2 },
        { text: '3级 痉挛发作每小时多于1次', score: 3 },
        { text: '4级 痉挛发作每小时多于10次', score: 4 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '无痉挛', advice: '无痉挛发作' },
        { min: 1, max: 2, level: '轻度痉挛', advice: '痉挛频率低,可观察或物理治疗' },
        { min: 3, max: 3, level: '中度痉挛', advice: '痉挛较频繁,建议药物及综合治疗' },
        { min: 4, max: 4, level: '重度痉挛', advice: '痉挛极频繁,需药物及综合治疗' }
      ]
    }
  },

  {
    id: 'spasm-frequency',
    name: '痉挛频率及严重度量表',
    category: '肌力与痉挛',
    description: 'Spasm Frequency and Severity Scale,从频率与严重度两方面评估痉挛',
    instructions: '评估痉挛发作频率(0-4)及严重度(1-3),综合判断痉挛程度',
    questions: [
      { text: '1. 痉挛发作频率', type: 'single', options: [
        { text: '0级 无痉挛', score: 0 }, { text: '1级 ≤1次/日', score: 1 },
        { text: '2级 2-5次/日', score: 2 }, { text: '3级 6-9次/日', score: 3 },
        { text: '4级 ≥10次/日', score: 4 }
      ]},
      { text: '2. 痉挛严重度', type: 'single', options: [
        { text: '1级 轻微(不影响活动)', score: 1 },
        { text: '2级 中度(影响部分活动)', score: 2 },
        { text: '3级 严重(明显影响活动或疼痛)', score: 3 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 1, level: '无明显痉挛', advice: '痉挛轻微,可观察' },
        { min: 2, max: 4, level: '轻度痉挛', advice: '痉挛轻度,建议物理治疗及牵伸' },
        { min: 5, max: 6, level: '中度痉挛', advice: '痉挛中度,建议综合治疗' },
        { min: 7, max: 7, level: '重度痉挛', advice: '痉挛严重,需药物及综合治疗' }
      ]
    }
  },

  {
    id: 'clonus',
    name: 'Clonus分级',
    category: '肌力与痉挛',
    description: '评估踝阵挛及其他部位阵挛的程度',
    instructions: '快速被动牵伸目标肌群(常为踝跖屈肌)后观察阵挛,按持续次数分级',
    questions: [
      { text: '阵挛程度', type: 'single', options: [
        { text: '0级 无阵挛', score: 0 },
        { text: '1级 1-2次节律性收缩', score: 1 },
        { text: '2级 3-5次节律性收缩', score: 2 },
        { text: '3级 持续阵挛(>5次但可消退)', score: 3 },
        { text: '4级 不易消退的持续阵挛', score: 4 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '无阵挛', advice: '无明显阵挛' },
        { min: 1, max: 2, level: '轻度阵挛', advice: '轻度阵挛,建议牵伸及观察' },
        { min: 3, max: 3, level: '中度阵挛', advice: '中度阵挛,建议综合抗痉挛治疗' },
        { min: 4, max: 4, level: '重度阵挛', advice: '严重阵挛,需药物及综合治疗' }
      ]
    }
  },

  // ===================== 关节活动度（4个） =====================

  {
    id: 'rom-upper',
    name: 'ROM关节活动度测量-上肢',
    category: '关节活动度',
    description: '上肢各关节活动度测量,以患侧达正常范围百分比分级',
    instructions: '用量角器测量各上肢关节主被动活动度,与正常值比较,按达正常范围百分比评分',
    questions: [
      { text: '1. 肩关节屈曲', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '2. 肩关节外展', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '3. 肩关节外旋', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '4. 肩关节内旋', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '5. 肘关节屈曲', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '6. 肘关节伸展', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '7. 前臂旋前', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '8. 前臂旋后', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '9. 腕掌屈', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '10. 腕背伸', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 10, level: '严重受限', advice: '上肢活动严重受限,需积极康复' },
        { min: 11, max: 20, level: '重度受限', advice: '上肢活动重度受限,建议系统训练' },
        { min: 21, max: 30, level: '中度受限', advice: '上肢活动中度受限,继续训练' },
        { min: 31, max: 36, level: '轻度受限', advice: '上肢活动轻度受限,建议巩固' },
        { min: 37, max: 40, level: '正常', advice: '上肢活动度基本正常' }
      ]
    }
  },

  {
    id: 'rom-lower',
    name: 'ROM关节活动度测量-下肢',
    category: '关节活动度',
    description: '下肢各关节活动度测量,以患侧达正常范围百分比分级',
    instructions: '用量角器测量各下肢关节活动度,与正常值比较,按达正常范围百分比评分',
    questions: [
      { text: '1. 髋关节屈曲', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '2. 髋关节伸展', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '3. 髋关节外展', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '4. 髋关节内旋', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '5. 髋关节外旋', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '6. 膝关节屈曲', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '7. 膝关节伸展', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '8. 踝关节背屈', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '9. 踝关节跖屈', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '10. 距下关节内翻/外翻', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 10, level: '严重受限', advice: '下肢活动严重受限,需积极康复' },
        { min: 11, max: 20, level: '重度受限', advice: '下肢活动重度受限,建议系统训练' },
        { min: 21, max: 30, level: '中度受限', advice: '下肢活动中度受限,继续训练' },
        { min: 31, max: 36, level: '轻度受限', advice: '下肢活动轻度受限,建议巩固' },
        { min: 37, max: 40, level: '正常', advice: '下肢活动度基本正常' }
      ]
    }
  },

  {
    id: 'rom-spine',
    name: 'ROM关节活动度测量-脊柱',
    category: '关节活动度',
    description: '颈椎及腰椎各方向活动度测量,以达正常范围百分比分级',
    instructions: '测量颈椎及腰椎前屈、后伸、侧屈、旋转活动度,按达正常范围百分比评分',
    questions: [
      { text: '1. 颈椎前屈', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '2. 颈椎后伸', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '3. 颈椎侧屈', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '4. 颈椎旋转', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '5. 腰椎前屈', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '6. 腰椎后伸', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '7. 腰椎侧屈', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]},
      { text: '8. 腰椎旋转', type: 'single', options: [ { text: '正常(>90%)', score: 4 }, { text: '轻度受限(60-90%)', score: 3 }, { text: '中度受限(30-59%)', score: 2 }, { text: '重度受限(10-29%)', score: 1 }, { text: '几乎无活动(<10%)', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 8, level: '严重受限', advice: '脊柱活动严重受限,需积极康复' },
        { min: 9, max: 16, level: '重度受限', advice: '脊柱活动重度受限,建议系统训练' },
        { min: 17, max: 24, level: '中度受限', advice: '脊柱活动中度受限,继续训练' },
        { min: 25, max: 28, level: '轻度受限', advice: '脊柱活动轻度受限,建议巩固' },
        { min: 29, max: 32, level: '正常', advice: '脊柱活动度基本正常' }
      ]
    }
  },

  {
    id: 'functional-rom',
    name: '功能性关节活动度',
    category: '关节活动度',
    description: '通过功能性动作评估关节活动度的实际应用能力',
    instructions: '完成8项功能性动作,根据完成情况评分(0-3分)',
    questions: [
      { text: '1. 手摸后腰(肩内旋)', type: 'single', options: [ { text: '正常完成', score: 3 }, { text: '能完成但困难', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能完成', score: 0 } ]},
      { text: '2. 手摸对侧肩胛(肩外展外旋)', type: 'single', options: [ { text: '正常完成', score: 3 }, { text: '能完成但困难', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能完成', score: 0 } ]},
      { text: '3. 手摸头顶(肩屈曲外展)', type: 'single', options: [ { text: '正常完成', score: 3 }, { text: '能完成但困难', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能完成', score: 0 } ]},
      { text: '4. 手摸后颈(肩外展外旋)', type: 'single', options: [ { text: '正常完成', score: 3 }, { text: '能完成但困难', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能完成', score: 0 } ]},
      { text: '5. 弯腰触地(腰椎及髋屈曲)', type: 'single', options: [ { text: '正常完成', score: 3 }, { text: '能完成但困难', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能完成', score: 0 } ]},
      { text: '6. 转头看肩(颈椎旋转)', type: 'single', options: [ { text: '正常完成', score: 3 }, { text: '能完成但困难', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能完成', score: 0 } ]},
      { text: '7. 仰头看天(颈椎后伸)', type: 'single', options: [ { text: '正常完成', score: 3 }, { text: '能完成但困难', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能完成', score: 0 } ]},
      { text: '8. 抬肩触耳(肩外展)', type: 'single', options: [ { text: '正常完成', score: 3 }, { text: '能完成但困难', score: 2 }, { text: '部分完成', score: 1 }, { text: '不能完成', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 6, level: '严重受限', advice: '功能性活动严重受限,需积极康复' },
        { min: 7, max: 12, level: '中度受限', advice: '功能性活动中度受限,建议系统训练' },
        { min: 13, max: 18, level: '轻度受限', advice: '功能性活动轻度受限,建议巩固' },
        { min: 19, max: 24, level: '正常', advice: '功能性活动基本正常' }
      ]
    }
  },

  // ===================== 日常生活（8个） =====================

  {
    id: 'barthel-original',
    name: 'Barthel指数',
    category: '日常生活',
    description: '评估日常生活活动(ADL)能力的最常用量表,10项,总分100分',
    instructions: '10个项目,根据独立完成情况评分,总分100分,分数越高独立性越好',
    questions: [
      { text: '1. 进食', type: 'single', options: [ { text: '完全独立', score: 10 }, { text: '需部分帮助', score: 5 }, { text: '需大量帮助/不能进食', score: 0 } ]},
      { text: '2. 洗澡', type: 'single', options: [ { text: '独立完成', score: 5 }, { text: '需帮助', score: 0 } ]},
      { text: '3. 修饰(洗脸、刷牙、梳头)', type: 'single', options: [ { text: '独立完成', score: 5 }, { text: '需帮助', score: 0 } ]},
      { text: '4. 穿衣', type: 'single', options: [ { text: '独立完成', score: 10 }, { text: '需部分帮助', score: 5 }, { text: '需大量帮助', score: 0 } ]},
      { text: '5. 控制大便', type: 'single', options: [ { text: '不失禁', score: 10 }, { text: '偶有失禁', score: 5 }, { text: '完全失禁', score: 0 } ]},
      { text: '6. 控制小便', type: 'single', options: [ { text: '不失禁', score: 10 }, { text: '偶有失禁', score: 5 }, { text: '完全失禁/留置尿管', score: 0 } ]},
      { text: '7. 上厕所', type: 'single', options: [ { text: '独立完成', score: 10 }, { text: '需部分帮助', score: 5 }, { text: '需大量帮助', score: 0 } ]},
      { text: '8. 床椅转移', type: 'single', options: [ { text: '独立完成', score: 15 }, { text: '需少量帮助', score: 10 }, { text: '需大量帮助', score: 5 }, { text: '不能坐起', score: 0 } ]},
      { text: '9. 平地行走', type: 'single', options: [ { text: '独立行走50米以上', score: 15 }, { text: '需辅助器具走50米', score: 10 }, { text: '需人帮助走50米', score: 5 }, { text: '不能行走', score: 0 } ]},
      { text: '10. 上下楼梯', type: 'single', options: [ { text: '独立上下一层以上', score: 10 }, { text: '需辅助器具', score: 5 }, { text: '需帮助/不能上下', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 20, level: '完全依赖', advice: '完全不能自理,需他人照料' },
        { min: 21, max: 40, level: '重度依赖', advice: '重度功能障碍,大部分需帮助' },
        { min: 41, max: 60, level: '中度依赖', advice: '中度功能障碍,部分需帮助' },
        { min: 61, max: 99, level: '轻度依赖', advice: '轻度功能障碍,基本独立' },
        { min: 100, max: 100, level: '完全独立', advice: '日常生活完全自理' }
      ]
    }
  },

  {
    id: 'barthel-modified',
    name: '改良Barthel指数',
    category: '日常生活',
    description: 'Modified Barthel Index,在原Barthel基础上细化分级,10项,总分100分',
    instructions: '10个项目,每项分5级(完全独立/部分独立/部分帮助/大量帮助/完全依赖),总分100分',
    questions: [
      { text: '1. 进食', type: 'single', options: [ { text: '完全独立', score: 10 }, { text: '需少量帮助/准备', score: 8 }, { text: '需较多帮助', score: 5 }, { text: '需大量帮助', score: 2 }, { text: '完全依赖', score: 0 } ]},
      { text: '2. 洗澡', type: 'single', options: [ { text: '完全独立', score: 5 }, { text: '需少量帮助', score: 4 }, { text: '需较多帮助', score: 3 }, { text: '需大量帮助', score: 1 }, { text: '完全依赖', score: 0 } ]},
      { text: '3. 修饰', type: 'single', options: [ { text: '完全独立', score: 5 }, { text: '需少量帮助', score: 4 }, { text: '需较多帮助', score: 3 }, { text: '需大量帮助', score: 1 }, { text: '完全依赖', score: 0 } ]},
      { text: '4. 穿衣', type: 'single', options: [ { text: '完全独立', score: 10 }, { text: '需少量帮助', score: 8 }, { text: '需较多帮助', score: 5 }, { text: '需大量帮助', score: 2 }, { text: '完全依赖', score: 0 } ]},
      { text: '5. 控制大便', type: 'single', options: [ { text: '完全可控', score: 10 }, { text: '偶有失禁', score: 8 }, { text: '有时失禁', score: 5 }, { text: '经常失禁', score: 2 }, { text: '完全失禁', score: 0 } ]},
      { text: '6. 控制小便', type: 'single', options: [ { text: '完全可控', score: 10 }, { text: '偶有失禁', score: 8 }, { text: '有时失禁', score: 5 }, { text: '经常失禁', score: 2 }, { text: '完全失禁', score: 0 } ]},
      { text: '7. 上厕所', type: 'single', options: [ { text: '完全独立', score: 10 }, { text: '需少量帮助', score: 8 }, { text: '需较多帮助', score: 5 }, { text: '需大量帮助', score: 2 }, { text: '完全依赖', score: 0 } ]},
      { text: '8. 床椅转移', type: 'single', options: [ { text: '完全独立', score: 15 }, { text: '需少量帮助', score: 12 }, { text: '需较多帮助', score: 8 }, { text: '需大量帮助', score: 3 }, { text: '不能坐起', score: 0 } ]},
      { text: '9. 平地行走', type: 'single', options: [ { text: '独立行走50米以上', score: 15 }, { text: '需辅助器具走50米', score: 12 }, { text: '需人帮助走50米', score: 8 }, { text: '需大量帮助/轮椅', score: 3 }, { text: '不能移动', score: 0 } ]},
      { text: '10. 上下楼梯', type: 'single', options: [ { text: '独立上下', score: 10 }, { text: '需辅助器具', score: 8 }, { text: '需少量帮助', score: 5 }, { text: '需大量帮助', score: 2 }, { text: '不能上下', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 20, level: '完全依赖', advice: '完全不能自理,需他人照料' },
        { min: 21, max: 40, level: '重度依赖', advice: '重度功能障碍,大部分需帮助' },
        { min: 41, max: 60, level: '中度依赖', advice: '中度功能障碍,部分需帮助' },
        { min: 61, max: 99, level: '轻度依赖', advice: '轻度功能障碍,基本独立' },
        { min: 100, max: 100, level: '完全独立', advice: '日常生活完全自理' }
      ]
    }
  },

  {
    id: 'fim-extra',
    name: 'FIM功能独立性评定',
    category: '日常生活',
    description: '18项功能独立性评定,评估运动和认知功能,总分126分',
    instructions: '18个项目,每项1-7分(1=完全依赖,7=完全独立),总分126分',
    questions: [
      { text: '1. 进食', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '2. 梳洗修饰', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '3. 洗澡', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '4. 穿上衣', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '5. 穿下衣', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '6. 入厕', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '7. 膀胱控制', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '8. 直肠控制', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '9. 床椅转移', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '10. 如厕转移', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '11. 浴盆转移', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '12. 行走/轮椅', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '13. 上下楼梯', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '14. 理解', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '15. 表达', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '16. 社会交往', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '17. 问题解决', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]},
      { text: '18. 记忆', type: 'single', options: [ { text: '7 完全独立', score: 7 }, { text: '6 基本独立', score: 6 }, { text: '5 有条件独立', score: 5 }, { text: '4 轻度依赖', score: 4 }, { text: '3 中度依赖', score: 3 }, { text: '2 重度依赖', score: 2 }, { text: '1 完全依赖', score: 1 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 18, max: 35, level: '极重度依赖', advice: '基本完全需要帮助' },
        { min: 36, max: 53, level: '重度依赖', advice: '大部分需要帮助' },
        { min: 54, max: 71, level: '中度依赖', advice: '需要较多帮助' },
        { min: 72, max: 89, level: '轻度依赖', advice: '需要少量帮助' },
        { min: 90, max: 107, level: '基本独立', advice: '轻度功能障碍,基本独立' },
        { min: 108, max: 126, level: '完全独立', advice: '功能基本独立' }
      ]
    }
  },

  {
    id: 'katz',
    name: 'Katz指数(ADL)',
    category: '日常生活',
    description: 'Katz ADL指数,6项基本日常生活能力评估,分级A-G',
    instructions: '6项基本活动,独立完成=1分,需帮助=0分,总分6分。对应Katz分级A-G',
    questions: [
      { text: '1. 洗澡', type: 'single', options: [ { text: '独立完成(浴缸/淋浴)', score: 1 }, { text: '需帮助', score: 0 } ]},
      { text: '2. 穿衣', type: 'single', options: [ { text: '独立取衣穿衣', score: 1 }, { text: '需帮助', score: 0 } ]},
      { text: '3. 如厕', type: 'single', options: [ { text: '独立如厕', score: 1 }, { text: '需帮助', score: 0 } ]},
      { text: '4. 转移', type: 'single', options: [ { text: '独立床椅转移', score: 1 }, { text: '需帮助', score: 0 } ]},
      { text: '5. 排便控制', type: 'single', options: [ { text: '完全可控', score: 1 }, { text: '失禁/需帮助', score: 0 } ]},
      { text: '6. 排尿控制', type: 'single', options: [ { text: '完全可控', score: 1 }, { text: '失禁/需帮助', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 1, level: 'G级 完全依赖', advice: '基本生活完全依赖他人' },
        { min: 2, max: 3, level: 'D-E级 重度依赖', advice: '重度功能依赖,需大量帮助' },
        { min: 4, max: 5, level: 'B-C级 中度依赖', advice: '部分活动需帮助' },
        { min: 6, max: 6, level: 'A级 完全独立', advice: '基本生活完全独立' }
      ]
    }
  },

  {
    id: 'lawton-iadl',
    name: 'Lawton IADL',
    category: '日常生活',
    description: 'Lawton工具性日常生活活动量表,8项评估独立生活能力',
    instructions: '8项工具性活动,独立完成=1分,需帮助=0分,总分8分',
    questions: [
      { text: '1. 使用电话', type: 'single', options: [ { text: '独立使用', score: 1 }, { text: '需帮助/不能', score: 0 } ]},
      { text: '2. 购物', type: 'single', options: [ { text: '独立完成', score: 1 }, { text: '需帮助/不能', score: 0 } ]},
      { text: '3. 准备饭菜', type: 'single', options: [ { text: '独立完成', score: 1 }, { text: '需帮助/不能', score: 0 } ]},
      { text: '4. 做家务', type: 'single', options: [ { text: '独立完成', score: 1 }, { text: '需帮助/不能', score: 0 } ]},
      { text: '5. 洗衣服', type: 'single', options: [ { text: '独立完成', score: 1 }, { text: '需帮助/不能', score: 0 } ]},
      { text: '6. 外出交通', type: 'single', options: [ { text: '独立出行', score: 1 }, { text: '需帮助/不能', score: 0 } ]},
      { text: '7. 服药管理', type: 'single', options: [ { text: '独立管理', score: 1 }, { text: '需帮助/不能', score: 0 } ]},
      { text: '8. 管理财务', type: 'single', options: [ { text: '独立管理', score: 1 }, { text: '需帮助/不能', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 2, level: '重度依赖', advice: '工具性活动严重依赖,需大量帮助' },
        { min: 3, max: 5, level: '中度依赖', advice: '部分工具性活动需帮助' },
        { min: 6, max: 7, level: '轻度依赖', advice: '基本独立,个别活动需帮助' },
        { min: 8, max: 8, level: '完全独立', advice: '工具性活动完全独立' }
      ]
    }
  },

  {
    id: 'fac',
    name: '功能性步行分级(FAC)',
    category: '日常生活',
    description: 'Functional Ambulation Categories,6级评估步行所需辅助程度',
    instructions: '根据行走时所需辅助程度分级(0-5级)',
    questions: [
      { text: '步行能力分级', type: 'single', options: [
        { text: '0级 不能行走或需2人以上帮助', score: 0 },
        { text: '1级 需1人持续有力搀扶(承重)才能行走', score: 1 },
        { text: '2级 需1人间断搀扶以保持平衡', score: 2 },
        { text: '3级 需1人口头指导或监护,不需身体接触', score: 3 },
        { text: '4级 平地独立行走,上下楼梯需扶手', score: 4 },
        { text: '5级 完全独立,可上下楼梯、斜坡及不平路面', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '0级 无步行能力', advice: '不能行走,需完全依赖' },
        { min: 1, max: 1, level: '1级 大量辅助', advice: '需持续身体辅助才能行走' },
        { min: 2, max: 2, level: '2级 少量辅助', advice: '需间断身体辅助以保持平衡' },
        { min: 3, max: 3, level: '3级 监护', advice: '不需身体接触,但需监护或口头指导' },
        { min: 4, max: 4, level: '4级 基本独立', advice: '平地独立行走,上下楼需辅助' },
        { min: 5, max: 5, level: '5级 完全独立', advice: '完全独立,适应各种复杂路面' }
      ]
    }
  },

  {
    id: 'holden-walking',
    name: 'Holden步行能力分级',
    category: '日常生活',
    description: 'Holden步行功能分级,评估步行能力和独立性',
    instructions: '根据行走时所需辅助程度分级(0-5级)',
    questions: [
      { text: '步行功能分级', type: 'single', options: [
        { text: '0级 不能行走或需2人以上帮助', score: 0 },
        { text: '1级 需1人持续有力搀扶才能行走', score: 1 },
        { text: '2级 需1人间断搀扶以保持平衡', score: 2 },
        { text: '3级 需1人口头指导或监护,不需身体接触', score: 3 },
        { text: '4级 可在平地独立行走,上下楼梯需扶手', score: 4 },
        { text: '5级 完全独立,可上下楼梯、斜坡、不平路面', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '0级 无步行能力', advice: '不能行走,需完全依赖' },
        { min: 1, max: 1, level: '1级 大量辅助', advice: '需大量身体辅助才能行走' },
        { min: 2, max: 2, level: '2级 少量辅助', advice: '需少量身体辅助以保持平衡' },
        { min: 3, max: 3, level: '3级 监护', advice: '不需身体接触,但需监护或口头指导' },
        { min: 4, max: 4, level: '4级 基本独立', advice: '平地独立行走,上下楼需辅助' },
        { min: 5, max: 5, level: '5级 完全独立', advice: '完全独立,适应各种复杂路面' }
      ]
    }
  },

  {
    id: 'frenchay-activity',
    name: 'Frenchay活动指数',
    category: '日常生活',
    description: 'Frenchay Activity Index,15项评估近3-6个月的活动参与水平',
    instructions: '15项活动,按近3-6个月内的参与频率评分(0=未参与,3=高频率),总分45分',
    questions: [
      { text: '1. 准备饭菜', type: 'single', options: [ { text: '经常(每天/几乎每天)', score: 3 }, { text: '有时(每周)', score: 2 }, { text: '很少(每月)', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '2. 洗衣服', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '3. 轻家务', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '4. 重家务', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '5. 购物', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '6. 社交活动', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '7. 室外步行', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '8. 远足/旅行', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '9. 开车/乘车', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '10. 阅读', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '11. 园艺/手工', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '12. 运动/娱乐', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '13. 管理家庭事务', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '14. 工作(有偿/志愿)', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]},
      { text: '15. 探亲访友', type: 'single', options: [ { text: '经常', score: 3 }, { text: '有时', score: 2 }, { text: '很少', score: 1 }, { text: '从不', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 15, level: '低活动水平', advice: '活动参与严重不足,需鼓励参与' },
        { min: 16, max: 30, level: '中等活动水平', advice: '活动参与中等,可逐步增加' },
        { min: 31, max: 45, level: '高活动水平', advice: '活动参与良好' }
      ]
    }
  },

  // ===================== 疼痛评估（6个） =====================

  {
    id: 'vas-pain',
    name: 'VAS视觉模拟量表',
    category: '疼痛',
    description: '通过0-10分视觉模拟尺评估疼痛强度,最常用疼痛评估工具',
    instructions: '在0-10分中选择代表当前疼痛程度的数字,0=无痛,10=最剧烈疼痛',
    questions: [
      { text: '当前疼痛程度', type: 'single', options: [
        { text: '0 无痛', score: 0 }, { text: '1', score: 1 }, { text: '2', score: 2 }, { text: '3 轻度', score: 3 },
        { text: '4', score: 4 }, { text: '5', score: 5 }, { text: '6 中度', score: 6 },
        { text: '7', score: 7 }, { text: '8', score: 8 }, { text: '9', score: 9 }, { text: '10 最剧烈', score: 10 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '无痛', advice: '无疼痛感觉' },
        { min: 1, max: 3, level: '轻度疼痛', advice: '疼痛轻微,不影响日常生活和睡眠' },
        { min: 4, max: 6, level: '中度疼痛', advice: '疼痛明显,影响部分日常活动,睡眠受干扰' },
        { min: 7, max: 10, level: '重度疼痛', advice: '疼痛剧烈,严重影响日常生活和睡眠,需积极镇痛' }
      ]
    }
  },

  {
    id: 'nrs-pain',
    name: 'NRS数字疼痛评级',
    category: '疼痛',
    description: '0-10分数字评级法,操作简便,适合各年龄患者',
    instructions: '用0-10的数字描述当前疼痛程度,0=无痛,10=最剧烈疼痛',
    questions: [
      { text: '当前疼痛程度(0-10)', type: 'single', options: [
        { text: '0 无痛', score: 0 }, { text: '1', score: 1 }, { text: '2', score: 2 }, { text: '3 轻度', score: 3 },
        { text: '4', score: 4 }, { text: '5', score: 5 }, { text: '6 中度', score: 6 },
        { text: '7', score: 7 }, { text: '8', score: 8 }, { text: '9', score: 9 }, { text: '10 最剧烈', score: 10 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '无痛', advice: '无疼痛感觉' },
        { min: 1, max: 3, level: '轻度疼痛', advice: '疼痛轻微,不影响日常生活' },
        { min: 4, max: 6, level: '中度疼痛', advice: '疼痛明显,影响部分活动' },
        { min: 7, max: 10, level: '重度疼痛', advice: '疼痛剧烈,难以忍受,需积极镇痛' }
      ]
    }
  },

  {
    id: 'mcgill',
    name: 'McGill疼痛问卷(简明SF-MPQ)',
    category: '疼痛',
    description: '简明McGill疼痛问卷,15个感觉/情感词描述疼痛性质及强度',
    instructions: '15个疼痛描述词(11个感觉性,4个情感性),每个按程度0-3分,总分45分',
    questions: [
      { text: '1. 跳痛', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '2. 刺痛(放射痛)', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '3. 刀割痛', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '4. 锐痛', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '5. 痉挛痛', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '6. 绞痛(咬痛)', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '7. 烧灼痛', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '8. 隐痛', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '9. 重痛(沉重感)', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '10. 触痛', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '11. 劈裂痛', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '12. 疲惫(耗竭感)', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '13. 令人作呕', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '14. 害怕', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]},
      { text: '15. 惩罚-残酷感', type: 'single', options: [ { text: '无', score: 0 }, { text: '轻度', score: 1 }, { text: '中度', score: 2 }, { text: '重度', score: 3 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 10, level: '轻度疼痛', advice: '疼痛较轻,影响有限' },
        { min: 11, max: 20, level: '中度疼痛', advice: '疼痛明显,需评估干预' },
        { min: 21, max: 30, level: '较重疼痛', advice: '疼痛较重,需积极镇痛' },
        { min: 31, max: 45, level: '重度疼痛', advice: '疼痛严重,需综合镇痛' }
      ]
    }
  },

  {
    id: 'fps',
    name: '面部表情疼痛量表',
    category: '疼痛',
    description: 'Wong-Baker面部表情疼痛量表,通过6种表情评估疼痛,适合儿童及沟通困难者',
    instructions: '选择最符合当前疼痛程度的面部表情(0=无痛,5=最痛)',
    questions: [
      { text: '当前疼痛对应的面部表情', type: 'single', options: [
        { text: '0 笑脸 无痛', score: 0 },
        { text: '1 微痛', score: 1 },
        { text: '2 轻度痛', score: 2 },
        { text: '3 中度痛', score: 3 },
        { text: '4 重度痛', score: 4 },
        { text: '5 哭脸 最痛', score: 5 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 0, level: '无痛', advice: '无疼痛感觉' },
        { min: 1, max: 2, level: '轻度疼痛', advice: '疼痛轻微,不影响生活' },
        { min: 3, max: 3, level: '中度疼痛', advice: '疼痛明显,需评估干预' },
        { min: 4, max: 5, level: '重度疼痛', advice: '疼痛剧烈,需积极镇痛' }
      ]
    }
  },

  {
    id: 'oswestry',
    name: 'Oswestry功能障碍指数',
    category: '疼痛',
    description: '评估腰痛功能障碍程度的金标准,10个维度,总分50分',
    instructions: '10个项目,每项0-5分(部分项目为0-4分),总分越高功能障碍越重。结果常以百分比表示',
    questions: [
      { text: '1. 疼痛强度', type: 'single', options: [ { text: '无疼痛', score: 0 }, { text: '轻微疼痛', score: 1 }, { text: '中度疼痛', score: 2 }, { text: '较严重疼痛', score: 3 }, { text: '严重疼痛', score: 4 }, { text: '最严重疼痛', score: 5 } ]},
      { text: '2. 个人护理', type: 'single', options: [ { text: '完全自理无痛', score: 0 }, { text: '自理有轻微疼痛', score: 1 }, { text: '自理疼痛动作慢', score: 2 }, { text: '需要部分帮助', score: 3 }, { text: '大部分需要帮助', score: 4 }, { text: '完全不能自理', score: 5 } ]},
      { text: '3. 提举物品', type: 'single', options: [ { text: '可提重物无痛', score: 0 }, { text: '可提重物但痛', score: 1 }, { text: '可提中等重物', score: 2 }, { text: '只能提轻物', score: 3 }, { text: '几乎不能提', score: 4 }, { text: '完全不能提', score: 5 } ]},
      { text: '4. 行走', type: 'single', options: [ { text: '行走无限制', score: 0 }, { text: '行走有轻微痛', score: 1 }, { text: '行走疼痛受限制', score: 2 }, { text: '需拐杖或助行器', score: 3 }, { text: '大部分时间卧床', score: 4 }, { text: '完全卧床', score: 5 } ]},
      { text: '5. 坐位', type: 'single', options: [ { text: '随意坐无痛', score: 0 }, { text: '久坐有轻微痛', score: 1 }, { text: '坐1小时后疼痛', score: 2 }, { text: '坐半小时就痛', score: 3 }, { text: '坐10分钟就痛', score: 4 }, { text: '完全不能坐', score: 5 } ]},
      { text: '6. 站立', type: 'single', options: [ { text: '随意站立无痛', score: 0 }, { text: '久站轻微疼痛', score: 1 }, { text: '站1小时后疼痛', score: 2 }, { text: '站半小时就痛', score: 3 }, { text: '站10分钟就痛', score: 4 }, { text: '完全不能站', score: 5 } ]},
      { text: '7. 睡眠', type: 'single', options: [ { text: '睡眠正常无痛', score: 0 }, { text: '睡眠偶有疼痛', score: 1 }, { text: '因疼痛睡眠不足6小时', score: 2 }, { text: '因疼痛睡眠不足4小时', score: 3 }, { text: '因疼痛睡眠不足2小时', score: 4 }, { text: '彻夜痛不能眠', score: 5 } ]},
      { text: '8. 社交活动', type: 'single', options: [ { text: '正常社交无痛', score: 0 }, { text: '社交有轻微疼痛', score: 1 }, { text: '社交中度受限制', score: 2 }, { text: '社交明显受限制', score: 3 }, { text: '只能在家活动', score: 4 }, { text: '因疼痛不出门', score: 5 } ]},
      { text: '9. 旅行', type: 'single', options: [ { text: '可长途旅行无痛', score: 0 }, { text: '旅行有轻微疼痛', score: 1 }, { text: '旅行超过2小时疼痛', score: 2 }, { text: '旅行超过1小时疼痛', score: 3 }, { text: '旅行超过30分钟疼痛', score: 4 }, { text: '完全不能旅行', score: 5 } ]},
      { text: '10. 性生活', type: 'single', options: [ { text: '正常且无痛', score: 0 }, { text: '正常但有轻微痛', score: 1 }, { text: '中度疼痛影响', score: 2 }, { text: '因疼痛明显受限', score: 3 }, { text: '因疼痛很少进行', score: 4 }, { text: '因疼痛完全不能', score: 5 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 4, level: '无功能障碍', advice: '腰部功能正常,日常生活不受限' },
        { min: 5, max: 14, level: '轻度功能障碍', advice: '轻微症状,基本不影响日常生活' },
        { min: 15, max: 24, level: '中度功能障碍', advice: '症状明显,日常生活部分受限' },
        { min: 25, max: 34, level: '重度功能障碍', advice: '功能受限明显,影响工作生活' },
        { min: 35, max: 50, level: '完全功能障碍', advice: '严重功能障碍,卧床或需他人照料' }
      ]
    }
  },

  {
    id: 'rmq',
    name: 'Roland-Morris功能障碍问卷',
    category: '疼痛',
    description: '24项问卷,评估腰痛对日常生活的影响',
    instructions: '24项描述,符合当前情况选"是"(1分),不符合选"否"(0分),总分24分',
    questions: [
      { text: '1. 因腰痛而呆在家里', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '2. 比平时走得慢', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '3. 因腰痛不能做平时在家做的事', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '4. 因腰痛需借助扶手才能上楼梯', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '5. 因腰痛早晨起床时比平时更痛', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '6. 因腰痛不得不更频繁地换姿势', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '7. 必须小心才能避免扭到腰', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '8. 因腰痛发现做任何事都很费力', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '9. 因腰痛不能弯腰', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '10. 因腰痛睡眠不好', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '11. 因腰痛穿衣有困难', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '12. 因腰痛走路时不得不跛行', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '13. 因腰痛觉得应该去看医生', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '14. 因腰痛比平时吃得少', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '15. 因腰痛很难自己穿袜子', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '16. 因腰痛只能坐很短的时间', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '17. 因腰痛工作受到影响', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '18. 因腰痛不能做平时喜欢的事', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '19. 因腰痛比平时更易怒、脾气更坏', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '20. 因腰痛上楼梯有困难', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '21. 因腰痛下楼梯有困难', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '22. 因腰痛只能做很少的家务', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '23. 因腰痛性生活受到影响', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]},
      { text: '24. 因腰痛不得不用拐杖或手杖行走', type: 'single', options: [ { text: '是', score: 1 }, { text: '否', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 5, level: '轻微功能障碍', advice: '腰痛对日常生活影响很小' },
        { min: 6, max: 12, level: '轻度功能障碍', advice: '腰痛有一定影响,但可正常生活' },
        { min: 13, max: 18, level: '中度功能障碍', advice: '腰痛明显影响生活质量' },
        { min: 19, max: 24, level: '重度功能障碍', advice: '腰痛严重影响日常生活,需积极治疗' }
      ]
    }
  },

  // ===================== 认知与心理（8个） =====================

  {
    id: 'mmse',
    name: 'MMSE简易精神状态检查',
    category: '认知与心理',
    description: '筛查认知功能障碍的最常用量表,7个维度,总分30分',
    instructions: '由检查者按标准程序提问,记录各维度得分,总分30分。分数越低认知障碍越重',
    questions: [
      { text: '1. 定向力(时间5分+地点5分)', type: 'single', options: [ { text: '全部正确(10分)', score: 10 }, { text: '正确8-9项', score: 8 }, { text: '正确6-7项', score: 6 }, { text: '正确4-5项', score: 4 }, { text: '正确2-3项', score: 2 }, { text: '正确≤1项', score: 0 } ]},
      { text: '2. 即刻记忆(复述3个词)', type: 'single', options: [ { text: '3词全记住', score: 3 }, { text: '记住2词', score: 2 }, { text: '记住1词', score: 1 }, { text: '0词', score: 0 } ]},
      { text: '3. 注意力与计算(100-7连续5次/倒背WORLD)', type: 'single', options: [ { text: '5次全对', score: 5 }, { text: '对4次', score: 4 }, { text: '对3次', score: 3 }, { text: '对2次', score: 2 }, { text: '对1次', score: 1 }, { text: '全错', score: 0 } ]},
      { text: '4. 短时回忆(回忆3个词)', type: 'single', options: [ { text: '3词全回忆', score: 3 }, { text: '回忆2词', score: 2 }, { text: '回忆1词', score: 1 }, { text: '0词', score: 0 } ]},
      { text: '5. 命名(2物)+复述(1句)', type: 'single', options: [ { text: '全部正确(3分)', score: 3 }, { text: '正确2项', score: 2 }, { text: '正确1项', score: 1 }, { text: '0项', score: 0 } ]},
      { text: '6. 阅读(读并执行命令)', type: 'single', options: [ { text: '闭眼+正确读句(3分)', score: 3 }, { text: '正确2项', score: 2 }, { text: '正确1项', score: 1 }, { text: '0项', score: 0 } ]},
      { text: '7. 书写(自发写句)+视空间(临摹图形)', type: 'single', options: [ { text: '写句正确+图形正确(3分)', score: 3 }, { text: '正确1项', score: 1 }, { text: '0项', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 17, level: '重度认知障碍', advice: '认知功能严重受损,需进一步评估及照护' },
        { min: 18, max: 23, level: '中度认知障碍', advice: '认知功能中度受损,建议进一步评估' },
        { min: 24, max: 27, level: '轻度认知障碍', advice: '认知功能轻度下降,建议随访' },
        { min: 28, max: 30, level: '认知功能正常', advice: '认知功能正常' }
      ]
    }
  },

  {
    id: 'moca',
    name: 'MoCA蒙特利尔认知评估',
    category: '认知与心理',
    description: '筛查轻度认知障碍的敏感量表,7个领域,总分30分(教育≤12年加1分)',
    instructions: '由检查者按标准程序评估7个认知领域,总分30分。≥26分为正常,受教育年限≤12年加1分',
    questions: [
      { text: '1. 视空间与执行(连线+立方体+钟表)', type: 'single', options: [ { text: '全部正确(5分)', score: 5 }, { text: '正确4分', score: 4 }, { text: '正确3分', score: 3 }, { text: '正确2分', score: 2 }, { text: '正确1分', score: 1 }, { text: '0分', score: 0 } ]},
      { text: '2. 命名(狮子/犀牛/骆驼)', type: 'single', options: [ { text: '3项全对', score: 3 }, { text: '对2项', score: 2 }, { text: '对1项', score: 1 }, { text: '0项', score: 0 } ]},
      { text: '3. 注意(数字广度+警觉性+减7)', type: 'single', options: [ { text: '全部正确(6分)', score: 6 }, { text: '正确5分', score: 5 }, { text: '正确4分', score: 4 }, { text: '正确3分', score: 3 }, { text: '正确2分', score: 2 }, { text: '正确≤1分', score: 1 } ]},
      { text: '4. 语言(复述2句+词流畅)', type: 'single', options: [ { text: '全部正确(3分)', score: 3 }, { text: '正确2分', score: 2 }, { text: '正确1分', score: 1 }, { text: '0分', score: 0 } ]},
      { text: '5. 抽象(相似性)', type: 'single', options: [ { text: '2项全对', score: 2 }, { text: '对1项', score: 1 }, { text: '0项', score: 0 } ]},
      { text: '6. 延迟回忆(回忆5词,有提示)', type: 'single', options: [ { text: '5词全对', score: 5 }, { text: '对4词', score: 4 }, { text: '对3词', score: 3 }, { text: '对2词', score: 2 }, { text: '对1词', score: 1 }, { text: '0词', score: 0 } ]},
      { text: '7. 定向(日期/星期/月/年/地点/城市)', type: 'single', options: [ { text: '6项全对', score: 6 }, { text: '对5项', score: 5 }, { text: '对4项', score: 4 }, { text: '对3项', score: 3 }, { text: '对2项', score: 2 }, { text: '对≤1项', score: 1 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 17, level: '重度认知障碍', advice: '认知功能严重受损,需进一步评估' },
        { min: 18, max: 25, level: '轻度认知障碍', advice: '存在认知障碍,建议进一步评估及干预' },
        { min: 26, max: 30, level: '认知功能正常', advice: '认知功能正常' }
      ]
    }
  },

  {
    id: 'gcs',
    name: 'GCS格拉斯哥昏迷评分',
    category: '认知与心理',
    description: '评估意识障碍程度的最常用量表,3个维度,总分3-15分',
    instructions: '评估睁眼(E)、言语(V)、运动(M)三个反应,各维度取最佳反应,总分=三者之和(3-15分)',
    questions: [
      { text: '1. 睁眼反应(E)', type: 'single', options: [
        { text: '4 自动睁眼', score: 4 },
        { text: '3 呼唤睁眼', score: 3 },
        { text: '2 刺痛睁眼', score: 2 },
        { text: '1 不睁眼', score: 1 }
      ]},
      { text: '2. 言语反应(V)', type: 'single', options: [
        { text: '5 定向正确', score: 5 },
        { text: '4 可对话但定向障碍', score: 4 },
        { text: '3 不适当言语', score: 3 },
        { text: '2 不可理解发音', score: 2 },
        { text: '1 不言语', score: 1 }
      ]},
      { text: '3. 运动反应(M)', type: 'single', options: [
        { text: '6 按嘱动作', score: 6 },
        { text: '5 刺痛定位', score: 5 },
        { text: '4 刺痛屈曲(躲避)', score: 4 },
        { text: '3 异常屈曲(去皮质)', score: 3 },
        { text: '2 异常伸展(去脑)', score: 2 },
        { text: '1 不动', score: 1 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 3, max: 8, level: '重度昏迷', advice: '意识严重障碍,需紧急处理及监护' },
        { min: 9, max: 12, level: '中度昏迷', advice: '意识中度障碍,需密切监护' },
        { min: 13, max: 14, level: '轻度意识障碍', advice: '意识轻度障碍,需观察' },
        { min: 15, max: 15, level: '清醒', advice: '意识清醒' }
      ]
    }
  },

  {
    id: 'hama',
    name: 'HAMA汉密尔顿焦虑量表',
    category: '认知与心理',
    description: '汉密尔顿焦虑量表,14项评估焦虑症状严重程度,总分56分',
    instructions: '14个项目,每项0-4分(0=无症状,4=严重),由评估者根据访谈评分,总分56分',
    questions: [
      { text: '1. 焦虑心境', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '2. 紧张', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '3. 害怕', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '4. 失眠', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '5. 记忆/注意', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '6. 抑郁心境', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '7. 肌肉系统症状', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '8. 感觉系统症状', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '9. 心血管系统症状', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '10. 呼吸系统症状', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '11. 胃肠道症状', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '12. 生殖泌尿系统症状', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '13. 植物神经症状', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]},
      { text: '14. 会谈时行为表现', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻', score: 1 }, { text: '2 中', score: 2 }, { text: '3 重', score: 3 }, { text: '4 极重', score: 4 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 7, level: '无焦虑', advice: '无明显焦虑症状' },
        { min: 8, max: 13, level: '可能有焦虑/轻度', advice: '可能有焦虑,建议观察或心理疏导' },
        { min: 14, max: 20, level: '中度焦虑', advice: '中度焦虑,建议心理咨询或治疗' },
        { min: 21, max: 28, level: '明显焦虑', advice: '焦虑明显,建议专业治疗' },
        { min: 29, max: 56, level: '重度焦虑', advice: '严重焦虑,需药物及专业治疗' }
      ]
    }
  },

  {
    id: 'hamd',
    name: 'HAMD汉密尔顿抑郁量表(17项)',
    category: '认知与心理',
    description: '汉密尔顿抑郁量表17项版本,评估抑郁症状严重程度,总分52分',
    instructions: '17个项目,由评估者根据访谈评分。9项为0-4分,8项为0-2分,总分52分',
    questions: [
      { text: '1. 抑郁情绪(0-4)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 只在问及时诉述', score: 1 }, { text: '2 主动诉述', score: 2 }, { text: '3 言语/表情流露', score: 3 }, { text: '4 自发言语及动作显露', score: 4 } ]},
      { text: '2. 罪恶感(0-4)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 责备自己', score: 1 }, { text: '2 认为自己连累他人', score: 2 }, { text: '3 自罪妄想', score: 3 }, { text: '4 伴指责的罪恶妄想', score: 4 } ]},
      { text: '3. 自杀(0-4)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 觉得活着没意义', score: 1 }, { text: '2 想死/希望已死', score: 2 }, { text: '3 自杀念头/暗示', score: 3 }, { text: '4 自杀未遂', score: 4 } ]},
      { text: '4. 入睡困难(0-2)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 主诉偶有入睡困难', score: 1 }, { text: '2 主诉每晚入睡困难', score: 2 } ]},
      { text: '5. 睡眠不深(0-2)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 睡眠浅多梦', score: 1 }, { text: '2 半夜醒来难再入睡', score: 2 } ]},
      { text: '6. 早醒(0-2)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 比平时早醒', score: 1 }, { text: '2 明显早醒且难再睡', score: 2 } ]},
      { text: '7. 工作和兴趣(0-4)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 提问时诉兴趣减退', score: 1 }, { text: '2 主动诉述兴趣减退', score: 2 }, { text: '3 活动减少/犹豫', score: 3 }, { text: '4 完全停滞', score: 4 } ]},
      { text: '8. 迟缓(0-4)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻度迟缓', score: 1 }, { text: '2 明显迟缓', score: 2 }, { text: '3 难以进行访谈', score: 3 }, { text: '4 完全木僵', score: 4 } ]},
      { text: '9. 激越(0-2)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 坐立不安', score: 1 }, { text: '2 搓手/扯发/咬唇', score: 2 } ]},
      { text: '10. 精神性焦虑(0-4)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻度', score: 1 }, { text: '2 中度(肯定焦虑)', score: 2 }, { text: '3 重度', score: 3 }, { text: '4 惊恐发作', score: 4 } ]},
      { text: '11. 躯体性焦虑(0-4)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻度', score: 1 }, { text: '2 中度(肯定症状)', score: 2 }, { text: '3 重度', score: 3 }, { text: '4 严重影响功能', score: 4 } ]},
      { text: '12. 胃肠道症状(0-2)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 食欲减退但无需鼓励进食', score: 1 }, { text: '2 需鼓励或督促进食', score: 2 } ]},
      { text: '13. 全身症状(0-2)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 四肢/背部/头部沉重感', score: 1 }, { text: '2 全身症状明显', score: 2 } ]},
      { text: '14. 性欲症状(0-2)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 轻度减退', score: 1 }, { text: '2 重度减退/丧失', score: 2 } ]},
      { text: '15. 疑病(0-4)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 对身体过分关注', score: 1 }, { text: '2 反复诉述健康问题', score: 2 }, { text: '3 疑病妄想', score: 3 }, { text: '4 伴幻觉的疑病妄想', score: 4 } ]},
      { text: '16. 体重减轻(0-2)', type: 'single', options: [ { text: '0 无', score: 0 }, { text: '1 1周内减轻0.5kg以上', score: 1 }, { text: '2 1周内减轻1kg以上', score: 2 } ]},
      { text: '17. 自知力(0-4)', type: 'single', options: [ { text: '0 无自知力缺损', score: 0 }, { text: '1 知道有病但归因于他人/环境', score: 1 }, { text: '2 承认有病但归因于躯体', score: 2 }, { text: '3 否认有病', score: 3 }, { text: '4 完全否认/拒谈', score: 4 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 7, level: '无抑郁', advice: '无明显抑郁症状' },
        { min: 8, max: 13, level: '轻度抑郁', advice: '轻度抑郁,建议心理疏导' },
        { min: 14, max: 20, level: '中度抑郁', advice: '中度抑郁,建议心理咨询或治疗' },
        { min: 21, max: 28, level: '重度抑郁', advice: '重度抑郁,建议专业治疗' },
        { min: 29, max: 52, level: '极重度抑郁', advice: '极重度抑郁,需药物及综合治疗' }
      ]
    }
  },

  {
    id: 'lotca',
    name: 'LOTCA认知评估',
    category: '认知与心理',
    description: 'Loewenstein作业疗法认知评估,6个领域评估认知功能,总分91分',
    instructions: '由作业治疗师按标准程序评估6个认知领域,总分91分,分数越高认知功能越好',
    questions: [
      { text: '1. 定向(时间+地点)', type: 'single', options: [ { text: '正常(8分)', score: 8 }, { text: '6-7分', score: 6 }, { text: '4-5分', score: 4 }, { text: '2-3分', score: 2 }, { text: '0-1分', score: 0 } ]},
      { text: '2. 知觉(视/听)', type: 'single', options: [ { text: '正常(12分)', score: 12 }, { text: '9-11分', score: 9 }, { text: '6-8分', score: 6 }, { text: '3-5分', score: 3 }, { text: '0-2分', score: 0 } ]},
      { text: '3. 视空间组织', type: 'single', options: [ { text: '正常(18分)', score: 18 }, { text: '13-17分', score: 13 }, { text: '9-12分', score: 9 }, { text: '5-8分', score: 5 }, { text: '0-4分', score: 0 } ]},
      { text: '4. 思维运作(分类/排序/归纳)', type: 'single', options: [ { text: '正常(31分)', score: 31 }, { text: '23-30分', score: 23 }, { text: '15-22分', score: 15 }, { text: '8-14分', score: 8 }, { text: '0-7分', score: 0 } ]},
      { text: '5. 记忆(定向/词语)', type: 'single', options: [ { text: '正常(13分)', score: 13 }, { text: '10-12分', score: 10 }, { text: '6-9分', score: 6 }, { text: '3-5分', score: 3 }, { text: '0-2分', score: 0 } ]},
      { text: '6. 注意与集中', type: 'single', options: [ { text: '正常(9分)', score: 9 }, { text: '7-8分', score: 7 }, { text: '4-6分', score: 4 }, { text: '2-3分', score: 2 }, { text: '0-1分', score: 0 } ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 30, level: '严重认知障碍', advice: '认知功能严重受损,需系统认知康复' },
        { min: 31, max: 55, level: '重度认知障碍', advice: '认知功能重度受损,建议康复训练' },
        { min: 56, max: 70, level: '中度认知障碍', advice: '认知功能中度受损,继续训练' },
        { min: 71, max: 80, level: '轻度认知障碍', advice: '认知功能轻度下降,建议随访' },
        { min: 81, max: 91, level: '认知功能正常', advice: '认知功能基本正常' }
      ]
    }
  },

  {
    id: 'digit-span',
    name: '数字广度测试',
    category: '认知与心理',
    description: 'Wechsler数字广度测试,评估注意力和即时记忆(顺背+倒背)',
    instructions: '检查者按每秒1个数字读数,被试复述。顺背从3位开始递增,倒背从2位开始递增,记录最长正确位数',
    questions: [
      { text: '1. 数字顺背(最长正确位数)', type: 'single', options: [
        { text: '8-9位(优秀)', score: 9 }, { text: '7位', score: 7 }, { text: '6位(正常)', score: 6 },
        { text: '5位', score: 5 }, { text: '4位', score: 4 }, { text: '3位(下降)', score: 3 },
        { text: '≤2位(异常)', score: 2 }
      ]},
      { text: '2. 数字倒背(最长正确位数)', type: 'single', options: [
        { text: '7-8位(优秀)', score: 8 }, { text: '6位', score: 6 }, { text: '5位(正常)', score: 5 },
        { text: '4位', score: 4 }, { text: '3位', score: 3 }, { text: '2位(下降)', score: 2 },
        { text: '≤1位(异常)', score: 1 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 5, level: '注意/记忆明显受损', advice: '注意力和工作记忆明显受损,建议进一步评估' },
        { min: 6, max: 8, level: '注意/记忆下降', advice: '注意力和记忆下降,建议认知训练' },
        { min: 9, max: 11, level: '正常下限', advice: '基本正常,注意维持' },
        { min: 12, max: 17, level: '正常', advice: '注意力和即时记忆正常' }
      ]
    }
  },

  {
    id: 'trail-making',
    name: '连线测试(TMT)',
    category: '认知与心理',
    description: 'Trail Making Test,评估视觉搜索、注意力、执行功能及认知灵活性',
    instructions: 'TMT-A:按1-25顺序连线数字并计时;TMT-B:交替连接数字1-13和字母A-L并计时。按完成时间评分',
    questions: [
      { text: '1. TMT-A完成时间(数字连线1-25)', type: 'single', options: [
        { text: '<30秒(优秀)', score: 5 }, { text: '30-60秒', score: 4 }, { text: '60-90秒', score: 3 },
        { text: '90-120秒', score: 2 }, { text: '>120秒', score: 1 }, { text: '不能完成', score: 0 }
      ]},
      { text: '2. TMT-B完成时间(数字字母交替连线)', type: 'single', options: [
        { text: '<60秒(优秀)', score: 5 }, { text: '60-90秒', score: 4 }, { text: '90-150秒', score: 3 },
        { text: '150-240秒', score: 2 }, { text: '>240秒', score: 1 }, { text: '不能完成', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 2, level: '执行功能严重受损', advice: '注意与执行功能严重受损,建议进一步评估' },
        { min: 3, max: 5, level: '执行功能受损', advice: '注意与执行功能下降,建议认知训练' },
        { min: 6, max: 7, level: '正常下限', advice: '基本正常,注意维持' },
        { min: 8, max: 10, level: '正常', advice: '注意与执行功能正常' }
      ]
    }
  },

  // ===================== 吞咽与言语（5个） =====================

  {
    id: 'kubota-water',
    name: '洼田饮水试验',
    category: '吞咽与言语',
    description: 'Kubota饮水试验,通过饮用30ml温水评估吞咽功能,临床常用吞咽筛查',
    instructions: '患者端坐,嘱其饮用30ml温开水,观察饮水时间及有无呛咳。检查者注意防护,谨防误吸',
    questions: [
      { text: '饮用30ml温水的过程', type: 'single', options: [
        { text: '5秒内一次喝完,无呛咳(1级)', score: 5 },
        { text: '5秒以上分两次喝完,无呛咳(2级)', score: 4 },
        { text: '5秒以上一次喝完,有呛咳(3级)', score: 3 },
        { text: '5秒以上分两次以上喝完,有呛咳(4级)', score: 2 },
        { text: '频繁呛咳,难以全部咽下(5级)', score: 1 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 1, max: 1, level: '严重吞咽障碍', advice: '5级,需禁食并鼻饲管喂养,行进一步吞咽评估' },
        { min: 2, max: 2, level: '明显吞咽障碍', advice: '4级,需饮食调整及吞咽康复训练' },
        { min: 3, max: 3, level: '中度吞咽障碍', advice: '3级,需饮食调整及吞咽训练' },
        { min: 4, max: 4, level: '可疑吞咽障碍', advice: '2级,可行进一步评估,注意进食安全' },
        { min: 5, max: 5, level: '正常', advice: '1级,吞咽功能正常' }
      ]
    }
  },

  {
    id: 'guss',
    name: 'GUSS吞咽评估',
    category: '吞咽与言语',
    description: 'Gugging Swallowing Screen,奥地利Gugging开发的床旁吞咽筛查,含初筛与直接吞咽测试',
    instructions: '第一部分初步筛查(意识、头控制、呼吸、唇闭合、软腭、喉、吞咽口水、舌、咳嗽、嗓音);第二部分依次给予半流质、液体、固体吞咽测试',
    questions: [
      { text: '1. 初步筛查(意识、头控制、呼吸、唇闭合、软腭、喉、吞咽口水、舌、咳嗽、嗓音10项)', type: 'single', options: [
        { text: '10项全部正常(20分)', score: 20 },
        { text: '8-9项正常(15-19分)', score: 15 },
        { text: '6-7项正常(10-14分)', score: 10 },
        { text: '0-5项正常(<10分)', score: 0 }
      ]},
      { text: '2. 半流质吞咽(糊状食物1-3-5-10ml)', type: 'single', options: [
        { text: '全部剂量无异常(5分)', score: 5 },
        { text: '小剂量可,大剂量异常(3分)', score: 3 },
        { text: '完全不能吞咽(0分)', score: 0 }
      ]},
      { text: '3. 液体吞咽(1-3-5-10ml)', type: 'single', options: [
        { text: '全部剂量无异常(5分)', score: 5 },
        { text: '小剂量可,大剂量异常(3分)', score: 3 },
        { text: '完全不能吞咽(0分)', score: 0 }
      ]},
      { text: '4. 固体吞咽(面包/饼干)', type: 'single', options: [
        { text: '全部无异常(5分)', score: 5 },
        { text: '吞咽困难但可完成(3分)', score: 3 },
        { text: '完全不能吞咽(0分)', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 9, level: '严重吞咽障碍', advice: '高风险误吸,需禁食,鼻饲管喂养及吞咽康复' },
        { min: 10, max: 14, level: '中度吞咽障碍', advice: '需饮食调整(糊状食物),密切观察,吞咽训练' },
        { min: 15, max: 19, level: '轻度吞咽障碍', advice: '可进食,注意饮食质地调整,密切观察' },
        { min: 20, max: 20, level: '正常', advice: '吞咽功能正常,可正常进食' }
      ]
    }
  },

  {
    id: 'frenchay',
    name: 'Frenchay构音障碍评估',
    category: '吞咽与言语',
    description: 'Frenchay Dysarthria Assessment,系统性评估构音障碍,涵盖8个功能域',
    instructions: '评估反射、呼吸、唇、颌、软腭、喉、舌、言语可懂度8个维度,每项a-e级(a=正常,e=严重障碍)',
    questions: [
      { text: '1. 反射(咳嗽、吞咽、流涎)', type: 'single', options: [
        { text: 'a级 正常', score: 4 }, { text: 'b级 轻度异常', score: 3 }, { text: 'c级 中度异常', score: 2 }, { text: 'd级 明显异常', score: 1 }, { text: 'e级 严重异常', score: 0 }
      ]},
      { text: '2. 呼吸(静息、言语时)', type: 'single', options: [
        { text: 'a级 正常', score: 4 }, { text: 'b级 轻度异常', score: 3 }, { text: 'c级 中度异常', score: 2 }, { text: 'd级 明显异常', score: 1 }, { text: 'e级 严重异常', score: 0 }
      ]},
      { text: '3. 唇(静止、运动、交替)', type: 'single', options: [
        { text: 'a级 正常', score: 4 }, { text: 'b级 轻度异常', score: 3 }, { text: 'c级 中度异常', score: 2 }, { text: 'd级 明显异常', score: 1 }, { text: 'e级 严重异常', score: 0 }
      ]},
      { text: '4. 颌(静止、运动)', type: 'single', options: [
        { text: 'a级 正常', score: 4 }, { text: 'b级 轻度异常', score: 3 }, { text: 'c级 中度异常', score: 2 }, { text: 'd级 明显异常', score: 1 }, { text: 'e级 严重异常', score: 0 }
      ]},
      { text: '5. 软腭(静止、运动、鼻漏气)', type: 'single', options: [
        { text: 'a级 正常', score: 4 }, { text: 'b级 轻度异常', score: 3 }, { text: 'c级 中度异常', score: 2 }, { text: 'd级 明显异常', score: 1 }, { text: 'e级 严重异常', score: 0 }
      ]},
      { text: '6. 喉(音高、音量、呼吸)', type: 'single', options: [
        { text: 'a级 正常', score: 4 }, { text: 'b级 轻度异常', score: 3 }, { text: 'c级 中度异常', score: 2 }, { text: 'd级 明显异常', score: 1 }, { text: 'e级 严重异常', score: 0 }
      ]},
      { text: '7. 舌(静止、运动、交替)', type: 'single', options: [
        { text: 'a级 正常', score: 4 }, { text: 'b级 轻度异常', score: 3 }, { text: 'c级 中度异常', score: 2 }, { text: 'd级 明显异常', score: 1 }, { text: 'e级 严重异常', score: 0 }
      ]},
      { text: '8. 言语可懂度(单词、句、会话)', type: 'single', options: [
        { text: 'a级 正常', score: 4 }, { text: 'b级 轻度异常', score: 3 }, { text: 'c级 中度异常', score: 2 }, { text: 'd级 明显异常', score: 1 }, { text: 'e级 严重异常', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 8, level: '极重度构音障碍', advice: '构音功能严重受损,需替代沟通及系统构音训练' },
        { min: 9, max: 16, level: '重度构音障碍', advice: '构音明显受损,需系统言语治疗' },
        { min: 17, max: 24, level: '中度构音障碍', advice: '构音中度受损,建议言语训练' },
        { min: 25, max: 28, level: '轻度构音障碍', advice: '构音轻度异常,建议训练及随访' },
        { min: 29, max: 32, level: '正常', advice: '构音功能正常' }
      ]
    }
  },

  {
    id: 'bdae',
    name: '波士顿诊断性失语检查',
    category: '吞咽与言语',
    description: 'Boston Diagnostic Aphasia Examination,BDAE,失语症综合性诊断评估,确定失语类型与严重程度',
    instructions: '评估自发言语、听理解、复述、命名、阅读、书写6大领域,各项0-5分(0=完全不能,5=正常)',
    questions: [
      { text: '1. 自发言语(对话、图片描述)', type: 'single', options: [
        { text: '5分 流畅、信息丰富', score: 5 }, { text: '4分 流畅但信息稍少', score: 4 }, { text: '3分 流畅但信息明显少', score: 3 }, { text: '2分 不流畅电报式', score: 2 }, { text: '1分 仅能发音', score: 1 }, { text: '0分 不能发声', score: 0 }
      ]},
      { text: '2. 听理解(是/否问题、听辨指物、执行命令)', type: 'single', options: [
        { text: '5分 全部理解', score: 5 }, { text: '4分 大部分理解', score: 4 }, { text: '3分 简单指令理解', score: 3 }, { text: '2分 部分理解', score: 2 }, { text: '1分 几乎不理解', score: 1 }, { text: '0分 完全不理解', score: 0 }
      ]},
      { text: '3. 复述(词、句)', type: 'single', options: [
        { text: '5分 准确复述', score: 5 }, { text: '4分 大部分准确', score: 4 }, { text: '3分 简单词可复述', score: 3 }, { text: '2分 偶可复述单字', score: 2 }, { text: '1分 仅可发音', score: 1 }, { text: '0分 不能复述', score: 0 }
      ]},
      { text: '4. 命名(物品、图片、反应命名)', type: 'single', options: [
        { text: '5分 全部正确', score: 5 }, { text: '4分 大部分正确', score: 4 }, { text: '3分 常见物可命名', score: 3 }, { text: '2分 偶可命名', score: 2 }, { text: '1分 极少', score: 1 }, { text: '0分 不能命名', score: 0 }
      ]},
      { text: '5. 阅读(字、词、句、段落理解)', type: 'single', options: [
        { text: '5分 全部理解', score: 5 }, { text: '4分 大部分理解', score: 4 }, { text: '3分 简单句理解', score: 3 }, { text: '2分 单字理解', score: 2 }, { text: '1分 偶可认字', score: 1 }, { text: '0分 不能阅读', score: 0 }
      ]},
      { text: '6. 书写(抄写、听写、自发书写)', type: 'single', options: [
        { text: '5分 正常书写', score: 5 }, { text: '4分 大部分正确', score: 4 }, { text: '3分 简单词可写', score: 3 }, { text: '2分 偶可写字', score: 2 }, { text: '1分 仅可签名', score: 1 }, { text: '0分 不能书写', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 6, level: '极重度失语', advice: '语言功能严重丧失,需替代沟通方式训练' },
        { min: 7, max: 12, level: '重度失语', advice: '语言功能重度受损,需系统言语治疗' },
        { min: 13, max: 18, level: '中度失语', advice: '语言功能中度受损,需言语康复训练' },
        { min: 19, max: 24, level: '轻度失语', advice: '语言功能轻度受损,建议训练及随访' },
        { min: 25, max: 30, level: '正常', advice: '语言功能基本正常' }
      ]
    }
  },

  {
    id: 'rois',
    name: 'ROIS吞咽筛查',
    category: '吞咽与言语',
    description: 'Rehabilitation-Oriented Initial Swallowing Screen,康复导向的初始吞咽筛查,用于床旁快速识别误吸风险',
    instructions: '依次评估意识状态、头部控制、呼吸、口腔卫生、唾液吞咽、发声、舌唇运动及3ml饮水试验并观察呛咳',
    questions: [
      { text: '1. 意识状态', type: 'single', options: [
        { text: '清醒,可配合', score: 2 }, { text: '嗜睡但可唤醒配合', score: 1 }, { text: '不能配合', score: 0 }
      ]},
      { text: '2. 头部控制与坐位', type: 'single', options: [
        { text: '可独立坐位保持头部直立', score: 2 }, { text: '需支撑维持', score: 1 }, { text: '不能维持', score: 0 }
      ]},
      { text: '3. 呼吸模式', type: 'single', options: [
        { text: '平稳,无气促', score: 2 }, { text: '轻度气促', score: 1 }, { text: '明显呼吸困难或湿性啰音', score: 0 }
      ]},
      { text: '4. 口腔卫生与唾液', type: 'single', options: [
        { text: '清洁,无唾液潴留', score: 2 }, { text: '轻度唾液潴留', score: 1 }, { text: '大量唾液潴留或流涎', score: 0 }
      ]},
      { text: '5. 唾液吞咽(空咽)', type: 'single', options: [
        { text: '流畅无异常', score: 2 }, { text: '轻度费力', score: 1 }, { text: '不能吞咽或呛咳', score: 0 }
      ]},
      { text: '6. 发声(发"啊")', type: 'single', options: [
        { text: '清晰无湿性嘶哑', score: 2 }, { text: '轻度嘶哑', score: 1 }, { text: '湿性嘶哑或不能发声', score: 0 }
      ]},
      { text: '7. 舌与唇运动', type: 'single', options: [
        { text: '灵活充分', score: 2 }, { text: '轻度受限', score: 1 }, { text: '明显受限', score: 0 }
      ]},
      { text: '8. 3ml饮水试验(小口饮水)', type: 'single', options: [
        { text: '无呛咳及嗓音改变', score: 2 }, { text: '轻度呛咳或嗓音改变', score: 1 }, { text: '明显呛咳或不能吞咽', score: 0 }
      ]}
    ],
    scoring: {
      type: 'sum',
      levels: [
        { min: 0, max: 6, level: '高误吸风险', advice: '提示吞咽障碍,需禁食并行进一步吞咽评估' },
        { min: 7, max: 10, level: '中度误吸风险', advice: '需饮食调整及吞咽训练,密切观察' },
        { min: 11, max: 14, level: '低误吸风险', advice: '可谨慎进食,注意观察' },
        { min: 15, max: 16, level: '正常', advice: '吞咽功能基本正常' }
      ]
    }
  }
];