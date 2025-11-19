'use client';

import Link from 'next/link';
import React from 'react';

/**
 * Partner Hero Section
 * Main hero banner for the partner/sell page
 */
export default function HeroSection({ onApplyClick }) {
  return (
    <section className="w-full mb-6 lg:mb-8" aria-labelledby="hero-title">
      <div 
        className="flex min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex-col gap-5 md:gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-2xl items-center justify-center p-6 md:p-8 lg:p-10 text-center"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 25, 49, 0.65) 0%, rgba(10, 25, 49, 0.85) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80')"
        }}
        role="banner"
      >
        <div className="flex flex-col gap-4 md:gap-5 max-w-3xl w-full">
          <h1 
            id="hero-title" 
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black leading-tight tracking-[-0.033em]"
          >
            Partner With Q Homes
          </h1>
          <p className="text-gray-200 text-[15px] sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            Showcase your verified projects to our exclusive network of global buyers and investors seeking opportunities in Côte d&apos;Ivoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center mt-2">
            <Link 
            href={'/verification'}
              onClick={onApplyClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-charcoal font-semibold px-6 md:px-8 lg:px-10 py-3 md:py-3.5 rounded-lg transition-all duration-200 text-[15px] md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Apply to partner with Q Homes"
            >
              Apply to Partner
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
