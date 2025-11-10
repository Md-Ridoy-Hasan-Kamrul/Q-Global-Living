"use client";
import WelcomeHomes from "@/components/cookie_consent/WelcomeHomes";
import React from "react";

export default function CookieConsent() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:flex lg:gap-10">
        <WelcomeHomes />
      </div>
    </main>
  );
}
