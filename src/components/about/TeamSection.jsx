'use client';

import Image from 'next/image';
import { memo } from 'react';

/**
 * TeamMemberCard Component - Pixel-perfect design
 */
const TeamMemberCard = memo(({ image, name, role, bio, alt }) => {
  return (
    <article className='group text-center'>
      {/* Team Member Photo - Responsive size */}
      <div className='relative mx-auto mb-3 size-32 overflow-hidden rounded-full border-4 border-[#D4AF37]/50 transition-colors duration-300 group-hover:border-[#D4AF37] sm:mb-4 sm:size-40 md:size-48'>
        <Image
          src={image}
          alt={alt || `Professional headshot of ${name}`}
          fill
          sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, 192px'
          quality={90}
          className='object-cover'
        />
      </div>

      {/* Team Member Info */}
      <div className='mt-3 sm:mt-4'>
        <h3 className='text-[16px] font-bold text-[#0A2240] dark:text-white sm:text-lg md:text-xl'>
          {name}
        </h3>
        <p className='mt-1 text-[13px] font-medium text-[#D4AF37] sm:text-sm md:text-base'>
          {role}
        </p>
        <p className='mt-2 text-[13px] leading-relaxed text-[#111418] dark:text-[#f0f2f4]/90 sm:text-sm'>
          {bio}
        </p>
      </div>
    </article>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

/**
 * TeamSection Component - Pixel-perfect design
 */
const TeamSection = memo(({ title, subtitle, team }) => {
  return (
    <section
      className='w-full py-8 sm:py-12 md:py-16'
      aria-labelledby='team-section-title'
    >
      {/* Section Header */}
      <div className='mb-8 text-center sm:mb-10'>
        <h2
          id='team-section-title'
          className='font-heading text-[24px] font-bold text-[#0A2240] dark:text-white sm:text-[28px] md:text-[32px] lg:text-[36px]'
        >
          {title}
        </h2>
        <p className='mx-auto mt-3 max-w-2xl text-[14px] font-normal text-[#111418] dark:text-[#f0f2f4]/90 sm:mt-4 sm:text-[15px] md:text-base'>
          {subtitle}
        </p>
      </div>

      {/* Team Grid */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'>
        {team.map((member, index) => (
          <TeamMemberCard
            key={`team-member-${index}`}
            image={member.image}
            name={member.name}
            role={member.role}
            bio={member.bio}
            alt={member.alt}
          />
        ))}
      </div>
    </section>
  );
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;
