'use client';

import React from 'react';
import {
  HeroSection,
  WhyPartnerSection,
  PackagesSection,
  VerificationSection,
  Testimonials
} from '@/components/partner';

/**
 * Partner Landing Page
 * Main page for developer partnerships and property listing packages
 */
export default function PartnerLandingPage() {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <HeroSection onApplyClick={scrollToApply} />
      <WhyPartnerSection />
      <PackagesSection onApplyClick={scrollToApply} />
      <VerificationSection />
      {/* <HowItWorks />
      <ApplicationForm /> */}
      <Testimonials />
    </main>
  );
}
