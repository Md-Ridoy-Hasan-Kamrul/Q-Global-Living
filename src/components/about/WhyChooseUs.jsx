'use client';

import { memo } from 'react';

/**
 * FeatureCard Component - Pixel-perfect design
 */
const FeatureCard = memo(({ icon, title, description }) => {
  return (
    <article className='flex flex-col items-center p-4 text-center sm:p-6'>
      {/* Icon Container - Gold accent background */}
      <div
        className='mb-3 flex size-12 items-center justify-center rounded-full bg-[#D4AF37]/20 sm:mb-4 sm:size-14'
        aria-hidden='true'
      >
        <span className='material-symbols-outlined text-[28px] text-[#D4AF37] sm:text-[32px]'>
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className='mb-2 text-[15px] font-bold leading-tight text-[#0A2240] dark:text-white sm:text-base md:text-lg'>
        {title}
      </h3>

      {/* Description */}
      <p className='text-[13px] font-normal leading-relaxed text-[#111418] dark:text-[#f0f2f4]/90 sm:text-sm'>
        {description}
      </p>
    </article>
  );
});

FeatureCard.displayName = 'FeatureCard';

/**
 * WhyChooseUs Component - Pixel-perfect design
 */
const WhyChooseUs = memo(({ title, subtitle, features }) => {
  return (
    <section
      className='w-full py-8 sm:py-12 md:py-16'
      aria-labelledby='why-choose-title'
    >
      {/* Section Header */}
      <div className='mb-8 text-center sm:mb-10'>
        <h2
          id='why-choose-title'
          className='font-heading text-[24px] font-bold text-[#0A2240] dark:text-white sm:text-[28px] md:text-[32px] lg:text-[36px]'
        >
          {title}
        </h2>
        <p className='mx-auto mt-3 max-w-2xl text-[14px] font-normal text-[#111418] dark:text-[#f0f2f4]/90 sm:mt-4 sm:text-[15px] md:text-base'>
          {subtitle}
        </p>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4'>
        {features.map((feature, index) => (
          <FeatureCard
            key={`feature-${index}`}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';

export default WhyChooseUs;
