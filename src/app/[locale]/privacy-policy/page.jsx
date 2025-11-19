"use client";
import PolicySideBar from "@/components/dashboard/admin/common/PolicySideBar";

import React from "react";
import MainContent from "./components/MainContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function PrivacyPolicyPage() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const privacy = [
    {
      id: 1,
      title: t("Policy.MainContent.Information.title"),
      description: t("Policy.MainContent.Information.description"),
      short_Description: t("Policy.MainContent.Information.sortDescription"),
    },
    {
      id: 2,
      title: t("Policy.MainContent.HowWeUse.title"),
      description: t("Policy.MainContent.HowWeUse.description"),
      short_Description: "",
    },
    {
      id: 3,
      title: t("Policy.MainContent.HowWeShare.title"),
      description: t("Policy.MainContent.HowWeShare.description"),
      short_Description: "",
    },
    {
      id: 4,
      title: t("Policy.MainContent.YourPrivacyRights.title"),
      description: t("Policy.MainContent.YourPrivacyRights.description"),
      short_Description: "",
    },
    {
      id: 5,
      title: t("Policy.MainContent.CookiesandTracking.title"),
      description: t("Policy.MainContent.CookiesandTracking.description"),
      short_Description: "",
    },
    {
      id: 6,
      title: t("Policy.MainContent.DataSecurity.title"),
      description: t("Policy.MainContent.DataSecurity.description"),
      short_Description: "",
    },
    {
      id: 7,
      title: t("Policy.MainContent.ThirdPartyLinks.title"),
      description: t("Policy.MainContent.ThirdPartyLinks.description"),
      short_Description: "",
    },
    {
      id: 8,
      title: t("Policy.MainContent.ChangesToOurPrivacyPolicy.title"),
      description: t(
        "Policy.MainContent.ChangesToOurPrivacyPolicy.description"
      ),
      short_Description: "",
    },
    {
      id: 9,
      title: t("Policy.MainContent.ContactUs.title"),
      description: t("Policy.MainContent.ContactUs.description"),
      email: t("Policy.MainContent.ContactUs.email"),
      short_Description: "",
    },
  ];
  const items = [
    { id: "info-collect", label: t("Policy.Sidebar.Information") },
    { id: "info-use", label: t("Policy.Sidebar.HowWeUse") },
    { id: "info-share", label: t("Policy.Sidebar.HowWeShare") },
    { id: "privacy-rights", label: t("Policy.Sidebar.YourPrivacyRights") },
    { id: "cookies", label: t("Policy.Sidebar.CookiesandTracking") },
    { id: "data-security", label: t("Policy.Sidebar.DataSecurity") },
    { id: "third-party", label: t("Policy.Sidebar.ThirdPartyLinks") },
    { id: "changes", label: t("Policy.Sidebar.ChangesToOurPrivacyPolicy") },
    { id: "contact", label: t("Policy.Sidebar.ContactUs") },
  ];
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:flex lg:gap-10">
        <PolicySideBar items={items} />
        <MainContent items={items} privacy={privacy} />
      </div>
    </main>
  );
}
