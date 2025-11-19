"use client";
import React from "react";
import LegalCenterComponents from "@/components/legal_center/LegalCenterComponents";
import { useTranslation } from "@/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalCenter() {
  const { locale } = useLanguage();

  const { t } = useTranslation(locale);

  const legalDocuments = [
    {
      title: t("LegalCenter.Terms.title"),
      description: t("LegalCenter.Terms.description"),
      iconName: "description",
      href: "/terms-conditions",
    },
    {
      title: t("LegalCenter.PrivacyPolicy.title"),
      description: t("LegalCenter.PrivacyPolicy.description"),
      iconName: "shield_lock",
      href: "/privacy-policy",
    },
    {
      title: t("LegalCenter.CookiePolicy.title"),
      description: t("LegalCenter.CookiePolicy.description"),
      iconName: "cookie",
      href: "/cookie-policy",
    },
    {
      title: t("LegalCenter.Partner.title"),
      description: t("LegalCenter.Partner.description"),
      iconName: "accessibility_new",
      href: "/partner-directory",
    },
    {
      title: t("LegalCenter.ConciergeService.title"),
      description: t("LegalCenter.ConciergeService.description"),
      iconName: "gavel",
      href: "/concierge-service",
    },
  ];
  return (
    <>
      <LegalCenterComponents legalDocuments={legalDocuments} />
    </>
  );
}
