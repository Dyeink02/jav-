#!/usr/bin/env node

// toolchain-owner: active Wails desktop build entry; marker=active-toolchain-run-wails-build
// Primary desktop build entry for the current product.
// This is the script maintainers should start from when the packaged Wails EXE
// is wrong or missing.
//
// Workflow map:
// 1) build desktop frontend artifacts
// 2) sync artifacts into the Wails frontend tree
// 3) run `wails build`
// 4) copy resulting EXE into `wails-shell/release`
//
// Ownership summary:
// 1) orchestrate the maintained Wails desktop build path end to end
// 2) keep frontend bundling/sync/build steps in one predictable entrypoint
// 3) expose the release EXE path used by later packaging helpers
//
// File map for maintainers:
// 1) toolchain/path imports from `wails-paths`
// 2) sequential build orchestration in `main()`
// 3) release EXE sync/reporting

const {
  repoRoot,
  wailsDir,
  resolveNpmBinary,
  resolveWailsBinary,
  runCommand,
  copyBuildExeToRelease
} = require('./wails-paths');

function main() {
  const npmBinary = resolveNpmBinary();
  const wailsBinary = resolveWailsBinary();

  runCommand(npmBinary, ['run', 'build:desktop-frontend'], { cwd: repoRoot });
  runCommand(npmBinary, ['run', 'sync:wails-frontend'], { cwd: repoRoot });
  runCommand(wailsBinary, ['build'], { cwd: wailsDir });

  const releaseResult = copyBuildExeToRelease();
  if (releaseResult.fallbackUsed) {
    console.log(`Wails build completed. Primary release EXE is locked: ${releaseResult.primaryPath}`);
    console.log(`Fallback release EXE: ${releaseResult.actualPath}`);
    return;
  }

  console.log(`Wails build completed: ${releaseResult.actualPath}`);
}

main();
