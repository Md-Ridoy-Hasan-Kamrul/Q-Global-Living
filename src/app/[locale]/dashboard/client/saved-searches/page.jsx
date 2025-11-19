"use client";

import React, { useState, useCallback, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

// ✅ Dynamic import for icons with ssr: false for client-side only rendering
const Eye = dynamic(() => import("lucide-react").then(m => ({ default: m.Eye })), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded animate-pulse" />,
  ssr: false
});
const Edit2 = dynamic(() => import("lucide-react").then(m => ({ default: m.Edit2 })), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded animate-pulse" />,
  ssr: false
});
const Trash2 = dynamic(() => import("lucide-react").then(m => ({ default: m.Trash2 })), {
  loading: () => <span className="inline-block w-5 h-5 bg-gray-200 rounded animate-pulse" />,
  ssr: false
});

//  Memoized SavedSearchItem component with comparison function
const SavedSearchItem = React.memo(
  function SavedSearchItem({ search, onToggle, onDelete }) {
    return (
      <article
        className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col gap-4 transition-all duration-150 hover:shadow-md lg:flex-row lg:items-center lg:justify-between"
        aria-labelledby={`search-title-${search.id}`}
      >
        {/* Search Details */}
        <div className="flex-1">
          <h3
            id={`search-title-${search.id}`}
            className="font-semibold text-gray-900 mb-1 text-lg"
          >
            {search.title}
          </h3>
          <p className="text-sm text-gray-600">
            <span className="block lg:inline">
              <strong>Location:</strong> {search.location}
            </span>
            <span className="hidden lg:inline"> &nbsp;|&nbsp; </span>
            <span className="block lg:inline">
              <strong>Type:</strong> {search.type}
            </span>
            {search.budget && (
              <>
                <span className="hidden lg:inline"> &nbsp;|&nbsp; </span>
                <span className="block lg:inline">
                  <strong>Budget:</strong> {search.budget}
                </span>
              </>
            )}
            {search.minBeds && (
              <>
                <span className="hidden lg:inline"> &nbsp;|&nbsp; </span>
                <span className="block lg:inline">{search.minBeds}</span>
              </>
            )}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 lg:ml-4">
          {/* Toggle */}
          <button
            onClick={() => onToggle(search.id)}
            aria-pressed={search.enabled}
            aria-label={search.enabled ? "Disable saved search" : "Enable saved search"}
            className={`relative inline-flex items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary ${search.enabled ? "bg-primary" : "bg-gray-300"
              } h-6 w-10 lg:h-7 lg:w-12`}
          >
            <span
              className={`inline-block transform rounded-full bg-white shadow transition-transform duration-150 ${search.enabled ? "translate-x-4 lg:translate-x-6" : "translate-x-1"
                } h-4 w-4 lg:h-5 lg:w-5`}
            />
          </button>

          {/* Icon buttons - dynamic imports handle loading */}
          <button
            title="View saved search"
            aria-label="View saved search"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-200"
          >
            <Eye size={20} aria-hidden="true" />
          </button>

          <button
            title="Edit saved search"
            aria-label="Edit saved search"
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-200"
          >
            <Edit2 size={20} aria-hidden="true" />
          </button>

          <button
            onClick={() => onDelete(search.id)}
            title="Delete saved search"
            aria-label="Delete saved search"
            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-200"
          >
            <Trash2 size={20} aria-hidden="true" />
          </button>
        </div>
      </article>
    );
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return (
      prevProps.search.id === nextProps.search.id &&
      prevProps.search.enabled === nextProps.search.enabled &&
      prevProps.onToggle === nextProps.onToggle &&
      prevProps.onDelete === nextProps.onDelete
    );
  }
);

export default function NotificationSettings() {
  //  Constant initial searches (defined outside component would be better for production)
  const INITIAL_SEARCHES = useMemo(() => [
    {
      id: 1,
      title: "3-bedroom Villa in Cocody",
      location: "Cocody",
      type: "Villa",
      budget: "XOF 50M-75M",
      enabled: true,
    },
    {
      id: 2,
      title: "Apartments in Marcory Zone 4",
      location: "Marcory",
      type: "Apartment",
      minBeds: "Min 2 bedrooms",
      enabled: true,
    },
    {
      id: 3,
      title: "Land for sale - Bassam",
      location: "Grand-Bassam",
      type: "Land",
      enabled: false,
    },
  ], []);

  const [searches, setSearches] = useState(INITIAL_SEARCHES);

  // Stable callbacks (no re-renders)
  const handleToggle = useCallback((id) => {
    setSearches((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setSearches((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const handleReset = useCallback(() => {
    setSearches(INITIAL_SEARCHES);
  }, [INITIAL_SEARCHES]);

  const handleSave = useCallback(() => {
    console.log("✅ Changes saved:", searches);
    // ✅ Optimize: Use a lightweight notification instead of alert()
    const event = new CustomEvent("notification", {
      detail: { message: "Changes saved successfully!", type: "success" }
    });
    window.dispatchEvent(event);
  }, [searches]);

  // ✅ Memoize search list for render efficiency
  const renderedSearches = useMemo(() => {
    return searches.map((search) => (
      <SavedSearchItem
        key={search.id}
        search={search}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    ));
  }, [searches, handleToggle, handleDelete]);
const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  return (
    <main
      className="min-h-screen bg-gray-50 space-y-6"
      role="main"
    >
      <header className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5078] rounded-lg p-6 shadow-sm mb-6 ">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {t("dashboard.client.SavedSearches.title")}
        </h1>
        <p className="text-sm sm:text-base text-white/80 ">
          {t("dashboard.client.SavedSearches.subtitle")}
        </p>
      </header>

      <section aria-label="My Saved Searches" className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          {t("dashboard.client.SavedSearches.yourSavedSearches")}
        </h2>

        {searches.length > 0 ? (
          <div className="space-y-4">{renderedSearches}</div>
        ) : (
          <p className="text-gray-600 italic text-center">
            {t("dashboard.client.SavedSearches.noSavedSearches")}
          </p>
        )}
      </section>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-10">
        <button
          onClick={handleReset}
          className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300"
        >
          {t("dashboard.client.SavedSearches.resetButton")}
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400"
        >
          {t("dashboard.client.SavedSearches.saveChanges")}
        </button>
      </div>
    </main>
  );
}
