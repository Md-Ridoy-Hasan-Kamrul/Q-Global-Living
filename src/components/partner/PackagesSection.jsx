'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

/**
 * Pricing Packages Section
 * Displays the different partnership packages available
 */
export default function PackagesSection({ onApplyClick }) {
  const packages = [
    {
      name: "Starter",
      price: "50,000 XOF",
      usdPrice: "$80 USD",
      description: "Ideal for single projects or new developers.",
      features: [
        "1 Project Listing",
        "Up to 10 photos",
        "Standard placement",
        "Verified by Q Homes Seal"
      ],
      buttonText: "Select Plan",
      buttonStyle: "bg-primary/20 text-charcoal hover:bg-primary/30",
      popular: false
    },
    {
      name: "Featured",
      price: "120,000 XOF",
      usdPrice: "$195 USD",
      description: "For developers looking for enhanced visibility.",
      features: [
        "Up to 3 Project Listings",
        "Up to 25 photos per listing",
        "Featured placement on search",
        "Social media mention",
        "Verified by Q Homes Seal"
      ],
      buttonText: "Select Plan",
      buttonStyle: "bg-[#D1B156] text-white hover:bg-[#C4A54D]",
      popular: true
    },
    {
      name: "Premium",
      price: "250,000 XOF",
      usdPrice: "$400 USD",
      description: "Maximum exposure for large-scale projects.",
      features: [
        "Unlimited Project Listings",
        "Video tours & 3D walkthroughs",
        "Top placement & homepage feature",
        "Dedicated newsletter feature",
        "Dedicated account manager"
      ],
      buttonText: "Select Plan",
      buttonStyle: "bg-primary/20 text-charcoal hover:bg-primary/30",
      popular: false
    }
  ];

  return (
    <section className="py-4 mb-6 lg:mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 lg:mb-8 px-4 lg:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-charcoal mb-2 lg:mb-4">
            Listing Packages
          </h2>
          <p className="text-base text-charcoal-600 max-w-2xl mx-auto">
            Choose the plan that fits your project&apos;s needs and unlocks access to our global network.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6 gap-3.5 md:px-6 lg:px-2 xl:px-6">
          {packages.map((pkg, index) => (
            <article
              key={index}
              className={`relative bg-white/50 rounded-lg transition-all duration-300 ${
                pkg.popular
                  ? 'border border-[#D1B156] shadow-md hover:shadow-lg md:scale-[1.02] md:hover:scale-[1.03]'
                  : 'border border-[#E5E7EB] hover:border-[#D1B156] hover:shadow-sm'
              }`}
            >
              {pkg.popular && (
                <div
                  className="absolute z-10 -top-2.5 left-1/2 transform -translate-x-1/2"
                  aria-label="Most popular package"
                >
                  <div className="relative">
                    <div className="bg-[#D1B156] px-3 sm:px-4 py-1 rounded-full shadow-sm">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#D1B156] rotate-45"></div>
                  </div>
                </div>
              )}
              <div className="p-6 sm:p-7 md:p-8 flex flex-col h-full">
                <div className="grow">
                  <h3 className="text-lg xl:text-xl font-bold text-charcoal mb-3">
                    {pkg.name}
                  </h3>
                  <div className="mb-4">
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-charcoal whitespace-nowrap">
                      {pkg.price}
                      <span className="text-xs lg:text-sm font-normal text-charcoal-600"> /{pkg.usdPrice}</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-charcoal-600 mb-3 xl:mb-6 min-h-[60px]">
                    {pkg.description}
                  </p>
                    <ul className="space-y-2 xl:space-y-3.5 mb-8" role="list">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-charcoal-600"
                      >
                        <CheckCircle
                          className="w-4 h-4 text-[#D1B156] shrink-0 mt-1"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <span className="text-sm md:text-base leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                </div>
                <div className="mt-auto pt-4">
                  <button
                    onClick={onApplyClick}
                    className={`w-full text-center text-sm md:text-base font-medium px-5 py-2.5 md:py-3 rounded-lg transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-[#D1B156] text-white hover:bg-[#C4A54D] shadow-sm'
                        : 'bg-primary/20 text-charcoal hover:bg-primary/30'
                    }`}
                    aria-label={`Choose ${pkg.name} package`}
                  >
                    {pkg.buttonText}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
