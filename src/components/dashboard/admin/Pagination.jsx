'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Pagination Component
 * Reusable pagination with prev/next buttons and page numbers
 *
 * @param {Object} props
 * @param {number} props.currentPage - Current active page
 * @param {number} props.totalPages - Total number of pages
 * @param {number} props.totalItems - Total number of items
 * @param {number} props.itemsPerPage - Items displayed per page
 * @param {Function} props.onPageChange - Page change handler
 * @param {Object} props.translations - i18n translations
 */
export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 10,
  onPageChange,
  translations,
}) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages with ellipsis
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }

    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange?.(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange?.(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (typeof page === 'number') {
      onPageChange?.(page);
    }
  };

  return (
    <div className='flex flex-wrap items-center justify-between gap-4 px-6 py-4'>
      {/* Results Info */}
      <p className='text-sm text-gray-600'>
        {translations.pagination.showing}{' '}
        <span className='font-semibold text-gray-900'>
          {startItem}-{endItem}
        </span>{' '}
        {translations.pagination.of}{' '}
        <span className='font-semibold text-gray-900'>{totalItems}</span>
      </p>

      {/* Pagination Controls */}
      <div className='flex items-center gap-2'>
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`
            flex h-9 items-center gap-1 rounded-lg border px-3 text-sm font-medium
            transition-all duration-200
            ${
              currentPage === 1
                ? 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:scale-95'
            }
          `}
          aria-label='Previous page'
        >
          <ChevronLeft className='h-4 w-4' />
          <span className='hidden sm:inline'>
            {translations.pagination.previous}
          </span>
        </button>

        {/* Page Numbers */}
        <div className='flex items-center gap-1'>
          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className='flex h-9 w-9 items-center justify-center text-gray-400'
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`
                  flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${
                    currentPage === page
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-gray-700 hover:bg-gray-50 active:scale-95'
                  }
                `}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`
            flex h-9 items-center gap-1 rounded-lg border px-3 text-sm font-medium
            transition-all duration-200
            ${
              currentPage === totalPages
                ? 'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:scale-95'
            }
          `}
          aria-label='Next page'
        >
          <span className='hidden sm:inline'>
            {translations.pagination.next}
          </span>
          <ChevronRight className='h-4 w-4' />
        </button>
      </div>
    </div>
  );
}
