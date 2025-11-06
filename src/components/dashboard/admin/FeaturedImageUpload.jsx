'use client';

import { memo, useState, useCallback } from 'react';
import Image from 'next/image';
import { Upload, X } from 'lucide-react';

const FeaturedImageUpload = memo(
  ({
    imageUrl,
    altText,
    onImageChange,
    onAltTextChange,
    onRemoveImage,
    translations,
  }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = useCallback((e) => {
      e.preventDefault();
      setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
      e.preventDefault();
      setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
      (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            onImageChange(event.target.result);
          };
          reader.readAsDataURL(file);
        }
      },
      [onImageChange]
    );

    const handleFileInput = useCallback(
      (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            onImageChange(event.target.result);
          };
          reader.readAsDataURL(file);
        }
      },
      [onImageChange]
    );

    return (
      <div className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6 space-y-4'>
        <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
          {translations.featuredImage.title}
        </h3>

        {/* Upload Area */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-lg p-6 sm:p-8 text-center transition-all duration-200 ${
            isDragging
              ? 'border-[#d4af37] bg-[#d4af37]/5'
              : 'border-gray-300 bg-gray-50 hover:border-gray-400'
          }`}
        >
          {imageUrl ? (
            <div className='relative h-40 sm:h-48'>
              <Image
                src={imageUrl}
                alt={altText || 'Featured image preview'}
                fill
                className='object-cover rounded-lg'
              />
              <button
                onClick={onRemoveImage}
                type='button'
                className='absolute top-2 right-2 p-1.5 sm:p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200 z-10'
                aria-label='Remove image'
              >
                <X size={14} className='sm:w-4 sm:h-4' />
              </button>
            </div>
          ) : (
            <>
              <input
                type='file'
                accept='image/*'
                onChange={handleFileInput}
                className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                id='featuredImage'
                aria-label='Upload featured image'
              />
              <Upload className='mx-auto mb-3 text-gray-400' size={32} />
              <p className='text-sm sm:text-base text-gray-700 font-medium mb-1'>
                {translations.featuredImage.uploadText}
              </p>
              <p className='text-xs sm:text-sm text-gray-500'>
                {translations.featuredImage.supportedFormats}
              </p>
            </>
          )}
        </div>

        {/* Alt Text - Always visible */}
        <div>
          <label
            htmlFor='altText'
            className='block text-sm font-medium text-gray-700 mb-2'
          >
            {translations.featuredImage.altText}
          </label>
          <input
            id='altText'
            type='text'
            value={altText}
            onChange={(e) => onAltTextChange(e.target.value)}
            placeholder={translations.featuredImage.altTextPlaceholder}
            className='w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition-all duration-200 text-sm sm:text-base text-gray-900 placeholder-gray-400'
          />
        </div>
      </div>
    );
  }
);

FeaturedImageUpload.displayName = 'FeaturedImageUpload';

export default FeaturedImageUpload;
