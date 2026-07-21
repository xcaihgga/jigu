// 压缩 data.js 为 data.min.json
const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('/workspace/data.js', 'utf8');
const sandbox = {};
vm.createContext(sandbox);
const wrapped = '(function(){' + code + '; return {muscles: muscles, diseases: diseases};})()';
const result = vm.runInContext(wrapped, sandbox);
const muscles = result.muscles;
const diseases = result.diseases;

// 只保留学习软件需要的字段
const mFields = ['身体区域','肌肉名称','主要功能','常见损伤','评估方法','诊断标准','急性期处理','康复训练','激痛点','治疗禁忌','红旗征','关联骨科疾病','疾病分类','疾病分级','典型症状与体征','影像学特征','鉴别诊断','治疗方案','康复训练方案','康复禁忌动作','预后转归'];
const dFields = ['具体病症','部位','疾病分类','疾病分级','ICD-10编码','红旗征/紧急预警','典型症状与体征','影像学特征','鉴别诊断','常用评估量表','治疗方案','手术指征','药物治疗','注射治疗','康复训练方案','康复禁忌动作','预后转归','常见并发症','生活方式调整','预防措施'];

function cleanVal(v, maxLen) {
  if (!v) return '';
  let s = String(v).replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
  if (maxLen && s.length > maxLen) s = s.substring(0, maxLen) + '…';
  return s;
}

const ms = muscles.map(function(m) {
  var o = {};
  mFields.forEach(function(f) {
    var v = cleanVal(m[f], 150);
    if (v) o[f] = v;
  });
  return o;
});

const ds = diseases.map(function(d) {
  var o = {};
  dFields.forEach(function(f) {
    var v = cleanVal(d[f], 200);
    if (v) o[f] = v;
  });
  return o;
});

const json = JSON.stringify({ ms: ms, ds: ds });
fs.writeFileSync('/workspace/data.min.json', json);
console.log('Muscles:', ms.length, 'Diseases:', ds.length);
console.log('data.min.json:', (json.length / 1024).toFixed(1), 'KB');

var { execSync } = require('child_process');
var gz = execSync('gzip -c /workspace/data.min.json | wc -c').toString().trim();
console.log('Gzipped:', (parseInt(gz) / 1024).toFixed(1), 'KB');
