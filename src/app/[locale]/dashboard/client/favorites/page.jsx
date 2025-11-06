"use client";

import { useState } from 'react';
import PropertyCard from '@/components/dashboard/client/PropertyCard';

export default function SavedProperties() {
  const [activeTab, setActiveTab] = useState('properties');
  const [savedProperties, setSavedProperties] = useState([
    {
      id: 1,
      name: 'Villa de Luxe',
      location: 'Cocody, Abidjan',
      price: '150,000,000',
      beds: 4,
      baths: 5,
      area: 350,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=350&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=350&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=350&fit=crop',
      liked: false,
    },
  ]);

  const toggleLike = (id) => {
    setSavedProperties(
      savedProperties.map((prop) =>
        prop.id === id ? { ...prop, liked: !prop.liked } : prop
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-2">
      <div className="">
        {/* Header */}
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Your Saved Properties & Searches
        </h1>

        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('properties')}
            className={`pb-3 font-semibold cursor-pointer text-lg transition-colors ${activeTab === 'properties'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Saved Properties
          </button>
          <button
            onClick={() => setActiveTab('searches')}
            className={`pb-3 font-semibold cursor-pointer text-lg transition-colors ${activeTab === 'searches'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Saved Searches
          </button>
        </div>

        {/* Properties Grid */}
        {activeTab === 'properties' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onToggleLike={toggleLike} />
            ))}
          </div>
        )}

        {/* Searches Tab */}
        {activeTab === 'searches' && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No saved searches yet. Start searching to save your preferences!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}