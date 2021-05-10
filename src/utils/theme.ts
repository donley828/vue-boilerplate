import { darkCssIsReady, loadDarkThemeCss } from 'vite-plugin-theme/es/client';

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
