#!/usr/bin/env node

// compatibility-owner: current Wails package assembler while Node crawl-compat payload still ships; marker=compat-toolchain-wails-dual-packages
// Wails dual-package builder for the current desktop release family.
// This is a maintained Wails-era packaging helper, not an Electron builder
// script. It still assembles a Node-compatible runtime stage because the
// Cloudflare / age-check compatibility lane has not been fully removed yet.
//
// Maintenance boundary:
// - current EXE build entry is `scripts/run-wails-build.js`
// - this script packages that EXE into distributable variants
// - do not treat it as proof that `desktop/mainServices` / `desktop/sidecar`
//   are part of the primary frontend runtime; they are runtime payload only
// - keep these references visible until the Electron-era packaging helpers are
//   fully retired from the source tree
//
// Ownership summary:
// 1) assemble current distributable packages around the Wails-built EXE
// 2) preserve sidecar-compatible payload packaging while Cloudflare lane remains
// 3) keep installer/portable packaging logic out of runtime code
//
// File map for maintainers:
// 1) packaging constants and asset/source path derivation
// 2) copy/stage helpers for EXE, sidecar payload, and assets
// 3) installer/portable package assembly entrypoints

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');
const { resolveNSISBinary } = require('./nsis-paths.js');
const { resolveNodeExecutablePath, resolveNpmBinary } = require('./wails-paths.js');

const REPO_ROOT = process.cwd();
const WAILS_RELEASE_DIR = path.join(REPO_ROOT, 'wails-shell', 'release');
const SOURCE_EXE_PATH = path.join(WAILS_RELEASE_DIR, 'jav-auto-phase1.exe');
const PACKAGE_STAGE_ROOT = path.join(WAILS_RELEASE_DIR, 'package-stage');
const BASE_STAGE_PATH = path.join(PACKAGE_STAGE_ROOT, 'base-runtime');
const LITE_STAGE_PATH = path.join(PACKAGE_STAGE_ROOT, 'lite-runtime');
const INSTALLER_STAGE_PATH = path.join(PACKAGE_STAGE_ROOT, 'installer-runtime');
const OUTPUT_DIR = path.join(WAILS_RELEASE_DIR, 'packages');
const TEMP_ROOT = path.join(os.tmpdir(), 'jav-auto-wails-dual-packages');
const BUNDLED_FFMPEG_PATH = path.join(REPO_ROOT, 'desktop', 'resources', 'ffmpeg', 'win-x64', 'ffmpeg.exe');
const PRODUCT_NAME = 'JAV自动集成源';
const SHORTCUT_NAME = 'JAV 自动集成源';
const EXECUTABLE_NAME = 'jav-auto-phase1.exe';
function readPackageJson() {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'package.json'), 'utf8'));
}

