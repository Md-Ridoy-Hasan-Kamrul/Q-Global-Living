"use client";
import React from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

export default function AppointmentsHeader({ count = 0, query = '', onQueryChange }) {
    const { locale } = useLanguage();
    const { t } = useTranslation(locale);

    return (
        <div className="mb-6">
            <div className="flex flex-col lg:flex-row items-center gap-4">
                {/* Left: title & count */}
                <div className="shrink-0">
                    <p className="text-xl md:text-2xl font-bold text-gray-900">
                        {t('dashboard.client.totalAppointments')} : {count}
                    </p>
                </div>

                {/* Right: compact search input with icon (matches image) */}
                <div className="ml-auto w-full max-w-xs">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <Search className="h-4 w-4" />
                        </span>
                        <input
                            id="appointments-search"
                            name="appointments-search"
                            value={query}
                            onChange={(e) => onQueryChange?.(e.target.value)}
                            placeholder={t('dashboard.admin.users.searchPlaceholder') || 'Search here...'}
                            className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 pl-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>

                {/* Right: (New button removed - moved to page top-right) */}
            </div>
        </div>
    );
}
