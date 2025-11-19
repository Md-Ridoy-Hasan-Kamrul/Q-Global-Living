"use client";
import CookieMainContent from "@/components/cookie_policy/CookieMainContent";
import PolicySideBar from "@/components/dashboard/admin/common/PolicySideBar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function CookiePolicy() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const cookie = {
    policy_title: t("CookiePolicy.MainContent.title"),
    last_updated: t("CookiePolicy.MainContent.lastUpdated"),
    introduction: t("CookiePolicy.MainContent.subtitle"),
    table_of_contents: [
      "What are Cookies?",
      "How We Use Cookies",
      "Types of Cookies We Use",
      "Third-Party Cookies",
      "Your Choices Regarding Cookies",
      "Changes to Our Cookie Policy",
      "Contact Us",
    ],
    sections: [
      {
        heading: t("CookiePolicy.MainContent.WhatAreCookies.title"),
        content: t("CookiePolicy.MainContent.WhatAreCookies.description"),
      },
      {
        heading: t("CookiePolicy.MainContent.HowWeUseCookies.title"),
        content: t("CookiePolicy.MainContent.HowWeUseCookies.description"),
      },

      {
        heading: t("CookiePolicy.MainContent.TypesOfCookiesWeUse.title"),
        subsections: [
          {
            type: t("CookiePolicy.MainContent.TypesOfCookies.title"),
            purpose:
              t("CookiePolicy.MainContent.TypesOfCookies.description"),
          },
          {
            type: t("CookiePolicy.MainContent.PerformanceAnalyticsCookies.title"),
            purpose:
              t("CookiePolicy.MainContent.PerformanceAnalyticsCookies.description"),
          },
          {
            type: t("CookiePolicy.MainContent.FunctionalityCookies.title"),
            purpose:
              t("CookiePolicy.MainContent.FunctionalityCookies.description"),
          },
          {
            type: t("CookiePolicy.MainContent.TargetingAdvertisingCookies.title"),
            purpose:
              t("CookiePolicy.MainContent.TargetingAdvertisingCookies.description"),
          },
        ],
      },
      {
        heading: t("CookiePolicy.MainContent.ThirdPartyCookies.title"),
        content: t("CookiePolicy.MainContent.ThirdPartyCookies.description"),
      },
      {
        heading: t("CookiePolicy.MainContent.YourChoicesRegardingCookies.title"),
        content: t("CookiePolicy.MainContent.YourChoicesRegardingCookies.description"),
      },
      {
        heading: t("CookiePolicy.MainContent.ChangesToOurCookiePolicy.title"),
        content: t("CookiePolicy.MainContent.ChangesToOurCookiePolicy.description"),
      },
      {
        heading: t("CookiePolicy.MainContent.ContactUs.title"),
        content: t("CookiePolicy.MainContent.ContactUs.description"),
        email: t("CookiePolicy.MainContent.ContactUs.email"),
      },
    ],
  };
  // Build sidebar items from the actual translated section headings so
  // generated anchor ids match the content (prevents mismatches across locales)
  const createAnchorId = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const items = (cookie.sections || []).map((section) => ({
    id: createAnchorId(section.heading || ""),
    label: section.heading || "",
  }));

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:flex lg:gap-6">
        <PolicySideBar items={items} />
        <CookieMainContent cookie={cookie} />
      </div>
    </main>
  );
}
