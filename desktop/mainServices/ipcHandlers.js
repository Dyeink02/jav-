// Historical Electron IPC registrar.
// deprecated: retired Electron shell only; marker=retired-electron-ipc-handlers
//
// The current production desktop app runs through Wails + Go and does not call
// this file directly. Keep it as a compatibility/reference entrypoint for the
// archived Electron shell only. When debugging current Wails issues, prefer the
// bridge implementation under `wails-shell/internal/bridge/`.
//
// Current maintenance rule:
// - do not add new organizer/subscription product logic here
// - do not use this file as the primary reference for current desktop behavior
// - if current Wails behavior and this file differ, the Go bridge is the source
//   of truth and this file should only preserve archived compatibility context
// - current runtime code does not import this file; it is a retirement
//   candidate once Electron archive support is intentionally removed
//
// Compatibility rule:
// if archived Electron behavior must be compared with current Wails behavior,
// keep that comparison explicit in docs/tests rather than reviving this file as
// a live product routing layer.
//
// Ownership summary:
// 1) register archived Electron IPC handlers
// 2) normalize archived dialog/path/test-mode helpers around that IPC surface
// 3) preserve historical reference behavior without reclaiming current product ownership
// 4) remain obviously retired from the active Wails production path
//
// File map for maintainers:
// 1) archived IPC bootstrap helpers
// 2) desktop test-mode mock payloads
// 3) historical handler registration surface

const { pathToFileURL } = require('url');
const progressSchema = require('../common/progressSchema.js');

