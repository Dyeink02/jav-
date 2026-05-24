/* GENERATED JS - DO NOT EDIT. Edit desktop/common or desktop/renderer sources. */
(function(){
"use strict";

/* ==== common/text/appInfo.js ==== */
// Shared app identity text for the active desktop frontend/runtime bundle.
// Product title, subtitle, default output names, and log-name prefixes should
// stay owned here so renderer fallback text and build artifacts do not drift.
//
// Ownership summary:
// 1) define shared app identity text and default output naming
// 2) keep renderer/runtime bundles on one app-info source
// 3) centralize display-oriented app metadata away from controllers
//
// File map for maintainers:
// 1) product title/version/base-url defaults
// 2) shared output/log filename defaults
// 3) exported app-info payload registry
(function registerDesktopAppInfo(globalScope) {
  const APP_VERSION = '0.30';
  const APP_TITLE = 'JAV自动集成源';
  const DEFAULT_BASE_URL = 'https://www.javbus.com';

  const APP_INFO = {
    title: APP_TITLE,
    version: APP_VERSION,
    subtitle: '基于开源项目：raawaa',
    eyebrow: 'Windows EXE',
    defaultBaseUrl: DEFAULT_BASE_URL,
    outputFolderName: `${APP_TITLE}输出`
  };

  const FILE_NAMES = {
    magnetFilename: 'magnet-links.txt',
    latestLogFilename: 'latest-log.txt',
    taskLogPrefix: '运行日志'
  };

  const URL_SUGGESTIONS = [
    'https://www.javbus.com/',
    'https://www.busjav.cyou',
    'https://www.fanbus.bond',
    'https://www.cdnbus.bond'
  ];

  const payload = {
    APP_INFO,
    FILE_NAMES,
    URL_SUGGESTIONS
  };

  const registry = (globalScope.__desktopTextModules = globalScope.__desktopTextModules || {});
  Object.assign(registry, payload);

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = payload;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/text/taskConfig.js ==== */
// Active task-config text source for shared crawler templates and status labels.
// Renderer and compatibility helpers should consume this instead of carrying
// separate task-state vocabulary.
//
// Ownership summary:
// 1) define shared crawler status labels and task templates
// 2) keep renderer and compatibility helpers on one task vocabulary source
// 3) centralize task preset copy away from controllers and runtime code
//
// File map for maintainers:
// 1) shared crawl status/failure label maps
// 2) bundled task template presets
// 3) exported task-config payload registry
(function registerDesktopTaskConfig(globalScope) {
  // Shared task presets and status labels live here so renderer and
  // compatibility helpers do not maintain separate copies.
  const STATUS_LABELS = {
    idle: '待机',
    starting: '启动中',
    running: '运行中',
    stopping: '终止中',
    completed: '已完成',
    incomplete: '未完成',
    stopped: '已终止',
    error: '异常'
  };

  const FAILURE_CATEGORY_LABELS = {
    blocked: '验证拦截',
    network: '网络超时',
    empty: '空响应',
    parse: '解析失败',
    cloudflare: 'Cloudflare',
    unknown: '未知异常',
    stopped: '已终止'
  };

  const TASK_TEMPLATES = {
    balanced: {
      label: '均衡模板',
      parallel: 2,
      delay: 2,
      timeout: 30000,
      itemsPerPage: 30,
      cloudflare: false,
      secondValidation: true
    },
    stable: {
      label: '稳定模板',
      parallel: 1,
      delay: 4,
      timeout: 45000,
      itemsPerPage: 30,
      cloudflare: true,
      secondValidation: true
    },
    recovery: {
      label: '恢复模板',
      parallel: 1,
      delay: 3,
      timeout: 45000,
      itemsPerPage: 30,
      cloudflare: true,
      secondValidation: true
    }
  };

  const payload = {
    STATUS_LABELS,
    FAILURE_CATEGORY_LABELS,
    TASK_TEMPLATES
  };

  const registry = (globalScope.__desktopTextModules = globalScope.__desktopTextModules || {});
  Object.assign(registry, payload);

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = payload;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/text/versionHistory.js ==== */
// Shared version-history text used by the active desktop hero panels.
// Renderer fallback text must stay aligned with this list so packaging/runtime
// startup failures do not silently revert operators to stale release notes.
//
// Ownership summary:
// 1) define the shared release/version timeline text shown in desktop surfaces
// 2) keep renderer fallback and packaged text aligned to one source
// 3) avoid scattering version-history copy across multiple UI modules
//
// File map for maintainers:
// 1) shared version-history entry list
// 2) exported version-history payload registry

(function registerDesktopVersionHistory(globalScope) {
  const VERSION_HISTORY = [
    { version: '0.1', summary: '修复安装流程，实现基础运行能力' },
    { version: '0.2', summary: '桌面 GUI 上线，Windows 即开即用' },
    { version: '0.3', summary: '新增配置选项，界面布局优化' },
    { version: '0.4', summary: '增强分页校验，优化补抓逻辑' },
    { version: '0.5', summary: '全面汉化界面与交互提示' },
    { version: '0.6', summary: '新增补爬功能，支持磁力导出' },
    { version: '0.7', summary: '修复日志乱码问题' },
    { version: '0.8', summary: '任务状态落盘，支持断点续爬' },
    { version: '0.9', summary: '代码注释完善，显示体验优化' },
    { version: '0.10', summary: '优化解析容错，强化补抓去重' },
    { version: '0.11', summary: '新增备用网址，修复多项已知问题' },
    { version: '0.12', summary: '大任务稳定性增强，操作体验优化' },
    { version: '0.13', summary: '分页缺口补查，批量写盘减少 IO' },
    { version: '0.14', summary: '三段式补抓队列，提升补抓效率' },
    { version: '0.15', summary: '抓取速度大幅提升，动态任务栏上线' },
    { version: '0.16', summary: '精简输出文件，升级重试策略' },
    { version: '0.17', summary: '全新界面设计，修复入队问题' },
    { version: '0.18', summary: 'FANZA 女优排行榜，一键参数填充' },
    { version: '0.19', summary: '代码解耦优化，支持自定义背景' },
    { version: '0.20', summary: '多渠道榜单获取、榜单多元化，并修复抓取优先级等已知问题' },
    { version: '0.21', summary: '新增磁力内容校验（广告过滤），自动跳过广告包/杂文件包并切换下一条候选磁力' },
    { version: '0.22', summary: '爬虫与视频整理一体化增强，新增广告处理方式可视化切换、遗漏番号补抓对账与学习链路优化' },
    { version: '0.23', summary: '内嵌 AI 广告检测模型上线，新增启停切换与模型选择（MobileNetV3/SqueezeNet/YOLOv8n）' },
    { version: '0.24', summary: '模块联动增强，整理版本更新与爬虫同步，配置面板精简与日志保留策略改进' },
    { version: '0.25', summary: '抓取进度面板视觉升级，运行状态配色复刻整理结果风格，两模块 UI 统一' },
    { version: '0.26', summary: '代码架构模块化解耦：IPC通道常量化、统一错误分类体系、Proxy响应式状态管理、UI控制器拆分（form/organizer分层），统一日志格式规范' },
    { version: '0.27', summary: 'AV订阅板块相关内容更新：主女优识别、手动订阅兜底、清空订阅与界面联动优化' },
    { version: '0.30', summary: '核心架构迁移至Go语言开发，软件体积从200MB减小至15MB，爬虫执行引擎全面Go原生接管' }
  ];

  const payload = { VERSION_HISTORY };
  const registry = (globalScope.__desktopTextModules = globalScope.__desktopTextModules || {});
  Object.assign(registry, payload);

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = payload;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/text/uiTextSource.js ==== */
// Active UI text source for the current desktop frontend.
// Static page copy should default here before any renderer-shell normalization
// or runtime summary layer tries to override wording.
//
// Ownership summary:
// 1) provide canonical shared UI text/schema for renderer modules
// 2) keep product wording centralized outside controllers
// 3) support fallback/bootstrap layers by stable schema, not duplicate policy
//
// File map for maintainers:
// 1) static hero/panel/field/toggle text schema
// 2) proxy/status/advice/help wording groups
// 3) exported UI text registry payload
(function registerDesktopUiTextSource(globalScope) {
  const registry = (globalScope.__desktopTextModules = globalScope.__desktopTextModules || {});
  const isNode = typeof module !== 'undefined' && module.exports;
  const appInfoModule = isNode ? require('./appInfo.js') : registry;
  const APP_INFO = appInfoModule.APP_INFO || {};
  const DEFAULT_BASE_URL = APP_INFO.defaultBaseUrl || 'https://www.javbus.com';

  // UI text ownership rule:
  // - static Chinese product copy should live here first
  // - renderer shell/controllers may normalize a few layout-level labels
  // - Go runtime should emit run-state summaries, not become the default home
  //   for ordinary static UI wording
  //
  // If a label is wrong on screen, debug in this order:
  // 1) uiTextSource / appText
  // 2) HTML partial placeholders
  // 3) rendererShellController runtime normalization
  // 4) Go runtime summary payloads
  //
  // This ordering exists because several earlier乱码 issues were caused by
  // runtime overrides reintroducing bad literals after the source text was
  // already fixed.
  //
  // Settings/runtime-derived summaries may still append dynamic text later, but
  // they should not replace this file as the default home of static UI copy.

const UI_TEXT_SOURCE = {
    hero: {
      eyebrow: APP_INFO.eyebrow,
      title: APP_INFO.title,
      subtitle: APP_INFO.subtitle,
      sourcePrefix: APP_INFO.sourcePrefix,
      versionTitle: '版本更新',
      connectionTip: '建议全程开启稳定的 VPN / 代理环境，可有效提升抓取速度、稳定性与异常恢复成功率。'
    },
    panels: {
      setupKicker: '任务配置',
      setupTitle: '抓取设置',
      statusKicker: '运行状态',
      statusTitle: '抓取进度',
      logKicker: '运行日志',
      logTitle: '实时日志'
    },
    fields: {
      taskTemplate: '任务模板',
      taskTemplateHelp: '默认会自动带入推荐的并行、延迟和超时配置。',
      limit: '抓取数量',
      limitHelp: '填 0 表示不限制抓取数量。',
      base: '起始地址',
      output: '输出位置',
      totalPages: '总页数',
      totalPagesHelp: '填 0 表示按程序自动判断。',
      itemsPerPage: '每页条数',
      itemsPerPageHelp: '建议按网站实际每页条数填写，默认 30 条。',
      parallel: '并行量',
      parallelHelp: '建议 1 ~ 3，避免触发封控。',
      delay: '请求延迟',
      delayHelp: '单位为秒。',
      timeout: '超时时间',
      timeoutHelp: '单位为毫秒。',
      proxy: '代理服务器',
      proxyHelp: '留空则直连运行；填写后会自动检测代理是否可用，并每 30 秒刷新一次状态。',
      magnetExcludeKeywords: '磁力过滤词',
      magnetExcludeKeywordsHelp: '支持多个关键字，必须使用英文逗号分隔；命中后会自动跳过该磁力。',
      actressCountFilterThreshold: '过滤演员数量',
      actressCountFilterThresholdHelp: '演员数量大于该值时保留 filmData.json，但不输出磁力 TXT；填 0 关闭。'
    },
    placeholders: {
      base: DEFAULT_BASE_URL,
      output: '请选择输出目录',
      proxy: 'http://127.0.0.1:7890',
      magnetExcludeKeywords: '-U, 无码'
    },
    proxyStatus: {
      empty: '代理未填写',
      checking: '检测中...',
      valid: '代理正常',
      invalid: '代理失败',
      emptyDetail: '当前将使用直连方式运行。',
      checkingDetail: '正在检测代理连通性，请稍候。',
      validDetail: '检测通过，可继续使用当前代理运行。',
      invalidDetail: '当前代理不可用，请检查协议、地址、端口或代理软件状态。'
    },
    advice: {
      kicker: '智能建议',
      title: '页数估算',
      applyButton: '应用建议',
      defaultPrimary: '填写抓取数量后，系统会按每页条数自动估算总页数。',
      defaultSecondaryPrefix: '当前按每页约 ',
      defaultSecondarySuffix: ' 条估算。',
      suggestedPagesPrefix: '建议总页数：',
      suggestedPagesSuffix: ' 页',
      lastPageEstimatePrefix: '按每页 ',
      lastPageEstimateMiddle: ' 条估算，最后一页约 ',
      lastPageEstimateSuffix: ' 条。',
      manualPagesPrefix: '你当前手动填写：',
      manualPagesSuffix: ' 页。'
    },
    toggles: {
      cloudflareTitle: 'Cloudflare 绕过',
      cloudflareHelp: '被验证页拦截时可开启，提高可恢复性。',
      secondValidationTitle: '结果二次校验',
      secondValidationHelp: '任务结束后对结果做一次对账校验。',
      nomagTitle: '跳过无磁力影片',
      nomagHelp: '没有磁力链接的影片将不写入结果。',
      allmagTitle: '磁力全部爬取',
      allmagHelp: '默认只保留最大磁力，开启后保存全部磁力。',
      magnetContentValidationTitle: '磁力内容校验（广告过滤）',
      magnetContentValidationHelp: '会尝试读取磁力内部文件列表，发现广告包或杂文件包时自动跳过并切换下一条候选磁力；开启后速度会稍慢。',
      nopicTitle: '跳过图片下载',
      nopicHelp: '仅抓取影片信息和磁力，不下载图片。'
    },
    actions: {
      changeBackground: '更换背景',
      resetBackground: '恢复默认',
      updateAntiBlock: '更新反屏蔽',
      openOutput: '打开输出目录',
      openMagnetFile: '打开磁力链接文档',
      browseOutput: '选择',
      start: '开始抓取',
      stop: '终止任务',
      restart: '重新爬取',
      clearLog: '清空日志',
      openLogFolder: '打开日志目录'
    },
    stats: {
      currentPage: '当前页数',
      queued: '已入队',
      attempted: '已尝试',
      completed: '已完成'
    },
    state: {
      label: '状态说明',
      currentLabel: '当前执行',
      unfinishedLabel: '已定位未完成番号',
      duplicateLabel: '已定位重复番号',
      pageGapLabel: '未定位分页缺口',
      filteredLabel: '过滤影片番号',
      failedLabel: '失败详情页',
      defaultMessage: '等待开始抓取。',
      ready: '准备就绪，等待开始。',
      activeEmpty: '当前没有正在执行的项目。',
      unfinishedEmpty: '当前没有已定位未完成番号。',
      duplicateEmpty: '当前没有重复番号。',
      pageGapEmpty: '当前没有未定位分页缺口。',
      filteredEmpty: '当前没有因演员数量过滤的影片番号。',
      failedEmpty: '当前没有失败详情页。',
      failedSummaryPrefix: '失败详情页共 ',
      failedSummaryMiddle: ' 条，当前显示 ',
      failedSummarySuffix: ' 条。',
      unknownItem: '未知项目',
      defaultFailureReason: '未记录失败原因。',
      failureCategoryPrefix: '分类：',
      failureRetryPrefix: '重试：',
      failureManualReview: '需人工复查',
      failureAdvicePrefix: '建议：',
      failureTimePrefix: '最后失败时间：'
    },
    ranking: {
      label: '参考榜单',
      title: 'FANZA 女优榜单',
      channelLabel: '信息渠道',
      modeLabel: '榜单类型',
      yearLabel: '年份',
      monthLabel: '月份',
      monthMode: '月度',
      annualMode: '年度',
      refreshButton: '刷新榜单',
      loading: '正在加载榜单数据...',
      monthHelp: '可选择指定年份与月份，查看对应月度榜单。',
      annualHelp: '可选择指定年份，查看对应年度榜单。',
      unsupportedMonthHistory: '部分来源仅提供最新月份数据，历史月份可能暂时不可用。',
      sourcePrefix: '来源：',
      fetchedAtPrefix: '抓取时间：',
      periodPrefix: '统计周期：',
      totalPrefix: '榜单数量：',
      staleSuffix: '缓存数据',
      openSource: '打开来源',
      openProfile: '打开目录',
      empty: '当前没有可展示的榜单数据。',
      loadFailedMeta: '参考榜单获取失败，请稍后重试。',
      unknownActress: '未知女优',
      autoFillButtonTitleSuffix: ' - 点击后自动填充真实女优目录与有磁力数量',
      rankSuffix: '名',
      sourceItemPrefix: '目录链接：',
      latestHint: '默认优先显示最新可用榜单。',
      annualHint: '切换为年度后将只显示年份维度榜单。',
      noYearData: '暂无年度数据',
      yearOptionSuffix: ' 年',
      noMonthData: '暂无月份数据',
      currentMonthOnly: '月度模式下会优先显示当前月份或最近可用月份。',
      fillHint: '点击女优名称可自动填充起始地址、抓取数量与总页数，便于你检查后开始抓取。',
      officialProxyTip: '该功能建议开启日本地区代理，以获得更稳定的榜单访问体验。'
    },
    log: {
      defaultHint: '任务开始后，这里会实时显示关键日志与运行提示。',
      createdPrefix: '日志文件：',
      createdEventPrefix: '运行日志已创建：',
      cleared: '日志已清空。',
      truncatedSuffix: '内容过长，已自动折叠显示。',
      visibleLevels: ['info', 'warn', 'error'],
      maxVisibleLength: 260,
      hiddenKeywords: [
        'QueueManager: [索引页]',
        'ResourceMonitor:',
        'AJAX重试延迟计算:',
        'Puppeteer池状态',
        '[TIMING]',
        '正在处理详情页:',
        '任务状态已落盘：'
      ],
      initialPathHint: '任务启动后将自动显示本次日志文件路径。'
    },
    messages: {
      templateAppliedPrefix: '已切换任务模板：',
      baseFilledPrefix: '已填充起始地址：',
      backgroundSelectedPrefix: '已切换背景图片：',
      backgroundReset: '已恢复默认背景。',
      startRunning: '抓取任务启动中...',
      restartRunning: '正在执行重新爬取，仅补抓未完成内容...',
      restartQueued: '已提交重新爬取请求，等待当前队列安全切换。',
      restartStarted: '重新爬取已开始。',
      stopRequested: '已发送终止指令，正在中断队列与请求...',
      outputRequired: '请先选择输出目录。',
      outputSelectedPrefix: '已选择输出目录：',
      outputOpenedPrefix: '已打开输出目录：',
      suggestedPagesAppliedPrefix: '已应用建议页数：',
      suggestedPagesAppliedSuffix: ' 页',
      magnetOpenedPrefix: '已打开磁力链接文档：',
      logFolderOpenedPrefix: '已打开日志目录：',
      antiBlockUpdating: '正在更新反屏蔽地址...',
      antiBlockUpdatedPrefix: '已更新反屏蔽地址，共 ',
      antiBlockUpdatedSuffix: ' 条，文件位置：',
      antiBlockUpdateFailedPrefix: '反屏蔽地址更新失败：',
      rankingLoading: '正在刷新 FANZA 榜单...',
      rankingLoadedPrefix: '榜单已刷新：',
      rankingLoadedMiddle: '，共 ',
      rankingLoadedSuffix: ' 条',
      rankingSourceOpenedPrefix: '已打开榜单来源：',
      rankingResolvingPrefix: '正在解析女优目录：',
      rankingResolvedPrefix: '已定位女优：',
      rankingResolvedMagnetPrefix: '有磁力影片 ',
      rankingResolvedAllPrefix: '总站点影片 ',
      rankingResolvedCountSuffix: ' 条',
      rankingResolvedDefaultHint: '结果已自动填充到表单，请检查无误后开始抓取。',
      rankingResolvedPagesPrefix: '预计页数 ',
      rankingResolvedPagesSuffix: ' 页',
      rankingResolveFailedPrefix: '女优目录解析失败：'
    },
    validation: {
      baseRequired: '请填写起始地址。',
      outputRequired: '请先选择输出目录。',
      itemsPerPageInvalid: '每页条数必须大于等于 1。',
      parallelInvalid: '并行量必须大于等于 1。',
      totalPagesInvalid: '总页数必须大于等于 0。',
      delayInvalid: '请求延迟必须大于等于 0。',
      proxyInvalid: '当前代理检测失败，请修正后再启动，或清空代理后直连运行。',
      magnetExcludeKeywordsInvalid: '磁力过滤词格式不正确，请使用英文逗号分隔，例如：-U,SIS001,第一會所',
      timeoutInvalidPrefix: '超时时间不能小于 ',
      timeoutInvalidSuffix: ' 毫秒。'
    },
    limits: {
      defaultItemsPerPage: 30,
      minTimeout: 1000,
      maxLogLines: 240,
      maxPanelItems: 80,
      stateRenderInterval: 180
    },
    runtime: {
      missingDependencies: '桌面端渲染依赖未完整加载。',
      bootstrapFailedPrefix: '桌面界面初始化失败：'
    }
  };

  const payload = { UI_TEXT_SOURCE };
  const registryTarget = (globalScope.__desktopTextModules = globalScope.__desktopTextModules || {});
  Object.assign(registryTarget, payload);

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = payload;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/text/runtimeText.js ==== */
// Active runtime text source for log/state wording shared by renderer and
// compatibility helpers. Keep larger static page copy in uiTextSource.js.
//
// Ownership summary:
// 1) define shared runtime/log/status wording used across desktop surfaces
// 2) keep runtime phrasing separate from larger page-copy text sources
// 3) provide one source for log-level/prefix label mapping
//
// File map for maintainers:
// 1) runtime/log wording registry
// 2) log-level and prefix label maps
// 3) noisy-vs-key log filter keyword sets
(function registerDesktopRuntimeText(globalScope) {
  // Runtime text is reserved for log/runtime phrasing shared by renderer and
  // compatibility helpers. Keep larger page/UI copy in `uiTextSource.js`.
  const MAIN_TEXT = {
    taskLogTitleSuffix: '任务日志',
    taskLogCreatedPrefix: '本次运行日志已创建：',
    reminderFallback: '暂无提醒信息',
    magnetFileMissingPrefix: '未找到磁力链接文档：',
    continueRecovery: '正在继续补爬未完成内容...',
    runnerBusy: '当前已有抓取任务正在运行',
    restartFailedPrefix: '重新爬取失败：',
    versionLabel: '版本',
    startTimeLabel: '开始时间',
    outputLabel: '输出目录',
    baseLabel: '起始地址',
    runtimeSchemeLabel: '运行方案',
    keyLogPrefix: '[重点] ',
    demoTitleSeparator: ' · ',
    stateLogPrefix: '状态',
    logLevelLabels: {
      info: '信息',
      warn: '警告',
      error: '错误',
      debug: '调试'
    },
    logPrefixLabels: {
      'QueueManager:': '队列管理：',
      'FileHandler:': '文件处理：',
      'RequestHandler:': '请求处理：',
      'Parser:': '解析器：',
      'fetchMagnet:': '磁力抓取：',
      'parseMetadata:': '元数据解析：',
      'getPage:': '页面抓取：',
      'executeAjax:': 'AJAX 请求：',
      'executeAjaxWithCloudflare:': 'Cloudflare AJAX：',
      'CloudflareBypass:': 'Cloudflare 绕过：',
      'CloudflareAjaxWorkerClient:': 'Cloudflare Worker：',
      'PuppeteerPool:': '浏览器池：',
      'ResourceMonitor:': '资源监控：',
      'handleGenericError:': '异常处理：',
      'ResultValidator:': '结果校验：'
    }
  };

  // Keep runtime wording centralized here when it is shared by renderer and
  // compatibility helpers. UI-page copy and structural panel labels belong in
  // `uiTextSource.js`, not in this runtime/log wording registry.
  const LOG_FILTER_PATTERNS = {
    noisy: ['QueueManager: [索引页] 任务开始', 'QueueManager: [详情页] 任务开始', 'ResourceMonitor:'],
    key: [
      '抓取任务完成',
      '抓取任务已完成',
      '任务未完成',
      '结果二次校验完成',
      '补爬结束',
      '分页缺口',
      '失败详情页',
      'Cloudflare',
      '已发送终止指令',
      '重新爬取'
    ]
  };

  const payload = {
    MAIN_TEXT,
    LOG_FILTER_PATTERNS
  };

  const registry = (globalScope.__desktopTextModules = globalScope.__desktopTextModules || {});
  Object.assign(registry, payload);

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = payload;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/bridgeProtocol.js ==== */
// Shared bridge protocol constants used by both renderer and compatibility
// runtimes. This file is transport-agnostic: it describes event/command
// envelopes, not whether the current desktop runtime is Wails or a legacy path.
//
// Ownership summary:
// 1) define transport-neutral bridge protocol constants and packet helpers
// 2) keep renderer and sidecar on one shared envelope contract
// 3) avoid duplicating protocol literals across runtimes
//
// File map for maintainers:
// 1) shared bridge event constants
// 2) command envelope helper
// 3) event packet normalization helper
(function registerBridgeProtocol(globalScope) {
  const BRIDGE_VERSION = 'bridge.v1';

  const BRIDGE_EVENTS = Object.freeze({
    generic: 'bridge:event',
    sidecarLifecycle: 'sidecar.lifecycle',
    crawlLog: 'crawl.log',
    crawlState: 'crawl.state',
    crawlUiState: 'crawl.ui-state',
    crawlStagePanel: 'crawl.stage-panel',
    crawlResultPanel: 'crawl.result-panel',
    crawlRunContext: 'crawl.run-context',
    crawlReviewPanel: 'crawl.review-panel',
    crawlQualitySummary: 'crawl.quality-summary',
    crawlLogContext: 'crawl.log-context',
    organizerLog: 'organizer.log',
    organizerState: 'organizer.state',
    learningLog: 'learning.log',
    learningState: 'learning.state',
    appNotice: 'app.notice'
  });

  function isPlainObject(value) {
    return value != null && typeof value === 'object' && !Array.isArray(value);
  }

  // createCommandEnvelope and normalizeEventPacket are the transport-neutral
  // protocol boundary. Wails and compatibility runtimes should adapt to this
  // schema rather than inventing parallel packet shapes in controllers.
  function createCommandEnvelope(command, payload) {
    // Command envelopes should stay minimal and transport-neutral. Domain
    // defaults belong in the caller or bridge handler, not in this protocol
    // helper.
    return {
      version: BRIDGE_VERSION,
      command: String(command || '').trim(),
      payload: isPlainObject(payload) ? payload : payload == null ? {} : { value: payload }
    };
  }

  function normalizeEventPacket(packet) {
    // Event normalization is intentionally tolerant so renderer listeners can
    // consume both Wails-bridge and compatibility-shaped payloads through one
    // schema without duplicating guards in each controller.
    if (!isPlainObject(packet)) {
      return {
        version: BRIDGE_VERSION,
        kind: 'event',
        event: '',
        domain: '',
        action: '',
        taskId: '',
        timestamp: new Date().toISOString(),
        data: {}
      };
    }

    return {
      version: String(packet.version || BRIDGE_VERSION),
      kind: 'event',
      event: String(packet.event || ''),
      domain: String(packet.domain || ''),
      action: String(packet.action || ''),
      taskId: String(packet.taskId || ''),
      timestamp: packet.timestamp || new Date().toISOString(),
      data: isPlainObject(packet.data) ? packet.data : {}
    };
  }

  const payload = {
    BRIDGE_VERSION,
    BRIDGE_EVENTS,
    createCommandEnvelope,
    normalizeEventPacket
  };

  globalScope.desktopBridgeProtocol = payload;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = payload;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/appText.js ==== */
// Shared text registry adapter for the bundled browser runtime and Node-side
// compatibility helpers. Browser bundles populate `__desktopTextModules`
// first; Node fallback resolves the same source modules lazily by file path.
//
// appText.js is the shared text aggregator, not an independent wording source.
// When a desktop label changes, update the underlying text modules first and
// keep this file as the adapter that exposes them to browser and Node callers.
//
// Ownership summary:
// 1) aggregate shared text modules into one normalized runtime registry
// 2) adapt browser-bundled and Node-side text loading behind one surface
// 3) keep wording sources in dedicated text modules rather than here
//
// File map for maintainers:
// 1) browser-vs-Node text module resolution
// 2) normalized shared text registry assembly
// 3) flat export surface for active runtime callers
(function initializeDesktopAppText(globalScope) {
  const registry = (globalScope.__desktopTextModules = globalScope.__desktopTextModules || {});
  const isNode = typeof module !== 'undefined' && module.exports;
  const loadNodeModule = (relativePath) => (isNode ? require(relativePath) : {});
  const resolveTextModule = (requiredKey, relativePath) =>
    registry[requiredKey] ? registry : loadNodeModule(relativePath);

  const appInfoModule = resolveTextModule('APP_INFO', './text/appInfo.js');
  const taskConfigModule = resolveTextModule('STATUS_LABELS', './text/taskConfig.js');
  const versionHistoryModule = resolveTextModule('VERSION_HISTORY', './text/versionHistory.js');
  const uiTextModule = resolveTextModule('UI_TEXT_SOURCE', './text/uiTextSource.js');
  const runtimeTextModule = resolveTextModule('MAIN_TEXT', './text/runtimeText.js');

  // Keep the export surface intentionally flat. Callers across browser bundle,
  // sidecar, and archived helpers should read one normalized registry instead
  // of each importing raw text modules with their own assumptions.
  const api = {
    APP_INFO: appInfoModule.APP_INFO || {},
    FILE_NAMES: appInfoModule.FILE_NAMES || {},
    STATUS_LABELS: taskConfigModule.STATUS_LABELS || {},
    FAILURE_CATEGORY_LABELS: taskConfigModule.FAILURE_CATEGORY_LABELS || {},
    TASK_TEMPLATES: taskConfigModule.TASK_TEMPLATES || {},
    URL_SUGGESTIONS: appInfoModule.URL_SUGGESTIONS || [],
    VERSION_HISTORY: versionHistoryModule.VERSION_HISTORY || [],
    UI_TEXT_SOURCE: uiTextModule.UI_TEXT_SOURCE || {},
    MAIN_TEXT: runtimeTextModule.MAIN_TEXT || {},
    LOG_FILTER_PATTERNS: runtimeTextModule.LOG_FILTER_PATTERNS || {}
  };

  // Export one normalized text registry so browser bundle, Wails bridge, and
  // remaining compatibility helpers do not each invent their own text-module
  // wiring rules.
  globalScope.desktopAppText = api;

  if (isNode) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/progressSchema.js ==== */
// Shared organizer/learning progress vocabulary.
// Backend publishers and frontend renderers should both use these phase names
// so progress text and exported reports do not drift into separate schemas.
//
// Maintenance boundary:
// - phase constants and progress-message wording live here
// - organizer/ad-learning services publish structured progress only
// - UI panels render the normalized schema produced here
//
// File map for maintainers:
// 1) shared organizer/learning phase constants
// 2) shared progress payload construction helpers
// 3) centralized organizer/learning progress wording builders
(function registerDesktopProgressSchema(globalScope) {
  // Ownership summary:
  // 1) define shared progress phase enums for organizer/ad-learning flows
  // 2) build centralized human-readable progress copy from structured payloads
  // 3) keep progress wording/payload shape out of per-feature controllers
  const ORGANIZER_PROGRESS_PHASES = Object.freeze({
    starting: 'starting',
    scanStart: 'scan-start',
    scanProgress: 'scan-progress',
    scanCompleted: 'scan-completed',
    waitingStart: 'waiting-start',
    waitingProgress: 'waiting-progress',
    deleteStart: 'delete-start',
    deleteProgress: 'delete-progress',
    introAdStart: 'intro-ad-start',
    introAdProgress: 'intro-ad-progress',
    completed: 'completed'
  });

  const LEARNING_PROGRESS_PHASES = Object.freeze({
    starting: 'starting',
    scanReady: 'scan-ready',
    matching: 'matching',
    learning: 'learning',
    completed: 'completed'
  });

  function normalizeAdFileAction(rawValue) {
    // Keep action normalization here so backend and renderer do not fork their
    // own tiny enums and later disagree on report/panel wording branches.
    return String(rawValue || '').trim() === 'delete-directly' ? 'delete-directly' : 'move-to-delete';
  }

  function toSafeNumber(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function createProgress(scope, phase, payload = {}) {
    // Progress payloads should carry numbers and phase identity only. Domain
    // services publish structured state; wording is derived centrally here.
    return {
      ...payload,
      scope: String(scope || payload.scope || '').trim(),
      phase: String(phase || payload.phase || '').trim(),
      timestamp: payload.timestamp || new Date().toISOString()
    };
  }

  // Keep these summary builders deterministic; they feed the organizer panel
  // and should match any exported progress wording used for diagnosis.
  function buildOrganizerProgressMessage(progress = {}) {
    // Message shaping stays centralized here so report wording and live panel
    // wording do not drift apart across modules.
    const phase = String(progress.phase || '');
    const total = toSafeNumber(progress.total, 0);
    const processed = toSafeNumber(progress.processed, 0);
    const adFileAction = normalizeAdFileAction(progress.adFileAction);

    if (phase === ORGANIZER_PROGRESS_PHASES.waitingProgress || phase === ORGANIZER_PROGRESS_PHASES.waitingStart) {
      return `待整理总数 ${total} 个，已执行 ${processed} 个。`;
    }

    if (phase === ORGANIZER_PROGRESS_PHASES.deleteProgress || phase === ORGANIZER_PROGRESS_PHASES.deleteStart) {
      return adFileAction === 'delete-directly'
        ? `广告处理总数 ${total} 个，已直接删除 ${processed} 个。`
        : `待删除总数 ${total} 个，已执行 ${processed} 个。`;
    }

    if (phase === ORGANIZER_PROGRESS_PHASES.introAdProgress || phase === ORGANIZER_PROGRESS_PHASES.introAdStart) {
      return `含开头广告总数 ${total} 个，已归档 ${processed} 个。`;
    }

    if (phase === ORGANIZER_PROGRESS_PHASES.scanProgress || phase === ORGANIZER_PROGRESS_PHASES.scanStart) {
      return `扫描进度 ${processed}/${total}。`;
    }

    if (phase === ORGANIZER_PROGRESS_PHASES.scanCompleted) {
      const waitingTotal = toSafeNumber(progress.waitingTotal, 0);
      const deleteTotal = toSafeNumber(progress.deleteTotal, 0);
      const introAdTotal = toSafeNumber(progress.introAdTotal, 0);
      return `扫描完成，待整理 ${waitingTotal} 个，待删除 ${deleteTotal} 个，含开头广告 ${introAdTotal} 个。`;
    }

    if (phase === ORGANIZER_PROGRESS_PHASES.completed) {
      const waitingTotal = toSafeNumber(progress.waitingTotal, 0);
      const deleteTotal = toSafeNumber(progress.deleteTotal, 0);
      const introAdTotal = toSafeNumber(progress.introAdTotal, 0);
      const deletedDirectly = toSafeNumber(progress.deletedDirectly, 0);
      return `整理完成，待整理 ${waitingTotal} 个，待删除 ${deleteTotal} 个，含开头广告 ${introAdTotal} 个，直接删除 ${deletedDirectly} 个。`;
    }

    return '';
  }

  function buildLearningProgressMessage(progress = {}) {
    // Same rule for learning progress: lower services should emit numbers and
    // phases, while user-facing wording stays in one shared place.
    const phase = String(progress.phase || '');
    const totalVideos = toSafeNumber(progress.totalVideos, 0);
    const processedVideos = toSafeNumber(progress.processedVideos, 0);
    const matchedVideoCount = toSafeNumber(progress.matchedVideoCount, 0);
    const importedSampleCount = toSafeNumber(progress.importedSampleCount, 0);
    const requestedCodeCount = toSafeNumber(progress.requestedCodeCount, 0);

    if (phase === LEARNING_PROGRESS_PHASES.starting) {
      return `按番号学习启动：目标番号 ${requestedCodeCount} 个。`;
    }

    if (phase === LEARNING_PROGRESS_PHASES.scanReady) {
      return `学习扫描完成：发现视频 ${totalVideos} 个，开始按番号匹配。`;
    }

    if (phase === LEARNING_PROGRESS_PHASES.matching) {
      return `按番号匹配中：${processedVideos}/${totalVideos}，已命中 ${matchedVideoCount}，新增样本 ${importedSampleCount}。`;
    }

    if (phase === LEARNING_PROGRESS_PHASES.learning) {
      return `抓帧学习中：已命中 ${matchedVideoCount}，新增样本 ${importedSampleCount}。`;
    }

    if (phase === LEARNING_PROGRESS_PHASES.completed) {
      const missingCodeCount = toSafeNumber(progress.missingCodeCount, 0);
      const hitRate = toSafeNumber(progress.hitRate, 0);
      const falsePositiveRate = toSafeNumber(progress.falsePositiveRate, 0);
      const sampleIncrement = toSafeNumber(progress.sampleIncrement, importedSampleCount);
      return `按番号学习完成：命中视频 ${matchedVideoCount}，新增样本 ${sampleIncrement}，未命中番号 ${missingCodeCount}，命中率 ${hitRate.toFixed(
        2
      )}% ，误判率 ${falsePositiveRate.toFixed(2)}%。`;
    }

    return '';
  }

  function buildProgressMessage(progress = {}) {
    // Scope dispatch stays here so renderer/service code does not branch on
    // message wording rules in multiple places.
    if (String(progress.scope || '') === 'learning') {
      return buildLearningProgressMessage(progress);
    }
    return buildOrganizerProgressMessage(progress);
  }

  const payload = {
    ORGANIZER_PROGRESS_PHASES,
    LEARNING_PROGRESS_PHASES,
    normalizeAdFileAction,
    createProgress,
    buildOrganizerProgressMessage,
    buildLearningProgressMessage,
    buildProgressMessage
  };

  globalScope.desktopProgressSchema = payload;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = payload;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/crawlPanelModel.js ==== */
// Shared crawl-panel normalization model for the active desktop renderer.
// This file converts mixed backend/runtime payloads into stable UI-facing panel
// shapes so renderer controllers do not each reimplement the same mapping.
//
// Ownership summary:
// 1) normalize task snapshots/runtime payloads into stable stage/result panels
// 2) derive history/review/quality helper payloads from mixed state shapes
// 3) keep fallback heuristics in one place instead of spreading them across
//    controllers
//
// This file does not fetch data, dispatch commands, or touch the DOM directly.
//
// File map for maintainers:
// 1) low-level text/path/status normalization helpers
// 2) stage/result panel fallback builders
// 3) review/history/quality payload normalization helpers

(function registerCrawlPanelModel(globalScope) {
  function cleanText(value) {
    return String(value || '').trim();
  }

  function firstNonEmpty() {
    for (let index = 0; index < arguments.length; index += 1) {
      const value = cleanText(arguments[index]);
      if (value) {
        return value;
      }
    }
    return '';
  }

  function pathLeaf(pathValue) {
    const segments = cleanText(pathValue).split(/[/\\]/).filter(Boolean);
    return segments.length > 0 ? segments[segments.length - 1] : '';
  }

  function isActiveStatus(status) {
    return ['starting', 'running', 'stopping'].includes(cleanText(status).toLowerCase());
  }

  function normalizeTaskSnapshotStatus(snapshot) {
    // Startup status should describe the current controller lifecycle. Historical
    // final states still belong to result/review panels, but must not repaint
    // the top idle pill as error/completed before a new crawl begins.
    const controllerStatus = cleanText(snapshot && snapshot.controllerStatus).toLowerCase();
    const runtimeStatus = cleanText(snapshot && snapshot.lastCrawlStatus).toLowerCase();
    const running = Boolean(snapshot && snapshot.isRunning);

    if (isActiveStatus(controllerStatus)) {
      return controllerStatus;
    }
    if (running && isActiveStatus(runtimeStatus)) {
      return runtimeStatus;
    }
    return 'idle';
  }

  function resolveOutputDir(source, fallbackOutputDir) {
    // Output-dir fallback priority is centralized here because multiple
    // generations of runtime payloads still expose slightly different fields.
    return firstNonEmpty(
      source && source.outputDir,
      source && source.currentTaskOutputDir,
      source && source.lastTaskOutputDir,
      source && source.targetOutput,
      fallbackOutputDir
    );
  }

  function buildStagePanelFromTaskSnapshot(snapshot, options) {
    if (!snapshot) {
      return null;
    }

    // Resume-stage fallback shaping lives here so renderer controllers do not
    // each invent their own "last known crawl state" projection rules.
    const settings = options && typeof options === 'object' ? options : {};
    const defaultMessage = cleanText(settings.defaultMessage) || '等待开始抓取。';
    const status = normalizeTaskSnapshotStatus(snapshot);
    const outputDir = firstNonEmpty(snapshot.currentTaskOutputDir, snapshot.lastTaskOutputDir);
    const message = cleanText(snapshot.lastCrawlMessage) || defaultMessage;

    if (status === 'idle' && !outputDir) {
      return null;
    }

    const isRunning = Boolean(snapshot.isRunning);
    return {
      status,
      message,
      phaseKey: isRunning ? 'resume-running' : 'resume-latest',
      phaseTitle: isRunning ? '已恢复抓取任务' : '已加载最近任务',
      phaseDescription: isRunning
        ? '当前任务状态已从 Go 主控恢复，等待实时事件继续更新。'
        : '最近一次抓取状态已从 Go 主控加载。',
      phaseProgressText: isRunning ? '恢复中' : '最近记录',
      phaseIndex: 0,
      phaseTotal: 0,
      outputDir,
      stats: {
        pageIndex: 0,
        queued: 0,
        attempted: 0,
        completed: 0
      }
    };
  }

  function buildResultPanelFromTaskSnapshot(snapshot, options) {
    if (!snapshot) {
      return null;
    }

    // Result-panel fallback follows the same rule: one shared snapshot-to-panel
    // mapping, rather than separate controller-specific interpretations.
    const settings = options && typeof options === 'object' ? options : {};
    const statusLabels = settings.statusLabels && typeof settings.statusLabels === 'object' ? settings.statusLabels : {};
    const status = normalizeTaskSnapshotStatus(snapshot);
    const outputDir = firstNonEmpty(snapshot.lastTaskOutputDir, snapshot.currentTaskOutputDir);
    const logDir = cleanText(snapshot.logDir);
    const latestLogPath = firstNonEmpty(snapshot.latestLogPath, snapshot.sessionLogPath);
    const message =
      cleanText(snapshot.lastCrawlMessage) || '已恢复最近一次抓取记录，可从结果入口继续查看。';

    if (!outputDir && !logDir && !latestLogPath && status === 'idle') {
      return null;
    }

    return {
      status,
      message,
      outputDir,
      outputDirExists: Boolean(outputDir),
      logDir,
      logDirExists: Boolean(logDir),
      latestLogPath,
      latestLogExists: Boolean(latestLogPath),
      qualityStatus: status,
      qualityStatusText: status === 'completed' ? '已恢复最近结果' : statusLabels[status] || '最近记录',
      qualitySummaryLine: message
    };
  }

  function buildResultHistoryIdentity(panel) {
    // History identity is derived from stable artifact anchors so the renderer
    // can reconcile completed runs without depending on live in-memory state.
    const outputDir = cleanText(panel && panel.outputDir);
    const latestLogPath = cleanText(panel && panel.latestLogPath);
    const filmDataPath = cleanText(panel && panel.filmDataPath);
    const magnetPath = cleanText(panel && panel.magnetPath);
    const reportPath = cleanText(panel && panel.reportPath);
    const logDir = cleanText(panel && panel.logDir);

    if (!outputDir && !latestLogPath && !filmDataPath && !magnetPath && !reportPath) {
      return null;
    }

    const stableAnchor = firstNonEmpty(outputDir, filmDataPath, latestLogPath, logDir, magnetPath, reportPath);
    const titleSource = firstNonEmpty(outputDir, filmDataPath, latestLogPath, logDir);

    return {
      historyKey: stableAnchor,
      title: pathLeaf(titleSource) || '最近结果',
      outputDir,
      latestLogPath,
      filmDataPath,
      magnetPath,
      reportPath,
      logDir
    };
  }

  function buildRunQualitySummaryRequest(state, fallbackOutputDir) {
    // The quality-summary request intentionally carries only stable lookup data.
    // Summary generation remains a Go-side concern.
    const outputDir = resolveOutputDir(state, fallbackOutputDir);
    const message = cleanText(state && state.message);
    return {
      outputDir,
      signature: `${outputDir}|${message}`
    };
  }

  function buildQualitySummaryEventSignature(summary) {
    // Signatures stay small and deterministic so controllers can cheaply detect
    // when a new summary event is meaningfully different from the last one.
    const outputDir = cleanText(summary && summary.outputDir);
    const reportPath = cleanText(summary && summary.reportPath);
    const status = cleanText(summary && summary.status);
    return `${outputDir}|${reportPath}|${status}`;
  }

  function buildReviewPanelFallbackFromState(state) {
    if (!state) {
      return null;
    }

    // Review fallback is intentionally tolerant because it bridges multiple
    // historical state shapes into one stable panel contract for the renderer.
    return {
      status: state.status,
      message: state.message,
      duplicateItems: state.duplicateItems || [],
      duplicateItemsTotal:
        state.duplicateItemsTotal ?? (Array.isArray(state.duplicateItems) ? state.duplicateItems.length : 0),
      unfinishedItems: state.unfinishedItems || state.missingItems || [],
      unfinishedItemsTotal:
        state.unfinishedItemsTotal ??
        state.missingItemsTotal ??
        (Array.isArray(state.unfinishedItems) ? state.unfinishedItems.length : 0),
      pageGapItems: state.pageGapItems || [],
      filteredItems: state.filteredItems || state.filteredItemIds || (state.stats && state.stats.filteredItemIds) || [],
      filteredItemsTotal:
        state.filteredItemsTotal ??
        state.filteredByActressCount ??
        (state.stats && state.stats.filteredItemsTotal) ??
        (state.stats && state.stats.filteredByActressCount) ??
        0,
      failedDetails: state.failedDetails || [],
      failedDetailsTotal:
        state.failedDetailsTotal ?? (Array.isArray(state.failedDetails) ? state.failedDetails.length : 0)
    };
  }

  function resolveQualitySummaryLevel(summary) {
    const explicitLevel = cleanText(summary && summary.noticeLevel);
    if (explicitLevel) {
      return explicitLevel;
    }

    const status = cleanText(summary && summary.status).toLowerCase();
    if (status === 'error') {
      return 'error';
    }
    if (status === 'warning') {
      return 'warn';
    }
    return 'info';
  }

  function buildQualitySuggestionLines(summary) {
    if (summary && Array.isArray(summary.topSuggestionLines) && summary.topSuggestionLines.length > 0) {
      return summary.topSuggestionLines.map((line, index) => ({
        line,
        level:
          summary && Array.isArray(summary.issues) && summary.issues[index] && summary.issues[index].level === 'error'
            ? 'error'
            : summary && Array.isArray(summary.issues) && summary.issues[index] && summary.issues[index].level === 'warning'
              ? 'warn'
              : 'info'
      }));
    }

    if (summary && Array.isArray(summary.issues)) {
      return summary.issues
        .slice(0, 3)
        .map((issue) => ({
          line: issue && issue.message,
          level: issue && issue.level === 'error' ? 'error' : issue && issue.level === 'warning' ? 'warn' : 'info'
        }))
        .filter((item) => cleanText(item.line));
    }

    return [];
  }

  globalScope.desktopCrawlPanelModel = {
    normalizeTaskSnapshotStatus,
    resolveOutputDir,
    buildStagePanelFromTaskSnapshot,
    buildResultPanelFromTaskSnapshot,
    buildResultHistoryIdentity,
    buildRunQualitySummaryRequest,
    buildQualitySummaryEventSignature,
    buildReviewPanelFallbackFromState,
    resolveQualitySummaryLevel,
    buildQualitySuggestionLines
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== common/rendererHelpers.js ==== */
// Shared renderer helpers for the active desktop frontend.
// These helpers keep controller files focused on module orchestration instead
// of repeating the same DOM, integer, and async-click boilerplate.
//
// Ownership summary:
// 1) provide generic DOM/list/local-storage helpers
// 2) provide shared log-line append/batching helpers for renderer UIs
// 3) provide small async event binding utilities
//
// This file must stay business-agnostic. Crawl, organizer, and subscription
// semantics belong to their own controllers and model helpers.
//
// File map for maintainers:
// 1) generic error/integer/storage helpers
// 2) shared log-line append and batching helpers
// 3) async click/event binding utilities
(function registerRendererHelpers(globalScope) {
  function getErrorMessage(error, fallback = '未知错误') {
    if (error instanceof Error && String(error.message || '').trim()) {
      return error.message;
    }
    const text = String(error || '').trim();
    return text || fallback;
  }

  function toSafeInteger(value, fallback = 0, minimum = 0, maximum = Number.POSITIVE_INFINITY) {
    const parsed = Number.parseInt(String(value ?? '').trim(), 10);
    const normalized = Number.isFinite(parsed) ? parsed : fallback;
    return Math.max(minimum, Math.min(maximum, normalized));
  }

  function clearChildren(node) {
    if (node) {
      node.replaceChildren();
    }
  }

  function safeLocalStorageGet(key, fallbackValue = '') {
    // Local-storage access is centralized here because browser/runtime
    // restrictions differ between test, Electron-legacy, and Wails contexts.
    try {
      const value = globalThis.localStorage.getItem(key);
      return value == null ? fallbackValue : value;
    } catch {
      return fallbackValue;
    }
  }

  function safeLocalStorageSet(key, value) {
    try {
      globalThis.localStorage.setItem(key, value);
    } catch {
      // Ignore localStorage write failures in restrictive runtimes.
    }
  }

  function appendTimestampedLogLine(logView, level, message, timestamp, options = {}) {
    // Immediate append is still useful for small, already-batched call sites.
    // Larger/high-frequency streams should prefer createBufferedLogAppender.
    if (!logView) {
      return null;
    }

    const {
      tagName = 'p',
      className = 'log-line',
      maxLines = 0
    } = options;
    const line = document.createElement(tagName);
    const date = timestamp ? new Date(timestamp) : new Date();
    const timeLabel = date.toLocaleTimeString('zh-CN', { hour12: false });

    line.className = `${className} ${level || 'info'}`.trim();
    line.textContent = `[${timeLabel}] ${String(message || '').trim()}`;
    logView.appendChild(line);

    if (Number.isFinite(maxLines) && maxLines > 0) {
      while (logView.childElementCount > maxLines) {
        logView.removeChild(logView.firstElementChild);
      }
    }

    logView.scrollTop = logView.scrollHeight;
    return line;
  }

  function createBufferedLogAppender(options = {}) {
    // Buffered log appending belongs here so feature controllers share one UI
    // batching rule instead of each managing their own micro-queue behavior.
    const {
      logView,
      tagName = 'p',
      className = 'log-line',
      maxLines = 0,
      flushDelayMs = 16
    } = options;
    let queuedLines = [];
    let flushHandle = null;
    let flushHandleKind = '';
    let flushScheduled = false;

    function clearScheduledFlush() {
      if (flushHandle == null) {
        return;
      }

      if (flushHandleKind === 'raf' && typeof globalScope.cancelAnimationFrame === 'function') {
        globalScope.cancelAnimationFrame(flushHandle);
      } else {
        globalScope.clearTimeout(flushHandle);
      }
      flushHandle = null;
      flushHandleKind = '';
      flushScheduled = false;
    }

    function flush() {
      flushHandle = null;
      flushHandleKind = '';
      flushScheduled = false;

      if (!logView || queuedLines.length === 0) {
        queuedLines = [];
        return;
      }

      const shouldStickToBottom =
        logView.scrollHeight - logView.scrollTop - logView.clientHeight <= Math.max(logView.clientHeight * 0.25, 48);
      const fragment = document.createDocumentFragment();
      const batch = queuedLines;
      queuedLines = [];

      batch.forEach((item) => {
        const line = document.createElement(tagName);
        const date = item.timestamp ? new Date(item.timestamp) : new Date();
        const timeLabel = date.toLocaleTimeString('zh-CN', { hour12: false });
        line.className = `${className} ${item.level || 'info'}`.trim();
        line.textContent = `[${timeLabel}] ${String(item.message || '').trim()}`;
        fragment.appendChild(line);
      });

      logView.appendChild(fragment);

      if (Number.isFinite(maxLines) && maxLines > 0) {
        while (logView.childElementCount > maxLines) {
          logView.removeChild(logView.firstElementChild);
        }
      }

      if (shouldStickToBottom) {
        logView.scrollTop = logView.scrollHeight;
      }
    }

    function scheduleFlush() {
      if (flushScheduled) {
        return;
      }

      flushScheduled = true;
      if (typeof globalScope.requestAnimationFrame === 'function') {
        flushHandleKind = 'raf';
        flushHandle = globalScope.requestAnimationFrame(flush);
        return;
      }

      flushHandleKind = 'timeout';
      flushHandle = globalScope.setTimeout(flush, flushDelayMs);
    }

    function append(level, message, timestamp) {
      queuedLines.push({
        level: String(level || 'info').toLowerCase(),
        message: String(message || '').trim(),
        timestamp
      });
      scheduleFlush();
    }

    function clear() {
      queuedLines = [];
      clearScheduledFlush();
      clearChildren(logView);
    }

    return {
      append,
      clear,
      flush
    };
  }

  function bindAsyncClick(button, handler, options = {}) {
    if (!button) {
      return;
    }

    // Async click binding stays intentionally small: it standardizes the common
    // click->await->error flow, but feature-specific side effects stay outside.
    const { onError, fallbackErrorHandler } = options;
    button.addEventListener('click', async () => {
      try {
        await handler();
      } catch (error) {
        if (typeof onError === 'function') {
          onError(error);
          return;
        }
        if (typeof fallbackErrorHandler === 'function') {
          fallbackErrorHandler(error);
        }
      }
    });
  }

  globalScope.desktopRendererHelpers = {
    appendTimestampedLogLine,
    createBufferedLogAppender,
    bindAsyncClick,
    clearChildren,
    getErrorMessage,
    safeLocalStorageGet,
    safeLocalStorageSet,
    toSafeInteger
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/uiText.js ==== */
// Renderer fallback text bootstrap for the current desktop UI.
// This file is a startup resilience layer and must stay aligned with the
// active shared text modules under desktop/common/text.
//
// Ownership summary:
// 1) provide a renderer-boot fallback text bundle
// 2) keep fallback schema aligned with shared text source modules
// 3) let the renderer survive text-module load failures without becoming the
//    normal wording source of truth
//
// File map for maintainers:
// 1) fallback shared text schema
// 2) shared text source resolution and merge helpers
// 3) exported renderer UI text payload
(function initializeDesktopUiText(globalScope) {
  // Prefer `desktop/common/text/*` as the source of truth. The large fallback
  // bundle below exists so the renderer can still boot if shared text modules
  // fail to load during packaging or runtime startup.
  //
  // Maintenance rule:
  // - fallback copy here should stay schema-aligned with uiTextSource.js
  // - do not move normal UI wording ownership into this fallback block
  // - if one side changes, verify both source-of-truth and fallback text
  //   together so packaging/startup failures do not surface stale wording
  // - do not let feature modules start depending on fallback-only strings
  const FALLBACK_SHARED_TEXT = {
    APP_INFO: {
      title: 'JAV自动集成源',
      version: '0.30',
      subtitle: '基于开源项目：raawaa',
      eyebrow: 'Windows EXE',
      defaultBaseUrl: 'https://www.javbus.com'
    },
    URL_SUGGESTIONS: [
      'https://www.javbus.com/',
      'https://www.busjav.cyou',
      'https://www.fanbus.bond',
      'https://www.cdnbus.bond'
    ],
    STATUS_LABELS: {
      idle: '待机',
      starting: '启动中',
      running: '运行中',
      stopping: '终止中',
      completed: '已完成',
      incomplete: '未完成',
      stopped: '已终止',
      error: '异常'
    },
    FAILURE_CATEGORY_LABELS: {
      blocked: '验证拦截',
      network: '网络超时',
      empty: '空响应',
      parse: '解析失败',
      cloudflare: 'Cloudflare',
      unknown: '未知异常',
      stopped: '已终止'
    },
    TASK_TEMPLATES: {
      balanced: {
        label: '均衡模板',
        parallel: 2,
        delay: 2,
        timeout: 30000,
        itemsPerPage: 30,
        cloudflare: false,
        secondValidation: true
      },
      stable: {
        label: '稳定模板',
        parallel: 1,
        delay: 4,
        timeout: 45000,
        itemsPerPage: 30,
        cloudflare: true,
        secondValidation: true
      },
      recovery: {
        label: '恢复模板',
        parallel: 1,
        delay: 3,
        timeout: 45000,
        itemsPerPage: 30,
        cloudflare: true,
        secondValidation: true
      }
    },
    VERSION_HISTORY: [
      { version: '0.1', summary: '修复安装流程，实现基础运行能力' },
      { version: '0.2', summary: '桌面 GUI 上线，Windows 即开即用' },
      { version: '0.3', summary: '新增配置选项，界面布局优化' },
      { version: '0.4', summary: '增强分页校验，优化补抓逻辑' },
      { version: '0.5', summary: '全面汉化界面与交互提示' },
      { version: '0.6', summary: '新增补爬功能，支持磁力导出' },
      { version: '0.7', summary: '修复日志乱码问题' },
      { version: '0.8', summary: '任务状态落盘，支持断点续爬' },
      { version: '0.9', summary: '代码注释完善，显示体验优化' },
      { version: '0.10', summary: '优化解析容错，强化补抓去重' },
      { version: '0.11', summary: '新增备用网址，修复多项已知问题' },
      { version: '0.12', summary: '大任务稳定性增强，操作体验优化' },
      { version: '0.13', summary: '分页缺口补查，批量写盘减少 IO' },
      { version: '0.14', summary: '三段式补抓队列，提升补抓效率' },
      { version: '0.15', summary: '抓取速度大幅提升，动态任务栏上线' },
      { version: '0.16', summary: '精简输出文件，升级重试策略' },
      { version: '0.17', summary: '全新界面设计，修复入队问题' },
      { version: '0.18', summary: 'FANZA 女优排行榜，一键参数填充' },
      { version: '0.19', summary: '代码解耦优化，支持自定义背景' },
      { version: '0.20', summary: '多渠道榜单获取、榜单多元化，并修复抓取优先级等已知问题' },
      { version: '0.21', summary: '新增磁力内容校验（广告过滤），自动跳过广告包/杂文件包并切换下一条候选磁力' },
      { version: '0.22', summary: '爬虫与视频整理一体化增强，新增广告处理方式可视化切换、遗漏番号补抓对账与学习链路优化' },
      { version: '0.23', summary: '广告检测策略上线（支持MobileNetV3/SqueezeNet/YOLOv8n三种轻量策略配置），新增启停切换与策略选择' },
      { version: '0.24', summary: '模块联动增强，整理版本更新与爬虫同步，配置面板精简与日志保留策略改进' },
      { version: '0.25', summary: '抓取进度面板视觉升级，运行状态配色复刻整理结果风格，两模块 UI 统一' },
      { version: '0.26', summary: '代码架构模块化解耦：IPC通道常量化、统一错误分类体系、Proxy响应式状态管理、UI控制器拆分（form/organizer分层），统一日志格式规范' },
      { version: '0.30', summary: '核心架构迁移至Go语言开发，软件体积从200MB减小至15MB，爬虫执行引擎全面Go原生接管' }
    ],
    UI_TEXT_SOURCE: {
      hero: {
        eyebrow: 'Windows EXE',
        title: 'JAV自动集成源',
        subtitle: '基于开源项目：raawaa',
        versionTitle: '版本更新',
        connectionTip: '建议全程开启稳定的 VPN / 代理环境，可有效提升抓取速度、稳定性与异常恢复成功率。'
      },
      panels: {
        setupKicker: '任务配置',
        setupTitle: '抓取设置',
        statusKicker: '运行状态',
        statusTitle: '抓取进度',
        logKicker: '运行日志',
        logTitle: '实时日志'
      },
      fields: {
        taskTemplate: '任务模板',
        taskTemplateHelp: '默认会自动带入推荐的并行、延迟和超时配置。',
        limit: '抓取数量',
        limitHelp: '填 0 表示不限制抓取数量。',
        base: '起始地址',
        output: '输出位置',
        totalPages: '总页数',
        totalPagesHelp: '填 0 表示按程序自动判断。',
        itemsPerPage: '每页条数',
        itemsPerPageHelp: '建议按网站实际每页条数填写，默认 30 条。',
        parallel: '并行量',
        parallelHelp: '建议 1 ~ 3，避免触发封控。',
        delay: '请求延迟',
        delayHelp: '单位为秒。',
        timeout: '超时时间',
        timeoutHelp: '单位为毫秒。',
        proxy: '代理服务器',
        proxyHelp: '留空则直连运行；填写后会自动检测代理是否可用，并每 30 秒刷新一次状态。',
        magnetExcludeKeywords: '磁力过滤词',
        magnetExcludeKeywordsHelp: '支持多个关键字，必须使用英文逗号分隔；命中后会自动跳过该磁力。'
      },
      placeholders: {
        base: 'https://www.javbus.com',
        output: '请选择输出目录',
        proxy: 'http://127.0.0.1:7890',
        magnetExcludeKeywords: '-U, 无码'
      },
      proxyStatus: {
        empty: '代理未填写',
        checking: '检测中...',
        valid: '代理正常',
        invalid: '代理失败',
        emptyDetail: '当前将使用直连方式运行。',
        checkingDetail: '正在检测代理连通性，请稍候。',
        validDetail: '检测通过，可继续使用当前代理运行。',
        invalidDetail: '当前代理不可用，请检查协议、地址、端口或代理软件状态。'
      },
      advice: {
        kicker: '智能建议',
        title: '页数估算',
        applyButton: '应用建议',
        defaultPrimary: '填写抓取数量后，系统会按每页条数自动估算总页数。',
        defaultSecondaryPrefix: '当前按每页约 ',
        defaultSecondarySuffix: ' 条估算。',
        suggestedPagesPrefix: '建议总页数：',
        suggestedPagesSuffix: ' 页',
        lastPageEstimatePrefix: '按每页 ',
        lastPageEstimateMiddle: ' 条估算，最后一页约 ',
        lastPageEstimateSuffix: ' 条。',
        manualPagesPrefix: '你当前手动填写：',
        manualPagesSuffix: ' 页。'
      },
      toggles: {
        cloudflareTitle: 'Cloudflare 绕过',
        cloudflareHelp: '被验证页拦截时可开启，提高可恢复性。',
        secondValidationTitle: '结果二次校验',
        secondValidationHelp: '任务结束后对结果做一次对账校验。',
        nomagTitle: '跳过无磁力影片',
        nomagHelp: '没有磁力链接的影片将不写入结果。',
        allmagTitle: '磁力全部爬取',
        allmagHelp: '默认只保留最大磁力，开启后保存全部磁力。',
        magnetContentValidationTitle: '磁力内容校验（广告过滤）',
        magnetContentValidationHelp: '会尝试读取磁力内部文件列表，发现广告包或杂文件包时自动跳过并切换下一条候选磁力；开启后速度会稍慢。',
        nopicTitle: '跳过图片下载',
        nopicHelp: '仅抓取影片信息和磁力，不下载图片。'
      },
      actions: {
        changeBackground: '更换背景',
        resetBackground: '恢复默认',
        updateAntiBlock: '更新反屏蔽',
        openOutput: '打开输出目录',
        openMagnetFile: '打开磁力链接文档',
        browseOutput: '选择',
        start: '开始抓取',
        stop: '终止任务',
        restart: '重新爬取',
        clearLog: '清空日志',
        openLogFolder: '打开日志目录'
      },
      stats: {
        currentPage: '当前页数',
        queued: '已入队',
        attempted: '已尝试',
        completed: '已完成'
      },
      state: {
        label: '状态说明',
        currentLabel: '当前执行',
        unfinishedLabel: '已定位未完成番号',
        duplicateLabel: '已定位重复番号',
        pageGapLabel: '未定位分页缺口',
        failedLabel: '失败详情页',
        defaultMessage: '等待开始抓取。',
        ready: '准备就绪，等待开始。',
        activeEmpty: '当前没有正在执行的项目。',
        unfinishedEmpty: '当前没有已定位未完成番号。',
        duplicateEmpty: '当前没有重复番号。',
        pageGapEmpty: '当前没有未定位分页缺口。',
        failedEmpty: '当前没有失败详情页。',
        failedSummaryPrefix: '失败详情页共 ',
        failedSummaryMiddle: ' 条，当前显示 ',
        failedSummarySuffix: ' 条。',
        unknownItem: '未知项目',
        defaultFailureReason: '未记录失败原因。',
        failureCategoryPrefix: '分类：',
        failureRetryPrefix: '重试：',
        failureManualReview: '需人工复查',
        failureAdvicePrefix: '建议：',
        failureTimePrefix: '最后失败时间：'
      },
      ranking: {
        label: '参考榜单',
        title: 'FANZA 女优榜单',
        channelLabel: '信息渠道',
        modeLabel: '榜单类型',
        yearLabel: '年份',
        monthLabel: '月份',
        monthMode: '月度',
        annualMode: '年度',
        refreshButton: '刷新榜单',
        loading: '正在加载榜单数据...',
        monthHelp: '可选择指定年份与月份，查看对应月度榜单。',
        annualHelp: '可选择指定年份，查看对应年度榜单。',
        unsupportedMonthHistory: '部分来源仅提供最新月份数据，历史月份可能暂时不可用。',
        sourcePrefix: '来源：',
        fetchedAtPrefix: '抓取时间：',
        periodPrefix: '统计周期：',
        totalPrefix: '榜单数量：',
        staleSuffix: '缓存数据',
        openSource: '打开来源',
        openProfile: '打开目录',
        empty: '当前没有可展示的榜单数据。',
        loadFailedMeta: '参考榜单获取失败，请稍后重试。',
        unknownActress: '未知女优',
        autoFillButtonTitleSuffix: ' - 点击后自动填充真实女优目录与有磁力数量',
        rankSuffix: '名',
        sourceItemPrefix: '目录链接：',
        latestHint: '默认优先显示最新可用榜单。',
        annualHint: '切换为年度后将只显示年份维度榜单。',
        noYearData: '暂无年度数据',
        yearOptionSuffix: ' 年',
        noMonthData: '暂无月份数据',
        currentMonthOnly: '月度模式下会优先显示当前月份或最近可用月份。',
        fillHint: '点击女优名称可自动填充起始地址、抓取数量与总页数，便于你检查后开始抓取。',
        officialProxyTip: '该功能建议开启日本地区代理，以获得更稳定的榜单访问体验。'
      },
      log: {
        defaultHint: '任务开始后，这里会实时显示关键日志与运行提示。',
        createdPrefix: '日志文件：',
        createdEventPrefix: '运行日志已创建：',
        cleared: '日志已清空。',
        truncatedSuffix: '内容过长，已自动折叠显示。',
        visibleLevels: ['info', 'warn', 'error'],
        maxVisibleLength: 260,
        hiddenKeywords: [
          'QueueManager: [索引页]',
          'ResourceMonitor:',
          'AJAX重试延迟计算:',
          'Puppeteer池状态',
          '[TIMING]',
          '正在处理详情页:',
          '任务状态已落盘：'
        ],
        initialPathHint: '任务启动后将自动显示本次日志文件路径。'
      },
      messages: {
        templateAppliedPrefix: '已切换任务模板：',
        baseFilledPrefix: '已填充起始地址：',
        backgroundSelectedPrefix: '已切换背景图片：',
        backgroundReset: '已恢复默认背景。',
        startRunning: '抓取任务启动中...',
        restartRunning: '正在执行重新爬取，仅补抓未完成内容...',
        restartQueued: '已提交重新爬取请求，等待当前队列安全切换。',
        restartStarted: '重新爬取已开始。',
        stopRequested: '已发送终止指令，正在中断队列与请求...',
        outputRequired: '请先选择输出目录。',
        outputSelectedPrefix: '已选择输出目录：',
        outputOpenedPrefix: '已打开输出目录：',
        suggestedPagesAppliedPrefix: '已应用建议页数：',
        suggestedPagesAppliedSuffix: ' 页',
        magnetOpenedPrefix: '已打开磁力链接文档：',
        logFolderOpenedPrefix: '已打开日志目录：',
        antiBlockUpdating: '正在更新反屏蔽地址...',
        antiBlockUpdatedPrefix: '已更新反屏蔽地址，共 ',
        antiBlockUpdatedSuffix: ' 条，文件位置：',
        antiBlockUpdateFailedPrefix: '反屏蔽地址更新失败：',
        rankingLoading: '正在刷新 FANZA 榜单...',
        rankingLoadedPrefix: '榜单已刷新：',
        rankingLoadedMiddle: '，共 ',
        rankingLoadedSuffix: ' 条',
        rankingSourceOpenedPrefix: '已打开榜单来源：',
        rankingResolvingPrefix: '正在解析女优目录：',
        rankingResolvedPrefix: '已定位女优：',
        rankingResolvedMagnetPrefix: '有磁力影片 ',
        rankingResolvedAllPrefix: '总站点影片 ',
        rankingResolvedCountSuffix: ' 条',
        rankingResolvedDefaultHint: '结果已自动填充到表单，请检查无误后开始抓取。',
        rankingResolvedPagesPrefix: '预计页数 ',
        rankingResolvedPagesSuffix: ' 页',
        rankingResolveFailedPrefix: '女优目录解析失败：'
      },
      validation: {
        baseRequired: '请填写起始地址。',
        outputRequired: '请先选择输出目录。',
        itemsPerPageInvalid: '每页条数必须大于等于 1。',
        parallelInvalid: '并行量必须大于等于 1。',
        totalPagesInvalid: '总页数必须大于等于 0。',
        delayInvalid: '请求延迟必须大于等于 0。',
        proxyInvalid: '当前代理检测失败，请修正后再启动，或清空代理后直连运行。',
        magnetExcludeKeywordsInvalid: '磁力过滤词格式不正确，请使用英文逗号分隔，例如：-U,SIS001,第一會所',
        timeoutInvalidPrefix: '超时时间不能小于 ',
        timeoutInvalidSuffix: ' 毫秒。'
      },
      limits: {
        defaultItemsPerPage: 30,
        minTimeout: 1000,
        maxLogLines: 240,
        maxPanelItems: 80,
        stateRenderInterval: 180
      },
      runtime: {
        missingDependencies: '桌面端渲染依赖未完整加载。',
        bootstrapFailedPrefix: '桌面界面初始化失败：'
      }
    }
  };

  function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }

  function deepClone(value) {
    if (Array.isArray(value)) {
      return value.map((item) => deepClone(item));
    }

    if (isPlainObject(value)) {
      return Object.entries(value).reduce((result, [key, nestedValue]) => {
        result[key] = deepClone(nestedValue);
        return result;
      }, {});
    }

    return value;
  }

  function deepMerge(baseValue, overrideValue) {
    const baseClone = deepClone(baseValue);

    if (overrideValue == null) {
      return baseClone;
    }

    if (Array.isArray(overrideValue)) {
      return overrideValue.map((item) => deepClone(item));
    }

    if (!isPlainObject(overrideValue)) {
      return deepClone(overrideValue);
    }

    const nextValue = isPlainObject(baseClone) ? baseClone : {};

    Object.entries(overrideValue).forEach(([key, value]) => {
      if (value === undefined) {
        return;
      }

      if (Array.isArray(value)) {
        nextValue[key] = value.map((item) => deepClone(item));
        return;
      }

      if (isPlainObject(value)) {
        nextValue[key] = deepMerge(nextValue[key], value);
        return;
      }

      nextValue[key] = value;
    });

    return nextValue;
  }

  const registrySharedText = isPlainObject(globalScope.__desktopTextModules) ? globalScope.__desktopTextModules : {};
  const appSharedText = isPlainObject(globalScope.desktopAppText) ? globalScope.desktopAppText : {};
  const sharedText = deepMerge(deepMerge(FALLBACK_SHARED_TEXT, registrySharedText), appSharedText);
  const appInfo = sharedText.APP_INFO || FALLBACK_SHARED_TEXT.APP_INFO;
  const versionHistory = Array.isArray(sharedText.VERSION_HISTORY)
    ? sharedText.VERSION_HISTORY
    : FALLBACK_SHARED_TEXT.VERSION_HISTORY;
  const urlSuggestions = Array.isArray(sharedText.URL_SUGGESTIONS)
    ? sharedText.URL_SUGGESTIONS
    : FALLBACK_SHARED_TEXT.URL_SUGGESTIONS;
  const taskTemplates = isPlainObject(sharedText.TASK_TEMPLATES)
    ? sharedText.TASK_TEMPLATES
    : FALLBACK_SHARED_TEXT.TASK_TEMPLATES;
  const statusLabels = isPlainObject(sharedText.STATUS_LABELS)
    ? sharedText.STATUS_LABELS
    : FALLBACK_SHARED_TEXT.STATUS_LABELS;
  const failureCategoryLabels = isPlainObject(sharedText.FAILURE_CATEGORY_LABELS)
    ? sharedText.FAILURE_CATEGORY_LABELS
    : FALLBACK_SHARED_TEXT.FAILURE_CATEGORY_LABELS;
  const uiTextSource = isPlainObject(sharedText.UI_TEXT_SOURCE)
    ? sharedText.UI_TEXT_SOURCE
    : FALLBACK_SHARED_TEXT.UI_TEXT_SOURCE;
  const hasExternalUiTextSource =
    (isPlainObject(appSharedText.UI_TEXT_SOURCE) && Object.keys(appSharedText.UI_TEXT_SOURCE).length > 0) ||
    (isPlainObject(registrySharedText.UI_TEXT_SOURCE) && Object.keys(registrySharedText.UI_TEXT_SOURCE).length > 0);

  if (!hasExternalUiTextSource && typeof console !== 'undefined' && typeof console.warn === 'function') {
    console.warn('桌面共享文案模块未完整加载，已启用内置中文兜底文案。');
  }

  const UI_TEXT = deepMerge(
    {
      appTitle: appInfo.title || 'JAV自动化整理归纳视频软件',
      version: appInfo.version || '0.30',
      source: {
        href: appInfo.sourceUrl || 'https://www.javbus.com/star/okq',
        name: appInfo.sourceName || '三上悠亜'
      }
    },
    uiTextSource
  );

  function getValueByPath(source, valuePath) {
    return String(valuePath || '')
      .split('.')
      .filter(Boolean)
      .reduce((currentValue, currentKey) => (currentValue == null ? undefined : currentValue[currentKey]), source);
  }

  function clearChildren(container) {
    while (container && container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  function applyDatasetText(root) {
    root.querySelectorAll('[data-ui-text]').forEach((node) => {
      const value = getValueByPath(UI_TEXT, node.dataset.uiText);
      if (typeof value === 'string') {
        node.textContent = value;
      }
    });

    root.querySelectorAll('[data-ui-placeholder]').forEach((node) => {
      const value = getValueByPath(UI_TEXT, node.dataset.uiPlaceholder);
      if (typeof value === 'string') {
        node.setAttribute('placeholder', value);
      }
    });
  }

  function renderTaskTemplateOptions(selectElement) {
    if (!selectElement) {
      return;
    }

    clearChildren(selectElement);

    Object.entries(taskTemplates).forEach(([value, template]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = template.label;
      selectElement.appendChild(option);
    });
  }

  function renderVersionHistory(listElement) {
    if (!listElement) {
      return;
    }

    clearChildren(listElement);

    versionHistory.forEach((item) => {
      const entry = document.createElement('li');
      const version = document.createElement('strong');

      version.textContent = item.version;
      entry.appendChild(version);
      entry.appendChild(document.createTextNode(item.summary));
      listElement.appendChild(entry);
    });
  }

  function renderBaseUrlChips(container) {
    if (!container) {
      return;
    }

    clearChildren(container);

    urlSuggestions.forEach((url) => {
      const button = document.createElement('button');
      button.className = 'base-url-chip';
      button.type = 'button';
      button.dataset.url = url;
      button.textContent = url;
      container.appendChild(button);
    });
  }

  function applyStaticText(root = document) {
    // Resolve section-level text once here so DOM writes stay simple and later
    // copy ownership changes do not spread fallback checks across the file.
    const stateText = isPlainObject(UI_TEXT.state) ? UI_TEXT.state : FALLBACK_SHARED_TEXT.UI_TEXT_SOURCE.state;
    const adviceText = isPlainObject(UI_TEXT.advice) ? UI_TEXT.advice : FALLBACK_SHARED_TEXT.UI_TEXT_SOURCE.advice;
    const logText = isPlainObject(UI_TEXT.log) ? UI_TEXT.log : FALLBACK_SHARED_TEXT.UI_TEXT_SOURCE.log;
    const limits = isPlainObject(UI_TEXT.limits) ? UI_TEXT.limits : FALLBACK_SHARED_TEXT.UI_TEXT_SOURCE.limits;

    document.title = UI_TEXT.appTitle;
    applyDatasetText(root);

    const versionBadge = root.getElementById('version-badge');
    if (versionBadge) {
      versionBadge.textContent = `v${UI_TEXT.version}`;
    }

    const organizerVersionBadge = root.getElementById('organizer-version-badge');
    if (organizerVersionBadge) {
      organizerVersionBadge.textContent = `v${UI_TEXT.version}`;
    }

    const subscriptionVersionBadge = root.getElementById('subscription-version-badge');
    if (subscriptionVersionBadge) {
      subscriptionVersionBadge.textContent = `v${UI_TEXT.version}`;
    }

    const sourceLink = root.getElementById('source-link');
    if (sourceLink) {
      sourceLink.textContent = UI_TEXT.source.name;
      sourceLink.href = UI_TEXT.source.href;
    }

    const statusPill = root.getElementById('status-pill');
    if (statusPill) {
      statusPill.textContent = statusLabels.idle || '待机';
    }

    const stateMessage = root.getElementById('state-message');
    if (stateMessage) {
      stateMessage.textContent = stateText.defaultMessage;
    }

    const totalPagesAdvice = root.getElementById('total-pages-advice');
    if (totalPagesAdvice) {
      totalPagesAdvice.textContent = adviceText.defaultPrimary;
    }

    const totalPagesMeta = root.getElementById('total-pages-meta');
    if (totalPagesMeta) {
      totalPagesMeta.textContent = `${adviceText.defaultSecondaryPrefix}${limits.defaultItemsPerPage}${adviceText.defaultSecondarySuffix}`;
    }

    const logFilePath = root.getElementById('log-file-path');
    if (logFilePath) {
      logFilePath.textContent = logText.initialPathHint;
    }

    renderTaskTemplateOptions(root.getElementById('taskTemplate'));
    renderVersionHistory(root.getElementById('version-history-list'));
    renderVersionHistory(root.getElementById('organizer-version-history-list'));
    renderBaseUrlChips(root.getElementById('base-url-hints'));
  }

  globalScope.desktopUiText = {
    UI_TEXT,
    STATUS_LABELS: statusLabels,
    TASK_TEMPLATES: taskTemplates,
    FAILURE_CATEGORY_LABELS: failureCategoryLabels,
    isUsingFallbackBundle: !hasExternalUiTextSource,
    applyStaticText,
    renderTaskTemplateOptions,
    renderVersionHistory,
    renderBaseUrlChips
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/logController.js ==== */
// Log controller is the renderer-side projection of backend logs.
// It keeps UI updates cheap by batching, truncating, and filtering visible
// messages without changing the underlying on-disk run log.
//
// Ownership summary:
// 1) batch visible renderer log lines for cheap UI updates
// 2) enforce truncation/filtering/display-level policy
// 3) keep on-screen log rendering separate from on-disk log persistence
//
// Boundary rule:
// - display policy lives here
// - file creation/flush policy lives in backend log writers/bridges
//
// File map for maintainers:
// 1) visible-message shaping and filter policy
// 2) renderer log batch scheduling/flush helpers
// 3) log-context/path UI projection helpers
(function initializeLogController(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const clearChildren = rendererHelpers.clearChildren;

  if (!clearChildren) {
    throw new Error('desktopRendererHelpers must be loaded before logController');
  }

  function createLogController(options) {
    const {
      logView,
      logFilePath,
      maxLines,
      defaultHint,
      logPathPrefix,
      truncatedSuffix = '...(truncated)',
      visibleLevels = ['info', 'warn', 'error'],
      maxVisibleLength = 240,
      hiddenKeywords = []
    } = options;

    let queuedLogs = [];
    let flushScheduled = false;
    let flushHandle = null;
    let flushHandleKind = '';
    let currentLogContextText = '';

    const visibleLevelSet = new Set(visibleLevels.map((level) => String(level).toLowerCase()));

    function normalizeVisibleMessage(message) {
      // Visible log shaping is a UI-only concern. It must not mutate the real
      // run log semantics or on-disk content.
      const singleLineMessage = String(message ?? '').replace(/\s+/g, ' ').trim();
      if (singleLineMessage.length <= maxVisibleLength) {
        return singleLineMessage;
      }

      return `${singleLineMessage.slice(0, maxVisibleLength)} ${truncatedSuffix}`;
    }

    function shouldDisplay(level, message) {
      const normalizedLevel = String(level || '').toLowerCase();
      if (!visibleLevelSet.has(normalizedLevel)) {
        return false;
      }

      return !hiddenKeywords.some((keyword) => String(message || '').includes(keyword));
    }

    function scheduleFlush() {
      // Batching keeps high-frequency crawl logs from forcing synchronous DOM
      // work on every single line.
      if (flushScheduled) {
        return;
      }

      flushScheduled = true;
      if (typeof globalScope.requestAnimationFrame === 'function') {
        flushHandleKind = 'raf';
        flushHandle = globalScope.requestAnimationFrame(flushLogs);
        return;
      }

      flushHandleKind = 'timeout';
      flushHandle = globalScope.setTimeout(flushLogs, 16);
    }

    function appendLog(level, message, timestamp) {
      if (!shouldDisplay(level, message)) {
        return;
      }

      queuedLogs.push({
        level: String(level || 'info').toLowerCase(),
        message: normalizeVisibleMessage(message),
        timestamp
      });

      scheduleFlush();
    }

    function flushLogs() {
      flushScheduled = false;
      flushHandle = null;
      flushHandleKind = '';

      if (queuedLogs.length === 0) {
        return;
      }

      const shouldStickToBottom =
        logView.scrollHeight - logView.scrollTop - logView.clientHeight <= Math.max(logView.clientHeight * 0.25, 48);

      const fragment = document.createDocumentFragment();
      const batch = queuedLogs;
      queuedLogs = [];

      batch.forEach((item) => {
        const line = document.createElement('div');
        const date = item.timestamp ? new Date(item.timestamp) : new Date();

        line.className = `log-line ${item.level}`;
        line.textContent = `[${date.toLocaleString('zh-CN', { hour12: false })}] ${item.message}`;
        fragment.appendChild(line);
      });

      logView.appendChild(fragment);

      while (logView.childElementCount > maxLines) {
        logView.removeChild(logView.firstElementChild);
      }

      if (shouldStickToBottom) {
        logView.scrollTop = logView.scrollHeight;
      }
    }

    function updateLogContext(context = {}) {
      // Log context only projects the current visible paths/hint. It should
      // not infer run state or create file-path business rules in the renderer.
      const nextText =
        context && context.sessionLogPath ? `${logPathPrefix}${context.sessionLogPath}` : defaultHint;

      if (nextText === currentLogContextText) {
        return;
      }

      currentLogContextText = nextText;
      logFilePath.textContent = nextText;
      logFilePath.title = nextText;
    }

    function clearLogView() {
      // Clearing the visible panel must not touch on-disk logs. This controller
      // only resets the renderer projection/buffer.
      queuedLogs = [];
      if (flushHandle != null) {
        if (flushHandleKind === 'raf' && typeof globalScope.cancelAnimationFrame === 'function') {
          globalScope.cancelAnimationFrame(flushHandle);
        } else {
          globalScope.clearTimeout(flushHandle);
        }
        flushHandle = null;
        flushHandleKind = '';
      }
      flushScheduled = false;
      clearChildren(logView);
    }

    return {
      appendLog,
      clearLogView,
      updateLogContext
    };
  }

  globalScope.desktopLogController = {
    createLogController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/heroBorderFlowController.js ==== */
// Visual-only hero border flow controller.
// It keeps a single animated trace running around the rounded hero border.
(function initializeHeroBorderFlowController(globalScope) {
  const THEME_MAP = {
    crawler: {
      core: ['#6fe7ff', '#92a8ff', '#b58cff', '#ff84c9', '#78f3a0', '#6fe7ff']
    },
    organizer: {
      core: ['#ffd36f', '#ffb347', '#ff8c6a', '#ef4444', '#ff9f7a', '#ffd36f']
    },
    subscription: {
      core: ['#a78bfa', '#c084fc', '#ec4899', '#7dd3fc', '#b58cff', '#a78bfa']
    }
  };

  function clamp01(value) {
    if (value < 0) {
      return 0;
    }
    if (value > 1) {
      return 1;
    }
    return value;
  }

  function clampByte(value) {
    return Math.max(0, Math.min(255, Math.round(value)));
  }

  function hexToRgb(hexColor) {
    const value = String(hexColor || '').trim().replace('#', '');
    if (value.length !== 6) {
      return { r: 255, g: 255, b: 255 };
    }

    return {
      r: Number.parseInt(value.slice(0, 2), 16),
      g: Number.parseInt(value.slice(2, 4), 16),
      b: Number.parseInt(value.slice(4, 6), 16)
    };
  }

  function rgbToHex(rgbColor) {
    return `#${[rgbColor.r, rgbColor.g, rgbColor.b]
      .map((channel) => clampByte(channel).toString(16).padStart(2, '0'))
      .join('')}`;
  }

  function rgbToRgba(rgbColor, alpha) {
    return `rgba(${clampByte(rgbColor.r)}, ${clampByte(rgbColor.g)}, ${clampByte(rgbColor.b)}, ${alpha})`;
  }

  function mixColors(startColor, endColor, progress) {
    const safeProgress = clamp01(progress);
    return {
      r: startColor.r + (endColor.r - startColor.r) * safeProgress,
      g: startColor.g + (endColor.g - startColor.g) * safeProgress,
      b: startColor.b + (endColor.b - startColor.b) * safeProgress
    };
  }

  function samplePaletteColor(palette, position) {
    if (!Array.isArray(palette) || palette.length === 0) {
      return '#ffffff';
    }
    if (palette.length === 1) {
      return palette[0];
    }

    const safePosition = ((position % 1) + 1) % 1;
    const scaled = safePosition * (palette.length - 1);
    const index = Math.floor(scaled);
    const nextIndex = (index + 1) % palette.length;
    const localProgress = scaled - index;
    const startColor = hexToRgb(palette[index]);
    const endColor = hexToRgb(palette[nextIndex]);
    return mixColors(startColor, endColor, localProgress);
  }

  function createRendererEntry(heroNode) {
    if (!heroNode) {
      return null;
    }

    const themeKey = String(heroNode.dataset.heroBorderTheme || '').trim();
    const theme = THEME_MAP[themeKey];
    if (!theme) {
      return null;
    }

    const coreTraceNode = heroNode.querySelector('.hero-border-trace-core');
    if (!coreTraceNode) {
      return null;
    }

    return {
      coreTraceNode,
      theme,
      speed: 0.0046,
      colorSpeed: 0.00006,
      pathLength: 100
    };
  }

  function createHeroBorderFlowController() {
    const entries = [];
    let running = false;

    function tick(now) {
      if (!running) {
        return;
      }

      for (let index = 0; index < entries.length; index += 1) {
        const entry = entries[index];
        const offset = -((now * entry.speed) % entry.pathLength);
        const colorRgb = samplePaletteColor(entry.theme.core, now * entry.colorSpeed + index * 0.07);
        const strokeHex = rgbToHex(colorRgb);
        const glowStrong = rgbToRgba(colorRgb, 0.55);
        const glowSoft = rgbToRgba(colorRgb, 0.28);

        entry.coreTraceNode.style.strokeDashoffset = offset.toFixed(3);
        entry.coreTraceNode.setAttribute('stroke', strokeHex);
        entry.coreTraceNode.style.filter =
          `drop-shadow(0 0 6px ${glowStrong}) drop-shadow(0 0 16px ${glowSoft})`;
      }

      globalScope.requestAnimationFrame(tick);
    }

    function bootstrap() {
      const heroNodes = Array.from(document.querySelectorAll('.hero[data-hero-border-theme]'));
      for (let index = 0; index < heroNodes.length; index += 1) {
        const entry = createRendererEntry(heroNodes[index]);
        if (entry) {
          entries.push(entry);
        }
      }

      if (entries.length === 0 || typeof globalScope.requestAnimationFrame !== 'function') {
        return;
      }

      if (!running) {
        running = true;
        globalScope.requestAnimationFrame(tick);
      }
    }

    return {
      bootstrap
    };
  }

  globalScope.desktopHeroBorderFlowController = {
    createHeroBorderFlowController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/artifactInputHelper.js ==== */
// Artifact-input helper centralizes renderer-side access to the shared latest
// crawl artifact resolver. Organizer and subscription should both use this
// helper so fallback wording and empty-state handling stay identical.
//
// It should stay a pure renderer convenience layer and not learn artifact file
// parsing rules that belong to the Go bridge/services.
//
// Ownership summary:
// 1) centralize renderer-side access to the latest crawl artifact resolver
// 2) keep organizer/subscription fallback artifact input shaping consistent
// 3) separate renderer convenience access from artifact parsing logic
//
// File map for maintainers:
// 1) shared artifact resolver lookup
// 2) empty/latest/current artifact input helpers
// 3) renderer-facing fallback description helpers
(function initializeArtifactInputHelper(globalScope) {
  function getArtifactInputResolver(globalScopeRef) {
    const platformBridge = globalScopeRef.desktopPlatformBridge || null;
    return platformBridge && typeof platformBridge.getArtifactInputResolver === 'function'
      ? platformBridge.getArtifactInputResolver()
      : globalScopeRef.desktopArtifactInputResolver || null;
  }

  function createArtifactInputHelper(options = {}) {
    const resolver = options.resolver || getArtifactInputResolver(globalScope) || null;
    const readCurrentValue =
      typeof options.readCurrentValue === 'function' ? options.readCurrentValue : () => '';
    const writeCurrentValue =
      typeof options.writeCurrentValue === 'function' ? options.writeCurrentValue : (value) => String(value || '').trim();
    const labels = options.labels && typeof options.labels === 'object' ? options.labels : {};
    const latestInputOptions =
      options.latestInputOptions && typeof options.latestInputOptions === 'object' ? options.latestInputOptions : {};

    function emptyResolvedInput() {
      // Empty-shape fallback stays here so organizer/subscription callers share
      // one stable artifact contract even when no resolver is currently wired.
      return resolver && typeof resolver.emptyResolvedInput === 'function'
        ? resolver.emptyResolvedInput()
        : {
            value: '',
            type: '',
            sourceKind: '',
            sourceOrigin: '',
            isFallbackOutputDir: false
          };
    }

    async function resolveLatestInput(desktopApi, queryOptions = null) {
      // Renderer callers should always reuse the shared resolver contract here
      // instead of rebuilding panel/result/run-context fallback order locally.
      const normalizedQueryOptions =
        queryOptions && typeof queryOptions === 'object' ? queryOptions : latestInputOptions;
      if (resolver && typeof resolver.resolveLatestInputSafe === 'function') {
        return resolver.resolveLatestInputSafe(desktopApi, normalizedQueryOptions);
      }
      if (resolver && typeof resolver.resolveLatestInput === 'function') {
        return resolver.resolveLatestInput(desktopApi, normalizedQueryOptions);
      }
      return emptyResolvedInput();
    }

    function describeResolvedInput(action, latestArtifact, labels = {}, fallbackValue = '') {
      // Description wording belongs with the resolver contract so organizer and
      // subscription flows explain the same fallback source in the same way.
      if (resolver && typeof resolver.describeResolvedInputOrFallback === 'function') {
        return resolver.describeResolvedInputOrFallback(action, latestArtifact, labels, fallbackValue);
      }
      if (resolver && typeof resolver.describeResolvedInput === 'function') {
        return resolver.describeResolvedInput(action, latestArtifact, labels);
      }
      return '';
    }

    function getLabels() {
      return {
        snapshot: String(labels.snapshot || '快照').trim(),
        fallback: String(labels.fallback || '抓取结果输入').trim()
      };
    }

    function getCurrentArtifactInput() {
      return String(readCurrentValue() || '').trim();
    }

    function applyArtifactInputValue(artifactInput) {
      return String(writeCurrentValue(artifactInput) || '').trim();
    }

    function describeArtifactInput(action, latestArtifact, fallbackValue) {
      const scopedLabels = getLabels();
      const message = describeResolvedInput(action, latestArtifact, scopedLabels, fallbackValue);
      if (message) {
        return message;
      }
      const verb = action === 'filled' ? '已回填最近' : '自动回填最近';
      return fallbackValue ? `${verb}${scopedLabels.fallback}：${fallbackValue}` : '';
    }

    // This helper is the shared renderer-side textbox + latest-artifact
    // resolution boundary. Organizer and subscription should both reuse it
    // instead of each maintaining their own current-value/autofill flow.
    async function resolveArtifactInputState(desktopApi, queryOptions = null, stateOptions = {}) {
      const mode = String(stateOptions.mode || 'current').trim();
      const currentValue = getCurrentArtifactInput();
      if (currentValue) {
        return {
          artifactInput: currentValue,
          latestArtifact: null,
          message: ''
        };
      }

      if (mode !== 'autofill') {
        return {
          artifactInput: '',
          latestArtifact: null,
          message: ''
        };
      }

      const latestArtifact = await resolveLatestInput(desktopApi, queryOptions);
      const artifactInput = applyArtifactInputValue(latestArtifact && latestArtifact.value);
      return {
        artifactInput,
        latestArtifact,
        message: artifactInput ? describeArtifactInput('autofill', latestArtifact, artifactInput) : ''
      };
    }

    async function fillLatestArtifactInput(desktopApi) {
      const latestArtifact = await resolveLatestInput(desktopApi);
      const artifactInput = applyArtifactInputValue(latestArtifact && latestArtifact.value);
      return {
        artifactInput,
        latestArtifact,
        message: artifactInput ? describeArtifactInput('filled', latestArtifact, artifactInput) : ''
      };
    }

    return {
      applyArtifactInputValue,
      describeArtifactInput,
      describeResolvedInput,
      emptyResolvedInput,
      fillLatestArtifactInput,
      getCurrentArtifactInput,
      resolveArtifactInputState,
      resolveLatestInput
    };
  }

  globalScope.desktopArtifactInputHelper = {
    createArtifactInputHelper,
    getArtifactInputResolver: () => getArtifactInputResolver(globalScope)
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/rendererElementDomains.js ==== */
// Renderer element-domain helpers split the page-wide DOM registry into
// crawler, organizer, subscription, and shell segments. This keeps the main
// element collector readable and makes future per-module element cleanup less
// error-prone.
//
// Ownership summary:
// 1) define per-workspace DOM lookup ownership
// 2) keep page-wide element collection segmented by domain
// 3) avoid letting controllers hand-maintain scattered getElementById calls
//
// File map for maintainers:
// 1) shell element ownership
// 2) crawler element ownership
// 3) organizer/subscription element ownership
(function initializeRendererElementDomains(globalScope) {
  // Shell nodes are the only DOM handles shared across workspaces. Keep this
  // list limited to navigation and top-level container ownership.
  function collectShellElements(scope) {
    return {
      navCrawlerButton: scope.getElementById('nav-crawler'),
      navOrganizerButton: scope.getElementById('nav-organizer'),
      navSubscriptionButton: scope.getElementById('nav-subscription'),
      crawlerWorkspace: scope.getElementById('crawler-workspace'),
      organizerWorkspace: scope.getElementById('organizer-workspace'),
      subscriptionWorkspace: scope.getElementById('subscription-workspace')
    };
  }

  // Crawler/organizer/subscription collectors should contain only DOM lookup
  // ownership, not fallback logic. Controllers may decide how to behave when a
  // node is absent, but this file should stay a pure registry.
  function collectCrawlerElements(scope) {
    return {
      base: scope.getElementById('base'),
      output: scope.getElementById('output'),
      limit: scope.getElementById('limit'),
      totalPages: scope.getElementById('totalPages'),
      itemsPerPage: scope.getElementById('itemsPerPage'),
      parallel: scope.getElementById('parallel'),
      delay: scope.getElementById('delay'),
      timeout: scope.getElementById('timeout'),
      proxy: scope.getElementById('proxy'),
      proxyStatus: scope.getElementById('proxy-status'),
      proxyStatusDetail: scope.getElementById('proxy-status-detail'),
      magnetExcludeKeywords: scope.getElementById('magnetExcludeKeywords'),
      actressCountFilterThreshold: scope.getElementById('actressCountFilterThreshold'),
      taskTemplate: scope.getElementById('taskTemplate'),
      cloudflare: scope.getElementById('cloudflare'),
      secondValidation: scope.getElementById('secondValidation'),
      nomag: scope.getElementById('nomag'),
      allmag: scope.getElementById('allmag'),
      magnetContentValidation: scope.getElementById('magnetContentValidation'),
      nopic: scope.getElementById('nopic'),
      startButton: scope.getElementById('start'),
      stopButton: scope.getElementById('stop'),
      restartButton: scope.getElementById('restart'),
      chooseBackgroundButton: scope.getElementById('choose-background'),
      resetBackgroundButton: scope.getElementById('reset-background'),
      browseOutputButton: scope.getElementById('browse-output'),
      openOutputButton: scope.getElementById('open-output'),
      openMagnetFileButton: scope.getElementById('open-magnet-file'),
      openLogFolderButton: scope.getElementById('open-log-folder'),
      updateAntiBlockButton: scope.getElementById('update-antiblock'),
      clearLogButton: scope.getElementById('clear-log'),
      useSuggestedPagesButton: scope.getElementById('use-suggested-pages'),
      statusPill: scope.getElementById('status-pill'),
      stateMessage: scope.getElementById('state-message'),
      currentBox: scope.getElementById('current-box'),
      currentTotalView: scope.getElementById('current-total'),
      currentItemsView: scope.getElementById('current-items'),
      unfinishedBox: scope.getElementById('unfinished-box'),
      unfinishedItemsView: scope.getElementById('unfinished-items'),
      unfinishedTotalView: scope.getElementById('unfinished-total'),
      duplicateBox: scope.getElementById('duplicate-box'),
      duplicateItemsView: scope.getElementById('duplicate-items'),
      duplicateTotalView: scope.getElementById('duplicate-total'),
      pageGapBox: scope.getElementById('page-gap-box'),
      pageGapItemsView: scope.getElementById('page-gap-items'),
      failedBox: scope.getElementById('failed-box'),
      failedTotalView: scope.getElementById('failed-total'),
      failedItemsView: scope.getElementById('failed-items'),
      filteredBox: scope.getElementById('filtered-box'),
      filteredItemsView: scope.getElementById('filtered-items'),
      filteredTotalView: scope.getElementById('filtered-total'),
      crawlStageStatus: scope.getElementById('crawl-stage-status'),
      crawlStageProgress: scope.getElementById('crawl-stage-progress'),
      crawlStageTitle: scope.getElementById('crawl-stage-title'),
      crawlStageDescription: scope.getElementById('crawl-stage-description'),
      crawlStageMessage: scope.getElementById('crawl-stage-message'),
      crawlStageBarFill: scope.getElementById('crawl-stage-bar-fill'),
      crawlStageOutput: scope.getElementById('crawl-stage-output'),
      crawlStagePage: scope.getElementById('crawl-stage-page'),
      crawlStageQueued: scope.getElementById('crawl-stage-queued'),
      crawlStageAttempted: scope.getElementById('crawl-stage-attempted'),
      crawlStageCompleted: scope.getElementById('crawl-stage-completed'),
      crawlResultQuality: scope.getElementById('crawl-result-quality'),
      crawlResultSummary: scope.getElementById('crawl-result-summary'),
      crawlResultHistoryView: scope.getElementById('crawl-result-history'),
      crawlClearHistoryButton: scope.getElementById('crawl-clear-history'),
      logView: scope.getElementById('log-view'),
      logFilePath: scope.getElementById('log-file-path'),
      statPage: scope.getElementById('stat-page'),
      statQueued: scope.getElementById('stat-queued'),
      statAttempted: scope.getElementById('stat-attempted'),
      statCompleted: scope.getElementById('stat-completed'),
      totalPagesAdvice: scope.getElementById('total-pages-advice'),
      totalPagesMeta: scope.getElementById('total-pages-meta'),
      baseUrlHints: scope.getElementById('base-url-hints'),
      sourceLink: scope.getElementById('source-link'),
      rankingMode: scope.getElementById('ranking-mode'),
      rankingSourceChannel: scope.getElementById('ranking-source-channel'),
      rankingYear: scope.getElementById('ranking-year'),
      rankingYearField: scope.getElementById('ranking-year-field'),
      rankingMonth: scope.getElementById('ranking-month'),
      rankingMonthField: scope.getElementById('ranking-month-field'),
      rankingHelp: scope.getElementById('ranking-help'),
      rankingChannelTip: scope.getElementById('ranking-channel-tip'),
      rankingMeta: scope.getElementById('ranking-meta'),
      rankingSource: scope.getElementById('ranking-source'),
      rankingSourceText: scope.getElementById('ranking-source-text'),
      openRankingSourceButton: scope.getElementById('open-ranking-source'),
      refreshRankingButton: scope.getElementById('refresh-ranking'),
      rankingView: scope.getElementById('ranking-view'),
      crawlCacheSelect: scope.getElementById('crawl-cache-select'),
      crawlCacheRefreshButton: scope.getElementById('crawl-cache-refresh'),
      crawlCacheRemoveButton: scope.getElementById('crawl-cache-remove'),
      crawlCacheClearButton: scope.getElementById('crawl-cache-clear'),
      crawlCacheSummary: scope.getElementById('crawl-cache-summary')
    };
  }

  function collectOrganizerElements(scope) {
    // Organizer lookups stay grouped so future organizer-only UI cleanup can
    // happen without reopening crawler or subscription controllers.
    return {
      organizerRoot: scope.getElementById('organizer-root'),
      organizerBrowseRootButton: scope.getElementById('organizer-browse-root'),
      organizerOpenRootButton: scope.getElementById('organizer-open-root'),
      organizerCrawlOutput: scope.getElementById('organizer-crawl-output'),
      organizerUseLatestOutputButton: scope.getElementById('organizer-use-latest-output'),
      organizerLoadCodesButton: scope.getElementById('organizer-load-codes'),
      organizerCodeSource: scope.getElementById('organizer-code-source'),
      organizerCodeCount: scope.getElementById('organizer-code-count'),
      organizerMinSize: scope.getElementById('organizer-min-size'),
      organizerSuffix: scope.getElementById('organizer-suffix'),
      organizerVideoExtensions: scope.getElementById('organizer-video-extensions'),
      organizerAdFileActionMove: scope.getElementById('organizer-ad-file-action-move'),
      organizerAdFileActionDelete: scope.getElementById('organizer-ad-file-action-delete'),
      organizerDryRun: scope.getElementById('organizer-dry-run'),
      organizerIncludeSubdirectories: scope.getElementById('organizer-include-subdirectories'),
      organizerStrictCodeMatch: scope.getElementById('organizer-strict-code-match'),
      organizerAdDetectionEnabled: scope.getElementById('organizer-ad-detection-enabled'),
      organizerAdDetectionEnable: scope.getElementById('organizer-ad-detection-enable'),
      organizerAdDetectionDisable: scope.getElementById('organizer-ad-detection-disable'),
      organizerAdModelType: scope.getElementById('organizer-ad-model-type'),
      organizerAdThreshold: scope.getElementById('organizer-ad-threshold'),
      organizerAdKeywords: scope.getElementById('organizer-ad-keywords'),
      organizerLearningCodes: scope.getElementById('organizer-learning-codes'),
      organizerImportAdSamplesButton: scope.getElementById('organizer-import-ad-samples'),
      organizerHelpImportAdButton: scope.getElementById('organizer-help-import-ad'),
      organizerImportNormalSamplesButton: scope.getElementById('organizer-import-normal-samples'),
      organizerHelpImportNormalButton: scope.getElementById('organizer-help-import-normal'),
      organizerLearnAdByCodesButton: scope.getElementById('organizer-learn-ad-by-codes'),
      organizerHelpLearnAdButton: scope.getElementById('organizer-help-learn-ad'),
      organizerLearnNormalByCodesButton: scope.getElementById('organizer-learn-normal-by-codes'),
      organizerHelpLearnNormalButton: scope.getElementById('organizer-help-learn-normal'),
      organizerRefreshLearningSummaryButton: scope.getElementById('organizer-refresh-learning-summary'),
      organizerLearningSummary: scope.getElementById('organizer-learning-summary'),
      organizerDependencySummary: scope.getElementById('organizer-dependency-summary'),
      organizerDependencyDetail: scope.getElementById('organizer-dependency-detail'),
      organizerRefreshDependencyButton: scope.getElementById('organizer-refresh-dependency'),
      organizerInstallFfmpegButton: scope.getElementById('organizer-install-ffmpeg'),
      organizerInstallOnnxButton: scope.getElementById('organizer-install-onnx'),
      organizerDeleteDependencyButton: scope.getElementById('organizer-delete-dependency'),
      organizerFfmpegDownloadUrl: scope.getElementById('organizer-ffmpeg-download-url'),
      organizerOnnxDownloadUrl: scope.getElementById('organizer-onnx-download-url'),
      organizerAlistUrl: scope.getElementById('organizer-alist-url'),
      organizerStartButton: scope.getElementById('organizer-start'),
      organizerPreviewButton: scope.getElementById('organizer-preview'),
      organizerOpenWaitingButton: scope.getElementById('organizer-open-waiting'),
      organizerOpenDeleteButton: scope.getElementById('organizer-open-delete'),
      organizerOpenIntroAdButton: scope.getElementById('organizer-open-intro-ad'),
      organizerOpenReportsButton: scope.getElementById('organizer-open-reports'),
      organizerClearLogButton: scope.getElementById('organizer-clear-log'),
      organizerStatusPill: scope.getElementById('organizer-status-pill'),
      organizerScanned: scope.getElementById('organizer-stat-scanned'),
      organizerVideoTotal: scope.getElementById('organizer-stat-video'),
      organizerMatched: scope.getElementById('organizer-stat-matched'),
      organizerMovedWaiting: scope.getElementById('organizer-stat-waiting'),
      organizerMovedDelete: scope.getElementById('organizer-stat-delete'),
      organizerFailed: scope.getElementById('organizer-stat-failed'),
      organizerSummaryMessage: scope.getElementById('organizer-summary-message'),
      organizerHeroSubtitle: scope.querySelector('#organizer-hero .hero-subtitle'),
      organizerHeroTip: scope.querySelector('#organizer-hero .hero-tip'),
      organizerReportPaths: scope.getElementById('organizer-report-paths'),
      organizerReviewPanel: scope.getElementById('organizer-review-panel'),
      organizerLogView: scope.getElementById('organizer-log-view')
    };
  }

  function collectSubscriptionElements(scope) {
    // Subscription nodes are intentionally isolated from crawler lookups even
    // when they may later reuse shared artifact concepts. Keep the DOM contract
    // independent so page changes do not silently couple the workspaces again.
    return {
      subscriptionOutput: scope.getElementById('subscription-output'),
      subscriptionUseLatestOutputButton: scope.getElementById('subscription-use-latest-output'),
      subscriptionScanButton: scope.getElementById('subscription-scan-output'),
      subscriptionActressName: scope.getElementById('subscription-actress-name'),
      subscriptionTargetUrl: scope.getElementById('subscription-target-url'),
      subscriptionSyncedCount: scope.getElementById('subscription-synced-count'),
      subscriptionItemsPerPage: scope.getElementById('subscription-items-per-page'),
      subscriptionTotalPages: scope.getElementById('subscription-total-pages'),
      subscriptionAddButton: scope.getElementById('subscription-add'),
      subscriptionRefreshButton: scope.getElementById('subscription-refresh'),
      subscriptionClearAllButton: scope.getElementById('subscription-clear-all'),
      subscriptionClearFormButton: scope.getElementById('subscription-clear-form'),
      subscriptionRecentCrawlSelect: scope.getElementById('subscription-recent-crawl-select'),
      subscriptionUseRecentCrawlButton: scope.getElementById('subscription-use-recent-crawl'),
      subscriptionImportRecentButton: scope.getElementById('subscription-import-recent'),
      subscriptionDetectAllButton: scope.getElementById('subscription-detect-all'),
      subscriptionManualImportButton: scope.getElementById('subscription-import-manual-json'),
      subscriptionManualJsonInput: scope.getElementById('subscription-manual-json-input'),
      subscriptionManualCreateButton: scope.getElementById('subscription-create-manual'),
      subscriptionUseSeedButton: scope.getElementById('subscription-use-seed'),
      subscriptionDetailCard: scope.getElementById('subscription-detail-card'),
      subscriptionDetailEmpty: scope.getElementById('subscription-detail-empty'),
      subscriptionStatTotal: scope.getElementById('subscription-stat-total'),
      subscriptionStatUpdated: scope.getElementById('subscription-stat-updated'),
      subscriptionStatPending: scope.getElementById('subscription-stat-pending'),
      subscriptionStatChecked: scope.getElementById('subscription-stat-checked'),
      subscriptionStatTotalSide: scope.getElementById('subscription-stat-total-side'),
      subscriptionStatUpdatedSide: scope.getElementById('subscription-stat-updated-side'),
      subscriptionStatCheckedSide: scope.getElementById('subscription-stat-checked-side'),
      subscriptionSummaryMessage: scope.getElementById('subscription-summary-message'),
      subscriptionHeroCopy: scope.querySelector('#subscription-workspace .hero-copy'),
      subscriptionList: scope.getElementById('subscription-list'),
      subscriptionLogView: scope.getElementById('subscription-log-view'),
      subscriptionCrawlerStatus: scope.getElementById('subscription-crawler-status'),
      subscriptionProxyStatus: scope.getElementById('subscription-proxy-status'),
      subscriptionProxyStatusDetail: scope.getElementById('subscription-proxy-status-detail'),
      subscriptionCrawlerUrl: scope.getElementById('subscription-crawler-url'),
      subscriptionCrawlerCount: scope.getElementById('subscription-crawler-count'),
      subscriptionCrawlerActressName: scope.getElementById('subscription-crawler-actress-name'),
      subscriptionCrawlerParallel: scope.getElementById('subscription-crawler-parallel'),
      subscriptionCrawlerDelay: scope.getElementById('subscription-crawler-delay'),
      subscriptionCrawlerTimeout: scope.getElementById('subscription-crawler-timeout'),
      subscriptionCrawlerProxy: scope.getElementById('subscription-crawler-proxy'),
      subscriptionCrawlerCloudflare: scope.getElementById('subscription-crawler-cloudflare'),
      subscriptionUpdateAntiBlockButton: scope.getElementById('subscription-update-antiblock'),
      subscriptionStartCrawlButton: scope.getElementById('subscription-start-crawl'),
      subscriptionBatchCrawlButton: scope.getElementById('subscription-batch-crawl'),
      subscriptionStopCrawlButton: scope.getElementById('subscription-stop-crawl')
    };
  }

  globalScope.desktopRendererElementDomains = {
    collectCrawlerElements,
    collectOrganizerElements,
    collectShellElements,
    collectSubscriptionElements
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/rendererElements.js ==== */
// Renderer elements factory owns the DOM-id registry for the active desktop
// shell. Keeping it separate from renderer.js prevents the main bootstrap file
// from growing into another mixed wiring + element-definition hotspot.
//
// Boundary rule:
// this file exports a flat element bag for convenience, but behavior ownership
// still belongs to the domain controllers and view helpers that consume it.
//
// Ownership summary:
// 1) aggregate domain-scoped DOM lookups into one renderer element bag
// 2) keep DOM-id ownership centralized outside renderer bootstrap
// 3) prevent controllers from hand-rolling their own ad hoc element queries
//
// File map for maintainers:
// 1) renderer-element domain dependency guard
// 2) flat renderer element collection helper
(function initializeRendererElements(globalScope) {
  const elementDomains = globalScope.desktopRendererElementDomains || null;

  if (!elementDomains) {
    throw new Error('desktopRendererElementDomains is required before rendererElements');
  }

  function collectRendererElements(documentScope) {
    const scope = documentScope || document;

    // Element collection is intentionally flat for consumers, but ownership is
    // still segmented by domain in rendererElementDomains.js. If a future
    // module adds nodes, extend the owning domain helper first rather than
    // growing ad hoc lookups in controllers.
    return Object.assign(
      {},
      elementDomains.collectShellElements(scope),
      elementDomains.collectCrawlerElements(scope),
      elementDomains.collectOrganizerElements(scope),
      elementDomains.collectSubscriptionElements(scope)
    );
  }

  globalScope.desktopRendererElements = {
    collectRendererElements
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/rendererShellView.js ==== */
// Renderer shell view owns shell-only DOM composition that is unrelated to
// crawl, organizer, or subscription business state. The controller decides
// when to apply layout changes; the view only mutates shell structure.
//
// Ownership summary:
// 1) normalize shell copy and headings
// 2) perform shell-only DOM composition such as promoting the ops panel
// 3) keep static shell traversal details out of the shell controller
//
// Feature state, runtime queries, and artifact decisions must stay elsewhere.
//
// File map for maintainers:
// 1) shell text/node mutation helpers
// 2) crawler/subscription shell copy normalization
// 3) shell panel promotion and collapse helpers
(function initializeRendererShellView(globalScope) {
  function setTextContent(node, text, options = {}) {
    if (!node) {
      return;
    }
    if (options.onlyWhenEmpty && String(node.textContent || '').trim()) {
      return;
    }
    node.textContent = text;
  }

  function toggleInfoCard(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
      card.classList.toggle('collapsed');
    }
  }

  // Shell copy normalization belongs here because it is pure layout/content
  // composition. Module controllers should not walk shell DOM to rewrite hero
  // copy or panel headings.
  function applySubscriptionHeroCopy(subscriptionHeroCopy) {
    if (!subscriptionHeroCopy) {
      return;
    }

    const eyebrow = subscriptionHeroCopy.querySelector('.eyebrow');
    const title = subscriptionHeroCopy.querySelector('h1');
    const subtitle = subscriptionHeroCopy.querySelector('.hero-subtitle');
    const tip = subscriptionHeroCopy.querySelector('.hero-connection-tip');

    if (eyebrow) {
      eyebrow.textContent = 'AV 订阅模块';
    }
    if (title) {
      title.textContent = '女优订阅与更新追踪';
    }
    if (subtitle) {
      subtitle.textContent = '把已抓女优沉淀为长期订阅，后续只检查新增影片并一键回填到 JAV 爬虫。';
    }
    if (tip) {
      tip.textContent = '支持扫描本地 filmData.json 自动建立订阅，也支持手动输入女优名称或目录地址新增订阅。';
    }
  }

  // Keep crawler summary copy normalization in the shell view so the shell
  // controller stays an orchestrator instead of carrying DOM traversal details.
  function normalizeCrawlerOpsCopy(elements) {
    if (!elements || !elements.crawlerWorkspace) {
      return;
    }

    const opsPanel = elements.crawlerWorkspace.querySelector('.crawl-ops-panel');
    if (opsPanel) {
      setTextContent(opsPanel.querySelector('.panel-kicker'), '抓取总览');
      setTextContent(opsPanel.querySelector('.panel-head h2'), '抓取阶段与结果入口');
    }

    const opsCards = elements.crawlerWorkspace.querySelectorAll('.crawl-ops-grid .ops-card');
    normalizeStageOpsCard(opsCards[0], elements);
    normalizeResultOpsCard(opsCards[1], elements);
  }

  function normalizeStageOpsCard(card, elements) {
    if (!card) {
      return;
    }

    const labels = card.querySelectorAll('.message-label');
    setTextContent(labels[0], '抓取阶段面板');
    setTextContent(elements.crawlStageTitle, '等待开始抓取', { onlyWhenEmpty: true });
    setTextContent(elements.crawlStageStatus, '待机');
    setTextContent(elements.crawlStageProgress, '阶段 1/10');
    setTextContent(elements.crawlStageDescription, '加载配置并初始化本次抓取运行环境。');
    setTextContent(elements.crawlStageMessage, '等待开始抓取。');

    const metricTexts = ['当前页', '已入队', '已尝试', '已完成'];
    card.querySelectorAll('.ops-metric span').forEach((node, index) => {
      if (metricTexts[index]) {
        node.textContent = metricTexts[index];
      }
    });

    setTextContent(card.querySelector('.ops-path-label'), '当前输出目录');
  }

  function normalizeResultOpsCard(card, elements) {
    if (!card) {
      return;
    }

    const labels = card.querySelectorAll('.message-label');
    setTextContent(labels[0], '结果入口面板');
    setTextContent(card.querySelector('.ops-card-head strong'), '抓取产物与复盘入口');
    setTextContent(elements.crawlResultQuality, '尚未生成复盘');
    setTextContent(elements.crawlResultSummary, '等待抓取完成后生成复盘摘要。');
    setTextContent(card.querySelector('.result-history-hint'), '默认只显示最近 2 次结果，剩余历史记录可用鼠标滚轮下拉查看。');
  }

  function promoteCrawlOpsPanel(crawlerWorkspace) {
    if (!crawlerWorkspace) {
      return;
    }

    const crawlOpsGrid = crawlerWorkspace.querySelector('.crawl-ops-grid');
    const crawlerStatsPanel = crawlerWorkspace.querySelector('.stats-panel');

    if (!crawlOpsGrid || !crawlerStatsPanel || crawlOpsGrid.closest('.crawl-ops-panel')) {
      return;
    }

    const wrapper = document.createElement('section');
    wrapper.className = 'panel crawl-ops-panel';
    wrapper.innerHTML = `
      <div class="panel-head">
        <div>
          <p class="panel-kicker">抓取总览</p>
          <h2>抓取阶段与结果入口</h2>
        </div>
      </div>
    `;
    wrapper.appendChild(crawlOpsGrid);
    crawlerStatsPanel.insertAdjacentElement('afterend', wrapper);
  }

  globalScope.desktopRendererShellView = {
    applySubscriptionHeroCopy,
    normalizeCrawlerOpsCopy,
    promoteCrawlOpsPanel,
    toggleInfoCard
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/rendererShellController.js ==== */
// Renderer shell controller owns non-business UI shell behavior:
// 1) workspace tab switching
// 2) crawler ops panel promotion/copy normalization
// 3) lightweight global HTML handlers that should stay outside crawl logic
//
// Keep this separate from renderer.js so later crawler/runtime refactors do not
// need to wade through workspace shell and static presentation glue.
//
// Text ownership rule:
// - shell-level runtime copy fixes belong here only when the label depends on
//   dynamic shell layout or card structure
// - ordinary static wording should live in uiTextSource.js / HTML partials
// - if this file starts carrying too much product wording, future text-encoding
//   and duplicate-copy bugs become much harder to classify
//
// Ownership summary:
// 1) bootstrap non-business shell wiring and workspace switching
// 2) own shell-level panel promotion and static shell copy normalization
// 3) keep shell/global handlers separate from domain-controller behavior
//
// File map for maintainers:
// 1) shell bootstrap and workspace wiring
// 2) crawler-ops copy/panel shell normalization
// 3) global handler exposure for shell-only UI affordances
(function initializeRendererShellController(globalScope) {
  const shellView = globalScope.desktopRendererShellView || null;

  if (!shellView) {
    throw new Error('desktopRendererShellView is required before rendererShellController');
  }

  function createRendererShellController(options) {
    const { elements, initialWorkspace = 'crawler' } = options || {};
    let workspaceEventsBound = false;
    let bootstrapCompleted = false;

    // Shell-level copy normalization intentionally funnels through one place so
    // business controllers do not each patch shared headings/hero copy.
    function normalizeCrawlerOpsCopy() {
      shellView.normalizeCrawlerOpsCopy(elements);
      shellView.applySubscriptionHeroCopy(elements.subscriptionHeroCopy);
    }

    // DOM promotion is a shell composition concern, not a crawler concern.
    // Keep the relocation here so crawl runtime/state code never depends on
    // where the shell chooses to mount the panel.
    function promoteCrawlOpsPanel() {
      shellView.promoteCrawlOpsPanel(elements.crawlerWorkspace);
    }

    function setWorkspace(targetWorkspace) {
      // Workspace switching is purely presentational. Domain controllers should
      // react to visibility changes only through their own bootstrap/state
      // paths rather than attaching business logic here.
      const showOrganizer = targetWorkspace === 'organizer';
      const showSubscription = targetWorkspace === 'subscription';

      if (elements.crawlerWorkspace) {
        elements.crawlerWorkspace.classList.toggle('hidden', showOrganizer || showSubscription);
      }

      if (elements.organizerWorkspace) {
        elements.organizerWorkspace.classList.toggle('hidden', !showOrganizer);
      }

      if (elements.subscriptionWorkspace) {
        elements.subscriptionWorkspace.classList.toggle('hidden', !showSubscription);
      }

      if (elements.navCrawlerButton) {
        elements.navCrawlerButton.classList.toggle('is-active', !showOrganizer && !showSubscription);
      }

      if (elements.navOrganizerButton) {
        elements.navOrganizerButton.classList.toggle('is-active', showOrganizer);
      }

      if (elements.navSubscriptionButton) {
        elements.navSubscriptionButton.classList.toggle('is-active', showSubscription);
      }
    }

    function toggleInfoCard(cardId) {
      shellView.toggleInfoCard(cardId);
    }

    function exposeGlobalHandlers() {
      // HTML-inline handlers are kept here as a compatibility shim for the shell
      // template only. Business modules should continue using explicit listeners.
      if (typeof globalThis !== 'undefined') {
        globalThis.toggleInfoCard = toggleInfoCard;
      }
    }

    function bindWorkspaceSwitch() {
      // Tab-button binding is shell-only wiring. Feature controllers should not
      // attach their own competing workspace-switch listeners.
      if (workspaceEventsBound) {
        return;
      }
      workspaceEventsBound = true;

      if (elements.navCrawlerButton) {
        elements.navCrawlerButton.addEventListener('click', () => setWorkspace('crawler'));
      }

      if (elements.navOrganizerButton) {
        elements.navOrganizerButton.addEventListener('click', () => setWorkspace('organizer'));
      }

      if (elements.navSubscriptionButton) {
        elements.navSubscriptionButton.addEventListener('click', () => setWorkspace('subscription'));
      }
    }

    function bootstrap() {
      if (bootstrapCompleted) {
        return;
      }

      // Bootstrap order stays shell-first: expose global handlers, wire tab
      // switching, normalize shell copy/layout, then reveal the initial
      // workspace.
      exposeGlobalHandlers();
      bindWorkspaceSwitch();
      promoteCrawlOpsPanel();
      normalizeCrawlerOpsCopy();
      setWorkspace(initialWorkspace);
      bootstrapCompleted = true;
    }

    return {
      bootstrap,
      setWorkspace
    };
  }

  globalScope.desktopRendererShellController = {
    createRendererShellController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/rendererBootstrapController.js ==== */
// Renderer bootstrap controller owns startup orchestration:
// 1) bind shell/runtime listeners in the correct order
// 2) retry async controller bootstrap during desktop bridge warmup
// 3) funnel bootstrap failures back into visible crawl status/log surfaces
//
// Keep this separate from renderer.js so renderer.js stays an assembly root,
// while startup sequencing remains isolated and easier to debug.
//
// Ownership summary:
// 1) bind shell/runtime listeners in the correct order
// 2) orchestrate ordered async controller bootstrap
// 3) funnel bootstrap failures back into visible crawl status/log surfaces
//
// Boundary rule:
// - bootstrap sequencing and retry timing live here
// - workspace controllers stay focused on steady-state behavior after startup
//
// File map for maintainers:
// 1) one-time static feed binding
// 2) ordered controller bootstrap orchestration
// 3) retry/failure reporting during bridge warmup
(function initializeRendererBootstrapController(globalScope) {
  function createRendererBootstrapController(options) {
    const {
      shellController,
      heroBorderFlowController,
      crawlRuntimeController,
      formController,
      rankingController,
      organizerController,
      subscriptionController,
      stateController,
      sourceLink,
      uiText,
      retryDelays = [0, 200, 400, 800, 1200, 1800, 2800, 4000]
    } = options || {};
    let staticFeedsBound = false;
    let bootstrapCompleted = false;
    let bootstrapPromise = null;

    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function bindStaticFeeds() {
      if (staticFeedsBound) {
        return;
      }

      // Static feeds bind once before async controller bootstrap retries so
      // shell/runtime listeners do not get duplicated on bridge warmup loops.
      if (shellController && typeof shellController.bootstrap === 'function') {
        shellController.bootstrap();
      }
      if (heroBorderFlowController && typeof heroBorderFlowController.bootstrap === 'function') {
        heroBorderFlowController.bootstrap();
      }
      if (crawlRuntimeController && typeof crawlRuntimeController.bindExternalLink === 'function') {
        crawlRuntimeController.bindExternalLink(sourceLink);
      }
      if (crawlRuntimeController && typeof crawlRuntimeController.bindEventFeeds === 'function') {
        crawlRuntimeController.bindEventFeeds();
      }
      staticFeedsBound = true;
    }

    // Controller bootstrap remains the single ordered startup contract for the
    // three workspaces plus crawl panels. If future startup work is added,
    // prefer inserting it here instead of each controller trying to warm up
    // siblings ad hoc.
    async function bootstrapControllers() {
      // Bootstrap order is intentional: crawler form/settings first, then
      // dependent workspaces, and crawl runtime panels last.
      await formController.bootstrap();
      await rankingController.bootstrap();
      await organizerController.bootstrap();
      await subscriptionController.bootstrap();
      await crawlRuntimeController.bootstrapPanels();
    }

    // Startup failure reporting is centralized here so bootstrap-time bridge
    // warmup issues surface through the same visible log/status path.
    function reportBootstrapFailure(error) {
      const prefix =
        uiText && uiText.UI_TEXT && uiText.UI_TEXT.runtime
          ? uiText.UI_TEXT.runtime.bootstrapFailedPrefix
          : 'Desktop bootstrap failed: ';
      const message = `${prefix}${error instanceof Error ? error.message : String(error)}`;
      console.error(message, error);
      crawlRuntimeController.appendLog('error', message);
      stateController.setStatus('error', message);
    }

    function bootstrap() {
      if (bootstrapCompleted) {
        return Promise.resolve();
      }

      if (bootstrapPromise) {
        return bootstrapPromise;
      }

      bootstrapPromise = Promise.resolve()
        .then(async () => {
          let lastError = null;

          bindStaticFeeds();

          // Retry is limited to bootstrap-time dependency warmup. Once all
          // controllers are ready, later runtime errors should surface through
          // their own event/state channels instead of re-entering bootstrap.
          for (let index = 0; index < retryDelays.length; index += 1) {
            if (retryDelays[index] > 0) {
              await delay(retryDelays[index]);
            }

            try {
              await bootstrapControllers();
              bootstrapCompleted = true;
              return;
            } catch (error) {
              lastError = error;
            }
          }

          reportBootstrapFailure(lastError);
          bootstrapPromise = null;
        })
        .catch((error) => {
          bootstrapPromise = null;
          throw error;
        });

      return bootstrapPromise;
    }

    return {
      bootstrap
    };
  }

  globalScope.desktopRendererBootstrapController = {
    createRendererBootstrapController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/crawlResultHistoryView.js ==== */
// Crawl result history view owns DOM rendering for persisted crawl result
// entries. The controller passes storage-backed data and callbacks so result
// persistence and file-opening actions stay outside the view layer.
//
// Ownership summary:
// 1) render recent-result cards from normalized history items
// 2) expose passive open/delete bindings supplied by the controller
// 3) keep path-row presentation local to the view
//
// Storage, dedupe, and artifact discovery stay outside this file.
//
// File map for maintainers:
// 1) date/path/status formatting helpers
// 2) result-history row/card DOM builders
// 3) list render and empty-state helpers
(function initializeCrawlResultHistoryView(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const clearChildren = rendererHelpers.clearChildren;

  if (!clearChildren) {
    throw new Error('desktopRendererHelpers must be loaded before crawlResultHistoryView');
  }

  function normalizeDateText(value) {
    if (!value) {
      return '';
    }
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString('zh-CN', { hour12: false });
  }

  function normalizePathText(value, fallback = '尚未生成') {
    const text = String(value || '').trim();
    return text || fallback;
  }

  function resolveMiniStatusClass(status) {
    const normalizedStatus = String(status || 'idle').trim().toLowerCase() || 'idle';
    if (normalizedStatus === 'ok') {
      return 'completed';
    }
    if (normalizedStatus === 'warning') {
      return 'incomplete';
    }
    if (normalizedStatus === 'empty') {
      return 'idle';
    }
    if (normalizedStatus.startsWith('stopped')) {
      return 'stopped';
    }
    return normalizedStatus;
  }

  function createPathActionRow(label, pathValue, exists, callbacks = {}) {
    // Path rows remain deliberately generic so artifact-specific existence rules
    // continue to live in the history controller/model layers.
    const row = document.createElement('div');
    row.className = 'result-history-row';

    const copy = document.createElement('div');
    copy.className = 'result-history-copy';
    const labelNode = document.createElement('span');
    labelNode.textContent = label;
    const pathNode = document.createElement('p');
    pathNode.className = 'ops-path';
    pathNode.textContent = normalizePathText(pathValue);
    pathNode.title = String(pathValue || '').trim();
    copy.appendChild(labelNode);
    copy.appendChild(pathNode);

    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'inline-button';
    action.textContent = '打开';
    action.disabled = !pathValue || !exists;
    if (typeof callbacks.onBindOpenPath === 'function') {
      callbacks.onBindOpenPath(action, pathValue, exists);
    }

    row.appendChild(copy);
    row.appendChild(action);
    return row;
  }

  function renderEmpty(container, message = '等待抓取完成后生成最近结果入口。') {
    if (!container) {
      return;
    }

    clearChildren(container);
    const empty = document.createElement('p');
    empty.className = 'result-history-empty';
    empty.textContent = message;
    container.appendChild(empty);
  }

  // View remains intentionally passive: it renders normalized entries and
  // exposes click hooks, but storage identity, dedupe, and file existence
  // decisions stay in the controller/model layers.
  function renderHistory(container, items, callbacks = {}) {
    if (!container) {
      return;
    }

    const list = Array.isArray(items) ? items : [];
    if (list.length === 0) {
      renderEmpty(container, callbacks.emptyMessage || '等待抓取完成后生成最近结果入口。');
      return;
    }

    clearChildren(container);
    const fragment = document.createDocumentFragment();

    list.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'result-history-card';

      const head = document.createElement('div');
      head.className = 'result-history-head';
      const titleWrap = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = item.title || '最近结果';
      const meta = document.createElement('p');
      meta.className = 'result-history-meta';
      meta.textContent = normalizeDateText(item.updatedAt);
      titleWrap.appendChild(title);
      titleWrap.appendChild(meta);
      head.appendChild(titleWrap);

      const headRight = document.createElement('div');
      headRight.className = 'result-history-head-right';

      const chip = document.createElement('span');
      chip.className = `mini-status ${resolveMiniStatusClass(item.qualityStatus)}`;
      chip.textContent = item.qualityStatusText || '尚未生成复盘';
      headRight.appendChild(chip);

      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.className = 'icon-delete-button';
      deleteButton.title = '删除此记录（不删除本地文件）';
      deleteButton.textContent = '×';
      if (typeof callbacks.onDelete === 'function') {
        deleteButton.addEventListener('click', (event) => {
          event.stopPropagation();
          callbacks.onDelete(item);
        });
      }
      headRight.appendChild(deleteButton);

      head.appendChild(headRight);
      card.appendChild(head);

      if (item.summary) {
        const summary = document.createElement('p');
        summary.className = 'ops-summary';
        summary.textContent = item.summary;
        card.appendChild(summary);
      }

      const rowList = document.createElement('div');
      rowList.className = 'result-history-grid';
      rowList.appendChild(createPathActionRow('输出目录', item.outputDir, item.outputDirExists, callbacks));
      rowList.appendChild(createPathActionRow('filmData.json', item.filmDataPath, item.filmDataExists, callbacks));
      rowList.appendChild(createPathActionRow('磁力文档', item.magnetPath, item.magnetExists, callbacks));
      rowList.appendChild(createPathActionRow('日志目录', item.logDir, item.logDirExists, callbacks));
      rowList.appendChild(
        createPathActionRow('latest-log.txt', item.latestLogPath, item.latestLogExists, callbacks)
      );
      rowList.appendChild(createPathActionRow('复盘报告', item.reportPath, item.reportExists, callbacks));
      card.appendChild(rowList);

      fragment.appendChild(card);
    });

    container.appendChild(fragment);
  }

  globalScope.desktopCrawlResultHistoryView = {
    renderEmpty,
    renderHistory
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/crawlResultHistoryController.js ==== */
// Crawl result-history controller owns:
// 1) localStorage-backed result entry persistence
// 2) result-history card rendering
// 3) open-path actions for output/log/report artifacts
//
// Keep this separate from stateController so crawl state rendering and
// persisted result-entry UI do not keep growing inside the same large file.
//
// Boundary rule:
// this controller reflects completed run artifacts only. Live crawl-state
// rendering continues to belong to crawlRuntime/state controllers.
//
// Ownership summary:
// 1) persist recent crawl result-history entries in renderer storage
// 2) render/open/delete result-history cards and linked artifacts
// 3) keep completed-run artifact history out of live crawl-state controllers
//
// File map for maintainers:
// 1) renderer-local history load/save helpers
// 2) result-history entry shaping
// 3) history card rendering and artifact open actions
(function initializeCrawlResultHistoryController(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const historyViewFactory = globalScope.desktopCrawlResultHistoryView || null;
  const safeLocalStorageGet = rendererHelpers.safeLocalStorageGet;
  const safeLocalStorageSet = rendererHelpers.safeLocalStorageSet;

  if (!historyViewFactory || !safeLocalStorageGet || !safeLocalStorageSet) {
    throw new Error('crawlResultHistoryController requires desktopCrawlResultHistoryView and desktopRendererHelpers');
  }

  function createCrawlResultHistoryController(options) {
    const {
      crawlPanelModel,
      historyView,
      openPath,
      storageKey = 'jav.crawl.result.history.v2'
    } = options || {};

    let resultHistory = [];
    let bootstrapCompleted = false;

    function loadResultHistory() {
      // History persistence is renderer-local convenience only. Broken or stale
      // localStorage should never block current crawl state from rendering.
      const rawValue = safeLocalStorageGet(storageKey, '');
      if (!rawValue) {
        return [];
      }
      try {
        const parsed = JSON.parse(rawValue);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }

    function saveResultHistory(items) {
      safeLocalStorageSet(storageKey, JSON.stringify(items));
    }

    // Keep result-history identity stable by anchoring it to the run/output
    // itself, not to whichever file paths happen to be populated first.
    function buildResultHistoryEntry(panel = {}) {
      const normalized =
        crawlPanelModel && typeof crawlPanelModel.buildResultHistoryIdentity === 'function'
          ? crawlPanelModel.buildResultHistoryIdentity(panel)
          : null;
      if (!normalized) {
        return null;
      }

      return {
        historyKey: normalized.historyKey,
        title: normalized.title,
        updatedAt: new Date().toISOString(),
        qualityStatus: String(panel.qualityStatus || panel.status || 'idle').trim() || 'idle',
        qualityStatusText: String(panel.qualityStatusText || '').trim(),
        summary: String(panel.qualitySummaryLine || panel.message || '').trim(),
        outputDir: normalized.outputDir,
        outputDirExists: Boolean(panel.outputDirExists),
        filmDataPath: normalized.filmDataPath,
        filmDataExists: Boolean(panel.filmDataExists),
        magnetPath: normalized.magnetPath,
        magnetExists: Boolean(panel.magnetExists),
        logDir: normalized.logDir,
        logDirExists: Boolean(panel.logDirExists),
        latestLogPath: normalized.latestLogPath,
        latestLogExists: Boolean(panel.latestLogExists),
        reportPath: normalized.reportPath,
        reportExists: Boolean(panel.reportExists)
      };
    }

    function syncResultHistory(panel = {}) {
      const nextEntry = buildResultHistoryEntry(panel);
      if (!nextEntry) {
        return;
      }

      const existingItems = Array.isArray(resultHistory) ? resultHistory : [];
      const filtered = existingItems.filter((item) => item && item.historyKey !== nextEntry.historyKey);
      resultHistory = [nextEntry, ...filtered].slice(0, 12);
      saveResultHistory(resultHistory);
    }

    function bindAsyncClick(button, handler) {
      if (!button) {
        return;
      }

      button.addEventListener('click', async () => {
        await handler();
      });
    }

    function deleteHistoryEntry(historyKey) {
      if (!historyKey) {
        return;
      }
      const items = Array.isArray(resultHistory) ? resultHistory : [];
      resultHistory = items.filter((entry) => entry && entry.historyKey !== historyKey);
      saveResultHistory(resultHistory);
      renderHistory();
    }

    function clearHistory() {
      resultHistory = [];
      saveResultHistory(resultHistory);
      renderHistory();
    }

    function renderHistory() {
      if (!historyView) {
        return;
      }

      // View rendering stays delegated so this controller owns persistence and
      // actions, while the card DOM structure remains in the view module.
      historyViewFactory.renderHistory(historyView, Array.isArray(resultHistory) ? resultHistory : [], {
        emptyMessage: '等待抓取完成后生成最近结果入口。',
        onBindOpenPath: (button, pathValue, exists) => {
          button.disabled = !pathValue || !exists || typeof openPath !== 'function';
          bindAsyncClick(button, async () => {
            if (!button.disabled) {
              await openPath(pathValue);
            }
          });
        },
        onDelete: (item) => {
          if (!item || !item.historyKey) {
            return;
          }
          if (globalScope.confirm) {
            if (!globalScope.confirm('确定要删除此记录吗？仅删除软件内记录，不会删除本地磁力和日志文件。')) {
              return;
            }
          }
          deleteHistoryEntry(item.historyKey);
        }
      });
    }

    function applyPanel(panel = {}) {
      syncResultHistory(panel);
      renderHistory();
    }

    function bootstrap() {
      if (bootstrapCompleted) {
        return;
      }

      // Result history only mirrors persisted localStorage state. Once loaded,
      // ongoing panel updates mutate the in-memory list directly, so bootstrap
      // must stay one-shot and never reload an older snapshot over newer entries.
      resultHistory = loadResultHistory();
      renderHistory();
      bootstrapCompleted = true;
    }

    return {
      bootstrap,
      applyPanel,
      clearHistory
    };
  }

  globalScope.desktopCrawlResultHistoryController = {
    createCrawlResultHistoryController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/stateHelpers.js ==== */
// Shared helpers for the crawler state renderers.
// Keep normalization and tiny DOM builders centralized so state renderers only
// own panel-specific presentation decisions.
//
// Ownership summary:
// 1) normalize small item/path/date values for state-oriented views
// 2) build tiny shared DOM fragments like chips
// 3) keep presentation-only sanitation out of the controllers
//
// These helpers must not grow business semantics for crawl quality/review logic.
//
// File map for maintainers:
// 1) chip/DOM micro-builders
// 2) item/date/path normalization helpers
// 3) failed-detail/review list sanitation helpers
(function initializeStateHelpers(globalScope) {
  function createChip(text, className) {
    const chip = document.createElement('span');
    chip.className = className;
    chip.textContent = text;
    return chip;
  }

  function createEmptyChip(text) {
    return createChip(text, 'task-empty-chip');
  }

  function toSafeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function normalizeItems(items = [], limit = 12) {
    // Item normalization is presentation hygiene only: trim, dedupe, cap.
    // Business-side filtering/ordering decisions must happen before data
    // reaches these helpers.
    const seen = new Set();
    const normalized = [];

    for (const rawItem of toSafeArray(items)) {
      const item = String(rawItem || '').trim();
      if (!item || seen.has(item)) {
        continue;
      }
      seen.add(item);
      normalized.push(item);
      if (normalized.length >= limit) {
        break;
      }
    }

    return normalized;
  }

  function sanitizeReadyItems(items = [], limit = 12) {
    // Ready-state sanitizers intentionally avoid dedupe/policy changes unless
    // the caller explicitly wants normalized chips instead of raw ready items.
    const normalized = [];
    for (const rawItem of toSafeArray(items)) {
      const item = String(rawItem || '').trim();
      if (!item) {
        continue;
      }
      normalized.push(item);
      if (normalized.length >= limit) {
        break;
      }
    }
    return normalized;
  }

  function normalizeDateText(value) {
    if (!value) {
      return '';
    }
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleString('zh-CN', { hour12: false });
  }

  function normalizeFailedDetails(items = [], limit = 12) {
    // Failed-detail normalization keeps panel rendering deterministic without
    // reclassifying failure semantics in the renderer layer.
    const unique = [];
    const seen = new Set();

    for (const item of toSafeArray(items)) {
      if (!item) {
        continue;
      }

      const itemId = item.item || item.sourceLink || 'unknown';
      const reason = item.reason || '';
      const signature = `${itemId}::${reason}`;
      if (seen.has(signature)) {
        continue;
      }

      seen.add(signature);
      unique.push(item);
      if (unique.length >= limit) {
        break;
      }
    }

    return unique;
  }

  function sanitizeReadyFailedDetails(items = [], limit = 12) {
    const normalized = [];
    for (const item of toSafeArray(items)) {
      if (!item || typeof item !== 'object') {
        continue;
      }
      normalized.push(item);
      if (normalized.length >= limit) {
        break;
      }
    }
    return normalized;
  }

  function replaceChildren(container, nodes) {
    if (!container) {
      return;
    }
    container.replaceChildren(...nodes);
  }

  function buildChipNodes(values, chipClass, emptyText) {
    // Chip-node creation is shared presentation glue only; callers decide which
    // values count as duplicate/filtered/unfinished before they reach here.
    if (!values || values.length === 0) {
      return [createEmptyChip(emptyText)];
    }
    return values.map((item) => createChip(item, chipClass));
  }

  function normalizePathText(value, fallback = '尚未生成') {
    const text = String(value || '').trim();
    return text || fallback;
  }

  function resolveMiniStatusClass(status) {
    const normalizedStatus = String(status || 'idle').trim().toLowerCase() || 'idle';
    if (normalizedStatus === 'ok') {
      return 'completed';
    }
    if (normalizedStatus === 'warning') {
      return 'incomplete';
    }
    if (normalizedStatus === 'empty') {
      return 'idle';
    }
    if (normalizedStatus.startsWith('stopped')) {
      return 'stopped';
    }
    return normalizedStatus;
  }

  function applyMiniStatus(element, status, fallbackText, statusLabels = {}) {
    if (!element) {
      return;
    }

    const normalizedStatus = String(status || 'idle').trim().toLowerCase() || 'idle';
    element.className = `mini-status ${resolveMiniStatusClass(normalizedStatus)}`;
    element.textContent = fallbackText || statusLabels[normalizedStatus] || normalizedStatus;
  }

  globalScope.desktopStateHelpers = {
    applyMiniStatus,
    buildChipNodes,
    createChip,
    createEmptyChip,
    normalizeDateText,
    normalizeFailedDetails,
    normalizeItems,
    normalizePathText,
    replaceChildren,
    resolveMiniStatusClass,
    sanitizeReadyFailedDetails,
    sanitizeReadyItems,
    toSafeArray
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/stagePanelRenderer.js ==== */
// Stage panel renderer owns only the live crawl-stage card.
// It should stay read-only: translate normalized panel payload into DOM without
// reconstructing crawler facts.
//
// Ownership summary:
// 1) render the live stage card from normalized panel payloads
// 2) dedupe noisy runtime updates before they touch the DOM
// 3) keep progress/text fallback shaping local to the stage card only
//
// It does not fetch runtime state or decide crawl policy.
//
// File map for maintainers:
// 1) stage progress percent helpers
// 2) stage-panel signature dedupe
// 3) stage card DOM projection
(function initializeStagePanelRenderer(globalScope) {
  function createStagePanelRenderer(options) {
    const stateHelpers = globalScope.desktopStateHelpers || null;
    if (!stateHelpers) {
      throw new Error('desktopStateHelpers is required before stagePanelRenderer');
    }

    const { applyMiniStatus, normalizePathText } = stateHelpers;
    const {
      crawlStageStatus,
      crawlStageProgress,
      crawlStageTitle,
      crawlStageDescription,
      crawlStageMessage,
      crawlStageBarFill,
      crawlStageOutput,
      crawlStagePage,
      crawlStageQueued,
      crawlStageAttempted,
      crawlStageCompleted,
      statusLabels = {},
      defaultMessage = '等待开始抓取。'
    } = options || {};

    // Stage panel render is signature-deduped so noisy runtime updates can be
    // pushed freely without repainting the stage card when nothing meaningful
    // changed.
    let lastSignature = '';

    function computeStageProgressPercent(panel = {}) {
      const status = String(panel.status || '').trim().toLowerCase();
      if (status === 'completed') {
        return 100;
      }

      const phaseIndex = Number(panel.phaseIndex || 0);
      const phaseTotal = Number(panel.phaseTotal || 0);
      if (Number.isFinite(phaseIndex) && Number.isFinite(phaseTotal) && phaseIndex > 0 && phaseTotal > 0) {
        return Math.max(8, Math.min(100, Math.round((phaseIndex / phaseTotal) * 100)));
      }

      const stats = panel && panel.stats && typeof panel.stats === 'object' ? panel.stats : {};
      const attempted = Number(stats.attempted || 0);
      const completed = Number(stats.completed || 0);
      if (attempted > 0 && completed >= 0) {
        return Math.max(8, Math.min(100, Math.round((completed / attempted) * 100)));
      }

      if (status === 'starting' || status === 'running') {
        return 12;
      }

      return 0;
    }

    function applyPanel(panel = {}) {
      // The signature covers only view-relevant fields so controllers can emit
      // high-frequency panel events without forcing redundant repaints.
      const signature = JSON.stringify({
        status: panel.status || '',
        message: panel.message || '',
        phaseKey: panel.phaseKey || '',
        phaseTitle: panel.phaseTitle || '',
        phaseDescription: panel.phaseDescription || '',
        phaseProgressText: panel.phaseProgressText || '',
        phaseIndex: panel.phaseIndex || 0,
        phaseTotal: panel.phaseTotal || 0,
        outputDir: panel.outputDir || '',
        stats: panel.stats || {}
      });

      if (signature === lastSignature) {
        return;
      }

      lastSignature = signature;
      applyMiniStatus(
        crawlStageStatus,
        panel.status,
        statusLabels[String(panel.status || 'idle').toLowerCase()] || '待机',
        statusLabels
      );

      if (crawlStageProgress) {
        crawlStageProgress.textContent = String(panel.phaseProgressText || '阶段 1/10').trim();
      }
      if (crawlStageTitle) {
        crawlStageTitle.textContent = String(panel.phaseTitle || '等待开始抓取').trim();
      }
      if (crawlStageDescription) {
        crawlStageDescription.textContent = String(panel.phaseDescription || defaultMessage).trim();
      }
      if (crawlStageMessage) {
        crawlStageMessage.textContent = String(panel.message || defaultMessage).trim();
      }
      if (crawlStageOutput) {
        crawlStageOutput.textContent = normalizePathText(panel.outputDir);
        crawlStageOutput.title = String(panel.outputDir || '').trim();
      }

      const stageProgressPercent = computeStageProgressPercent(panel);
      if (crawlStageBarFill) {
        crawlStageBarFill.style.width = `${stageProgressPercent}%`;
      }

      const stageBarContainer = document.getElementById('crawl-stage-bar');
      if (stageBarContainer) {
        const status = String(panel.status || '').trim().toLowerCase();
        const isWaiting = (status === 'starting' || status === 'running') && stageProgressPercent === 0;
        stageBarContainer.classList.toggle('is-waiting', isWaiting);
      }

      const stats = panel && panel.stats && typeof panel.stats === 'object' ? panel.stats : {};
      if (crawlStagePage) {
        crawlStagePage.textContent = String(stats.pageIndex ?? 0);
      }
      if (crawlStageQueued) {
        crawlStageQueued.textContent = String(stats.queued ?? 0);
      }
      if (crawlStageAttempted) {
        crawlStageAttempted.textContent = String(stats.attempted ?? 0);
      }
      if (crawlStageCompleted) {
        crawlStageCompleted.textContent = String(stats.completed ?? 0);
      }
    }

    return {
      applyPanel
    };
  }

  globalScope.desktopStagePanelRenderer = {
    createStagePanelRenderer
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/resultPanelRenderer.js ==== */
// Result panel renderer owns the post-run quality summary card and its handoff
// into the dedicated result-history controller.
//
// Ownership summary:
// 1) render the normalized crawl result/quality summary panel
// 2) hand off completed result snapshots to the result-history controller
// 3) keep result DOM projection separate from result read-model assembly
//
// File map for maintainers:
// 1) result-panel signature dedupe
// 2) quality/result summary DOM projection
// 3) completed-result history handoff
(function initializeResultPanelRenderer(globalScope) {
  function createResultPanelRenderer(options) {
    const stateHelpers = globalScope.desktopStateHelpers || null;
    if (!stateHelpers) {
      throw new Error('desktopStateHelpers is required before resultPanelRenderer');
    }

    const { applyMiniStatus } = stateHelpers;
    const {
      crawlResultQuality,
      crawlResultSummary,
      resultHistoryController = null,
      statusLabels = {}
    } = options || {};

    // Result panel is a pure projection of the latest normalized result/quality
    // payload. Keep one render signature here so callers can push frequent
    // updates without re-rendering the DOM or duplicating result-history writes.
    let lastSignature = '';

    function buildSummaryText(panel = {}) {
      // Keep the top result card focused on operator guidance. The detailed
      // quality summary already appears in the result-history card list.
      if (panel.outputDirExists || panel.filmDataExists || panel.magnetExists || panel.logDirExists || panel.reportExists) {
        return '抓取产物已同步到下方入口，复盘摘要请查看历史记录。';
      }

      return String(panel.message || '等待抓取完成后生成结果入口。').trim();
    }

    function applyPanel(panel = {}) {
      const signature = JSON.stringify({
        status: panel.status || '',
        message: panel.message || '',
        outputDir: panel.outputDir || '',
        filmDataPath: panel.filmDataPath || '',
        magnetPath: panel.magnetPath || '',
        logDir: panel.logDir || '',
        latestLogPath: panel.latestLogPath || '',
        reportPath: panel.reportPath || '',
        qualityStatus: panel.qualityStatus || '',
        qualityStatusText: panel.qualityStatusText || '',
        qualitySummaryLine: panel.qualitySummaryLine || '',
        qualityCompletedAt: panel.qualityCompletedAt || '',
        qualityDurationSec: panel.qualityDurationSec || 0,
        flags: [
          panel.outputDirExists,
          panel.filmDataExists,
          panel.magnetExists,
          panel.logDirExists,
          panel.latestLogExists,
          panel.reportExists
        ]
      });

      if (signature === lastSignature) {
        return;
      }

      lastSignature = signature;
      applyMiniStatus(
        crawlResultQuality,
        panel.qualityStatus || panel.status || 'idle',
        String(panel.qualityStatusText || '尚未生成复盘摘要').trim(),
        statusLabels
      );

      if (crawlResultSummary) {
        crawlResultSummary.textContent = buildSummaryText(panel);
      }

      if (resultHistoryController && typeof resultHistoryController.applyPanel === 'function') {
        resultHistoryController.applyPanel(panel);
      }
    }

    function clearHistory() {
      if (resultHistoryController && typeof resultHistoryController.clearHistory === 'function') {
        resultHistoryController.clearHistory();
      }
    }

    return {
      applyPanel,
      clearHistory
    };
  }

  globalScope.desktopResultPanelRenderer = {
    createResultPanelRenderer
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/reviewPanelRenderer.js ==== */
// Review panel renderer owns the item-list panels shown during and after crawl:
// active, unfinished, duplicate, page-gap, filtered, and failed details.
//
// Ownership summary:
// 1) render active/unfinished/duplicate/page-gap/failed/filtered panels
// 2) dedupe repaint work with per-panel render signatures
// 3) keep review-panel DOM policy out of state transport/controllers
//
// Boundary rule:
// - panel-specific DOM rendering and signature dedupe live here
// - normalization helpers come from stateHelpers
// - runtime event routing and fallback-state selection stay in controllers/model
//
// File map for maintainers:
// 1) panel-local wording/default bundles
// 2) per-list normalization/signature helpers
// 3) review panel DOM projection
(function initializeReviewPanelRenderer(globalScope) {
  function createReviewPanelRenderer(options) {
    const stateHelpers = globalScope.desktopStateHelpers || null;
    if (!stateHelpers) {
      throw new Error('desktopStateHelpers is required before reviewPanelRenderer');
    }

    const {
      buildChipNodes,
      createChip,
      createEmptyChip,
      normalizeDateText,
      normalizeFailedDetails,
      normalizeItems,
      replaceChildren,
      sanitizeReadyFailedDetails,
      sanitizeReadyItems,
      toSafeArray
    } = stateHelpers;
    const {
      currentBox,
      currentTotalView,
      currentItemsView,
      unfinishedItemsView,
      unfinishedTotalView,
      duplicateBox,
      duplicateItemsView,
      duplicateTotalView,
      pageGapBox,
      pageGapItemsView,
      failedTotalView,
      failedItemsView,
      filteredItemsView,
      filteredTotalView,
      emptyTexts = {},
      maxPanelItems = 12,
      failureCategoryLabels = {},
      stateTexts = {}
    } = options || {};

    // Review panel keeps all list-card wording in one renderer-local bundle so
    // stateController can stay focused on transport/state batching instead of
    // panel-specific fallback copy.
    const safeStateTexts = {
      failedSummaryPrefix: stateTexts.failedSummaryPrefix || '失败详情共 ',
      failedSummaryMiddle: stateTexts.failedSummaryMiddle || ' 条，当前显示 ',
      failedSummarySuffix: stateTexts.failedSummarySuffix || ' 条。',
      unknownItem: stateTexts.unknownItem || '未知项目',
      defaultFailureReason: stateTexts.defaultFailureReason || '未记录失败原因。',
      failureCategoryPrefix: stateTexts.failureCategoryPrefix || '分类：',
      failureRetryPrefix: stateTexts.failureRetryPrefix || '重试：',
      failureManualReview: stateTexts.failureManualReview || '需人工复核',
      failureAdvicePrefix: stateTexts.failureAdvicePrefix || '建议：',
      failureTimePrefix: stateTexts.failureTimePrefix || '最后失败时间：'
    };
    // Each panel owns an independent render signature. This lets crawl UI state,
    // review panel events, and fallback state snapshots update different
    // sections without forcing the whole review area to repaint every time.
    const lastRenderSignature = {
      active: '',
      unfinished: '',
      duplicate: '',
      pageGap: '',
      failed: '',
      filtered: ''
    };

    function translateFailureCategory(category) {
      return failureCategoryLabels[String(category || '').toLowerCase()] || failureCategoryLabels.unknown || '未知异常';
    }

    function renderActiveItems(items = [], totalCount = items.length) {
      const visibleItems = toSafeArray(items);
      const safeTotal = Number.isFinite(totalCount) ? totalCount : visibleItems.length;
      const signature = `${safeTotal}|${visibleItems.join('|')}`;

      if (signature === lastRenderSignature.active) {
        return;
      }

      lastRenderSignature.active = signature;
      if (!currentBox || !currentItemsView || !currentTotalView) {
        return;
      }

      currentTotalView.textContent = String(safeTotal);

      if (visibleItems.length === 0) {
        currentBox.classList.add('hidden');
        replaceChildren(currentItemsView, []);
        return;
      }

      currentBox.classList.remove('hidden');
      replaceChildren(currentItemsView, buildChipNodes(visibleItems, 'state-chip chip-done', emptyTexts.active || '当前没有正在执行的项目。'));
    }

    function updateActiveItems(items = [], totalCount = items.length) {
      const normalized = normalizeItems(items, maxPanelItems);
      renderActiveItems(normalized, Number.isFinite(totalCount) ? totalCount : normalized.length);
    }

    function renderUnfinishedItems(items = [], totalCount = items.length) {
      const safeTotal = Number.isFinite(totalCount) ? totalCount : items.length;
      const visibleItems = toSafeArray(items);
      const signature = `${safeTotal}|${visibleItems.join('|')}`;

      if (signature === lastRenderSignature.unfinished) {
        return;
      }

      lastRenderSignature.unfinished = signature;
      if (!unfinishedItemsView || !unfinishedTotalView) {
        return;
      }

      unfinishedTotalView.textContent = String(safeTotal);
      replaceChildren(
        unfinishedItemsView,
        buildChipNodes(visibleItems, 'state-chip chip-pending', emptyTexts.unfinished || '暂无待抓取番号。')
      );
    }

    function updateUnfinishedItems(items = [], totalCount = items.length) {
      const normalized = normalizeItems(items, maxPanelItems);
      renderUnfinishedItems(normalized, Number.isFinite(totalCount) ? totalCount : normalized.length);
    }

    function renderDuplicateItems(items = [], totalCount = items.length) {
      const safeTotal = Number.isFinite(totalCount) ? totalCount : items.length;
      const visibleItems = toSafeArray(items);
      const signature = `${safeTotal}|${visibleItems.join('|')}`;

      if (signature === lastRenderSignature.duplicate) {
        return;
      }

      lastRenderSignature.duplicate = signature;
      if (!duplicateBox || !duplicateItemsView || !duplicateTotalView) {
        return;
      }

      if (visibleItems.length === 0) {
        duplicateBox.classList.add('hidden');
        duplicateTotalView.textContent = '0';
        replaceChildren(duplicateItemsView, []);
        return;
      }

      duplicateBox.classList.remove('hidden');
      duplicateTotalView.textContent = String(safeTotal);
      replaceChildren(
        duplicateItemsView,
        buildChipNodes(visibleItems, 'duplicate-chip', emptyTexts.duplicate || '当前没有重复番号。')
      );
    }

    function updateDuplicateItems(items = [], totalCount = items.length) {
      const normalized = normalizeItems(items, maxPanelItems);
      renderDuplicateItems(normalized, Number.isFinite(totalCount) ? totalCount : normalized.length);
    }

    function renderPageGapItems(items = []) {
      const visibleItems = toSafeArray(items);
      const signature = visibleItems.join('|');

      if (signature === lastRenderSignature.pageGap) {
        return;
      }

      lastRenderSignature.pageGap = signature;
      if (!pageGapBox || !pageGapItemsView) {
        return;
      }

      if (visibleItems.length === 0) {
        pageGapBox.classList.add('hidden');
        replaceChildren(pageGapItemsView, []);
        return;
      }

      pageGapBox.classList.remove('hidden');
      replaceChildren(pageGapItemsView, buildChipNodes(visibleItems, 'page-gap-chip', emptyTexts.pageGap || '当前没有分页缺口。'));
    }

    function updatePageGapItems(items = []) {
      renderPageGapItems(normalizeItems(items, maxPanelItems));
    }

    function renderFilteredItems(items = [], totalCount = items.length) {
      const safeTotal = Number.isFinite(totalCount) ? totalCount : items.length;
      const visibleItems = toSafeArray(items);
      const signature = `${safeTotal}|${visibleItems.join('|')}`;

      if (signature === lastRenderSignature.filtered) {
        return;
      }

      lastRenderSignature.filtered = signature;
      if (!filteredItemsView || !filteredTotalView) {
        return;
      }

      filteredTotalView.textContent = String(safeTotal);
      replaceChildren(
        filteredItemsView,
        buildChipNodes(visibleItems, 'state-chip chip-filtered', emptyTexts.filtered || '当前没有过滤影片番号。')
      );
    }

    function updateFilteredItems(items = [], totalCount = items.length) {
      const normalized = normalizeItems(items, maxPanelItems);
      renderFilteredItems(normalized, Number.isFinite(totalCount) ? totalCount : normalized.length);
    }

    function renderFailedDetails(items = [], totalCount = items.length) {
      const visibleItems = toSafeArray(items);
      const safeTotal = Number.isFinite(totalCount) ? totalCount : visibleItems.length;
      const failedSignature = [
        safeTotal,
        ...visibleItems.map((item) =>
          [
            item.item || item.sourceLink || '',
            item.reason || '',
            item.category || '',
            item.retryCount || 0,
            item.recoverable === false ? 'manual' : 'auto',
            item.retryAdvice || '',
            item.lastFailedAt || ''
          ].join('|')
        )
      ].join('##');

      if (failedSignature === lastRenderSignature.failed) {
        return;
      }

      lastRenderSignature.failed = failedSignature;
      if (!failedItemsView || !failedTotalView) {
        return;
      }

      failedTotalView.textContent = String(safeTotal);

      if (visibleItems.length === 0) {
        replaceChildren(failedItemsView, [createEmptyChip(emptyTexts.failed || '暂无失败记录。')]);
        return;
      }

      const nodes = [];

      if (safeTotal > visibleItems.length) {
        const summary = document.createElement('article');
        summary.className = 'failed-summary';
        summary.textContent =
          `${safeStateTexts.failedSummaryPrefix}${safeTotal}${safeStateTexts.failedSummaryMiddle}${visibleItems.length}${safeStateTexts.failedSummarySuffix}`;
        nodes.push(summary);
      }

      visibleItems.forEach((item) => {
        const card = document.createElement('article');
        card.className = 'failed-card';

        const title = document.createElement('strong');
        title.textContent = item.item || item.sourceLink || safeStateTexts.unknownItem;
        title.title = item.sourceLink || item.item || '';

        const reason = document.createElement('span');
        reason.textContent = item.reason || safeStateTexts.defaultFailureReason;

        const meta = document.createElement('div');
        meta.className = 'failed-meta';

        const badges = document.createElement('div');
        badges.className = 'failed-badges';
        badges.appendChild(
          createChip(`${safeStateTexts.failureCategoryPrefix}${translateFailureCategory(item.category)}`, 'failed-badge')
        );
        badges.appendChild(
          createChip(`${safeStateTexts.failureRetryPrefix}${Math.max(1, Number(item.retryCount) || 1)}`, 'failed-badge')
        );
        if (item.recoverable === false) {
          badges.appendChild(createChip(safeStateTexts.failureManualReview, 'failed-badge is-warning'));
        }
        meta.appendChild(badges);

        if (item.retryAdvice) {
          const advice = document.createElement('span');
          advice.textContent = `${safeStateTexts.failureAdvicePrefix}${item.retryAdvice}`;
          meta.appendChild(advice);
        }

        if (item.lastFailedAt) {
          const failedAt = document.createElement('span');
          failedAt.className = 'failed-next-retry';
          failedAt.textContent = `${safeStateTexts.failureTimePrefix}${normalizeDateText(item.lastFailedAt)}`;
          meta.appendChild(failedAt);
        }

        card.appendChild(title);
        card.appendChild(reason);
        card.appendChild(meta);
        nodes.push(card);
      });

      replaceChildren(failedItemsView, nodes);
    }

    function updateFailedDetails(items = [], totalCount = items.length) {
      const visibleItems = normalizeFailedDetails(items, maxPanelItems);
      renderFailedDetails(visibleItems, Number.isFinite(totalCount) ? totalCount : visibleItems.length);
    }

    function applyPanel(panel = {}) {
      renderDuplicateItems(
        sanitizeReadyItems(panel.duplicateItems, maxPanelItems),
        Number.isFinite(panel.duplicateItemsTotal)
          ? panel.duplicateItemsTotal
          : toSafeArray(panel.duplicateItems).length
      );
      renderUnfinishedItems(
        sanitizeReadyItems(panel.unfinishedItems, maxPanelItems),
        Number.isFinite(panel.unfinishedItemsTotal)
          ? panel.unfinishedItemsTotal
          : toSafeArray(panel.unfinishedItems).length
      );
      renderPageGapItems(sanitizeReadyItems(panel.pageGapItems, maxPanelItems));
      renderFilteredItems(
        sanitizeReadyItems(panel.filteredItems || panel.filteredItemIds, maxPanelItems),
        Number.isFinite(panel.filteredItemsTotal)
          ? panel.filteredItemsTotal
          : Number.isFinite(panel.filteredByActressCount)
            ? panel.filteredByActressCount
            : toSafeArray(panel.filteredItems || panel.filteredItemIds).length
      );
      renderFailedDetails(
        sanitizeReadyFailedDetails(panel.failedDetails, maxPanelItems),
        Number.isFinite(panel.failedDetailsTotal)
          ? panel.failedDetailsTotal
          : toSafeArray(panel.failedDetails).length
      );
    }

    return {
      applyPanel,
      renderActiveItems,
      renderFilteredItems,
      updateActiveItems,
      updateDuplicateItems,
      updateFailedDetails,
      updateFilteredItems,
      updatePageGapItems,
      updateUnfinishedItems
    };
  }

  globalScope.desktopReviewPanelRenderer = {
    createReviewPanelRenderer
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/stateController.js ==== */
// State controller owns UI-facing aggregation of crawl/task/runtime state.
// It should remain transport-agnostic: the controller renders normalized
// payloads and should not care whether they arrived through Wails or a legacy
// compatibility path.
//
// Ownership summary:
// 1) coalesce normalized crawl/task/runtime payloads for renderer projection
// 2) own summary stats, status pill, and button enablement updates
// 3) delegate panel-specific DOM work to dedicated renderers instead of inlining
//    stage/result/review rendering here
//
// File map for maintainers:
// 1) renderer dependency wiring for state sub-renderers
// 2) normalized crawl/task/runtime projection state
// 3) top-level state/result/review apply pipeline
(function initializeStateController(globalScope) {
  // createStateController is the pure crawl-panel projection layer. It should
  // render normalized runtime/read-model payloads, not dispatch crawl commands.
  function createStateController(options) {
    const stateHelpers = globalScope.desktopStateHelpers || null;
    const stagePanelRendererFactory = globalScope.desktopStagePanelRenderer || null;
    const resultPanelRendererFactory = globalScope.desktopResultPanelRenderer || null;
    const reviewPanelRendererFactory = globalScope.desktopReviewPanelRenderer || null;

    if (!stateHelpers || !stagePanelRendererFactory || !resultPanelRendererFactory || !reviewPanelRendererFactory) {
      throw new Error('State controller dependencies are not available.');
    }

    const { normalizeItems, sanitizeReadyItems } = stateHelpers;
    const {
      statusPill,
      stateMessage,
      startButton,
      stopButton,
      restartButton,
      statPage,
      statQueued,
      statAttempted,
      statCompleted,
      currentBox,
      currentTotalView,
      currentItemsView,
      unfinishedItemsView,
      unfinishedTotalView,
      duplicateBox,
      duplicateItemsView,
      duplicateTotalView,
      pageGapBox,
      pageGapItemsView,
      failedTotalView,
      failedItemsView,
      filteredItemsView,
      filteredTotalView,
      crawlStageStatus,
      crawlStageProgress,
      crawlStageTitle,
      crawlStageDescription,
      crawlStageMessage,
      crawlStageBarFill,
      crawlStageOutput,
      crawlStagePage,
      crawlStageQueued,
      crawlStageAttempted,
      crawlStageCompleted,
      crawlResultQuality,
      crawlResultSummary,
      resultHistoryController = null,
      statusLabels = {},
      defaultMessage = '等待开始抓取。',
      emptyTexts = {},
      maxPanelItems = 12,
      renderInterval = 180,
      failureCategoryLabels = {},
      stateTexts = {}
    } = options || {};

    const stagePanelRenderer = stagePanelRendererFactory.createStagePanelRenderer({
      crawlStageStatus,
      crawlStageProgress,
      crawlStageTitle,
      crawlStageDescription,
      crawlStageMessage,
      crawlStageBarFill,
      crawlStageOutput,
      crawlStagePage,
      crawlStageQueued,
      crawlStageAttempted,
      crawlStageCompleted,
      statusLabels,
      defaultMessage
    });
    const resultPanelRenderer = resultPanelRendererFactory.createResultPanelRenderer({
      crawlResultQuality,
      crawlResultSummary,
      resultHistoryController,
      statusLabels
    });
    const reviewPanelRenderer = reviewPanelRendererFactory.createReviewPanelRenderer({
      currentBox,
      currentTotalView,
      currentItemsView,
      unfinishedItemsView,
      unfinishedTotalView,
      duplicateBox,
      duplicateItemsView,
      duplicateTotalView,
      pageGapBox,
      pageGapItemsView,
      failedTotalView,
      failedItemsView,
      filteredItemsView,
      filteredTotalView,
      emptyTexts,
      maxPanelItems,
      failureCategoryLabels,
      stateTexts
    });

    // State-controller responsibilities:
    // 1) coalesce transport payloads into one UI-facing render cadence
    // 2) update controller-owned summary stats and status buttons
    // 3) delegate panel-specific DOM work to dedicated renderers
    //
    // This layer should not invent new crawler facts. If a field is missing,
    // prefer a neutral fallback over reconstructing business meaning here.

    let pendingState = null;
    let pendingUiState = null;
    let pendingReviewPanel = null;
    let stateFlushTimer = null;

    const lastRenderSignature = {
      status: '',
      stats: ''
    };

    function setStatus(status, message = defaultMessage) {
      // Status projection is renderer-local state only. Button enabling and
      // pill text should follow upstream state, not invent new task semantics.
      const nextStatus = String(status || 'idle').trim() || 'idle';
      const nextMessage = String(message || defaultMessage).trim() || defaultMessage;
      const signature = `${nextStatus}##${nextMessage}`;

      if (signature === lastRenderSignature.status) {
        return;
      }

      lastRenderSignature.status = signature;
      if (statusPill) {
        statusPill.className = `status-pill ${nextStatus}`;
        statusPill.textContent = statusLabels[nextStatus] || nextStatus;
      }
      if (stateMessage) {
        stateMessage.textContent = nextMessage;
      }

      const isStartingOrStopping = ['starting', 'stopping'].includes(nextStatus);
      const isRunning = ['starting', 'running', 'stopping'].includes(nextStatus);

      if (startButton) {
        startButton.disabled = isRunning;
      }
      if (stopButton) {
        stopButton.disabled = !isRunning;
      }
      if (restartButton) {
        restartButton.disabled = isStartingOrStopping;
      }
    }

    function updateStats(stats = {}) {
      const nextPage = String(stats.pageIndex ?? 1);
      const nextQueued = String(stats.queued ?? 0);
      const nextAttempted = String(stats.attempted ?? 0);
      const nextCompleted = String(stats.completed ?? 0);
      // Filtered-item state should arrive already normalized from the bridge/
      // Go read model. The renderer only trims/presents it and should not
      // infer actress-filter business rules on its own.
      const filteredItems = normalizeItems(stats.filteredItemIds || stats.filteredItems || [], maxPanelItems);
      const filteredTotal = Number.isFinite(stats.filteredByActressCount)
        ? stats.filteredByActressCount
        : filteredItems.length;
      const signature = `${nextPage}|${nextQueued}|${nextAttempted}|${nextCompleted}|${filteredTotal}|${filteredItems.join(',')}`;

      if (signature === lastRenderSignature.stats) {
        return;
      }

      lastRenderSignature.stats = signature;
      if (statPage) {
        statPage.textContent = nextPage;
      }
      if (statQueued) {
        statQueued.textContent = nextQueued;
      }
      if (statAttempted) {
        statAttempted.textContent = nextAttempted;
      }
      if (statCompleted) {
        statCompleted.textContent = nextCompleted;
      }

      reviewPanelRenderer.renderFilteredItems(filteredItems, filteredTotal);
    }

    function flushPendingState() {
      if (stateFlushTimer) {
        clearTimeout(stateFlushTimer);
        stateFlushTimer = null;
      }

      // Rendering is intentionally batched so rapid event bursts from bridge
      // updates do not thrash the DOM. Final states bypass the timer and flush
      // immediately so operators see the terminal result without delay.
      if (!pendingState && !pendingUiState && !pendingReviewPanel) {
        return;
      }

      const state = pendingUiState || pendingState;
      const reviewPanel = pendingReviewPanel || (state && state.reviewPanel ? state.reviewPanel : null);
      pendingState = null;
      pendingUiState = null;
      pendingReviewPanel = null;

      if (state) {
        setStatus(state.status, state.message || defaultMessage);
        updateStats(state.stats);
        if (state.__goUiState) {
          const activeItems = sanitizeReadyItems(state.activeItems, maxPanelItems);
          reviewPanelRenderer.renderActiveItems(
            activeItems,
            Number.isFinite(state.activeItemsTotal) ? state.activeItemsTotal : activeItems.length
          );
        } else {
          reviewPanelRenderer.updateActiveItems(state.activeItems, state.activeItemsTotal);
        }
      }

      if (reviewPanel) {
        // Review-panel status is diagnostic metadata for list cards. The top
        // lifecycle pill should keep following task/ui state so stale failed
        // review snapshots do not mark the idle startup screen as abnormal.
        reviewPanelRenderer.applyPanel(reviewPanel);
        return;
      }

      if (!state) {
        return;
      }

      reviewPanelRenderer.updateDuplicateItems(state.duplicateItems, state.duplicateItemsTotal);
      reviewPanelRenderer.updateUnfinishedItems(state.unfinishedItems, state.unfinishedItemsTotal);
      reviewPanelRenderer.updatePageGapItems(state.pageGapItems);
      reviewPanelRenderer.updateFailedDetails(state.failedDetails, state.failedDetailsTotal);
    }

    function isFinalStatus(status) {
      return ['completed', 'error', 'stopped', 'incomplete'].includes(String(status || '').toLowerCase());
    }

    function scheduleFlush(nextStatus) {
      if (isFinalStatus(nextStatus)) {
        flushPendingState();
        return;
      }

      if (!stateFlushTimer) {
        stateFlushTimer = setTimeout(flushPendingState, renderInterval);
      }
    }

    function enqueueState(state) {
      pendingState = state;
      scheduleFlush(state && state.status);
    }

    function enqueueUiState(state) {
      // Go UI state is already a renderer-ready read model. Mark it so the
      // flush path can avoid re-running legacy item shaping rules.
      pendingUiState = {
        ...state,
        __goUiState: true
      };

      const nextStatus = (state && state.status) || (pendingState && pendingState.status) || '';
      scheduleFlush(nextStatus);
    }

    function enqueueReviewPanel(panel) {
      pendingReviewPanel = panel;
      const nextStatus = (panel && panel.status) || (pendingState && pendingState.status) || '';
      scheduleFlush(nextStatus);
    }

    return {
      enqueueState,
      enqueueUiState,
      enqueueReviewPanel,
      // Stage/result/review panels remain delegated read models. This
      // controller only decides render cadence and handoff boundaries.
      applyStagePanel: stagePanelRenderer.applyPanel,
      applyResultPanel: resultPanelRenderer.applyPanel,
      setStatus,
      clearResultHistory: resultPanelRenderer.clearHistory
    };
  }

  globalScope.desktopStateController = {
    createStateController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/formController.js ==== */
// Form controller owns crawler setup inputs and client-side validation.
// It normalizes raw field values and delegates persisted/runtime state rendering
// to other controllers, so setup bugs can be isolated from crawl-state bugs.
//
// Ownership summary:
// 1) own editable crawler setup fields and local validation
// 2) manage input-side helpers such as drafts, templates, and proxy checks
// 3) hand normalized settings to downstream runtime/bridge layers without
//    owning crawl execution or result projection
//
// File map for maintainers:
// 1) raw input normalization helpers
// 2) crawler form bootstrap/draft/template/proxy helpers
// 3) validated crawl-settings payload builders and submit actions
(function initializeFormController(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const getErrorMessage = rendererHelpers.getErrorMessage;
  const bindAsyncClickHelper = rendererHelpers.bindAsyncClick || null;
  const safeLocalStorageGet = rendererHelpers.safeLocalStorageGet;
  const safeLocalStorageSet = rendererHelpers.safeLocalStorageSet;

  if (!getErrorMessage || !safeLocalStorageGet || !safeLocalStorageSet) {
    throw new Error('desktopRendererHelpers must be loaded before formController');
  }

  function normalizeIntegerText(value) {
    // Input normalization accepts common full-width and mojibake variants so
    // the setup form remains tolerant without pushing those quirks into the
    // backend settings contract.
    return String(value ?? '')
      .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
      .replace(/＋/g, '+')
      .replace(/[－–—]/g, '-')
      .replace(/[，,]/g, '')
      .replace(/\u3000/g, ' ')
      .trim();
  }

  function toSafeInteger(value, fallback) {
    const parsed = Number.parseInt(normalizeIntegerText(value), 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function normalizeMinInteger(value, minimum, fallback) {
    return Math.max(minimum, toSafeInteger(value, fallback));
  }

  function normalizeNonNegativeInteger(value, fallback) {
    return Math.max(0, toSafeInteger(value, fallback));
  }

  // createFormController is the crawler workspace's input-side module
  // boundary. It should own editable settings state only.
  function createFormController(options) {
    const { elements, desktopApi, logController, stateController, uiText } = options;
    const platformBridge = globalScope.desktopPlatformBridge || null;
    const { UI_TEXT, TASK_TEMPLATES } = uiText;
    const PROXY_AUTO_CHECK_INTERVAL_MS = 30000;
    const STORAGE_KEYS = {
      crawlerDraft: 'jav.crawler.formDraft.v1'
    };
    const proxyValidationState = {
      timerId: null,
      autoTimerId: null,
      requestToken: 0,
      lastValue: '',
      lastStatus: 'empty'
    };
    let eventsBound = false;
    let bootstrapCompleted = false;
    let hydratingFormState = false;

    // Form-controller responsibilities:
    // 1) normalize raw user input into stable crawl settings
    // 2) own local input-side behaviors such as proxy validation and templates
    // 3) hand validated settings to the bridge without coupling to crawl-state
    //
    // Keep runtime/result-panel interpretation out of this file. That boundary
    // is important when debugging whether an issue came from setup, bridge
    // dispatch, or downstream crawler execution.
    //
    // Workflow map:
    // 1) load saved settings + local draft
    // 2) normalize/validate current input values
    // 3) run input-side preflight checks such as proxy validation
    // 4) hand one normalized crawl-settings payload to desktopApi
    // 5) never interpret crawl runtime/results beyond basic form locking

    function normalizeActressThresholdField() {
      if (!elements.actressCountFilterThreshold) {
        return;
      }

      const normalizedValue = normalizeIntegerText(elements.actressCountFilterThreshold.value);
      if (elements.actressCountFilterThreshold.value !== normalizedValue) {
        elements.actressCountFilterThreshold.value = normalizedValue;
      }
    }

    function buildCrawlerDraftSnapshot() {
      // Draft snapshots are renderer-local protection for in-progress edits.
      // They are not the persisted product settings source of truth.
      const settings = getSettings();
      return {
        version: '2026-05-07-crawler-draft',
        updatedAt: new Date().toISOString(),
        ...settings
      };
    }

    function loadCrawlerDraftSnapshot() {
      const rawValue = safeLocalStorageGet(STORAGE_KEYS.crawlerDraft, '');
      if (!rawValue) {
        return null;
      }

      try {
        const parsed = JSON.parse(rawValue);
        return parsed && typeof parsed === 'object' ? parsed : null;
      } catch {
        return null;
      }
    }

    function persistCrawlerDraft() {
      // Draft persistence only exists to protect in-progress edits from
      // renderer reload/bootstrap re-entry. Do not write drafts while the form
      // is still being hydrated from saved settings.
      if (!bootstrapCompleted || hydratingFormState) {
        return;
      }

      safeLocalStorageSet(STORAGE_KEYS.crawlerDraft, JSON.stringify(buildCrawlerDraftSnapshot()));
    }

    function clearCrawlerDraft() {
      safeLocalStorageSet(STORAGE_KEYS.crawlerDraft, '');
    }

    function applyCrawlerDraftSnapshot(draft = null) {
      if (!draft || typeof draft !== 'object') {
        return false;
      }

      // Draft hydration should stay field-by-field and tolerant so one stale
      // draft key never blocks the rest of the form from recovering.
      if (Object.prototype.hasOwnProperty.call(draft, 'taskTemplate') && TASK_TEMPLATES[draft.taskTemplate]) {
        elements.taskTemplate.value = draft.taskTemplate;
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'base')) {
        elements.base.value = String(draft.base || '').trim();
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'output')) {
        elements.output.value = String(draft.output || '').trim();
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'limit')) {
        elements.limit.value = String(normalizeNonNegativeInteger(draft.limit, 0));
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'totalPages')) {
        elements.totalPages.value = String(normalizeNonNegativeInteger(draft.totalPages, 0));
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'itemsPerPage')) {
        elements.itemsPerPage.value = String(normalizeMinInteger(draft.itemsPerPage, 1, UI_TEXT.limits.defaultItemsPerPage));
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'parallel')) {
        elements.parallel.value = String(normalizeMinInteger(draft.parallel, 1, TASK_TEMPLATES.balanced.parallel));
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'delay')) {
        elements.delay.value = String(normalizeNonNegativeInteger(draft.delay, TASK_TEMPLATES.balanced.delay));
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'timeout')) {
        elements.timeout.value = String(
          normalizeMinInteger(draft.timeout, UI_TEXT.limits.minTimeout, TASK_TEMPLATES.balanced.timeout)
        );
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'proxy')) {
        elements.proxy.value = String(draft.proxy || '').trim();
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'magnetExcludeKeywords')) {
        elements.magnetExcludeKeywords.value = String(draft.magnetExcludeKeywords || '').trim();
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'actressCountFilterThreshold')) {
        elements.actressCountFilterThreshold.value = String(
          normalizeNonNegativeInteger(draft.actressCountFilterThreshold, 0)
        );
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'cloudflare')) {
        elements.cloudflare.checked = Boolean(draft.cloudflare);
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'secondValidation')) {
        elements.secondValidation.checked = Boolean(draft.secondValidation);
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'nomag')) {
        elements.nomag.checked = Boolean(draft.nomag);
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'allmag')) {
        elements.allmag.checked = Boolean(draft.allmag);
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'magnetContentValidation')) {
        elements.magnetContentValidation.checked = Boolean(draft.magnetContentValidation);
      }
      if (Object.prototype.hasOwnProperty.call(draft, 'nopic')) {
        elements.nopic.checked = Boolean(draft.nopic);
      }

      return true;
    }

    function clearProxyValidationTimer() {
      if (!proxyValidationState.timerId) {
        return;
      }

      clearTimeout(proxyValidationState.timerId);
      proxyValidationState.timerId = null;
    }

    function clearProxyAutoValidationTimer() {
      if (!proxyValidationState.autoTimerId) {
        return;
      }

      clearTimeout(proxyValidationState.autoTimerId);
      proxyValidationState.autoTimerId = null;
    }

    function setProxyStatus(status, detailText = '') {
      const normalizedStatus =
        status === 'checking' || status === 'valid' || status === 'invalid' ? status : 'empty';
      const statusText = UI_TEXT.proxyStatus[normalizedStatus] || UI_TEXT.proxyStatus.empty;
      const fallbackDetailKey = `${normalizedStatus}Detail`;
      const nextDetail =
        typeof detailText === 'string' && detailText.trim()
          ? detailText.trim()
          : UI_TEXT.proxyStatus[fallbackDetailKey] || UI_TEXT.fields.proxyHelp;

      proxyValidationState.lastStatus = normalizedStatus;

      if (elements.proxyStatus) {
        elements.proxyStatus.className = `proxy-status-chip ${normalizedStatus}`;
        elements.proxyStatus.textContent = statusText;
      }

      if (elements.proxyStatusDetail) {
        elements.proxyStatusDetail.textContent = nextDetail;
      }
    }

    async function validateProxyValue(proxyValue, options = {}) {
      // Proxy validation belongs to setup-time transport diagnosis only. The
      // result should update form UX, not trigger broader page-state reloads.
      const trimmedValue = String(proxyValue || '').trim();
      clearProxyValidationTimer();
      proxyValidationState.requestToken += 1;
      const requestToken = proxyValidationState.requestToken;
      proxyValidationState.lastValue = trimmedValue;

      if (!trimmedValue) {
        setProxyStatus('empty');
        return {
          status: 'empty',
          detail: UI_TEXT.proxyStatus.emptyDetail
        };
      }

      setProxyStatus('checking');

      try {
        const result = await desktopApi.validateProxy(trimmedValue, {
          targetUrl: elements.base.value.trim() || UI_TEXT.placeholders.base
        });

        if (requestToken !== proxyValidationState.requestToken) {
          return result;
        }

        if (result && result.status === 'valid') {
          setProxyStatus('valid', result.detail);
          return result;
        }

        setProxyStatus('invalid', result && result.detail);
        return result || { status: 'invalid', detail: UI_TEXT.proxyStatus.invalidDetail };
      } catch (error) {
        const message = getErrorMessage(error);
        if (requestToken === proxyValidationState.requestToken) {
          setProxyStatus('invalid', message);
        }
        return {
          status: 'invalid',
          detail: message
        };
      }
    }

    function scheduleProxyValidation(delayMs = 650) {
      const trimmedValue = elements.proxy.value.trim();
      clearProxyValidationTimer();

      if (!trimmedValue) {
        proxyValidationState.requestToken += 1;
        proxyValidationState.lastValue = '';
        setProxyStatus('empty');
        return;
      }

      setProxyStatus('checking');
      proxyValidationState.timerId = setTimeout(() => {
        proxyValidationState.timerId = null;
        void validateProxyValue(trimmedValue);
      }, delayMs);
    }

    function scheduleProxyAutoValidation(delayMs = PROXY_AUTO_CHECK_INTERVAL_MS) {
      clearProxyAutoValidationTimer();
      proxyValidationState.autoTimerId = setTimeout(async () => {
        proxyValidationState.autoTimerId = null;
        const trimmedValue = elements.proxy.value.trim();

        if (!trimmedValue) {
          setProxyStatus('empty');
          scheduleProxyAutoValidation();
          return;
        }

        await validateProxyValue(trimmedValue);
        scheduleProxyAutoValidation();
      }, Math.max(1000, delayMs));
    }

    async function ensureProxyReady(proxyValue) {
      const trimmedValue = String(proxyValue || '').trim();
      if (!trimmedValue) {
        setProxyStatus('empty');
        return;
      }

      const result = await validateProxyValue(trimmedValue);
      if (!result || result.status !== 'valid') {
        throw new Error(UI_TEXT.validation.proxyInvalid);
      }
    }

    function normalizeMagnetExcludeKeywords(rawValue) {
      return String(rawValue || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .join(', ');
    }

    function validateMagnetExcludeKeywords(rawValue) {
      const trimmedValue = String(rawValue || '').trim();
      if (!trimmedValue) {
        return {
          valid: true,
          normalized: ''
        };
      }

      if (/[，、；;\r\n]/.test(trimmedValue)) {
        return {
          valid: false,
          normalized: trimmedValue
        };
      }

      const parts = trimmedValue.split(',');
      if (
        trimmedValue.startsWith(',') ||
        trimmedValue.endsWith(',') ||
        parts.some((item) => !item.trim())
      ) {
        return {
          valid: false,
          normalized: trimmedValue
        };
      }

      return {
        valid: true,
        normalized: normalizeMagnetExcludeKeywords(trimmedValue)
      };
    }

    function focusMagnetExcludeKeywordsField() {
      window.setTimeout(() => {
        elements.magnetExcludeKeywords.focus();
        elements.magnetExcludeKeywords.select();
      }, 0);
    }

    async function ensureMagnetExcludeKeywordsReady(rawValue) {
      const validation = validateMagnetExcludeKeywords(rawValue);
      if (validation.valid) {
        elements.magnetExcludeKeywords.value = validation.normalized;
        return validation.normalized;
      }

      if (desktopApi && typeof desktopApi.showAlert === 'function') {
        await desktopApi.showAlert({
          type: 'warning',
          title: UI_TEXT.fields.magnetExcludeKeywords,
          message: UI_TEXT.validation.magnetExcludeKeywordsInvalid
        });
      } else {
        window.alert(UI_TEXT.validation.magnetExcludeKeywordsInvalid);
      }

      focusMagnetExcludeKeywordsField();
      throw new Error(UI_TEXT.validation.magnetExcludeKeywordsInvalid);
    }

    function applyBackgroundImage(backgroundImageUrl = '') {
      if (backgroundImageUrl) {
        document.documentElement.style.setProperty('--page-backdrop-image', `url("${backgroundImageUrl}")`);
      } else {
        document.documentElement.style.removeProperty('--page-backdrop-image');
      }

      if (elements.resetBackgroundButton) {
        elements.resetBackgroundButton.disabled = !backgroundImageUrl;
      }
    }

    function getItemsPerPage() {
      return normalizeMinInteger(elements.itemsPerPage.value, 1, UI_TEXT.limits.defaultItemsPerPage);
    }

    function getSuggestedPages(limit, itemsPerPage) {
      if (!limit || limit <= 0 || !itemsPerPage || itemsPerPage <= 0) {
        return null;
      }

      const pages = Math.ceil(limit / itemsPerPage);
      const remainder = limit % itemsPerPage;

      return {
        pages,
        lastPageCount: remainder === 0 ? itemsPerPage : remainder
      };
    }

    function applyTemplate(templateKey, templateOptions = {}) {
      const template = TASK_TEMPLATES[templateKey] || TASK_TEMPLATES.balanced;
      const { keepLimit = true, keepBase = true, keepOutput = true } = templateOptions;

      elements.taskTemplate.value = templateKey;
      elements.parallel.value = String(template.parallel);
      elements.delay.value = String(template.delay);
      elements.timeout.value = String(template.timeout);
      elements.itemsPerPage.value = String(template.itemsPerPage);
      elements.cloudflare.checked = template.cloudflare;
      elements.secondValidation.checked = template.secondValidation;

      if (!keepLimit) {
        elements.limit.value = '0';
      }

      if (!keepBase) {
        elements.base.value = '';
      }

      if (!keepOutput) {
        elements.output.value = '';
      }

      refreshSuggestedPages();
      persistCrawlerDraft();
    }

    function getSettings() {
      // 注意：该返回值会被直接送入 Wails/sidecar/Go 三条运行链路。
      // 这里一旦漏字段或把数字归一化成 0，后面的演员过滤/统计都会整体失真。
      //
      // 排障顺序建议：
      // 1) 先确认这里收集的 payload 是否正确
      // 2) 再确认 desktopApi.startCrawl / restartCrawl 是否收到同样的数据
      // 3) 最后才看运行时状态面板或日志为何显示异常
      return {
        frontendPayloadVersion: '2026-05-04-review-bootstrap-sync',
        base: elements.base.value.trim(),
        output: elements.output.value.trim(),
        limit: normalizeNonNegativeInteger(elements.limit.value, 0),
        totalPages: normalizeNonNegativeInteger(elements.totalPages.value, 0),
        itemsPerPage: getItemsPerPage(),
        parallel: normalizeMinInteger(elements.parallel.value, 1, TASK_TEMPLATES.balanced.parallel),
        delay: normalizeNonNegativeInteger(elements.delay.value, TASK_TEMPLATES.balanced.delay),
        timeout: normalizeMinInteger(
          elements.timeout.value,
          UI_TEXT.limits.minTimeout,
          TASK_TEMPLATES.balanced.timeout
        ),
        proxy: elements.proxy.value.trim(),
        magnetExcludeKeywords: elements.magnetExcludeKeywords.value.trim(),
        actressCountFilterThreshold: normalizeNonNegativeInteger(elements.actressCountFilterThreshold.value, 0),
        taskTemplate: elements.taskTemplate.value,
        cloudflare: elements.cloudflare.checked,
        secondValidation: elements.secondValidation.checked,
        nomag: elements.nomag.checked,
        allmag: elements.allmag.checked,
        magnetContentValidation: elements.magnetContentValidation.checked,
        nopic: elements.nopic.checked
      };
    }

    function validateSettings(settings) {
      if (!settings.base) {
        throw new Error(UI_TEXT.validation.baseRequired);
      }

      if (!settings.output) {
        throw new Error(UI_TEXT.validation.outputRequired);
      }

      if (Number.isNaN(settings.itemsPerPage) || settings.itemsPerPage < 1) {
        throw new Error(UI_TEXT.validation.itemsPerPageInvalid);
      }

      if (Number.isNaN(settings.parallel) || settings.parallel < 1) {
        throw new Error(UI_TEXT.validation.parallelInvalid);
      }

      if (Number.isNaN(settings.totalPages) || settings.totalPages < 0) {
        throw new Error(UI_TEXT.validation.totalPagesInvalid);
      }

      if (Number.isNaN(settings.delay) || settings.delay < 0) {
        throw new Error(UI_TEXT.validation.delayInvalid);
      }

      if (Number.isNaN(settings.timeout) || settings.timeout < UI_TEXT.limits.minTimeout) {
        throw new Error(
          `${UI_TEXT.validation.timeoutInvalidPrefix}${UI_TEXT.limits.minTimeout}${UI_TEXT.validation.timeoutInvalidSuffix}`
        );
      }
    }

    function isPreflightErrorMessage(message) {
      const knownMessages = new Set([
        UI_TEXT.validation.baseRequired,
        UI_TEXT.validation.outputRequired,
        UI_TEXT.validation.itemsPerPageInvalid,
        UI_TEXT.validation.parallelInvalid,
        UI_TEXT.validation.totalPagesInvalid,
        UI_TEXT.validation.delayInvalid,
        UI_TEXT.validation.proxyInvalid,
        UI_TEXT.validation.magnetExcludeKeywordsInvalid
      ]);

      if (knownMessages.has(message)) {
        return true;
      }

      return (
        typeof message === 'string' &&
        message.startsWith(UI_TEXT.validation.timeoutInvalidPrefix) &&
        message.endsWith(UI_TEXT.validation.timeoutInvalidSuffix)
      );
    }

    function refreshSuggestedPages() {
      const limit = Number(elements.limit.value || 0);
      const totalPages = Number(elements.totalPages.value || 0);
      const itemsPerPage = getItemsPerPage();
      const suggestion = getSuggestedPages(limit, itemsPerPage);

      if (!suggestion) {
        elements.totalPagesAdvice.textContent = UI_TEXT.advice.defaultPrimary;
        elements.totalPagesMeta.textContent = `${UI_TEXT.advice.defaultSecondaryPrefix}${itemsPerPage}${UI_TEXT.advice.defaultSecondarySuffix}`;
        elements.useSuggestedPagesButton.disabled = true;
        return;
      }

      elements.totalPagesAdvice.textContent = `${UI_TEXT.advice.suggestedPagesPrefix}${suggestion.pages}${UI_TEXT.advice.suggestedPagesSuffix}`;
      elements.totalPagesMeta.textContent =
        `${UI_TEXT.advice.lastPageEstimatePrefix}${itemsPerPage}${UI_TEXT.advice.lastPageEstimateMiddle}${suggestion.lastPageCount}${UI_TEXT.advice.lastPageEstimateSuffix}` +
        (totalPages > 0
          ? ` ${UI_TEXT.advice.manualPagesPrefix}${totalPages}${UI_TEXT.advice.manualPagesSuffix}`
          : '');
      elements.useSuggestedPagesButton.disabled = false;
    }

    async function prepareCrawlSettings() {
      const settings = getSettings();
      validateSettings(settings);
      settings.magnetExcludeKeywords = await ensureMagnetExcludeKeywordsReady(settings.magnetExcludeKeywords);
      await ensureProxyReady(settings.proxy);
      return settings;
    }

    async function prepareCrawlWithAntiBlock() {
      const settings = await prepareCrawlSettings();
      // Starting an update crawl should always take the recovery path first:
      // keep Cloudflare enabled for the current run and refresh anti-block
      // URLs before the actual crawl dispatch. This keeps the update flow
      // consistent even when the user forgot to toggle either control.
      settings.cloudflare = true;
      if (elements.cloudflare && !elements.cloudflare.checked) {
        elements.cloudflare.checked = true;
        persistCrawlerDraft();
      }

      try {
        appendFormLog('info', UI_TEXT.messages.antiBlockUpdating);
        const result = await desktopApi.updateAntiBlock(settings);
        appendFormLog(
          'info',
          `${UI_TEXT.messages.antiBlockUpdatedPrefix}${result.antiBlockUrls.length}${UI_TEXT.messages.antiBlockUpdatedSuffix}${result.filePath}`
        );
      } catch (error) {
        appendFormLog('warn', `${UI_TEXT.messages.antiBlockUpdateFailedPrefix}${getErrorMessage(error)}`);
      }

      return settings;
    }

    // Bridge crawl start is the only supported way for other workspaces to
    // reuse crawler runtime dispatch without copying setup validation logic.
    // Callers may override only a narrow subset of crawl settings.
    function buildBridgeCrawlSettings(overrides = {}) {
      const settings = getSettings();

      if (Object.prototype.hasOwnProperty.call(overrides, 'base')) {
        settings.base = String(overrides.base || '').trim();
      }
      if (Object.prototype.hasOwnProperty.call(overrides, 'output')) {
        settings.output = String(overrides.output || '').trim();
      }
      if (Object.prototype.hasOwnProperty.call(overrides, 'limit')) {
        settings.limit = normalizeNonNegativeInteger(overrides.limit, 0);
      }
      if (Object.prototype.hasOwnProperty.call(overrides, 'totalPages')) {
        settings.totalPages = normalizeNonNegativeInteger(overrides.totalPages, settings.totalPages);
      }

      return settings;
    }

    async function prepareBridgeCrawlSettings(overrides = {}) {
      const settings = buildBridgeCrawlSettings(overrides);
      validateSettings(settings);
      settings.magnetExcludeKeywords = await ensureMagnetExcludeKeywordsReady(settings.magnetExcludeKeywords);
      await ensureProxyReady(settings.proxy);
      return settings;
    }

    async function dispatchStartCrawl(settingsPromise, logMessage) {
      const settings = await settingsPromise;
      const nextLogMessage = String(logMessage || UI_TEXT.messages.startRunning).trim() || UI_TEXT.messages.startRunning;
      stateController.setStatus('starting', nextLogMessage);
      appendFormLog('info', nextLogMessage);
      await desktopApi.startCrawl(settings);
      clearCrawlerDraft();
      return settings;
    }

    async function startBridgeCrawl(overrides = {}, options = {}) {
      const sourceLabel = String(options && options.sourceLabel ? options.sourceLabel : '模块桥接').trim();
      const logMessage = sourceLabel ? `${sourceLabel}：已提交抓取任务` : UI_TEXT.messages.startRunning;
      return dispatchStartCrawl(prepareBridgeCrawlSettings(overrides), logMessage);
    }

    function bindBaseUrlChips() {
      elements.baseUrlHints.addEventListener('click', (event) => {
        const chip = event.target.closest('.base-url-chip');
        if (!chip) {
          return;
        }

        const url = chip.dataset.url || '';
        if (!url) {
          return;
        }

        if (elements.base.value !== url) {
          elements.base.value = url;
          elements.base.dispatchEvent(new Event('input', { bubbles: true }));
          elements.base.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    }

    function getLookupContext() {
      return {
        preferredBase: elements.base.value.trim(),
        magnetOnly: elements.nomag.checked
      };
    }

    function applyActressLookupResult(result = {}) {
      const fillCount =
        Number.isFinite(result.fillCount) && result.fillCount >= 0 ? result.fillCount : result.preferredCount;

      if (result.resolvedBase) {
        elements.base.value = String(result.resolvedBase).trim();
      }

      if (Number.isFinite(result.itemsPerPage) && result.itemsPerPage > 0) {
        elements.itemsPerPage.value = String(result.itemsPerPage);
      }

      if (Number.isFinite(fillCount) && fillCount >= 0) {
        elements.limit.value = String(fillCount);
      }

      if (Number.isFinite(result.totalPages) && result.totalPages >= 0) {
        elements.totalPages.value = String(result.totalPages);
      }

      refreshSuggestedPages();
      persistCrawlerDraft();
    }

    function bindResultPathButton(button, successPrefix) {
      if (!button) {
        return;
      }

      bindAsyncClick(
        button,
        async () => {
          const targetPath = String(button.dataset.targetPath || '').trim();
          if (!targetPath) {
            return;
          }

          const opened = await desktopApi.openPath(targetPath);
          if (opened) {
            appendFormLog('info', `${successPrefix}${opened}`);
          }
        },
        (error) => {
          appendFormLog('warn', getErrorMessage(error));
        }
      );
    }

    function appendFormLog(level, message, timestamp = new Date().toISOString()) {
      logController.appendLog(level, message, timestamp);
    }

    function bindAsyncClick(button, handler, onError) {
      if (typeof bindAsyncClickHelper === 'function') {
        bindAsyncClickHelper(button, handler, {
          onError,
          fallbackErrorHandler: (error) => appendFormLog('error', getErrorMessage(error))
        });
        return;
      }

      if (!button) {
        return;
      }

      button.addEventListener('click', async () => {
        try {
          await handler();
        } catch (error) {
          if (typeof onError === 'function') {
            onError(error);
            return;
          }
          appendFormLog('error', getErrorMessage(error));
        }
      });
    }

    function bindEvents() {
      // 所有爬虫设置页交互都从这里进入：
      // 1) 字段归一化与建议值
      // 2) 启停/重启按钮
      // 3) 输出路径、背景图、结果入口等便捷操作
      //
      // 当问题表现为“点了按钮没反应”或“输入一改 UI 就乱”，优先查这里。
      if (eventsBound) {
        return;
      }

      eventsBound = true;
      elements.limit.addEventListener('input', refreshSuggestedPages);
      elements.limit.addEventListener('input', persistCrawlerDraft);
      elements.totalPages.addEventListener('input', refreshSuggestedPages);
      elements.totalPages.addEventListener('input', persistCrawlerDraft);
      elements.itemsPerPage.addEventListener('input', refreshSuggestedPages);
      elements.itemsPerPage.addEventListener('input', persistCrawlerDraft);
      elements.actressCountFilterThreshold.addEventListener('input', normalizeActressThresholdField);
      elements.actressCountFilterThreshold.addEventListener('blur', normalizeActressThresholdField);
      elements.actressCountFilterThreshold.addEventListener('input', persistCrawlerDraft);
      elements.actressCountFilterThreshold.addEventListener('blur', persistCrawlerDraft);
      elements.base.addEventListener('input', () => {
        refreshSuggestedPages();
        persistCrawlerDraft();
        if (elements.proxy.value.trim()) {
          scheduleProxyValidation(300);
        }
        scheduleProxyAutoValidation();
      });
      elements.proxy.addEventListener('input', () => {
        persistCrawlerDraft();
        scheduleProxyValidation();
        scheduleProxyAutoValidation();
      });
      elements.proxy.addEventListener('blur', () => {
        if (!elements.proxy.value.trim()) {
          setProxyStatus('empty');
          scheduleProxyAutoValidation();
          return;
        }

        void validateProxyValue(elements.proxy.value.trim());
        scheduleProxyAutoValidation();
      });

      elements.taskTemplate.addEventListener('change', () => {
        applyTemplate(elements.taskTemplate.value);
        appendFormLog(
          'info',
          `${UI_TEXT.messages.templateAppliedPrefix}${TASK_TEMPLATES[elements.taskTemplate.value]?.label || TASK_TEMPLATES.balanced.label}`
        );
      });

      elements.useSuggestedPagesButton.addEventListener('click', () => {
        const suggestion = getSuggestedPages(Number(elements.limit.value || 0), getItemsPerPage());
        if (!suggestion) {
          return;
        }

        elements.totalPages.value = String(suggestion.pages);
        refreshSuggestedPages();
        persistCrawlerDraft();
        appendFormLog(
          'info',
          `${UI_TEXT.messages.suggestedPagesAppliedPrefix}${suggestion.pages}${UI_TEXT.messages.suggestedPagesAppliedSuffix}`
        );
      });

      [
        elements.parallel,
        elements.delay,
        elements.timeout,
        elements.magnetExcludeKeywords,
        elements.output
      ].forEach((element) => {
        if (!element) {
          return;
        }
        element.addEventListener('input', persistCrawlerDraft);
      });

      [
        elements.cloudflare,
        elements.secondValidation,
        elements.nomag,
        elements.allmag,
        elements.magnetContentValidation,
        elements.nopic
      ].forEach((element) => {
        if (!element) {
          return;
        }
        element.addEventListener('change', persistCrawlerDraft);
      });

      bindAsyncClick(
        elements.startButton,
        async () => {
          await dispatchStartCrawl(prepareCrawlWithAntiBlock(), UI_TEXT.messages.startRunning);
        },
        (error) => {
          const message = getErrorMessage(error);
          appendFormLog('error', message);
          stateController.setStatus(isPreflightErrorMessage(message) ? 'idle' : 'error', message);
        }
      );

      bindAsyncClick(
        elements.restartButton,
        async () => {
          const settings = await prepareCrawlWithAntiBlock();
          stateController.setStatus('starting', UI_TEXT.messages.restartRunning);
          appendFormLog('warn', UI_TEXT.messages.restartRunning);
          const result = await desktopApi.restartCrawl(settings);
          clearCrawlerDraft();

          if (result && result.restarting) {
            appendFormLog('info', UI_TEXT.messages.restartQueued);
          } else {
            appendFormLog('info', UI_TEXT.messages.restartStarted);
          }
        },
        (error) => {
          const message = getErrorMessage(error);
          appendFormLog('error', message);
          stateController.setStatus(isPreflightErrorMessage(message) ? 'idle' : 'error', message);
        }
      );

      bindAsyncClick(
        elements.stopButton,
        async () => {
          if (elements.stopButton.disabled) {
            return;
          }

          elements.stopButton.disabled = true;
          stateController.setStatus('stopping', UI_TEXT.messages.stopRequested);
          appendFormLog('warn', UI_TEXT.messages.stopRequested);
          await desktopApi.stopCrawl();
        },
        (error) => {
          appendFormLog('error', getErrorMessage(error));
        }
      );

      bindAsyncClick(elements.browseOutputButton, async () => {
        const selected = await desktopApi.chooseOutput();
        if (selected) {
          elements.output.value = selected;
          persistCrawlerDraft();
          appendFormLog('info', `${UI_TEXT.messages.outputSelectedPrefix}${selected}`);
        }
      });

      bindAsyncClick(elements.chooseBackgroundButton, async () => {
          const nextSettings = await desktopApi.chooseBackgroundImage();
          if (!nextSettings) {
            return;
          }

          applyBackgroundImage(nextSettings.backgroundImageUrl);
          if (nextSettings.backgroundImage) {
            appendFormLog('info', `${UI_TEXT.messages.backgroundSelectedPrefix}${nextSettings.backgroundImage}`);
          }
      });

      bindAsyncClick(elements.resetBackgroundButton, async () => {
        const nextSettings = await desktopApi.clearBackgroundImage();
        applyBackgroundImage(nextSettings && nextSettings.backgroundImageUrl);
        appendFormLog('info', UI_TEXT.messages.backgroundReset);
      });

      bindAsyncClick(elements.openOutputButton, async () => {
        const opened = await desktopApi.openOutputDir(elements.output.value.trim());
        if (opened) {
          appendFormLog('info', `${UI_TEXT.messages.outputOpenedPrefix}${opened}`);
        }
      });

      bindAsyncClick(
        elements.openMagnetFileButton,
        async () => {
          const opened = await desktopApi.openMagnetFile(elements.output.value.trim());
          if (opened) {
            appendFormLog('info', `${UI_TEXT.messages.magnetOpenedPrefix}${opened}`);
          }
        },
        (error) => {
          appendFormLog('warn', getErrorMessage(error));
        }
      );

      bindAsyncClick(elements.openLogFolderButton, async () => {
        const opened = await desktopApi.openLogFolder();
        if (opened) {
          appendFormLog('info', `${UI_TEXT.messages.logFolderOpenedPrefix}${opened}`);
        }
      });

      bindResultPathButton(elements.crawlResultOpenOutputButton, '已打开抓取输出目录：');
      bindResultPathButton(elements.crawlResultOpenFilmDataButton, '已打开 filmData.json：');
      bindResultPathButton(elements.crawlResultOpenMagnetButton, '已打开磁力文档：');
      bindResultPathButton(elements.crawlResultOpenLogDirButton, '已打开日志目录：');
      bindResultPathButton(elements.crawlResultOpenLatestLogButton, '已打开 latest-log.txt：');
      bindResultPathButton(elements.crawlResultOpenReportButton, '已打开复盘报告：');

      bindAsyncClick(elements.updateAntiBlockButton, async () => {
        const settings = getSettings();
        appendFormLog('info', UI_TEXT.messages.antiBlockUpdating);
        const result = await desktopApi.updateAntiBlock(settings);
        appendFormLog(
          'info',
          `${UI_TEXT.messages.antiBlockUpdatedPrefix}${result.antiBlockUrls.length}${UI_TEXT.messages.antiBlockUpdatedSuffix}${result.filePath}`
        );
      });

      elements.clearLogButton.addEventListener('click', () => {
        logController.clearLogView();
        appendFormLog('info', UI_TEXT.log.cleared);
      });
    }

    async function bootstrap() {
      if (bootstrapCompleted) {
        return;
      }

      // bootstrap 只负责把“已保存设置 + 当前运行上下文 + 当前日志上下文”
      // 折叠为页面初始状态，不负责解释运行期事件。
      const initialSettings = await desktopApi.getSettings();
      const draftSettings = loadCrawlerDraftSnapshot();
      const initialRunContext =
        platformBridge && typeof platformBridge.invokeOptionalQuery === 'function'
          ? await platformBridge.invokeOptionalQuery(
              typeof desktopApi.getCrawlRunContext === 'function' ? () => desktopApi.getCrawlRunContext() : null
            )
          : typeof desktopApi.getCrawlRunContext === 'function'
            ? await desktopApi.getCrawlRunContext().catch(() => null)
            : null;
      const initialLogContext = initialRunContext || (await desktopApi.getLogContext());
      const templateKey = initialSettings.taskTemplate || 'balanced';
      hydratingFormState = true;

      if (TASK_TEMPLATES[templateKey]) {
        applyTemplate(templateKey, { keepLimit: true, keepBase: true, keepOutput: true });
      } else {
        elements.taskTemplate.value = 'balanced';
        elements.itemsPerPage.value = String(initialSettings.itemsPerPage || UI_TEXT.limits.defaultItemsPerPage);
        elements.parallel.value = String(initialSettings.parallel || TASK_TEMPLATES.balanced.parallel);
        elements.delay.value = String(initialSettings.delay || TASK_TEMPLATES.balanced.delay);
        elements.timeout.value = String(initialSettings.timeout || TASK_TEMPLATES.balanced.timeout);
        elements.cloudflare.checked = Boolean(initialSettings.cloudflare);
        elements.secondValidation.checked = Boolean(initialSettings.secondValidation);
      }

      elements.base.value = initialSettings.base || '';
      elements.output.value =
        initialSettings.output ||
        String(initialRunContext && initialRunContext.preferredOutputDir ? initialRunContext.preferredOutputDir : '');
      elements.limit.value = String(initialSettings.limit || 0);
      elements.totalPages.value = String(initialSettings.totalPages || 0);
      elements.proxy.value = initialSettings.proxy || '';
      elements.magnetExcludeKeywords.value = initialSettings.magnetExcludeKeywords || '';
      elements.actressCountFilterThreshold.value = String(initialSettings.actressCountFilterThreshold || 0);
      elements.nomag.checked = Boolean(initialSettings.nomag);
      elements.allmag.checked = Boolean(initialSettings.allmag);
      elements.magnetContentValidation.checked = Boolean(initialSettings.magnetContentValidation);
      elements.nopic.checked = Boolean(initialSettings.nopic);
      applyCrawlerDraftSnapshot(draftSettings);
      hydratingFormState = false;

      bindBaseUrlChips();
      bindEvents();
      applyBackgroundImage(initialSettings.backgroundImageUrl);
      logController.updateLogContext(initialLogContext);
      refreshSuggestedPages();
      if (elements.proxy.value.trim()) {
        await validateProxyValue(elements.proxy.value.trim());
      } else {
        setProxyStatus('empty');
      }
      bootstrapCompleted = true;
      scheduleProxyAutoValidation();
      stateController.setStatus('idle', UI_TEXT.state.defaultMessage);
      appendFormLog('info', UI_TEXT.state.ready);
    }

    return {
      bootstrap,
      getLookupContext,
      applyActressLookupResult,
      startBridgeCrawl
    };
  }

  globalScope.desktopFormController = {
    createFormController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/rankingListView.js ==== */
// Ranking list view owns DOM rendering for ranking items and selector
// options. Business actions stay in the controller and are bound through
// callbacks so the ranking module keeps a clear controller/view boundary.
//
// Ownership summary:
// 1) render ranking rows and selector option lists
// 2) expose passive callback hooks for controller-owned actions
// 3) keep ranking item/option presentation local to the view layer
//
// File map for maintainers:
// 1) ranking option/date formatting helpers
// 2) empty-state and selector render helpers
// 3) ranking item list/card DOM builders
(function initializeRankingListView(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const clearChildren = rendererHelpers.clearChildren;

  if (!clearChildren) {
    throw new Error('desktopRendererHelpers must be loaded before rankingListView');
  }

  function createOption(value, text) {
    const option = document.createElement('option');
    option.value = String(value);
    option.textContent = text;
    return option;
  }

  function normalizeNumericValues(values, predicate) {
    return Array.from(
      new Set(
        (Array.isArray(values) ? values : [])
          .map((value) => Number.parseInt(String(value || ''), 10))
          .filter((value) => Number.isFinite(value) && (!predicate || predicate(value)))
      )
    );
  }

  function toDisplayMonth(month) {
    const numericMonth = Number.parseInt(String(month || ''), 10);
    if (!Number.isFinite(numericMonth) || numericMonth < 1 || numericMonth > 12) {
      return String(month || '');
    }

    return `${String(numericMonth).padStart(2, '0')} 月`;
  }

  function renderEmpty(container, message = '当前没有可展示的榜单数据。') {
    if (!container) {
      return;
    }

    clearChildren(container);
    const empty = document.createElement('article');
    empty.className = 'ranking-empty';
    empty.textContent = message;
    container.appendChild(empty);
  }

  // Ranking rows stay view-only: render normalized ranking payload plus button
  // placeholders. Profile open / crawler prefill actions remain callback-bound
  // controller work.
  function renderRankingItems(container, items, callbacks = {}, text = {}) {
    if (!container) {
      return;
    }

    const rankingItems = Array.isArray(items) ? items : [];
    if (rankingItems.length === 0) {
      renderEmpty(container, text.empty || '当前没有可展示的榜单数据。');
      return;
    }

    clearChildren(container);
    const fragment = document.createDocumentFragment();
    rankingItems.forEach((item) => {
      const row = document.createElement('article');
      const rank = document.createElement('span');
      const info = document.createElement('div');
      const nameButton = document.createElement('button');

      row.className = 'ranking-item';
      rank.className = 'ranking-rank';
      info.className = 'ranking-info';
      nameButton.type = 'button';
      nameButton.className = 'ranking-name-link';
      nameButton.textContent = item.actressName || text.unknownActress || '未知女优';
      nameButton.title = `${item.actressName || text.unknownActress || '未知女优'}${
        text.autoFillButtonTitleSuffix || ''
      }`;

      rank.textContent = `${item.rank}${text.rankSuffix || '名'}`;
      if (typeof callbacks.onBindFillTarget === 'function') {
        callbacks.onBindFillTarget(nameButton, item);
      }

      info.appendChild(nameButton);

      if (item.profileUrl) {
        const subtitle = document.createElement('button');
        const sourceLabel =
          typeof callbacks.formatSourceLabel === 'function'
            ? callbacks.formatSourceLabel(item.profileUrl)
            : String(item.profileUrl);

        subtitle.type = 'button';
        subtitle.className = 'ranking-link';
        subtitle.textContent = `${text.sourceItemPrefix || '目录链接：'}${sourceLabel}`;
        subtitle.title = item.profileUrl || '';
        if (typeof callbacks.onBindOpenProfile === 'function') {
          callbacks.onBindOpenProfile(subtitle, item);
        }
        info.appendChild(subtitle);
      }

      row.appendChild(rank);
      row.appendChild(info);
      fragment.appendChild(row);
    });

    container.appendChild(fragment);
  }

  function renderYearOptions(selectElement, years = [], selectedYear = '', text = {}) {
    if (!selectElement) {
      return;
    }

    const normalizedYears = normalizeNumericValues(years).sort((left, right) => right - left);
    clearChildren(selectElement);

    if (normalizedYears.length === 0) {
      selectElement.appendChild(createOption('', text.noYearData || '暂无年度数据'));
      selectElement.disabled = true;
      return;
    }

    normalizedYears.forEach((year) => {
      selectElement.appendChild(createOption(year, `${year}${text.yearOptionSuffix || ' 年'}`));
    });

    selectElement.disabled = false;
    const preferredYear = String(selectedYear || normalizedYears[0]);
    selectElement.value = normalizedYears.some((year) => String(year) === preferredYear)
      ? preferredYear
      : String(normalizedYears[0]);
  }

  function renderMonthOptions(selectElement, months = [], selectedMonth = '', text = {}) {
    if (!selectElement) {
      return;
    }

    const normalizedMonths = normalizeNumericValues(
      months,
      (value) => value >= 1 && value <= 12
    ).sort((left, right) => right - left);
    clearChildren(selectElement);

    if (normalizedMonths.length === 0) {
      selectElement.appendChild(createOption('', text.noMonthData || '暂无月份数据'));
      selectElement.disabled = true;
      return;
    }

    normalizedMonths.forEach((month) => {
      selectElement.appendChild(createOption(month, toDisplayMonth(month)));
    });

    selectElement.disabled = false;
    const preferredMonth = String(selectedMonth || normalizedMonths[0]);
    selectElement.value = normalizedMonths.some((month) => String(month) === preferredMonth)
      ? preferredMonth
      : String(normalizedMonths[0]);
  }

  function renderSourceChannelOptions(selectElement, selectedValue = 'smart', text = {}) {
    if (!selectElement) {
      return;
    }

    const allowedValues = ['smart', 'fanza', 'dmm', 'avfan', 'local'];
    clearChildren(selectElement);
    selectElement.appendChild(createOption('smart', text.channelSmart || '智能推荐'));
    selectElement.appendChild(createOption('fanza', text.channelFanza || 'FANZA 官方'));
    selectElement.appendChild(createOption('dmm', text.channelDmm || 'DMM 官方'));
    selectElement.appendChild(createOption('avfan', text.channelAvfan || 'AVfan 在线'));
    selectElement.appendChild(createOption('local', text.channelLocal || '本地历史'));
    selectElement.value = allowedValues.includes(String(selectedValue || '')) ? String(selectedValue) : 'smart';
  }

  function renderModeOptions(selectElement, selectedValue = 'monthly', text = {}) {
    if (!selectElement) {
      return;
    }

    clearChildren(selectElement);
    selectElement.appendChild(createOption('monthly', text.monthMode || '月度'));
    selectElement.appendChild(createOption('annual', text.annualMode || '年度'));
    selectElement.value = ['monthly', 'annual'].includes(String(selectedValue || ''))
      ? String(selectedValue)
      : 'monthly';
  }

  globalScope.desktopRankingListView = {
    renderEmpty,
    renderRankingItems,
    renderYearOptions,
    renderMonthOptions,
    renderSourceChannelOptions,
    renderModeOptions
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/rankingController.js ==== */
// Ranking controller is the renderer-facing surface for actress ranking
// exploration. It only renders normalized ranking payloads from desktopApi and
// performs one-way handoff into the crawler form when the user wants to prefill
// a crawl target from a ranking entry.
//
// Ownership summary:
// 1) own ranking-page state, filters, and source selection
// 2) render normalized ranking payloads through ranking views
// 3) hand ranking selections one-way into the crawler form without owning crawl
//    runtime state
//
// File map for maintainers:
// 1) ranking text/default/filter helpers
// 2) ranking workspace bootstrap and state
// 3) ranking load/resolve/fill-crawler actions
(function initializeRankingController(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const rankingListView = globalScope.desktopRankingListView || null;
  const STORAGE_KEY = 'desktop-ranking-source-channel';
  const clearChildren = rendererHelpers.clearChildren;
  const getErrorMessage = rendererHelpers.getErrorMessage;
  const safeLocalStorageGet = rendererHelpers.safeLocalStorageGet;
  const safeLocalStorageSet = rendererHelpers.safeLocalStorageSet;
  const bindAsyncClickHelper = rendererHelpers.bindAsyncClick || null;

  if (!rankingListView || !clearChildren || !getErrorMessage || !safeLocalStorageGet || !safeLocalStorageSet) {
    throw new Error('rankingController requires desktopRankingListView and desktopRendererHelpers');
  }

  const DEFAULT_RANKING_TEXT = {
    empty: '\u5f53\u524d\u6ca1\u6709\u53ef\u5c55\u793a\u7684\u699c\u5355\u6570\u636e\u3002',
    loading: '\u6b63\u5728\u52a0\u8f7d\u699c\u5355\u6570\u636e...',
    loadFailedMeta: '\u53c2\u8003\u699c\u5355\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002',
    monthMode: '\u6708\u5ea6',
    annualMode: '\u5e74\u5ea6',
    modeLabel: '\u699c\u5355\u7c7b\u578b',
    channelLabel: '\u4fe1\u606f\u6e20\u9053',
    channelSmart: '\u667a\u80fd\u63a8\u8350',
    channelFanza: 'FANZA \u5b98\u65b9',
    channelDmm: 'DMM \u5b98\u65b9',
    channelAvfan: 'AVfan \u5728\u7ebf',
    channelLocal: '\u672c\u5730\u5386\u53f2',
    yearLabel: '\u5e74\u4efd',
    monthLabel: '\u6708\u4efd',
    monthHelp: '\u53ef\u6309\u5e74\u4efd\u4e0e\u6708\u4efd\u7b5b\u9009\u6708\u5ea6\u699c\u5355\uff0c\u4f18\u5148\u663e\u793a\u53ef\u7528\u7684\u6700\u65b0\u6570\u636e\u3002',
    annualHelp: '\u53ef\u6309\u5e74\u4efd\u67e5\u770b\u5e74\u5ea6\u699c\u5355\uff0c\u9002\u5408\u7528\u4e8e\u5feb\u901f\u53c2\u8003\u5973\u4f18\u70ed\u5ea6\u8d70\u52bf\u3002',
    currentMonthOnly: '\u6708\u5ea6\u6a21\u5f0f\u4f1a\u4f18\u5148\u5c55\u793a\u5f53\u524d\u6708\u4efd\uff0c\u5982\u5f53\u6708\u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u4f1a\u81ea\u52a8\u56de\u9000\u5230\u6700\u8fd1\u53ef\u7528\u6570\u636e\u3002',
    channelHelpSmart: '\u667a\u80fd\u63a8\u8350\u4f1a\u4f18\u5148\u5c1d\u8bd5\u5b98\u65b9\u6708\u699c\uff0c\u82e5\u5f53\u524d\u7ebf\u8def\u6216\u6570\u636e\u4e0d\u53ef\u7528\uff0c\u5c06\u4f9d\u6b21\u56de\u9000\u81f3 AVfan \u4e0e\u672c\u5730\u5386\u53f2\u3002',
    channelHelpOfficial: '\u5b98\u65b9\u6e20\u9053\u4f18\u5148\u53c2\u8003 DMM / FANZA \u5f53\u524d\u6708\u699c\uff0c\u9700\u642d\u914d\u65e5\u672c\u5730\u533a\u4ee3\u7406 / VPN \u624d\u80fd\u66f4\u7a33\u5b9a\u8bbf\u95ee\u3002',
    channelHelpAvfan: 'AVfan \u9002\u5408\u67e5\u770b\u5df2\u516c\u5f00\u7684\u6708\u699c\u4e0e\u5e74\u699c\uff0c\u5386\u53f2\u6570\u636e\u8986\u76d6\u66f4\u5168\uff0c\u65e0\u6cd5\u8fde\u63a5\u5b98\u65b9\u65f6\u4f53\u9a8c\u66f4\u7a33\u5b9a\u3002',
    channelHelpLocal: '\u672c\u5730\u5386\u53f2\u4ec5\u8bfb\u53d6\u5df2\u7f13\u5b58\u5230\u672c\u673a\u7684\u699c\u5355\u8bb0\u5f55\uff0c\u4e0d\u4f1a\u53d1\u8d77\u5728\u7ebf\u8bf7\u6c42\u3002',
    officialProxyTip: '\u82e5\u5e0c\u671b\u7a33\u5b9a\u67e5\u770b\u5b98\u65b9\u699c\u5355\uff0c\u5efa\u8bae\u5f00\u542f\u65e5\u672c\u5730\u533a\u4ee3\u7406 / VPN\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u52a0\u8f7d\u6210\u529f\u7387\u3002',
    officialAnnualTip: '\u5b98\u65b9\u6e20\u9053\u76ee\u524d\u4ee5\u6708\u699c\u4e3a\u4e3b\uff1b\u5f53\u4f60\u5207\u6362\u5230\u5e74\u5ea6\u699c\u5355\u65f6\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4f18\u5148\u6539\u7528 AVfan \u6216\u672c\u5730\u5386\u53f2\u3002',
    avfanTip: 'AVfan \u4e0e\u672c\u5730\u5386\u53f2\u6a21\u5f0f\u4e0d\u5f3a\u4f9d\u8d56\u65e5\u672c\u4ee3\u7406\uff0c\u66f4\u9002\u5408\u67e5\u770b\u5386\u53f2\u699c\u5355\u4e0e\u8fdb\u884c\u8865\u5145\u53c2\u8003\u3002',
    localTip: '\u5f53\u524d\u4ec5\u5c55\u793a\u672c\u5730\u5df2\u7f13\u5b58\u7684\u5386\u53f2\u699c\u5355\uff0c\u4e0d\u4f1a\u989d\u5916\u8fde\u63a5\u5916\u90e8\u7f51\u7ad9\u3002',
    sourcePrefix: '\u6765\u6e90\uff1a',
    selectedSourcePrefix: '\u5df2\u9009\u6e20\u9053\uff1a',
    resolvedSourcePrefix: '\u5f53\u524d\u4f7f\u7528\uff1a',
    fetchedAtPrefix: '\u6293\u53d6\u65f6\u95f4\uff1a',
    periodPrefix: '\u7edf\u8ba1\u5468\u671f\uff1a',
    totalPrefix: '\u699c\u5355\u6570\u91cf\uff1a',
    staleSuffix: '\u7f13\u5b58\u6570\u636e',
    openSource: '\u6253\u5f00\u6765\u6e90',
    unknownActress: '\u672a\u77e5\u5973\u4f18',
    autoFillButtonTitleSuffix: ' - \u70b9\u51fb\u540e\u81ea\u52a8\u586b\u5145\u771f\u5b9e\u5973\u4f18\u76ee\u5f55\u4e0e\u6709\u78c1\u529b\u6570\u91cf',
    rankSuffix: '\u540d',
    sourceItemPrefix: '\u76ee\u5f55\u94fe\u63a5\uff1a',
    noYearData: '\u6682\u65e0\u5e74\u5ea6\u6570\u636e',
    yearOptionSuffix: ' \u5e74',
    noMonthData: '\u6682\u65e0\u6708\u4efd\u6570\u636e',
    noticePrefix: '\u63d0\u793a\uff1a',
    warningPrefix: '\u8bf4\u660e\uff1a',
    openProfileLogPrefix: '\u5df2\u5728\u9ed8\u8ba4\u6d4f\u89c8\u5668\u6253\u5f00\u76ee\u5f55\u94fe\u63a5\uff1a'
  };

  function toSourceLabel(url) {
    if (!url) {
      return '';
    }

    try {
      const parsed = new URL(url);
      const decodedPath = decodeURIComponent(parsed.pathname);
      return `${parsed.hostname}${decodedPath}`;
    } catch {
      return String(url);
    }
  }

  function toFriendlyIssueText(message) {
    const rawText = String(message || '').trim();
    if (!rawText) {
      return '';
    }

    if (rawText.includes('ERR_PROXY_CONNECTION_FAILED')) {
      return '\u5f53\u524d\u4ee3\u7406\u7ebf\u8def\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u66f4\u6362\u53ef\u7528\u7684\u65e5\u672c\u8282\u70b9\u540e\u91cd\u8bd5\u3002';
    }

    if (rawText.includes('not-available-in-your-region') || rawText.includes('region')) {
      return '\u5f53\u524d\u7ebf\u8def\u65e0\u6cd5\u7a33\u5b9a\u8bbf\u95ee\u5b98\u65b9\u699c\u5355\uff0c\u8bf7\u786e\u8ba4\u65e5\u672c\u5730\u533a\u4ee3\u7406 / VPN \u662f\u5426\u53ef\u7528\u3002';
    }

    if (rawText.includes('age') && rawText.includes('check')) {
      return '\u5b98\u65b9\u699c\u5355\u8bbf\u95ee\u672a\u901a\u8fc7\u5e74\u9f84\u9a8c\u8bc1\uff0c\u8bf7\u66f4\u6362\u53ef\u7528\u7684\u65e5\u672c\u8282\u70b9\u540e\u91cd\u8bd5\u3002';
    }

    return rawText;
  }

  function createRankingController(options) {
    const { elements, desktopApi, logController, uiText, formController } = options;
    const { UI_TEXT } = uiText;
    const rankingText = Object.assign({}, DEFAULT_RANKING_TEXT, UI_TEXT.ranking || {});
    // Ranking workflow map:
    // 1) fetch one normalized ranking payload from desktopApi
    // 2) render/filter that payload locally
    // 3) optionally prefill crawler form from one selected actress target
    //
    // This controller must stay read-mostly. It should not absorb crawler
    // runtime, subscription, or organizer ownership.

    // Ranking controller keeps only ranking-page state:
    // - currentSourceUrl for "open source" actions
    // - latestLoadToken for last-request-wins protection
    // It must not cache crawler runtime state; crawler interaction is a one-way
    // prefill handoff through fillActressTarget.
    let currentSourceUrl = '';
    let latestLoadToken = 0;
    let eventsBound = false;
    let bootstrapCompleted = false;
    let bootstrapPromise = null;
    let crawlCacheSnapshots = [];

    function appendRankingLog(level, message, timestamp = new Date().toISOString()) {
      logController.appendLog(level, message, timestamp);
    }

    function getSelectedCacheKey() {
      return elements.crawlCacheSelect ? String(elements.crawlCacheSelect.value || '').trim() : '';
    }

    function renderCacheSnapshotSummary() {
      if (!elements.crawlCacheSummary) {
        return;
      }

      if (!Array.isArray(crawlCacheSnapshots) || crawlCacheSnapshots.length === 0) {
        elements.crawlCacheSummary.textContent = '当前没有内部缓存快照。';
        return;
      }

      const selectedKey = getSelectedCacheKey();
      const selectedItem = crawlCacheSnapshots.find((item) => String(item && item.cacheKey ? item.cacheKey : '').trim() === selectedKey);
      const targetItem = selectedItem || crawlCacheSnapshots[0];
      const actressName = String(targetItem && targetItem.actressName ? targetItem.actressName : '').trim() || '未命名快照';
      const updatedAt = String(targetItem && targetItem.updatedAt ? targetItem.updatedAt : '').trim();
      const completedCount = Number(targetItem && targetItem.completedCount ? targetItem.completedCount : 0) || 0;
      const itemsPerPage = Number(targetItem && targetItem.itemsPerPage ? targetItem.itemsPerPage : 0) || 0;
      const totalPages = Number(targetItem && targetItem.totalPages ? targetItem.totalPages : 0) || 0;

      const parts = [`当前缓存：${actressName}`, `完成 ${completedCount} 部`];
      if (itemsPerPage > 0) {
        parts.push(`每页 ${itemsPerPage}`);
      }
      if (totalPages > 0) {
        parts.push(`总页数 ${totalPages}`);
      }
      if (updatedAt) {
        parts.push(`更新时间 ${updatedAt.replace('T', ' ').slice(0, 16)}`);
      }
      elements.crawlCacheSummary.textContent = parts.join(' | ');
    }

    function renderCacheSnapshotOptions() {
      if (!elements.crawlCacheSelect || !clearChildren) {
        return;
      }

      const previousValue = getSelectedCacheKey();
      clearChildren(elements.crawlCacheSelect);

      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = '请选择缓存快照';
      elements.crawlCacheSelect.appendChild(defaultOption);

      crawlCacheSnapshots.forEach((item, index) => {
        const option = document.createElement('option');
        const cacheKey = String(item && item.cacheKey ? item.cacheKey : '').trim();
        const actressName = String(item && item.actressName ? item.actressName : '').trim() || `缓存快照 ${index + 1}`;
        const updatedAt = String(item && item.updatedAt ? item.updatedAt : '').trim();
        const completedCount = Number(item && item.completedCount ? item.completedCount : 0) || 0;
        option.value = cacheKey;
        option.textContent = updatedAt
          ? `${actressName} | ${updatedAt.replace('T', ' ').slice(0, 16)} | ${completedCount} 部`
          : `${actressName} | ${completedCount} 部`;
        elements.crawlCacheSelect.appendChild(option);
      });

      const nextValue =
        previousValue && crawlCacheSnapshots.some((item) => String(item && item.cacheKey ? item.cacheKey : '').trim() === previousValue)
          ? previousValue
          : '';
      elements.crawlCacheSelect.value = nextValue;
      if (!nextValue && crawlCacheSnapshots.length > 0) {
        elements.crawlCacheSelect.selectedIndex = 1;
      }
      renderCacheSnapshotSummary();
    }

    async function loadCacheSnapshots(options = {}) {
      if (!desktopApi || typeof desktopApi.listCrawlCacheSnapshots !== 'function') {
        crawlCacheSnapshots = [];
        renderCacheSnapshotOptions();
        return;
      }

      const { silent = false } = options;
      try {
        const result = await desktopApi.listCrawlCacheSnapshots();
        crawlCacheSnapshots = Array.isArray(result && result.items) ? result.items : [];
        renderCacheSnapshotOptions();
        if (!silent) {
          appendRankingLog('info', `已刷新内部缓存快照：${crawlCacheSnapshots.length} 条。`);
        }
      } catch (error) {
        crawlCacheSnapshots = [];
        renderCacheSnapshotOptions();
        appendRankingLog('warn', `读取内部缓存快照失败：${getErrorMessage(error)}`);
      }
    }

    async function removeSelectedCacheSnapshot() {
      const cacheKey = getSelectedCacheKey();
      if (!cacheKey) {
        appendRankingLog('warn', '请先选择一个缓存快照。');
        return;
      }

      const result = await desktopApi.removeCrawlCacheSnapshot(cacheKey);
      crawlCacheSnapshots = Array.isArray(result && result.items) ? result.items : [];
      renderCacheSnapshotOptions();
      appendRankingLog('info', '已清除所选内部缓存快照。');
    }

    async function clearAllCacheSnapshots() {
      const confirmed = typeof globalScope.confirm === 'function'
        ? globalScope.confirm('确认清空全部内部缓存快照吗？该操作不会删除用户导出的抓取结果。')
        : true;
      if (!confirmed) {
        return;
      }

      const result = await desktopApi.clearCrawlCacheSnapshots();
      crawlCacheSnapshots = Array.isArray(result && result.items) ? result.items : [];
      renderCacheSnapshotOptions();
      appendRankingLog('info', '已清空全部内部缓存快照。');
    }

    // Event binding and bootstrap are kept idempotent here because ranking
    // workspace re-entry can happen through shell navigation and renderer
    // bootstrap re-entry.

    function bindAsyncClick(button, handler, onError) {
      if (typeof bindAsyncClickHelper === 'function') {
        bindAsyncClickHelper(button, handler, {
          onError,
          fallbackErrorHandler: (error) => appendRankingLog('warn', getErrorMessage(error))
        });
        return;
      }

      if (!button) {
        return;
      }

      button.addEventListener('click', async () => {
        try {
          await handler();
        } catch (error) {
          if (typeof onError === 'function') {
            onError(error);
            return;
          }
          appendRankingLog('warn', getErrorMessage(error));
        }
      });
    }

    function bindAsyncChange(element, handler, onError) {
      if (!element) {
        return;
      }

      element.addEventListener('change', async () => {
        try {
          await handler();
        } catch (error) {
          if (typeof onError === 'function') {
            onError(error);
            return;
          }
          appendRankingLog('warn', getErrorMessage(error));
        }
      });
    }

    function isAnnualMode() {
      return elements.rankingMode.value === 'annual';
    }

    function getSelectedChannel() {
      return String(elements.rankingSourceChannel.value || 'smart').trim() || 'smart';
    }

    function getChannelHelpText(channel) {
      // Help-text routing is UI-only presentation logic. Ranking source
      // availability and fallback remain backend/service responsibilities.
      if (channel === 'fanza' || channel === 'dmm') {
        return rankingText.channelHelpOfficial;
      }

      if (channel === 'avfan') {
        return rankingText.channelHelpAvfan;
      }

      if (channel === 'local') {
        return rankingText.channelHelpLocal;
      }

      return rankingText.channelHelpSmart;
    }

    function getChannelTipText(channel) {
      if (isAnnualMode() && (channel === 'fanza' || channel === 'dmm' || channel === 'smart')) {
        return rankingText.officialAnnualTip;
      }

      if (channel === 'local') {
        return rankingText.localTip;
      }

      if (channel === 'avfan') {
        return rankingText.avfanTip;
      }

      return rankingText.officialProxyTip;
    }

    function setHelpText() {
      // Help/tip projection belongs to the ranking page shell so backend
      // ranking payloads stay transport/data focused.
      const modeHelp = isAnnualMode() ? rankingText.annualHelp : rankingText.currentMonthOnly || rankingText.monthHelp;
      const channel = getSelectedChannel();
      const channelHelp = getChannelHelpText(channel);
      elements.rankingHelp.textContent = [modeHelp, channelHelp].filter(Boolean).join(' ');
      if (elements.rankingChannelTip) {
        elements.rankingChannelTip.textContent = getChannelTipText(channel);
      }
      elements.rankingYearField.classList.remove('hidden');
      elements.rankingMonthField.classList.toggle('hidden', isAnnualMode());
    }

    function setMetaText(text) {
      elements.rankingMeta.textContent = text || rankingText.empty;
      elements.rankingMeta.title = text || rankingText.empty;
    }

    function setSource(sourceName, sourceUrl) {
      // Source banner is a read-only projection of the last successful result.
      // It must not become implicit input for later load decisions.
      currentSourceUrl = sourceUrl || '';

      if (!currentSourceUrl) {
        elements.rankingSource.classList.add('hidden');
        elements.rankingSourceText.textContent = '';
        elements.rankingSourceText.title = '';
        return;
      }

      const sourceText = `${rankingText.sourcePrefix}${sourceName} ${toSourceLabel(sourceUrl)}`;
      elements.rankingSource.classList.remove('hidden');
      elements.rankingSourceText.textContent = sourceText;
      elements.rankingSourceText.title = `${rankingText.sourcePrefix}${sourceName} ${sourceUrl}`;
    }

    function renderEmpty(text) {
      rankingListView.renderEmpty(elements.rankingView, text || rankingText.empty);
    }

    // Ranking only resolves/fills crawler inputs. It must not start crawl runs
    // or store hidden crawl-session state locally.
    async function fillActressTarget(item) {
      // Ranking-to-crawler is a one-way prefill handoff only. This controller
      // never starts crawl execution or stores crawl session state itself.
      const actressName = String(item && item.actressName ? item.actressName : '').trim();
      if (!actressName) {
        return;
      }

      try {
        const lookupContext = formController && typeof formController.getLookupContext === 'function'
          ? formController.getLookupContext()
          : { preferredBase: elements.base.value.trim(), magnetOnly: elements.nomag.checked };

        appendRankingLog('info', `${UI_TEXT.messages.rankingResolvingPrefix}${actressName}`);

        const result = await desktopApi.resolveActressCrawlTarget({
          actressName,
          preferredBase: lookupContext.preferredBase,
          magnetOnly: lookupContext.magnetOnly
        });

        if (formController && typeof formController.applyActressLookupResult === 'function') {
          formController.applyActressLookupResult(result);
        }

        const fillCount =
          Number.isFinite(result.fillCount) && result.fillCount >= 0 ? result.fillCount : result.preferredCount;
        const summary = [
          `${UI_TEXT.messages.rankingResolvedPrefix}${result.resolvedActressName || actressName}`,
          `${UI_TEXT.messages.rankingResolvedMagnetPrefix}${result.magnetCount || fillCount}${UI_TEXT.messages.rankingResolvedCountSuffix}`,
          `${UI_TEXT.messages.rankingResolvedAllPrefix}${result.allCount || fillCount}${UI_TEXT.messages.rankingResolvedCountSuffix}`,
          `${UI_TEXT.messages.rankingResolvedPagesPrefix}${result.totalPages}${UI_TEXT.messages.rankingResolvedPagesSuffix}`,
          UI_TEXT.messages.rankingResolvedDefaultHint
        ].join(' ');

        appendRankingLog('info', summary);
      } catch (error) {
        appendRankingLog('warn', `${UI_TEXT.messages.rankingResolveFailedPrefix}${getErrorMessage(error)}`);
      }
    }

    function renderItems(items) {
      rankingListView.renderRankingItems(
        elements.rankingView,
        Array.isArray(items) ? items : [],
        {
          formatSourceLabel: toSourceLabel,
          onBindFillTarget: (button, item) => {
            bindAsyncClick(button, async () => {
              await fillActressTarget(item);
            });
          },
          onBindOpenProfile: (button, item) => {
            bindAsyncClick(button, async () => {
              if (!item.profileUrl) {
                return;
              }

              await desktopApi.openExternal(item.profileUrl);
              appendRankingLog('info', `${rankingText.openProfileLogPrefix}${item.profileUrl}`);
            });
          }
        },
        rankingText
      );
    }

    function renderYearOptions(years = [], selectedYear = '') {
      rankingListView.renderYearOptions(elements.rankingYear, years, selectedYear, rankingText);
    }

    function renderMonthOptions(months = [], selectedMonth = '') {
      rankingListView.renderMonthOptions(elements.rankingMonth, months, selectedMonth, rankingText);
    }

    function syncPeriodSelectors(ranking) {
      renderYearOptions(ranking.availableYears, ranking.periodYear);
      if (!isAnnualMode()) {
        renderMonthOptions(ranking.availableMonths, ranking.periodMonth);
      }
    }

    function buildMetaText(ranking) {
      const channelLine = [
        `${rankingText.selectedSourcePrefix}${ranking.requestedSourceLabel || rankingText.channelSmart}`,
        `${rankingText.resolvedSourcePrefix}${ranking.resolvedSourceLabel || ranking.sourceName || rankingText.channelSmart}`
      ];

      const metaParts = [
        `${rankingText.periodPrefix}${ranking.periodLabel}`,
        `${rankingText.totalPrefix}${ranking.total}`,
        `${rankingText.fetchedAtPrefix}${new Date(ranking.fetchedAt).toLocaleString('zh-CN', { hour12: false })}`
      ];

      if (ranking.stale) {
        metaParts.push(rankingText.staleSuffix);
      }

      const lines = [channelLine.join(' | '), metaParts.join(' | ')];
      if (ranking.notice) {
        lines.push(`${rankingText.noticePrefix}${ranking.notice}`);
      }
      if (ranking.errorMessage && ranking.errorMessage !== ranking.notice) {
        lines.push(`${rankingText.warningPrefix}${toFriendlyIssueText(ranking.errorMessage)}`);
      }
      return lines.join('\n');
    }

    // Ranking requests are user-driven and race-prone when filters change
    // quickly. latestLoadToken makes "latest interaction wins" explicit so
    // slower old responses cannot repaint the page with stale list data.
    async function loadRankings(options = {}) {
      const { forceRefresh = false, silent = false } = options;
      const requestToken = latestLoadToken + 1;
      latestLoadToken = requestToken;

      const mode = elements.rankingMode.value || 'monthly';
      const year = elements.rankingYear.value;
      const month = !isAnnualMode() ? elements.rankingMonth.value : '';
      const source = getSelectedChannel();
      const proxy = elements.proxy && elements.proxy.value ? elements.proxy.value.trim() : '';

      if (!silent) {
        appendRankingLog('info', UI_TEXT.messages.rankingLoading);
      }

      elements.refreshRankingButton.disabled = true;
      setMetaText(rankingText.loading);

      try {
        const ranking = await desktopApi.getActressRankings({
          mode,
          year,
          month,
          source,
          proxy,
          forceRefresh
        });

        if (requestToken !== latestLoadToken) {
          return;
        }

        syncPeriodSelectors(ranking);
        setSource(ranking.sourceName, ranking.sourceUrl);
        renderItems(ranking.items);
        setMetaText(buildMetaText(ranking));

        if (!silent) {
          appendRankingLog(
            'info',
            `${UI_TEXT.messages.rankingLoadedPrefix}${ranking.periodLabel}${UI_TEXT.messages.rankingLoadedMiddle}${ranking.total}${UI_TEXT.messages.rankingLoadedSuffix}`
          );
        }

        if (ranking.notice) {
          appendRankingLog('info', ranking.notice);
        }
        if (ranking.errorMessage && ranking.errorMessage !== ranking.notice) {
          appendRankingLog('warn', ranking.errorMessage);
        }
      } catch (error) {
        if (requestToken !== latestLoadToken) {
          return;
        }

        currentSourceUrl = '';
        elements.rankingSource.classList.add('hidden');
        renderEmpty(getErrorMessage(error));
        setMetaText(rankingText.loadFailedMeta);
        appendRankingLog('warn', getErrorMessage(error));
      } finally {
        if (requestToken === latestLoadToken) {
          elements.refreshRankingButton.disabled = false;
        }
      }
    }

    function bindEvents() {
      if (eventsBound) {
        return;
      }

      eventsBound = true;
      bindAsyncChange(elements.rankingSourceChannel, async () => {
        safeLocalStorageSet(STORAGE_KEY, getSelectedChannel());
        setHelpText();
        await loadRankings({ silent: true });
      });

      bindAsyncChange(elements.rankingMode, async () => {
        setHelpText();
        await loadRankings({ silent: true });
      });

      bindAsyncChange(elements.rankingYear, async () => {
        await loadRankings({ silent: true });
      });

      bindAsyncChange(elements.rankingMonth, async () => {
        if (isAnnualMode()) {
          return;
        }

        await loadRankings({ silent: true });
      });

      bindAsyncClick(elements.refreshRankingButton, async () => {
        await loadRankings({ forceRefresh: true });
      });

      bindAsyncClick(elements.openRankingSourceButton, async () => {
        if (!currentSourceUrl) {
          return;
        }

        await desktopApi.openExternal(currentSourceUrl);
        appendRankingLog('info', `${UI_TEXT.messages.rankingSourceOpenedPrefix}${currentSourceUrl}`);
      });

      bindAsyncClick(elements.rankingSourceText, async () => {
        if (!currentSourceUrl) {
          return;
        }

        await desktopApi.openExternal(currentSourceUrl);
      });

      bindAsyncClick(elements.crawlCacheRefreshButton, async () => {
        await loadCacheSnapshots();
      });

      bindAsyncClick(elements.crawlCacheRemoveButton, async () => {
        await removeSelectedCacheSnapshot();
      });

      bindAsyncClick(elements.crawlCacheClearButton, async () => {
        await clearAllCacheSnapshots();
      });

      if (elements.crawlCacheSelect) {
        elements.crawlCacheSelect.addEventListener('change', () => {
          renderCacheSnapshotSummary();
        });
      }
    }

    function renderSourceChannelOptions() {
      const savedSource = safeLocalStorageGet(STORAGE_KEY, 'smart');
      rankingListView.renderSourceChannelOptions(elements.rankingSourceChannel, savedSource, rankingText);
    }

    function bootstrap() {
      if (bootstrapCompleted) {
        return Promise.resolve();
      }

      if (bootstrapPromise) {
        return bootstrapPromise;
      }

      // Ranking bootstrap only hydrates the initial filters + first list fetch.
      // After the first successful boot, user-driven filter changes become the
      // only authority so later bootstrap re-entry cannot silently reset them.
      bootstrapPromise = Promise.resolve()
        .then(async () => {
          renderSourceChannelOptions();
          rankingListView.renderModeOptions(elements.rankingMode, elements.rankingMode.value || 'monthly', rankingText);
          renderYearOptions([]);
          renderMonthOptions([]);
          setHelpText();
          renderCacheSnapshotOptions();
          bindEvents();
          await loadCacheSnapshots({ silent: true });
          await loadRankings({ silent: true });
          bootstrapCompleted = true;
        })
        .catch((error) => {
          bootstrapPromise = null;
          throw error;
        });

      return bootstrapPromise;
    }

    return {
      bootstrap,
      loadRankings
    };
  }

  globalScope.desktopRankingController = {
    createRankingController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/organizerDependencyView.js ==== */
// Organizer dependency view owns shell-only DOM queries inside the dependency
// box. The controller keeps dependency state and actions, while this view hides
// the layout-specific selectors used to decorate the optional compatibility UI.
//
// Ownership summary:
// 1) manage organizer dependency-box DOM lookup and decoration
// 2) keep optional compatibility UI selectors/layout details centralized
// 3) separate organizer dependency view DOM concerns from controller logic
//
// File map for maintainers:
// 1) dependency box query helpers
// 2) advanced-node lookup helpers
// 3) idempotent dependency-box decoration
(function initializeOrganizerDependencyView(globalScope) {
  function getDependencyBox(organizerWorkspace) {
    if (!organizerWorkspace) {
      return null;
    }
    return organizerWorkspace.querySelector('.organizer-dependency-box');
  }

  function getDependencyAdvancedNodes(organizerWorkspace, elements) {
    // Advanced-node discovery is layout-only. The controller decides whether
    // those nodes are active, hidden, or treated as optional compatibility UI.
    const box = getDependencyBox(organizerWorkspace);
    if (!box) {
      return [];
    }

    return [
      elements.organizerRefreshDependencyButton,
      box.querySelector('.organizer-dependency-url-fields'),
      box.querySelector('.organizer-dependency-actions')
    ].filter(Boolean);
  }

  function decorateDependencyBox(organizerWorkspace, elements) {
    // Decoration should stay idempotent so repeated state refreshes never
    // rebuild or duplicate compatibility-only CSS hooks.
    const box = getDependencyBox(organizerWorkspace);
    if (!box || box.dataset.compatDecorated === '1') {
      return box;
    }

    getDependencyAdvancedNodes(organizerWorkspace, elements).forEach((node) =>
      node.classList.add('organizer-dependency-advanced')
    );
    box.dataset.compatDecorated = '1';
    return box;
  }

  globalScope.desktopOrganizerDependencyView = {
    decorateDependencyBox,
    getDependencyAdvancedNodes,
    getDependencyBox
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/organizerDependencyController.js ==== */
// Organizer dependency controller for the current desktop renderer.
// Keep dependency probing/install prompts here so organizer execution flow does
// not get mixed with installer or prerequisite-specific UI state.
//
// Ownership summary:
// 1) own organizer dependency probing/install UI state
// 2) keep optional AI/compat prerequisite status in one controller
// 3) avoid mixing installer/probe behavior into organizer execution flow
//
// File map for maintainers:
// 1) dependency status lookup helpers
// 2) dependency-box visibility/button synchronization
// 3) probe/install action handlers

(function initializeOrganizerDependencyController(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const dependencyView = globalScope.desktopOrganizerDependencyView || null;
  const safeLocalStorageSet = rendererHelpers.safeLocalStorageSet;

  if (!safeLocalStorageSet || !dependencyView) {
    throw new Error('organizerDependencyController requires desktopRendererHelpers and desktopOrganizerDependencyView');
  }

  function createOrganizerDependencyController(options) {
    const {
      elements,
      desktopApi,
      state,
      appendLogLine,
      getErrorMessage,
      isAdDetectionEnabled,
      getLogView,
      requestRenderAdDetectionUiState
    } = options;

    function getDependencyItem(status, name) {
      // Dependency-item reads stay tiny and local so controller code does not
      // duplicate object-shape guards around every status access.
      if (!status || typeof status !== 'object') {
        return null;
      }
      return status[name] && typeof status[name] === 'object' ? status[name] : null;
    }

    function getDependencyBox() {
      return dependencyView.getDependencyBox(elements.organizerWorkspace);
    }

    function getDependencyAdvancedNodes() {
      return dependencyView.getDependencyAdvancedNodes(elements.organizerWorkspace, elements);
    }

    function decorateDependencyBox() {
      dependencyView.decorateDependencyBox(elements.organizerWorkspace, elements);
    }

    // Organizer default mode no longer treats FFmpeg/ONNX/AList as first-class
    // requirements. Keep this controller as the single compatibility boundary so
    // future maintenance does not have to chase dependency state across modules.
    function syncDependencyButtonState() {
      const ffmpegStatus = getDependencyItem(state.dependencyStatus, 'ffmpeg');
      const onnxStatus = getDependencyItem(state.dependencyStatus, 'onnx');
      const installing = String(state.dependencyInstalling || '').trim().toLowerCase();
      const busy = state.running || Boolean(installing);
      const aiEnabled = isAdDetectionEnabled();
      const advancedDisabled = !aiEnabled || busy;

      if (elements.organizerRefreshDependencyButton) {
        elements.organizerRefreshDependencyButton.disabled = advancedDisabled;
      }
      if (elements.organizerInstallFfmpegButton) {
        elements.organizerInstallFfmpegButton.disabled =
          advancedDisabled || Boolean(ffmpegStatus && ffmpegStatus.available);
        elements.organizerInstallFfmpegButton.textContent =
          installing === 'ffmpeg' ? '正在安装 FFmpeg...' : '一键安装 FFmpeg';
      }
      if (elements.organizerInstallOnnxButton) {
        elements.organizerInstallOnnxButton.disabled = advancedDisabled || Boolean(onnxStatus && onnxStatus.available);
        elements.organizerInstallOnnxButton.textContent =
          installing === 'onnx' ? '正在安装 ONNX Runtime...' : '一键安装 ONNX Runtime';
      }
      if (elements.organizerDeleteDependencyButton) {
        elements.organizerDeleteDependencyButton.disabled = advancedDisabled;
      }
      if (elements.organizerFfmpegDownloadUrl) {
        elements.organizerFfmpegDownloadUrl.disabled = !aiEnabled || state.running;
      }
      if (elements.organizerOnnxDownloadUrl) {
        elements.organizerOnnxDownloadUrl.disabled = !aiEnabled || state.running;
      }
      if (elements.organizerAlistUrl) {
        elements.organizerAlistUrl.disabled = !aiEnabled || state.running;
      }
    }

    function renderDependencyStatus(status = null) {
      const box = getDependencyBox();
      const ffmpegStatus = getDependencyItem(status, 'ffmpeg');
      const onnxStatus = getDependencyItem(status, 'onnx');
      const installing = String(state.dependencyInstalling || '').trim().toLowerCase();
      const summaryElement = elements.organizerDependencySummary;
      const detailElement = elements.organizerDependencyDetail;
      const aiEnabled = isAdDetectionEnabled();

      decorateDependencyBox();

      if (box) {
        const hasMissing = Boolean(aiEnabled && ffmpegStatus && !ffmpegStatus.available);
        box.classList.toggle('is-missing', hasMissing);
        box.classList.toggle('is-installing', Boolean(installing));
        box.classList.toggle('is-compat-collapsed', !aiEnabled);
      }

      if (summaryElement) {
        if (installing && state.dependencyProgressMessage) {
          summaryElement.textContent = state.dependencyProgressMessage;
        } else if (!aiEnabled) {
          summaryElement.textContent =
            '当前主整理模式未启用 AI 广告检测，FFmpeg / ONNX / AList 依赖入口已降级为可选兼容能力。';
        } else if (!status) {
          summaryElement.textContent = '尚未获取依赖检测结果，可使用已存在的 FFmpeg / ONNX Runtime。';
        } else {
          const ffmpegText = ffmpegStatus && ffmpegStatus.available ? 'FFmpeg：已就绪' : 'FFmpeg：未安装';
          const onnxText = onnxStatus && onnxStatus.available ? 'ONNX Runtime：已就绪' : 'ONNX Runtime：未安装（可选）';
          summaryElement.textContent = `${ffmpegText} | ${onnxText}`;
        }
      }

      if (detailElement) {
        if (installing && state.dependencyProgressMessage) {
          detailElement.textContent = '下载安装进度会写入当前窗口日志，无需额外打开外部安装器。';
        } else if (!aiEnabled) {
          detailElement.textContent =
            '默认整理链路只依赖番号匹配、文件大小和命名规则。仅在你手动启用 AI 广告检测时，才需要检查 FFmpeg、可选 ONNX 以及 AList 流式读取配置。';
        } else if (!status) {
          detailElement.textContent = '启用 AI 广告检测前至少需要 FFmpeg；若未检测到，可在此面板安装。';
        } else {
          const details = [];
          if (ffmpegStatus) {
            details.push(
              ffmpegStatus.available
                ? `FFmpeg 路径：${ffmpegStatus.installedPath || '-'}`
                : 'FFmpeg 未就绪：启用 AI 广告检测前必须先安装。'
            );
          }
          if (onnxStatus) {
            details.push(
              onnxStatus.available
                ? `ONNX Runtime 路径：${onnxStatus.installedPath || '-'}`
                : 'ONNX Runtime 当前为可选增强依赖，可按需预装。'
            );
          }
          detailElement.textContent = details.join(' | ');
        }
      }

      syncDependencyButtonState();
      if (typeof requestRenderAdDetectionUiState === 'function') {
        requestRenderAdDetectionUiState();
      }
    }

    async function refreshDependencyStatus(logMessage = false) {
      // Dependency refresh is a UI read-model action. It should not infer or
      // mutate organizer run policy beyond refreshing displayed prerequisites.
      if (typeof desktopApi.getDependencyStatus !== 'function') {
        state.dependencyStatus = null;
        renderDependencyStatus(null);
        return null;
      }

      const status = await desktopApi.getDependencyStatus();
      state.dependencyStatus = status || null;
      if (!state.dependencyInstalling) {
        state.dependencyProgressMessage = '';
      }
      renderDependencyStatus(state.dependencyStatus);
      if (logMessage) {
        appendLogLine(getLogView(), 'info', 'AI 依赖状态已刷新。');
      }
      return state.dependencyStatus;
    }

    async function installDependency(name) {
      // Installation orchestration belongs here because it is operator-facing
      // compatibility UX, not part of the core organizer execution flow.
      const normalizedName = String(name || '').trim().toLowerCase();
      if (!normalizedName || typeof desktopApi.installDependency !== 'function') {
        return;
      }

      const customUrl =
        normalizedName === 'ffmpeg'
          ? String((elements.organizerFfmpegDownloadUrl && elements.organizerFfmpegDownloadUrl.value) || '').trim()
          : String((elements.organizerOnnxDownloadUrl && elements.organizerOnnxDownloadUrl.value) || '').trim();

      if (customUrl) {
        safeLocalStorageSet(`jav.organizer.${normalizedName}.download.url`, customUrl);
      }

      state.dependencyInstalling = normalizedName;
      const displayName = normalizedName === 'onnx' ? 'ONNX Runtime' : 'FFmpeg';
      state.dependencyProgressMessage = customUrl
        ? `正在从自定义地址安装 ${displayName} ...`
        : `正在准备安装 ${displayName} ...`;
      renderDependencyStatus(state.dependencyStatus);
      appendLogLine(getLogView(), 'info', `开始安装 ${displayName}${customUrl ? '（自定义下载地址）' : ''}`);

      try {
        const nextStatus = await desktopApi.installDependency(normalizedName, customUrl || undefined);
        state.dependencyStatus = nextStatus || state.dependencyStatus;
        appendLogLine(getLogView(), 'info', `${displayName} 安装完成。`);
      } catch (error) {
        appendLogLine(getLogView(), 'error', `${displayName} 安装失败：${getErrorMessage(error)}`);
        throw error;
      } finally {
        state.dependencyInstalling = '';
        state.dependencyProgressMessage = '';
        await refreshDependencyStatus(false).catch(() => {});
      }
    }

    async function deleteDependencyState() {
      if (typeof desktopApi.uninstallDependency !== 'function') {
        state.dependencyStatus = null;
        state.dependencyInstalling = '';
        state.dependencyProgressMessage = '';
        renderDependencyStatus(null);
        appendLogLine(getLogView(), 'info', '已清除 AI 依赖检测状态（当前环境未接入卸载能力）。');
        return;
      }

      if (globalThis.confirm) {
        if (!globalThis.confirm('确定要删除已安装的 AI 依赖吗？将会删除 FFmpeg 和 ONNX Runtime 文件。')) {
          return;
        }
      }

      appendLogLine(getLogView(), 'info', '开始卸载 FFmpeg 和 ONNX Runtime ...');
      renderDependencyStatus(state.dependencyStatus);

      try {
        await desktopApi.uninstallDependency('ffmpeg');
        appendLogLine(getLogView(), 'info', 'FFmpeg 已卸载。');
      } catch (error) {
        appendLogLine(getLogView(), 'warn', `FFmpeg 卸载失败：${getErrorMessage(error)}`);
      }

      try {
        await desktopApi.uninstallDependency('onnx');
        appendLogLine(getLogView(), 'info', 'ONNX Runtime 已卸载。');
      } catch (error) {
        appendLogLine(getLogView(), 'warn', `ONNX Runtime 卸载失败：${getErrorMessage(error)}`);
      }

      await refreshDependencyStatus(false).catch(() => {});
      appendLogLine(getLogView(), 'info', 'AI 依赖卸载完成。');
    }

    async function ensureAiDependenciesReady() {
      // Readiness gating only protects the optional AI lane. The default
      // organizer path should remain independent from these checks.
      if (!isAdDetectionEnabled()) {
        return null;
      }

      const status = (await refreshDependencyStatus(false).catch(() => state.dependencyStatus)) || {};
      const ffmpegStatus = getDependencyItem(status, 'ffmpeg');
      const onnxStatus = getDependencyItem(status, 'onnx');

      if (!ffmpegStatus || !ffmpegStatus.available) {
        throw new Error('已启用 AI 广告检测，但未检测到 FFmpeg。请先在“AI 依赖环境”中点击“一键安装 FFmpeg”。');
      }

      if (onnxStatus && !onnxStatus.available) {
        appendLogLine(
          getLogView(),
          'warn',
          '当前未检测到 ONNX Runtime。现阶段仍可继续使用规则与样本相似度链路，后续若启用增强模型再补装即可。'
        );
      }

      return status;
    }

    function applyInstallProgress(payload) {
      if (!payload || typeof payload !== 'object') {
        return;
      }

      const name = String(payload.name || '').trim().toLowerCase();
      if (name) {
        state.dependencyInstalling = name;
      }
      state.dependencyProgressMessage = String(payload.message || '').trim();
      renderDependencyStatus(state.dependencyStatus);

      if (payload.message) {
        appendLogLine(getLogView(), payload.stage === 'error' ? 'error' : 'info', String(payload.message));
      }
    }

    return {
      syncDependencyButtonState,
      renderDependencyStatus,
      refreshDependencyStatus,
      installDependency,
      deleteDependencyState,
      ensureAiDependenciesReady,
      applyInstallProgress
    };
  }

  globalScope.desktopOrganizerDependencyController = {
    createOrganizerDependencyController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/organizerLearningView.js ==== */
// Organizer learning view owns ad-learning shell decoration and the optional
// mode hint element. The controller decides when AI compatibility UI should be
// shown; the view only mutates DOM structure inside the learning box.
//
// Ownership summary:
// 1) render organizer ad-learning shell decoration and mode-hint DOM
// 2) keep learning-box structural decoration idempotent
// 3) separate organizer learning view DOM from controller state logic
//
// File map for maintainers:
// 1) learning-box query helpers
// 2) mode-hint node creation
// 3) learning-box decoration helpers
(function initializeOrganizerLearningView(globalScope) {
  function getLearningBox() {
    return document.querySelector('#organizer-workspace .organizer-learning-box');
  }

  function ensureModeHintElement() {
    // The mode hint is pure shell decoration. Its wording/state comes from the
    // controller; this view only ensures the node exists in the right place.
    const box = getLearningBox();
    if (!box) {
      return null;
    }

    let hint = box.querySelector('#organizer-ai-mode-hint');
    if (hint) {
      return hint;
    }

    hint = document.createElement('small');
    hint.id = 'organizer-ai-mode-hint';
    hint.className = 'organizer-mode-hint';
    const label = box.querySelector('.message-label');
    if (label && label.parentNode) {
      label.parentNode.insertBefore(hint, label.nextSibling);
    } else {
      box.insertBefore(hint, box.firstChild);
    }
    return hint;
  }

  function decorateLearningBox(elements) {
    // Decoration stays structural and idempotent so repeated compatibility
    // state refreshes do not keep mutating the learning box layout.
    const box = getLearningBox();
    if (!box || box.dataset.aiDecorated === '1') {
      return box;
    }

    const advancedNodes = [
      box.querySelector('.organizer-learning-tip'),
      box.querySelector('.organizer-learning-grid'),
      elements.organizerLearningCodes ? elements.organizerLearningCodes.closest('label.field') : null,
      elements.organizerAdModelType ? elements.organizerAdModelType.closest('label.field') : null,
      box.querySelector('.organizer-learning-actions'),
      box.querySelector('.organizer-learning-guide'),
      elements.organizerLearningSummary
    ].filter(Boolean);

    advancedNodes.forEach((node) => node.classList.add('organizer-learning-advanced'));
    box.dataset.aiDecorated = '1';
    return box;
  }

  globalScope.desktopOrganizerLearningView = {
    decorateLearningBox,
    ensureModeHintElement,
    getLearningBox
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/organizerLearningController.js ==== */
// Organizer learning controller for the current desktop renderer.
// This file owns ad-learning actions and feedback surfaces, separate from the
// main organizer run flow and dependency-management concerns.
//
// Ownership summary:
// 1) own optional ad-learning UI actions and summary refresh
// 2) keep learning-mode visibility/state local to the organizer workspace
// 3) avoid mixing learning controls into organizer execution or dependency flows
//
// File map for maintainers:
// 1) learning log/button state helpers
// 2) learning summary/model visibility synchronization
// 3) import/learn/evaluate action handlers

(function initializeOrganizerLearningController(globalScope) {
  const learningView = globalScope.desktopOrganizerLearningView || null;

  if (!learningView) {
    throw new Error('desktopOrganizerLearningView is required before organizerLearningController');
  }

  function createOrganizerLearningController(options) {
    const {
      elements,
      desktopApi,
      state,
      messages,
      appendLogLine,
      getErrorMessage,
      normalizeKeywordText,
      normalizeAdModelType,
      toSafeInteger,
      setStatus,
      setSummaryMessage,
      requestSyncActionButtons,
      requestSyncDependencyStatus
    } = options;
    let eventsBound = false;

    function appendOrganizerLearningLog(level, message, timestamp) {
      // Learning logs stay scoped to organizer log projection so optional
      // ad-learning UX does not invent a second log surface.
      appendLogLine(elements.organizerLogView, level, message, timestamp);
    }

    function bindAsyncClick(button, handler, onError) {
      if (!button) {
        return;
      }

      button.addEventListener('click', async () => {
        try {
          await handler();
        } catch (error) {
          if (typeof onError === 'function') {
            onError(error);
            return;
          }
          appendOrganizerLearningLog('error', getErrorMessage(error));
        }
      });
    }

    function syncActionButtons() {
      if (typeof requestSyncActionButtons === 'function') {
        requestSyncActionButtons();
      }
    }

    // The ad-learning box is an optional compatibility lane. The helpers below
    // only decide whether that lane is visible/interactive; they should stay
    // separate from the actual sample-import and learning-task execution code.
    // Organizer's main path is now file-rule based. The ad-learning block is an
    // optional compatibility lane that should stay visually secondary unless the
    // user explicitly enables AI ad detection.
    function getLearningBox() {
      return learningView.getLearningBox();
    }

    function ensureModeHintElement() {
      return learningView.ensureModeHintElement();
    }

    function decorateLearningBox() {
      learningView.decorateLearningBox(elements);
    }

    function notifyAdDetectionModeChanged() {
      syncActionButtons();
      if (typeof requestSyncDependencyStatus === 'function') {
        requestSyncDependencyStatus();
      }
      if (isAdDetectionEnabled()) {
        refreshAdLearningSummary(false).catch(() => {});
      }
    }

    function isAdDetectionEnabled() {
      if (elements.organizerAdDetectionEnable || elements.organizerAdDetectionDisable) {
        if (elements.organizerAdDetectionDisable && elements.organizerAdDetectionDisable.checked) {
          return false;
        }
        if (elements.organizerAdDetectionEnable && elements.organizerAdDetectionEnable.checked) {
          return true;
        }
      }
      return Boolean(elements.organizerAdDetectionEnabled && elements.organizerAdDetectionEnabled.checked);
    }

    function applyAdDetectionUiState() {
      const enabled = isAdDetectionEnabled();
      const learningBox = getLearningBox();
      const modeHint = ensureModeHintElement();
      decorateLearningBox();

      if (learningBox) {
        learningBox.classList.toggle('is-compat-collapsed', !enabled);
      }
      if (modeHint) {
        modeHint.textContent = enabled
          ? '已启用 AI 广告检测兼容链路：将显示样本学习、依赖检查与可选 AList 配置。'
          : '当前为主整理模式：仅按番号、文件大小和命名规则整理。样本学习、FFmpeg / ONNX / AList 仅在启用 AI 广告检测后使用。';
      }

      const advancedDisabled = !enabled || state.running;
      if (elements.organizerAdModelType) {
        elements.organizerAdModelType.disabled = advancedDisabled;
      }
      [
        elements.organizerAdThreshold,
        elements.organizerAdKeywords,
        elements.organizerLearningCodes,
        elements.organizerImportAdSamplesButton,
        elements.organizerHelpImportAdButton,
        elements.organizerImportNormalSamplesButton,
        elements.organizerHelpImportNormalButton,
        elements.organizerLearnAdByCodesButton,
        elements.organizerHelpLearnAdButton,
        elements.organizerLearnNormalByCodesButton,
        elements.organizerHelpLearnNormalButton,
        elements.organizerRefreshLearningSummaryButton
      ].forEach((element) => {
        if (element) {
          element.disabled = advancedDisabled;
        }
      });
    }

    function getLearningConfig() {
      // Config collection is setup/UI normalization only. Backend learning
      // services remain responsible for validating operational behavior.
      return {
        adDetectionEnabled: isAdDetectionEnabled(),
        adModelType: normalizeAdModelType(elements.organizerAdModelType && elements.organizerAdModelType.value),
        adThreshold: toSafeInteger(elements.organizerAdThreshold && elements.organizerAdThreshold.value, 60, 1, 100),
        adKeywords: normalizeKeywordText(elements.organizerAdKeywords && elements.organizerAdKeywords.value).join(', ')
      };
    }

    // Summary rendering is the operator-facing read model for the learning
    // cache. If summary wording or counts are wrong, debug here before touching
    // sample import or training task calls.
    function renderLearningSummary(summary = null) {
      if (!elements.organizerLearningSummary) {
        return;
      }

      if (!summary) {
        elements.organizerLearningSummary.textContent = '尚未加载学习模型。';
        return;
      }

      const threshold = summary.thresholds && Number.isFinite(summary.thresholds.adScore) ? summary.thresholds.adScore : 60;
      const updatedAt = summary.updatedAt ? new Date(summary.updatedAt).toLocaleString('zh-CN', { hour12: false }) : '-';
      const introTemplateCount = Number(summary.introTemplateCount || 0);
      const activeModelLabel = String(summary.activeModelLabel || summary.activeModel || 'MobileNetV3 Lite');
      const metrics = summary.metrics && typeof summary.metrics === 'object' ? summary.metrics : {};
      const lastLearning = metrics.lastLearning && typeof metrics.lastLearning === 'object' ? metrics.lastLearning : null;
      const observability = lastLearning
        ? `命中率 ${Number(lastLearning.hitRate || 0).toFixed(1)}% / 误判率 ${Number(lastLearning.falsePositiveRate || 0).toFixed(
            1
          )}% / 样本增量=${Number(lastLearning.sampleIncrement || 0)}`
        : '暂无';

      elements.organizerLearningSummary.textContent = [
        `关键词 ${summary.keywordCount || 0}`,
        `广告样本 ${summary.adSampleCount || 0}`,
        `正常样本 ${summary.normalSampleCount || 0}`,
        `片头模板 ${introTemplateCount}`,
        `识别策略 ${activeModelLabel}`,
        `阈值 ${threshold}`,
        `学习指标 ${observability}`,
        `更新时间 ${updatedAt}`
      ].join(' | ');
    }

    async function refreshAdLearningSummary(logMessage = false) {
      // Summary refresh is the read-model sync point for the optional learning
      // lane. Keep task execution and summary projection separate.
      if (typeof desktopApi.getAdLearningSummary !== 'function') {
        renderLearningSummary(null);
        return null;
      }

      const summary = await desktopApi.getAdLearningSummary();
      state.adSummary = summary || null;

      if (elements.organizerAdThreshold && summary && summary.thresholds && Number.isFinite(summary.thresholds.adScore)) {
        elements.organizerAdThreshold.value = String(summary.thresholds.adScore);
      }
      if (elements.organizerAdModelType && summary) {
        elements.organizerAdModelType.value = normalizeAdModelType(summary.activeModel);
      }

      renderLearningSummary(summary);
      applyAdDetectionUiState();
      if (logMessage) {
        appendLogLine(elements.organizerLogView, 'info', '广告学习摘要已刷新。');
      }
      return summary;
    }

    async function syncAdLearningModel(options = {}) {
      // Model-sync is the one place this controller writes persistent learning
      // knobs; do not let import/learn task helpers each patch settings alone.
      if (typeof desktopApi.updateAdLearningModel !== 'function') {
        return state.adSummary;
      }

      const learningConfig = getLearningConfig();
      const result = await desktopApi.updateAdLearningModel({
        keywords: learningConfig.adKeywords,
        adScore: learningConfig.adThreshold,
        modelType: learningConfig.adModelType
      });
      state.adSummary = result || null;
      renderLearningSummary(result);
      applyAdDetectionUiState();

      if (options.logSuccess) {
        appendLogLine(
          elements.organizerLogView,
          'info',
          `广告学习策略已同步：阈值 ${learningConfig.adThreshold}，关键词 ${learningConfig.adKeywords || '(空)'}`
        );
      }

      return result;
    }

    // The next helpers are the two execution lanes of this module:
    // 1) import explicit sample files
    // 2) derive samples by video codes from organizer root
    // They should keep UI messaging and state transitions symmetric so failure
    // analysis does not depend on which lane the user picked.
    async function showLearningGuide(kind) {
      if (typeof desktopApi.showAlert !== 'function') {
        return;
      }

      const title = '样本学习使用说明';
      if (kind === 'import-ad') {
        await desktopApi.showAlert({
          type: 'info',
          title,
          message: '导入广告样本',
          detail:
            '请选择“确认含开头广告”的截图或视频样本。建议优先选择视频开头 3-15 秒画面，并持续补充样本。',
          buttonLabel: '我知道了'
        });
        return;
      }

      if (kind === 'import-normal') {
        await desktopApi.showAlert({
          type: 'info',
          title,
          message: '导入正常样本',
          detail:
            '请选择“确认无开头广告”的正常视频样本。广告 / 正常样本数量尽量接近，可以降低误判。',
          buttonLabel: '我知道了'
        });
        return;
      }

      await desktopApi.showAlert({
        type: 'info',
        title,
        message: '按番号自动学习',
        detail: '先输入番号（逗号或换行分隔），再点击学习。软件会在根目录匹配番号并自动抓取开头帧。',
        buttonLabel: '开始学习'
      });
    }

    function getLearningCodes() {
      const rawCodes =
        elements.organizerLearningCodes && elements.organizerLearningCodes.value
          ? String(elements.organizerLearningCodes.value)
          : '';
      return Array.from(
        new Set(
          rawCodes
            .split(/[\r\n,，、\s]+/)
            .map((item) => item.trim().toUpperCase())
            .filter(Boolean)
        )
      );
    }

    async function learnSamplesByCodes(label) {
      if (typeof desktopApi.learnAdSamplesByCodes !== 'function') {
        throw new Error('当前版本未启用“按番号自动学习”能力。');
      }

      await showLearningGuide('learn-by-codes');

      const codes = getLearningCodes();
      if (codes.length === 0) {
        throw new Error('请先输入要学习的番号（支持逗号或换行分隔）。');
      }

      const sourceRoot = String(elements.organizerRoot && elements.organizerRoot.value ? elements.organizerRoot.value : '').trim();
      if (!sourceRoot) {
        throw new Error(messages.rootRequired);
      }

      const result = await desktopApi.learnAdSamplesByCodes({
        label,
        codes,
        rootPath: sourceRoot,
        includeSubdirectories: true,
        modelType: getLearningConfig().adModelType
      });

      state.adSummary = result && result.summary ? result.summary : state.adSummary;
      renderLearningSummary(state.adSummary);

      const matchedVideoCount = Number(result && result.matchedVideoCount) || 0;
      const importedSampleCount = Number(result && result.importedSampleCount) || 0;
      const missingCodes = Array.isArray(result && result.missingCodes) ? result.missingCodes : [];

      appendLogLine(
        elements.organizerLogView,
        'info',
        `${label === 'normal' ? '正常' : '广告'}按番号学习完成：命中视频 ${matchedVideoCount}，新增样本 ${importedSampleCount}，未命中番号 ${missingCodes.length}`
      );

      if (missingCodes.length > 0) {
        appendLogLine(elements.organizerLogView, 'warn', `未匹配到的番号：${missingCodes.join(', ')}`);
      }
    }

    async function runLearningTask(label) {
      if (state.running) {
        appendLogLine(elements.organizerLogView, 'warn', '当前已有任务在运行，请等待完成后再发起新的学习任务。');
        return;
      }

      const readableLabel = label === 'normal' ? '正常样本' : '广告样本';
      state.running = true;
      state.activeTask = 'learning';
      syncActionButtons();
      setStatus('running', `按番号学习进行中（${readableLabel}）...`);
      setSummaryMessage(`按番号学习已启动（${readableLabel}）。`);
      appendLogLine(elements.organizerLogView, 'info', `开始按番号学习：${readableLabel}`);

      try {
        await learnSamplesByCodes(label);
        setStatus('completed', `学习完成：${readableLabel}`);
      } catch (error) {
        const message = getErrorMessage(error);
        appendLogLine(elements.organizerLogView, 'error', message);
        setStatus('error', message);
        setSummaryMessage(message);
      } finally {
        state.running = false;
        state.activeTask = '';
        syncActionButtons();
      }
    }

    async function importLearningSamples(label) {
      if (typeof desktopApi.chooseLearningSamples !== 'function' || typeof desktopApi.importAdLearningSamples !== 'function') {
        throw new Error('当前版本未启用广告学习导入能力。');
      }

      await showLearningGuide(label === 'normal' ? 'import-normal' : 'import-ad');

      const samplePaths = await desktopApi.chooseLearningSamples();
      if (!Array.isArray(samplePaths) || samplePaths.length === 0) {
        appendLogLine(elements.organizerLogView, 'info', '未选择样本文件。');
        return;
      }

      const result = await desktopApi.importAdLearningSamples({
        label,
        samplePaths,
        modelType: getLearningConfig().adModelType
      });

      state.adSummary = result && result.summary ? result.summary : state.adSummary;
      renderLearningSummary(state.adSummary);

      const importedCount = Array.isArray(result && result.imported) ? result.imported.length : 0;
      const skippedCount = Array.isArray(result && result.skipped) ? result.skipped.length : 0;
      appendLogLine(
        elements.organizerLogView,
        'info',
        `${label === 'normal' ? '正常' : '广告'}样本导入完成：成功 ${importedCount}，跳过 ${skippedCount}`
      );
    }

    // Event binding is intentionally the last section of this file. If a bug is
    // "button does nothing" start here; if a bug is "summary/state wrong after
    // click" start from the task helpers above.
    function bindEvents() {
      if (eventsBound) {
        return;
      }

      eventsBound = true;
      bindAsyncClick(elements.organizerImportAdSamplesButton, async () => {
        await importLearningSamples('ad');
      });

      bindAsyncClick(elements.organizerHelpImportAdButton, async () => {
        await showLearningGuide('import-ad');
      });

      bindAsyncClick(elements.organizerImportNormalSamplesButton, async () => {
        await importLearningSamples('normal');
      });

      bindAsyncClick(elements.organizerHelpImportNormalButton, async () => {
        await showLearningGuide('import-normal');
      });

      bindAsyncClick(elements.organizerLearnAdByCodesButton, async () => {
        await runLearningTask('ad');
      });

      bindAsyncClick(elements.organizerHelpLearnAdButton, async () => {
        await showLearningGuide('learn-by-codes');
      });

      bindAsyncClick(elements.organizerLearnNormalByCodesButton, async () => {
        await runLearningTask('normal');
      });

      bindAsyncClick(elements.organizerHelpLearnNormalButton, async () => {
        await showLearningGuide('learn-by-codes');
      });

      bindAsyncClick(elements.organizerRefreshLearningSummaryButton, async () => {
        await syncAdLearningModel({ logSuccess: true });
        await refreshAdLearningSummary(true);
      });

      if (elements.organizerAdDetectionEnabled) {
        elements.organizerAdDetectionEnabled.addEventListener('change', () => {
          if (elements.organizerAdDetectionEnable) {
            elements.organizerAdDetectionEnable.checked = Boolean(elements.organizerAdDetectionEnabled.checked);
          }
          if (elements.organizerAdDetectionDisable) {
            elements.organizerAdDetectionDisable.checked = !elements.organizerAdDetectionEnabled.checked;
          }
          applyAdDetectionUiState();
          notifyAdDetectionModeChanged();
        });
      }

      if (elements.organizerAdDetectionEnable) {
        elements.organizerAdDetectionEnable.addEventListener('change', () => {
          if (!elements.organizerAdDetectionEnable.checked) {
            return;
          }
          if (elements.organizerAdDetectionEnabled) {
            elements.organizerAdDetectionEnabled.checked = true;
          }
          if (elements.organizerAdDetectionDisable) {
            elements.organizerAdDetectionDisable.checked = false;
          }
          applyAdDetectionUiState();
          notifyAdDetectionModeChanged();
        });
      }

      if (elements.organizerAdDetectionDisable) {
        elements.organizerAdDetectionDisable.addEventListener('change', () => {
          if (!elements.organizerAdDetectionDisable.checked) {
            return;
          }
          if (elements.organizerAdDetectionEnabled) {
            elements.organizerAdDetectionEnabled.checked = false;
          }
          if (elements.organizerAdDetectionEnable) {
            elements.organizerAdDetectionEnable.checked = false;
          }
          applyAdDetectionUiState();
          notifyAdDetectionModeChanged();
        });
      }

      if (elements.organizerAdModelType) {
        elements.organizerAdModelType.addEventListener('change', () => {
          elements.organizerAdModelType.value = normalizeAdModelType(elements.organizerAdModelType.value);
        });
      }
    }

    function applySettings(settings = {}) {
      if (elements.organizerAdDetectionEnabled) {
        elements.organizerAdDetectionEnabled.checked = settings.organizerAdDetectionEnabled !== false;
      }
      if (elements.organizerAdDetectionEnable) {
        elements.organizerAdDetectionEnable.checked = settings.organizerAdDetectionEnabled !== false;
      }
      if (elements.organizerAdDetectionDisable) {
        elements.organizerAdDetectionDisable.checked = settings.organizerAdDetectionEnabled === false;
      }
      if (elements.organizerAdModelType) {
        elements.organizerAdModelType.value = normalizeAdModelType(settings.organizerAdModelType);
      }
      if (elements.organizerAdThreshold) {
        elements.organizerAdThreshold.value = String(toSafeInteger(settings.organizerAdThreshold, 60, 1, 100));
      }
      if (elements.organizerAdKeywords) {
        elements.organizerAdKeywords.value = String(settings.organizerAdKeywords || '');
      }
      if (elements.organizerLearningCodes) {
        elements.organizerLearningCodes.value = '';
      }
      applyAdDetectionUiState();
    }

    return {
      isAdDetectionEnabled,
      applyAdDetectionUiState,
      getLearningConfig,
      renderLearningSummary,
      refreshAdLearningSummary,
      syncAdLearningModel,
      showLearningGuide,
      getLearningCodes,
      learnSamplesByCodes,
      runLearningTask,
      importLearningSamples,
      bindEvents,
      applySettings
    };
  }

  globalScope.desktopOrganizerLearningController = {
    createOrganizerLearningController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/organizerCrawlOutputController.js ==== */
// Organizer crawl-output controller for the current desktop renderer.
// It resolves crawl artifacts into organizer preload state and keeps that
// artifact handoff separate from core organizer execution UI behavior.
//
// Ownership summary:
// 1) resolve artifact input into organizer preload snapshots
// 2) keep source-type/source-path/code-count metadata consistent in the UI
// 3) isolate crawl-output handoff from organizer run-state behavior
//
// File map for maintainers:
// 1) artifact input normalization and source-type helpers
// 2) organizer preload state synchronization
// 3) crawl-output import/browse/reset actions

(function initializeOrganizerCrawlOutputController(globalScope) {
  function createOrganizerCrawlOutputController(options) {
    const { elements, desktopApi, state, messages, appendLogLine, getErrorMessage } = options;
    const artifactInputHelperFactory = globalScope.desktopArtifactInputHelper || null;
    if (!artifactInputHelperFactory) {
      throw new Error('desktopArtifactInputHelper is required before organizerCrawlOutputController');
    }
    const artifactInputHelper = artifactInputHelperFactory.createArtifactInputHelper({
      labels: {
        snapshot: '整理快照',
        fallback: '爬虫结果输入'
      },
      latestInputOptions: {
        artifactKey: 'preferredOrganizerCodesPath',
        artifactType: 'organizerCodes'
      },
      readCurrentValue: () => getCurrentOutputDir(),
      writeCurrentValue: (artifactInput) => applyOrganizerArtifactInputValue(artifactInput)
    });
    let eventsBound = false;

    function normalizeOutputDir(value) {
      return String(value || '').trim();
    }

    function sameExpectedSourcePath(left, right) {
      const normalizedLeft = normalizeOutputDir(left);
      const normalizedRight = normalizeOutputDir(right);
      if (!normalizedLeft || !normalizedRight) {
        return false;
      }

      return normalizedLeft.toLowerCase() === normalizedRight.toLowerCase();
    }

    function resolveLoadedExpectedSourceType(sourceType, options = {}) {
      // Source-type resolution centralizes legacy alias handling so organizer
      // preload state does not branch all over the renderer.
      const normalizedSourceType = normalizeOutputDir(sourceType);
      if (normalizedSourceType) {
        return normalizedSourceType;
      }

      const sourcePath = normalizeOutputDir(options.sourcePath);
      const filmDataPath = normalizeOutputDir(options.filmDataPath);
      const organizerCodesPath = normalizeOutputDir(options.organizerCodesPath);
      const hasCodes = Boolean(options.hasCodes);

      if (sameExpectedSourcePath(sourcePath, organizerCodesPath)) {
        return 'organizerCodes';
      }
      if (sameExpectedSourcePath(sourcePath, filmDataPath)) {
        return 'filmData';
      }
      if (organizerCodesPath && !filmDataPath) {
        return 'organizerCodes';
      }
      if (filmDataPath && !organizerCodesPath) {
        return 'filmData';
      }
      if (sourcePath || hasCodes) {
        return 'payload';
      }

      return '';
    }

    function resolveLoadedExpectedSourcePath(sourceType, options = {}) {
      const normalizedSourceType = normalizeOutputDir(sourceType);
      const sourcePath = normalizeOutputDir(options.sourcePath);
      const filmDataPath = normalizeOutputDir(options.filmDataPath);
      const organizerCodesPath = normalizeOutputDir(options.organizerCodesPath);

      if (normalizedSourceType === 'organizerCodes') {
        return organizerCodesPath || sourcePath || filmDataPath;
      }
      if (normalizedSourceType === 'filmData') {
        return filmDataPath || sourcePath || organizerCodesPath;
      }
      if (normalizedSourceType === 'payload') {
        return sourcePath || filmDataPath || organizerCodesPath;
      }

      return sourcePath || organizerCodesPath || filmDataPath;
    }

    function updateCodeMetaView(meta = {}) {
      // Meta view projects one normalized preload snapshot only. It should not
      // infer business status beyond source path/type and code count.
      if (elements.organizerCodeCount) {
        elements.organizerCodeCount.textContent = String(meta.codeCount || 0);
      }

      if (elements.organizerCodeSource) {
        if (meta.sourcePath) {
          const sourceTypeLabel =
            meta.sourceType === 'organizerCodes'
              ? '整理快照'
              : meta.sourceType === 'filmData'
                ? 'filmData'
                : '来源';
          elements.organizerCodeSource.textContent = `${sourceTypeLabel}: ${meta.sourcePath}`;
        } else {
          elements.organizerCodeSource.textContent = '来源：尚未加载番号名单';
        }
      }
    }

    // preloadedExpected is the single source of truth for organizer-side crawl
    // snapshot state in the renderer. All display/meta helpers below derive
    // from that one snapshot so we do not reintroduce parallel state fields.
    function getLoadedExpectedSnapshot() {
      return state.preloadedExpected && typeof state.preloadedExpected === 'object' ? state.preloadedExpected : null;
    }

    function buildLoadedSourceMeta(loaded) {
      if (!loaded) {
        return {
          sourcePath: '',
          sourceType: ''
        };
      }

      const sourceType = resolveLoadedExpectedSourceType(loaded.sourceType, {
        sourcePath: loaded.sourcePath,
        filmDataPath: loaded.filmDataPath,
        organizerCodesPath: loaded.organizerCodesPath,
        hasCodes:
          (Array.isArray(loaded.codes) && loaded.codes.length > 0) ||
          (Array.isArray(loaded.codeEntries) && loaded.codeEntries.length > 0)
      });

      return {
        sourcePath: resolveLoadedExpectedSourcePath(sourceType, {
          sourcePath: loaded.sourcePath,
          filmDataPath: loaded.filmDataPath,
          organizerCodesPath: loaded.organizerCodesPath
        }),
        sourceType
      };
    }

    function getLoadedSourceMeta() {
      return buildLoadedSourceMeta(getLoadedExpectedSnapshot());
    }

    // Snapshot accessors below should stay read-only. If future maintenance
    // needs extra organizer preload fields, extend preloadedExpected once and
    // keep all derived UI/meta reads flowing through this section.
    function getLoadedCodes() {
      const loaded = getLoadedExpectedSnapshot();
      return Array.isArray(loaded && loaded.codes) ? loaded.codes : [];
    }

    function getLoadedCodeEntries() {
      const loaded = getLoadedExpectedSnapshot();
      return Array.isArray(loaded && loaded.codeEntries) ? loaded.codeEntries : [];
    }

    function clearLoadedExpectedState(options = {}) {
      const { updateMeta = true } = options;

      state.preloadedExpected = null;

      if (updateMeta) {
        updateCodeMetaView({
          codeCount: 0,
          sourcePath: '',
          sourceType: ''
        });
      }
    }

    function getCurrentOutputDir() {
      return normalizeOutputDir(elements.organizerCrawlOutput && elements.organizerCrawlOutput.value);
    }

    function appendOrganizerLog(level, message) {
      appendLogLine(elements.organizerLogView, level, message);
    }

    function bindAsyncClick(button, handler, onError) {
      if (!button) {
        return;
      }

      button.addEventListener('click', async () => {
        try {
          await handler();
        } catch (error) {
          if (typeof onError === 'function') {
            onError(error);
            return;
          }
          appendOrganizerLog('error', getErrorMessage(error));
        }
      });
    }

    function getLoadedSnapshotOutputDir() {
      const loaded = getLoadedExpectedSnapshot();
      return normalizeOutputDir(loaded && loaded.outputDir);
    }

    // Expected-code snapshots are tied to one crawl-output directory. When the
    // textbox changes, clear the old snapshot so organizer does not silently
    // reuse stale codes for a different crawl run.
    function syncLoadedExpectedStateForOutput(nextOutputDir, options = {}) {
      // Output-dir changes invalidate the preloaded snapshot because codes are
      // tied to one crawl artifact root. Keep that invalidation rule here.
      const { updateMeta = true } = options;
      const normalizedOutputDir = normalizeOutputDir(nextOutputDir);
      const loadedOutputDir = getLoadedSnapshotOutputDir();
      if (!loadedOutputDir || loadedOutputDir === normalizedOutputDir) {
        return;
      }
      clearLoadedExpectedState({ updateMeta });
    }

    function cloneLoadedCodes(rawCodes) {
      if (!Array.isArray(rawCodes)) {
        return [];
      }

      return rawCodes.map((code) => normalizeOutputDir(code)).filter(Boolean);
    }

    function cloneLoadedCodeEntries(rawEntries) {
      if (!Array.isArray(rawEntries)) {
        return [];
      }

      return rawEntries
        .map((entry) => {
          const code = normalizeOutputDir(entry && entry.code);
          if (!code) {
            return null;
          }

          const magnets = Array.isArray(entry && entry.magnets)
            ? entry.magnets.map((magnet) => ({
                ...magnet
              }))
            : [];

          return {
            ...entry,
            code,
            magnets
          };
        })
        .filter(Boolean);
    }

    // Compatibility normalization is intentionally concentrated here. Older
    // payload aliases and newer artifact bundles must both land in one stable
    // renderer snapshot so organizer debugging never has to branch on source
    // shape first.
    // Some compatibility/Electron-era paths still return top-level
    // codes/codeEntries without the newer preloadedExpected bundle. Normalize
    // both shapes into the same single renderer snapshot so organizer state
    // does not disappear when those old return payloads are exercised.
    function normalizeLoadedExpectedResult(result, outputDir) {
      // Compatibility normalization is concentrated here so older payload
      // aliases and newer bundles both land in one stable renderer snapshot.
      const preloadedExpected =
        result && result.preloadedExpected && typeof result.preloadedExpected === 'object'
          ? {
              ...result.preloadedExpected
            }
          : null;
      const loadedCodes = cloneLoadedCodes(result && result.codes);
      const loadedCodeEntries = cloneLoadedCodeEntries(result && result.codeEntries);
      const fallbackOutputDir = normalizeOutputDir((result && result.outputDir) || outputDir);
      const fallbackFilmDataPath = normalizeOutputDir(result && result.filmDataPath);
      const fallbackOrganizerCodesPath = normalizeOutputDir(result && result.organizerCodesPath);
      const fallbackExplicitSourcePath = normalizeOutputDir(result && result.sourcePath);
      const fallbackSourceType = resolveLoadedExpectedSourceType(normalizeOutputDir(result && result.sourceType), {
        sourcePath: fallbackExplicitSourcePath,
        filmDataPath: fallbackFilmDataPath,
        organizerCodesPath: fallbackOrganizerCodesPath,
        hasCodes: loadedCodes.length > 0 || loadedCodeEntries.length > 0
      });
      const fallbackSourcePath = resolveLoadedExpectedSourcePath(fallbackSourceType, {
        sourcePath: fallbackExplicitSourcePath,
        filmDataPath: fallbackFilmDataPath,
        organizerCodesPath: fallbackOrganizerCodesPath
      });

      if (
        !preloadedExpected &&
        !fallbackOutputDir &&
        !fallbackSourcePath &&
        loadedCodes.length === 0 &&
        loadedCodeEntries.length === 0
      ) {
        return null;
      }

      const normalized = preloadedExpected || {
        sourceType: fallbackSourceType,
        sourcePath: fallbackSourcePath,
        outputDir: fallbackOutputDir,
        filmDataPath: fallbackFilmDataPath,
        organizerCodesPath: fallbackOrganizerCodesPath,
        actressName: normalizeOutputDir(result && result.actressName),
        totalRecords: Number(result && result.totalRecords) || 0,
        codeCount: Number(result && result.codeCount) || 0
      };

      normalized.sourceType = normalizeOutputDir(normalized.sourceType || fallbackSourceType);
      normalized.sourcePath = normalizeOutputDir(normalized.sourcePath || fallbackSourcePath);
      normalized.outputDir = normalizeOutputDir(normalized.outputDir || fallbackOutputDir);
      normalized.filmDataPath = normalizeOutputDir(normalized.filmDataPath || fallbackFilmDataPath);
      normalized.organizerCodesPath = normalizeOutputDir(normalized.organizerCodesPath || fallbackOrganizerCodesPath);
      normalized.actressName = normalizeOutputDir(normalized.actressName || (result && result.actressName));
      normalized.totalRecords = Number(normalized.totalRecords) || Number(result && result.totalRecords) || 0;
      normalized.codes = loadedCodes.length > 0 ? loadedCodes : cloneLoadedCodes(normalized.codes);
      normalized.codeEntries =
        loadedCodeEntries.length > 0 ? loadedCodeEntries : cloneLoadedCodeEntries(normalized.codeEntries);
      normalized.codeCount = Math.max(
        Number(normalized.codeCount) || Number(result && result.codeCount) || 0,
        normalized.codes.length
      );

      normalized.sourceType = resolveLoadedExpectedSourceType(normalized.sourceType, {
        sourcePath: normalized.sourcePath,
        filmDataPath: normalized.filmDataPath,
        organizerCodesPath: normalized.organizerCodesPath,
        hasCodes: normalized.codes.length > 0 || normalized.codeEntries.length > 0
      });
      normalized.sourcePath = resolveLoadedExpectedSourcePath(normalized.sourceType, {
        sourcePath: normalized.sourcePath,
        filmDataPath: normalized.filmDataPath,
        organizerCodesPath: normalized.organizerCodesPath
      });

      return normalized;
    }

    function buildLoadedSnapshotView(loadedSnapshot, fallbackOutputDir) {
      const sourceMeta = buildLoadedSourceMeta(loadedSnapshot);
      const loadedCodes = Array.isArray(loadedSnapshot && loadedSnapshot.codes) ? loadedSnapshot.codes : [];

      return {
        loadedSnapshot,
        loadedCodes,
        sourceMeta,
        resolvedOutputDir: sourceMeta.sourcePath || fallbackOutputDir
      };
    }

    function applyLoadedExpectedResult(result, outputDir) {
      const loadedSnapshot = normalizeLoadedExpectedResult(result, outputDir);
      state.preloadedExpected = loadedSnapshot;
      const snapshotView = buildLoadedSnapshotView(loadedSnapshot, outputDir);

      updateCodeMetaView({
        codeCount: snapshotView.loadedCodes.length,
        sourcePath: snapshotView.sourceMeta.sourcePath,
        sourceType: snapshotView.sourceMeta.sourceType
      });

      appendLogLine(
        elements.organizerLogView,
        'info',
        `番号名单加载完成：${snapshotView.loadedCodes.length} 条（${snapshotView.sourceMeta.sourceType || 'artifact'}: ${snapshotView.resolvedOutputDir}）`
      );
    }

    // This is the renderer's handoff to the organizer run payload. It returns
    // a snapshot only when it matches the currently selected crawl output dir.
    // That keeps strict-match organizer runs from silently mixing old and new
    // crawl outputs.
    function getLoadedSnapshotForOutput(outputDir) {
      const normalizedOutputDir = normalizeOutputDir(outputDir);
      syncLoadedExpectedStateForOutput(normalizedOutputDir);

      const loaded = getLoadedExpectedSnapshot();
      if (!loaded) {
        return null;
      }

      const loadedOutputDir = normalizeOutputDir(loaded.outputDir);
      if (!loadedOutputDir || loadedOutputDir !== normalizedOutputDir) {
        return null;
      }

      return {
        ...loaded,
        codes: [...getLoadedCodes()],
        codeEntries: [...getLoadedCodeEntries()]
      };
    }

    // Main organizer controller should consume this one boundary helper instead
    // of re-reading the textbox and snapshot separately. That keeps the
    // renderer-side "current crawl import input" contract in one place.
    function getCurrentOrganizerInputState() {
      const crawlOutputDir = getCurrentOutputDir();
      return {
        crawlOutputDir,
        preloadedExpected: getLoadedSnapshotForOutput(crawlOutputDir)
      };
    }

    function applyOrganizerArtifactInputValue(artifactInput) {
      const normalizedValue = normalizeOutputDir(artifactInput);
      if (elements.organizerCrawlOutput) {
        elements.organizerCrawlOutput.value = normalizedValue;
      }
      return normalizedValue;
    }

    // Organizer preload textbox is the only renderer-side crawl-artifact input
    // boundary for this module. Load-code flows should go through this helper so
    // autofill, textbox reuse and corresponding log wording stay aligned.
    async function resolveOrganizerArtifactInputState(options = {}) {
      return artifactInputHelper.resolveArtifactInputState(desktopApi, null, options);
    }

    // This only fills the textbox with the latest crawl-derived artifact input.
    // The organizer run still treats preloadedExpected as the single renderer
    // snapshot and treats crawlOutputDir as the lazy-load fallback boundary.
    async function applyLatestCrawlOutput() {
      const { artifactInput, message } = await artifactInputHelper.fillLatestArtifactInput(desktopApi);
      if (artifactInput) {
        syncLoadedExpectedStateForOutput(artifactInput);
        appendOrganizerLog('info', message || `已填入最近爬虫结果输入：${artifactInput}`);
      }
    }

    // Organizer code preload accepts an artifact path or a crawl output dir.
    // The current renderer path forwards artifactInput only; service-side
    // resolution decides whether to read organizer-codes.json or filmData.json
    // from that root, and bridge compatibility keeps older field aliases alive.
    async function loadExpectedCodes() {
      const inputState = await resolveOrganizerArtifactInputState({ mode: 'autofill' });
      const artifactInput = inputState.artifactInput;
      if (inputState.message) {
        syncLoadedExpectedStateForOutput(artifactInput);
        appendOrganizerLog('info', inputState.message);
      }
      if (!artifactInput) {
        throw new Error(messages.crawlOutputRequired);
      }

      const result = await desktopApi.loadCrawlFilmCodes({ artifactInput });
      applyLoadedExpectedResult(result, artifactInput);
      return result;
    }

    // Event binding stays intentionally narrow: this controller only owns
    // crawl-output preload input and expected-code snapshot state. Organizer run
    // execution buttons remain in organizerController.
    function bindEvents() {
      if (eventsBound) {
        return;
      }

      eventsBound = true;
      if (elements.organizerCrawlOutput) {
        const invalidateLoadedState = () => {
          syncLoadedExpectedStateForOutput(getCurrentOutputDir());
        };
        elements.organizerCrawlOutput.addEventListener('input', invalidateLoadedState);
        elements.organizerCrawlOutput.addEventListener('change', invalidateLoadedState);
      }

      bindAsyncClick(elements.organizerUseLatestOutputButton, applyLatestCrawlOutput);

      bindAsyncClick(
        elements.organizerLoadCodesButton,
        loadExpectedCodes,
        (error) => {
          const sourceMeta = getLoadedSourceMeta();
          appendOrganizerLog('error', getErrorMessage(error));
          updateCodeMetaView({
            codeCount: getLoadedCodes().length,
            sourcePath: sourceMeta.sourcePath,
            sourceType: sourceMeta.sourceType
          });
        }
      );
    }

    function resetCodeMetaView() {
      clearLoadedExpectedState({ updateMeta: true });
    }

    return {
      updateCodeMetaView,
      getCurrentOrganizerInputState,
      applyLatestCrawlOutput,
      loadExpectedCodes,
      bindEvents,
      resetCodeMetaView,
      getLoadedSnapshotForOutput
    };
  }

  globalScope.desktopOrganizerCrawlOutputController = {
    createOrganizerCrawlOutputController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/organizerReviewView.js ==== */
// Organizer review view owns report-path rows and post-run review panel DOM.
// The controller passes in callbacks so business actions stay outside the view.
//
// Ownership summary:
// 1) render organizer report-file rows
// 2) render post-run review entry points from normalized result payloads
// 3) expose passive open-report bindings without owning organizer decisions
//
// File map for maintainers:
// 1) report-file row render helpers
// 2) organizer review row normalization
// 3) review panel/card DOM render helpers
(function initializeOrganizerReviewView(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const clearChildren = rendererHelpers.clearChildren;

  if (!clearChildren) {
    throw new Error('desktopRendererHelpers must be loaded before organizerReviewView');
  }

  function renderReportFiles(container, reportFiles = [], callbacks = {}) {
    if (!container) {
      return;
    }

    clearChildren(container);

    if (!Array.isArray(reportFiles) || reportFiles.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'organizer-report-item';
      empty.textContent = '预览模式下不会生成报告文件。';
      container.appendChild(empty);
      return;
    }

    reportFiles.forEach((filePath) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'organizer-report-item';
      row.textContent = filePath;
      if (typeof callbacks.onBindOpenReport === 'function') {
        callbacks.onBindOpenReport(row, filePath);
      }
      container.appendChild(row);
    });
  }

  function buildReviewRows(result) {
    const safeResult = result && typeof result === 'object' ? result : null;
    if (!safeResult) {
      return null;
    }

    const reportMap = safeResult.reportMap && typeof safeResult.reportMap === 'object' ? safeResult.reportMap : {};
    const missingDownload =
      safeResult.missingDownload && typeof safeResult.missingDownload === 'object' ? safeResult.missingDownload : {};
    const adRisk = safeResult.adRisk && typeof safeResult.adRisk === 'object' ? safeResult.adRisk : {};

    return [
      {
        title: `遗漏番号：${Number(missingDownload.missingCodeCount || 0)} 条`,
        meta: `补抓磁力：${Number(missingDownload.missingMagnetCount || 0)} 条`,
        reportPath: reportMap.missingMagnets || ''
      },
      {
        title: `含开头广告番号：${Number(adRisk.riskCodeCount || 0)} 条`,
        meta: `补抓磁力：${Number(adRisk.supplementMagnetCount || 0)} 条`,
        reportPath: reportMap.adRiskMagnets || ''
      },
      {
        title: '误判复核入口',
        meta: '打开“含开头广告明细”进行人工复核，并回灌样本。',
        reportPath: reportMap.adRiskDetail || ''
      }
    ];
  }

  // Review view stays report/result driven. Any interpretation of what counts
  // as missing-download or ad-risk business state must happen before data
  // reaches this view.
  function renderReviewPanel(container, result = null, callbacks = {}) {
    if (!container) {
      return;
    }

    clearChildren(container);

    const rows = buildReviewRows(result);
    if (!rows) {
      const empty = document.createElement('p');
      empty.className = 'organizer-review-empty';
      empty.textContent = '整理完成后，这里会显示：遗漏番号、含开头广告补抓、误判复核入口。';
      container.appendChild(empty);
      return;
    }

    rows.forEach((row) => {
      const rowNode = document.createElement('div');
      rowNode.className = 'organizer-review-row';

      const content = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = row.title;
      content.appendChild(title);

      const meta = document.createElement('p');
      meta.className = 'organizer-review-meta';
      meta.textContent = row.meta;
      content.appendChild(meta);
      rowNode.appendChild(content);

      if (row.reportPath) {
        const openButton = document.createElement('button');
        openButton.type = 'button';
        openButton.className = 'ghost-button';
        openButton.textContent = '打开报告';
        if (typeof callbacks.onBindOpenReport === 'function') {
          callbacks.onBindOpenReport(openButton, row.reportPath);
        }
        rowNode.appendChild(openButton);
      }

      container.appendChild(rowNode);
    });
  }

  globalScope.desktopOrganizerReviewView = {
    renderReportFiles,
    renderReviewPanel
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/organizerController.js ==== */
// Organizer workspace controller for the current desktop renderer.
// It owns organizer-page input, progress projection, and action dispatch, but
// it should not absorb artifact-import helpers or dependency-install logic.
//
// Ownership summary:
// 1) own organizer workspace steady-state UI and action dispatch
// 2) hold organizer-page state only
// 3) delegate crawl-artifact import, dependency, and learning concerns to child
//    controllers instead of inlining them here
//
// File map for maintainers:
// 1) organizer input normalization helpers
// 2) organizer workspace state/bootstrap
// 3) child-controller coordination and organizer action handlers

(function initializeOrganizerController(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const getErrorMessage = rendererHelpers.getErrorMessage;
  const toSafeInteger = rendererHelpers.toSafeInteger;
  const appendTimestampedLogLine = rendererHelpers.appendTimestampedLogLine;
  const clearChildren = rendererHelpers.clearChildren;
  const safeLocalStorageGet = rendererHelpers.safeLocalStorageGet;
  const safeLocalStorageSet = rendererHelpers.safeLocalStorageSet;
  const bindAsyncClickHelper = rendererHelpers.bindAsyncClick || null;
  const createBufferedLogAppender = rendererHelpers.createBufferedLogAppender || null;

  if (
    !getErrorMessage ||
    !toSafeInteger ||
    !appendTimestampedLogLine ||
    !clearChildren ||
    !safeLocalStorageGet ||
    !safeLocalStorageSet
  ) {
    throw new Error('desktopRendererHelpers must be loaded before organizerController');
  }

  function normalizeKeywordText(rawValue) {
    const rawText = String(rawValue || '').trim();
    if (!rawText) {
      return [];
    }

    return Array.from(
      new Set(
        rawText
          .split(/[\r\n,，;；\s]+/)
          .map((item) => item.trim().toLowerCase())
          .filter(Boolean)
      )
    );
  }

  function normalizeAdModelType(rawValue) {
    const value = String(rawValue || '').trim().toLowerCase();
    if (value === 'squeezenet-fast' || value === 'yolov8n-balanced' || value === 'mobile-net-v3-lite') {
      return value;
    }
    return 'mobile-net-v3-lite';
  }

  function appendLogLine(logView, level, message, timestamp) {
    appendTimestampedLogLine(logView, level, message, timestamp, { tagName: 'p' });
  }

  function setDisabled(element, disabled) {
    if (element) {
      element.disabled = disabled;
    }
  }

  // createOrganizerController owns organizer-page state/action wiring only.
  // Artifact-import and dependency/ad-learning concerns stay delegated to the
  // child controllers created below.
  function createOrganizerController(options) {
    const { elements, desktopApi } = options;
    const progressSchema = globalScope.desktopProgressSchema || null;
    const organizerReviewView = globalScope.desktopOrganizerReviewView || null;
    const dependencyControllerFactory = globalScope.desktopOrganizerDependencyController || null;
    const learningControllerFactory = globalScope.desktopOrganizerLearningController || null;
    const crawlOutputControllerFactory = globalScope.desktopOrganizerCrawlOutputController || null;
    if (!organizerReviewView) {
      throw new Error('desktopOrganizerReviewView is required before organizerController');
    }
    // Organizer workflow map:
    // 1) collect organizer-page inputs
    // 2) coordinate child controllers for artifact import / learning /
    //    dependency state
    // 3) dispatch organizer actions
    // 4) project organizer-only runtime state/logs/results
    //
    // File-organization rules belong to the backend organizer service. This
    // controller should stay on page-level coordination and projection.

    const STORAGE_KEYS = {
      organizerGuideShown: 'jav.organizer.guide.v1.shown'
    };
    const ORGANIZER_TOTAL_STAGES = 6;
    const messages = {
      idle: '等待开始整理。',
      running: '正在整理视频文件，请稍候...',
      complete: '视频整理完成。',
      previewComplete: '预览扫描完成，未移动任何文件。',
      ready: '视频整理模块已就绪。',
      rootRequired: '请先选择要整理的根目录。',
      minSizeInvalid: '最小体积必须大于等于 1MB。',
      codeRequired: '请先加载爬虫番号名单，再执行严格匹配整理。',
      crawlOutputRequired: '请先填写或自动带入整理快照、filmData.json 或爬虫结果目录。'
    };

    // Organizer renderer state owns only organizer-page runtime projection.
    // Crawl artifacts may be imported into preloadedExpected, but crawler form
    // state and crawler runtime state must remain outside this controller.
    const state = {
      running: false,
      activeTask: '',
      preloadedExpected: null,
      adSummary: null,
      latestResult: null,
      dependencyStatus: null,
      dependencyInstalling: '',
      dependencyProgressMessage: ''
    };
    const organizerHeroText = {
      subtitle: '全自动改名、整理、删除、排查开头广告视频。',
      tip: '建议通过CloudDrive2将网盘挂载至本地进行整理更加方便。或将所有jav爬虫视频下载本地磁盘进行整理'
    };
    // Child controllers split organizer UI by concern:
    // - learningController: AI/ad-detection settings + summary
    // - crawlOutputController: crawl-artifact import boundary
    // - dependencyController: optional dependency install/probe surface
    // Keep cross-calls explicit so organizer debugging can isolate the failing
    // area before stepping into business logic.
    let dependencyController = null;
    let learningController = null;
    let crawlOutputController = null;
    let eventsBound = false;
    let ipcEventsBound = false;
    let bootstrapCompleted = false;
    let bootstrapPromise = null;
    const organizerLogBuffer =
      typeof createBufferedLogAppender === 'function'
        ? createBufferedLogAppender({
            logView: elements.organizerLogView,
            tagName: 'p'
          })
        : null;

    function appendOrganizerLog(level, message, timestamp) {
      // Organizer UI keeps one buffered log projection. Child controllers should
      // write through this helper instead of building parallel log surfaces.
      if (organizerLogBuffer) {
        organizerLogBuffer.append(level, message, timestamp);
        return;
      }
      appendLogLine(elements.organizerLogView, level, message, timestamp);
    }

    function getOrganizerRootPath() {
      return String(elements.organizerRoot && elements.organizerRoot.value ? elements.organizerRoot.value : '').trim();
    }

    function bindAsyncClick(button, handler, onError) {
      if (typeof bindAsyncClickHelper === 'function') {
        bindAsyncClickHelper(button, handler, {
          onError,
          fallbackErrorHandler: (error) => appendOrganizerLog('error', getErrorMessage(error))
        });
        return;
      }

      if (!button) {
        return;
      }

      button.addEventListener('click', async () => {
        try {
          await handler();
        } catch (error) {
          if (typeof onError === 'function') {
            onError(error);
            return;
          }
          appendOrganizerLog('error', getErrorMessage(error));
        }
      });
    }

    function bindOpenOrganizerPathButton(button, targetKind) {
      // Open-path actions stay thin and local: validate root, then delegate to
      // desktopApi without mixing organizer task semantics into path buttons.
      bindAsyncClick(button, async () => {
        const rootPath = getOrganizerRootPath();
        if (!rootPath) {
          appendOrganizerLog('warn', messages.rootRequired);
          return;
        }

        await desktopApi.openOrganizerPath(rootPath, targetKind);
      });
    }

    function setStatus(status, message = '') {
      const normalizedStatus =
        status === 'running' || status === 'starting' || status === 'completed' || status === 'error'
          ? status
          : 'idle';
      if (!elements.organizerStatusPill) {
        return;
      }

      elements.organizerStatusPill.className = `status-pill ${normalizedStatus}`;
      elements.organizerStatusPill.textContent = message || messages.idle;
    }

    function setSummaryCounts(summary = {}) {
      // Summary counters are presentation state derived from the latest result
      // envelope. They should not become a second source of organizer truth.
      if (elements.organizerScanned) {
        elements.organizerScanned.textContent = String(summary.scannedTotal ?? 0);
      }
      if (elements.organizerVideoTotal) {
        elements.organizerVideoTotal.textContent = String(summary.videoTotal ?? 0);
      }
      if (elements.organizerMatched) {
        elements.organizerMatched.textContent = String(summary.qualifiedVideo ?? 0);
      }
      if (elements.organizerMovedWaiting) {
        elements.organizerMovedWaiting.textContent = String(summary.movedToWaiting ?? 0);
      }
      if (elements.organizerMovedDelete) {
        elements.organizerMovedDelete.textContent = String(summary.movedToDelete ?? 0);
      }
      if (elements.organizerFailed) {
        elements.organizerFailed.textContent = String(summary.failedOperations ?? 0);
      }
    }

    function bindOpenReport(button, filePath) {
      bindAsyncClick(button, async () => {
        await desktopApi.openPath(filePath);
      });
    }

    function setSummaryMessage(message) {
      if (elements.organizerSummaryMessage) {
        elements.organizerSummaryMessage.textContent = message || messages.idle;
      }
    }

    function toSafeNumber(value, fallback = 0) {
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : fallback;
    }

    function clampNumber(value, minValue, maxValue) {
      return Math.min(maxValue, Math.max(minValue, value));
    }

    function buildRatio(processed, total, fallback = 0) {
      if (total <= 0) {
        return fallback;
      }
      return clampNumber(processed / total, 0, 1);
    }

    function buildProgressHeadline(percent, stageIndex) {
      return `已整理：${percent}% 当前阶段：${stageIndex}/${ORGANIZER_TOTAL_STAGES}`;
    }

    function buildIdleSummary() {
      return `已整理：0% 当前阶段：0/${ORGANIZER_TOTAL_STAGES}\n正在执行：等待开始整理`;
    }

    function buildCompletedSummary(summary = {}, dryRun = false) {
      const completionLabel = dryRun ? '预览完成' : '整理完成';
      return `${buildProgressHeadline(100, ORGANIZER_TOTAL_STAGES)}\n${completionLabel}：待整理 ${
        summary.movedToWaiting || 0
      } 个，待删除 ${summary.movedToDelete || 0} 个，含开头广告 ${summary.movedToIntroAd || 0} 个，直接删除 ${
        summary.deletedDirectly || 0
      } 个，遗漏番号 ${summary.missingCodeCount || 0} 条。`;
    }

    function buildRunningSummary(percent, stageIndex, actionLabel) {
      return `${buildProgressHeadline(percent, stageIndex)}\n正在执行：${actionLabel}`;
    }

    function buildOrganizerProgressView(progress = {}) {
      const phase = String(progress.phase || '').trim();
      const organizerPhases =
        progressSchema && progressSchema.ORGANIZER_PROGRESS_PHASES ? progressSchema.ORGANIZER_PROGRESS_PHASES : {};
      const total = toSafeNumber(progress.total, 0);
      const processed = toSafeNumber(progress.processed, 0);
      const adFileAction = normalizeAdFileAction(progress.adFileAction);

      let completedStagesBefore = 0;
      let stageIndex = 0;
      let stageProgress = 0;
      let actionLabel = '';

      if (phase === organizerPhases.starting || phase === 'starting') {
        completedStagesBefore = 0;
        stageIndex = 1;
        stageProgress = 0.25;
        actionLabel = '读取整理配置、准备目录';
      } else if (phase === organizerPhases.scanStart || phase === organizerPhases.scanProgress || phase === 'scan-start' || phase === 'scan-progress') {
        completedStagesBefore = 1;
        stageIndex = 2;
        stageProgress = buildRatio(processed, total, phase === organizerPhases.scanStart || phase === 'scan-start' ? 0 : 0.2);
        actionLabel = '扫描目录、识别有效视频';
      } else if (phase === organizerPhases.scanCompleted || phase === 'scan-completed') {
        completedStagesBefore = 1;
        stageIndex = 2;
        stageProgress = 1;
        actionLabel = '扫描完成、生成待整理名单';
      } else if (phase === organizerPhases.waitingStart || phase === organizerPhases.waitingProgress || phase === 'waiting-start' || phase === 'waiting-progress') {
        const ratio = buildRatio(processed, total, phase === organizerPhases.waitingStart || phase === 'waiting-start' ? 0 : 0.2);
        if (ratio < 0.5) {
          completedStagesBefore = 2;
          stageIndex = 3;
          stageProgress = ratio * 2;
          actionLabel = '视频改名';
        } else {
          completedStagesBefore = 3;
          stageIndex = 4;
          stageProgress = (ratio - 0.5) * 2;
          actionLabel = '移入待整理';
        }
      } else if (phase === organizerPhases.deleteStart || phase === organizerPhases.deleteProgress || phase === 'delete-start' || phase === 'delete-progress') {
        completedStagesBefore = 4;
        stageIndex = 5;
        stageProgress = buildRatio(processed, total, phase === organizerPhases.deleteStart || phase === 'delete-start' ? 0 : 0.25);
        actionLabel = adFileAction === 'delete-directly' ? '删除视频、清理广告文件' : '移入待删除、归档广告文件';
      } else if (phase === organizerPhases.introAdStart || phase === organizerPhases.introAdProgress || phase === 'intro-ad-start' || phase === 'intro-ad-progress') {
        completedStagesBefore = 5;
        stageIndex = 6;
        stageProgress = buildRatio(processed, total, phase === organizerPhases.introAdStart || phase === 'intro-ad-start' ? 0 : 0.25);
        actionLabel = '识别开头广告、复核并输出报告';
      } else if (phase === organizerPhases.completed || phase === 'completed') {
        completedStagesBefore = 5;
        stageIndex = 6;
        stageProgress = 1;
        actionLabel = '整理完成';
      } else {
        return null;
      }

      const percent = clampNumber(
        Math.round(((completedStagesBefore + clampNumber(stageProgress, 0, 1)) / ORGANIZER_TOTAL_STAGES) * 100),
        stageIndex > 0 ? 1 : 0,
        100
      );

      return {
        percent,
        stageIndex,
        actionLabel,
        headline: buildProgressHeadline(percent, stageIndex),
        summaryText: buildRunningSummary(percent, stageIndex, actionLabel)
      };
    }

    function applyOrganizerHeroCopy() {
      // Hero copy remains a shell concern so feature controllers and backend
      // services do not have to carry display-only onboarding text.
      if (elements.organizerHeroSubtitle) {
        elements.organizerHeroSubtitle.textContent = organizerHeroText.subtitle;
      }

      if (elements.organizerHeroTip) {
        elements.organizerHeroTip.textContent = organizerHeroText.tip;
      }
    }

    function buildProgressMessage(progress = {}) {
      if (progressSchema && typeof progressSchema.buildProgressMessage === 'function') {
        return progressSchema.buildProgressMessage(progress);
      }
      return '';
    }

    function renderReviewPanel(result = null) {
      // Review rendering stays delegated to the dedicated view so this
      // controller keeps orchestration/state ownership rather than DOM detail.
      organizerReviewView.renderReviewPanel(elements.organizerReviewPanel, result, {
        onBindOpenReport: bindOpenReport
      });
    }

    async function showFirstLaunchGuideIfNeeded() {
      safeLocalStorageSet(STORAGE_KEYS.organizerGuideShown, '1');
    }

    // Progress text is now schema-driven. Keep only the current implementation
    // so organizer and learning progress do not maintain duplicate renderers.
    function applyRuntimeProgress(progress = {}) {
      const scope = String(progress.scope || '');
      const phase = String(progress.phase || '');

      if (scope === 'organizer') {
        if (elements.organizerScanned && Number.isFinite(Number(progress.processed))) {
          elements.organizerScanned.textContent = String(progress.processed);
        }
        if (elements.organizerVideoTotal && Number.isFinite(Number(progress.videoTotal))) {
          elements.organizerVideoTotal.textContent = String(progress.videoTotal);
        }
        if (elements.organizerMatched && Number.isFinite(Number(progress.qualifiedVideo))) {
          elements.organizerMatched.textContent = String(progress.qualifiedVideo);
        }
        if (elements.organizerMovedWaiting && Number.isFinite(Number(progress.processed)) && phase.startsWith('waiting')) {
          elements.organizerMovedWaiting.textContent = String(progress.processed);
        }
        if (elements.organizerMovedDelete && Number.isFinite(Number(progress.processed)) && phase.startsWith('delete')) {
          elements.organizerMovedDelete.textContent = String(progress.processed);
        }
      }

      const progressView = buildOrganizerProgressView(progress);
      if (progressView) {
        setStatus('running', progressView.headline);
        setSummaryMessage(progressView.summaryText);
        return;
      }

      const summaryText = buildProgressMessage(progress);
      if (summaryText) {
        setSummaryMessage(summaryText);
      }
    }

    function setActionButtonState() {
      const disabled = state.running;
      [
        elements.organizerStartButton,
        elements.organizerPreviewButton,
        elements.organizerLoadCodesButton,
        elements.organizerUseLatestOutputButton,
        elements.organizerLearningCodes,
        elements.organizerImportAdSamplesButton,
        elements.organizerHelpImportAdButton,
        elements.organizerImportNormalSamplesButton,
        elements.organizerHelpImportNormalButton,
        elements.organizerLearnAdByCodesButton,
        elements.organizerHelpLearnAdButton,
        elements.organizerLearnNormalByCodesButton,
        elements.organizerHelpLearnNormalButton,
        elements.organizerRefreshLearningSummaryButton,
        elements.organizerRefreshDependencyButton,
        elements.organizerAdFileActionMove,
        elements.organizerAdFileActionDelete,
        elements.organizerAdDetectionEnabled,
        elements.organizerAdDetectionEnable,
        elements.organizerAdDetectionDisable,
        elements.organizerAdModelType
      ].forEach((element) => setDisabled(element, disabled));
      if (dependencyController) {
        dependencyController.syncDependencyButtonState();
      }
      applyAdDetectionUiState();
    }

    function isAdDetectionEnabled() {
      return learningController.isAdDetectionEnabled();
    }
    function applyAdDetectionUiState() {
      learningController.applyAdDetectionUiState();
    }
    function getLearningConfig() {
      return learningController.getLearningConfig();
    }
    function getSelectedAdFileAction() {
      if (elements.organizerAdFileActionDelete && elements.organizerAdFileActionDelete.checked) {
        return 'delete-directly';
      }
      if (elements.organizerAdFileActionMove && elements.organizerAdFileActionMove.checked) {
        return 'move-to-delete';
      }
      return 'move-to-delete';
    }

    function normalizeAdFileAction(rawValue) {
      if (progressSchema && typeof progressSchema.normalizeAdFileAction === 'function') {
        return progressSchema.normalizeAdFileAction(rawValue);
      }
      return String(rawValue || '').trim() === 'delete-directly' ? 'delete-directly' : 'move-to-delete';
    }

    function getAdFileActionLabel(action) {
      return action === 'delete-directly' ? '直接删除广告文件' : '移入待删除';
    }

    function buildOrganizerProgressSummary(progress = {}) {
      const progressView = buildOrganizerProgressView(progress);
      return progressView ? progressView.summaryText : buildProgressMessage(progress);
    }

    // Organizer still keeps one compatibility textbox for imported crawl artifacts.
    // The value may be an organizer snapshot, a filmData.json file, or a legacy
    // crawl output directory. Bridge-side parsing owns the path resolution rules.
    //
    // Important boundary:
    // - preloadedExpected is the renderer-side source of truth
    // - crawlOutputDir is the fallback read-only import location
    // Renderer should forward the snapshot bundle directly instead of
    // re-expanding duplicate expectedCodes fields on the main Wails path.
    function getSettings(dryRun) {
      const learningConfig = getLearningConfig();
      const inputState =
        crawlOutputController && typeof crawlOutputController.getCurrentOrganizerInputState === 'function'
          ? crawlOutputController.getCurrentOrganizerInputState()
          : {
              crawlOutputDir: String(
                elements.organizerCrawlOutput && elements.organizerCrawlOutput.value
                  ? elements.organizerCrawlOutput.value
                  : ''
              ).trim(),
              preloadedExpected: null
            };

      return {
        rootPath: String(elements.organizerRoot && elements.organizerRoot.value ? elements.organizerRoot.value : '').trim(),
        minSizeMB: toSafeInteger(elements.organizerMinSize && elements.organizerMinSize.value, 100, 1),
        suffix: String(elements.organizerSuffix && elements.organizerSuffix.value ? elements.organizerSuffix.value : '').trim() || '-A',
        videoExtensions:
          String(
            elements.organizerVideoExtensions && elements.organizerVideoExtensions.value
              ? elements.organizerVideoExtensions.value
              : ''
          ).trim() || 'mp4, mkv, avi, mov, flv, wmv, ts, m4v, iso',
        adFileAction: normalizeAdFileAction(getSelectedAdFileAction()),
        dryRun,
        includeSubdirectories: Boolean(
          elements.organizerIncludeSubdirectories && elements.organizerIncludeSubdirectories.checked
        ),
        strictExpectedCodes: Boolean(elements.organizerStrictCodeMatch && elements.organizerStrictCodeMatch.checked),
        preloadedExpected: inputState.preloadedExpected,
        crawlOutputDir: inputState.crawlOutputDir,
        adDetectionEnabled: learningConfig.adDetectionEnabled,
        adModelType: learningConfig.adModelType,
        adThreshold: learningConfig.adThreshold,
        adKeywords: learningConfig.adKeywords,
        alistBaseURL: String(elements.organizerAlistUrl && elements.organizerAlistUrl.value ? elements.organizerAlistUrl.value : '').trim()
      };
    }

    function validateSettings(settings) {
      if (!settings.rootPath) {
        throw new Error(messages.rootRequired);
      }

      if (!Number.isFinite(settings.minSizeMB) || settings.minSizeMB < 1) {
        throw new Error(messages.minSizeInvalid);
      }

      if (!settings.crawlOutputDir) {
        throw new Error(messages.crawlOutputRequired);
      }

      if (
        settings.strictExpectedCodes &&
        !settings.preloadedExpected &&
        (!settings.crawlOutputDir || !String(settings.crawlOutputDir).trim())
      ) {
        throw new Error(messages.codeRequired);
      }
    }

    async function runOrganizerTask(dryRun) {
      // Organizer 页面总控边界：
      // 1) 收集并校验页面设置
      // 2) 在需要时同步 AI 学习模型 / 依赖状态
      // 3) 调用 desktopApi.runOrganizer()
      // 4) 用返回结果刷新摘要、日志、复盘面板
      if (state.running) {
        return;
      }

      try {
        const settings = getSettings(dryRun);
        validateSettings(settings);
        if (!dryRun && settings.adFileAction === 'delete-directly') {
          const confirmed = globalThis.confirm(
            '你已选择“直接删除广告文件”。此操作不可撤销，是否继续？'
          );
          if (!confirmed) {
            appendLogLine(elements.organizerLogView, 'warn', '用户取消操作（未确认直接删除）。');
            return;
          }
        }
        if (settings.adDetectionEnabled) {
          await syncAdLearningModel({ logSuccess: false });
          await dependencyController.ensureAiDependenciesReady();
        }

        state.running = true;
        state.activeTask = 'organizer';
        setActionButtonState();
        setStatus('running', buildProgressHeadline(1, 1));
        setSummaryMessage(buildRunningSummary(1, 1, '读取整理配置、准备目录'));
        appendLogLine(
          elements.organizerLogView,
          'info',
          `${
            dryRun ? '开始预览扫描（不移动文件）...' : '开始执行整理（将处理文件）...'
          } 广告处理方式：${getAdFileActionLabel(settings.adFileAction)}。`
        );

        const result = await desktopApi.runOrganizer(settings);
        state.latestResult = result || null;
        const summary = result && result.summary ? result.summary : {};
        setSummaryCounts(summary);
        organizerReviewView.renderReportFiles(elements.organizerReportPaths, result && result.reportFiles ? result.reportFiles : [], {
          onBindOpenReport: bindOpenReport
        });
        renderReviewPanel(result);

        const finishMessage = dryRun ? messages.previewComplete : messages.complete;
        setSummaryMessage(buildCompletedSummary(summary, dryRun));
        appendLogLine(elements.organizerLogView, 'info', finishMessage);
        setStatus('completed', buildProgressHeadline(100, ORGANIZER_TOTAL_STAGES));
      } catch (error) {
        const message = getErrorMessage(error);
        appendLogLine(elements.organizerLogView, 'error', message);
        setSummaryMessage(message);
        setStatus('error', '整理异常');
      } finally {
        state.running = false;
        state.activeTask = '';
        setActionButtonState();
      }
    }

    function bindEvents() {
      // 本文件只绑定 organizer 页面上的跨域动作。
      // 更细的子域行为分别留在 dependency / learning / crawl-output 子控制器。
      if (eventsBound) {
        return;
      }

      eventsBound = true;
      bindAsyncClick(elements.organizerBrowseRootButton, async () => {
        const selected = await desktopApi.chooseOrganizerRoot();
        if (!selected) {
          return;
        }

        elements.organizerRoot.value = selected;
        appendOrganizerLog('info', `已选择目标目录：${selected}`);
      });

      bindAsyncClick(elements.organizerRefreshDependencyButton, async () => {
        await dependencyController.refreshDependencyStatus(true);
      });

      bindAsyncClick(
        elements.organizerInstallFfmpegButton,
        async () => {
          await dependencyController.installDependency('ffmpeg');
        },
        () => {
          // Error already logged by installDependency.
        }
      );

      bindAsyncClick(
        elements.organizerInstallOnnxButton,
        async () => {
          await dependencyController.installDependency('onnx');
        },
        () => {
          // Error already logged by installDependency.
        }
      );

      bindAsyncClick(elements.organizerDeleteDependencyButton, async () => {
        await dependencyController.deleteDependencyState();
      });

      bindOpenOrganizerPathButton(elements.organizerOpenRootButton, 'root');
      bindOpenOrganizerPathButton(elements.organizerOpenWaitingButton, 'waiting');
      bindOpenOrganizerPathButton(elements.organizerOpenDeleteButton, 'delete');
      bindOpenOrganizerPathButton(elements.organizerOpenIntroAdButton, 'intro-ad');
      bindOpenOrganizerPathButton(elements.organizerOpenReportsButton, 'reports');

      bindAsyncClick(elements.organizerStartButton, async () => {
        await runOrganizerTask(Boolean(elements.organizerDryRun && elements.organizerDryRun.checked));
      });

      bindAsyncClick(elements.organizerPreviewButton, async () => {
        await runOrganizerTask(true);
      });

      if (elements.organizerClearLogButton) {
        elements.organizerClearLogButton.addEventListener('click', () => {
          if (organizerLogBuffer) {
            organizerLogBuffer.clear();
          } else {
            clearChildren(elements.organizerLogView);
          }
          appendOrganizerLog('info', '整理日志已清空。');
        });
      }

      if (elements.organizerAlistUrl) {
        elements.organizerAlistUrl.addEventListener('change', () => {
          safeLocalStorageSet('jav.organizer.alist.url', elements.organizerAlistUrl.value);
        });
      }
    }

    function bindIpcEvents() {
      if (ipcEventsBound) {
        return;
      }

      ipcEventsBound = true;
      if (typeof desktopApi.onDependencyInstallProgress === 'function') {
        desktopApi.onDependencyInstallProgress((payload) => {
          dependencyController.applyInstallProgress(payload);
        });
      }

      desktopApi.onOrganizerLog((payload) => {
        if (!payload || !payload.message) {
          return;
        }

        appendLogLine(elements.organizerLogView, payload.level || 'info', payload.message, payload.timestamp);
      });

      desktopApi.onOrganizerState((payload) => {
        if (!payload) {
          return;
        }

        if (payload.progress) {
          applyRuntimeProgress(payload.progress);
        }

        const nextMessage = String(payload.message || '').trim();
        if (payload.status === 'error') {
          setStatus('error', '整理异常');
          if (nextMessage) {
            setSummaryMessage(nextMessage);
          }
        } else if (payload.status === 'completed') {
          const payloadSummary =
            payload.summary || (state.latestResult && state.latestResult.summary) || {};
          setStatus('completed', buildProgressHeadline(100, ORGANIZER_TOTAL_STAGES));
          setSummaryMessage(buildCompletedSummary(payloadSummary, Boolean(state.latestResult && state.latestResult.dryRun)));
        } else if (!payload.progress && payload.status === 'idle') {
          setStatus('idle', messages.idle);
          setSummaryMessage(buildIdleSummary());
        }

        if (payload.status === 'completed') {
          const mergedResult = {
            ...(state.latestResult && typeof state.latestResult === 'object' ? state.latestResult : {}),
            summary: payload.summary || (state.latestResult && state.latestResult.summary) || {},
            reportMap: payload.reportMap || (state.latestResult && state.latestResult.reportMap) || {},
            reportFiles: payload.reportFiles || (state.latestResult && state.latestResult.reportFiles) || [],
            missingDownload: payload.missingDownload || (state.latestResult && state.latestResult.missingDownload) || {},
            adRisk: payload.adRisk || (state.latestResult && state.latestResult.adRisk) || {}
          };
          state.latestResult = mergedResult;
          renderReviewPanel(mergedResult);
        }
      });
    }

    function bootstrap() {
      if (bootstrapCompleted) {
        return Promise.resolve();
      }

      if (bootstrapPromise) {
        return bootstrapPromise;
      }

      // Organizer bootstrap is intentionally one-shot because it constructs
      // child controllers, restores saved settings, and seeds preload snapshots.
      // Re-running it after the user starts editing would reapply old settings
      // and make organizer bugs look like task issues instead of UI re-entry.
      bootstrapPromise = Promise.resolve()
        .then(async () => {
          // Initialization order is part of the runtime contract:
          // 1) create child controllers
          // 2) restore persisted settings
          // 3) bind DOM + IPC events
          // 4) render current organizer state once
          //
          // If this order changes, stale preload snapshots or duplicated event
          // bindings can masquerade as organizer business failures.
          const settings = await desktopApi.getSettings();
          if (!dependencyControllerFactory || !learningControllerFactory || !crawlOutputControllerFactory) {
            throw new Error('Organizer controller dependencies are not ready.');
          }
          learningController = learningControllerFactory.createOrganizerLearningController({
            elements,
            desktopApi,
            state,
            messages,
            appendLogLine,
            getErrorMessage,
            normalizeKeywordText,
            normalizeAdModelType,
            toSafeInteger,
            setStatus,
            setSummaryMessage,
            requestSyncActionButtons: () => setActionButtonState(),
            requestSyncDependencyStatus: () => {
              if (dependencyController && typeof dependencyController.renderDependencyStatus === 'function') {
                dependencyController.renderDependencyStatus(state.dependencyStatus);
              }
            }
          });
          crawlOutputController = crawlOutputControllerFactory.createOrganizerCrawlOutputController({
            elements,
            desktopApi,
            state,
            messages,
            appendLogLine,
            getErrorMessage
          });
          // Organizer AI dependency state is now an optional compatibility surface.
          // Keep the enable/disable truth owned by learningController and let the
          // dependency panel render from that single mode switch.
          dependencyController = dependencyControllerFactory.createOrganizerDependencyController({
            elements,
            desktopApi,
            state,
            appendLogLine,
            getErrorMessage,
            isAdDetectionEnabled: () => learningController.isAdDetectionEnabled(),
            getLogView: () => elements.organizerLogView,
            requestRenderAdDetectionUiState: () => learningController.applyAdDetectionUiState()
          });
          applyOrganizerHeroCopy();
          if (elements.organizerRoot) {
            elements.organizerRoot.value = settings.organizerRoot || '';
          }
          if (elements.organizerMinSize) {
            elements.organizerMinSize.value = String(toSafeInteger(settings.organizerMinSizeMB, 100, 1));
          }
          if (elements.organizerSuffix) {
            elements.organizerSuffix.value = String(settings.organizerSuffix || '-A');
          }
          if (elements.organizerVideoExtensions) {
            elements.organizerVideoExtensions.value = String(
              settings.organizerVideoExtensions || 'mp4, mkv, avi, mov, flv, wmv, ts, m4v, iso'
            );
          }
          const normalizedAdFileAction = normalizeAdFileAction(settings.organizerAdFileAction);
          if (elements.organizerAdFileActionMove) {
            elements.organizerAdFileActionMove.checked = normalizedAdFileAction !== 'delete-directly';
          }
          if (elements.organizerAdFileActionDelete) {
            elements.organizerAdFileActionDelete.checked = normalizedAdFileAction === 'delete-directly';
          }
          if (elements.organizerDryRun) {
            elements.organizerDryRun.checked = Boolean(settings.organizerDryRun);
          }
          if (elements.organizerIncludeSubdirectories) {
            elements.organizerIncludeSubdirectories.checked = settings.organizerIncludeSubdirectories !== false;
          }
          if (elements.organizerStrictCodeMatch) {
            elements.organizerStrictCodeMatch.checked = settings.organizerStrictCodeMatch !== false;
          }
          if (elements.organizerCrawlOutput) {
            elements.organizerCrawlOutput.value =
              String(settings.organizerCrawlOutput || '').trim() || String(settings.output || '').trim();
          }
          // Keep organizer's loaded code snapshot aligned with the restored
          // crawl-output path before the user starts a new run.
          if (crawlOutputController && typeof crawlOutputController.getLoadedSnapshotForOutput === 'function') {
            crawlOutputController.getLoadedSnapshotForOutput(
              elements.organizerCrawlOutput ? elements.organizerCrawlOutput.value : ''
            );
          }
          learningController.applySettings(settings);
          if (elements.organizerFfmpegDownloadUrl) {
            elements.organizerFfmpegDownloadUrl.value = String(settings.organizerFfmpegDownloadUrl || '');
          }
          if (elements.organizerOnnxDownloadUrl) {
            elements.organizerOnnxDownloadUrl.value = String(settings.organizerOnnxDownloadUrl || '');
          }
          if (elements.organizerAlistUrl) {
            elements.organizerAlistUrl.value = String(settings.organizerAlistBaseURL || '');
          }

          // Restore custom URLs from localStorage only as a compatibility
          // fallback. Long-term ownership remains the Go settings snapshot.
          const savedFfmpegUrl = safeLocalStorageGet('jav.organizer.ffmpeg.download.url', '');
          const savedOnnxUrl = safeLocalStorageGet('jav.organizer.onnx.download.url', '');
          const savedAlistUrl = safeLocalStorageGet('jav.organizer.alist.url', '');
          if (!elements.organizerFfmpegDownloadUrl.value && savedFfmpegUrl) {
            elements.organizerFfmpegDownloadUrl.value = savedFfmpegUrl;
          }
          if (!elements.organizerOnnxDownloadUrl.value && savedOnnxUrl) {
            elements.organizerOnnxDownloadUrl.value = savedOnnxUrl;
          }
          if (!elements.organizerAlistUrl.value && savedAlistUrl) {
            elements.organizerAlistUrl.value = savedAlistUrl;
          }

          bindEvents();
          learningController.bindEvents();
          crawlOutputController.bindEvents();
          bindIpcEvents();
          setSummaryCounts({});
          organizerReviewView.renderReportFiles(elements.organizerReportPaths, [], {
            onBindOpenReport: bindOpenReport
          });
          renderReviewPanel(null);
          dependencyController.renderDependencyStatus(null);
          setSummaryMessage(buildIdleSummary());
          setStatus('idle', messages.idle);
          crawlOutputController.resetCodeMetaView();
          learningController.renderLearningSummary(null);
          appendLogLine(elements.organizerLogView, 'info', messages.ready);
          learningController.applyAdDetectionUiState();

          if (learningController.isAdDetectionEnabled()) {
            await learningController.refreshAdLearningSummary(false).catch(() => {});
            await dependencyController.refreshDependencyStatus(false).catch(() => {});
          }
          await crawlOutputController.applyLatestCrawlOutput().catch(() => {});
          await showFirstLaunchGuideIfNeeded().catch(() => {});
          bootstrapCompleted = true;
        })
        .catch((error) => {
          bootstrapPromise = null;
          throw error;
        });

      return bootstrapPromise;
    }

    return {
      bootstrap
    };
  }

  globalScope.desktopOrganizerController = {
    createOrganizerController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/subscriptionListView.js ==== */
// Subscription list view owns DOM rendering for subscription cards and empty
// state. Business actions stay in the controller and are passed in as callbacks.
//
// Ownership summary:
// 1) render normalized subscription cards and empty states
// 2) expose controller-provided button bindings
// 3) keep card copy/layout shaping local to the subscription workspace view
//
// Crawl handoff, refresh policy, and persistence remain controller/service work.
//
// File map for maintainers:
// 1) date/status/meta formatting helpers
// 2) empty-state render helper
// 3) subscription card/list DOM builders
// 4) rank/order decoration helpers
(function initializeSubscriptionListView(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const clearChildren = rendererHelpers.clearChildren;

  if (!clearChildren) {
    throw new Error('desktopRendererHelpers must be loaded before subscriptionListView');
  }

  function formatDateTime(value) {
    const rawValue = String(value || '').trim();
    if (!rawValue) {
      return '';
    }

    const parsed = new Date(rawValue);
    if (Number.isNaN(parsed.getTime())) {
      return rawValue;
    }

    return parsed.toLocaleString('zh-CN', { hour12: false });
  }

  function resolveBaselineCount(item) {
    // For manual subscriptions, show user's declared total
    if (item && item.sourceType === 'manual') {
      const declared = Number(item.manualDeclaredTotal);
      if (Number.isFinite(declared) && declared >= 0) {
        return declared;
      }
    }

    const directValue = Number(item && item.baselineCount);
    if (Number.isFinite(directValue) && directValue >= 0) {
      return directValue;
    }

    const syncedValue = Number(item && item.syncedCount);
    if (Number.isFinite(syncedValue) && syncedValue >= 0) {
      return syncedValue;
    }

    if (Array.isArray(item && item.baselineCodes)) {
      return item.baselineCodes.length;
    }

    return 0;
  }

  function resolveCurrentCount(item) {
    const directValue = Number(item && item.currentObservedCount);
    if (Number.isFinite(directValue) && directValue >= 0) {
      return directValue;
    }

    const currentValue = Number(item && item.currentCount);
    if (Number.isFinite(currentValue) && currentValue >= 0) {
      return currentValue;
    }

    return resolveBaselineCount(item) + Number(item && item.pendingCount || 0);
  }

  function buildStatusChip(item) {
    const chip = document.createElement('span');
    const hasPending = Number(item && item.pendingCount || 0) > 0;
    const hasError = String(item && item.lastError || '').trim() !== '';
    chip.className = `subscription-status-chip ${hasError ? 'error' : hasPending ? 'updated' : 'idle'}`;
    chip.textContent = hasError ? '检查失败' : hasPending ? `发现更新 +${item.pendingCount}` : '正常';
    return chip;
  }

  function buildMetaText(item) {
    const segments = [
      `基线 ${resolveBaselineCount(item)} 部`,
      `当前 ${resolveCurrentCount(item)} 部`,
      `待抓 ${Number(item && item.pendingCount || 0)} 部`,
      `每页 ${Number(item && item.itemsPerPage || 30)} 条`
    ];

    if (item && item.lastCheckedAt) {
      segments.push(`最近检查 ${formatDateTime(item.lastCheckedAt)}`);
    }

    return segments.join(' · ');
  }

  function createMetric(label, value) {
    const metric = document.createElement('div');
    metric.className = 'subscription-metric';

    const labelNode = document.createElement('span');
    labelNode.textContent = label;

    const valueNode = document.createElement('strong');
    valueNode.textContent = String(value);

    metric.appendChild(labelNode);
    metric.appendChild(valueNode);
    return metric;
  }

  function resolveRankLabel(index, item) {
    const explicitRank = Number(item && item.rankOrder);
    if (Number.isFinite(explicitRank) && explicitRank > 0) {
      return String(explicitRank);
    }
    return String(Number(index) + 1);
  }

  function renderEmptyList(container, message = '当前还没有任何 AV 订阅。') {
    if (!container) {
      return;
    }

    clearChildren(container);
    const empty = document.createElement('p');
    empty.className = 'subscription-empty';
    empty.textContent = message;
    container.appendChild(empty);
  }

  // View builds one passive card from normalized subscription data. All
  // crawler handoff, delete confirmation, refresh, and sync policy stay in the
  // controller; the view only exposes button binding hooks.
  function createSubscriptionCard(item, index, callbacks = {}) {
    const card = document.createElement('article');
    card.className = 'subscription-card';
    card.dataset.id = String(item && item.id ? item.id : '');
    if (isSelected(callbacks, item)) {
      card.classList.add('is-active');
    }

    card.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest('button')) {
        return;
      }
      if (typeof callbacks.onSelect === 'function') {
        callbacks.onSelect(item);
      }
    });

    const head = document.createElement('div');
    head.className = 'subscription-card-head';

    const rankBadge = document.createElement('div');
    rankBadge.className = 'subscription-rank-badge';
    rankBadge.textContent = resolveRankLabel(index, item);
    head.appendChild(rankBadge);

    const titleWrap = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = item && item.actressName ? item.actressName : '未命名订阅';
    titleWrap.appendChild(title);

    const meta = document.createElement('p');
    meta.className = 'subscription-meta';
    meta.textContent = buildMetaText(item);
    titleWrap.appendChild(meta);

    head.appendChild(titleWrap);
    head.appendChild(buildStatusChip(item));
    card.appendChild(head);

    const metricGrid = document.createElement('div');
    metricGrid.className = 'subscription-metric-grid';
    metricGrid.appendChild(createMetric('基线番号', resolveBaselineCount(item)));
    metricGrid.appendChild(createMetric('当前总数', resolveCurrentCount(item)));
    metricGrid.appendChild(createMetric('待抓新增', Number(item && item.pendingCount || 0)));
    metricGrid.appendChild(createMetric('每页抓取', Number(item && item.itemsPerPage || 30)));
    card.appendChild(metricGrid);

    const urlBlock = document.createElement('div');
    urlBlock.className = 'subscription-url-block';
    const urlLabel = document.createElement('span');
    urlLabel.textContent = '订阅地址';
    const urlText = document.createElement('p');
    urlText.textContent = item && item.crawlUrl ? item.crawlUrl : '尚未保存地址';
    urlText.title = item && item.crawlUrl ? item.crawlUrl : '';
    urlBlock.appendChild(urlLabel);
    urlBlock.appendChild(urlText);
    card.appendChild(urlBlock);

    if (item && item.lastError) {
      const errorText = document.createElement('p');
      errorText.className = 'subscription-error-text';
      errorText.textContent = `最近异常：${item.lastError}`;
      card.appendChild(errorText);
    }

    const actions = document.createElement('div');
    actions.className = 'subscription-actions';

    const selectButton = document.createElement('button');
    selectButton.type = 'button';
    selectButton.className = 'ghost-button';
    selectButton.textContent = '选中';
    if (typeof callbacks.onSelect === 'function') {
      selectButton.addEventListener('click', () => callbacks.onSelect(item));
    }
    actions.appendChild(selectButton);

    const prepareCrawlButton = document.createElement('button');
    prepareCrawlButton.type = 'button';
    prepareCrawlButton.className = 'secondary-button subscription-update-crawl-button';
    prepareCrawlButton.textContent = '更新爬取';
    if (typeof callbacks.onPrepareCrawl === 'function') {
      prepareCrawlButton.addEventListener('click', () => callbacks.onPrepareCrawl(item));
    }
    actions.appendChild(prepareCrawlButton);

    const crawlMagnetButton = document.createElement('button');
    crawlMagnetButton.type = 'button';
    crawlMagnetButton.className = 'primary-button subscription-crawl-magnet-button';
    crawlMagnetButton.textContent = '抓取磁力';
    crawlMagnetButton.disabled = Number(item && item.pendingCount || 0) <= 0;
    if (typeof callbacks.onCrawlMagnet === 'function') {
      crawlMagnetButton.addEventListener('click', () => callbacks.onCrawlMagnet(item));
    }
    actions.appendChild(crawlMagnetButton);

    const syncButton = document.createElement('button');
    syncButton.type = 'button';
    syncButton.className = 'ghost-button';
    syncButton.textContent = '标记已同步';
    if (typeof callbacks.onBindSync === 'function') {
      callbacks.onBindSync(syncButton, item);
    }
    actions.appendChild(syncButton);

    const openButton = document.createElement('button');
    openButton.type = 'button';
    openButton.className = 'ghost-button';
    openButton.textContent = '打开地址';
    openButton.disabled = !String(item && item.crawlUrl || '').trim();
    if (typeof callbacks.onBindOpen === 'function') {
      callbacks.onBindOpen(openButton, item);
    }
    actions.appendChild(openButton);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'danger-button subscription-danger-button';
    deleteButton.textContent = '删除订阅';
    if (typeof callbacks.onBindDelete === 'function') {
      callbacks.onBindDelete(deleteButton, item);
    }
    actions.appendChild(deleteButton);

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.className = 'ghost-button';
    editButton.textContent = '修改';
    if (typeof callbacks.onEdit === 'function') {
      editButton.addEventListener('click', () => callbacks.onEdit(item));
    }
    actions.appendChild(editButton);

    card.appendChild(actions);
    return card;
  }

  function isSelected(callbacks, item) {
    return Boolean(callbacks && callbacks.selectedId && item && String(callbacks.selectedId) === String(item.id));
  }

  function renderSubscriptionList(container, items, callbacks = {}) {
    if (!container) {
      return;
    }

    const list = Array.isArray(items) ? items : [];
    if (list.length === 0) {
      renderEmptyList(container, callbacks.emptyMessage || '当前还没有任何 AV 订阅。');
      return;
    }

    clearChildren(container);
    const fragment = document.createDocumentFragment();
    list.forEach((item, index) => {
      fragment.appendChild(createSubscriptionCard(item, index, callbacks));
    });
    container.appendChild(fragment);
  }

  globalScope.desktopSubscriptionListView = {
    createSubscriptionCard,
    renderEmptyList,
    renderSubscriptionList
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/subscriptionController.js ==== */
// AV subscription V2 controller.
// This controller owns the rebuilt subscription workspace only:
// 1) import / manual baseline creation
// 2) update detection
// 3) pending-code crawl planning and execution handoff
//
// It does not reuse the old "count-only" refresh semantics or the older
// jump-back-to-crawler flow. The rebuilt workflow keeps the subscription UI in
// one place and lets the Go bridge own the durable state.
//
// File map for maintainers:
// 1) state projection and formatting helpers
// 2) subscription import / manual create / refresh / plan actions
// 3) recent crawl list projection and proxy/status helpers
// 4) event binding and bootstrap
(function initializeSubscriptionController(globalScope) {
  const rendererHelpers = globalScope.desktopRendererHelpers || {};
  const getErrorMessage = rendererHelpers.getErrorMessage;
  const toSafeInteger = rendererHelpers.toSafeInteger;
  const clearChildren = rendererHelpers.clearChildren;
  const appendTimestampedLogLine = rendererHelpers.appendTimestampedLogLine;
  const bindAsyncClickHelper = rendererHelpers.bindAsyncClick || null;
  const createBufferedLogAppender = rendererHelpers.createBufferedLogAppender || null;
  const SUBSCRIPTION_DEFAULT_PROXY = '127.0.0.1:7897';
  const SUBSCRIPTION_DEFAULT_PARALLEL = 2;
  const SUBSCRIPTION_DEFAULT_DELAY = 2;
  const SUBSCRIPTION_DEFAULT_TIMEOUT = 30000;
  const SUBSCRIPTION_PROXY_AUTO_CHECK_INTERVAL_MS = 30000;

  if (!getErrorMessage || !toSafeInteger || !clearChildren || !appendTimestampedLogLine) {
    throw new Error('desktopRendererHelpers must be loaded before subscriptionController');
  }

  function createSubscriptionController(options) {
    const { elements, desktopApi, uiText, formController } = options || {};
    const subscriptionListView = globalScope.desktopSubscriptionListView || null;
    const artifactInputHelperFactory = globalScope.desktopArtifactInputHelper || null;

    if (!subscriptionListView) {
      throw new Error('desktopSubscriptionListView is required before subscriptionController');
    }
    if (!artifactInputHelperFactory) {
      throw new Error('desktopArtifactInputHelper is required before subscriptionController');
    }

    const state = {
      subscriptions: [],
      recentCrawlOptions: [],
      selectedId: '',
      logs: [],
      pendingImportedJson: null,
      antiBlockReady: false,
      activeCrawlSession: null
    };

    function publishActiveSubscriptionCrawlSession(session) {
      // Let the shared crawler runtime view know when the public crawl feed is
      // temporarily owned by the AV-subscription bridge. The bridge still
      // reuses the main crawler execution path, but the visible logs/status
      // should stay inside the subscription workspace while this session lives.
      globalScope.__desktopActiveSubscriptionCrawlSession =
        session && typeof session === 'object' ? { ...session } : null;
    }

    const proxyValidationState = {
      timerId: null,
      autoTimerId: null,
      requestToken: 0,
      lastValue: '',
      lastStatus: 'empty'
    };

    const subscriptionLogBuffer =
      typeof createBufferedLogAppender === 'function'
        ? createBufferedLogAppender({
            logView: elements.subscriptionLogView,
            tagName: 'p'
          })
        : null;

    const artifactInputHelper = artifactInputHelperFactory.createArtifactInputHelper({
      labels: {
        snapshot: '订阅快照',
        fallback: '抓取结果输入'
      },
      latestInputOptions: {
        artifactKey: 'preferredCrawlProfilePath',
        artifactType: 'crawlProfile'
      },
      readCurrentValue: () => getCurrentSubscriptionArtifactInput(),
      writeCurrentValue: (artifactInput) => applySubscriptionArtifactInputValue(artifactInput)
    });

    function appendLog(level, message) {
      const text = String(message || '').trim();
      if (!text) {
        return;
      }

      state.logs.unshift({
        level: String(level || 'info').trim() || 'info',
        message: text,
        timestamp: new Date().toISOString()
      });
      state.logs = state.logs.slice(0, 120);

      if (subscriptionLogBuffer) {
        subscriptionLogBuffer.append(level, text, null);
        return;
      }
      appendTimestampedLogLine(elements.subscriptionLogView, level, text, null, { tagName: 'p' });
    }

    function setSummaryMessage(message) {
      if (elements.subscriptionSummaryMessage) {
        elements.subscriptionSummaryMessage.textContent = String(message || '等待检测订阅更新。').trim();
      }
    }

    function normalizeCount(value, fallback = 0) {
      return Math.max(0, toSafeInteger(value, fallback));
    }

    function parseTimestamp(value) {
      const raw = String(value || '').trim();
      if (!raw) {
        return 0;
      }
      const parsed = Date.parse(raw);
      return Number.isFinite(parsed) ? parsed : 0;
    }

    function normalizeText(value) {
      return String(value || '').trim();
    }

    function normalizeCodes(values) {
      const seen = new Set();
      const output = [];
      (Array.isArray(values) ? values : []).forEach((value) => {
        const code = normalizeText(value).toUpperCase();
        if (!code || seen.has(code)) {
          return;
        }
        seen.add(code);
        output.push(code);
      });
      return output;
    }

    function resolveSubscriptionBaselineCount(item) {
      // For manual subscriptions, show user's declared total as "基数"
      if (item && item.sourceType === 'manual') {
        const declared = normalizeCount(item.manualDeclaredTotal, -1);
        if (declared >= 0) {
          return declared;
        }
      }

      const directValue = normalizeCount(item && item.baselineCount, -1);
      if (directValue >= 0) {
        return directValue;
      }

      const syncedValue = normalizeCount(item && item.syncedCount, -1);
      if (syncedValue >= 0) {
        return syncedValue;
      }

      return normalizeCodes(item && item.baselineCodes).length;
    }

    function resolveSubscriptionCurrentCount(item) {
      const directValue = normalizeCount(item && item.currentObservedCount, -1);
      if (directValue >= 0) {
        return directValue;
      }

      const currentValue = normalizeCount(item && item.currentCount, -1);
      if (currentValue >= 0) {
        return currentValue;
      }

      return resolveSubscriptionBaselineCount(item) + normalizeCount(item && item.pendingCount, 0);
    }

    function sortSubscriptions(items) {
      return (Array.isArray(items) ? items : []).slice().sort((left, right) => {
        const pendingDiff = normalizeCount(right && right.pendingCount, 0) - normalizeCount(left && left.pendingCount, 0);
        if (pendingDiff !== 0) {
          return pendingDiff;
        }
        const updatedDiff = parseTimestamp(right && right.lastUpdatedAt) - parseTimestamp(left && left.lastUpdatedAt);
        if (updatedDiff !== 0) {
          return updatedDiff;
        }
        const leftName = normalizeText(left && left.actressName);
        const rightName = normalizeText(right && right.actressName);
        if (leftName !== rightName) {
          return leftName.localeCompare(rightName, 'zh-CN');
        }
        return normalizeText(left && left.id).localeCompare(normalizeText(right && right.id), 'zh-CN');
      });
    }

    function setSummaryCounts() {
      const list = Array.isArray(state.subscriptions) ? state.subscriptions : [];
      const total = list.length;
      const updated = list.filter((item) => normalizeCount(item.pendingCount, 0) > 0).length;
      const pending = list.reduce((sum, item) => sum + normalizeCount(item.pendingCount, 0), 0);
      const checked = list.filter((item) => normalizeText(item.lastCheckedAt)).length;

      if (elements.subscriptionStatTotal) elements.subscriptionStatTotal.textContent = String(total);
      if (elements.subscriptionStatTotalSide) elements.subscriptionStatTotalSide.textContent = String(total);
      if (elements.subscriptionStatUpdated) elements.subscriptionStatUpdated.textContent = String(updated);
      if (elements.subscriptionStatUpdatedSide) elements.subscriptionStatUpdatedSide.textContent = String(updated);
      if (elements.subscriptionStatPending) elements.subscriptionStatPending.textContent = String(pending);
      if (elements.subscriptionStatChecked) elements.subscriptionStatChecked.textContent = String(checked);
      if (elements.subscriptionStatCheckedSide) elements.subscriptionStatCheckedSide.textContent = String(checked);
    }

    function setSubscriptionCrawlerStatus(message) {
      if (elements.subscriptionCrawlerStatus) {
        elements.subscriptionCrawlerStatus.textContent = String(message || '待启动').trim() || '待启动';
      }
    }

    function clearActiveCrawlSession() {
      state.activeCrawlSession = null;
      publishActiveSubscriptionCrawlSession(null);
    }

    function setActiveCrawlSession(session) {
      state.activeCrawlSession = session && typeof session === 'object' ? { ...session } : null;
      publishActiveSubscriptionCrawlSession(state.activeCrawlSession);
    }

    function getActiveCrawlSession() {
      return state.activeCrawlSession && typeof state.activeCrawlSession === 'object'
        ? { ...state.activeCrawlSession }
        : null;
    }

    async function resolveSubscriptionDefaultOutputDir() {
      if (!desktopApi || typeof desktopApi.getIntegrationContext !== 'function') {
        return '';
      }

      try {
        const context = await desktopApi.getIntegrationContext();
        const appPath = normalizeText(context && context.appPath);
        return appPath ? `${appPath}\\AV订阅` : '';
      } catch (error) {
        appendLog('warn', `订阅默认输出目录初始化失败: ${getErrorMessage(error)}`);
        return '';
      }
    }

    function setSubscriptionProxyStatus(status, detailText = '') {
      const normalized = status === 'checking' || status === 'valid' || status === 'invalid' ? status : 'empty';
      proxyValidationState.lastStatus = normalized;

      const statusTextMap = {
        empty: '未检测',
        checking: '检测中...',
        valid: '代理正常',
        invalid: '代理失败'
      };
      const detailMap = {
        empty: '订阅抓取默认使用 127.0.0.1:7897，可手动修改。',
        checking: '正在检测订阅代理连通性，请稍候。',
        valid: '检测通过，可继续使用当前订阅代理。',
        invalid: '当前订阅代理不可用，请检查代理地址或代理软件状态。'
      };

      if (elements.subscriptionProxyStatus) {
        elements.subscriptionProxyStatus.className = `proxy-status-chip ${normalized}`;
        elements.subscriptionProxyStatus.textContent = statusTextMap[normalized];
      }
      if (elements.subscriptionProxyStatusDetail) {
        elements.subscriptionProxyStatusDetail.textContent =
          normalizeText(detailText) || detailMap[normalized];
      }
    }

    function applyDefaultSubscriptionProxy() {
      if (!elements.subscriptionCrawlerProxy) {
        return SUBSCRIPTION_DEFAULT_PROXY;
      }
      const resolved = normalizeText(elements.subscriptionCrawlerProxy.value) || SUBSCRIPTION_DEFAULT_PROXY;
      elements.subscriptionCrawlerProxy.value = resolved;
      return resolved;
    }

    function resolveSubscriptionProxyValue() {
      return normalizeText(elements.subscriptionCrawlerProxy && elements.subscriptionCrawlerProxy.value) || SUBSCRIPTION_DEFAULT_PROXY;
    }

    function applySubscriptionCrawlerDefaults() {
      if (elements.subscriptionCrawlerParallel) {
        elements.subscriptionCrawlerParallel.value = String(
          normalizeCount(elements.subscriptionCrawlerParallel.value, SUBSCRIPTION_DEFAULT_PARALLEL) || SUBSCRIPTION_DEFAULT_PARALLEL
        );
      }
      if (elements.subscriptionCrawlerDelay) {
        elements.subscriptionCrawlerDelay.value = String(
          normalizeCount(elements.subscriptionCrawlerDelay.value, SUBSCRIPTION_DEFAULT_DELAY)
        );
      }
      if (elements.subscriptionCrawlerTimeout) {
        elements.subscriptionCrawlerTimeout.value = String(
          Math.max(1000, normalizeCount(elements.subscriptionCrawlerTimeout.value, SUBSCRIPTION_DEFAULT_TIMEOUT) || SUBSCRIPTION_DEFAULT_TIMEOUT)
        );
      }
    }

    function resolveSubscriptionCrawlerParallel() {
      return Math.max(1, normalizeCount(elements.subscriptionCrawlerParallel && elements.subscriptionCrawlerParallel.value, SUBSCRIPTION_DEFAULT_PARALLEL) || SUBSCRIPTION_DEFAULT_PARALLEL);
    }

    function resolveSubscriptionCrawlerDelay() {
      return Math.max(0, normalizeCount(elements.subscriptionCrawlerDelay && elements.subscriptionCrawlerDelay.value, SUBSCRIPTION_DEFAULT_DELAY));
    }

    function resolveSubscriptionCrawlerTimeout() {
      return Math.max(1000, normalizeCount(elements.subscriptionCrawlerTimeout && elements.subscriptionCrawlerTimeout.value, SUBSCRIPTION_DEFAULT_TIMEOUT) || SUBSCRIPTION_DEFAULT_TIMEOUT);
    }

    function resolveSubscriptionCloudflareEnabled() {
      if (!elements.subscriptionCrawlerCloudflare) {
        return true;
      }
      return Boolean(elements.subscriptionCrawlerCloudflare.checked);
    }

    function buildSubscriptionRuntimePayload(extra = {}) {
      return {
        ...extra,
        proxy: resolveSubscriptionProxyValue(),
        parallel: resolveSubscriptionCrawlerParallel(),
        delay: resolveSubscriptionCrawlerDelay(),
        timeout: resolveSubscriptionCrawlerTimeout(),
        cloudflare: resolveSubscriptionCloudflareEnabled(),
        secondValidation: true
      };
    }

    function clearSubscriptionProxyValidationTimer() {
      if (!proxyValidationState.timerId) {
        return;
      }
      clearTimeout(proxyValidationState.timerId);
      proxyValidationState.timerId = null;
    }

    function clearSubscriptionProxyAutoValidationTimer() {
      if (!proxyValidationState.autoTimerId) {
        return;
      }
      clearTimeout(proxyValidationState.autoTimerId);
      proxyValidationState.autoTimerId = null;
    }

    async function validateSubscriptionProxyValue(proxyValue, options = {}) {
      const trimmedValue = normalizeText(proxyValue);
      clearSubscriptionProxyValidationTimer();
      proxyValidationState.requestToken += 1;
      const requestToken = proxyValidationState.requestToken;
      proxyValidationState.lastValue = trimmedValue;

      if (!trimmedValue) {
        setSubscriptionProxyStatus('empty');
        return { status: 'empty', detail: `订阅抓取默认使用 ${SUBSCRIPTION_DEFAULT_PROXY}。` };
      }

      if (!desktopApi || typeof desktopApi.validateProxy !== 'function') {
        setSubscriptionProxyStatus('empty');
        return { status: 'empty', detail: '当前版本未提供代理检测能力。' };
      }

      setSubscriptionProxyStatus('checking');
      try {
        const result = await desktopApi.validateProxy(trimmedValue, {
          targetUrl:
            options.targetUrl ||
            normalizeText(elements.subscriptionCrawlerUrl && elements.subscriptionCrawlerUrl.value) ||
            'https://www.javbus.com/'
        });

        if (requestToken !== proxyValidationState.requestToken) {
          return result;
        }

        if (result && result.status === 'valid') {
          setSubscriptionProxyStatus('valid', result.detail);
          return result;
        }

        setSubscriptionProxyStatus('invalid', result && result.detail);
        return result || { status: 'invalid', detail: '代理检测失败。' };
      } catch (error) {
        const message = getErrorMessage(error);
        if (requestToken === proxyValidationState.requestToken) {
          setSubscriptionProxyStatus('invalid', message);
        }
        return { status: 'invalid', detail: message };
      }
    }

    function scheduleSubscriptionProxyValidation(delayMs = 450) {
      if (!elements.subscriptionCrawlerProxy) {
        return;
      }
      clearSubscriptionProxyValidationTimer();
      const trimmedValue = normalizeText(elements.subscriptionCrawlerProxy.value);
      if (!trimmedValue) {
        setSubscriptionProxyStatus('empty');
        return;
      }
      setSubscriptionProxyStatus('checking');
      proxyValidationState.timerId = setTimeout(() => {
        proxyValidationState.timerId = null;
        void validateSubscriptionProxyValue(trimmedValue);
      }, delayMs);
    }

    function scheduleSubscriptionProxyAutoValidation(delayMs = SUBSCRIPTION_PROXY_AUTO_CHECK_INTERVAL_MS) {
      if (!elements.subscriptionCrawlerProxy) {
        return;
      }
      clearSubscriptionProxyAutoValidationTimer();
      proxyValidationState.autoTimerId = setTimeout(async () => {
        proxyValidationState.autoTimerId = null;
        const proxyValue = applyDefaultSubscriptionProxy();
        const result = await validateSubscriptionProxyValue(proxyValue);
        const statusText = result && result.status === 'valid' ? '代理正常' : '代理失败';
        appendLog(result && result.status === 'valid' ? 'info' : 'warn', `代理自动检测：${statusText} (${proxyValue})`);
        scheduleSubscriptionProxyAutoValidation();
      }, Math.max(1000, delayMs));
    }

    async function ensureSubscriptionProxyReady() {
      const proxyValue = applyDefaultSubscriptionProxy();
      const result = await validateSubscriptionProxyValue(proxyValue);
      if (!result || result.status !== 'valid') {
        throw new Error('当前订阅代理检测失败，请修正后再启动抓取。');
      }
      return proxyValue;
    }

    async function updateSubscriptionAntiBlock() {
      const proxy = await ensureSubscriptionProxyReady();
      const cloudflareEnabled = resolveSubscriptionCloudflareEnabled();
      if (!desktopApi || typeof desktopApi.updateAntiBlock !== 'function') {
        throw new Error('当前版本未提供反屏蔽更新能力。');
      }
      appendLog('info', `[diagnostic] 手动更新反屏蔽 proxy=${proxy || 'none'} cloudflare=${cloudflareEnabled}`);
      const result = await desktopApi.updateAntiBlock({
        proxy,
        base: 'https://www.javbus.com/',
        cloudflare: cloudflareEnabled
      });
      state.antiBlockReady = true;
      const count = Array.isArray(result && result.antiBlockUrls) ? result.antiBlockUrls.length : 0;
      appendLog('info', `反屏蔽已更新：${count} 条规则。`);
      setSubscriptionCrawlerStatus(cloudflareEnabled ? '准备就绪' : '可抓取');
      return result;
    }

    function getCurrentSubscriptionArtifactInput() {
      return normalizeText(elements.subscriptionOutput && elements.subscriptionOutput.value);
    }

    function applySubscriptionArtifactInputValue(artifactInput) {
      const normalized = normalizeText(artifactInput);
      if (elements.subscriptionOutput) {
        elements.subscriptionOutput.value = normalized;
      }
      return normalized;
    }

    function parseRecentCrawlSnapshot(snapshot, index) {
      const actressName = normalizeText(snapshot && snapshot.actressName) || `最近爬取 ${index + 1}`;
      const outputDir = normalizeText(snapshot && snapshot.outputDir);
      const crawlProfilePath = normalizeText(snapshot && snapshot.crawlProfilePath);
      const filmDataPath = normalizeText(snapshot && snapshot.filmDataPath);
      const updatedAt = normalizeText(snapshot && snapshot.updatedAt);
      const targetCount = normalizeCount(snapshot && (snapshot.completedCount || snapshot.targetCount || snapshot.syncedCount), 0);
      return {
        actressName,
        crawlUrl: normalizeText(snapshot && snapshot.crawlUrl),
        preferredBase: normalizeText(snapshot && snapshot.siteBase),
        outputDir,
        artifactInput: crawlProfilePath || filmDataPath || outputDir,
        filmDataPath,
        crawlProfilePath,
        itemsPerPage: normalizeCount(snapshot && snapshot.itemsPerPage, 30) || 30,
        totalPages: normalizeCount(snapshot && snapshot.totalPages, 1) || 1,
        targetCount,
        label: updatedAt
          ? `${actressName} | ${updatedAt.slice(0, 16).replace('T', ' ')} | ${targetCount} 部`
          : `${actressName} | ${targetCount} 部`
      };
    }

    function parseRecentCrawlResultEntry(entry, index) {
      const outputDir = normalizeText(entry && entry.outputDir);
      const filmDataPath = normalizeText(entry && entry.filmDataPath);
      const crawlProfilePath = outputDir ? `${outputDir.replace(/[\\/]+$/, '')}\\crawl-profile.json` : '';
      const actressName = normalizeText(entry && entry.title) || `最近爬取 ${index + 1}`;
      const updatedAt = normalizeText(entry && entry.updatedAt);
      return {
        actressName,
        crawlUrl: '',
        outputDir,
        artifactInput: crawlProfilePath || filmDataPath || outputDir,
        filmDataPath,
        targetCount: 0,
        label: updatedAt ? `${actressName} 路 ${updatedAt.slice(0, 16).replace('T', ' ')}` : actressName
      };
    }

    function mergeRecentCrawlOptions(primaryItems, fallbackItems) {
      const merged = [];
      const seen = new Set();
      const inputItems = []
        .concat(Array.isArray(primaryItems) ? primaryItems : [])
        .concat(Array.isArray(fallbackItems) ? fallbackItems : []);

      inputItems.forEach((item) => {
        if (!item || typeof item !== 'object') {
          return;
        }
        const artifactInput = normalizeText(item.artifactInput);
        if (!artifactInput || seen.has(artifactInput)) {
          return;
        }
        seen.add(artifactInput);
        merged.push(item);
      });

      return merged;
    }

    async function loadRecentCrawlOptionsFromHistory() {
      let snapshotItems = [];
      if (desktopApi && typeof desktopApi.listCrawlCacheSnapshots === 'function') {
        try {
          const result = await desktopApi.listCrawlCacheSnapshots();
          const items = Array.isArray(result && result.items) ? result.items : [];
          snapshotItems = items.map((entry, index) => parseRecentCrawlSnapshot(entry, index));
        } catch (error) {
          appendLog('error', `读取内部抓取缓存失败: ${getErrorMessage(error)}`);
        }
      }

      try {
        const rawValue =
          globalScope.localStorage && typeof globalScope.localStorage.getItem === 'function'
            ? globalScope.localStorage.getItem('jav.crawl.result.history.v2')
            : '';
        const parsed = rawValue ? JSON.parse(rawValue) : [];
        const historyItems = (Array.isArray(parsed) ? parsed : []).map((entry, index) =>
          parseRecentCrawlResultEntry(entry, index)
        );
        state.recentCrawlOptions = mergeRecentCrawlOptions(snapshotItems, historyItems);
      } catch {
        state.recentCrawlOptions = mergeRecentCrawlOptions(snapshotItems, []);
      }

      renderRecentCrawlOptions();
    }

    function renderRecentCrawlOptions() {
      const select = elements.subscriptionRecentCrawlSelect;
      if (!select) {
        return;
      }

      clearChildren(select);
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = '请选择最近抓取记录';
      select.appendChild(defaultOption);

      (Array.isArray(state.recentCrawlOptions) ? state.recentCrawlOptions : []).forEach((item, index) => {
        const option = document.createElement('option');
        option.value = String(index);
        option.textContent = normalizeText(item.label) || `最近爬取 ${index + 1}`;
        select.appendChild(option);
      });
    }

    function getSelectedRecentCrawlOption() {
      const select = elements.subscriptionRecentCrawlSelect;
      const index = Number(select && select.value ? select.value : -1);
      const options = Array.isArray(state.recentCrawlOptions) ? state.recentCrawlOptions : [];
      if (!Number.isFinite(index) || index < 0 || index >= options.length) {
        return null;
      }
      return options[index];
    }

    function applyRecentCrawlOption(optionItem) {
      if (!optionItem || typeof optionItem !== 'object') {
        return;
      }
      applySubscriptionArtifactInputValue(optionItem.artifactInput);
      if (elements.subscriptionCrawlerUrl) elements.subscriptionCrawlerUrl.value = normalizeText(optionItem.crawlUrl);
      if (elements.subscriptionCrawlerCount) elements.subscriptionCrawlerCount.value = String(normalizeCount(optionItem.targetCount, 0));
      if (elements.subscriptionCrawlerActressName) elements.subscriptionCrawlerActressName.value = normalizeText(optionItem.actressName);
      if (elements.subscriptionItemsPerPage && optionItem.itemsPerPage) {
        elements.subscriptionItemsPerPage.value = String(optionItem.itemsPerPage);
      }
      if (elements.subscriptionTotalPages && optionItem.totalPages) {
        elements.subscriptionTotalPages.value = String(optionItem.totalPages);
      }
      setSummaryMessage(`已载入最近抓取输入：${optionItem.actressName || optionItem.outputDir || '最近记录'}。`);
      appendLog('info', `已载入最近抓取输入：${optionItem.artifactInput || optionItem.outputDir || ''}`);
    }

    function currentSubscriptionList() {
      return sortSubscriptions(state.subscriptions);
    }

    function updateSubscriptionState(nextItems) {
      state.subscriptions = sortSubscriptions(Array.isArray(nextItems) ? nextItems : []);
      if (!state.selectedId || !state.subscriptions.some((item) => item.id === state.selectedId)) {
        state.selectedId = state.subscriptions[0] ? state.subscriptions[0].id : '';
      }
      setSummaryCounts();
      renderSubscriptionList();
      renderSubscriptionDetail();
    }

    function findSubscriptionById(id) {
      return (Array.isArray(state.subscriptions) ? state.subscriptions : []).find((item) => item.id === id) || null;
    }

    function renderSubscriptionList() {
      if (!elements.subscriptionList) {
        return;
      }
      const list = Array.isArray(state.subscriptions) ? state.subscriptions : [];
      subscriptionListView.renderSubscriptionList(elements.subscriptionList, list, {
        emptyMessage: '当前还没有任何 AV 订阅。',
        onSelect: (item) => {
          state.selectedId = item && item.id ? item.id : '';
          renderSubscriptionList();
          renderSubscriptionDetail();
        },
        onPrepareCrawl: prepareSubscriptionCrawlerFromItem,
        onCrawlMagnet: (item) => {
          prepareSubscriptionCrawlerFromItem(item);
          void startIndependentCrawl(item);
        },
        onBindDelete: (button, item) => {
          bindAsyncClick(button, async () => {
            const confirmed = confirmAction(`确认删除订阅“${item.actressName || '未命名订阅'}”吗？`);
            if (!confirmed) {
              return;
            }
            const result = await desktopApi.removeAvSubscription(item.id);
            updateSubscriptionState(result && result.subscriptions);
            setSummaryMessage(`已删除订阅：${item.actressName || '未命名订阅'}`);
            appendLog('info', `已删除订阅：${item.actressName || '未命名订阅'}`);
          });
        },
        onBindSync: (button, item) => {
          bindAsyncClick(button, async () => {
            const updated = await desktopApi.markAvSubscriptionSynced(item.id);
            const nextList = state.subscriptions.map((entry) => (entry.id === updated.id ? updated : entry));
            updateSubscriptionState(nextList);
            setSummaryMessage(`已将 ${updated.actressName} 标记为已同步。`);
            appendLog('info', `订阅已同步：${updated.actressName}`);
          });
        },
        onBindOpen: (button, item) => {
          bindAsyncClick(button, async () => {
            if (!item.crawlUrl) {
              return;
            }
            await desktopApi.openExternal(item.crawlUrl);
          });
        },
        onEdit: openSubscriptionEditDialog
      });
    }

    function renderSubscriptionDetail() {
      if (!elements.subscriptionDetailCard || !elements.subscriptionDetailEmpty) {
        return;
      }

      const current = findSubscriptionById(state.selectedId);
      if (!current) {
        elements.subscriptionDetailEmpty.classList.remove('hidden');
        elements.subscriptionDetailCard.classList.add('hidden');
        elements.subscriptionDetailCard.innerHTML = '';
        return;
      }

      elements.subscriptionDetailEmpty.classList.add('hidden');
      elements.subscriptionDetailCard.classList.remove('hidden');

      const baselineCodes = normalizeCodes(current.baselineCodes);
      const pendingCodes = normalizeCodes(current.pendingCodes);
      const baselineCount = resolveSubscriptionBaselineCount(current);
      const currentCount = resolveSubscriptionCurrentCount(current);
      const pendingText = pendingCodes.length > 0 ? pendingCodes.join('、') : '暂无待更新番号';
      const baselineText = baselineCodes.length > 0 ? baselineCodes.slice(0, 24).join('、') : '无基线番号';
      const sourceTypeText = current.sourceType === 'manual' ? '手动建档' : 'JAV 爬虫导入';
      const baselineMismatch = currentCount > baselineCount + pendingCodes.length;
      const mismatchWarning = baselineMismatch
        ? `<div class="detail-row detail-warning"><span>基数异常</span><div>用户基线 ${baselineCount} 部，实际观测 ${currentCount} 部。建议点击下方"修改订阅"修正基线数据。</div></div>`
        : '';

      elements.subscriptionDetailCard.innerHTML = `
        <div class="detail-grid">
          <div class="detail-row"><span>女优名称</span><strong>${escapeHtml(current.actressName)}</strong></div>
          <div class="detail-row"><span>抓取地址</span><div>${escapeHtml(current.crawlUrl)}</div></div>
          <div class="detail-row"><span>来源类型</span><strong>${escapeHtml(sourceTypeText)}</strong></div>
          <div class="detail-row"><span>输出目录</span><div>${escapeHtml(current.preferredOutputDir || '未设置')}</div></div>
          <div class="detail-row"><span>基数</span><strong>${escapeHtml(String(baselineCount))}</strong></div>
          <div class="detail-row"><span>当前总数</span><strong>${escapeHtml(String(currentCount))}</strong></div>
          <div class="detail-row"><span>待更新番号</span><div>${escapeHtml(pendingText)}</div></div>
          <div class="detail-row"><span>基线预览</span><div>${escapeHtml(baselineText)}</div></div>
          ${mismatchWarning}
        </div>
        <div class="detail-actions">
          <button type="button" class="secondary-button" id="subscription-detail-edit-btn">修改订阅</button>
        </div>
      `;

      const editBtn = elements.subscriptionDetailCard.querySelector('#subscription-detail-edit-btn');
      if (editBtn) {
        editBtn.addEventListener('click', () => openSubscriptionEditDialog(current));
      }
    }

    function escapeHtml(value) {
      return String(value || '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
    }

    function openSubscriptionEditDialog(item) {
      if (!item || !item.id) {
        return;
      }
      const actressName = globalScope.prompt('女优名称：', item.actressName || '');
      if (actressName === null) {
        return;
      }
      const crawlUrl = globalScope.prompt('抓取地址：', item.crawlUrl || '');
      if (crawlUrl === null) {
        return;
      }
      const itemsPerPageStr = globalScope.prompt('每页数量：', String(item.itemsPerPage || 30));
      if (itemsPerPageStr === null) {
        return;
      }
      const itemsPerPage = Math.max(1, parseInt(itemsPerPageStr, 10) || 30);

      void (async () => {
        try {
          const updated = await desktopApi.patchAvSubscription({
            id: item.id,
            actressName: actressName.trim(),
            crawlUrl: crawlUrl.trim(),
            itemsPerPage
          });
          if (updated) {
            const nextList = state.subscriptions.map((entry) =>
              entry.id === updated.id ? updated : entry
            );
            updateSubscriptionState(nextList);
            renderSubscriptionDetail();
            appendLog('info', `已修改订阅：${updated.actressName}`);
          }
        } catch (error) {
          appendLog('error', `修改订阅失败：${getErrorMessage(error)}`);
        }
      })();
    }

    function confirmAction(message) {
      if (typeof globalScope.confirm !== 'function') {
        return true;
      }
      return globalScope.confirm(String(message || '').trim());
    }

    async function refreshOneSubscription(id) {
      const items = currentSubscriptionList();
      const target = items.find((item) => item.id === id);
      if (!target) {
        throw new Error(`subscription not found: ${id}`);
      }

      appendLog('info', `开始检测更新：${target.actressName || '未命名订阅'}。`);
      const payload = buildSubscriptionRuntimePayload({ id: target.id });
      appendLog(
        'info',
        `[diagnostic] 检测更新参数 proxy=${payload.proxy || 'none'} cloudflare=${payload.cloudflare} parallel=${payload.parallel} delay=${payload.delay} timeout=${payload.timeout}`
      );
      const result = await desktopApi.refreshAvSubscription(payload);

      const nextItem = result && result.subscription ? result.subscription : target;
      const nextList = items.map((entry) => (entry.id === nextItem.id ? nextItem : entry));
      updateSubscriptionState(nextList);
      if (nextItem.pendingCount > 0) {
        setSummaryMessage(`${nextItem.actressName} 检测到 ${nextItem.pendingCount} 部待更新影片。`);
        appendLog('info', `${nextItem.actressName} 检测更新完成：新增 ${nextItem.pendingCount} 部，扫描 ${normalizeCount(result && result.scannedPages, 0)} 页。`);
      } else {
        setSummaryMessage(`${nextItem.actressName} 未发现更新。`);
        appendLog('info', `${nextItem.actressName} 未发现更新，扫描 ${normalizeCount(result && result.scannedPages, 0)} 页。`);
      }
      return nextItem;
    }

    async function refreshAllSubscriptions() {
      const items = currentSubscriptionList();
      if (items.length === 0) {
        setSummaryMessage('当前没有订阅可检测。');
        appendLog('info', '检测全部订阅已跳过：当前无订阅。');
        return;
      }

      appendLog('info', `开始批量检测 ${items.length} 条订阅。`);
      const payload = buildSubscriptionRuntimePayload();
      appendLog(
        'info',
        `[diagnostic] 批量检测参数 proxy=${payload.proxy || 'none'} cloudflare=${payload.cloudflare} parallel=${payload.parallel} delay=${payload.delay} timeout=${payload.timeout}`
      );
      const result = await desktopApi.refreshAvSubscriptions(payload);

      if (result && Array.isArray(result.subscriptions)) {
        updateSubscriptionState(result.subscriptions);
      }
      setSummaryMessage(result && result.updatedCount > 0
        ? `批量检测完成：${result.updatedCount} 条订阅存在更新。`
        : '批量检测完成：未发现新增。');
    }

    function prepareSubscriptionCrawlerFromItem(item) {
      if (!item || typeof item !== 'object') {
        return;
      }
      const pendingCount = normalizeCount(item.pendingCount, 0);
      const totalPages = Math.max(1, Math.ceil(Math.max(1, pendingCount) / 30));
      const pendingCodes = normalizeCodes(item.pendingCodes);
      applySubscriptionCrawlerDraft({
        crawlUrl: item.crawlUrl,
        targetCount: pendingCount > 0 ? pendingCount : 1,
        actressName: item.actressName
      });
      if (elements.subscriptionList) {
        elements.subscriptionList.dataset.currentPreparedId = normalizeText(item.id);
      }

      if (pendingCount > 0) {
        setSubscriptionCrawlerStatus(`待抓取 ${pendingCount} 部`);
        setSummaryMessage(`已准备 ${item.actressName || '该订阅'} 的抓取草稿：待更新 ${pendingCount} 部，实际按 ${totalPages} 页抓满后过滤。`);
        appendLog('info', `已准备抓取：${item.actressName || '未命名订阅'}，地址 ${item.crawlUrl || '未填写'}，待更新 ${pendingCount} 部。`);
        appendLog('info', `待更新番号：${pendingCodes.length > 0 ? pendingCodes.join('、') : '未解析到明确番号，将保留全部输出'}`);
        appendLog('info', `实际抓取范围：第 1-${totalPages} 页全部影片；抓取完成后只保留待更新番号对应的磁力。`);
        appendLog(
          'info',
          `[diagnostic] 更新爬取草稿 pending=${pendingCount} pageCapacity=${totalPages * 30} pages=${totalPages} itemsPerPage=30 parallel=${resolveSubscriptionCrawlerParallel()} delay=${resolveSubscriptionCrawlerDelay()} timeout=${resolveSubscriptionCrawlerTimeout()} output=软件目录\\AV订阅`
        );
        return;
      }

      setSubscriptionCrawlerStatus('未检测到新增');
      setSummaryMessage(`${item.actressName || '该订阅'} 当前没有检测到待更新影片。`);
      appendLog('warn', `${item.actressName || '未命名订阅'} 当前待更新数量为 0。`);
    }

    function applySubscriptionCrawlerDraft(draft = {}) {
      if (!draft || typeof draft !== 'object') {
        return;
      }
      if (elements.subscriptionCrawlerUrl) {
        elements.subscriptionCrawlerUrl.value = normalizeText(draft.crawlUrl);
      }
      if (elements.subscriptionCrawlerCount) {
        const targetCount = draft.targetCount;
        elements.subscriptionCrawlerCount.value =
          targetCount == null || targetCount === '' ? '' : String(Math.max(0, Number(targetCount || 0)));
      }
      if (elements.subscriptionCrawlerActressName) {
        elements.subscriptionCrawlerActressName.value = normalizeText(draft.actressName);
      }
    }

    async function showSubscriptionAlert(message) {
      if (!desktopApi || typeof desktopApi.showAlert !== 'function') {
        if (typeof globalScope.alert === 'function') {
          globalScope.alert(message);
        }
        return;
      }
      await desktopApi.showAlert({
        type: 'warning',
        title: 'AV 订阅',
        message
      });
    }

    async function prepareSubscriptionCrawlEnvironment() {
      const proxy = await ensureSubscriptionProxyReady();
      const cloudflareEnabled = resolveSubscriptionCloudflareEnabled();
      const outputDir = await resolveSubscriptionDefaultOutputDir();

      setSubscriptionCrawlerStatus('准备环境...');
      appendLog('info', `[diagnostic] AV订阅准备环境 cloudflare=${cloudflareEnabled} proxy=${proxy || 'none'} output=${outputDir || '未解析'}`);
      appendLog('info', `Cloudflare 兼容：${cloudflareEnabled ? '已启用（桥接 JAV 爬虫配置）' : '未启用'}`);

      try {
        if (desktopApi && typeof desktopApi.updateAntiBlock === 'function') {
          await desktopApi.updateAntiBlock({
            proxy,
            base: 'https://www.javbus.com/',
            cloudflare: cloudflareEnabled
          });
          state.antiBlockReady = true;
        }
      } catch (error) {
        state.antiBlockReady = false;
        appendLog('warn', `反屏蔽更新失败：${getErrorMessage(error)}`);
      }

      appendLog('info', `反屏蔽：${state.antiBlockReady ? '已启用' : '初始化失败'}`);
      setSubscriptionCrawlerStatus(cloudflareEnabled && state.antiBlockReady ? '准备就绪' : state.antiBlockReady ? '可抓取' : '准备未完成');

      return {
        proxy,
        cloudflareEnabled,
        outputDir
      };
    }

    async function startIndependentCrawl(item, customCount) {
      const environment = await prepareSubscriptionCrawlEnvironment();
      const outputDir = normalizeText(environment && environment.outputDir);
      if (!outputDir) {
        await showSubscriptionAlert('未能解析默认输出目录，请重启软件后重试。');
        return;
      }
      if (!item || !item.crawlUrl) {
        await showSubscriptionAlert('订阅缺少抓取地址。');
        return;
      }

      const pendingCount = normalizeCount(item.pendingCount, 0);
      const targetCount = customCount > 0 ? customCount : (pendingCount > 0 ? pendingCount : 1);
      const totalPages = Math.max(1, Math.ceil(Math.max(1, targetCount) / 30));
      const crawlLimit = totalPages * 30;
      const pendingCodes = normalizeCodes(item.pendingCodes);
      const proxy = environment.proxy;
      const cloudflareEnabled = Boolean(environment && environment.cloudflareEnabled);
      const parallel = resolveSubscriptionCrawlerParallel();
      const delay = resolveSubscriptionCrawlerDelay();
      const timeout = resolveSubscriptionCrawlerTimeout();

      appendLog('info', `开始订阅更新抓取：${item.actressName || '未命名'}，待更新 ${targetCount} 部。`);
      appendLog('info', `待更新番号：${pendingCodes.length > 0 ? pendingCodes.join('、') : '未解析到明确番号，将保留全部输出'}`);
      appendLog('info', `实际抓取范围：第 1-${totalPages} 页全部影片（页面容量约 ${crawlLimit} 部，不用数量上限判短缺）；抓取完成后回收过滤。`);
      appendLog('info', `[diagnostic] AV订阅抓取启动 cloudflare=${cloudflareEnabled} antiBlock=${state.antiBlockReady ? 'enabled' : 'failed'} proxy=${proxy || 'none'} output=${outputDir} pending=${targetCount} pageCapacity=${crawlLimit} pages=${totalPages} itemsPerPage=30 parallel=${parallel} delay=${delay} timeout=${timeout}`);
      appendLog('info', `Cloudflare 兼容：${cloudflareEnabled ? '已启用（桥接 JAV 爬虫配置）' : '未启用'}`);
      appendLog('info', `反屏蔽：${state.antiBlockReady ? '已启用' : '初始化失败'}`);
      setSubscriptionCrawlerStatus('正在抓取...');

      try {
        const startResult = await desktopApi.startSubscriptionCrawl(buildSubscriptionRuntimePayload({
          subscriptionId: item.id,
          outputDir,
          targetCount,
          targetCodes: Array.isArray(item.pendingCodes) ? item.pendingCodes : [],
          proxy
        }));
        setActiveCrawlSession({
          subscriptionId: normalizeText(item.id),
          actressName: normalizeText(item.actressName),
          targetCodes: normalizeCodes(item.pendingCodes),
          outputDir:
            normalizeText(startResult && startResult.currentTaskOutputDir) ||
            normalizeText(startResult && startResult.outputDir) ||
            outputDir,
          baseOutputDir: normalizeText(startResult && startResult.baseOutputDir) || outputDir,
          targetCount,
          crawlLimit: normalizeCount(startResult && startResult.crawlLimit, crawlLimit) || crawlLimit
        });
      } catch (error) {
        clearActiveCrawlSession();
        appendLog('error', `启动抓取失败: ${getErrorMessage(error)}`);
        setSubscriptionCrawlerStatus('启动失败');
      }
    }

    async function startBatchCrawl() {
      const pendingItems = currentSubscriptionList().filter((item) => normalizeCount(item.pendingCount, 0) > 0);
      if (pendingItems.length === 0) {
        await showSubscriptionAlert('当前没有待处理的订阅。');
        return;
      }

      const environment = await prepareSubscriptionCrawlEnvironment();
      const proxy = environment.proxy;
      const cloudflareEnabled = Boolean(environment && environment.cloudflareEnabled);
      const outputDir = normalizeText(environment && environment.outputDir);
      const parallel = resolveSubscriptionCrawlerParallel();
      const delay = resolveSubscriptionCrawlerDelay();
      const timeout = resolveSubscriptionCrawlerTimeout();
      appendLog('info', `开始批量抓取: ${pendingItems.length} 个订阅有待处理`);
      appendLog('info', `[diagnostic] AV订阅批量抓取启动 cloudflare=${cloudflareEnabled} antiBlock=${state.antiBlockReady ? 'enabled' : 'failed'} proxy=${proxy || 'none'} output=${outputDir} parallel=${parallel} delay=${delay} timeout=${timeout}`);
      appendLog('info', `Cloudflare 兼容：${cloudflareEnabled ? '已启用（桥接 JAV 爬虫配置）' : '未启用'}`);
      appendLog('info', `反屏蔽：${state.antiBlockReady ? '已启用' : '初始化失败'}`);
      setSubscriptionCrawlerStatus('批量抓取中...');

      try {
        for (const item of pendingItems) {
          await desktopApi.startSubscriptionCrawl(buildSubscriptionRuntimePayload({
            subscriptionId: item.id,
            outputDir,
            targetCount: normalizeCount(item.pendingCount, 0),
            targetCodes: Array.isArray(item.pendingCodes) ? item.pendingCodes : [],
            proxy
          }));
        }
      } catch (error) {
        appendLog('error', `批量抓取启动失败: ${getErrorMessage(error)}`);
        setSubscriptionCrawlerStatus('启动失败');
      }
    }

    async function stopIndependentCrawl() {
      try {
        await desktopApi.stopSubscriptionCrawl();
        clearActiveCrawlSession();
        appendLog('info', '已请求停止抓取。');
        setSubscriptionCrawlerStatus('正在停止...');
      } catch (error) {
        appendLog('error', `停止失败: ${getErrorMessage(error)}`);
      }
    }

    function findPreparedSubscriptionItem() {
      const selected = findSubscriptionById(state.selectedId);
      if (selected) {
        return selected;
      }

      const crawlUrl = normalizeText(elements.subscriptionCrawlerUrl && elements.subscriptionCrawlerUrl.value);
      const actressName = normalizeText(elements.subscriptionCrawlerActressName && elements.subscriptionCrawlerActressName.value);
      return currentSubscriptionList().find((item) => {
        return normalizeText(item.crawlUrl) === crawlUrl || normalizeText(item.actressName) === actressName;
      }) || null;
    }

    async function startPreparedSubscriptionCrawl() {
      const preparedItem = findPreparedSubscriptionItem();
      if (!preparedItem) {
        throw new Error('请先从订阅列表选择一位女优，或先点击“更新爬取”准备抓取草稿。');
      }

      const manualCount = normalizeCount(elements.subscriptionCrawlerCount && elements.subscriptionCrawlerCount.value, 0);
      await startIndependentCrawl(preparedItem, manualCount > 0 ? manualCount : undefined);
    }

    async function finalizeActiveSubscriptionCrawl(statePayload) {
      const activeSession = getActiveCrawlSession();
      if (!activeSession || !activeSession.subscriptionId) {
        return;
      }

      const outputDir =
        normalizeText(statePayload && statePayload.currentTaskOutputDir) ||
        normalizeText(statePayload && statePayload.outputDir) ||
        normalizeText(activeSession.currentTaskOutputDir) ||
        normalizeText(activeSession.outputDir);
      if (!outputDir) {
        appendLog('warn', '订阅抓取已结束，但未解析到输出目录，跳过订阅结果回收。');
        clearActiveCrawlSession();
        return;
      }

      try {
        const finalized = await desktopApi.finalizeAvSubscriptionCrawl({
          subscriptionId: activeSession.subscriptionId,
          currentTaskOutputDir: outputDir,
          outputDir,
          targetCodes: Array.isArray(activeSession.targetCodes) ? activeSession.targetCodes : []
        });
        if (finalized && finalized.subscription) {
          const nextList = state.subscriptions.map((entry) =>
            entry.id === finalized.subscription.id ? finalized.subscription : entry
          );
          updateSubscriptionState(nextList);
          appendLog(
            'info',
            `${finalized.subscription.actressName || activeSession.actressName || '订阅'} 结果已回收，仅保留 ${normalizeCount(finalized.keptCount, 0)} 部待更新影片。`
          );
          if (Array.isArray(finalized.keptCodes) && finalized.keptCodes.length > 0) {
            appendLog('info', `已保留番号：${normalizeCodes(finalized.keptCodes).join('、')}`);
          }
          if (Array.isArray(finalized.missingCodes) && finalized.missingCodes.length > 0) {
            appendLog('warn', `仍未抓到待更新番号：${normalizeCodes(finalized.missingCodes).join('、')}`);
          }
        }
      } catch (error) {
        appendLog('error', `订阅抓取收尾失败: ${getErrorMessage(error)}`);
      } finally {
        clearActiveCrawlSession();
      }
    }

    function bindSubcrawlEvents() {
      if (!desktopApi) {
        return;
      }
      if (typeof desktopApi.onAvSubscriptionV2Log === 'function') {
        desktopApi.onAvSubscriptionV2Log((rawData) => {
          try {
            const entries = Array.isArray(rawData) ? rawData : [rawData];
            entries.forEach((entry) => {
              const level = normalizeText(entry && entry.level) || 'info';
              const message = normalizeText(entry && entry.message);
              if (!message) {
                return;
              }
              appendLog(level, message);
            });
          } catch (_) {}
        });
      }
      if (typeof desktopApi.onAvSubscriptionV2ListUpdated === 'function') {
        desktopApi.onAvSubscriptionV2ListUpdated(() => {
          void loadSubscriptions();
        });
      }
      if (typeof desktopApi.onState === 'function') {
        desktopApi.onState((rawData) => {
          const activeSession = getActiveCrawlSession();
          if (!activeSession) {
            return;
          }
          try {
            const data = typeof rawData === 'string' ? JSON.parse(rawData) : rawData;
            if (!data) {
              return;
            }
            const status = normalizeText(data.status).toLowerCase();
            if (status === 'completed') {
              setSubscriptionCrawlerStatus('抓取完成');
              void finalizeActiveSubscriptionCrawl(data);
              return;
            }
            if (status === 'incomplete') {
              setSubscriptionCrawlerStatus('抓取未完全完成，正在回收已抓到的待更新结果');
              appendLog('warn', '主爬虫返回未完成状态，AV 订阅仍会先回收已抓到的待更新番号，并在收尾日志中列出缺失番号。');
              void finalizeActiveSubscriptionCrawl(data);
              return;
            }
            if (status === 'stopped') {
              setSubscriptionCrawlerStatus('已停止');
              clearActiveCrawlSession();
              return;
            }
            if (status === 'error') {
              setSubscriptionCrawlerStatus('抓取出错');
              clearActiveCrawlSession();
              return;
            }
            setSubscriptionCrawlerStatus(normalizeText(data.message) || '抓取中...');
          } catch (_) {}
        });
      }
      if (typeof desktopApi.onLog === 'function') {
        desktopApi.onLog((rawData) => {
          const activeSession = getActiveCrawlSession();
          if (!activeSession) {
            return;
          }
          try {
            const entries = Array.isArray(rawData) ? rawData : [rawData];
            entries.forEach((entry) => {
              const level = normalizeText(entry && entry.level) || 'info';
              const message = normalizeText(entry && entry.message);
              if (!message) {
                return;
              }
              appendLog(level, message);
            });
          } catch (_) {}
        });
      }
    }

    function validateManualForm() {
      const actressName = normalizeText(elements.subscriptionActressName && elements.subscriptionActressName.value);
      const targetUrl = normalizeText(elements.subscriptionTargetUrl && elements.subscriptionTargetUrl.value);
      const syncedCount = normalizeCount(elements.subscriptionSyncedCount && elements.subscriptionSyncedCount.value, 0);
      const itemsPerPage = Math.max(1, normalizeCount(elements.subscriptionItemsPerPage && elements.subscriptionItemsPerPage.value, 30) || 30);
      const totalPages = Math.max(1, normalizeCount(elements.subscriptionTotalPages && elements.subscriptionTotalPages.value, 1) || 1);

      if (!actressName) {
        throw new Error('请填写女优名称。');
      }
      if (!targetUrl) {
        throw new Error('请填写演员抓取地址。');
      }
      if (!syncedCount) {
        throw new Error('请填写女优影片数。');
      }

      return {
        actressName,
        targetUrl,
        syncedCount,
        itemsPerPage,
        totalPages
      };
    }

    async function scanSubscriptionsFromOutput() {
      const artifactInput = getCurrentSubscriptionArtifactInput();
      if (!artifactInput) {
        throw new Error('请先选择订阅快照或抓取结果输入。');
      }
      appendLog('info', `开始导入订阅基线：${artifactInput}`);
      const result = await desktopApi.scanAvSubscriptionsFromOutput({
        artifactInput,
        proxy: resolveSubscriptionProxyValue()
      });
      updateSubscriptionState(result && result.subscriptions ? result.subscriptions : []);
      setSummaryMessage(`已从 ${artifactInput} 扫描订阅基线，正在自动检测更新...`);
      appendLog('info', `已从 ${artifactInput} 扫描主女优订阅，后台正在自动检测更新。`);
    }

    async function addSubscription() {
      const { actressName, targetUrl, syncedCount, itemsPerPage, totalPages } = validateManualForm();
      const saved = await desktopApi.addAvSubscription({
        actressName,
        targetUrl,
        syncedCount,
        itemsPerPage,
        totalPages,
        preferredOutputDir: '',
        proxy: resolveSubscriptionProxyValue()
      });
      const nextList = currentSubscriptionList();
      const existingIndex = nextList.findIndex((item) => item.id === saved.id);
      if (existingIndex >= 0) {
        nextList.splice(existingIndex, 1, saved);
      } else {
        nextList.unshift(saved);
      }
      updateSubscriptionState(nextList);
      applySubscriptionCrawlerDraft({
        crawlUrl: saved.crawlUrl,
        outputDir: saved.preferredOutputDir || '',
        targetCount: saved.pendingCount > 0 ? saved.pendingCount : 1,
        actressName: saved.actressName
      });
      setSummaryMessage(`订阅已保存：${saved.actressName}，基线 ${saved.baselineCount || saved.syncedCount || 0} 部。`);
      appendLog('info', `已新增订阅：${saved.actressName}。`);
    }

    function clearForm() {
      if (elements.subscriptionActressName) elements.subscriptionActressName.value = '';
      if (elements.subscriptionTargetUrl) elements.subscriptionTargetUrl.value = '';
      if (elements.subscriptionSyncedCount) elements.subscriptionSyncedCount.value = '';
      if (elements.subscriptionItemsPerPage) elements.subscriptionItemsPerPage.value = '30';
      if (elements.subscriptionTotalPages) elements.subscriptionTotalPages.value = '1';
      if (elements.subscriptionOutput) elements.subscriptionOutput.value = '';
      if (elements.subscriptionRecentCrawlSelect) elements.subscriptionRecentCrawlSelect.value = '';
    }

    async function loadSubscriptions() {
      const result = await desktopApi.listAvSubscriptions();
      updateSubscriptionState(result && result.subscriptions ? result.subscriptions : []);
    }

    function clearAllSubscriptions() {
      if (typeof desktopApi.clearAvSubscriptions !== 'function') {
        throw new Error('当前版本暂不支持清空订阅。');
      }
      const confirmed = confirmAction(['确认清空全部订阅吗？', '此操作不可恢复，是否继续清空全部订阅？']);
      if (!confirmed) {
        return Promise.resolve();
      }

      return desktopApi.clearAvSubscriptions().then((result) => {
        updateSubscriptionState(result && result.subscriptions ? result.subscriptions : []);
        setSummaryMessage(`已清空全部订阅，共清除 ${normalizeCount(result && result.clearedCount, 0)} 条。`);
        appendLog('warn', `已清空全部订阅，共清除 ${normalizeCount(result && result.clearedCount, 0)} 条。`);
      });
    }

    function renderLogsFromState() {
      if (!elements.subscriptionLogView) {
        return;
      }
      clearChildren(elements.subscriptionLogView);
      if (state.logs.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'subscription-empty';
        empty.textContent = '当前还没有执行日志。';
        elements.subscriptionLogView.appendChild(empty);
        return;
      }
      const fragment = document.createDocumentFragment();
      state.logs.forEach((item) => {
        const line = document.createElement('div');
        line.className = 'log-line';
        line.innerHTML = `<strong>${escapeHtml(item.level)}</strong> ${escapeHtml(item.message)}`;
        fragment.appendChild(line);
      });
      elements.subscriptionLogView.appendChild(fragment);
    }

    function bindAsyncClick(button, handler, onError) {
      if (typeof bindAsyncClickHelper === 'function') {
        bindAsyncClickHelper(button, handler, {
          onError,
          fallbackErrorHandler: (error) => appendLog('error', getErrorMessage(error))
        });
        return;
      }
      if (!button) {
        return;
      }
      button.addEventListener('click', async () => {
        try {
          await handler();
        } catch (error) {
          if (typeof onError === 'function') {
            onError(error);
            return;
          }
          appendLog('error', getErrorMessage(error));
        }
      });
    }

    function bindEvents() {
      bindAsyncClick(elements.subscriptionDetectAllButton, refreshAllSubscriptions);
      bindAsyncClick(elements.subscriptionImportRecentButton, async () => {
        const option = getSelectedRecentCrawlOption();
        if (!option) {
          throw new Error('请先选择最近抓取记录。');
        }
        applyRecentCrawlOption(option);
      });
      bindAsyncClick(elements.subscriptionUseSeedButton, async () => {
        const option = getSelectedRecentCrawlOption();
        if (!option) {
          throw new Error('请先选择最近抓取记录。');
        }
        applyRecentCrawlOption(option);
      });
      bindAsyncClick(elements.subscriptionScanButton, scanSubscriptionsFromOutput);
      bindAsyncClick(elements.subscriptionAddButton, addSubscription);
      bindAsyncClick(elements.subscriptionRefreshButton, async () => {
        const selectedId = normalizeText(state.selectedId);
        if (!selectedId) {
          throw new Error('请先选中一条订阅，再执行“检测更新”。');
        }
        await refreshOneSubscription(selectedId);
      });
      bindAsyncClick(elements.subscriptionClearAllButton, clearAllSubscriptions);
      bindAsyncClick(elements.subscriptionManualCreateButton, addSubscription);
      bindAsyncClick(elements.subscriptionManualImportButton, async () => {
        const file = elements.subscriptionManualJsonInput && elements.subscriptionManualJsonInput.files
          ? elements.subscriptionManualJsonInput.files[0]
          : null;
        if (!file) {
          throw new Error('请先选择 JSON 文件。');
        }
        const text = await file.text();
        const payload = JSON.parse(text);
        state.pendingImportedJson = payload;
        if (!payload || typeof payload !== 'object') {
          throw new Error('JSON 文件内容无效。');
        }
        const actressName = normalizeText(payload.actressName || payload.name);
        const crawlUrl = normalizeText(payload.crawlUrl || payload.url);
        const baselineCodes = normalizeCodes(
          Array.isArray(payload.baselineCodes)
            ? payload.baselineCodes
            : Array.isArray(payload.codes)
              ? payload.codes
              : []
        );
        if (!actressName || !crawlUrl || baselineCodes.length === 0) {
          throw new Error('JSON 导入失败：至少需要女优名称、抓取地址和唯一番号列表。');
        }
        const imported = await desktopApi.scanAvSubscriptionsFromOutput({
          artifactInput: normalizeText(payload.artifactInput || payload.outputDir || payload.crawlProfilePath || payload.filmDataPath)
        }).catch(() => null);
        if (imported && imported.subscriptions) {
          updateSubscriptionState(imported.subscriptions);
        }
        setSummaryMessage(`已处理 JSON 导入：${actressName}。`);
        appendLog('info', `JSON 导入完成：${actressName}，基线番号 ${baselineCodes.length} 个。`);
      });

      if (elements.subscriptionCrawlerProxy) {
        elements.subscriptionCrawlerProxy.addEventListener('input', scheduleSubscriptionProxyValidation);
        elements.subscriptionCrawlerProxy.addEventListener('blur', async () => {
          applyDefaultSubscriptionProxy();
          await validateSubscriptionProxyValue(resolveSubscriptionProxyValue());
        });
      }
      if (elements.subscriptionCrawlerCloudflare) {
        elements.subscriptionCrawlerCloudflare.addEventListener('change', () => {
          const enabled = resolveSubscriptionCloudflareEnabled();
          appendLog('info', `Cloudflare 兼容：${enabled ? '已启用' : '已关闭'}。`);
          setSubscriptionCrawlerStatus(enabled && state.antiBlockReady ? '准备就绪' : '待启动');
        });
      }
      if (elements.subscriptionUpdateAntiBlockButton) {
        bindAsyncClick(elements.subscriptionUpdateAntiBlockButton, updateSubscriptionAntiBlock);
      }

      if (elements.subscriptionUseLatestOutputButton) {
        bindAsyncClick(elements.subscriptionUseLatestOutputButton, async () => {
          const { artifactInput: latestOutput, message } = await artifactInputHelper.fillLatestArtifactInput(desktopApi);
          if (latestOutput && elements.subscriptionOutput) {
            elements.subscriptionOutput.value = latestOutput;
            appendLog('info', message || `已回填最近抓取结果输入：${latestOutput}`);
          }
        });
      }
      if (elements.subscriptionUseRecentCrawlButton) {
        bindAsyncClick(elements.subscriptionUseRecentCrawlButton, async () => {
          const option = getSelectedRecentCrawlOption();
          if (!option) {
            throw new Error('请先选择最近抓取记录。');
          }
          applyRecentCrawlOption(option);
        });
      }
      if (elements.subscriptionClearFormButton) {
        elements.subscriptionClearFormButton.addEventListener('click', () => {
          clearForm();
          appendLog('info', '已清空订阅输入表单。');
        });
      }

      if (elements.subscriptionStartCrawlButton) {
        bindAsyncClick(elements.subscriptionStartCrawlButton, startPreparedSubscriptionCrawl);
      }
      if (elements.subscriptionBatchCrawlButton) {
        bindAsyncClick(elements.subscriptionBatchCrawlButton, startBatchCrawl);
      }
      if (elements.subscriptionStopCrawlButton) {
        bindAsyncClick(elements.subscriptionStopCrawlButton, stopIndependentCrawl);
      }

      if (elements.subscriptionList) {
        elements.subscriptionList.addEventListener('click', (event) => {
          const target = event.target;
          if (!(target instanceof HTMLElement)) {
            return;
          }
          const card = target.closest('.subscription-card');
          if (card instanceof HTMLElement) {
            const itemId = normalizeText(card.dataset.id);
            if (itemId) {
              state.selectedId = itemId;
              renderSubscriptionList();
              renderSubscriptionDetail();
            }
          }
        });
      }
    }

    function bootstrap() {
      publishActiveSubscriptionCrawlSession(null);
      bindEvents();
      renderLogsFromState();
      setSummaryCounts();
      renderSubscriptionDetail();
      setSubscriptionCrawlerStatus('待启动');
      applyDefaultSubscriptionProxy();
      applySubscriptionCrawlerDefaults();
      if (elements.subscriptionCrawlerCloudflare) {
        elements.subscriptionCrawlerCloudflare.checked = true;
      }
      setSubscriptionProxyStatus('checking');
      setSummaryMessage('等待检测订阅更新。');
      appendLog('info', 'AV 订阅 V2 模块已就绪。');
      void validateSubscriptionProxyValue(resolveSubscriptionProxyValue()).then(() => {
        scheduleSubscriptionProxyAutoValidation();
      });
      bindSubcrawlEvents();
      return loadRecentCrawlOptionsFromHistory()
        .then(() => loadSubscriptions())
        .catch((error) => {
          appendLog('error', getErrorMessage(error));
          setSummaryMessage('订阅列表加载失败，请稍后重试。');
        });
    }

    return {
      bootstrap
    };
  }

  globalScope.desktopSubscriptionController = {
    createSubscriptionController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);


/* ==== renderer/platformBridge.wails.js ==== */
// Primary frontend bridge for the current Wails desktop runtime.
// Renderer controllers should treat this file as the default command/event
// entrypoint; sidecar-specific behavior is a compatibility path, not the first
// place to debug ordinary Wails UI issues.
//
// Maintenance boundary:
// - command invocation and event subscription helpers live here
// - renderer controllers consume this bridge, but do not shape transport details
// - historical Electron/runtime quirks should stay behind compatibility helpers
//
// File map for maintainers:
// 1) Wails binding readiness and retry helpers
// 2) command invoke helpers and API wrappers
// 3) runtime event subscribe/unsubscribe helpers
(function registerWailsPlatformBridge(globalScope) {
  // Ownership summary:
  // 1) invoke Wails bridge commands with normalized payload conventions
  // 2) subscribe/unsubscribe runtime events for renderer controllers
  // 3) keep startup/retry transport concerns centralized and out of feature UI
  const bridgeProtocol = globalScope.desktopBridgeProtocol || null;
  const bridgeEvents = bridgeProtocol && bridgeProtocol.BRIDGE_EVENTS ? bridgeProtocol.BRIDGE_EVENTS : null;
  const RETRYABLE_COMMANDS = new Set([
    'app:get-crawl-run-context',
    'app:get-crawl-stage-panel',
    'app:get-crawl-result-panel',
    'app:get-crawl-task-snapshot',
    'app:get-log-context',
    'app:validate-proxy',
    'app:get-integration-context',
    'app:get-ad-learning-summary',
    'app:get-dependency-status',
    'app:get-actress-rankings',
    'app:load-crawl-film-codes',
    'app:list-av-subscriptions-v2',
    'app:scan-av-subscriptions-v2-from-output',
    'app:add-av-subscription-v2-manual',
    'app:refresh-av-subscriptions-v2',
    'app:refresh-av-subscription-v2',
    'app:remove-av-subscription-v2',
    'app:clear-av-subscriptions-v2',
    'app:mark-av-subscription-v2-synced',
    'app:prepare-av-subscription-v2-crawl',
    'app:start-av-subscription-v2-crawl',
    'app:stop-av-subscription-v2-crawl',
    'app:av-subscription-v2-crawl-status',
    'app:update-ad-learning-model',
    'app:import-ad-learning-samples',
    'app:learn-ad-samples-by-codes',
    'app:install-dependency',
    'app:resolve-actress-crawl-target',
    'app:run-organizer',
    'app:start-crawl',
    'app:restart-crawl',
    'app:stop-crawl',
    'app:update-antiblock'
  ]);

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function resolveBridgeEvent(eventKey, fallbackEventName) {
    return bridgeEvents && bridgeEvents[eventKey] ? bridgeEvents[eventKey] : fallbackEventName;
  }

  function waitForWailsBinding(maxAttempts = 60, intervalMs = 150) {
    return new Promise((resolve, reject) => {
      let attempts = 0;

      function poll() {
        attempts += 1;
        const binding = globalScope.go && globalScope.go.main && globalScope.go.main.App;
        const runtime = globalScope.runtime;

        if (binding && typeof binding.Call === 'function' && runtime) {
          resolve({ binding, runtime });
          return;
        }

        if (attempts >= maxAttempts) {
          reject(new Error('Wails binding is not ready.'));
          return;
        }

        setTimeout(poll, intervalMs);
      }

      poll();
    });
  }

  function shouldRetryInvoke(command, error) {
    if (!RETRYABLE_COMMANDS.has(command)) {
      return false;
    }

    const message = error instanceof Error ? error.message : String(error || '');
    return /sidecar|startup|starting|deadline|timed out|eof|broken pipe/i.test(message);
  }

  async function invoke(command, payload) {
    const { binding } = await waitForWailsBinding();
    const normalizedCommand = String(command || '').trim();
    const normalizedPayload =
      payload && typeof payload === 'object' ? payload : payload == null ? {} : { value: payload };
    const maxAttempts = RETRYABLE_COMMANDS.has(normalizedCommand) ? 6 : 1;
    let lastError = null;

    // Retry is reserved for startup/bridge-readiness style queries and commands.
    // Business retries belong in the owning Go/feature service, not here, so a
    // transport retry does not quietly become a domain-level retry policy.
    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
      try {
        const rawResult = await binding.Call(normalizedCommand, normalizedPayload);

        if (typeof rawResult !== 'string' || !rawResult.trim()) {
          return null;
        }

        return JSON.parse(rawResult);
      } catch (error) {
        lastError = error;
        if (!shouldRetryInvoke(normalizedCommand, error) || attempt >= maxAttempts - 1) {
          throw error;
        }

        await delay(200 * (attempt + 1));
      }
    }

    throw lastError;
  }

  function subscribe(eventName, callback) {
    let disposed = false;
    let unsubscribe = null;

    // Subscription is intentionally lazy because renderer bootstrap may ask for
    // listeners before Wails runtime is fully ready. Keep the delayed attach
    // here instead of pushing readiness polling into each controller.
    void waitForWailsBinding()
      .then(({ runtime }) => {
        if (disposed || !runtime || typeof runtime.EventsOn !== 'function') {
          return;
        }

        unsubscribe = runtime.EventsOn(eventName, callback);
      })
      .catch(() => {});

    return () => {
      disposed = true;
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }

  function noPayloadCommand(command) {
    return () => invoke(command);
  }

  function optionsCommand(command) {
    return (options) => invoke(command, options);
  }

  function singleValueCommand(command, key) {
    return (value) => invoke(command, { [key]: value });
  }

  function twoValueCommand(command, firstKey, secondKey) {
    return (firstValue, secondValue) => invoke(command, { [firstKey]: firstValue, [secondKey]: secondValue });
  }

  function directEventSubscription(eventName) {
    return (callback) => subscribe(eventName, callback);
  }

  function bridgeEventSubscription(eventKey, fallbackEventName) {
    return (callback) => subscribe(resolveBridgeEvent(eventKey, fallbackEventName), callback);
  }

  function buildResolvedArtifactInput(value, type, sourceKind, sourceOrigin) {
    // Keep artifact-input identity explicit so downstream controllers know
    // whether they received a direct artifact file or only a crawl-output-dir
    // fallback.
    const normalizedSourceKind = String(sourceKind || '').trim();
    return {
      value: String(value || '').trim(),
      type: String(type || '').trim(),
      sourceKind: normalizedSourceKind,
      sourceOrigin: String(sourceOrigin || '').trim(),
      isFallbackOutputDir: normalizedSourceKind === 'crawlOutputDir'
    };
  }

  function emptyResolvedArtifactInput() {
    return buildResolvedArtifactInput('', '', '', '');
  }

  function resolveArtifactInputFromOutputDir(outputDir, sourceOrigin) {
    const normalizedOutputDir = String(outputDir || '').trim();
    if (!normalizedOutputDir) {
      return null;
    }

    return buildResolvedArtifactInput(
      normalizedOutputDir,
      'crawlOutputDir',
      'crawlOutputDir',
      sourceOrigin
    );
  }

  function resolveArtifactInputFromContext(runContext, artifactKey, artifactType) {
    const artifactPath = String(runContext && artifactKey ? runContext[artifactKey] : '').trim();
    if (artifactPath) {
      return buildResolvedArtifactInput(artifactPath, artifactType, 'artifact', 'runContextArtifact');
    }

    const preferredOutputDir = String(
      runContext && runContext.preferredOutputDir ? runContext.preferredOutputDir : ''
    ).trim();
    return resolveArtifactInputFromOutputDir(preferredOutputDir, 'runContextOutputDir');
  }

  function resolveArtifactInputFromResultPanel(resultPanel) {
    return resolveArtifactInputFromOutputDir(
      resultPanel && resultPanel.outputDir ? resultPanel.outputDir : '',
      'resultPanelOutputDir'
    );
  }

  function buildDesktopCommandApi() {
    return {
      getSettings: noPayloadCommand('app:get-settings'),
      getCrawlRunContext: noPayloadCommand('app:get-crawl-run-context'),
      getCrawlStagePanel: noPayloadCommand('app:get-crawl-stage-panel'),
      getCrawlResultPanel: noPayloadCommand('app:get-crawl-result-panel'),
      getCrawlReviewPanel: noPayloadCommand('app:get-crawl-review-panel'),
      getCrawlTaskSnapshot: noPayloadCommand('app:get-crawl-task-snapshot'),
      getLogContext: noPayloadCommand('app:get-log-context'),
      showAlert: optionsCommand('app:show-alert'),
      validateProxy: twoValueCommand('app:validate-proxy', 'proxyValue', 'options'),
      listCrawlCacheSnapshots: noPayloadCommand('app:list-crawl-cache-snapshots'),
      removeCrawlCacheSnapshot: singleValueCommand('app:remove-crawl-cache-snapshot', 'cacheKey'),
      clearCrawlCacheSnapshots: noPayloadCommand('app:clear-crawl-cache-snapshots'),
      chooseOutput: noPayloadCommand('app:choose-output'),
      chooseBackgroundImage: noPayloadCommand('app:choose-background-image'),
      clearBackgroundImage: noPayloadCommand('app:clear-background-image'),
      chooseOrganizerRoot: noPayloadCommand('app:choose-organizer-root'),
      chooseLearningSamples: noPayloadCommand('app:choose-learning-samples'),
      getIntegrationContext: noPayloadCommand('app:get-integration-context'),
      getRunQualitySummary: optionsCommand('app:get-run-quality-summary'),
      getAdLearningSummary: noPayloadCommand('app:get-ad-learning-summary'),
      getDependencyStatus: noPayloadCommand('app:get-dependency-status'),
      installDependency: twoValueCommand('app:install-dependency', 'name', 'downloadUrl'),
      uninstallDependency: singleValueCommand('app:uninstall-dependency', 'name'),
      updateAdLearningModel: optionsCommand('app:update-ad-learning-model'),
      importAdLearningSamples: optionsCommand('app:import-ad-learning-samples'),
      learnAdSamplesByCodes: optionsCommand('app:learn-ad-samples-by-codes'),
      loadCrawlFilmCodes: optionsCommand('app:load-crawl-film-codes'),
      listAvSubscriptions: noPayloadCommand('app:list-av-subscriptions-v2'),
      // Preferred field is `artifactInput`; `outputDir` remains accepted only as
      // a compatibility alias while subscription import is being decoupled from
      // older "pick any crawl output path" wording.
      scanAvSubscriptionsFromOutput: optionsCommand('app:scan-av-subscriptions-v2-from-output'),
      addAvSubscription: optionsCommand('app:add-av-subscription-v2-manual'),
      refreshAvSubscriptions: optionsCommand('app:refresh-av-subscriptions-v2'),
      refreshAvSubscription: optionsCommand('app:refresh-av-subscription-v2'),
      removeAvSubscription: singleValueCommand('app:remove-av-subscription-v2', 'id'),
      clearAvSubscriptions: noPayloadCommand('app:clear-av-subscriptions-v2'),
      markAvSubscriptionSynced: singleValueCommand('app:mark-av-subscription-v2-synced', 'id'),
      patchAvSubscription: optionsCommand('app:patch-av-subscription-v2'),
      prepareAvSubscriptionCrawl: singleValueCommand('app:prepare-av-subscription-v2-crawl', 'id'),
      startSubscriptionCrawl: optionsCommand('app:start-av-subscription-v2-crawl'),
      finalizeAvSubscriptionCrawl: optionsCommand('app:finalize-av-subscription-v2-crawl'),
      stopSubscriptionCrawl: noPayloadCommand('app:stop-av-subscription-v2-crawl'),
      getSubscriptionCrawlStatus: noPayloadCommand('app:av-subscription-v2-crawl-status'),
      openPath: singleValueCommand('app:open-path', 'targetPath'),
      openOrganizerPath: twoValueCommand('app:open-organizer-path', 'rootPath', 'kind'),
      openOutputDir: singleValueCommand('app:open-output-dir', 'targetPath'),
      openExternal: singleValueCommand('app:open-external', 'targetUrl'),
      openLogFolder: noPayloadCommand('app:open-log-folder'),
      openMagnetFile: singleValueCommand('app:open-magnet-file', 'targetOutput'),
      getActressRankings: optionsCommand('app:get-actress-rankings'),
      resolveActressCrawlTarget: optionsCommand('app:resolve-actress-crawl-target'),
      runOrganizer: optionsCommand('app:run-organizer'),
      startCrawl: optionsCommand('app:start-crawl'),
      restartCrawl: optionsCommand('app:restart-crawl'),
      stopCrawl: noPayloadCommand('app:stop-crawl'),
      updateAntiBlock: optionsCommand('app:update-antiblock')
    };
  }

  function buildDesktopEventApi() {
    return {
      // `runner:*` topics are the long-lived raw compatibility feeds.
      // `crawl.*` topics below are the preferred Go-derived UI panel contracts.
      onLog: directEventSubscription('runner:log'),
      onState: directEventSubscription('runner:state'),
      onUiState: bridgeEventSubscription('crawlUiState', 'crawl.ui-state'),
      onStagePanel: bridgeEventSubscription('crawlStagePanel', 'crawl.stage-panel'),
      onResultPanel: bridgeEventSubscription('crawlResultPanel', 'crawl.result-panel'),
      onRunContext: bridgeEventSubscription('crawlRunContext', 'crawl.run-context'),
      onReviewPanel: bridgeEventSubscription('crawlReviewPanel', 'crawl.review-panel'),
      onQualitySummary: bridgeEventSubscription('crawlQualitySummary', 'crawl.quality-summary'),
      onLogContext: directEventSubscription('runner:log-context'),
      onOrganizerLog: directEventSubscription('organizer:log'),
      onOrganizerState: directEventSubscription('organizer:state'),
      onDependencyInstallProgress: directEventSubscription('dependency.install-progress'),
      onSubcrawlState: directEventSubscription('subcrawlv2.state'),
      onSubcrawlLog: directEventSubscription('subcrawlv2.log'),
      onAvSubscriptionV2Log: directEventSubscription('avsubscriptionv2.log'),
      onAvSubscriptionV2ListUpdated: directEventSubscription('avsubscriptionv2.list-updated'),
      onSidecarLifecycle: bridgeEventSubscription('sidecarLifecycle', 'sidecar.lifecycle'),
      onAppNotice: bridgeEventSubscription('appNotice', 'app.notice'),
      onBridgeEvent: bridgeEventSubscription('generic', 'bridge:event')
    };
  }

  function createArtifactInputResolver() {
    async function resolveLatestInput(desktopApi, options = {}) {
      const api = desktopApi || null;
      if (!api) {
        return emptyResolvedArtifactInput();
      }

      const artifactKey = String(options.artifactKey || '').trim();
      const artifactType = String(options.artifactType || artifactKey || 'artifact').trim();

      if (typeof api.getCrawlRunContext === 'function') {
        const runContext = await invokeOptionalQuery(() => api.getCrawlRunContext());
        const resolvedFromRunContext = resolveArtifactInputFromContext(runContext, artifactKey, artifactType);
        if (resolvedFromRunContext) {
          return resolvedFromRunContext;
        }
      }

      if (typeof api.getCrawlResultPanel === 'function') {
        const resultPanel = await invokeOptionalQuery(() => api.getCrawlResultPanel());
        const resolvedFromResultPanel = resolveArtifactInputFromResultPanel(resultPanel);
        if (resolvedFromResultPanel) {
          return resolvedFromResultPanel;
        }
      }

      return emptyResolvedArtifactInput();
    }

    // Renderer controllers use the "safe" variant when autofill is optional.
    // If run-context/result-panel lookups fail, callers should receive the same
    // normalized empty object instead of each controller carrying its own catch
    // branch and empty-state shape.
    async function resolveLatestInputSafe(desktopApi, options = {}) {
      const resolved = await invokeOptionalQuery(() => resolveLatestInput(desktopApi, options));
      if (resolved && typeof resolved === 'object') {
        return resolved;
      }
      return emptyResolvedArtifactInput();
    }

    function describeResolvedInput(action, resolvedInput, labels = {}) {
      const mode = String(action || '').trim();
      const resolved = resolvedInput && typeof resolvedInput === 'object' ? resolvedInput : {};
      const value = String(resolved.value || '').trim();
      const type = String(resolved.type || '').trim();
      const sourceKind = String(resolved.sourceKind || '').trim();
      if (!value) {
        return '';
      }

      const snapshotLabel = String(labels.snapshot || '订阅快照').trim();
      const fallbackLabel = String(labels.fallback || '抓取结果输入').trim();
      const verb = mode === 'filled' ? '已填入最近' : '自动回填最近';

      const usesFallbackLabel =
        Boolean(resolved.isFallbackOutputDir) ||
        sourceKind === 'crawlOutputDir' ||
        type === 'crawlOutputDir';

      if (!usesFallbackLabel && (sourceKind || type)) {
        return `${verb}${snapshotLabel}：${value}`;
      }
      return `${verb}${fallbackLabel}：${value}`;
    }

    function describeResolvedInputOrFallback(action, resolvedInput, labels = {}, fallbackValue = '') {
      const resolvedMessage = describeResolvedInput(action, resolvedInput, labels);
      if (resolvedMessage) {
        return resolvedMessage;
      }

      const normalizedFallbackValue = String(fallbackValue || '').trim();
      if (!normalizedFallbackValue) {
        return '';
      }

      const fallbackLabel = String(labels.fallback || '抓取结果输入').trim();
      const verb = String(action || '').trim() === 'filled' ? '已回填最近' : '自动回填最近';
      return `${verb}${fallbackLabel}：${normalizedFallbackValue}`;
    }

    return {
      resolveLatestInput,
      resolveLatestInputSafe,
      emptyResolvedInput: emptyResolvedArtifactInput,
      describeResolvedInput,
      describeResolvedInputOrFallback
    };
  }

  function createDesktopApi() {
    return Object.assign({}, buildDesktopCommandApi(), buildDesktopEventApi());
  }

  async function invokeOptionalQuery(queryFn) {
    if (typeof queryFn !== 'function') {
      return null;
    }

    const resolved = await queryFn().catch(() => null);
    return resolved && typeof resolved === 'object' ? resolved : null;
  }

  const artifactInputResolver = createArtifactInputResolver();
  globalScope.desktopWailsPlatformBridge = {
    createDesktopApi,
    invokeOptionalQuery,
    getArtifactInputResolver: () => artifactInputResolver
  };

  // Shared resolver for "latest crawl-derived input" on the frontend side.
  // Downstream modules should reuse this helper instead of each carrying their
  // own run-context/result-panel fallback chain.
  //
  // Return contract:
  // - value: the path the caller should reuse
  // - type: semantic source label
  // - sourceKind: whether the reused value is a preferred artifact path or a
  //   crawl-output-directory fallback
  // - sourceOrigin: which panel/context produced the value, so future logging
  //   or diagnostics can explain where the autofill came from
  //
  // Important: even when the best fallback is only a crawl output directory,
  // we still label it as `crawlOutputDir` rather than a generic `outputDir`.
  // That keeps renderer-side terminology aligned with organizer/subscription
  // artifact-import boundaries and avoids spreading older Electron wording.
  globalScope.desktopArtifactInputResolver = artifactInputResolver;
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/platformBridge.js ==== */
// Thin selector that exposes the active desktop bridge implementation.
// In the current product this should normally resolve to the Wails bridge.
//
// Selector rule:
// keep environment selection here only. Feature controllers should not start
// branching on bridge flavor by themselves.
//
// Ownership summary:
// 1) choose the active renderer-facing transport implementation
// 2) expose optional query passthroughs that can degrade gracefully
// 3) keep bridge-flavor checks out of feature controllers and view helpers
//
// Protocol packet shaping belongs to bridgeProtocol.js plus the concrete bridge
// implementation. This selector should stay a thin routing layer only.
//
// File map for maintainers:
// 1) active bridge selection helpers
// 2) optional artifact/query passthrough helpers
// 3) exported desktop bridge selector surface
(function registerPlatformBridge(globalScope) {
  function getWailsBridge() {
    return globalScope.desktopWailsPlatformBridge &&
      typeof globalScope.desktopWailsPlatformBridge.createDesktopApi === 'function'
      ? globalScope.desktopWailsPlatformBridge
      : null;
  }

  function getArtifactInputResolver() {
    // Artifact input helpers are an optional convenience surface. Feature
    // controllers may consume the resolver, but they should not infer platform
    // identity from its presence or absence.
    const bridge = getWailsBridge();
    if (bridge && typeof bridge.getArtifactInputResolver === 'function') {
      return bridge.getArtifactInputResolver();
    }
    return globalScope.desktopArtifactInputResolver || null;
  }

  function createDesktopApi() {
    const bridge = getWailsBridge();
    if (bridge) {
      return bridge.createDesktopApi();
    }
    return null;
  }

  function invokeOptionalQuery(queryFn) {
    const bridge = getWailsBridge();
    if (bridge && typeof bridge.invokeOptionalQuery === 'function') {
      return bridge.invokeOptionalQuery(queryFn);
    }
    return typeof queryFn === 'function' ? queryFn().catch(() => null) : Promise.resolve(null);
  }

  globalScope.desktopPlatformBridge = {
    createDesktopApi,
    invokeOptionalQuery,
    getArtifactInputResolver
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/crawlRuntimeController.js ==== */
// Crawl runtime controller owns crawler-specific renderer hydration:
// 1) subscribe to Go/compat crawl events
// 2) hydrate stage/result/review panels at startup
// 3) keep run-context, quality-summary, and compatibility fallbacks together
//
// It should not own generic workspace switching or crawler form input logic.
//
// Ownership summary:
// 1) own crawl runtime event consumption and panel hydration
// 2) keep startup fallback queries together for crawl-only read models
// 3) stay separate from editable crawler form state and workspace shell logic
//
// File map for maintainers:
// 1) runtime capability detection and bootstrap guards
// 2) event-feed binding and live payload handlers
// 3) startup panel hydration and fallback query helpers
(function initializeCrawlRuntimeController(globalScope) {
  // createCrawlRuntimeController owns live event consumption and runtime-panel
  // hydration. It should stay separate from editable form state.
  function createCrawlRuntimeController(options) {
    const { desktopApi, platformBridge, elements, uiText, logController, stateController, crawlPanelModel } = options;
    const { UI_TEXT, STATUS_LABELS } = uiText;
    const supportsGoUiState = typeof desktopApi.onUiState === 'function';
    const supportsGoStagePanel = typeof desktopApi.onStagePanel === 'function';
    const supportsGoResultPanel = typeof desktopApi.onResultPanel === 'function';
    const supportsGoRunContext = typeof desktopApi.onRunContext === 'function';
    const supportsGoReviewPanel = typeof desktopApi.onReviewPanel === 'function';
    const supportsGoQualitySummary = typeof desktopApi.onQualitySummary === 'function';

    // Runtime-controller workflow map:
    // 1) bind live feeds once
    // 2) hydrate startup panels once
    // 3) normalize incoming log/state/panel payloads
    // 4) hand UI-facing state updates to stateController/logController
    //
    // If a bug is about "what the crawler did", inspect backend services first.
    // If a bug is about "why the page did not reflect backend state", start here.

    // Crawl runtime renderer state is intentionally feed-oriented:
    // - one-time feed binding guards
    // - one-time startup panel hydration guards
    // - last-seen dedupe markers for log-path and quality-summary output
    // Crawler form state stays outside this controller.
    let lastAnnouncedLogPath = '';
    let lastQualitySummarySignature = '';
    let feedsBound = false;
    let clearHistoryBound = false;
    let panelsBootstrapped = false;
    let bootstrapPanelsPromise = null;

    function isSubscriptionBridgeSessionActive() {
      const session = globalScope.__desktopActiveSubscriptionCrawlSession;
      return Boolean(session && typeof session === 'object' && session.subscriptionId);
    }

    function appendLog(level, message, timestamp = new Date().toISOString()) {
      logController.appendLog(level, message, timestamp);
    }

    function appendEntry(entry) {
      if (!entry) {
        return;
      }
      appendLog(entry.level, entry.message, entry.timestamp);
    }

    function queryOptionalPanel(queryFn) {
      // Optional panel queries stay behind one helper so startup hydration does
      // not duplicate "catch and continue" logic in several branches.
      if (platformBridge && typeof platformBridge.invokeOptionalQuery === 'function') {
        return platformBridge.invokeOptionalQuery(queryFn);
      }
      return typeof queryFn === 'function' ? queryFn().catch(() => null) : Promise.resolve(null);
    }

    // Panel hydration helpers below are intentionally tolerant:
    // missing optional feeds should degrade to "skip this panel" instead of
    // crashing the whole renderer bootstrap path.

    // Crawl log events can arrive from two compatibility shapes:
    // 1) legacy flat entries: { level, message, timestamp }
    // 2) bridge-style envelopes: { event, domain, data: { ...entry } }
    // Keep the renderer tolerant to both so sidecar/bridge refactors do not
    // silently blank the visible log panel.
    function unwrapLogEntry(entry) {
      if (!entry) {
        return null;
      }

      const candidate =
        entry.data && typeof entry.data === 'object' && !Array.isArray(entry.data) ? entry.data : entry;
      const message = typeof candidate.message === 'string' ? candidate.message : '';
      if (!message.trim()) {
        return null;
      }

      return {
        level: typeof candidate.level === 'string' ? candidate.level : 'info',
        message,
        timestamp: candidate.timestamp || entry.timestamp || new Date().toISOString()
      };
    }

    function bindExternalLink(linkElement) {
      if (!linkElement) {
        return;
      }

      linkElement.addEventListener('click', async (event) => {
        const targetUrl = linkElement.href || linkElement.getAttribute('href');
        if (!targetUrl) {
          return;
        }

        event.preventDefault();
        await desktopApi.openExternal(targetUrl);
      });
    }

    function formatQualitySummary(summary) {
      if (summary && typeof summary.summaryLine === 'string' && summary.summaryLine.trim()) {
        return summary.summaryLine.trim();
      }

      const target = Number(summary && summary.targetLimit) || 0;
      const targetText = target > 0 ? String(target) : '未设目标';
      const validationText = summary && summary.secondValidationPassed ? '通过' : '未通过';
      const reportText = summary && summary.reportPath ? `；报告 ${summary.reportPath}` : '';

      return [
        `Go复盘摘要：${(summary && summary.statusText) || '已生成'}`,
        `目标 ${targetText}`,
        `唯一磁力 ${Number(summary && summary.magnetUnique) || 0}`,
        `影片记录 ${Number(summary && summary.filmRecordTotal) || 0}`,
        `二次校验 ${validationText}${reportText}`
      ].join('；');
    }

    function appendQualitySummaryLogs(summary) {
      const level =
        crawlPanelModel && typeof crawlPanelModel.resolveQualitySummaryLevel === 'function'
          ? crawlPanelModel.resolveQualitySummaryLevel(summary)
          : summary && typeof summary.noticeLevel === 'string' && summary.noticeLevel.trim()
            ? summary.noticeLevel.trim()
            : summary && summary.status === 'error'
              ? 'error'
              : summary && summary.status === 'warning'
                ? 'warn'
                : 'info';
      appendLog(level, formatQualitySummary(summary));

      const suggestionLines =
        crawlPanelModel && typeof crawlPanelModel.buildQualitySuggestionLines === 'function'
          ? crawlPanelModel.buildQualitySuggestionLines(summary)
          : [];
      suggestionLines.forEach((item) => {
        appendLog(item.level || 'info', `Go复盘建议：${item.line}`);
      });
    }

    // Quality-summary helpers form one closed loop:
    // fetch summary -> log summary/suggestions -> merge summary into result
    // panel. When crawl output counts look inconsistent, debug this section
    // before inspecting generic state or review panel rendering.
    function mergeQualitySummaryIntoResultPanel(summary) {
      if (!summary || !lastResultPanel) {
        return;
      }

      lastResultPanel = {
        ...lastResultPanel,
        qualityStatus: summary.status || lastResultPanel.qualityStatus || lastResultPanel.status || 'idle',
        qualityStatusText:
          summary.statusText || lastResultPanel.qualityStatusText || '尚未生成复盘摘要',
        qualityNoticeLevel: summary.noticeLevel || lastResultPanel.qualityNoticeLevel || 'info',
        qualitySummaryLine:
          summary.summaryLine || lastResultPanel.qualitySummaryLine || lastResultPanel.message || '',
        qualityCompletedAt: summary.completedAt || lastResultPanel.qualityCompletedAt || '',
        qualityDurationSec:
          Number.isFinite(Number(summary.durationSeconds))
            ? Number(summary.durationSeconds)
            : lastResultPanel.qualityDurationSec || 0,
        reportPath: summary.reportPath || lastResultPanel.reportPath || '',
        latestLogPath: summary.latestLogPath || lastResultPanel.latestLogPath || '',
        logDir: summary.logDir || lastResultPanel.logDir || '',
        outputDir: summary.outputDir || lastResultPanel.outputDir || '',
        filmDataPath: summary.filmDataPath || lastResultPanel.filmDataPath || '',
        magnetPath: summary.magnetPath || lastResultPanel.magnetPath || '',
        reportExists:
          typeof lastResultPanel.reportExists === 'boolean'
            ? lastResultPanel.reportExists
            : Boolean(summary.reportPath),
        latestLogExists:
          typeof lastResultPanel.latestLogExists === 'boolean'
            ? lastResultPanel.latestLogExists
            : Boolean(summary.latestLogPath),
        logDirExists:
          typeof lastResultPanel.logDirExists === 'boolean'
            ? lastResultPanel.logDirExists
            : Boolean(summary.logDir),
        outputDirExists:
          typeof lastResultPanel.outputDirExists === 'boolean'
            ? lastResultPanel.outputDirExists
            : Boolean(summary.outputDir),
        filmDataExists:
          typeof lastResultPanel.filmDataExists === 'boolean'
            ? lastResultPanel.filmDataExists
            : Boolean(summary.filmDataPath),
        magnetExists:
          typeof lastResultPanel.magnetExists === 'boolean'
            ? lastResultPanel.magnetExists
            : Boolean(summary.magnetPath)
      };

      stateController.applyResultPanel(lastResultPanel);
    }

    // Quality-summary refresh is a post-run read-model query. Keep it separate
    // from live event feeds so "crawl execution failed" and "summary/report
    // rendering failed" can be diagnosed as two different layers.
    async function refreshRunQualitySummary(state) {
      if (!desktopApi || typeof desktopApi.getRunQualitySummary !== 'function') {
        return;
      }

      const requestModel =
        crawlPanelModel && typeof crawlPanelModel.buildRunQualitySummaryRequest === 'function'
          ? crawlPanelModel.buildRunQualitySummaryRequest(state, elements.output.value)
          : {
              outputDir: String(
                (state && (state.outputDir || state.currentTaskOutputDir || state.targetOutput)) ||
                  elements.output.value ||
                  ''
              ).trim(),
              signature: `${String(
                (state && (state.outputDir || state.currentTaskOutputDir || state.targetOutput)) ||
                  elements.output.value ||
                  ''
              ).trim()}|${state && state.message ? state.message : ''}`
            };
      const outputDir = String(requestModel && requestModel.outputDir ? requestModel.outputDir : '').trim();
      const signature = String(requestModel && requestModel.signature ? requestModel.signature : '').trim();
      // Signature-based dedupe keeps quality-summary refresh tied to meaningful
      // crawl-state changes instead of every transient UI event.
      if (signature === lastQualitySummarySignature) {
        return;
      }
      lastQualitySummarySignature = signature;

      try {
        const summary = await desktopApi.getRunQualitySummary({
          outputDir,
          writeReport: true
        });
        appendQualitySummaryLogs(summary);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error || '未知错误');
        appendLog('warn', `Go复盘摘要生成失败：${message}`);
      }
    }

    function applyRunContext(context) {
      // Run-context updates only project visible log paths and related metadata.
      // They should not be treated as crawl-state transitions.
      if (!context) {
        return;
      }

      logController.updateLogContext(context);

      if (context.sessionLogPath && context.sessionLogPath !== lastAnnouncedLogPath) {
        lastAnnouncedLogPath = context.sessionLogPath;
        appendLog('info', `${UI_TEXT.log.createdEventPrefix}${context.sessionLogPath}`);
      }
    }

    // Task-snapshot hydration is the startup fallback when the live event feeds
    // are not yet replaying. Keep this section side-effect light so bootstrap
    // bugs can be separated from real-time event duplication.
    function normalizeTaskSnapshotStatus(snapshot) {
      if (crawlPanelModel && typeof crawlPanelModel.normalizeTaskSnapshotStatus === 'function') {
        return crawlPanelModel.normalizeTaskSnapshotStatus(snapshot);
      }
      return String((snapshot && (snapshot.controllerStatus || snapshot.lastCrawlStatus)) || 'idle').trim().toLowerCase();
    }

    function buildStagePanelFromTaskSnapshot(snapshot) {
      // Snapshot fallback shaping stays behind the shared panel model so this
      // controller does not fork startup panel contracts from renderer peers.
      if (crawlPanelModel && typeof crawlPanelModel.buildStagePanelFromTaskSnapshot === 'function') {
        return crawlPanelModel.buildStagePanelFromTaskSnapshot(snapshot, {
          defaultMessage: UI_TEXT.state.defaultMessage
        });
      }
      return null;
    }

    function buildResultPanelFromTaskSnapshot(snapshot) {
      if (crawlPanelModel && typeof crawlPanelModel.buildResultPanelFromTaskSnapshot === 'function') {
        return crawlPanelModel.buildResultPanelFromTaskSnapshot(snapshot, {
          statusLabels: STATUS_LABELS
        });
      }
      return null;
    }

    function applyTaskSnapshot(snapshot) {
      if (!snapshot) {
        return;
      }

      const status = normalizeTaskSnapshotStatus(snapshot);
      const message = String(snapshot.lastCrawlMessage || UI_TEXT.state.defaultMessage).trim() || UI_TEXT.state.defaultMessage;

      applyRunContext({
        logDir: snapshot.logDir || '',
        sessionLogPath: snapshot.sessionLogPath || '',
        latestLogPath: snapshot.latestLogPath || ''
      });
      stateController.setStatus(status, message);

      const stagePanel = buildStagePanelFromTaskSnapshot(snapshot);
      if (stagePanel) {
        stateController.applyStagePanel(stagePanel);
      }

      const resultPanel = buildResultPanelFromTaskSnapshot(snapshot);
      if (resultPanel) {
        stateController.applyResultPanel(resultPanel);
      }
    }

    function buildReviewPanelFallbackFromState(state) {
      if (
        crawlPanelModel &&
        typeof crawlPanelModel.buildReviewPanelFallbackFromState === 'function'
      ) {
        // Legacy raw `crawl.state` payloads remain only as a compatibility
        // fallback. The preferred path is the dedicated Go `crawl.review-panel`
        // contract, so keep this branch narrow and side-effect free.
        return crawlPanelModel.buildReviewPanelFallbackFromState(state);
      }
      return null;
    }

    // Event-feed ownership is split deliberately:
    // 1) Go primary feeds are the preferred contracts
    // 2) compatibility fallbacks only patch missing contracts
    // 3) log/sidecar lifecycle feeds stay orthogonal
    // If the renderer shows duplicate state, first identify which feed family
    // produced it before changing panel logic.
    function bindGoPrimaryCrawlEvents() {
      if (supportsGoUiState) {
        desktopApi.onUiState((state) => {
          if (isSubscriptionBridgeSessionActive()) {
            return;
          }
          stateController.enqueueUiState(state || {});
        });
      }

      if (supportsGoStagePanel) {
        desktopApi.onStagePanel((panel) => {
          if (isSubscriptionBridgeSessionActive()) {
            return;
          }
          stateController.applyStagePanel(panel || {});
        });
      }

      if (supportsGoResultPanel) {
        desktopApi.onResultPanel((panel) => {
          if (isSubscriptionBridgeSessionActive()) {
            return;
          }
          stateController.applyResultPanel(panel || {});
        });
      }

      if (supportsGoRunContext) {
        desktopApi.onRunContext((context) => {
          if (isSubscriptionBridgeSessionActive()) {
            return;
          }
          applyRunContext(context || {});
        });
      }

      if (supportsGoReviewPanel) {
        desktopApi.onReviewPanel((panel) => {
          if (isSubscriptionBridgeSessionActive()) {
            return;
          }
          stateController.enqueueReviewPanel(panel || {});
        });
      }

      if (supportsGoQualitySummary) {
        desktopApi.onQualitySummary((summary) => {
          if (isSubscriptionBridgeSessionActive()) {
            return;
          }
          const signature =
            crawlPanelModel && typeof crawlPanelModel.buildQualitySummaryEventSignature === 'function'
              ? crawlPanelModel.buildQualitySummaryEventSignature(summary)
              : `${String((summary && summary.outputDir) || '').trim()}|${String(
                  (summary && summary.reportPath) || ''
                ).trim()}|${summary && summary.status ? summary.status : ''}|${String(
                  (summary && summary.completedAt) || ''
                ).trim()}|${String((summary && summary.durationSeconds) || '')}|${String(
                  (summary && summary.summaryLine) || ''
                ).trim()}`;
          if (signature === lastQualitySummarySignature) {
            return;
          }
          lastQualitySummarySignature = signature;
          appendQualitySummaryLogs(summary);
        });
      }
    }

    function consumeLegacyStateFallback(state) {
      if (!supportsGoUiState) {
        const baseState = {
          status: state.status,
          message: state.message,
          stats: state.stats,
          activeItems: state.activeItems || []
        };

        if (!supportsGoReviewPanel) {
          const reviewFallback = buildReviewPanelFallbackFromState(state);
          if (reviewFallback) {
            baseState.duplicateItems = reviewFallback.duplicateItems;
            baseState.duplicateItemsTotal = reviewFallback.duplicateItemsTotal;
            baseState.unfinishedItems = reviewFallback.unfinishedItems;
            baseState.unfinishedItemsTotal = reviewFallback.unfinishedItemsTotal;
            baseState.pageGapItems = reviewFallback.pageGapItems;
            baseState.failedDetails = reviewFallback.failedDetails;
            baseState.failedDetailsTotal = reviewFallback.failedDetailsTotal;
          }
        }

        stateController.enqueueState(baseState);
      } else if (!supportsGoReviewPanel && state) {
        const reviewFallback = buildReviewPanelFallbackFromState(state);
        if (reviewFallback) {
          stateController.enqueueReviewPanel(reviewFallback);
        }
      }

      if (!supportsGoQualitySummary && state && state.status === 'completed') {
        void refreshRunQualitySummary(state);
      }
    }

    function bindCompatibilityCrawlFallbacks() {
      desktopApi.onState((state) => {
        if (isSubscriptionBridgeSessionActive()) {
          return;
        }
        consumeLegacyStateFallback(state || {});
      });

      desktopApi.onLogContext((context) => {
        if (supportsGoRunContext) {
          return;
        }

        applyRunContext(context || {});
      });
    }

    function bindLogFeed() {
      desktopApi.onLog((payload) => {
        if (isSubscriptionBridgeSessionActive()) {
          return;
        }
        const entries = Array.isArray(payload) ? payload : [payload];

        entries.forEach((entry) => {
          const normalizedEntry = unwrapLogEntry(entry);
          if (!normalizedEntry) {
            return;
          }

          appendEntry(normalizedEntry);
        });
      });
    }

    function bindSidecarLifecycleFeeds() {
      if (typeof desktopApi.onSidecarLifecycle === 'function') {
        desktopApi.onSidecarLifecycle((payload) => {
          if (isSubscriptionBridgeSessionActive()) {
            return;
          }
          if (!payload || !payload.message) {
            return;
          }

          const level = payload.state === 'error' ? 'error' : payload.state === 'stopped' ? 'warn' : 'info';
          appendLog(level, payload.message);

          if (payload.state === 'error') {
            stateController.setStatus('idle', payload.message);
          }
        });
      }

      if (typeof desktopApi.onAppNotice === 'function') {
        desktopApi.onAppNotice((payload) => {
          if (isSubscriptionBridgeSessionActive()) {
            return;
          }
          if (!payload || !payload.message) {
            return;
          }

          const normalizedLevel = ['info', 'warn', 'error'].includes(payload.level) ? payload.level : 'info';
          appendLog(normalizedLevel, payload.message, payload.timestamp || new Date().toISOString());

          if (normalizedLevel === 'error') {
            stateController.setStatus('idle', payload.message);
          }
        });
      }
    }

    // Bootstrap applies one-time snapshots first, then subscribes to ongoing
    // feeds. That ordering keeps startup deterministic and avoids mixing partial
    // live payloads into empty panels before baseline hydration finishes.
    // Feed binding is one-shot. Once live feeds are connected, later panel
    // changes should come from events or explicit snapshot queries, not from
    // rebinding duplicate listeners.
    function bindEventFeeds() {
      if (feedsBound) {
        return;
      }

      feedsBound = true;
      bindLogFeed();
      bindGoPrimaryCrawlEvents();
      bindCompatibilityCrawlFallbacks();
      bindSidecarLifecycleFeeds();
    }

    function bootstrapCrawlPanels(taskSnapshot, stagePanel, resultPanel, reviewPanel) {
      // Startup hydration applies snapshot first, then richer panel payloads.
      // The state controller already dedupes equivalent signatures, so bootstrap
      // can stay explicit without inventing a second precedence model here.
      if (taskSnapshot) {
        applyTaskSnapshot(taskSnapshot);
      }
      if (stagePanel) {
        stateController.applyStagePanel(stagePanel);
      }
      if (resultPanel) {
        stateController.applyResultPanel(resultPanel);
      }
      if (reviewPanel) {
        stateController.enqueueReviewPanel(reviewPanel);
      }
    }

    function bindClearHistoryButton() {
      if (clearHistoryBound) {
        return;
      }

      clearHistoryBound = true;
      const clearHistoryButton = elements.crawlClearHistoryButton;
      if (!clearHistoryButton) {
        return;
      }

      clearHistoryButton.addEventListener('click', () => {
        if (globalThis.confirm && !globalThis.confirm('确定要清空所有结果入口历史记录吗？仅删除软件内记录，不会删除本地磁力和日志文件。')) {
          return;
        }
        stateController.clearResultHistory();
        appendLog('info', '结果入口历史记录已清空。');
      });
    }

    function bootstrapPanels() {
      if (panelsBootstrapped) {
        bindClearHistoryButton();
        return Promise.resolve();
      }

      if (bootstrapPanelsPromise) {
        return bootstrapPanelsPromise;
      }

      // Startup panel hydration is a read-only snapshot pass. Once it succeeds,
      // live feeds become the only authority; re-running bootstrap later would
      // risk replaying stale snapshots over newer runtime state.
      bootstrapPanelsPromise = Promise.all([
        queryOptionalPanel(typeof desktopApi.getCrawlTaskSnapshot === 'function' ? () => desktopApi.getCrawlTaskSnapshot() : null),
        queryOptionalPanel(typeof desktopApi.getCrawlStagePanel === 'function' ? () => desktopApi.getCrawlStagePanel() : null),
        queryOptionalPanel(typeof desktopApi.getCrawlResultPanel === 'function' ? () => desktopApi.getCrawlResultPanel() : null),
        queryOptionalPanel(typeof desktopApi.getCrawlReviewPanel === 'function' ? () => desktopApi.getCrawlReviewPanel() : null)
      ])
        .then(([taskSnapshot, stagePanel, resultPanel, reviewPanel]) => {
          bootstrapCrawlPanels(taskSnapshot, stagePanel, resultPanel, reviewPanel);
          bindClearHistoryButton();
          panelsBootstrapped = true;
        })
        .catch((error) => {
          bootstrapPanelsPromise = null;
          throw error;
        });

      return bootstrapPanelsPromise;
    }

    return {
      appendLog,
      bindExternalLink,
      bindEventFeeds,
      bootstrapPanels
    };
  }

  globalScope.desktopCrawlRuntimeController = {
    createCrawlRuntimeController
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);

/* ==== renderer/renderer.js ==== */
// Main renderer bootstrap for the current desktop UI.
// This entrypoint should normally run against the Wails platform bridge. Legacy
// compatibility behavior may still exist underneath, but renderer boot issues
// should first be debugged from this file and `platformBridge*.js`.
// Renderer assembly root for the current desktop frontend.
// This file wires controllers/views/helpers together, but it should keep
// business logic inside those modules instead of becoming another mega-controller.
//
// Ownership summary:
// 1) collect DOM elements and shared dependencies
// 2) assemble workspace controllers around the active desktop bridge
// 3) kick off bootstrap in the correct order
//
// File map for maintainers:
// 1) dependency resolution and readiness guards
// 2) controller option builders
// 3) top-level renderer assembly and bootstrap handoff
(function initializeRenderer(globalScope) {
  function resolveRendererDependencies(scope) {
    const platformBridge = scope.desktopPlatformBridge || null;
    return {
      platformBridge,
      desktopApi:
        platformBridge && typeof platformBridge.createDesktopApi === 'function'
          ? platformBridge.createDesktopApi()
          : null,
      uiText: scope.desktopUiText,
      logControllerFactory: scope.desktopLogController,
      heroBorderFlowControllerFactory: scope.desktopHeroBorderFlowController || null,
      rendererElementsFactory: scope.desktopRendererElements || null,
      rendererShellControllerFactory: scope.desktopRendererShellController,
      rendererBootstrapControllerFactory: scope.desktopRendererBootstrapController,
      crawlResultHistoryControllerFactory: scope.desktopCrawlResultHistoryController,
      stateControllerFactory: scope.desktopStateController,
      formControllerFactory: scope.desktopFormController,
      rankingControllerFactory: scope.desktopRankingController,
      organizerControllerFactory: scope.desktopOrganizerController,
      subscriptionControllerFactory: scope.desktopSubscriptionController,
      crawlRuntimeControllerFactory: scope.desktopCrawlRuntimeController,
      crawlPanelModel: scope.desktopCrawlPanelModel || null
    };
  }

  function hasRequiredRendererDependencies(deps) {
    return (
      deps.desktopApi &&
      deps.uiText &&
      deps.logControllerFactory &&
      deps.heroBorderFlowControllerFactory &&
      deps.rendererElementsFactory &&
      deps.rendererShellControllerFactory &&
      deps.rendererBootstrapControllerFactory &&
      deps.crawlResultHistoryControllerFactory &&
      deps.stateControllerFactory &&
      deps.formControllerFactory &&
      deps.rankingControllerFactory &&
      deps.organizerControllerFactory &&
      deps.subscriptionControllerFactory &&
      deps.crawlRuntimeControllerFactory
    );
  }

  function buildRendererRequirementSnapshot(deps) {
    return {
      desktopApi: deps.desktopApi,
      uiText: deps.uiText,
      logControllerFactory: deps.logControllerFactory,
      heroBorderFlowControllerFactory: deps.heroBorderFlowControllerFactory,
      rendererElementsFactory: deps.rendererElementsFactory,
      rendererShellControllerFactory: deps.rendererShellControllerFactory,
      rendererBootstrapControllerFactory: deps.rendererBootstrapControllerFactory,
      crawlResultHistoryControllerFactory: deps.crawlResultHistoryControllerFactory,
      stateControllerFactory: deps.stateControllerFactory,
      formControllerFactory: deps.formControllerFactory,
      rankingControllerFactory: deps.rankingControllerFactory,
      organizerControllerFactory: deps.organizerControllerFactory,
      subscriptionControllerFactory: deps.subscriptionControllerFactory,
      crawlRuntimeControllerFactory: deps.crawlRuntimeControllerFactory
    };
  }

  function buildLogControllerOptions(elements, UI_TEXT) {
    return {
      logView: elements.logView,
      logFilePath: elements.logFilePath,
      maxLines: UI_TEXT.limits.maxLogLines,
      defaultHint: UI_TEXT.log.defaultHint,
      logPathPrefix: UI_TEXT.log.createdPrefix,
      truncatedSuffix: UI_TEXT.log.truncatedSuffix,
      visibleLevels: UI_TEXT.log.visibleLevels,
      maxVisibleLength: UI_TEXT.log.maxVisibleLength,
      hiddenKeywords: UI_TEXT.log.hiddenKeywords
    };
  }

  function buildStateControllerOptions(
    elements,
    UI_TEXT,
    STATUS_LABELS,
    FAILURE_CATEGORY_LABELS,
    crawlResultHistoryController
  ) {
    return {
      statusPill: elements.statusPill,
      stateMessage: elements.stateMessage,
      startButton: elements.startButton,
      stopButton: elements.stopButton,
      restartButton: elements.restartButton,
      statPage: elements.statPage,
      statQueued: elements.statQueued,
      statAttempted: elements.statAttempted,
      statCompleted: elements.statCompleted,
      currentBox: elements.currentBox,
      currentTotalView: elements.currentTotalView,
      currentItemsView: elements.currentItemsView,
      unfinishedBox: elements.unfinishedBox,
      unfinishedItemsView: elements.unfinishedItemsView,
      unfinishedTotalView: elements.unfinishedTotalView,
      duplicateBox: elements.duplicateBox,
      duplicateItemsView: elements.duplicateItemsView,
      duplicateTotalView: elements.duplicateTotalView,
      pageGapBox: elements.pageGapBox,
      pageGapItemsView: elements.pageGapItemsView,
      failedBox: elements.failedBox,
      failedTotalView: elements.failedTotalView,
      failedItemsView: elements.failedItemsView,
      filteredBox: elements.filteredBox,
      filteredItemsView: elements.filteredItemsView,
      filteredTotalView: elements.filteredTotalView,
      crawlStageStatus: elements.crawlStageStatus,
      crawlStageProgress: elements.crawlStageProgress,
      crawlStageTitle: elements.crawlStageTitle,
      crawlStageDescription: elements.crawlStageDescription,
      crawlStageMessage: elements.crawlStageMessage,
      crawlStageBarFill: elements.crawlStageBarFill,
      crawlStageOutput: elements.crawlStageOutput,
      crawlStagePage: elements.crawlStagePage,
      crawlStageQueued: elements.crawlStageQueued,
      crawlStageAttempted: elements.crawlStageAttempted,
      crawlStageCompleted: elements.crawlStageCompleted,
      crawlResultQuality: elements.crawlResultQuality,
      crawlResultSummary: elements.crawlResultSummary,
      resultHistoryController: crawlResultHistoryController,
      statusLabels: STATUS_LABELS,
      defaultMessage: UI_TEXT.state.defaultMessage,
      emptyTexts: {
        active: UI_TEXT.state.activeEmpty,
        unfinished: UI_TEXT.state.unfinishedEmpty,
        duplicate: UI_TEXT.state.duplicateEmpty,
        pageGap: UI_TEXT.state.pageGapEmpty,
        filtered: UI_TEXT.state.filteredEmpty,
        failed: UI_TEXT.state.failedEmpty
      },
      maxPanelItems: UI_TEXT.limits.maxPanelItems,
      renderInterval: Math.max(UI_TEXT.limits.stateRenderInterval || 0, 180),
      failureCategoryLabels: FAILURE_CATEGORY_LABELS,
      stateTexts: {
        failedSummaryPrefix: UI_TEXT.state.failedSummaryPrefix,
        failedSummaryMiddle: UI_TEXT.state.failedSummaryMiddle,
        failedSummarySuffix: UI_TEXT.state.failedSummarySuffix,
        unknownItem: UI_TEXT.state.unknownItem,
        defaultFailureReason: UI_TEXT.state.defaultFailureReason,
        failureCategoryPrefix: UI_TEXT.state.failureCategoryPrefix,
        failureRetryPrefix: UI_TEXT.state.failureRetryPrefix,
        failureManualReview: UI_TEXT.state.failureManualReview,
        failureAdvicePrefix: UI_TEXT.state.failureAdvicePrefix,
        failureTimePrefix: UI_TEXT.state.failureTimePrefix
      }
    };
  }

  function buildBootstrapControllerOptions(
    rendererShellController,
    heroBorderFlowController,
    crawlRuntimeController,
    formController,
    rankingController,
    organizerController,
    subscriptionController,
    stateController,
    elements,
    uiText
  ) {
    return {
      shellController: rendererShellController,
      heroBorderFlowController,
      crawlRuntimeController,
      formController,
      rankingController,
      organizerController,
      subscriptionController,
      stateController,
      sourceLink: elements.sourceLink,
      uiText,
      retryDelays: [0, 200, 400, 800, 1200, 1800, 2800, 4000]
    };
  }

  function buildCrawlResultHistoryControllerOptions(crawlPanelModel, elements, desktopApi) {
    return {
      crawlPanelModel,
      historyView: elements.crawlResultHistoryView,
      openPath: (targetPath) => desktopApi.openPath(targetPath)
    };
  }

  function buildRendererShellControllerOptions(elements) {
    return {
      elements,
      initialWorkspace: 'crawler'
    };
  }

  function buildFormControllerOptions(elements, desktopApi, logController, stateController, uiText) {
    return {
      elements,
      desktopApi,
      logController,
      stateController,
      uiText
    };
  }

  function buildRankingControllerOptions(elements, desktopApi, logController, uiText, formController) {
    return {
      elements,
      desktopApi,
      logController,
      uiText,
      formController
    };
  }

  function buildOrganizerControllerOptions(elements, desktopApi, uiText) {
    return {
      elements,
      desktopApi,
      uiText
    };
  }

  function buildSubscriptionControllerOptions(elements, desktopApi, uiText, formController, rendererShellController) {
    return {
      elements,
      desktopApi,
      uiText,
      formController,
      switchWorkspace: (workspaceKey) => rendererShellController.setWorkspace(workspaceKey)
    };
  }

  function buildCrawlRuntimeControllerOptions(
    desktopApi,
    platformBridge,
    elements,
    uiText,
    logController,
    stateController,
    crawlPanelModel
  ) {
    return {
      desktopApi,
      platformBridge,
      elements,
      uiText,
      logController,
      stateController,
      crawlPanelModel
    };
  }

  const rendererDependencies = resolveRendererDependencies(globalScope);
  const {
    platformBridge,
    desktopApi,
    uiText,
    logControllerFactory,
    heroBorderFlowControllerFactory,
    rendererElementsFactory,
    rendererShellControllerFactory,
    rendererBootstrapControllerFactory,
    crawlResultHistoryControllerFactory,
    stateControllerFactory,
    formControllerFactory,
    rankingControllerFactory,
    organizerControllerFactory,
    subscriptionControllerFactory,
    crawlRuntimeControllerFactory,
    crawlPanelModel
  } = rendererDependencies;

  if (!hasRequiredRendererDependencies(buildRendererRequirementSnapshot(rendererDependencies))) {
    const fallbackMessage =
      uiText && uiText.UI_TEXT && uiText.UI_TEXT.runtime
        ? uiText.UI_TEXT.runtime.missingDependencies
        : 'Desktop runtime dependencies are not available.';
    throw new Error(fallbackMessage);
  }

  const { UI_TEXT, STATUS_LABELS, FAILURE_CATEGORY_LABELS, applyStaticText } = uiText;

  // Renderer responsibilities in the current architecture:
  // 1) wire desktop bridge events into UI controllers
  // 2) hydrate startup state from Go snapshots/panels
  // 3) keep compatibility fallbacks narrow and visibly secondary
  //
  // This file should not own crawler business rules. When debugging repeated
  // logs or panel duplication, first separate:
  // - duplicate upstream events
  // - duplicate renderer fallback paths
  // before touching crawler/runtime code.
  //
  // Structural rule for maintenance:
  // - this file wires factories together
  // - controllers own module state/actions
  // - views/renderers own DOM construction
  // If a future change needs business branching here, prefer moving that branch
  // into the corresponding controller first.

  const elements = rendererElementsFactory.collectRendererElements(document);
  const heroBorderFlowController = heroBorderFlowControllerFactory.createHeroBorderFlowController();

  applyStaticText(document);

  const logController = logControllerFactory.createLogController(buildLogControllerOptions(elements, UI_TEXT));

  const crawlResultHistoryController = crawlResultHistoryControllerFactory.createCrawlResultHistoryController(
    buildCrawlResultHistoryControllerOptions(crawlPanelModel, elements, desktopApi)
  );
  crawlResultHistoryController.bootstrap();

  const rendererShellController = rendererShellControllerFactory.createRendererShellController(
    buildRendererShellControllerOptions(elements)
  );

  const stateController = stateControllerFactory.createStateController(
    buildStateControllerOptions(elements, UI_TEXT, STATUS_LABELS, FAILURE_CATEGORY_LABELS, crawlResultHistoryController)
  );

  const formController = formControllerFactory.createFormController(
    buildFormControllerOptions(elements, desktopApi, logController, stateController, uiText)
  );

  // Renderer assembly keeps the three workspaces intentionally loose:
  // 1) crawler owns the editable crawl form plus runtime panels
  // 2) ranking/subscription may only prefill crawler input or switch back to
  //    the crawler workspace for the next manual run
  // 3) organizer stays on artifact-import contracts and should not call into
  //    crawler form/runtime internals directly
  //
  // If a future change needs a new cross-workspace interaction, prefer adding
  // one explicit bridge/handoff here instead of letting controllers reach into
  // each other ad hoc.
  // Workspace controller construction remains explicit here so cross-workspace
  // dependencies stay visible during maintenance review.
  const rankingController = rankingControllerFactory.createRankingController(
    buildRankingControllerOptions(elements, desktopApi, logController, uiText, formController)
  );

  const organizerController = organizerControllerFactory.createOrganizerController(
    buildOrganizerControllerOptions(elements, desktopApi, uiText)
  );
  const subscriptionController = subscriptionControllerFactory.createSubscriptionController(
    buildSubscriptionControllerOptions(elements, desktopApi, uiText, formController, rendererShellController)
  );
  const crawlRuntimeController = crawlRuntimeControllerFactory.createCrawlRuntimeController(
    buildCrawlRuntimeControllerOptions(
      desktopApi,
      platformBridge,
      elements,
      uiText,
      logController,
      stateController,
      crawlPanelModel
    )
  );

  const rendererBootstrapController = rendererBootstrapControllerFactory.createRendererBootstrapController(
    buildBootstrapControllerOptions(
      rendererShellController,
      heroBorderFlowController,
      crawlRuntimeController,
      formController,
      rankingController,
      organizerController,
      subscriptionController,
      stateController,
      elements,
      uiText
    )
  );

  // Startup handoff ends here: renderer.js assembles controllers, then the
  // bootstrap controller owns all warmup sequencing and retry behavior.
  void rendererBootstrapController.bootstrap();
})(typeof globalThis !== 'undefined' ? globalThis : window);


})();
