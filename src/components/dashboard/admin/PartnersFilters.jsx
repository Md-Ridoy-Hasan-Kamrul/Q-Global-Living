'use client';

import { memo } from 'react';
import { Search, UserPlus } from 'lucide-react';

const PartnersFilters = memo(
  ({
    searchTerm,
    verificationFilter,
    paymentFilter,
    onSearchChange,
    onVerificationChange,
    onPaymentChange,
    translations,
  }) => {
    return (
      <div className='rounded-lg bg-white p-4 sm:p-6 shadow-sm'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
          {/* Search Input */}
          <div className='relative flex-1 max-w-md'>
            <Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder={translations.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className='w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20 transition-shadow'
            />
          </div>

          {/* Filters and Add Button */}
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3'>
            {/* Verification Filter */}
            <select
              value={verificationFilter}
              onChange={(e) => onVerificationChange(e.target.value)}
              className='rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20 bg-white transition-shadow'
            >
              <option value='all'>
                {translations.filters.allVerification}
              </option>
              <option value='verified'>
                {translations.verification.verified}
              </option>
              <option value='pending'>
                {translations.verification.pending}
              </option>
              <option value='rejected'>
                {translations.verification.rejected}
              </option>
            </select>

            {/* Payment Filter */}
            <select
              value={paymentFilter}
              onChange={(e) => onPaymentChange(e.target.value)}
              className='rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20 bg-white transition-shadow'
            >
              <option value='all'>{translations.filters.allPayment}</option>
              <option value='paid'>{translations.payment.paid}</option>
              <option value='unpaid'>{translations.payment.unpaid}</option>
              <option value='partial'>{translations.payment.partial}</option>
            </select>

            {/* Add Partner Button */}
            <button className='flex items-center justify-center gap-2 rounded-lg bg-[#E6B325] px-4 py-2 text-sm font-medium text-[#0F1B2E] hover:bg-[#d4a520] transition-colors whitespace-nowrap'>
              <UserPlus className='h-4 w-4' />
              {translations.addPartner}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

PartnersFilters.displayName = 'PartnersFilters';

export default PartnersFilters;
