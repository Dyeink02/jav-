# JAV 自动集成源

这个仓库是在 [raawaa/jav-scrapy](https://github.com/raawaa/jav-scrapy) 的基础上继续做的。  
现在的主程序是 `Wails + Go`，前端在 `desktop/renderer`，`Node sidecar` 主要保留给 Cloudflare / 年龄检测这类兼容场景。

## 这个项目做什么

目前主要有三块功能：

1. `JAV 爬虫`：抓影片信息和磁力，输出 JSON、TXT、日志
2. `视频整理`：按番号整理本地视频
3. `AV 订阅`：基于已有数据做更新检测和更新抓取

## 当前代码结构（简版）

- `wails-shell/`：桌面程序主入口和 Go 业务代码
- `desktop/renderer/`：前端页面和交互逻辑
- `desktop/common/`：一些共享协议和工具
- `desktop/sidecar/`：兼容链路（Cloudflare / 年龄检测）
- `docs/maintenance-notes/`：阶段记录和维护总纲

## 本地运行

### 环境

- Windows 10/11
- Go 1.23+
- Node.js 18+
- Wails CLI 2.x

### 安装依赖

```bash
npm install
cd wails-shell
go mod download
cd ..
```

### 开发调试

```bash
npm run wails:dev
```

### 打包 EXE

```bash
npm run phase1:build:exe
```

默认会在这里得到可执行文件：

- `wails-shell/release/jav-auto-phase1.exe`

## 常用命令

```bash
npm run build
npm run build:desktop-frontend
npm run sync:wails-frontend
npm run verify:maintainability
```

Go 测试在 `wails-shell` 目录执行：

```bash
go test ./...
```

## 维护时的约定

1. 优先小步改动，先保证能回退
2. 新功能尽量走 Go 主链路
3. Cloudflare / 年龄检测这条链路非必要不改
4. 改动前先备份，改动后跑自检

## 相关文档

- 开发文档：[`开发文档.md`](./开发文档.md)
- 软件说明：[`软件说明文档.md`](./软件说明文档.md)
- 当前冻结版本说明：[`docs/当前冻结版本与封包说明-20260509.md`](./docs/当前冻结版本与封包说明-20260509.md)
- 维护总纲：[`docs/maintenance-notes/2026-05-08-maintenance-master-outline-v3.md`](./docs/maintenance-notes/2026-05-08-maintenance-master-outline-v3.md)

## 说明

本项目仅用于学习、研究和合法授权场景。
