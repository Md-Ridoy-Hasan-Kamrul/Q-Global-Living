'use client';

import { memo } from 'react';
import { Search } from 'lucide-react';

const PropertiesFilters = memo(
  ({
    searchTerm,
    statusFilter,
    onSearchChange,
    onStatusChange,
    translations,
  }) => {
    return (
      <div className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6'>
        <div className='flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between'>
          {/* Search */}
          <div className='relative flex-1 max-w-md'>
            <Search
              className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
              size={18}
            />
            <input
              type='text'
              placeholder={translations.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className='w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm text-gray-900 placeholder-gray-400'
            />
          </div>

          {/* Filters and Action */}
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3'>
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => onStatusChange(e.target.value)}
              className='px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm text-gray-900 cursor-pointer'
            >
              <option value='all'>{translations.allStatus}</option>
              <option value='active'>{translations.status.active}</option>
              <option value='pending'>{translations.status.pending}</option>
              <option value='inactive'>{translations.status.inactive}</option>
            </select>

            {/* Add Property Button */}
            <button
              type='button'
              className='px-4 sm:px-6 py-2.5 bg-[#d4af37] hover:bg-[#c19b2a] text-[#1e3a5f] rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap'
            >
              {translations.addProperty}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

PropertiesFilters.displayName = 'PropertiesFilters';

export default PropertiesFilters;
