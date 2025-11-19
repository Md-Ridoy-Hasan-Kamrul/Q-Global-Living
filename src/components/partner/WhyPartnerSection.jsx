'use client';

import React from 'react';
import { Globe, Shield, Headphones } from 'lucide-react';

/**
 * Why Partner Section
 * Displays the key benefits of partnering with Q Homes
 */
export default function WhyPartnerSection() {
  const benefits = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with a curated audience of international buyers actively seeking opportunities in Côte d'Ivoire."
    },
    {
      icon: Shield,
      title: "Verified Trust",
      description: "Gain instant credibility with the 'Verified by Q Homes' seal, a mark of quality and reliability."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Receive personalized assistance from our team to ensure your listings get the visibility they deserve."
    }
  ];

  return (
    <section className="py-4 bg-background-light rounded-xl md:rounded-2xl mb-6 lg:mb-8">
      <div className="text-center mb-5 lg:mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-2 lg:mb-4 leading-tight">
          Why Partner With Q Homes?
        </h2>
        <p className="text-[15px] sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Access our exclusive network of global buyers and investors seeking premium opportunities in Côte d&apos;Ivoire.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 md:px-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <article key={index} className="text-center p-6 bg-white/50 border border-[#f6efcb] rounded-lg">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center" aria-hidden="true">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl md:text-[20px] font-bold text-charcoal mb-2 md:mb-3">
                {benefit.title}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm mx-auto">
                {benefit.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
