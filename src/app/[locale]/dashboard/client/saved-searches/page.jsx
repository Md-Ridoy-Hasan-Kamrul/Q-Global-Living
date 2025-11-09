"use client";

import { useState } from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotificationSettings() {
   const { locale } = useLanguage();
    const { t } = useTranslation(locale);
  const [settings, setSettings] = useState({
    frequency: 'instant',
    channels: {
      email: true,
      whatsapp: true,
      inApp: false,
    },
  });

  const [searches, setSearches] = useState([
    {
      id: 1,
      title: '3-bedroom Villa in Cocody',
      location: 'Cocody',
      type: 'Villa', 
      budget: 'XOF 50M-75M',
      enabled: true,
    },
    {
      id: 2,
      title: 'Apartments in Marcory Zone 4',
      location: 'Marcory',
      type: 'Apartment',
      minBeds: 'Min 2 bedrooms',
      enabled: true,
    },
    {
      id: 3,
      title: 'Land for sale - Bassam',
      location: 'Grand-Bassam',
      type: 'Land',
      enabled: false,
    },
  ]);

  const handleFrequencyChange = (freq) => {
    setSettings({ ...settings, frequency: freq });
  };

  const handleChannelChange = (channel) => {
    setSettings({
      ...settings,
      channels: {
        ...settings.channels,
        [channel]: !settings.channels[channel],
      },
    });
  };

  const toggleSearch = (id) => {
    setSearches(
      searches.map((search) =>
        search.id === id ? { ...search, enabled: !search.enabled } : search
      )
    );
  };

  const deleteSearch = (id) => {
    setSearches(searches.filter((search) => search.id !== id));
  };

  return (
    <div className="min-h-screen space-y-6">
      <div className="">


        {/* My Saved Searches */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">{t('dashboard.client.mySavedSearches')}</h2>

          <div className="space-y-3">
            {searches.map((search) => (
              <div
                key={search.id}
                className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {search.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <span className="block lg:inline">Location: {search.location}</span>
                    <span className="hidden lg:inline"> &nbsp;|&nbsp; </span>
                    <span className="block lg:inline">Type: {search.type}</span>
                    {search.budget && (
                      <>
                        <span className="hidden lg:inline"> &nbsp;|&nbsp; </span>
                        <span className="block lg:inline">Budget: {search.budget}</span>
                      </>
                    )}
                    {search.minBeds && (
                      <>
                        <span className="hidden lg:inline"> &nbsp;|&nbsp; </span>
                        <span className="block lg:inline">{search.minBeds}</span>
                      </>
                    )}
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-3 lg:mt-0 lg:ml-4">
                  {/* Toggle Button - smaller on mobile/tablet, original size on large */}
                  <button
                    onClick={() => toggleSearch(search.id)}
                    aria-pressed={search.enabled}
                    aria-label={search.enabled ? 'Disable saved search' : 'Enable saved search'}
                    className={`relative inline-flex items-center rounded-full transition-colors outline-none ${search.enabled ? 'bg-primary' : 'bg-gray-300'
                      } h-6 w-10 lg:h-7 lg:w-12`}
                  >
                    <span
                      className={`inline-block transform rounded-full bg-white shadow ${search.enabled ? 'translate-x-4 lg:translate-x-6' : 'translate-x-1'
                        } h-4 w-4 lg:h-5 lg:w-5 transition-all duration-200`}
                    />
                  </button>

                  <button
                    title="View"
                    aria-label="View saved search"
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
                  >
                    <Eye size={20} />
                  </button>

                  <button
                    title="Edit"
                    aria-label="Edit saved search"
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
                  >
                    <Edit2 size={20} />
                  </button>

                  <button
                    onClick={() => deleteSearch(search.id)}
                    title="Delete"
                    aria-label="Delete saved search"
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-6 py-2 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">
            {t('dashboard.client.resetToDefault')}
          </button>
          <button className="px-6 py-2 bg-primary  text-white font-semibold rounded-lg hover:bg-yellow-600">
           {t('dashboard.client.saveChanges')}
          </button>
        </div>
      </div>
    </div>
  );
}