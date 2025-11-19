"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";



export default function Header() {
        const { locale } = useLanguage();
  const { t } = useTranslation(locale);
    return (
        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5078] rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t("dashboard.client.supportTicket.title")}</h1>
            <p className="text-sm sm:text-base text-white/80">{t("dashboard.client.supportTicket.subtitle")}</p>
        </div>
    );
}
