'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ currentLocale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale) => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.replace(newPath, { scroll: false });
  };

  return (
    <div className='flex items-center gap-1.5 rounded-lg border border-primary/30 bg-white/50 dark:bg-charcoal/50 backdrop-blur-sm px-2.5 sm:px-3 h-9 sm:h-10 transition-all hover:border-primary/50'>
      <Globe className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0' />
      <button
        onClick={() => changeLanguage('en')}
        className={`text-xs sm:text-sm font-bold transition-all ${
          currentLocale === 'en'
            ? 'text-primary scale-105'
            : 'text-charcoal/60 hover:text-primary dark:text-white/60 dark:hover:text-primary'
        }`}
        aria-label='Switch to English'
      >
        EN
      </button>
      <span className='text-charcoal/30 dark:text-white/30 text-xs'>|</span>
      <button
        onClick={() => changeLanguage('fr')}
        className={`text-xs sm:text-sm font-bold transition-all ${
          currentLocale === 'fr'
            ? 'text-primary scale-105'
            : 'text-charcoal/60 hover:text-primary dark:text-white/60 dark:hover:text-primary'
        }`}
        aria-label='Switch to French'
      >
        FR
      </button>
    </div>
  );
}
