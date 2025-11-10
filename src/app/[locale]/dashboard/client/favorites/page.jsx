"use client";

import { useState, useCallback, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyCard from '@/components/dashboard/client/PropertyCard';
import { useTranslation } from '@/i18n';

export default function SavedProperties() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const [savedProperties, setSavedProperties] = useState([
    {
      id: 1,
      name: 'Villa de Luxe',
      location: 'Cocody, Abidjan',
      price: '150,000,000',
      beds: 4,
      baths: 5,
      area: 350,
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=350&fit=crop',
      liked: false,
    },
    {
      id: 2,
      name: 'Appartement Moderne',
      location: 'Plateau, Abidjan',
      price: '85,000,000',
      beds: 2,
      baths: 2,
      area: 120,
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=350&fit=crop',
      liked: false,
    },
    {
      id: 3,
      name: 'Maison Familiale',
      location: 'Riviera Palmeroie, Abidjan',
      price: '120,000,000',
      beds: 5,
      baths: 4,
      area: 400,
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=350&fit=crop',
      liked: false,
    },
    {
      id: 4,
      name: 'Maison Familiale',
      location: 'Riviera Palmeroie, Abidjan',
      price: '120,000,000',
      beds: 5,
      baths: 4,
      area: 400,
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=350&fit=crop',
      liked: false,
    },
  ]);

  const toggleLike = useCallback((id) => {
    setSavedProperties((prev) =>
      prev.map((prop) => (prop.id === id ? { ...prop, liked: !prop.liked } : prop))
    );
  }, []);

  // Toolbar search state
  const [search, setSearch] = useState('');

  const filteredProperties = useMemo(() => {
    const q = (search || '').trim().toLowerCase();
    if (!q) return savedProperties;
    return savedProperties.filter((p) =>
      String(p.name || '').toLowerCase().includes(q) ||
      String(p.location || '').toLowerCase().includes(q) ||
      String(p.price || '').toLowerCase().includes(q)
    );
  }, [savedProperties, search]);

  return (
    <div className="min-h-screen bg-gray-50 space-y-6">
      <div>
        {/* Header */}
        
        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5078] rounded-lg p-6 shadow-lg mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t('dashboard.pages.savedProperties.title')}</h1>
          <p className="text-sm sm:text-base text-white/80">{t('dashboard.pages.savedProperties.subtitle')}</p>
        </div>
        {/* Toolbar (search, status select, add) - matches provided image */}
        <div className="bg-white rounded-lg px-4 py-6 mb-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <Search className="h-4 w-4" />
                </span>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={'Search properties...'}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 pl-10 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">

              <button
                type="button"
                className="bg-[#E6B325] text-white px-4 py-2 rounded shadow text-base
                "
              // TODO: wire add property action
              >
                {'Add Property'}
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          role="region"
          aria-label={t('dashboard.pages.savedProperties.propertiesRegion')}
        >
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} onToggleLike={toggleLike} />
          ))}
        </div>
      </div>
    </div>
  );
}
