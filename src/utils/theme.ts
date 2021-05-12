import {
  darkCssIsReady,
  loadDarkThemeCss,
  replaceStyleVariables,
} from 'vite-plugin-theme/es/client';
import { mixLighten, mixDarken, tinycolor } from 'vite-plugin-theme/es/colorUtils';

import { getThemeColors, generateColors } from '../../config/themeConfig';

export async function updateDarkTheme(mode: string | null = 'light') {
  const htmlRoot = document.querySelector('#htmlRoot');

  if (mode === 'dark') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (import.meta.env.PROD && !darkCssIsReady) {
      await loadDarkThemeCss();
    }
    htmlRoot?.setAttribute('data-theme', 'dark');
  } else {
    htmlRoot?.setAttribute('data-theme', 'light');
  }
}

export async function changeThemeColor(color: string) {
  const colors = generateColors({
    mixLighten,
    mixDarken,
    tinyColor: tinycolor,
    color,
  });
  return await replaceStyleVariables({
    colorVariables: [...getThemeColors(color), ...colors],
  });
}
