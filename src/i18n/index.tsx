import { useEffect, useMemo, useState } from 'react';
import { useHostEnv } from '@/compat';
import { en } from './locales/en';
import { es } from './locales/es';

export type LanguageCode = 'en' | 'es' | string;
export type TranslationMap = Record<string, string>;

const bundledPacks: Record<string, TranslationMap> = { en, es };

const normalizeLocale = (locale: string | null | undefined): string => {
  const raw = (locale || 'en').trim().toLowerCase().replace('_', '-');
  return raw.split('-')[0] || 'en';
};

const interpolate = (text: string, vars?: Record<string, string | number>): string => {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? `{${key}}`));
};

export function useI18n() {
  const { host } = useHostEnv();
  const [language, setLanguageState] = useState<LanguageCode>(() => normalizeLocale(host.i18n?.locale));

  useEffect(() => host.i18n?.onLocaleChange?.((locale) => setLanguageState(normalizeLocale(locale))), [host]);

  const t = useMemo(() => {
    return (key: string, vars?: Record<string, string | number>): string => {
      const hostText = host.i18n?.t?.(key, vars);
      if (hostText && hostText !== key) return hostText;
      const lang = normalizeLocale(language);
      const local = bundledPacks[lang]?.[key] ?? bundledPacks.en[key] ?? key;
      return interpolate(local, vars);
    };
  }, [host, language]);

  return {
    language,
    availableLanguages: [
      { locale: 'en', name: 'English', nativeName: 'English', bundled: true },
      { locale: 'es', name: 'Spanish', nativeName: 'Español', bundled: true },
    ],
    t,
    setLanguage: (locale: LanguageCode) => setLanguageState(normalizeLocale(locale)),
    installLanguagePack: (_jsonText: string) => { throw new Error('Language packs are managed by Tytus OS host.'); },
    removeLanguagePack: (_locale: LanguageCode) => undefined,
  };
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
