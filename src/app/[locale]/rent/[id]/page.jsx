"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import ImageGallery from "@/components/property/ImageGallery";
import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyFeatures from "@/components/property/PropertyFeatures"; // (If used inside tabs component)
import ContactActions from "@/components/property/ContactActions";
import PropertyTabs from "@/components/property/PropertyTabs";
import RentalOverview from "@/components/property/RentalOverview";

// Rent Details Page
// Mirrors the Buy details UI but uses rental-focused mock data & translation keys
export default function RentDetailsPage({ params }) {
  // Extract locale & id from the route
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en"; // or params.locale if Layout passes
  const { id } = params || {}; // dynamic rental property id
  const { t } = useTranslation(locale);

  // Rental mock property (replace with API data later)
  const mockProperty = {
    id: id || "rent-001",
    title: t("rent.property.title"),
    location: t("rent.property.location"),
    priceXOF: 1500000,
    priceUSD: 2500,
  developer: t("rent.property.manager"),
    status: t("rent.property.status"),
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
    ],
    features: {
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      garages: 1,
    },
    description: t("rent.property.description"),
    highlights: [
      t("rent.property.highlights.security"),
      t("rent.property.highlights.furnished"),
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
      duration: t("rent.property.rental.duration", "Short-term / Long-term"),
      furnishing: t("rent.property.rental.furnishing", "Fully Furnished"),
      deposit: t("rent.property.rental.deposit", "2 Months Deposit"),
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900">
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
              <div className="bg-white dark:bg-card-dark rounded-lg shadow-sm p-6">
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
