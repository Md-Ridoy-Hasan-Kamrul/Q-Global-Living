"use client";

// i18n utility functions
import { useMemo } from "react";
import en from "./translations/en.json";
import fr from "./translations/fr.json";

const translations = { en, fr };

export function getTranslation(locale) {
  return translations[locale] || translations.en;
}

/**
 * Professional useTranslation hook - backward compatible
 * - Uses provided locale parameter
 * - Optimized with useMemo to prevent re-renders
 */
export function useTranslation(localeParam = "en") {
  const locale = localeParam;

  // Memoize translation object to prevent unnecessary re-renders
  const t = useMemo(() => getTranslation(locale), [locale]);

  // Memoize translation function
  const translate = useMemo(() => {
    return (key) => {
      const keys = key.split(".");
      let value = t;
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    };
  }, [t]);

  return {
    t: translate,
    locale,
  };
}
