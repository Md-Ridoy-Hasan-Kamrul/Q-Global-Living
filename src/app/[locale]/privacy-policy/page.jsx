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
      short_Description: t("Policy.MainContent.Information.short_Description"),
    },
    {
      id: 2,
      title: t("Policy.MainContent.HowWeUse.title"),
      description: t("Policy.MainContent.HowWeUse.description"),
      short_Description: t("Policy.MainContent.HowWeUse.short_Description"),
    },
    {
      id: 3,
      title: t("Policy.MainContent.HowWeShare.title"),
      description: t("Policy.MainContent.HowWeShare.description"),
      short_Description: t("Policy.MainContent.HowWeShare.short_Description"),
    },
    {
      id: 4,
      title: t("Policy.MainContent.YourPrivacyRights.title"),
      description: t("Policy.MainContent.YourPrivacyRights.description"),
      short_Description: t(
        "Policy.MainContent.YourPrivacyRights.short_Description"
      ),
    },
    {
      id: 5,
      title: t("Policy.MainContent.Cookies.title"),
      description: t("Policy.MainContent.Cookies.description"),
      short_Description: t("Policy.MainContent.Cookies.short_Description"),
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
    { id: "info-collect", label: "Information We Collect" },
    { id: "info-use", label: "How We Use Your Information" },
    { id: "info-share", label: "How We Share Your Information" },
    { id: "privacy-rights", label: "Your Privacy Rights" },
    { id: "cookies", label: "Cookies & Tracking" },
    { id: "data-security", label: "Data Security" },
    { id: "third-party", label: "Third-Party Links" },
    { id: "changes", label: "Changes to Our Policy" },
    { id: "contact", label: "Contact Us" },
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
