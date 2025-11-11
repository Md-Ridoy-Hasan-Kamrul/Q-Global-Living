"use client";

import { Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import ImageGallery from "@/components/property/ImageGallery";
import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyFeatures from "@/components/property/PropertyFeatures"; // (If used inside tabs component)
import ContactActions from "@/components/property/ContactActions";
import PropertyTabs from "@/components/property/PropertyTabs";
import RentalOverview from "@/components/property/RentalOverview";
import { getRentPropertyById } from "@/lib/rentProperties";

// Rent Details Page
// Mirrors the Buy details UI but uses rental-focused mock data & translation keys
export default function RentDetailsPage() {
  // Extract locale & id from the route using useParams hook
  const params = useParams();
  const locale = params?.locale || "en";
  const id = params?.id;
  const { t } = useTranslation(locale);

  // Get the selected property from shared dataset
  const base = getRentPropertyById(id);

  // If not found, render a simple fallback
  if (!base) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-700 dark:text-gray-300">
          <h1 className="text-2xl font-semibold mb-2">{t('rent.listings.noResults')}</h1>
          <Link href={`/${locale}/rent`} className="text-primary underline">{t('common.back')}</Link>
        </div>
      </main>
    );
  }

  // Build the details object using the selected card's data
  const mockProperty = {
    id: base.id,
    title: base.title,
    location: base.location,
    priceXOF: base.priceXOF,
    priceUSD: base.priceUSD,
    developer: t("rent.property.manager"),
    status: base.isVerified ? t("rent.property.status") : undefined,
    images: [
      base.image,
      // add a couple of safe fallbacks for the gallery
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    ],
    features: {
      bedrooms: base.bedrooms,
      bathrooms: base.bathrooms,
      area: 180,
      garages: 1,
    },
    description: t("rent.property.description"),
    highlights: [
      t("rent.property.highlights.security"),
      base.isFurnished ? t("rent.property.highlights.furnished") : t("rent.property.highlights.parking"),
      t("rent.property.highlights.internet"),
      t("rent.property.highlights.parking"),
    ],
    interiorFeatures: [
      t("rent.property.interior.ac"),
      t("rent.property.interior.kitchen"),
      t("rent.property.interior.wardrobes"),
      t("rent.property.interior.internet"),
    ],
    exteriorFeatures: [
      t("rent.property.exterior.gated"),
      t("rent.property.exterior.parking"),
      t("rent.property.exterior.security"),
      t("rent.property.exterior.entertainment"),
    ],
    locationDescription: t("rent.property.locationDesc"),
    managerDescription: t("rent.property.managerDesc", "Professionally managed for comfort and reliability."),
    rental: {
      duration: base.duration === 'short-term' ? t("rent.property.rental.duration", "Short-term") : t("rent.property.rental.duration", "Long-term"),
      furnishing: base.isFurnished ? t("rent.property.rental.furnishing", "Fully Furnished") : t("rent.propertyCard.unfurnished"),
      deposit: t("rent.property.rental.deposit", "2 Months Deposit"),
    },
  };

  return (
    <main className="min-h-screen bg-background-light dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Suspense
              fallback={<div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />}
            >
              <ImageGallery images={mockProperty.images} alt={mockProperty.title} />
            </Suspense>

            {/* Tabs (Overview / Features / Location / etc.) */}
            <section className="bg-white dark:bg-card-dark rounded-lg shadow-sm p-6">
              <PropertyTabs property={mockProperty} />
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-8 space-y-6">
              <div className="bg-background-light border border-[#f6efcb] dark:bg-card-dark rounded-lg shadow-sm p-6">
                <PropertyHeader
                  title={mockProperty.title}
                  location={mockProperty.location}
                  price={mockProperty.priceXOF}
                  priceUSD={mockProperty.priceUSD}
                  developer={mockProperty.developer}
                  status={mockProperty.status}
                />
                <div className="my-6 border-t border-gray-200 dark:border-gray-700" />
                <ContactActions
                  propertyId={mockProperty.id}
                  propertyTitle={mockProperty.title}
                />
              </div>

              {/* Rental Overview */}
              {mockProperty.rental && <RentalOverview rental={mockProperty.rental} />}
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <nav className="mt-8 mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <Link href={`/${locale}`} className="hover:text-gray-700 dark:hover:text-gray-200">
                {t("common.home")}
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <Link href={`/${locale}/rent`} className="hover:text-gray-700 dark:hover:text-gray-200">
                {t("common.rent")}
              </Link>
            </li>
            <li>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-gray-900 dark:text-gray-200 font-medium truncate max-w-xs">
              {mockProperty.title}
            </li>
          </ol>
        </nav>
      </div>
    </main>
  );
}
