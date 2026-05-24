# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.30.0] - 2026-05-01

### Added
- **纯 Go 化全面迁移**: 完成从 Node/TypeScript + Electron 到 Wails + 纯 Go 架构的全面迁移
- **Go 爬虫配置层**: 新增 `crawlconfig` 包，统一爬虫配置管理
- **Go HTTP 请求客户端**: 新增 `crawlrequest` 包，实现指数退避重试机制
- **Go 四阶段队列系统**: 新增 `crawlqueue` 包，实现并发队列控制
- **Go 文件输出层**: 新增 `crawloutput` 包，实现 `filmData.json` 流式写盘
- **Go 抓取主编排器**: 新增 `crawlrunner` 包，实现 10 阶段执行计划
- **磁力 AJAX 链路串联**: 实现详情页抓取 → 磁力 AJAX 获取 → 文件落盘完整链路

### Changed
- **架构重构**: 前端界面、状态桥接、日志、结果入口、订阅面板、整理主流程，由 Wails + Go 主控承接
- **执行内核**: 真实网络抓取执行由 Node 侧执行内核逐步下沉到 Go
- **纯 Go 收口**: 移除对旧 Node 资产的硬依赖，实现真正的纯 Go 启动

### Fixed
- `GetXMLHttpRequest` 忽略用户配置 Cookie 问题
- `MarkSkipped` 死代码修复
- goroutine 泄漏风险修复
- context 传播缺失修复

## [0.27.0] - 2026-04-30

### Added
- **AV 订阅功能增强**: 修复主女优识别逻辑，增强手动新增订阅功能
- **清空订阅功能**: 新增清空订阅按钮，增加二次确认避免误操作
- **订阅状态摘要**: 增强订阅日志、状态摘要和卡片提示

### Changed
- **界面联动更新**: 更新顶部示例信息，统一版本号显示
- **面板优化**: 重新整理抓取阶段与结果入口面板宽度与留白

## [0.19.0] - 2026-04-26

### Added
- **女优目录服务**: 新增 `actresslookup` 包，支持解析女优页面的影片列表地址
- **女优榜单服务**: 新增 `actressranking` 包，支持抓取 AVFan 官方榜单
- **代理验证服务**: 新增 `proxy` 包，支持代理连通性检测

[Unreleased]: https://github.com/raawaa/jav-scrapy/compare/v0.30.0...HEAD
[0.30.0]: https://github.com/raawaa/jav-scrapy/compare/v0.27.0...v0.30.0
[0.27.0]: https://github.com/raawaa/jav-scrapy/compare/v0.19.0...v0.27.0
[0.19.0]: https://github.com/raawaa/jav-scrapy/compare/v0.18.0...v0.19.0