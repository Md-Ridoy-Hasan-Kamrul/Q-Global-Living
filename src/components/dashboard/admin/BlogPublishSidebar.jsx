'use client';

import { memo } from 'react';
import { ChevronDown, Upload } from 'lucide-react';

const BlogPublishSidebar = memo(
  ({
    status,
    author,
    category,
    tags,
    onStatusChange,
    onCategoryChange,
    onTagsChange,
    onSaveDraft,
    onCancel,
    translations,
  }) => {
    return (
      <div className='space-y-4 sm:space-y-6'>
        {/* Publish Controls */}
        <div className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4'>
          <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
            {translations.publishSidebar.publish}
          </h3>

          {/* Status Dropdown */}
          <div>
            <label
              htmlFor='status'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              {translations.publishSidebar.status}
            </label>
            <div className='relative'>
              <select
                id='status'
                value={status}
                onChange={(e) => onStatusChange(e.target.value)}
                className='w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 appearance-none cursor-pointer pr-10'
              >
                <option value='draft'>
                  {translations.publishSidebar.statusDraft}
                </option>
                <option value='published'>
                  {translations.publishSidebar.statusPublished}
                </option>
                <option value='scheduled'>
                  {translations.publishSidebar.statusScheduled}
                </option>
              </select>
              <ChevronDown
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'
                size={18}
              />
            </div>
          </div>

          {/* Author */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              {translations.publishSidebar.author}
            </label>
            <div className='px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm sm:text-base text-gray-900'>
              {author}
            </div>
          </div>

          {/* Publication Date */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              {translations.publishSidebar.publicationDate}
            </label>
            <div className='px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm sm:text-base text-gray-500'>
              {translations.publishSidebar.publicationDateAuto}
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2'>
            <button
              onClick={onSaveDraft}
              type='button'
              className='flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200'
            >
              {translations.saveDraft}
            </button>
            <button
              onClick={onCancel}
              type='button'
              className='flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200'
            >
              {translations.cancel}
            </button>
          </div>
        </div>

        {/* Organization */}
        <div className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4'>
          <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
            {translations.organization.title}
          </h3>

          {/* Categories */}
          <div>
            <label
              htmlFor='category'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              {translations.organization.categories}
            </label>
            <div className='relative'>
              <select
                id='category'
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className='w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 appearance-none cursor-pointer pr-10'
              >
                <option value=''>
                  {translations.organization.selectCategory}
                </option>
                <option value='real-estate-news'>
                  {translations.organization.realEstateNews}
                </option>
                <option value='buying-guide'>
                  {translations.organization.buyingGuide}
                </option>
                <option value='selling-tips'>
                  {translations.organization.sellingTips}
                </option>
                <option value='market-trends'>
                  {translations.organization.marketTrends}
                </option>
              </select>
              <ChevronDown
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'
                size={18}
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label
              htmlFor='tags'
              className='block text-sm font-medium text-gray-700 mb-2'
            >
              {translations.organization.tags}
            </label>
            <input
              id='tags'
              type='text'
              value={tags}
              onChange={(e) => onTagsChange(e.target.value)}
              placeholder={translations.organization.tagsPlaceholder}
              className='w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 placeholder-gray-400'
            />
          </div>
        </div>
      </div>
    );
  }
);

BlogPublishSidebar.displayName = 'BlogPublishSidebar';

export default BlogPublishSidebar;
