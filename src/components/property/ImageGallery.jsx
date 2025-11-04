'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';

/**
 * ImageGallery Component
 * Displays a main image with thumbnail navigation
 * Features: Lazy loading, optimized re-renders, responsive design
 */
export default function ImageGallery({ images = [], alt = 'Property image' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize handlers to prevent unnecessary re-renders
  const handleThumbnailClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Memoize current image to avoid recalculation
  const currentImage = useMemo(
    () => images[activeIndex],
    [images, activeIndex]
  );

  if (!images || images.length === 0) {
    return (
      <div className='w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center'>
        <p className='text-gray-500'>No images available</p>
      </div>
    );
  }

  return (
    <div className='space-y-3'>
      {/* Main Image Display */}
      <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden group'>
        <Image
          src={currentImage}
          alt={`${alt} - ${activeIndex + 1}`}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
          priority={activeIndex === 0}
          quality={85}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              aria-label='Previous image'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              aria-label='Next image'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className='absolute bottom-4 right-4 bg-gray-900/75 text-white px-3 py-1.5 rounded-full text-sm font-medium'>
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3'>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                index === activeIndex
                  ? 'ring-2 ring-blue-600 ring-offset-2'
                  : 'hover:ring-2 hover:ring-gray-400 hover:ring-offset-2 opacity-70 hover:opacity-100'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className='object-cover'
                sizes='150px'
                quality={60}
              />
            </button>
          ))}

          {/* "More Images" Indicator */}
          {images.length > 6 && (
            <div className='hidden lg:flex relative h-24 rounded-lg bg-gray-900/80 items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors'>
              <span className='text-white font-medium text-sm'>
                +{images.length - 5} more
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
