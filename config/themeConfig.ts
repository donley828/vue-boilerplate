import { generate } from '@ant-design/colors';
import { getThemeVariables } from 'ant-design-vue/dist/theme';
import { resolve } from 'path';

export const primaryColor = '#0960bd';
export const mode = 'light';

type Fn = (...arg: any) => any;

export interface GenerateColorsParams {
  mixLighten: Fn;
  mixDarken: Fn;
  tinyColor: any;
  color?: string;
}

export function generateAntColors(color: string): string[] {
  return generate(color, { theme: 'default' });
}

export function getThemeColors(color?: string): string[] {
  const tc = color || primaryColor;
  const colors = generateAntColors(tc);
  const primary = colors[5];
  const modeColors = generateAntColors(primary);
  return [...colors, ...modeColors];
}

export function generateColors({
  color = primaryColor,
  mixLighten,
  mixDarken,
  tinyColor,
}: GenerateColorsParams) {
  const arr = new Array(19).fill(0);
  const lightens = arr.map((_t, i) => {
    return mixLighten(color, i / 5);
  });

  const darkens = arr.map((_t, i) => {
    return mixDarken(color, i / 5);
  });

  const alphaColors = arr.map((_t, i) => {
    return tinyColor(color)
      .setAlpha(i / 20)
      .toRgbString();
  });

  const tinyColorLightens = arr
    .map((_t, i) => {
      return tinyColor(color)
        .lighten(i * 5)
        .toHexString();
    })
    .filter((item) => item !== '#ffffff');

  const tinyColorDarkens = arr
    .map((_t, i) => {
      return tinyColor(color)
        .darken(i * 5)
        .toHexString();
    })
    .filter((item) => item !== '#000000');
  return [...lightens, ...darkens, ...alphaColors, ...tinyColorDarkens, ...tinyColorLightens];
}

export function generateModifyVars(dark = false) {
  const palettes = generateAntColors(primaryColor);
  const primary = palettes[5];

  const primaryColorObj: Record<string, string> = {};

  for (let i = 0; i < 10; i++) {
    primaryColorObj[`primary-${i + 1}`] = palettes[i];
  }

  const modifyVars = getThemeVariables({ dark });

  return {
    ...modifyVars,
    // Used for global import to avoid the need to import each style file separately
    // reference:  Avoid repeated references
    hack: `${modifyVars.hack} @import (reference) "${resolve('src/theme/index.less')}";`,
    'primary-color': primary,
    ...primaryColorObj,
    'info-color': primary,
    'processing-color': primary,
    'success-color': '#55D187',
    'error-color': '#ED6F6F',
    'warning-color': '#EFBD47',
    'font-size-base': '14px',
    'border-radius-base': '2px',
    'link-color': primary,
  };
}
