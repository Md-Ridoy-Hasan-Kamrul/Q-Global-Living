'use client';

import { use, useMemo } from 'react';
import { useTranslation } from '@/i18n';
import {
  EventHero,
  EventAbout,
  EventLearning,
  EventSpeakers,
  EventRegistration,
} from '@/components/event';

export default function EventPage({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);

  // Translations
  const heroTranslations = useMemo(
    () => ({
      title: t('event.hero.title'),
      subtitle: t('event.hero.subtitle'),
      cta: t('event.hero.cta'),
    }),
    [t]
  );

  const countdownTranslations = useMemo(
    () => ({
      days: t('event.countdown.days'),
      hours: t('event.countdown.hours'),
      minutes: t('event.countdown.minutes'),
      seconds: t('event.countdown.seconds'),
    }),
    [t]
  );

  const aboutTranslations = useMemo(
    () => ({
      title: t('event.about.title'),
      description: t('event.about.description'),
      dateTimeLabel: t('event.about.dateTimeLabel'),
      dateTime: t('event.about.dateTime'),
      locationLabel: t('event.about.locationLabel'),
      location: t('event.about.location'),
    }),
    [t]
  );

  const learningTranslations = useMemo(
    () => ({
      title: t('event.learning.title'),
      point1: t('event.learning.point1'),
      point2: t('event.learning.point2'),
      point3: t('event.learning.point3'),
      point4: t('event.learning.point4'),
    }),
    [t]
  );

  const speakersTranslations = useMemo(
    () => ({
      title: t('event.speakers.title'),
      speaker1Name: t('event.speakers.speaker1Name'),
      speaker1Role: t('event.speakers.speaker1Role'),
      speaker2Name: t('event.speakers.speaker2Name'),
      speaker2Role: t('event.speakers.speaker2Role'),
    }),
    [t]
  );

  const registrationTranslations = useMemo(
    () => ({
      title: t('event.registration.title'),
      subtitle: t('event.registration.subtitle'),
      fullName: t('event.registration.fullName'),
      fullNamePlaceholder: t('event.registration.fullNamePlaceholder'),
      email: t('event.registration.email'),
      emailPlaceholder: t('event.registration.emailPlaceholder'),
      phone: t('event.registration.phone'),
      phonePlaceholder: t('event.registration.phonePlaceholder'),
      submit: t('event.registration.submit'),
      shareEvent: t('event.registration.shareEvent'),
    }),
    [t]
  );

  return (
    <div className='min-h-screen bg-background-light'>
      <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <div className='mb-8 sm:mb-12'>
          <EventHero
            translations={heroTranslations}
            countdownTranslations={countdownTranslations}
          />
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6'>
          {/* Left Column - Event Details */}
          <div className='lg:col-span-2 space-y-3 lg:space-y-6'>
            <EventAbout translations={aboutTranslations} />
            <EventLearning translations={learningTranslations} />
            <EventSpeakers translations={speakersTranslations} />
          </div>

          {/* Right Column - Registration Form (Sticky) */}
          <div className='lg:col-span-1'>
            <div className='lg:sticky lg:top-24'>
              <EventRegistration translations={registrationTranslations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
