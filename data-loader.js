// ============================================================
// data-loader.js - 异步加载 data.min.json 数据
// 数据格式: {"ms": [{肌肉对象}], "ds": [{疾病对象}]}
// 加载完成后设置 window.muscles 和 window.diseases
// 并触发 window 'dataReady' 事件
// ============================================================

(function () {
  'use strict';

  var _loadStartTime = Date.now();
  var _loadTimeout = null;
  var _retryCount = 0;
  var _maxRetries = 3;
  var _isLoading = false;

  // 更新加载提示文字
  function setLoadingText(text, sub) {
    var el = document.getElementById('loadingText');
    var subEl = document.getElementById('loadingSub');
    if (el && text) { el.textContent = text; }
    if (subEl && sub) { subEl.textContent = sub; }
  }

  // 显示错误提示
  function showError(msg, sub) {
    window.__errorShown = true;
    var errOverlay = document.getElementById('errorOverlay');
    var errText = document.getElementById('errorText');
    var errSub = document.getElementById('errorSub');
    var loading = document.getElementById('loadingOverlay');
    if (loading) { loading.style.display = 'none'; }
    if (errText && msg) { errText.textContent = msg; }
    if (errSub && sub) { errSub.textContent = sub; }
    if (errOverlay) { errOverlay.style.display = 'flex'; }
  }

  // 暴露错误显示函数给 app.js 使用（超时调用）
  window.__showLoadError = showError;

  // 清除加载超时定时器
  function clearLoadTimeout() {
    if (_loadTimeout) {
      clearTimeout(_loadTimeout);
      _loadTimeout = null;
    }
  }

  // 解析肌肉数据，确保字段完整
  function parseMuscles(ms) {
    if (!ms || !ms.length) { return []; }
    var result = [];
    for (var i = 0; i < ms.length; i++) {
      var m = ms[i] || {};
      result.push({
        身体区域: m['身体区域'] || '',
        肌肉名称: m['肌肉名称'] || '',
        主要功能: m['主要功能'] || '',
        常见损伤: m['常见损伤'] || '',
        评估方法: m['评估方法'] || '',
        诊断标准: m['诊断标准'] || '',
        急性期处理: m['急性期处理'] || '',
        康复训练: m['康复训练'] || '',
        激痛点: m['激痛点'] || '',
        治疗禁忌: m['治疗禁忌'] || '',
        红旗征: m['红旗征'] || '',
        关联骨科疾病: m['关联骨科疾病'] || '',
        疾病分类: m['疾病分类'] || '',
        疾病分级: m['疾病分级'] || '',
        典型症状与体征: m['典型症状与体征'] || '',
        影像学特征: m['影像学特征'] || '',
        鉴别诊断: m['鉴别诊断'] || '',
        治疗方案: m['治疗方案'] || '',
        康复训练方案: m['康复训练方案'] || '',
        康复禁忌动作: m['康复禁忌动作'] || '',
        预后转归: m['预后转归'] || ''
      });
    }
    return result;
  }

  // 解析疾病数据，确保字段完整
  function parseDiseases(ds) {
    if (!ds || !ds.length) { return []; }
    var result = [];
    for (var i = 0; i < ds.length; i++) {
      var d = ds[i] || {};
      result.push({
        具体病症: d['具体病症'] || '',
        部位: d['部位'] || '',
        疾病分类: d['疾病分类'] || '',
        疾病分级: d['疾病分级'] || '',
        ICD10编码: d['ICD-10编码'] || d['ICD10编码'] || '',
        红旗征: d['红旗征/紧急预警'] || d['红旗征'] || '',
        典型症状与体征: d['典型症状与体征'] || '',
        影像学特征: d['影像学特征'] || '',
        鉴别诊断: d['鉴别诊断'] || '',
        常用评估量表: d['常用评估量表'] || '',
        治疗方案: d['治疗方案'] || '',
        手术指征: d['手术指征'] || '',
        药物治疗: d['药物治疗'] || '',
        注射治疗: d['注射治疗'] || '',
        康复训练方案: d['康复训练方案'] || '',
        康复禁忌动作: d['康复禁忌动作'] || '',
        预后转归: d['预后转归'] || '',
        常见并发症: d['常见并发症'] || '',
        生活方式调整: d['生活方式调整'] || '',
        预防措施: d['预防措施'] || ''
      });
    }
    return result;
  }

  // 异步加载数据主流程
  function loadData() {
    if (_isLoading) { return; }
    _isLoading = true;

    setLoadingText('正在加载数据...', '正在准备肌骨康复知识库');

    clearLoadTimeout();
    _loadTimeout = setTimeout(function () {
      if (!window.__dataReady) {
        handleLoadFailure('加载超时', '网络连接不稳定，请检查网络后点击重新加载');
      }
    }, 30000);

    try {
      var xhr = new XMLHttpRequest();
      var url = 'data.min.json?v=' + Date.now();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          _isLoading = false;
          clearLoadTimeout();
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              var data = xhr.response;
              if (!data) {
                data = JSON.parse(xhr.responseText);
              }
              onDataLoaded(data);
            } catch (e) {
              handleLoadFailure('数据解析失败', 'JSON 格式错误');
            }
          } else {
            handleLoadFailure('数据加载失败', 'HTTP ' + xhr.status + ' ' + (xhr.statusText || ''));
          }
        }
      };

      xhr.onerror = function () {
        _isLoading = false;
        clearLoadTimeout();
        handleLoadFailure('网络错误', '无法连接到服务器，请检查网络');
      };

      xhr.ontimeout = function () {
        _isLoading = false;
        clearLoadTimeout();
        handleLoadFailure('请求超时', '服务器响应时间过长');
      };

      xhr.timeout = 25000;
      xhr.send();
    } catch (e) {
      _isLoading = false;
      clearLoadTimeout();
      handleLoadFailure('加载失败', e.message || '未知错误');
    }
  }

  // 加载失败处理（支持重试）
  function handleLoadFailure(msg, sub) {
    _retryCount++;
    if (_retryCount <= _maxRetries) {
      var delay = Math.pow(2, _retryCount) * 1000;
      console.warn('YZX load failed, retrying ' + _retryCount + '/' + _maxRetries + ' in ' + delay + 'ms');
      setTimeout(function () {
        setLoadingText('重试加载...', '第 ' + _retryCount + ' 次尝试');
        loadData();
      }, delay);
    } else {
      showError(msg, sub);
    }
  }

  // 数据加载成功回调
  function onDataLoaded(data) {
    try {
      setLoadingText('数据解析中...', '正在整理知识点');
      var ms = (data && data.ms) ? data.ms : [];
      var ds = (data && data.ds) ? data.ds : [];

      window.muscles = parseMuscles(ms);
      window.diseases = parseDiseases(ds);

      // 标记数据已就绪
      window.__dataReady = true;

      // 触发数据就绪事件
      window.dispatchEvent(new Event('dataReady'));

      setLoadingText('加载完成', '即将进入学习');
    } catch (e) {
      showError('数据处理失败', e.message || '解析异常');
    }
  }

  // 自动启动加载
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
  } else {
    loadData();
  }
})();
