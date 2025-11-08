'use client';

import { memo } from 'react';

const BlogContentEditor = memo(
  ({ title, content, onTitleChange, onContentChange, translations }) => {
    return (
      <div className='space-y-4 sm:space-y-6'>
        {/* Post Title Input */}
        <div>
          <label
            htmlFor='postTitle'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.postTitle}
          </label>
          <input
            id='postTitle'
            type='text'
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder={translations.postTitlePlaceholder}
            className='w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 placeholder-gray-400'
          />
        </div>

        {/* Article Content Editor */}
        <div>
          <label
            htmlFor='articleContent'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.articleContent}
          </label>
          <div className='relative'>
            <textarea
              id='articleContent'
              value={content}
              onChange={(e) => onContentChange(e.target.value)}
              placeholder={translations.editorPlaceholder}
              rows={16}
              className='w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 placeholder-gray-400 resize-none font-normal'
            />

            {/* Editor Toolbar Hint */}
            <div className='absolute bottom-3 right-3 hidden sm:flex gap-2 text-gray-400 text-xs'>
              <span className='px-2 py-1 bg-gray-50 rounded'>Bold</span>
              <span className='px-2 py-1 bg-gray-50 rounded'>Italic</span>
              <span className='px-2 py-1 bg-gray-50 rounded'>Link</span>
              <span className='px-2 py-1 bg-gray-50 rounded'>List</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

BlogContentEditor.displayName = 'BlogContentEditor';

export default BlogContentEditor;
