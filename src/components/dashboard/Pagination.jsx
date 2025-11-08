'use client';

import { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = memo(
  ({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
    translations,
  }) => {
    // Calculate range of items being displayed
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    // Generate page numbers with ellipsis logic
    const generatePageNumbers = () => {
      const pages = [];
      const maxVisiblePages = 5;

      if (totalPages <= maxVisiblePages) {
        // Show all pages if total is less than max
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);

        if (currentPage > 3) {
          pages.push('ellipsis-start');
        }

        // Show pages around current page
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }

        if (currentPage < totalPages - 2) {
          pages.push('ellipsis-end');
        }

        // Always show last page
        pages.push(totalPages);
      }

      return pages;
    };

    const pageNumbers = generatePageNumbers();

    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    const handlePageClick = (page) => {
      if (typeof page === 'number') {
        onPageChange(page);
      }
    };

    return (
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-3 bg-white border-t border-gray-200'>
        {/* Results Info */}
        <div className='text-sm text-gray-700 order-2 sm:order-1'>
          {translations.showing} {startItem} {translations.to} {endItem}{' '}
          {translations.of} {totalItems} {translations.results}
        </div>

        {/* Pagination Controls */}
        <div className='flex items-center gap-1 sm:gap-2 order-1 sm:order-2'>
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className='flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors'
            aria-label={translations.previous}
          >
            <ChevronLeft className='h-4 w-4' />
            <span className='hidden sm:inline'>{translations.previous}</span>
          </button>

          {/* Page Numbers */}
          <div className='flex items-center gap-1'>
            {pageNumbers.map((page, index) => {
              if (typeof page === 'string') {
                // Ellipsis - hide on mobile
                return (
                  <span
                    key={page}
                    className='hidden sm:inline-flex items-center justify-center px-2 py-1.5 text-sm text-gray-700'
                  >
                    ...
                  </span>
                );
              }

              // Hide middle pages on mobile, show only current, first, and last
              const isFirstOrLast = page === 1 || page === totalPages;
              const isCurrent = page === currentPage;
              const shouldShowOnMobile = isFirstOrLast || isCurrent;

              return (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`${
                    shouldShowOnMobile ? 'inline-flex' : 'hidden sm:inline-flex'
                  } items-center justify-center min-w-8 sm:min-w-9 h-8 sm:h-9 px-2 sm:px-3 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                    page === currentPage
                      ? 'bg-[#E6B325] text-[#0F1B2E] font-semibold'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={page === currentPage ? 'page' : undefined}
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
            className='flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors'
            aria-label={translations.next}
          >
            <span className='hidden sm:inline'>{translations.next}</span>
            <ChevronRight className='h-4 w-4' />
          </button>
        </div>
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';

export default Pagination;
