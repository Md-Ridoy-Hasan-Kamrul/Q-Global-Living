import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function WelcomeHomes() {
  const [isVisible, setIsVisible] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);

  const acceptAll = () => {
    localStorage.setItem(
      "qhomes_cookie_consent",
      JSON.stringify({ status: "accepted", timestamp: Date.now() })
    );
    setIsVisible(false);
  };

  const openPreferences = () => {
    setShowPreferences(true);
    setIsVisible(false);
  };

  const closePreferences = () => setShowPreferences(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold text-center">Welcome to Q Homes</h1>
        <p className="text-center mt-4">
          Your premier real estate partner in Côte d’Ivoire.
        </p>
        <div className="mt-8 max-w-4xl mx-auto space-y-4">
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Website Content Area</span>
          </div>
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Website Content Area</span>
          </div>
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Website Content Area</span>
          </div>
        </div>
      </main>

      {/* Cookie Banner */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
          <div className="max-w-7xl mx-auto @container lg:px-14 md:px-12 sm:px-10 px-8">
            <div className="flex flex-col items-start justify-between gap-4 rounded-lg bg-[#001f3f] p-5 shadow-2xl @[640px]:flex-row @[640px]:items-center">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold leading-tight text-[#f8f7f5] flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-xl"
                    data-icon="cookie"
                  >
                    cookie
                  </span>
                  <span>Our Use of Cookies</span>
                </p>
                <p className="text-base font-normal leading-normal text-gray-300">
                  We use cookies to enhance your browsing experience,
                  personalize content, and analyze our traffic. By clicking
                  “Accept All”, you consent to our use of cookies.{" "}
                  <Link
                    href="#"
                    className="underline text-white hover:text-primary"
                  >
                    Cookie Policy
                  </Link>
                </p>
              </div>
              <div className="flex w-full flex-col items-center gap-3 @[640px]:w-auto @[640px]:flex-row">
                <button
                  onClick={acceptAll}
                  className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#001f3f] text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 @[640px]:w-auto"
                >
                  <span className="truncate">Accept All</span>
                </button>
                <button
                  onClick={openPreferences}
                  className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-primary border border-primary text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/20 @[640px]:w-auto"
                >
                  <span className="truncate">Manage Preferences</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closePreferences}
            aria-hidden
          ></div>
          <dialog
            open
            className="relative max-w-xl w-full rounded-lg p-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
          >
            <h2 className="text-xl font-semibold">Cookie Preferences</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Choose which cookies to allow. You can change this at any time in
              your browser or via our Cookie Policy.
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700"
                onClick={closePreferences}
              >
                Close
              </button>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}
