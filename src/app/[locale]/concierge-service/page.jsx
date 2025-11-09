"use client";
import ComprehensiveSection from "@/components/concierge_service/ComprehensiveSection";
import FinalCTASection from "@/components/concierge_service/FinalCTASection";
import HeroSection from "@/components/concierge_service/HeroSection";
import HowItWorks from "@/components/concierge_service/HowItWorks";
import TestimonialsSection from "@/components/concierge_service/Testimonials";
import React from "react";

export default function ConciergeServicePage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-16 md:gap-24 mt-8">
        <HeroSection />
        <ComprehensiveSection />
        <HowItWorks />
        <TestimonialsSection />
        <FinalCTASection />
      </div>
    </main>
  );
}
