'use client';

import { getTranslation } from '@/i18n';
import { Search, CheckCircle, Handshake } from 'lucide-react';

export default function HowItWorks({ locale }) {
  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const steps = [
    {
      icon: Search,
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Description'),
    },
    {
      icon: CheckCircle,
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Description'),
    },
    {
      icon: Handshake,
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Description'),
    },
  ];

  return (
    <section className='bg-soft-grey/50 dark:bg-charcoal/30 py-6 pb-10 lg:pt-10 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl'>
        {/* Header */}
        <div className='text-center mb-6 lg:mb-10'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight'>
            {t('howItWorks.title')}
          </h2>
          <p className='mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-charcoal/80 dark:text-soft-grey/80'>
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12'>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.title}
                className='flex flex-col items-center text-center group'
              >
                {/* Icon Circle */}
                <div className='relative'>
                  <div className='flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300'>
                    <IconComponent className='w-8 h-8 sm:w-10 sm:h-10' />
                  </div>
                  {/* Step Number Badge */}
                  <div className='absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-charcoal dark:bg-white text-white dark:text-charcoal text-sm font-bold shadow-md'>
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className='mt-6 text-lg sm:text-xl font-semibold text-charcoal dark:text-white'>
                  {step.title}
                </h3>
                <p className='mt-3 text-sm sm:text-base text-charcoal/70 dark:text-soft-grey/70 max-w-xs'>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
