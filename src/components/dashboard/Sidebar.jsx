'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  FileText,
  Image,
  ScrollText,
  Search,
  Building2,
  UserCheck,
  Bell,
  Calendar,
  Settings,
  LogOut,
  Home,
  Heart,
  MessageSquare,
  UserCircle,
  List,
  Mail,
  ChevronDown,
  X,
  Menu,
  Globe,
  Briefcase,
  HelpCircle,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMemo, useState, useEffect, useRef } from 'react';
import { useTranslation } from '@/i18n';

/**
 * Navigation items configuration for each role - using translation keys
 */
const navigationConfig = {
  admin: [
    {
      key: 'dashboard.admin.overview',
      href: '/dashboard/admin',
      icon: LayoutDashboard,
    },
    {
      key: 'dashboard.admin.usersLink',
      href: '/dashboard/admin/users',
      icon: Users,
    },
    {
      key: 'dashboard.admin.blogEditorLink',
      href: '/dashboard/admin/blog-editor',
      icon: FileText,
    },
    // {
    //   key: 'dashboard.admin.mediaLibrary',
    //   href: '/dashboard/admin/media-library',
    //   icon: Image,
    // },
    {
      key: 'dashboard.admin.auditLogsLink',
      href: '/dashboard/admin/audit-logs',
      icon: ScrollText,
    },
    // {
    //   key: 'dashboard.admin.seoManagement',
    //   href: '/dashboard/admin/seo-management',
    //   icon: Search,
    // },
    {
      key: 'dashboard.admin.propertiesLink',
      href: '/dashboard/admin/properties',
      icon: Building2,
    },
    {
      key: 'dashboard.admin.partnersLink',
      href: '/dashboard/admin/partners',
      icon: UserCheck,
    },
    {
      key: 'dashboard.admin.conciergeRequestsLink',
      href: '/dashboard/admin/concierge-requests',
      icon: Bell,
    },
    {
      key: 'dashboard.admin.eventManagement',
      href: '/dashboard/admin/event-management',
      icon: Calendar,
    },
    // {
    //   key: 'dashboard.admin.settings',
    //   href: '/dashboard/admin/settings',
    //   icon: Settings,
    // },
  ],
  client: [
    {
      key: 'dashboard.client.profile',
      href: '/dashboard/client',
      icon: UserCircle,
    },
    {
      key: 'dashboard.client.favorites',
      href: '/dashboard/client/favorites',
      icon: Heart,
    },
    {
      key: 'dashboard.client.savedSearches',
      href: '/dashboard/client/saved-searches',
      icon: Search,
    },
    {
      key: 'dashboard.client.appointments',
      href: '/dashboard/client/appointments',
      icon: Calendar,
    },
    {
      key: 'dashboard.client.messages',
      href: '/dashboard/client/messages',
      icon: MessageSquare,
    },
    {
      key: 'dashboard.client.settings',
      href: '/dashboard/client/settings',
      icon: Settings,
    },
  ],
  partner: [
    {
      key: 'dashboard.partner.properties',
      href: '/dashboard/partner',
      icon: Building2,
    },
    {
      key: 'dashboard.partner.myListings',
      href: '/dashboard/partner/my-listings',
      icon: List,
    },
    {
      key: 'dashboard.partner.inquiries',
      href: '/dashboard/partner/inquiries',
      icon: Mail,
    },
    {
      key: 'dashboard.partner.developerPortal',
      href: '/dashboard/partner/developer-portal',
      icon: Briefcase,
    },
    {
      key: 'dashboard.partner.developerInquiry',
      href: '/dashboard/partner/developer-inquiry',
      icon: HelpCircle,
    },
    {
      key: 'dashboard.partner.profile',
      href: '/dashboard/partner/profile',
      icon: UserCircle,
    },
  ],
};

/**
 * Sidebar Navigation Component
 * Production-grade responsive sidebar with mobile menu and client-side language switching
 */
