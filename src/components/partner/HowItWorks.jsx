'use client';

import React from 'react';

/**
 * How It Works Section
 * Displays the 3-step verification process
 */
export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description: "Fill out the partnership form with your company and project details."
    },
    {
      number: 2,
      title: "Document Review",
      description: "Our team will review your submitted documents for verification."
    },
    {
      number: 3,
      title: "Go Live",
      description: "Once verified, your project listings will be published on our platform."
    }
  ];

  return (
    <section className="bg-background-light py-5 lg:py-10 mb-6 lg:mb-8">
      <div className="max-w-7xl mx-auto lg:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-center text-charcoal mb-6 lg:mb-16">
          How to Get Verified in 3 Simple Steps
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-12">
          {steps.map((step, index) => (
            <article key={index} className="text-center">
              <div className="inline-flex items-center justify-center lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-primary text-charcoal text-xl lg:text-2xl font-bold lg:mb-6 mb-2.5 shadow-md">
                {step.number}
              </div>
              <h3 className="lg:text-xl font-bold text-charcoal mb-1.5 lg:mb-3">{step.title}</h3>
              <p className="text-charcoal-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
