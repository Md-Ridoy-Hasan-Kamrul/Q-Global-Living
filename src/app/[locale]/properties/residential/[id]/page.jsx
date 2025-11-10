'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { MapPin, Download, Phone, CheckCircle, Shield, TrendingUp, Calendar, Building, Home, Waves, Dumbbell, TreePine, Smile, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { getResidentialPropertyById } from '@/lib/residentialProperties';
import { useLanguage } from '@/contexts/LanguageContext';

const PropertyDetailPage = () => {
  const params = useParams();
  const { locale } = useLanguage();
  const propertyId = params?.id;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fetch property data based on ID
  const propertyData = getResidentialPropertyById(propertyId);

  // Handle property not found
  if (!propertyData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffff7] dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">Property Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">The property you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href={`/${locale}/properties/residential`}
            className="text-[#C5A572] hover:text-[#C5A572]/80 font-medium"
          >
            ← Back to Residential Properties
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  dark:bg-gray-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div 
        className="relative sm:min-h-[480px]  bg-cover bg-center flex items-end justify-start rounded-xl overflow-hidden p-6 mb-8"
        style={{
          backgroundImage: `url('${propertyData.heroImage || propertyData.image}')`
        }}
      >
  <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60" />
        <div className='flex justify-start items-start'>
          <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-end items-start pb-12">
          <h1 className="text-5xl font-bold text-white mb-2">{propertyData.name}</h1>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <p className="text-lg">{propertyData.location}</p>
          </div>
        </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky rounded-xl top-0 z-40 mb-8 bg-background-light dark:bg-gray-800 border border-[#f6efcb] dark:border-gray-700 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex gap-4 xl:gap-8">
              <a href="#overview" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap">Overview</a>
              <a href="#units" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap">Unit Plans & Pricing</a>
              <a href="#amenities" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap">Amenities</a>
              <a href="#location" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap">Location</a>
              <a href="#developer" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap">Developer</a>
              <a href="#payment" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap">Payment Plans</a>
            </div>

            {/* Mobile Menu Button - Visible on mobile/tablet only */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <>
                  <Menu className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Action Buttons */}
            <div className="flex gap-2 sm:gap-3 ml-auto lg:ml-0">
              <button className="hidden sm:flex px-3 sm:px-4 py-2 bg-soft-grey dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                <span className="hidden md:inline">Download Brochure</span>
                <span className="md:hidden">Brochure</span>
              </button>
              <button className="px-4 sm:px-6 py-2 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition text-sm font-medium">
                Inquire
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-[#f6efcb] dark:border-gray-700 py-4 animate-fadeIn">
              <div className="flex flex-col space-y-3">
                <a 
                  href="#overview" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  Overview
                </a>
                <a 
                  href="#units" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  Unit Plans & Pricing
                </a>
                <a 
                  href="#amenities" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  Amenities
                </a>
                <a 
                  href="#location" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  Location
                </a>
                <a 
                  href="#developer" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  Developer
                </a>
                <a 
                  href="#payment" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  Payment Plans
                </a>
                <button className="sm:hidden mx-4 mt-2 px-4 py-2 bg-soft-grey dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition flex items-center justify-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  Download Brochure
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-[#C5A572]">Home</Link>
              <span>/</span>
              <Link href="/new-developments" className="hover:text-[#C5A572]">New Developments</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">{propertyData.name}</span>
            </div>

            {/* Title & Badges */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">{propertyData.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">by {propertyData.developer}</p>
              <div className="flex gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Verified by {propertyData.verifiedBy}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm font-medium">
                  <Building className="w-4 h-4" />
                  Escrow Eligible
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {propertyData.description}
              </p>
            </div>

            {/* Unit Plans & Pricing */}
            <div id="units">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Unit Plans & Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {propertyData.units.map((unit, index) => (
                  <div key={index} className="bg-background-light dark:bg-gray-800 rounded-xl overflow-hidden border border-[#f6efcb] dark:border-gray-700 shadow-sm">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                      <Image
                        src={unit.image}
                        alt={unit.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{unit.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{unit.size}</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">{unit.price}</p>
                      <button className="w-full py-2.5 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition">
                        View Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div id="amenities">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {propertyData.amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#C5A572]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#C5A572]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{amenity.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div id="location">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Location & Connectivity
              </h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Location Map"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 800px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Developer Profile */}
            <div id="developer">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Developer Profile
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#0A2540] flex items-center justify-center text-white font-bold text-xl">
                    Q
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{propertyData.developer}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      With over 15 years of experience in crafting premium residential properties, Q Homes Development is synonymous with quality, innovation, and trust. Our portfolio showcases a commitment to architectural excellence and creating communities that stand the test of time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Plans */}
            <div id="payment">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Payment Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We offer flexible payment plans to suit your financial needs. Our team is available to discuss financing options and guide you through the process.
              </p>
              <div className="space-y-4">
                {propertyData.paymentPlan.map((plan) => (
                  <div key={plan.step} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] flex items-center justify-center text-white font-bold shrink-0">
                      {plan.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{plan.title}: {plan.detail}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Development Overview */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Development Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Unit Types</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right">{propertyData.overview.unitTypes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Starting Price</span>
                    <span className="font-medium text-gray-900 dark:text-white">{propertyData.overview.startingPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Est. Completion</span>
                    <span className="font-medium text-gray-900 dark:text-white">{propertyData.overview.completion}</span>
                  </div>
                </div>
              </div>

              {/* Investment Highlights */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Investment Highlights</h3>
                <div className="space-y-4">
                  {propertyData.investmentHighlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#C5A572]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[#C5A572]" />
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{highlight.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition font-medium">
                  Inquire About This Development
                </button>
                <button className="w-full py-3 bg-soft-grey dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition font-medium">
                  Book a Site Visit
                </button>
                <button className="w-full py-3 bg-[#25D366]/10 text-[#25D366] rounded-lg hover:bg-[#25D366]/20 transition font-medium flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;