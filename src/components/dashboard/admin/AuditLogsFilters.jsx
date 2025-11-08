'use client';

import { memo } from 'react';
import { Search, Calendar, User, Zap, ChevronDown } from 'lucide-react';

const AuditLogsFilters = memo(
  ({
    searchQuery,
    dateRange,
    userFilter,
    actionFilter,
    onSearchChange,
    onDateRangeChange,
    onUserFilterChange,
    onActionFilterChange,
    translations,
  }) => {
    return (
      <div className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4'>
          {/* Search Input */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <div className='relative'>
              <Search
                className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                size={18}
              />
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={translations.searchPlaceholder}
                className='w-full pl-10 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm text-gray-900 placeholder-gray-400'
              />
            </div>
          </div>

          {/* Date Range Filter */}
          <div className='relative'>
            <Calendar
              className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none z-10'
              size={18}
            />
            <select
              value={dateRange}
              onChange={(e) => onDateRangeChange(e.target.value)}
              className='w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm text-gray-900 appearance-none cursor-pointer'
            >
              <option value='all'>{translations.allDates}</option>
              <option value='7days'>{translations.last7Days}</option>
              <option value='30days'>{translations.last30Days}</option>
              <option value='90days'>{translations.last90Days}</option>
              <option value='custom'>{translations.customRange}</option>
            </select>
            <ChevronDown
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'
              size={18}
            />
          </div>

          {/* User / Actor Filter */}
          <div className='relative'>
            <User
              className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none z-10'
              size={18}
            />
            <select
              value={userFilter}
              onChange={(e) => onUserFilterChange(e.target.value)}
              className='w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm text-gray-900 appearance-none cursor-pointer'
            >
              <option value='all'>{translations.allUsers}</option>
              <option value='admin'>Admin Users</option>
              <option value='staff'>Staff Members</option>
              <option value='system'>System</option>
            </select>
            <ChevronDown
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'
              size={18}
            />
          </div>

          {/* Action Type Filter */}
          <div className='relative'>
            <Zap
              className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none z-10'
              size={18}
            />
            <select
              value={actionFilter}
              onChange={(e) => onActionFilterChange(e.target.value)}
              className='w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm text-gray-900 appearance-none cursor-pointer'
            >
              <option value='all'>{translations.allActions}</option>
              <option value='property'>Property Actions</option>
              <option value='user'>User Actions</option>
              <option value='settings'>Settings</option>
              <option value='security'>Security</option>
            </select>
            <ChevronDown
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'
              size={18}
            />
          </div>
        </div>
      </div>
    );
  }
);

AuditLogsFilters.displayName = 'AuditLogsFilters';

export default AuditLogsFilters;