export default function Sidebar({ role = 'admin' }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { locale, changeLanguage } = useLanguage(); // Use LanguageContext
  const { t } = useTranslation(locale);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = useMemo(() => navigationConfig[role] || [], [role]);

  // Close mobile menu when route changes
  if (pathname !== prevPathname) {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    setPrevPathname(pathname);
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLangDropdown(false);
      }
    };

    if (showLangDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLangDropdown]);

  /**
   * Check if link is active
   */
  const isActiveLink = (href) => {
    const fullHref = `/${locale}${href}`;
    if (href === `/dashboard/${role}`) {
      return pathname === fullHref;
    }
    return pathname.startsWith(fullHref);
  };

  /**
   * Handle logout
   */
  const handleLogout = () => {
    logout();
  };

  /**
   * Handle language change - CLIENT-SIDE ONLY (No page reload!)
   * Professional approach: instant UI update using React Context
   */
  const handleLanguageChange = (newLocale) => {
    changeLanguage(newLocale); // This updates state + URL without reload ✨
    setShowLangDropdown(false); // Close dropdown after selection
  };

  /**
   * Get user display name based on role
   */
  const getUserDisplayName = () => {
    if (user?.name) return user.name;

    // Translate role-based default names
    const roleNames = {
      admin:
        t('dashboard.admin.title')
          .replace('Tableau de Bord ', '')
          .replace('Dashboard', '')
          .trim() || 'Admin',
      client:
        t('dashboard.client.title')
          .replace('Tableau de Bord ', '')
          .replace('Dashboard', '')
          .trim() || 'Client',
      partner:
        t('dashboard.partner.title')
          .replace('Tableau de Bord ', '')
          .replace('Dashboard', '')
          .trim() || 'Partner',
    };

    return roleNames[user?.role] || 'User';
  };

  /**
   * Render sidebar content
   */
  const renderSidebarContent = () => (
    <div className='flex h-full flex-col'>
      {/* Logo Section */}
      <div className='flex h-20 items-center gap-3 border-b border-gray-700/50 px-6'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#E6B325]'>
          <Home className='h-6 w-6 text-[#0F1B2E]' />
        </div>
        <div className='flex-1 min-w-0'>
          <h1 className='text-lg font-semibold text-white'>Q Global Living</h1>
          <p className='text-xs text-gray-400 capitalize'>
            {t(`dashboard.${role}.title`)}
          </p>
        </div>
        {/* Close button for mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className='lg:hidden text-gray-400 hover:text-white transition-colors'
          aria-label='Close menu'
        >
          <X className='h-6 w-6' />
        </button>
      </div>

      {/* Navigation Items */}
      <nav className='flex-1 overflow-y-auto px-3 py-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800'>
        <ul className='space-y-1'>
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveLink(item.href);
            const fullHref = `/${locale}${item.href}`;

            return (
              <li key={item.href}>
                <Link
                  href={fullHref}
                  className={`
                    group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium
                    transition-all duration-200 ease-in-out
                    ${
                      isActive
                        ? 'bg-[#1E3A5F] text-white shadow-sm'
                        : 'text-gray-300 hover:bg-[#1A2B42] hover:text-white'
                    }
                  `}
                >
                  <Icon
                    className={`
                      h-5 w-5 shrink-0 transition-colors
                      ${
                        isActive
                          ? 'text-[#E6B325]'
                          : 'text-gray-400 group-hover:text-gray-300'
                      }
                    `}
                  />
                  <span className='flex-1 truncate'>{t(item.key)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className='border-t border-gray-700/50 p-4'>
        {/* User Info with Dropdown */}
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={() => setShowLangDropdown(!showLangDropdown)}
            className='mb-3 flex w-full items-center gap-3 rounded-lg bg-[#1A2B42] px-3 py-2.5 hover:bg-[#1E3A5F] transition-colors'
          >
            <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6B325] text-sm font-semibold text-[#0F1B2E]'>
              {user?.name?.charAt(0) || getUserDisplayName().charAt(0)}
            </div>
            <div className='flex-1 min-w-0 text-left'>
              <p className='truncate text-sm font-medium text-white'>
                {getUserDisplayName()}
              </p>
              <p className='truncate text-xs text-gray-400'>
                {user?.email || ''}
              </p>
            </div>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                showLangDropdown ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Language Dropdown */}
          {showLangDropdown && (
            <div className='absolute bottom-full left-0 right-0 mb-2 bg-[#1A2B42] rounded-lg shadow-lg border border-gray-700/50 overflow-hidden'>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                  locale === 'en'
                    ? 'bg-[#1E3A5F] text-white'
                    : 'text-gray-300 hover:bg-[#1E3A5F] hover:text-white'
                }`}
              >
                <Globe className='h-4 w-4 shrink-0' />
                <span>English</span>
                {locale === 'en' && (
                  <span className='ml-auto text-[#E6B325]'>✓</span>
                )}
              </button>
              <button
                onClick={() => handleLanguageChange('fr')}
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                  locale === 'fr'
                    ? 'bg-[#1E3A5F] text-white'
                    : 'text-gray-300 hover:bg-[#1E3A5F] hover:text-white'
                }`}
              >
                <Globe className='h-4 w-4 shrink-0' />
                <span>Français</span>
                {locale === 'fr' && (
                  <span className='ml-auto text-[#E6B325]'>✓</span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className='flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-[#1A2B42] hover:text-white'
          aria-label='Logout'
        >
          <LogOut className='h-5 w-5 shrink-0 text-gray-400' />
          <span>{t('dashboard.logout')}</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Toggle Button - Perfectly centered with header */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className='fixed top-3.5 left-4 z-50 lg:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F1B2E] text-white shadow-md hover:bg-[#1A2B42] transition-colors'
        aria-label='Open menu'
      >
        <Menu className='h-5 w-5' />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity'
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden='true'
        />
      )}

      {/* Desktop Sidebar - Hidden on mobile, visible on lg+ */}
      <aside className='hidden lg:block fixed left-0 top-0 z-40 h-screen w-64 bg-[#0F1B2E]'>
        {renderSidebarContent()}
      </aside>

      {/* Mobile Sidebar - Slide in from left */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-64 bg-[#0F1B2E] transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {renderSidebarContent()}
      </aside>
    </>
  );
}
