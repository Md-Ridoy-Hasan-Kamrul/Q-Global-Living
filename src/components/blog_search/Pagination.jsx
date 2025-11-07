import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center p-4 gap-2 mt-14">
      {/* Previous */}
      <button
        className="flex w-10 h-10 items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/30 rounded-full transition-colors"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="material-symbols-outlined text-lg">chevron_left</span>
      </button>

      {/* Page Numbers */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={idx}
            className="text-sm font-normal leading-normal flex w-10 h-10 items-center justify-center rounded-full"
          >
            ...
          </span>
        ) : (
          <button
            key={idx}
            className={`flex w-10 h-10 items-center justify-center rounded-full transition-colors
              ${
                page === currentPage
                  ? "font-bold text-white dark:text-white bg-primary dark:bg-accent-gold"
                  : "font-normal text-black dark:text-primary hover:bg-primary/10 dark:hover:bg-primary/30"
              }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        className="flex w-10 h-10 items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/30 rounded-full transition-colors"
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        <span className="material-symbols-outlined text-lg">chevron_right</span>
      </button>
    </div>
  );
}
