'use client';

import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n';
import ProfileDropDown from '../ProfileDropDown';

/**
 * Dashboard Header Component
 * Production-grade responsive header with user info
 */
export default function DashboardHeader({ title }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const { t } = useTranslation(locale);

  return (
    <header className='sticky top-0 z-30 border-b border-gray-200 bg-white shadow-sm'>
      <div className='flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
        {/* Title - Add left margin on mobile for hamburger button */}
        <div className='flex-1 min-w-0 lg:ml-0 ml-16'>
          <h1 className='text-xl sm:text-2xl font-semibold text-gray-900 truncate'>
            {title}
          </h1>
        </div>

        {/* User Badge */}
        <div className='flex items-center gap-2 sm:gap-4'>
          <div className='hidden sm:flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700'>
            
          <ProfileDropDown/>
          </div>
          {/* Mobile: Show only role initial */}
          <div className='sm:hidden flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700 uppercase'>
            {user? <ProfileDropDown/> : 'U'}
          </div>
        </div>
      </div>
    </header>
  );
}
