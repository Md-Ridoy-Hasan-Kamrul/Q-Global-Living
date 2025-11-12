"use client";
import React from "react";
import { Search, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function SearchFilter({ searchTerm, setSearchTerm, filterStatus, setFilterStatus, onNew }) {
      const { locale } = useLanguage();
  const { t } = useTranslation(locale);
    return (
        <div className="flex gap-4 mb-6 flex-wrap  py-8 px-4 rounded-lg items-center justify-between bg-white shadow-sm">
            <div className="flex-1 min-w-64 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search tickets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label={t("dashboard.client.supportTicket.searchTickets")}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                />
            </div>
            <div className="flex gap-2">
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    aria-label="Filter tickets by status"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                </select>
                <button
                    type="button"
                    onClick={onNew}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg  font-medium"
                    aria-label="Create new ticket"
                >
                    <Plus className="w-5 h-5" />
                    {t("dashboard.client.supportTicket.createTicket")}
                </button>
            </div>
        </div>
    );
}
