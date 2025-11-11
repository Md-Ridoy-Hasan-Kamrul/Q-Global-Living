'use client';

import { getTranslation } from '@/i18n';
import { Shield, Lock, Globe, Headset } from 'lucide-react';

export default function TrustBadges({ locale }) {
  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const badges = [
    {
      icon: Shield,
      label: t('trustBadges.verifiedListings'),
      color: 'text-primary',
    },
    {
      icon: Lock,
      label: t('trustBadges.escrowProtection'),
      color: 'text-primary',
    },
    {
      icon: Globe,
      label: t('trustBadges.multilingualSupport'),
      color: 'text-primary',
    },
    {
      icon: Headset,
      label: t('trustBadges.conciergeService'),
      color: 'text-primary',
    },
  ];

  return (
    <section className='bg-primary/5 dark:bg-primary/10 lg:pb-6 -pt-20 sm:-mt-16 sm:pt-14 px-4 sm:px-6'>
      <div className='mx-auto max-w-6xl lg:pt-10 py-3 '>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 '>
          {badges.map((badge) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={badge.label}
                className='flex flex-col items-center gap-3 sm:gap-4 text-center p-4 rounded-lg transition-all  dark:hover:bg-charcoal/50'
              >
                <div className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10'>
                  <IconComponent
                    className={`w-6 h-6 sm:w-7 sm:h-7 ${badge.color}`}
                  />
                </div>
                <p className='text-xs sm:text-sm font-semibold text-charcoal dark:text-soft-grey leading-snug'>
                  {badge.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
