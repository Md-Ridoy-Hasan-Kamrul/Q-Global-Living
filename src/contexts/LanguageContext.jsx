'use client';

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useTransition,
  useCallback,
} from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LanguageContext = createContext();

/**
 * Professional Language Provider with smooth transitions
 * - Zero page reload
 * - No flickering or shaking
 * - Instant UI updates
 * - Preserves scroll position and state
 */
export function LanguageProvider({ children, initialLocale = 'en' }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Get locale from URL pathname (derived state)
  const localeFromPath = useMemo(() => {
    const pathParts = pathname.split('/');
    const pathLocale = pathParts[1];
    return pathLocale === 'en' || pathLocale === 'fr'
      ? pathLocale
      : initialLocale;
  }, [pathname, initialLocale]);

  /**
   * Professional language switching with React 18 Transitions
   * - Smooth, non-blocking updates
   * - No layout shift or flicker
   * - Preserves scroll and query params
   */
  const changeLanguage = useCallback(
    (newLocale) => {
      if (newLocale === localeFromPath || isPending) return;

      // Get current URL with all query parameters
      const searchParams = window.location.search;
      const hash = window.location.hash;

      // Build new path preserving all URL parts
      const newPath =
        pathname.replace(`/${localeFromPath}`, `/${newLocale}`) +
        searchParams +
        hash;

      // Use React 18 transition for smooth, non-blocking update
      startTransition(() => {
        window.history.pushState(null, '', newPath);
      });
    },
    [localeFromPath, pathname, isPending]
  );

  const value = useMemo(
    () => ({
      locale: localeFromPath,
      changeLanguage,
      isPending,
    }),
    [localeFromPath, changeLanguage, isPending]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
