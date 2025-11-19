"use client";
import PolicySideBar from "@/components/dashboard/admin/common/PolicySideBar";
import MainContent from "@/app/[locale]/terms-conditions/components/MainContent";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function TermsCondition() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const terms = [
    {
      id: 1,
      title: t("Terms.MainContent.Introduction.title"),
      description: t("Terms.MainContent.Introduction.description"),
      short_Description: "",
    },
    {
      id: 2,
      title: t("Terms.MainContent.UserObligations.title"),
      description: t("Terms.MainContent.UserObligations.description"),
      short_Description: "",
    },
    {
      id: 3,
      title: t("Terms.MainContent.Intellectual.title"),
      description: t("Terms.MainContent.Intellectual.description"),
      short_Description: "",
    },
    {
      id: 4,
      title: t("Terms.MainContent.Disclaimer.title"),
      description: t("Terms.MainContent.Disclaimer.description"),
      short_Description: t("Terms.MainContent.Disclaimer.sortDescription"),
    },
    {
      id: 5,
      title: t("Terms.MainContent.Limitation.title"),
      description: t("Terms.MainContent.Limitation.description"),
      short_Description: "",
    },
    {
      id: 6,
      title: t("Terms.MainContent.Governing.title"),
      description: t("Terms.MainContent.Governing.description"),
      short_Description: "",
    },
    {
      id: 7,
      title: t("Terms.MainContent.ChangesToTerms.title"),
      description: t("Terms.MainContent.ChangesToTerms.description"),
      short_Description: "",
    },
    {
      id: 8,
      title: t("Terms.MainContent.ContactInformation.title"),
      description: t("Terms.MainContent.ContactInformation.description"),
      short_Description: "",
    },
  ];

  const items = [
    { id: "introduction", label: t("Terms.Sidebar.Introduction") },
    { id: "user-obligations", label: t("Terms.Sidebar.UserObligations") },
    { id: "intellectual-property", label: t("Terms.Sidebar.Intellectual") },
    { id: "disclaimer", label: t("Terms.Sidebar.Disclaimer") },
    { id: "limitation-liability", label: t("Terms.Sidebar.Limitation") },
    { id: "changes-terms", label: t("Terms.Sidebar.ChangesToTerms") },
    { id: "contact-information", label: "8. Contact Information" },
  ];
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:flex lg:gap-10">
        <PolicySideBar items={items} />
        <MainContent items={items} terms={terms} />
      </div>
    </main>
  );
}
