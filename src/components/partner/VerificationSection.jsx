'use client';

import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

/**
 * Verification Badge Section
 * Explains the verified badge and its benefits
 */
export default function VerificationSection() {
  return (
    <section className="max-w-7xl mx-auto lg:px-6 py-5 lg:py-16">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-charcoal mb-4 lg:mb-16">
        A Mark of Trust and Quality
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="bg-background-light rounded-xl p-6
         lg:p-12 border border-gray-200 flex items-center justify-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 lg:px-8 lg:py-4 border-2 border-primary rounded-full">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
            </div>
            <span className="lg:text-xl text-sm font-bold text-charcoal">Verified by Q Homes</span>
          </div>
        </div>

        <div>
          <p className="text-charcoal-600 leading-relaxed mb-6">
            Our &apos;Verified by Q Homes&apos; seal signifies that your project has undergone a rigorous vetting process, ensuring legal compliance, developer credibility, and project viability. This builds immediate trust with our global network of buyers and sets your properties apart.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-charcoal text-sm lg:text-base rounded-lg transition-all duration-200 font-semibold">
            Learn About Verification <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
