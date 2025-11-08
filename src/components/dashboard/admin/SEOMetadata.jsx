'use client';

import { memo } from 'react';
import { RefreshCw } from 'lucide-react';

const SEOMetadata = memo(
  ({
    metaTitle,
    metaDescription,
    urlSlug,
    onMetaTitleChange,
    onMetaDescriptionChange,
    onUrlSlugChange,
    onRegenerateSlug,
    translations,
  }) => {
    return (
      <div className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-5'>
        <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
          {translations.seoMetadata}
        </h3>

        {/* Meta Title */}
        <div>
          <label
            htmlFor='metaTitle'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.metaTitle}
          </label>
          <input
            id='metaTitle'
            type='text'
            value={metaTitle}
            onChange={(e) => onMetaTitleChange(e.target.value)}
            placeholder={translations.metaTitlePlaceholder}
            className='w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 placeholder-gray-400'
          />
        </div>

        {/* Meta Description */}
        <div>
          <label
            htmlFor='metaDescription'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.metaDescription}
          </label>
          <textarea
            id='metaDescription'
            value={metaDescription}
            onChange={(e) => onMetaDescriptionChange(e.target.value)}
            placeholder={translations.metaDescriptionPlaceholder}
            rows={3}
            className='w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 placeholder-gray-400 resize-none'
          />
        </div>

        {/* URL Slug */}
        <div>
          <label
            htmlFor='urlSlug'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.urlSlug}
          </label>
          <div className='flex flex-col sm:flex-row gap-2'>
            <input
              id='urlSlug'
              type='text'
              value={urlSlug}
              onChange={(e) => onUrlSlugChange(e.target.value)}
              placeholder={translations.urlSlugPlaceholder}
              className='flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 placeholder-gray-400'
            />
            <button
              onClick={onRegenerateSlug}
              type='button'
              className='px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 text-sm sm:text-base font-medium whitespace-nowrap'
            >
              <RefreshCw size={14} className='sm:w-4 sm:h-4' />
              <span>{translations.regenerate}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

SEOMetadata.displayName = 'SEOMetadata';

export default SEOMetadata;
