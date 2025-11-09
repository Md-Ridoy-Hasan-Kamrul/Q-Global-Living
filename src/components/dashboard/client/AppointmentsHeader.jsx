"use client";
import React from 'react';
import { Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

export default function AppointmentsHeader({ count = 0, onNew }) {
    const { locale } = useLanguage();
    const { t } = useTranslation(locale);
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0">
            {/* Title & Count */}
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('dashboard.client.appointments')}</h1>
                <p className="text-gray-600 mt-2 text-lg md:text-xl">
                    {t('dashboard.client.totalAppointments')} : { count }
                </p>
            </div>

            {/* New Appointment Button */}
            <button
                onClick={onNew}
                className="bg-primary text-white px-4 py-2 md:px-6 md:py-2 rounded-lg flex items-center gap-2 transition text-sm md:text-base"
            >
                <Plus size={16} className="md:mr-0" />
                {t('dashboard.client.newAppointment')}
            </button>
        </div>
    );
}
