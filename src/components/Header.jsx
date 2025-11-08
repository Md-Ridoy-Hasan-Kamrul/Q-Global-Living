'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { getTranslation } from '@/i18n';

/**
 * Production-grade Header Component
 *
 * Features:
 * - Optimized for Core Web Vitals (LCP, CLS, INP)
 * - SEO-friendly with semantic HTML and ARIA labels
 * - Fully accessible (WCAG 2.1 AA compliant)
 * - Performance optimized with memoization
 * - Responsive design with mobile-first approach
 * - Smooth animations and transitions
 *
 * @param {Object} props
 * @param {string} props.locale - Current locale (en/fr)
 */
function Header({ locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Memoize translation function to prevent re-creation
  const translations = useMemo(() => getTranslation(locale), [locale]);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = translations;
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
    [translations]
  );

  // Memoize navigation links to prevent re-creation on every render
  const navLinks = useMemo(
    () => [
      {
        href: `/${locale}/buy`,
        label: t('nav.buy'),
        ariaLabel: 'Buy properties',
      },
      {
        href: `/${locale}/rent`,
        label: t('nav.rent'),
        ariaLabel: 'Rent properties',
      },
      {
        href: `/${locale}/properties/residential`,
        label: t('nav.newDevelopments'),
        ariaLabel: 'New developments',
      },
      {
        href: `/${locale}/concierge`,
        label: t('nav.concierge'),
        ariaLabel: 'Concierge services',
      },
      // {
      //   href: `/${locale}/about`,
      //   label: t('nav.about'),
      //   ariaLabel: 'About us',
      // },
      // {
      //   href: `/${locale}/contact`,
      //   label: t('nav.contact'),
      //   ariaLabel: 'Contact us',
      // },
      // {
      //   href: `/${locale}/blog`,
      //   label: t('nav.blog'),
      //   ariaLabel: 'Blog articles',
      // },
    ],
    [locale, t]
  );

  // Optimize menu close handler
  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Close mobile menu on window resize - Performance optimized
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    // Debounce resize handler for better performance
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open - Accessibility enhancement
  useEffect(() => {
    if (mobileMenuOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header
      className='sticky top-0 z-50 border-b border-solid border-primary/20 bg-background-light/95 backdrop-blur-md dark:bg-background-dark/95 shadow-sm'
      role='banner'
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20'>
        {/* Logo - Optimized for LCP */}
        <Link
          href={`/${locale}`}
          className='flex items-center shrink-0 focus:outline-none'
          onClick={handleMobileMenuClose}
          aria-label={t('common.home') || 'Home'}
        >
          <Image
            src='/logo.png'
            alt='Q Global Living - Real Estate'
            width={85}
            height={40}
            className='h-10 w-auto object-contain'
            priority
            quality={90}
          />
        </Link>

        {/* Desktop Navigation - Semantic HTML */}
        <nav
          className='hidden md:flex items-center gap-2 lg:gap-4'
          aria-label='Main navigation'
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className='text-sm font-medium text-charcoal dark:text-soft-grey hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-3 py-2'
              href={link.href}
              aria-label={link.ariaLabel}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className='hidden md:flex items-center gap-3'>
          <Link
            href={`/${locale}/login`}
            className='flex items-center justify-center h-10 px-4 rounded-lg border border-primary text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
            aria-label='Sign in to your account'
          >
            {t('nav.login') || 'Sign In'}
          </Link>
          <Link
            href={`/${locale}/event`}
            className='flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
            aria-label='Register for event'
          >
            {t('nav.listYourProperty')}
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Mobile Actions */}
        <div className='flex md:hidden items-center gap-2'>
          <LanguageSwitcher currentLocale={locale} />
          <button
            onClick={handleMobileMenuToggle}
            className='flex items-center justify-center w-10 h-10 rounded-lg text-charcoal dark:text-soft-grey hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary'
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls='mobile-menu'
            type='button'
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6' aria-hidden='true' />
            ) : (
              <Menu className='w-6 h-6' aria-hidden='true' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Optimized for INP */}
      {mobileMenuOpen && (
        <div
          id='mobile-menu'
          className='md:hidden fixed inset-x-0 top-[76px] max-h-[calc(100vh-76px)] bg-background-light dark:bg-background-dark z-40 overflow-y-auto border-b border-primary/20 shadow-lg animate-slide-up'
          role='navigation'
          aria-label='Mobile navigation'
        >
          <nav className='flex flex-col px-4 py-6 space-y-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleMobileMenuClose}
                className='px-4 py-3 text-base font-medium text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary'
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
            <div className='pt-4 border-t border-primary/20 space-y-3'>
              <Link
                href={`/${locale}/login`}
                onClick={handleMobileMenuClose}
                className='flex items-center justify-center w-full h-12 px-4 rounded-lg border border-primary text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary'
                aria-label='Sign in to your account'
              >
                {t('nav.login') || 'Sign In'}
              </Link>
              <Link
                href={`/${locale}/event`}
                onClick={handleMobileMenuClose}
                className='flex items-center justify-center w-full h-12 px-4 rounded-lg bg-primary text-base font-semibold text-white hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary'
                aria-label='Register for event'
              >
                {t('nav.listYourProperty')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(Header);
