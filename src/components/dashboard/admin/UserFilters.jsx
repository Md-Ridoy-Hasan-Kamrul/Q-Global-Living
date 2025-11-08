'use client';

import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

/**
 * UserFilters Component
 * Search bar and filter dropdowns for user management
 *
 * @param {Object} props
 * @param {string} props.searchPlaceholder - Search input placeholder
 * @param {Function} props.onSearchChange - Search change handler
 * @param {Function} props.onStatusChange - Status filter handler
 * @param {Function} props.onRoleChange - Role filter handler
 * @param {Object} props.translations - i18n translations
 */
export default function UserFilters({
  searchPlaceholder,
  onSearchChange,
  onStatusChange,
  onRoleChange,
  translations,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange?.(value);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
    onStatusChange?.(value);
  };

  const handleRoleChange = (e) => {
    const value = e.target.value;
    setRoleFilter(value);
    onRoleChange?.(value);
  };

  return (
    <div className='flex flex-wrap items-center gap-4'>
      {/* Search Input */}
      <div className='relative flex-1 min-w-[300px]'>
        <Search className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
        <input
          type='text'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={searchPlaceholder}
          className='
            h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4
            text-sm text-gray-900 placeholder:text-gray-400
            transition-all duration-200
            hover:border-gray-300
            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
          '
        />
      </div>

      {/* Status Filter */}
      <div className='relative'>
        <select
          value={statusFilter}
          onChange={handleStatusChange}
          className='
            h-12 appearance-none rounded-lg border border-gray-200 bg-white
            pl-4 pr-10 text-sm font-medium text-gray-700
            transition-all duration-200
            hover:border-gray-300
            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
            cursor-pointer
          '
        >
          <option value='all'>
            {translations.filters.status}: {translations.filters.statusAll}
          </option>
          <option value='active'>{translations.statuses.active}</option>
          <option value='inactive'>{translations.statuses.inactive}</option>
          <option value='suspended'>{translations.statuses.suspended}</option>
          <option value='pending'>{translations.statuses.pending}</option>
        </select>
        <ChevronDown className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500' />
      </div>

      {/* Role Filter */}
      <div className='relative'>
        <select
          value={roleFilter}
          onChange={handleRoleChange}
          className='
            h-12 appearance-none rounded-lg border border-gray-200 bg-white
            pl-4 pr-10 text-sm font-medium text-gray-700
            transition-all duration-200
            hover:border-gray-300
            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
            cursor-pointer
          '
        >
          <option value='all'>
            {translations.filters.role}: {translations.filters.roleAll}
          </option>
          <option value='buyer'>{translations.roles.buyer}</option>
          <option value='developer'>{translations.roles.developer}</option>
          <option value='concierge'>{translations.roles.concierge}</option>
          <option value='admin'>{translations.roles.admin}</option>
          <option value='partner'>{translations.roles.partner}</option>
          <option value='agent'>{translations.roles.agent}</option>
        </select>
        <ChevronDown className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500' />
      </div>

      {/* Last Activity Filter (Optional) */}
      <div className='relative'>
        <select
          className='
            h-12 appearance-none rounded-lg border border-gray-200 bg-white
            pl-4 pr-10 text-sm font-medium text-gray-700
            transition-all duration-200
            hover:border-gray-300
            focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
            cursor-pointer
          '
        >
          <option>{translations.filters.lastActivity}</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
        <ChevronDown className='pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500' />
      </div>
    </div>
  );
}
