"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  MapPin,
  Download,
  Phone,
  CheckCircle,
  Shield,
  TrendingUp,
  Calendar,
  Building,
  Home,
  Waves,
  Dumbbell,
  TreePine,
  Smile,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { getResidentialPropertyById } from "@/lib/residentialProperties";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/i18n";

const PropertyDetailPage = () => {
  const params = useParams();
  const { locale } = useLanguage();
  const propertyId = params?.id;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get translations
  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split(".");
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  // Fetch property data based on ID
  const propertyData = getResidentialPropertyById(propertyId);

  // Handle property not found
  if (!propertyData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffff7] dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">
            {t("residentialDetails.notFound.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {t("residentialDetails.notFound.description")}
          </p>
          <Link
            href={`/${locale}/properties/residential`}
            className="text-[#C5A572] hover:text-[#C5A572]/80 font-medium"
          >
            {t("residentialDetails.notFound.backLink")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  dark:bg-gray-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div
        className="relative min-h-[200px] sm:min-h-[480px]  bg-cover bg-center flex items-end justify-start rounded-xl overflow-hidden p-6 mb-8"
        style={{
          backgroundImage: `url('${
            propertyData.heroImage || propertyData.image
          }')`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60" />
        <div className=" justify-start items-start w-full">
          <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col items-start sm:pb-12">
            <h1 className="text-2xl lg:text-4xl font-bold text-white mb-2 text-center sm:text-left">
              {propertyData.name}
            </h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="sm:w-5 sm:h-5 h-3 w-3" />
              <p className="text-sm sm:text-base">{propertyData.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky rounded-xl top-0 z-40 mb-8 bg-background-light dark:bg-gray-800 border border-[#f6efcb] dark:border-gray-700 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-1.5 lg:py-4">
            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden lg:flex gap-4 xl:gap-8">
              <a
                href="#overview"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap"
              >
                {t("residentialDetails.navigation.overview")}
              </a>
              <a
                href="#units"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap"
              >
                {t("residentialDetails.navigation.units")}
              </a>
              <a
                href="#amenities"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap"
              >
                {t("residentialDetails.navigation.amenities")}
              </a>
              <a
                href="#location"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap"
              >
                {t("residentialDetails.navigation.location")}
              </a>
              <a
                href="#developer"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap"
              >
                {t("residentialDetails.navigation.developer")}
              </a>
              <a
                href="#payment"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition whitespace-nowrap"
              >
                {t("residentialDetails.navigation.payment")}
              </a>
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
                <span className="hidden md:inline">{t("residentialDetails.buttons.downloadBrochure")}</span>
                <span className="md:hidden">{t("residentialDetails.buttons.brochure")}</span>
              </button>
              <button className="px-4 sm:px-6 py-2 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition text-sm font-medium">
                {t("residentialDetails.buttons.inquire")}
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
                  {t("residentialDetails.navigation.overview")}
                </a>
                <a
                  href="#units"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  {t("residentialDetails.navigation.units")}
                </a>
                <a
                  href="#amenities"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  {t("residentialDetails.navigation.amenities")}
                </a>
                <a
                  href="#location"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  {t("residentialDetails.navigation.location")}
                </a>
                <a
                  href="#developer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  {t("residentialDetails.navigation.developer")}
                </a>
                <a
                  href="#payment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] hover:bg-[#f6efcb] dark:hover:bg-gray-700 rounded-lg transition"
                >
                  {t("residentialDetails.navigation.payment")}
                </a>
                <button className="sm:hidden mx-4 mt-2 px-4 py-2 bg-soft-grey dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition flex items-center justify-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  {t("residentialDetails.buttons.downloadBrochure")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-3.5">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 lg:space-y-6 space-y-3.5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-[#C5A572]">
                {t("residentialDetails.breadcrumb.home")}
              </Link>
              <span>/</span>
              <Link href="/new-developments" className="hover:text-[#C5A572]">
                {t("residentialDetails.breadcrumb.newDevelopments")}
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">
                {propertyData.name}
              </span>
            </div>

            {/* Title & Badges */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {propertyData.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("residentialDetails.badges.by")} {propertyData.developer}
              </p>
              <div className="flex gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  {t("residentialDetails.badges.verifiedBy")} {propertyData.verifiedBy}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm font-medium">
                  <Building className="w-4 h-4" />
                  {t("residentialDetails.badges.escrowEligible")}
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
                {t("residentialDetails.sections.unitPlans")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {propertyData.units.map((unit, index) => (
                  <div
                    key={index}
                    className="bg-white/50 dark:bg-gray-800 rounded-xl overflow-hidden border border-[#f6efcb] dark:border-gray-700 shadow-sm"
                  >
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
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {unit.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {unit.size}
                      </p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        {unit.price}
                      </p>
                      <button className="w-full py-2.5 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition">
                        {t("residentialDetails.buttons.viewPlan")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div id="amenities">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                {t("residentialDetails.sections.amenities")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {propertyData.amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#C5A572]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#C5A572]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {amenity.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div id="location">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                {t("residentialDetails.sections.locationConnectivity")}
              </h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt={t("residentialDetails.locationMap")}
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
                {t("residentialDetails.sections.developerProfile")}
              </h3>
              <div className="bg-white/50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#0A2540] flex items-center justify-center text-white font-bold text-xl">
                    Q
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {propertyData.developer}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {t("residentialDetails.developer.defaultDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Plans */}
            <div id="payment">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                {t("residentialDetails.sections.paymentPlans")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {t("residentialDetails.payment.description")}
              </p>
              <div className="space-y-4">
                {propertyData.paymentPlan.map((plan) => (
                  <div
                    key={plan.step}
                    className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] flex items-center justify-center text-white font-bold shrink-0">
                      {plan.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {plan.title}: {plan.detail}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 lg:space-y-6 space-y-3.5">
              {/* Development Overview */}
              <div className="bg-white/50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("residentialDetails.sidebar.developmentOverview")}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("residentialDetails.sidebar.unitTypes")}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white text-right">
                      {propertyData.overview.unitTypes}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("residentialDetails.sidebar.startingPrice")}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {propertyData.overview.startingPrice}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("residentialDetails.sidebar.estCompletion")}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {propertyData.overview.completion}
                    </span>
                  </div>
                </div>
              </div>

              {/* Investment Highlights */}
              <div className="bg-white/50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t("residentialDetails.sidebar.investmentHighlights")}
                </h3>
                <div className="space-y-4">
                  {propertyData.investmentHighlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#C5A572]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[#C5A572]" />
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {highlight.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition font-medium">
                  {t("residentialDetails.buttons.inquireAbout")}
                </button>
                <button className="w-full py-3 bg-white/50 border border-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition font-medium">
                  {t("residentialDetails.buttons.bookSiteVisit")}
                </button>
                <button className="w-full py-3 bg-[#25D366]/10 text-[#25D366] rounded-lg hover:bg-[#25D366]/20 transition font-medium flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  {t("residentialDetails.buttons.whatsapp")}
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
