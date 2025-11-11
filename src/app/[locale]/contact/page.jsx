'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from '@/i18n';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFAQ from '@/components/contact/ContactFAQ';
import ContactCTA from '@/components/contact/ContactCTA';

export default function ContactPage() {
  // Get locale from URL params
  const params = useParams();
  const locale = params?.locale || 'en';

  // Initialize translations
  const { t } = useTranslation(locale);

  // Hero data
  const heroData = {
    title: t('contact.hero.title'),
    subtitle: t('contact.hero.subtitle'),
    whatsappButton: t('contact.hero.whatsappButton'),
    messageButton: t('contact.hero.messageButton'),
    whatsappNumber: '+2250123456789',
    whatsappMessage: t('contact.hero.whatsappMessage'),
  };

  // Form data
  const formData = {
    title: t('contact.form.title'),
    subtitle: t('contact.form.subtitle'),
    labels: {
      fullName: t('contact.form.fullName'),
      fullNamePlaceholder: t('contact.form.fullNamePlaceholder'),
      email: t('contact.form.email'),
      emailPlaceholder: t('contact.form.emailPlaceholder'),
      phone: t('contact.form.phone'),
      phonePlaceholder: t('contact.form.phonePlaceholder'),
      subject: t('contact.form.subject'),
      subjectPlaceholder: t('contact.form.subjectPlaceholder'),
      message: t('contact.form.message'),
      messagePlaceholder: t('contact.form.messagePlaceholder'),
    },
    privacyNote: t('contact.form.privacyNote'),
    submitButton: t('contact.form.submitButton'),
  };

  // Contact Info data
  const infoData = {
    title: t('contact.info.title'),
    subtitle: t('contact.info.subtitle'),
    contactDetails: [
      {
        icon: 'location_on',
        title: t('contact.info.officeTitle'),
        content: t('contact.info.officeAddress'),
      },
      {
        icon: 'call',
        title: t('contact.info.phoneTitle'),
        content: t('contact.info.phoneNumber'),
      },
      {
        icon: 'mail',
        title: t('contact.info.emailTitle'),
        content: t('contact.info.emailAddress'),
      },
      {
        icon: 'schedule',
        title: t('contact.info.hoursTitle'),
        content: t('contact.info.hoursContent'),
      },
    ],
    mapTitle: t('contact.info.mapTitle'),
  };

  // FAQ data
  const faqData = {
    title: t('contact.faq.title'),
    subtitle: t('contact.faq.subtitle'),
    faqs: [
      {
        question: t('contact.faq.q1'),
        answer: t('contact.faq.a1'),
      },
      {
        question: t('contact.faq.q2'),
        answer: t('contact.faq.a2'),
      },
      {
        question: t('contact.faq.q3'),
        answer: t('contact.faq.a3'),
      },
      {
        question: t('contact.faq.q4'),
        answer: t('contact.faq.a4'),
      },
    ],
  };

  // CTA data
  const ctaData = {
    title: t('contact.cta.title'),
    subtitle: t('contact.cta.subtitle'),
    primaryButton: t('contact.cta.primaryButton'),
    secondaryButton: t('contact.cta.secondaryButton'),
  };

  return (
    <main className='flex flex-col items-center bg-background-light dark:bg-navy-light'>
      {/* Main Content Container - Max Width */}
      <div className='w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <ContactHero {...heroData} />

        {/* Contact Form Section */}
        <ContactForm {...formData} />

        {/* Contact Info & Map Section */}
        <ContactInfo {...infoData} />

        {/* FAQ Section */}
        <ContactFAQ {...faqData} />

        {/* CTA Section */}
        <ContactCTA {...ctaData} />
      </div>
    </main>
  );
}
