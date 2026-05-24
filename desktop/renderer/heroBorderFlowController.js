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
