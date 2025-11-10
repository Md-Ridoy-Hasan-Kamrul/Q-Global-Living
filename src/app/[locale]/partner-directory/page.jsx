"use client";
import React from "react";
import FinancialInstitutions from "@/components/partner_directory/FinancialInstitutions";
import LegalAdvisors from "@/components/partner_directory/LegalAdvisors";
import PageHeading from "@/components/partner_directory/PageHeading";
import SearchAndFilters from "@/components/partner_directory/SearchAndFilters";
import PartnerCTA from "@/components/partner_directory/PartnerCTA";

export default function PartnerDirectoryPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <PageHeading />
        <SearchAndFilters />
        <FinancialInstitutions />
        <LegalAdvisors />
        <PartnerCTA />
      </div>
    </main>
  );
}
