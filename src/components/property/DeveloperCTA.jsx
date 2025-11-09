'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

/**
 * DeveloperCTA Component
 *
 * Call-to-action banner for developers to list their projects.
 * Features a background image with overlay and responsive layout.
 *
 * @param {Object} props - Component props
 * @param {Function} props.onListProject - Callback when button is clicked
 */
export default function DeveloperCTA({ onListProject }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const handleClick = () => {
    onListProject?.();
  };

  return (
    <section className='w-full my-3.5 sm:my-6 lg:my-16'>
      <div
        className='flex flex-col md:flex-row lg:min-h-[280px] gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-between p-8 md:p-12 text-center md:text-left'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 25, 49, 0.95) 0%, rgba(10, 25, 49, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDL0RbtXqwGZMxwaJkGseMSOhmCE0ahmf8rkU8thL1tHq6H2iNoNY4v-6GUo0fvkVtXuT0NCwRtn1Ms2ct5iK-6qbS0uwRG0GjvO_scd1RiFuS4j1L9WHaEOfIa4dSBjdQPC4cQqmnuYeg4wa5b3z3leoCwe2R6Rcy7MSPr5zG7_STPpdvAK-AxMQ2-y7pGRAAgC14Fg3tuO1Xbkmwc8wjJvyJZKqHU9Mp-jRmYF_agxe_qfMcjYtPjIq7z-tmsphfnpYHSNICjjGI")`,
        }}
        role='region'
        aria-label='Developer call to action'
      >
        {/* Content */}
        <div className='flex flex-col gap-2 max-w-2xl'>
          <h2 className='text-white  text-2xl sm:text-3xl font-black leading-tight tracking-[-0.033em] lg:text-4xl'>
            {t('newDevelopments.developerCta.title')}
          </h2>
          <p className='text-gray-200 text-sm sm:text-base font-normal leading-normal'>
            {t('newDevelopments.developerCta.subtitle')}
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleClick}
          className='flex min-w-40 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 lg:h-12 lg:px-5 bg-accent text-navy text-xs sm:text-sm lg:text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 whitespace-nowrap transition-opacity'
          aria-label={t('newDevelopments.developerCta.button')}
        >
          <span className='truncate'>
            {t('newDevelopments.developerCta.button')}
          </span>
        </button>
      </div>
    </section>
  );
}
