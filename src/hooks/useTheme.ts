import { useEffect, useState } from 'react';

export type ThemePreference = 'light' | 'dark' | 'system';

export const THEME_STORAGE_KEY = 'portfolio-theme';

const darkQuery = '(prefers-color-scheme: dark)';

const systemPrefersDark = () => window.matchMedia(darkQuery).matches;

const resolve = (preference: ThemePreference) =>
  preference === 'system' ? (systemPrefersDark() ? 'dark' : 'light') : preference;

const write = (preference: ThemePreference) => {
  document.documentElement.dataset.theme = resolve(preference);
  document.documentElement.dataset.themePreference = preference;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    /* storage indisponível (modo privado/iframe): o tema da sessão continua aplicado */
  }
};

export const readStoredPreference = (): ThemePreference => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* sem storage: assumir system, coerente com o script do index.html */
  }
  return 'system';
};

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(() => readStoredPreference());

  useEffect(() => {
    write(preference);
    if (preference !== 'system') return;

    const media = window.matchMedia(darkQuery);
    const onChange = () => {
      document.documentElement.dataset.theme = resolve('system');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [preference]);

  return { preference, setPreference };
}