function ensureDirectory(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function ensureCleanDirectory(targetPath) {
  fs.rmSync(targetPath, { recursive: true, force: true });
  fs.mkdirSync(targetPath, { recursive: true });
}

function fileExists(targetPath) {
  try {
    return fs.statSync(targetPath).isFile();
  } catch {
    return false;
  }
}

function copyFile(sourcePath, targetPath) {
  ensureDirectory(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: 'pipe',
    encoding: 'utf8',
    shell: false,
    ...options
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    const output = [result.stdout, result.stderr].filter(Boolean).join('\n').trim();
    throw new Error(`${command} ${args.join(' ')} failed with exit code ${result.status}.${output ? `\n${output}` : ''}`);
  }

  return result.stdout || '';
}

function copyDirectory(sourcePath, targetPath) {
  ensureDirectory(targetPath);
  const result = spawnSync(
    'robocopy',
    [
      sourcePath,
      targetPath,
      '/E',
      '/NFL',
      '/NDL',
      '/NJH',
      '/NJS',
      '/NC',
      '/NS',
      '/NP'
    ],
    {
      stdio: 'pipe',
      encoding: 'utf8',
      shell: false
    }
  );

  if (result.status > 7) {
    const output = [result.stdout, result.stderr].filter(Boolean).join('\n').trim();
    throw new Error(`robocopy ${sourcePath} -> ${targetPath} failed with exit code ${result.status}.${output ? `\n${output}` : ''}`);
  }
}

function copyRuntimeDirectory(sourcePath, targetPath) {
  copyDirectory(sourcePath, targetPath);
  fs.rmSync(path.join(targetPath, 'resources', 'ffmpeg'), { recursive: true, force: true });
}

function runNpmCI(npmBinary, cwd) {
  const result = spawnSync(`"${npmBinary}" ci --omit=dev --ignore-scripts`, {
    cwd,
    stdio: 'pipe',
    encoding: 'utf8',
    shell: true
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    const output = [result.stdout, result.stderr].filter(Boolean).join('\n').trim();
    throw new Error(`npm ci --omit=dev --ignore-scripts failed with exit code ${result.status}.${output ? `\n${output}` : ''}`);
  }
}

function escapeNSIS(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/"/g, '$\\"');
}

function prepareBaseStage() {
  if (!fileExists(SOURCE_EXE_PATH)) {
    throw new Error(`未找到 Wails 可执行文件：${SOURCE_EXE_PATH}`);
  }

  const nodeBinary = resolveNodeExecutablePath();
  const npmBinary = resolveNpmBinary(nodeBinary);

  ensureCleanDirectory(BASE_STAGE_PATH);
  copyFile(SOURCE_EXE_PATH, path.join(BASE_STAGE_PATH, EXECUTABLE_NAME));
  copyRuntimeDirectory(path.join(REPO_ROOT, 'desktop'), path.join(BASE_STAGE_PATH, 'desktop'));
  copyDirectory(path.join(REPO_ROOT, 'dist'), path.join(BASE_STAGE_PATH, 'dist'));
  copyFile(path.join(REPO_ROOT, 'package.json'), path.join(BASE_STAGE_PATH, 'package.json'));
  copyFile(path.join(REPO_ROOT, 'package-lock.json'), path.join(BASE_STAGE_PATH, 'package-lock.json'));
  copyFile(nodeBinary, path.join(BASE_STAGE_PATH, 'runtime', 'node', 'node.exe'));

  runNpmCI(npmBinary, BASE_STAGE_PATH);
}

function prepareDerivedStages() {
  ensureCleanDirectory(LITE_STAGE_PATH);
  ensureCleanDirectory(INSTALLER_STAGE_PATH);

  copyDirectory(BASE_STAGE_PATH, LITE_STAGE_PATH);
  copyDirectory(BASE_STAGE_PATH, INSTALLER_STAGE_PATH);

  if (!fileExists(BUNDLED_FFMPEG_PATH)) {
    throw new Error(`未找到内置 FFmpeg：${BUNDLED_FFMPEG_PATH}`);
  }

  copyFile(BUNDLED_FFMPEG_PATH, path.join(INSTALLER_STAGE_PATH, 'tools', 'ffmpeg', 'ffmpeg.exe'));
}

function buildInstallerScript(stagePath, outputPath) {
  const iconPath = path.join(REPO_ROOT, 'build', 'icon.ico');
  return [
    'Unicode true',
    '!include "MUI2.nsh"',
    `!define MUI_ICON "${escapeNSIS(iconPath)}"`,
    `!define MUI_UNICON "${escapeNSIS(iconPath)}"`,
    'RequestExecutionLevel user',
    'SetCompressor /SOLID lzma',
    '!insertmacro MUI_PAGE_DIRECTORY',
    '!insertmacro MUI_PAGE_INSTFILES',
    '!insertmacro MUI_UNPAGE_CONFIRM',
    '!insertmacro MUI_UNPAGE_INSTFILES',
    '!insertmacro MUI_LANGUAGE "SimpChinese"',
    `OutFile "${escapeNSIS(outputPath)}"`,
    `InstallDir "$LOCALAPPDATA\\\\${escapeNSIS(PRODUCT_NAME)}"`,
    `Name "${escapeNSIS(PRODUCT_NAME)}"`,
    'ShowInstDetails show',
    'ShowUninstDetails show',
    '',
    'Section "Install"',
    '  SetShellVarContext current',
    '  SetOutPath "$INSTDIR"',
    `  File /r "${escapeNSIS(path.join(stagePath, '*'))}"`,
    '  WriteUninstaller "$INSTDIR\\\\Uninstall.exe"',
    `  CreateDirectory "$SMPROGRAMS\\\\${escapeNSIS(SHORTCUT_NAME)}"`,
    `  CreateShortCut "$DESKTOP\\\\${escapeNSIS(PRODUCT_NAME)}.lnk" "$INSTDIR\\\\${escapeNSIS(EXECUTABLE_NAME)}"`,
    `  CreateShortCut "$SMPROGRAMS\\\\${escapeNSIS(SHORTCUT_NAME)}\\\\${escapeNSIS(PRODUCT_NAME)}.lnk" "$INSTDIR\\\\${escapeNSIS(EXECUTABLE_NAME)}"`,
    `  CreateShortCut "$SMPROGRAMS\\\\${escapeNSIS(SHORTCUT_NAME)}\\\\卸载 ${escapeNSIS(PRODUCT_NAME)}.lnk" "$INSTDIR\\\\Uninstall.exe"`,
    'SectionEnd',
    '',
    'Section "Uninstall"',
    '  SetShellVarContext current',
    `  Delete "$DESKTOP\\\\${escapeNSIS(PRODUCT_NAME)}.lnk"`,
    `  Delete "$SMPROGRAMS\\\\${escapeNSIS(SHORTCUT_NAME)}\\\\${escapeNSIS(PRODUCT_NAME)}.lnk"`,
    `  Delete "$SMPROGRAMS\\\\${escapeNSIS(SHORTCUT_NAME)}\\\\卸载 ${escapeNSIS(PRODUCT_NAME)}.lnk"`,
    `  RMDir "$SMPROGRAMS\\\\${escapeNSIS(SHORTCUT_NAME)}"`,
    '  RMDir /r "$INSTDIR"',
    'SectionEnd',
    ''
  ].join('\r\n');
}

function buildLiteDirectScript(stagePath, outputPath, version) {
  const liteDirName = `JAV-Auto-Wails-Lite-${String(version || '').trim() || 'dev'}`;
  return [
    'Unicode true',
    'RequestExecutionLevel user',
    'SetCompressor /SOLID lzma',
    'SilentInstall silent',
    'AutoCloseWindow true',
    `OutFile "${escapeNSIS(outputPath)}"`,
    `InstallDir "$TEMP\\\\${escapeNSIS(liteDirName)}"`,
    `Name "${escapeNSIS(`${PRODUCT_NAME} 直开版`)}"`,
    '',
    'Section "Launch"',
    '  RMDir /r "$INSTDIR"',
    '  SetOutPath "$INSTDIR"',
    `  File /r "${escapeNSIS(path.join(stagePath, '*'))}"`,
    `  Exec '"$INSTDIR\\\\${escapeNSIS(EXECUTABLE_NAME)}"'`,
    'SectionEnd',
    ''
  ].join('\r\n');
}

function buildNSISPackage(scriptContent, outputPath, tempFolderName) {
  const tempWorkDir = path.join(TEMP_ROOT, tempFolderName);
  ensureCleanDirectory(tempWorkDir);

  const scriptPath = path.join(tempWorkDir, 'package.nsi');
  fs.writeFileSync(scriptPath, `\uFEFF${scriptContent}`, 'utf8');
  run(resolveNSISBinary(), [scriptPath], { cwd: tempWorkDir });

  if (!fileExists(outputPath)) {
    throw new Error(`NSIS 构建已结束，但未生成目标文件：${outputPath}`);
  }
}

function formatSize(filePath) {
  const stats = fs.statSync(filePath);
  return `${(stats.size / (1024 * 1024)).toFixed(2)} MB`;
}

function main() {
  const pkg = readPackageJson();
  const version = String(pkg.version || '0.0.0').trim();
  const liteOutputPath = path.join(OUTPUT_DIR, `JAV-Auto-Wails-Lite-Direct-${version}.exe`);
  const installerOutputPath = path.join(OUTPUT_DIR, `JAV-Auto-Wails-Installer-${version}.exe`);

  ensureCleanDirectory(OUTPUT_DIR);
  ensureCleanDirectory(TEMP_ROOT);

  prepareBaseStage();
  prepareDerivedStages();

  buildNSISPackage(
    buildLiteDirectScript(LITE_STAGE_PATH, liteOutputPath, version),
    liteOutputPath,
    'nsis-lite-direct'
  );
  buildNSISPackage(
    buildInstallerScript(INSTALLER_STAGE_PATH, installerOutputPath),
    installerOutputPath,
    'nsis-installer'
  );

  console.log('Wails 双分发打包完成：');
  console.log(`直开版：${liteOutputPath} (${formatSize(liteOutputPath)})`);
  console.log(`安装包：${installerOutputPath} (${formatSize(installerOutputPath)})`);
  console.log(`直开版运行时目录：${LITE_STAGE_PATH}`);
  console.log(`安装版运行时目录：${INSTALLER_STAGE_PATH}`);
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.stack || error.message : String(error);
  console.error(message);
  process.exit(1);
}
