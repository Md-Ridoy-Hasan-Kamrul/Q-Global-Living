'use client';

import {
  Check,
  Key,
  Package,
  Sparkles,
  GraduationCap,
  PawPrint,
  Lightbulb,
  Globe,
  Car,
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

export default function ConciergePage() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const packages = [
    {
      name: t('concierge.packages.essentials.name'),
      description: t('concierge.packages.essentials.description'),
      features: t('concierge.packages.essentials.features'),
      buttonText: t('concierge.packages.essentials.button'),
      isPremium: false,
    },
    {
      name: t('concierge.packages.premium.name'),
      description: t('concierge.packages.premium.description'),
      features: t('concierge.packages.premium.features'),
      buttonText: t('concierge.packages.premium.button'),
      isPremium: true,
    },
    {
      name: t('concierge.packages.bespoke.name'),
      description: t('concierge.packages.bespoke.description'),
      features: t('concierge.packages.bespoke.features'),
      buttonText: t('concierge.packages.bespoke.button'),
      isPremium: false,
    },
  ];

  const steps = t('concierge.howItWorks.steps').map((step, index) => ({
    number: (index + 1).toString(),
    title: step.title,
    description: step.description,
  }));

  const addOns = [
    { Icon: GraduationCap, label: t('concierge.addOns.schoolSearch') },
    { Icon: PawPrint, label: t('concierge.addOns.petRelocation') },
    { Icon: Lightbulb, label: t('concierge.addOns.utilitySetup') },
    { Icon: Globe, label: t('concierge.addOns.languageCourses') },
    { Icon: Car, label: t('concierge.addOns.carImport') },
  ];

  return (
    <main className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8'>
      {/* Hero Section */}
      <section className='w-full mb-6 md:mb-8' aria-labelledby='hero-title'>
        <div
          className='flex min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex-col gap-5 md:gap-6 bg-cover bg-center bg-no-repeat rounded-xl md:rounded-2xl items-center justify-center p-6 md:p-8 lg:p-10 text-center'
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.65) 0%, rgba(10, 25, 49, 0.85) 100%), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop")`,
          }}
          role='banner'
        >
          <div className='flex flex-col gap-4 md:gap-5 max-w-3xl w-full'>
            <h1
              id='hero-title'
              className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black leading-tight tracking-[-0.033em]'
            >
              {t('concierge.hero.title')}
            </h1>
            <p className='text-gray-200 text-[15px] sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto'>
              {t('concierge.hero.subtitle')}
            </p>
            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center mt-2'>
              <button
                className='w-full sm:w-auto bg-primary hover:bg-primary-dark text-charcoal font-semibold px-6 md:px-8 lg:px-10 py-3 md:py-3.5 rounded-lg transition-all duration-200 text-[15px] md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                aria-label='Book a consultation with our concierge team'
              >
                {t('concierge.hero.bookConsultation')}
              </button>
              <button
                className='w-full sm:w-auto bg-transparent border-2 border-primary hover:bg-primary/10 text-primary font-semibold px-6 md:px-8 lg:px-10 py-3 md:py-3.5 rounded-lg transition-all duration-200 text-[15px] md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                aria-label='Talk to a concierge specialist'
              >
                {t('concierge.hero.talkToConcierge')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Support Section */}
      <section
        className='py-12 md:py-16 lg:py-20 bg-cream/30 rounded-xl md:rounded-2xl mb-6 md:mb-8'
        aria-labelledby='support-title'
      >
        <div className='text-center mb-10 md:mb-14 px-4'>
          <h2
            id='support-title'
            className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-3 md:mb-4 leading-tight'
          >
            {t('concierge.support.title')}
          </h2>
          <p className='text-[15px] sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            {t('concierge.support.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 px-4 md:px-6'>
          {/* Property Matchmaking */}
          <article className='text-center'>
            <div
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] mx-auto mb-4 md:mb-6 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105'
              aria-hidden='true'
            >
              <Key
                className='w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-primary'
                strokeWidth={2}
              />
            </div>
            <h3 className='text-lg sm:text-xl md:text-[22px] font-bold text-charcoal mb-3 md:mb-4'>
              {t('concierge.support.propertyMatchmaking.title')}
            </h3>
            <p className='text-[15px] text-gray-600 leading-relaxed max-w-sm mx-auto'>
              {t('concierge.support.propertyMatchmaking.description')}
            </p>
          </article>

          {/* Relocation Planning */}
          <article className='text-center'>
            <div
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] mx-auto mb-4 md:mb-6 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105'
              aria-hidden='true'
            >
              <Package
                className='w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-primary'
                strokeWidth={2}
              />
            </div>
            <h3 className='text-lg sm:text-xl md:text-[22px] font-bold text-charcoal mb-3 md:mb-4'>
              {t('concierge.support.relocationPlanning.title')}
            </h3>
            <p className='text-[15px] text-gray-600 leading-relaxed max-w-sm mx-auto'>
              {t('concierge.support.relocationPlanning.description')}
            </p>
          </article>

          {/* Settling-In Services */}
          <article className='text-center'>
            <div
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] mx-auto mb-4 md:mb-6 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105'
              aria-hidden='true'
            >
              <Sparkles
                className='w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 text-primary'
                strokeWidth={2}
              />
            </div>
            <h3 className='text-lg sm:text-xl md:text-[22px] font-bold text-charcoal mb-3 md:mb-4'>
              {t('concierge.support.settlingServices.title')}
            </h3>
            <p className='text-[15px] text-gray-600 leading-relaxed max-w-sm mx-auto'>
              {t('concierge.support.settlingServices.description')}
            </p>
          </article>
        </div>
      </section>

      {/* Concierge Packages Section */}
      <section
        className='py-12 md:py-16 lg:py-20 bg-white rounded-xl md:rounded-2xl mb-6 md:mb-8'
        aria-labelledby='packages-title'
      >
        <div className='text-center mb-10 md:mb-14 px-4'>
          <h2
            id='packages-title'
            className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-3 md:mb-4 leading-tight'
          >
            {t('concierge.packages.title')}
          </h2>
          <p className='text-[15px] sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            {t('concierge.packages.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-6'>
          {packages.map((pkg, index) => (
            <article
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-200 hover:shadow-lg ${
                pkg.isPremium
                  ? 'bg-primary/5 border-2 border-primary shadow-xl scale-105 md:scale-110'
                  : 'bg-cream/20 border border-gray-200 hover:border-primary/30'
              }`}
            >
              {pkg.isPremium && (
                <div
                  className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 py-1.5 rounded-full shadow-md'
                  aria-label='Most popular package'
                >
                  <span className='text-xs font-bold text-charcoal uppercase tracking-wider'>
                    {t('concierge.packages.mostPopular')}
                  </span>
                </div>
              )}
              <h3 className='text-xl sm:text-2xl md:text-[24px] font-bold text-primary mb-3 md:mb-4'>
                {pkg.name}
              </h3>
              <p className='text-[15px] text-gray-600 mb-6 md:mb-7 min-h-[60px] md:min-h-[72px] leading-relaxed'>
                {pkg.description}
              </p>
              <ul className='space-y-3.5 mb-6 md:mb-8' role='list'>
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className='flex items-start gap-3 text-[15px] text-gray-700'
                  >
                    <Check
                      className='w-5 h-5 text-primary shrink-0 mt-0.5'
                      strokeWidth={2.5}
                      aria-hidden='true'
                    />
                    <span className='leading-relaxed'>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-[15px] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  pkg.isPremium
                    ? 'bg-primary hover:bg-primary-dark text-charcoal focus:ring-primary'
                    : 'bg-charcoal hover:bg-charcoal/90 text-white focus:ring-charcoal'
                }`}
                aria-label={`Choose ${pkg.name} package`}
              >
                {pkg.buttonText}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className='py-12 md:py-16 lg:py-20 bg-cream/30 rounded-xl md:rounded-2xl mb-6 md:mb-8'
        aria-labelledby='how-it-works-title'
      >
        <div className='text-center mb-10 md:mb-14 px-4'>
          <h2
            id='how-it-works-title'
            className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-3 md:mb-4 leading-tight'
          >
            {t('concierge.howItWorks.title')}
          </h2>
          <p className='text-[15px] sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            {t('concierge.howItWorks.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 px-4 md:px-6'>
          {steps.map((step, index) => (
            <article key={index} className='text-center'>
              <div
                className='w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 mx-auto mb-5 md:mb-6 bg-primary rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105'
                aria-hidden='true'
              >
                <span className='text-2xl sm:text-3xl md:text-[36px] font-bold text-charcoal'>
                  {step.number}
                </span>
              </div>
              <h3 className='text-lg sm:text-xl md:text-[22px] font-bold text-charcoal mb-3 md:mb-4'>
                {step.title}
              </h3>
              <p className='text-[15px] text-gray-600 leading-relaxed max-w-xs mx-auto'>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Concierge Add-Ons Section */}
      <section
        className='py-12 md:py-16 lg:py-20 bg-primary/90 rounded-xl md:rounded-2xl mb-6 md:mb-8'
        aria-labelledby='add-ons-title'
      >
        <div className='text-center mb-10 md:mb-12 px-4'>
          <h2
            id='add-ons-title'
            className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-3 md:mb-4 leading-tight'
          >
            {t('concierge.addOns.title')}
          </h2>
          <p className='text-[15px] sm:text-base text-charcoal/80 max-w-3xl mx-auto leading-relaxed'>
            {t('concierge.addOns.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 px-4 md:px-6'>
          {addOns.map((addOn, index) => {
            const IconComponent = addOn.Icon;
            return (
              <article key={index} className='text-center'>
                <div
                  className='w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 mx-auto mb-4 md:mb-5 bg-charcoal/10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-charcoal/20 hover:scale-105'
                  aria-hidden='true'
                >
                  <IconComponent
                    className='w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-charcoal'
                    strokeWidth={2}
                  />
                </div>
                <p className='text-sm sm:text-[15px] md:text-base font-semibold text-charcoal leading-snug px-2'>
                  {addOn.label}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Ready to Make Your Move Section */}
      <section
        className='py-12 md:py-16 lg:py-20 bg-white rounded-xl md:rounded-2xl mb-6 md:mb-8'
        aria-labelledby='contact-title'
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center px-4 md:px-6'>
          {/* Image */}
          <div className='order-2 lg:order-1'>
            <div className='relative h-80 sm:h-[400px] md:h-[480px] lg:h-[580px] rounded-2xl overflow-hidden shadow-xl'>
              <Image
                src='/placeholder-property.jpg'
                alt="Modern luxury home in Côte d'Ivoire with contemporary design"
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px'
                priority={false}
                loading='lazy'
              />
            </div>
          </div>

          {/* Form */}
          <div className='order-1 lg:order-2'>
            <h2
              id='contact-title'
              className='text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-4 md:mb-5 leading-tight'
            >
              {t('concierge.contact.title')}
            </h2>
            <p className='text-[15px] sm:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed'>
              {t('concierge.contact.subtitle')}
            </p>

            <form className='space-y-5' aria-label='Consultation booking form'>
              <div>
                <label
                  htmlFor='fullName'
                  className='block text-[14px] font-semibold text-charcoal mb-2'
                >
                  {t('concierge.contact.fullName')}
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[15px] transition-all duration-200'
                  required
                  aria-required='true'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-[14px] font-semibold text-charcoal mb-2'
                >
                  {t('concierge.contact.email')}
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[15px] transition-all duration-200'
                  required
                  aria-required='true'
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-[14px] font-semibold text-charcoal mb-2'
                >
                  {t('concierge.contact.phone')}
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[15px] transition-all duration-200'
                  required
                  aria-required='true'
                />
              </div>

              <div>
                <label
                  htmlFor='moveDate'
                  className='block text-[14px] font-semibold text-charcoal mb-2'
                >
                  {t('concierge.contact.preferredDate')}
                </label>
                <input
                  type='datetime-local'
                  id='moveDate'
                  name='moveDate'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[15px] transition-all duration-200'
                  required
                  aria-required='true'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-[14px] font-semibold text-charcoal mb-2'
                >
                  {t('concierge.contact.message')}
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-[15px] transition-all duration-200'
                  required
                  aria-required='true'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-primary hover:bg-primary-dark text-charcoal font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-[15px] mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                aria-label='Submit consultation booking form'
              >
                {t('concierge.contact.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
