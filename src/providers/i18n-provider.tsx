import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  PropsWithChildren,
} from 'react';
import {
  I18N_CONFIG_KEY,
  I18N_DEFAULT_LANGUAGE,
  I18N_LANGUAGES,
} from '@/i18n/config';
import { I18nProviderProps, Language } from '@/i18n/types';
import { DirectionProvider as RadixDirectionProvider } from '@radix-ui/react-direction';
import { IntlProvider } from 'react-intl';
import { getData, setData } from '@/lib/storage';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/fr';
import '@formatjs/intl-relativetimeformat/locale-data/vi';

/**
 * Resolve initial language following priority:
 * 1. `lang` query-string parameter (if matches supported language)
 * 2. Cached value in storage
 * 3. Fallback to default language
 */
const resolveInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');

    if (langParam) {
      const matched = I18N_LANGUAGES.find((l) => l.code === langParam);
      if (matched) {
        setData(I18N_CONFIG_KEY, matched);
        return matched;
      }
    }

    const cached = getData(I18N_CONFIG_KEY) as Language | undefined;
    if (cached) return cached;
  }

  return I18N_DEFAULT_LANGUAGE;
};

// -------------------- Context --------------------
const TranslationsContext = createContext<I18nProviderProps>({
  currentLanguage: I18N_DEFAULT_LANGUAGE,
  changeLanguage: () => {},
  isRTL: () => false,
});

export const useLanguage = () => useContext(TranslationsContext);

// -------------------- Provider --------------------
export const I18nProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
      resolveInitialLanguage(),
  );

  /**
   * Persist selection & update state
   */
  const changeLanguage = useCallback((language: Language) => {
    setData(I18N_CONFIG_KEY, language);
    setCurrentLanguage(language);
  }, []);

  /**
   * Memoised helper – used mainly by components needing quick RTL check
   */
  const isRTL = useCallback(() => currentLanguage.direction === 'rtl', [
    currentLanguage.direction,
  ]);

  /**
   * Keep <html dir> in sync
   */
  useEffect(() => {
    document.documentElement.setAttribute('dir', currentLanguage.direction);
  }, [currentLanguage.direction]);

  const contextValue = useMemo<I18nProviderProps>(
      () => ({ currentLanguage, changeLanguage, isRTL }),
      [currentLanguage, changeLanguage, isRTL],
  );

  return (
      <TranslationsContext.Provider value={contextValue}>
        <IntlProvider
            messages={currentLanguage.messages}
            locale={currentLanguage.code}
            defaultLocale={I18N_DEFAULT_LANGUAGE.code}
        >
          <RadixDirectionProvider dir={currentLanguage.direction}>
            {children}
          </RadixDirectionProvider>
        </IntlProvider>
      </TranslationsContext.Provider>
  );
};
