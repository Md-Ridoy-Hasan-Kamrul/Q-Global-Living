"use client";

import React, { useState, useMemo } from "react";
import FinancialInstitutions from "@/components/partner_directory/FinancialInstitutions";
import LegalAdvisors from "@/components/partner_directory/LegalAdvisors";
import PageHeading from "@/components/partner_directory/PageHeading";
import SearchAndFilters from "@/components/partner_directory/SearchAndFilters";
import PartnerCTA from "@/components/partner_directory/PartnerCTA";
import { CiBank } from "react-icons/ci";
import { FaHome, FaPlaceOfWorship, FaCanadianMapleLeaf } from "react-icons/fa";

// Combined partners data with category tags
const allPartnersData = [
  // Financial Institutions
  {
    name: "FinBank CI",
    description:
      "Your trusted partner for mortgage solutions and real estate financing in Côte d'Ivoire. Tailored loans for every home buyer.",
    logo: <CiBank className="w-6 h-6" />,
    website: "#",
    category: "Financial",
  },
  {
    name: "Prestige Mortgages",
    description:
      "Specializing in premium mortgage services for luxury properties. We provide expert financial guidance for your high-value investments.",
    logo: <FaHome className="w-6 h-6" />,
    website: "#",
    category: "Financial",
  },
  {
    name: "Abidjan Credit Union",
    description:
      "Community-focused banking offering competitive home loans and financial planning services for families and individuals.",
    logo: <FaPlaceOfWorship className="w-6 h-6" />,
    website: "#",
    category: "Financial",
  },
  // Legal Advisors
  {
    name: "Legis Ivoire",
    description:
      "Expert legal counsel for all your real estate transactions. We ensure every contract is secure and every title is clear.",
    logo: <FaCanadianMapleLeaf className="w-6 h-6" />,
    website: "#",
    category: "Legal",
  },
];

export default function PartnerDirectoryPage() {
  const [filteredPartners, setFilteredPartners] = useState(allPartnersData);

  // Separate filtered partners by category
  const financialPartners = useMemo(
    () => filteredPartners.filter((p) => p.category === "Financial"),
    [filteredPartners]
  );

  const legalPartners = useMemo(
    () => filteredPartners.filter((p) => p.category === "Legal"),
    [filteredPartners]
  );

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-4">
        <PageHeading />
        <SearchAndFilters
          partners={allPartnersData}
          onFilterChange={setFilteredPartners}
        />
        <FinancialInstitutions filteredPartners={financialPartners} />
        <LegalAdvisors filteredPartners={legalPartners} />
        <PartnerCTA />
      </div>
    </main>
  );
}
