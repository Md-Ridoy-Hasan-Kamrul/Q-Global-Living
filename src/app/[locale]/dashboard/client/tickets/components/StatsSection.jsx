"use client";
import React from "react";
import StatsCard from "@/components/dashboard/admin/StatsCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function StatsSection({ stats }) {
      const { locale } = useLanguage();
  const { t } = useTranslation(locale);
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <StatsCard title={t("dashboard.client.supportTicket.totalTickets")} value={stats.total} trend="+0%" variant="primary" />
            <StatsCard title={t("dashboard.client.supportTicket.openTicket")} value={stats.open} trend="+0%"  variant="success" />
            <StatsCard title={t("dashboard.client.supportTicket.inProgress")} value={stats.in_progress} trend="+0%" variant="info" />
            <StatsCard title={t("dashboard.client.supportTicket.resolved")} value={stats.resolved} trend="+0%"  variant="warning" />
        </div>
    );
}
