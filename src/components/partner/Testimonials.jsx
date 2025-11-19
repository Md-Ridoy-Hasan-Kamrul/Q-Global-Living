/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import React from 'react';

/**
 * Testimonials Section
 * Displays partner testimonials
 */
export default function Testimonials() {
  return (
    <section className="bg-background-light pb-5 py-3">
      <div className="max-w-4xl mx-auto lg:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-center text-charcoal mb-6">
          What Our Partners Say
        </h2>

        <article className="bg-background-light rounded-xl p-8 border border-gray-200 shadow-lg">
          <div className="text-5xl text-primary mb-4">&ldquo;</div>
          <p className="lg:text-xl text-charcoal leading-relaxed mb-8">
            Partnering with Q Homes was a game-changer for our international sales strategy. Their platform connected us with serious buyers from Europe and North America, leading to a 30% increase in off-plan sales for our latest development in Abidjan.
          </p>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Jean-Luc Bamba"
              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <p className="font-bold text-charcoal">Jean-Luc Bamba (Sample)</p>
              <p className="text-sm text-charcoal-600">CEO, Bamba Construction Group</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