function createIpcHandlerRegistrar({
  state,
  app,
  fs,
  path,
  ipcMain,
  dialog,
  shell,
  windowService,
  settingsStore,
  logBridge,
  runnerService,
  appInfo,
  mainText,
  urlSuggestions,
  desktopTestMode,
  proxyValidationService,
  getActressRankings,
  resolveActressCrawlTarget,
  organizerService,
  adLearningService
}) {
  // This function remains intentionally large because it preserves the archived
  // Electron IPC surface in one place for reference. Do not treat this file as
  // the source of truth for the active product. Current behavior belongs to the
  // Go bridge under wails-shell/internal/bridge.
  const nowIso = () => new Date().toISOString();

  function resolveBackgroundImageUrl(backgroundImage) {
    const normalizedPath = typeof backgroundImage === 'string' ? backgroundImage.trim() : '';
    if (!normalizedPath || !fs.existsSync(normalizedPath)) {
      return '';
    }

    return pathToFileURL(normalizedPath).href;
  }

  function attachBackgroundSettings(settings = {}) {
    const backgroundImage = typeof settings.backgroundImage === 'string' ? settings.backgroundImage.trim() : '';

    return {
      ...settings,
      backgroundImage,
      backgroundImageUrl: resolveBackgroundImageUrl(backgroundImage)
    };
  }

  function persistBackgroundImage(backgroundImage) {
    const nextSettings = {
      ...settingsStore.loadSettings(),
      backgroundImage: typeof backgroundImage === 'string' ? backgroundImage.trim() : ''
    };

    settingsStore.saveSettings(nextSettings);
    return attachBackgroundSettings(nextSettings);
  }

  // Desktop test mode keeps a small, deterministic mock surface for the old
  // Electron shell. Production Wails flows should use the real Go/Node services
  // below, so keep these helpers schema-aligned but intentionally minimal.
  function getMockRankingResult(options = {}) {
    const mode = options.mode === 'annual' ? 'annual' : 'monthly';
    const source = String(options.source || 'smart').trim().toLowerCase() || 'smart';
    const sourceName =
      source === 'local'
        ? '本地历史 · AVfan 在线'
        : source === 'fanza'
          ? 'FANZA 官方'
          : source === 'dmm'
            ? 'DMM 官方'
            : 'AVfan 在线';

    return {
      mode,
      requestedSource: source,
      resolvedSource: source === 'local' ? 'local' : source === 'smart' ? 'avfan' : source,
      sourceName,
      sourceUrl:
        mode === 'annual'
          ? 'https://av-fan.tokyo/ranking/fanza-rental-dvd-actress-top100.php?year=2024'
          : 'https://av-fan.tokyo/ranking/fanza-dvd-actress-monthly.php',
      title: mode === 'annual' ? '【2024年】 【FANZA】年間AV女優ランキング' : '2026.03 【FANZA】月間DVD・AV女優ランキング',
      periodLabel: mode === 'annual' ? '2024年' : '2026年03月',
      periodYear: mode === 'annual' ? 2024 : 2026,
      periodMonth: mode === 'annual' ? null : 3,
      total: mode === 'annual' ? 90 : 100,
      availableYears: mode === 'annual' ? [2024, 2023, 2022, 2021, 2020] : [2026],
      availableMonths: mode === 'annual' ? [] : [3],
      fetchedAt: new Date().toISOString(),
      fromCache: false,
      stale: false,
      notice:
        source === 'fanza' || source === 'dmm'
          ? '官方源测试模式下返回示例数据。'
          : source === 'local'
            ? '当前为本地历史测试数据。'
            : '',
      items:
        mode === 'annual'
          ? [
              { rank: 1, actressName: '森沢かな', profileUrl: 'https://av-fan.tokyo/actress/sample-1.html', imageUrl: '' },
              { rank: 2, actressName: '桜空もも', profileUrl: 'https://av-fan.tokyo/actress/sample-2.html', imageUrl: '' },
              { rank: 3, actressName: '河北彩伽', profileUrl: 'https://av-fan.tokyo/actress/sample-3.html', imageUrl: '' }
            ]
          : [
              { rank: 1, actressName: '石川澪', profileUrl: 'https://av-fan.tokyo/actress/sample-4.html', imageUrl: '' },
              { rank: 2, actressName: '逢沢みゆ', profileUrl: 'https://av-fan.tokyo/actress/sample-5.html', imageUrl: '' },
              { rank: 3, actressName: '天使もえ', profileUrl: 'https://av-fan.tokyo/actress/sample-6.html', imageUrl: '' }
            ]
    };
  }

  function getMockActressTarget(options = {}) {
    const baseOrigin = options.preferredBase || 'https://www.busjav.cyou';

    return {
      actressName: options.actressName || '石川澪',
      resolvedActressName: options.actressName || '石川澪',
      resolvedBase: `${String(baseOrigin).replace(/\/$/, '')}/star/xvn`,
      lookupBaseOrigin: String(baseOrigin).replace(/\/$/, ''),
      matchMode: 'exact',
      candidateCount: 1,
      candidatePreview: [
        {
          actressName: options.actressName || '石川澪',
          href: `${String(baseOrigin).replace(/\/$/, '')}/star/xvn`
        }
      ],
      magnetCount: 97,
      allCount: 157,
      fillCount: 97,
      preferredCount: 97,
      itemsPerPage: 30,
      totalPages: 4
    };
  }

  // This compatibility facade exists so archived Electron IPC handlers can
  // still call organizer helpers without learning the newer Wails bridge
  // layering. Keep fallback behavior thin here and push any real organizer
  // state normalization down into organizerService / Go bridge boundaries.
  const safeOrganizerService =
    organizerService &&
    typeof organizerService.runOrganizer === 'function' &&
    typeof organizerService.resolveTargetPath === 'function' &&
    typeof organizerService.loadCrawlFilmCodes === 'function'
      ? organizerService
      : {
          resolveTargetPath: (rootPath) => String(rootPath || ''),
          resolveCrawlOutputPaths: (outputDir) => ({
            outputDir: String(outputDir || ''),
            filmDataPath: ''
          }),
          loadCrawlFilmCodes: async () => {
            throw new Error('视频整理服务未初始化。');
          },
          runOrganizer: async () => {
            throw new Error('视频整理服务未初始化。');
          }
        };

  // Historical Electron callers may know only "an output dir". Normalize that
  // to the best crawl artifact root we have, but keep the fallback chain local
  // to this compatibility layer instead of leaking it into renderer code.
  function resolvePreferredCrawlOutputDir(overrideOutputDir) {
    const providedOutputDir = typeof overrideOutputDir === 'string' ? overrideOutputDir.trim() : '';
    if (providedOutputDir) {
      return providedOutputDir;
    }

    const settings = settingsStore.loadSettings();
    return (
      state.currentTaskOutputDir ||
      state.lastTaskOutputDir ||
      (typeof settings.organizerCrawlOutput === 'string' ? settings.organizerCrawlOutput.trim() : '') ||
      (typeof settings.output === 'string' ? settings.output.trim() : '') ||
      settingsStore.getCurrentOutputDir()
    );
  }

  const safeAdLearningService =
    adLearningService &&
    typeof adLearningService.getSummary === 'function' &&
    typeof adLearningService.updateModel === 'function' &&
    typeof adLearningService.importSamples === 'function' &&
    typeof adLearningService.learnSamplesByCodes === 'function' &&
    typeof adLearningService.evaluateVideoRisk === 'function'
      ? adLearningService
      : {
          getSummary: () => ({
            modelPath: '',
            version: 1,
            updatedAt: '',
            keywordCount: 0,
            adSampleCount: 0,
            normalSampleCount: 0,
            activeModel: 'mobile-net-v3-lite',
            activeModelLabel: 'MobileNetV3 Lite',
            thresholds: { adScore: 60, highSimilarityDistance: 10, mediumSimilarityDistance: 16, lowSimilarityDistance: 22 }
          }),
          updateModel: async () => {
            throw new Error('广告学习服务未初始化。');
          },
          importSamples: async () => {
            throw new Error('广告学习服务未初始化。');
          },
          learnSamplesByCodes: async () => {
            throw new Error('广告学习服务未初始化。');
          },
          evaluateVideoRisk: async () => ({
            videoPath: '',
            ffmpegAvailable: false,
            score: 0,
            threshold: 60,
            isAd: false,
            reasons: []
          })
        };

  function normalizeKeywordList(rawValue) {
    const rawText = String(rawValue || '').trim();
    if (!rawText) {
      return [];
    }

    return Array.from(
      new Set(
        rawText
          .split(/[\r\n,，、;；]+/)
          .map((item) => item.trim().toLowerCase())
          .filter(Boolean)
      )
    );
  }

  function normalizeFilmCode(rawValue) {
    const compactValue = String(rawValue || '')
      .toUpperCase()
      .trim()
      .replace(/[_\s]+/g, '-')
      .replace(/-+/g, '-');
    const match = compactValue.match(/^([A-Z]{2,12})-?(\d{2,8})([A-Z]*)$/);
    if (!match) {
      return compactValue;
    }
    const [, prefix, digits, suffix] = match;
    return `${prefix}-${digits}${suffix}`.replace(/-+/g, '-');
  }

  function normalizeCodeList(rawValue) {
    const rawText = Array.isArray(rawValue) ? rawValue.join('\n') : String(rawValue || '');
    return Array.from(
      new Set(
        rawText
          .split(/[\r\n,，、;；\s]+/)
          .map((item) => normalizeFilmCode(item))
          .filter(Boolean)
      )
    );
  }

  function normalizeAdFileAction(rawValue) {
    return progressSchema.normalizeAdFileAction(rawValue);
  }

  function normalizeAdModelType(rawValue) {
    const value = String(rawValue || '').trim().toLowerCase();
    if (value === 'squeezenet-fast' || value === 'yolov8n-balanced' || value === 'mobile-net-v3-lite') {
      return value;
    }
    return 'mobile-net-v3-lite';
  }

  function sendOrganizerLog(entry = {}) {
    const mainWindow = windowService.getWindow();
    if (!mainWindow || mainWindow.isDestroyed()) {
      return;
    }

    const payload = {
      level: entry.level || 'info',
      message: String(entry.message || ''),
      timestamp: entry.timestamp || nowIso()
    };

    if (mainWindow.webContents && !mainWindow.webContents.isDestroyed()) {
      mainWindow.webContents.send('organizer:log', payload);
    }
  }

  function createTimedOrganizerLog(level, message, timestamp = nowIso()) {
    // 兼容层统一在这里补 organizer 时间戳，避免旧 IPC 分支各自拼装日志对象。
    return {
      level,
      message,
      timestamp
    };
  }

  function sendOrganizerState(payload = {}) {
    const mainWindow = windowService.getWindow();
    if (!mainWindow || mainWindow.isDestroyed()) {
      return;
    }

    if (mainWindow.webContents && !mainWindow.webContents.isDestroyed()) {
      mainWindow.webContents.send('organizer:state', payload);
    }
  }

  function buildOrganizerProgressMessageLegacy(progress = {}) {
    const phase = String(progress.phase || '');
    const total = Number(progress.total || 0);
    const processed = Number(progress.processed || 0);
    const adFileAction = normalizeAdFileAction(progress.adFileAction);

    if (phase === 'waiting-progress' || phase === 'waiting-start') {
      return `待整理总数 ${total} 个，已执行 ${processed} 个。`;
    }
    if (phase === 'delete-progress' || phase === 'delete-start') {
      return adFileAction === 'delete-directly'
        ? `广告处理总数 ${total} 个，已直接删除 ${processed} 个。`
        : `待删除总数 ${total} 个，已执行 ${processed} 个。`;
    }
    if (phase === 'scan-progress' || phase === 'scan-start') {
      return `扫描进度 ${processed}/${total}。`;
    }
    if (phase === 'scan-completed') {
      const waitingTotal = Number(progress.waitingTotal || 0);
      const deleteTotal = Number(progress.deleteTotal || 0);
      const introAdTotal = Number(progress.introAdTotal || 0);
      return `扫描完成，待整理 ${waitingTotal} 个，待删除 ${deleteTotal} 个，含开头广告 ${introAdTotal} 个。`;
    }
    if (phase === 'completed') {
      const waitingTotal = Number(progress.waitingTotal || 0);
      const deleteTotal = Number(progress.deleteTotal || 0);
      const introAdTotal = Number(progress.introAdTotal || 0);
      const deletedDirectly = Number(progress.deletedDirectly || 0);
      return `整理完成，待整理 ${waitingTotal} 个，待删除 ${deleteTotal} 个，含开头广告 ${introAdTotal} 个，直接删除 ${deletedDirectly} 个。`;
    }
    return '';
  }

  function buildLearningProgressMessageLegacy(progress = {}) {
    const phase = String(progress.phase || '');
    const totalVideos = Number(progress.totalVideos || 0);
    const processedVideos = Number(progress.processedVideos || 0);
    const matchedVideoCount = Number(progress.matchedVideoCount || 0);
    const importedSampleCount = Number(progress.importedSampleCount || 0);
    const requestedCodeCount = Number(progress.requestedCodeCount || 0);

    if (phase === 'starting') {
      return `按番号学习启动：目标番号 ${requestedCodeCount} 个。`;
    }
    if (phase === 'scan-ready') {
      return `学习扫描完成：发现视频 ${totalVideos} 个，开始按番号匹配。`;
    }
    if (phase === 'matching') {
      return `按番号匹配中：${processedVideos}/${totalVideos}，已命中 ${matchedVideoCount}，新增样本 ${importedSampleCount}。`;
    }
    if (phase === 'learning') {
      return `抓帧学习中：已命中 ${matchedVideoCount}，新增样本 ${importedSampleCount}。`;
    }
    if (phase === 'completed') {
      const missingCodeCount = Number(progress.missingCodeCount || 0);
      return `按番号学习完成：命中视频 ${matchedVideoCount}，新增样本 ${importedSampleCount}，未命中番号 ${missingCodeCount}。`;
    }
    return '';
  }

  // Keep progress text generation unified between main and renderer.
  function buildOrganizerProgressMessage(progress = {}) {
    return progressSchema.buildOrganizerProgressMessage(progress);
  }

  function buildLearningProgressMessage(progress = {}) {
    return progressSchema.buildLearningProgressMessage(progress);
  }

  return function registerIpcHandlers() {
    if (state.ipcHandlersRegistered) {
      return;
    }

    state.ipcHandlersRegistered = true;

    ipcMain.handle('app:get-settings', async () => attachBackgroundSettings(settingsStore.loadSettings()));
    ipcMain.handle('app:get-log-context', async () => logBridge.getLogContext());
    ipcMain.handle('app:show-alert', async (_, options = {}) => {
      const mainWindow = windowService.getWindow();
      const dialogOptions = {
        type: options.type || 'warning',
        title: String(options.title || appInfo.title || 'JAV自动化爬虫工具'),
        message: String(options.message || ''),
        detail: String(options.detail || ''),
        buttons: [String(options.buttonLabel || '我知道了')],
        defaultId: 0,
        noLink: true
      };

      if (desktopTestMode || !mainWindow || mainWindow.isDestroyed()) {
        return dialogOptions;
      }

      const result = await dialog.showMessageBox(mainWindow, dialogOptions);
      mainWindow.focus();
      if (mainWindow.webContents && !mainWindow.webContents.isDestroyed()) {
        mainWindow.webContents.focus();
      }
      return result;
    });
    ipcMain.handle('app:validate-proxy', async (_, proxyValue, options = {}) => {
      if (desktopTestMode) {
        const normalizedProxy = String(proxyValue || '').trim();
        return normalizedProxy
          ? {
              status: 'valid',
              normalizedProxy,
              message: '代理正常',
              detail: '桌面测试模式下已跳过真实网络校验。'
            }
          : {
              status: 'empty',
              normalizedProxy: '',
              message: '代理未填写',
              detail: '当前将使用直连方式运行。'
            };
      }

      return proxyValidationService.validateProxy(proxyValue, options);
    });

    ipcMain.handle('app:choose-output', async () => {
      if (desktopTestMode) {
        return settingsStore.ensureDesktopTestArtifacts().outputDir;
      }

      const result = await dialog.showOpenDialog(windowService.getWindow(), {
        properties: ['openDirectory', 'createDirectory']
      });

      if (result.canceled || result.filePaths.length === 0) {
        return null;
      }

      return result.filePaths[0];
    });

    ipcMain.handle('app:choose-background-image', async () => {
      if (desktopTestMode) {
        return persistBackgroundImage('');
      }

      const result = await dialog.showOpenDialog(windowService.getWindow(), {
        properties: ['openFile'],
        filters: [
          {
            name: '图片文件',
            extensions: ['jpg', 'jpeg', 'png', 'webp', 'bmp']
          }
        ]
      });

      if (result.canceled || result.filePaths.length === 0) {
        return null;
      }

      return persistBackgroundImage(result.filePaths[0]);
    });

    ipcMain.handle('app:clear-background-image', async () => persistBackgroundImage(''));

    ipcMain.handle('app:open-path', async (_, targetPath) => {
      if (!targetPath) {
        return null;
      }

      if (!desktopTestMode) {
        await shell.openPath(targetPath);
      }

      return targetPath;
    });

    ipcMain.handle('app:choose-organizer-root', async () => {
      if (desktopTestMode) {
        return settingsStore.ensureDesktopTestArtifacts().outputDir;
      }

      const result = await dialog.showOpenDialog(windowService.getWindow(), {
        properties: ['openDirectory', 'createDirectory']
      });

      if (result.canceled || result.filePaths.length === 0) {
        return null;
      }

      return result.filePaths[0];
    });

    ipcMain.handle('app:choose-learning-samples', async () => {
      if (desktopTestMode) {
        return [];
      }

      const result = await dialog.showOpenDialog(windowService.getWindow(), {
        properties: ['openFile', 'multiSelections'],
        filters: [
          {
            name: '图片或视频样本',
            extensions: ['jpg', 'jpeg', 'png', 'bmp', 'webp', 'mp4', 'mkv', 'avi', 'mov', 'wmv']
          }
        ]
      });

      if (result.canceled || result.filePaths.length === 0) {
        return [];
      }

      return result.filePaths;
    });

    ipcMain.handle('app:get-ad-learning-summary', async () => {
      return safeAdLearningService.getSummary();
    });

    ipcMain.handle('app:update-ad-learning-model', async (_, options = {}) => {
      const keywords = normalizeKeywordList(options.keywords);
      const adScore = Number.parseInt(String(options.adScore ?? ''), 10);
      const modelType = normalizeAdModelType(options.modelType);
      const currentSettings = settingsStore.loadSettings();

      const result = await safeAdLearningService.updateModel({
        keywords,
        adScore: Number.isFinite(adScore) ? adScore : undefined,
        modelType
      });

      const mergedSettings = {
        ...currentSettings,
        organizerAdKeywords: keywords.join(', '),
        organizerAdThreshold: Number.isFinite(adScore) ? adScore : currentSettings.organizerAdThreshold || 60,
        organizerAdModelType: modelType
      };
      settingsStore.saveSettings(mergedSettings);

      return result;
    });

    ipcMain.handle('app:import-ad-learning-samples', async (_, options = {}) => {
      const label = options.label === 'normal' ? 'normal' : 'ad';
      const samplePaths = Array.isArray(options.samplePaths) ? options.samplePaths : [];
      return safeAdLearningService.importSamples({
        label,
        samplePaths,
        modelType: normalizeAdModelType(options.modelType)
      });
    });

    ipcMain.handle('app:learn-ad-samples-by-codes', async (_, options = {}) => {
      const label = options.label === 'normal' ? 'normal' : 'ad';
      const codes = normalizeCodeList(options.codes);
      const rootPath = String(options.rootPath || '').trim();
      const includeSubdirectories = options.includeSubdirectories !== false;

      sendOrganizerState({
        status: 'running',
        mode: 'learning',
        message: `开始按番号学习（${label === 'normal' ? '正常样本' : '广告样本'}）...`
      });

      try {
        const result = await safeAdLearningService.learnSamplesByCodes({
          label,
          codes,
          rootPath,
          includeSubdirectories,
          modelType: normalizeAdModelType(options.modelType),
          onProgress: (progress) => {
            const normalizedProgress = progressSchema.createProgress(progress.scope || 'learning', progress.phase, progress);
            const message = buildLearningProgressMessage(normalizedProgress);
            sendOrganizerState({
              status: 'running',
              mode: 'learning-progress',
              message,
              progress: normalizedProgress
            });
          }
        });

        sendOrganizerState({
          status: 'completed',
          mode: 'learning',
          message: `按番号学习完成：命中 ${result.matchedVideoCount || 0}，新增样本 ${result.importedSampleCount || 0}。`,
          progress: progressSchema.createProgress('learning', 'completed', {
            matchedVideoCount: result.matchedVideoCount || 0,
            importedSampleCount: result.importedSampleCount || 0,
            missingCodeCount: Array.isArray(result.missingCodes) ? result.missingCodes.length : 0,
            hitRate: Number(result.hitRate || 0),
            falsePositiveRate: Number(result.falsePositiveRate || 0),
            sampleIncrement: Number(result.sampleIncrement || result.importedSampleCount || 0)
          })
        });

        return result;
      } catch (error) {
        sendOrganizerState({
          status: 'error',
          mode: 'learning',
          message: error instanceof Error ? error.message : String(error)
        });
        throw error;
      }
    });

    // Organizer 兼容 handler 继续集中留在这一段，方便后续整体退休。
    // 当前 Wails UI 的新行为仍应优先落在 Go bridge，而不是继续扩张这里。
    //
    // Legacy integration context for renderer compatibility. Current Wails UI
    // should prefer Go run-context / result-panel contracts; this IPC shape is
    // only a fallback bridge for archived Electron-era consumers.
    ipcMain.handle('app:get-integration-context', async () => {
      const preferredOutputDir = resolvePreferredCrawlOutputDir('');
      const crawlPaths = safeOrganizerService.resolveCrawlOutputPaths
        ? safeOrganizerService.resolveCrawlOutputPaths(preferredOutputDir)
        : {
            outputDir: preferredOutputDir,
            filmDataPath: ''
          };

      return {
        currentTaskOutputDir: state.currentTaskOutputDir || '',
        lastTaskOutputDir: state.lastTaskOutputDir || '',
        preferredOutputDir: crawlPaths.outputDir || preferredOutputDir,
        preferredFilmDataPath: crawlPaths.filmDataPath || ''
      };
    });

    // Compatibility organizer import entry. In the current architecture the
    // Wails/Go organizer service owns crawl-artifact normalization; this
    // Electron-era IPC handler should stay a thin pass-through and must not
    // rebuild organizer expected-code state on its own.
    ipcMain.handle('app:load-crawl-film-codes', async (_, options = {}) => {
      const outputDir = resolvePreferredCrawlOutputDir(options.outputDir);

      if (desktopTestMode) {
        const testOutputDir = settingsStore.ensureDesktopTestArtifacts(outputDir).outputDir;
        const testFilmDataPath = path.join(testOutputDir, 'filmData.json');
        const testCodes = ['ABP-001', 'IPX-777', 'SSIS-321'];
        const testCodeEntries = [
          {
            code: 'ABP-001',
            magnets: [{ link: 'magnet:?xt=urn:btih:abp001-main', size: '3.2GB' }]
          },
          {
            code: 'IPX-777',
            magnets: [{ link: 'magnet:?xt=urn:btih:ipx777-main', size: '2.9GB' }]
          },
          {
            code: 'SSIS-321',
            magnets: [{ link: 'magnet:?xt=urn:btih:ssis321-main', size: '4.1GB' }]
          }
        ];

        return {
          outputDir: testOutputDir,
          filmDataPath: testFilmDataPath,
          sourceType: 'filmData',
          totalRecords: 3,
          codeCount: testCodes.length,
          codes: testCodes,
          codeEntries: testCodeEntries,
          preloadedExpected: {
            sourceType: 'filmData',
            sourcePath: testFilmDataPath,
            outputDir: testOutputDir,
            filmDataPath: testFilmDataPath,
            organizerCodesPath: '',
            actressName: '',
            totalRecords: 3,
            codeCount: testCodes.length,
            codes: testCodes,
            codeEntries: testCodeEntries
          }
        };
      }

      return safeOrganizerService.loadCrawlFilmCodes({
        outputDir
      });
    });

    ipcMain.handle('app:open-organizer-path', async (_, rootPath, kind = 'root') => {
      const targetRoot =
        typeof rootPath === 'string' && rootPath.trim() ? rootPath.trim() : settingsStore.loadSettings().organizerRoot || '';

      if (!targetRoot) {
        throw new Error('请先选择视频整理根目录。');
      }

      const resolvedPath = safeOrganizerService.resolveTargetPath(targetRoot, kind);
      if (kind !== 'root' && kind !== 'reports') {
        fs.mkdirSync(resolvedPath, { recursive: true });
      }

      if (!desktopTestMode) {
        await shell.openPath(resolvedPath);
      }

      return resolvedPath;
    });

    // Compatibility organizer execution entry. Current renderer state should
    // already have collapsed to one preloaded snapshot before reaching here;
    // this layer should keep forwarding options rather than deriving a second
    // organizer state model.
    ipcMain.handle('app:run-organizer', async (_, options = {}) => {
      if (state.organizerRunning) {
        throw new Error('当前已有视频整理任务正在运行。');
      }

      const currentSettings = settingsStore.loadSettings();
      const parsedAdThreshold = Number.parseInt(String(options.adThreshold ?? ''), 10);
      const resolvedAdThreshold = Number.isFinite(parsedAdThreshold)
        ? Math.max(1, Math.min(100, parsedAdThreshold))
        : Number.parseInt(String(currentSettings.organizerAdThreshold ?? ''), 10) || 60;
      const explicitKeywords = normalizeKeywordList(options.adKeywords);
      const fallbackKeywords = normalizeKeywordList(currentSettings.organizerAdKeywords);
      const resolvedKeywords = explicitKeywords.length > 0 ? explicitKeywords : fallbackKeywords;
      const adDetectionEnabled = options.adDetectionEnabled !== false;
      const resolvedAdModelType = normalizeAdModelType(options.adModelType || currentSettings.organizerAdModelType);
      const adFileAction = normalizeAdFileAction(options.adFileAction || currentSettings.organizerAdFileAction);

      const mergedSettings = {
        ...currentSettings,
        organizerRoot: String(options.rootPath || '').trim(),
        organizerMinSizeMB: Number.parseInt(String(options.minSizeMB ?? ''), 10) || 100,
        organizerSuffix: String(options.suffix || '').trim() || '-A',
        organizerAdFileAction: adFileAction,
        organizerDryRun: Boolean(options.dryRun),
        organizerIncludeSubdirectories: options.includeSubdirectories !== false,
        organizerStrictCodeMatch: options.strictExpectedCodes !== false,
        organizerCrawlOutput: resolvePreferredCrawlOutputDir(options.crawlOutputDir),
        organizerAdDetectionEnabled: adDetectionEnabled,
        organizerAdThreshold: resolvedAdThreshold,
        organizerAdKeywords: resolvedKeywords.join(', '),
        organizerAdModelType: resolvedAdModelType
      };
      settingsStore.saveSettings(mergedSettings);

      if (adDetectionEnabled) {
        await safeAdLearningService
          .updateModel({
            keywords: resolvedKeywords,
            adScore: resolvedAdThreshold,
            modelType: resolvedAdModelType
          })
          .catch((error) => {
            sendOrganizerLog(
              createTimedOrganizerLog(
                'warn',
                `广告学习模型同步失败，将继续按当前策略执行：${
                  error instanceof Error ? error.message : String(error)
                }`
              )
            );
          });
      }

      state.organizerRunning = true;
      sendOrganizerState({
        status: 'starting',
        message: `${
          mergedSettings.organizerDryRun ? '预览扫描启动中...' : '视频整理任务启动中...'
        } 广告处理：${adFileAction === 'delete-directly' ? '直接删除' : '移入待删除'}`
      });

      try {
        const evaluateAdRisk = adDetectionEnabled
          ? async ({ videoPath, adThreshold }) =>
              safeAdLearningService.evaluateVideoRisk({
                videoPath,
                adThreshold: Number.isFinite(adThreshold) ? adThreshold : resolvedAdThreshold,
                modelType: resolvedAdModelType
              })
          : null;
        const expectedInput =
          typeof safeOrganizerService.resolveExpectedInput === 'function'
            ? safeOrganizerService.resolveExpectedInput(options)
            : {
                preloadedExpected: options.preloadedExpected || null,
                expectedCodes: Array.isArray(options.expectedCodes) ? options.expectedCodes : [],
                expectedCodeEntries: Array.isArray(options.expectedCodeEntries) ? options.expectedCodeEntries : []
              };

        const result = await safeOrganizerService.runOrganizer({
          ...options,
          strictExpectedCodes: options.strictExpectedCodes !== false,
          expectedCodes: expectedInput.expectedCodes,
          expectedCodeEntries: expectedInput.expectedCodeEntries,
          preloadedExpected: expectedInput.preloadedExpected,
          adDetectionEnabled,
          adModelType: resolvedAdModelType,
          adThreshold: resolvedAdThreshold,
          adFileAction,
          evaluateAdRisk,
          onLog: sendOrganizerLog,
          onProgress: (progress) => {
            const normalizedProgress = progressSchema.createProgress(progress.scope || 'organizer', progress.phase, progress);
            const message = buildOrganizerProgressMessage(normalizedProgress);
            sendOrganizerState({
              status: 'running',
              mode: 'organizer-progress',
              message,
              progress: normalizedProgress
            });
          }
        });

        sendOrganizerState({
          status: 'completed',
          message: result.dryRun
            ? `预览完成：命中 ${result.summary.qualifiedVideo} 个视频。`
            : `整理完成：待整理 ${result.summary.movedToWaiting} 个，待删除 ${result.summary.movedToDelete} 个，含开头广告 ${
                result.summary.movedToIntroAd || 0
              } 个，直接删除 ${
                result.summary.deletedDirectly || 0
              } 个，遗漏番号 ${result.summary.missingCodeCount || 0} 条。`,
          summary: result.summary,
          reportMap: result.reportMap || {},
          reportFiles: result.reportFiles || [],
          missingDownload: result.missingDownload || {},
          adRisk: result.adRisk || {}
        });

        return result;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        sendOrganizerLog(createTimedOrganizerLog('error', message));
        sendOrganizerState({
          status: 'error',
          message
        });
        throw error;
      } finally {
        state.organizerRunning = false;
      }
    });

    ipcMain.handle('app:open-output-dir', async (_, targetOutput) => {
      const targetDir =
        state.currentTaskOutputDir ||
        state.lastTaskOutputDir ||
        (typeof targetOutput === 'string' && targetOutput.trim() ? targetOutput.trim() : settingsStore.getCurrentOutputDir());

      fs.mkdirSync(targetDir, { recursive: true });

      if (!desktopTestMode) {
        await shell.openPath(targetDir);
      }

      return targetDir;
    });

    ipcMain.handle('app:open-external', async (_, targetUrl) => {
      if (!targetUrl) {
        return null;
      }

      if (!desktopTestMode) {
        await shell.openExternal(targetUrl);
      }

      return targetUrl;
    });

    ipcMain.handle('app:open-log-folder', async () => {
      const outputDir =
        state.currentTaskOutputDir || state.lastTaskOutputDir || settingsStore.loadSettings().output || app.getPath('documents');
      const fallbackDir = path.join(outputDir, 'logs');
      const targetDir = logBridge.getLogContext().logDir || fallbackDir;
      fs.mkdirSync(targetDir, { recursive: true });

      if (!desktopTestMode) {
        await shell.openPath(targetDir);
      }

      return targetDir;
    });

    ipcMain.handle('app:open-magnet-file', async (_, targetOutput) => {
      const outputDir =
        state.currentTaskOutputDir ||
        state.lastTaskOutputDir ||
        (typeof targetOutput === 'string' && targetOutput.trim() ? targetOutput.trim() : settingsStore.getCurrentOutputDir());

      if (desktopTestMode) {
        settingsStore.ensureDesktopTestArtifacts(outputDir);
      }

      const magnetFilePath = settingsStore.getMagnetFilePath(outputDir);
      if (!fs.existsSync(magnetFilePath)) {
        throw new Error(`${mainText.magnetFileMissingPrefix}${magnetFilePath}`);
      }

      if (!desktopTestMode) {
        await shell.openPath(magnetFilePath);
      }

      return magnetFilePath;
    });

    ipcMain.handle('app:get-actress-rankings', async (_, options = {}) => {
      if (desktopTestMode) {
        return getMockRankingResult(options);
      }

      return getActressRankings({
        mode: options.mode,
        year: options.year,
        month: options.month,
        source: options.source,
        proxy: options.proxy,
        forceRefresh: Boolean(options.forceRefresh),
        cacheFilePath: settingsStore.getRankingCachePath(),
        historyDirectories: settingsStore.getRankingHistoryDirectories()
      });
    });

    ipcMain.handle('app:resolve-actress-crawl-target', async (_, options = {}) => {
      if (desktopTestMode) {
        return getMockActressTarget(options);
      }

      return resolveActressCrawlTarget({
        actressName: options.actressName,
        preferredBase: options.preferredBase,
        fallbackBases: urlSuggestions,
        magnetOnly: Boolean(options.magnetOnly)
      });
    });

    // 爬虫启停 IPC 在兼容层保持薄封装。
    // 真实运行所有权在 runnerService + Go task controller，这里不要重新解释设置。
    ipcMain.handle('app:start-crawl', async (_, settings) =>
      runnerService.startRunner({
        ...settings,
        resumeExisting: false
      })
    );

    ipcMain.handle('app:restart-crawl', async (_, settings) => runnerService.restartRunner(settings));
    ipcMain.handle('app:stop-crawl', async () => runnerService.stopRunner());

    ipcMain.handle('app:update-antiblock', async (_, settings) => {
      if (desktopTestMode) {
        const filePath = path.join(app.getPath('temp'), 'jav-desktop-ui-test-antiblock.json');
        const antiBlockUrls = Array.from(
          new Set([
            settings?.base || appInfo.defaultBaseUrl || 'https://www.javbus.com',
            ...(appInfo.defaultBaseUrl ? [appInfo.defaultBaseUrl] : []),
            'https://www.javbus.com'
          ])
        );

        fs.writeFileSync(
          filePath,
          JSON.stringify(
            {
              updatedAt: new Date().toISOString(),
              antiBlockUrls
            },
            null,
            2
          ),
          'utf8'
        );

        return {
          antiBlockUrls,
          filePath
        };
      }

      return runnerService.updateAntiBlockUrls(settings);
    });
  };
}

module.exports = {
  createIpcHandlerRegistrar
};
