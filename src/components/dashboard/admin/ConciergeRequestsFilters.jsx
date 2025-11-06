'use client';

import { memo } from 'react';
import { Search, Plus } from 'lucide-react';

const ConciergeRequestsFilters = memo(
  ({
    searchTerm,
    onSearchChange,
    statusFilter,
    onStatusChange,
    priorityFilter,
    onPriorityChange,
    translations,
  }) => {
    return (
      <div className='bg-white border border-gray-200 rounded-lg p-4'>
        <div className='flex flex-col lg:flex-row gap-4'>
          {/* Search */}
          <div className='flex-1'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400' />
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={translations.searchPlaceholder}
                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className='w-full lg:w-48'>
            <select
              value={statusFilter}
              onChange={(e) => onStatusChange(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
            >
              <option value='all'>{translations.filters.allStatus}</option>
              <option value='pending'>{translations.status.pending}</option>
              <option value='in-progress'>
                {translations.status.inProgress}
              </option>
              <option value='completed'>{translations.status.completed}</option>
              <option value='cancelled'>{translations.status.cancelled}</option>
            </select>
          </div>

          {/* Priority Filter */}
          <div className='w-full lg:w-48'>
            <select
              value={priorityFilter}
              onChange={(e) => onPriorityChange(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:border-transparent'
            >
              <option value='all'>{translations.filters.allPriority}</option>
              <option value='high'>{translations.priority.high}</option>
              <option value='medium'>{translations.priority.medium}</option>
              <option value='low'>{translations.priority.low}</option>
            </select>
          </div>

          {/* Add Button */}
          <button className='px-4 py-2 bg-[#E6B325] text-white rounded-lg hover:bg-[#d4a420] transition-colors flex items-center justify-center gap-2 font-medium text-sm whitespace-nowrap'>
            <Plus className='h-4 w-4' />
            {translations.addRequest}
          </button>
        </div>
      </div>
    );
  }
);

ConciergeRequestsFilters.displayName = 'ConciergeRequestsFilters';

export default ConciergeRequestsFilters;
