"use client";

import { useState } from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';

export default function NotificationSettings() {
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
    <div className="min-h-screen  p-8">
      <div className="">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          <span>Account</span>
          <span className="mx-2">/</span>
          <span className="font-semibold">Notification Settings</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Saved Search & Notification Settings
          </h1>
          <p className="text-gray-600">
            Manage how and when you receive alerts for your saved property searches.
          </p>
        </div>

        {/* Global Notification Settings */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Global Notification Settings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Notification Frequency */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Notification Frequency
              </h3>
              <div className="space-y-3">
                {['instant', 'daily', 'weekly'].map((freq) => (
                  <label key={freq} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value={freq}
                      checked={settings.frequency === freq}
                      onChange={(e) => handleFrequencyChange(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700 capitalize">
                      {freq === 'instant'
                        ? 'Instant Alerts'
                        : freq === 'daily'
                          ? 'Daily Digest'
                          : 'Weekly Summary'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Notification Channels */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Notification Channels
              </h3>
              <div className="space-y-3">
                {[
                  { key: 'email', label: 'Email' },
                  { key: 'whatsapp', label: 'WhatsApp' },
                  { key: 'inApp', label: 'In-App Notifications' },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.channels[key]}
                      onChange={() => handleChannelChange(key)}
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <a href="#" className="inline-block mt-6 text-yellow-600 font-semibold hover:text-yellow-700">
            See an example →
          </a>
        </div>

        {/* My Saved Searches */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">My Saved Searches</h2>

          <div className="space-y-3">
            {searches.map((search) => (
              <div
                key={search.id}
                className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {search.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Location: {search.location} | Type: {search.type}
                    {search.budget && ` | Budget: ${search.budget}`}
                    {search.minBeds && ` | ${search.minBeds}`}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleSearch(search.id)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${search.enabled ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${search.enabled ? 'translate-x-7' : 'translate-x-1'
                        }`}
                    />
                  </button>

                  {/* View Icon */}
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                    <Eye size={20} />
                  </button>

                  {/* Edit Icon */}
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                    <Edit2 size={20} />
                  </button>

                  {/* Delete Icon */}
                  <button
                    onClick={() => deleteSearch(search.id)}
                    className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded"
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
            Reset to Default
          </button>
          <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}