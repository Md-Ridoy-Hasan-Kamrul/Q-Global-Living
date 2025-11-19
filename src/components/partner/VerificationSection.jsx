'use client';

import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

/**
 * Verification Badge Section
 * Explains the verified badge and its benefits
 */
export default function VerificationSection() {
  const router = useRouter();
  const pathname = usePathname();

  function handleLearn() {
    // pathname is like: /en/... -> first segment is the locale
    const segments = (pathname || '').split('/').filter(Boolean);
    const locale = segments[0] || 'en';
    router.push(`/${locale}/verification`);
  }
  return (
    <section className="max-w-7xl mx-auto lg:px-6 py-5 mb-6 lg:mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-center text-charcoal mb-4 lg:mb-10">
        A Mark of Trust and Quality
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-3.5 items-center">
        <div className="bg-white/50 rounded-xl p-6
         lg:p-12 border border-gray-200 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 lg:px-8 lg:py-4 border border-primary rounded-full">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
            </div>
            <span className="lg:text-lg text-sm font-bold text-charcoal">Verified by Q Global Living</span>
          </div>
        </div>

        <div>
          <p className="text-charcoal-600 leading-relaxed mb-6">
            Our &apos;Verified by Q Homes&apos; seal signifies that your project has undergone a rigorous vetting process, ensuring legal compliance, developer credibility, and project viability. This builds immediate trust with our global network of buyers and sets your properties apart.
          </p>
          <button onClick={handleLearn} className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-charcoal text-sm lg:text-base rounded-lg transition-all duration-200 font-semibold">
            Learn About Verification <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
