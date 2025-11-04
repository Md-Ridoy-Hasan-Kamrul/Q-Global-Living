'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n';
import {
  Building2,
  MapPin,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Check,
  X,
  Search,
} from 'lucide-react';

export default function PropertiesManagementPage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const { t } = useTranslation(locale);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock properties data
  const properties = [
    {
      id: 1,
      title: 'Modern 4-Bedroom Villa with Pool',
      location: 'Cocody - Riviera Palmeraie, Abidjan',
      price: 150000000,
      priceUSD: 250000,
      status: 'active',
      type: 'Villa',
      bedrooms: 4,
      area: 350,
      views: 1250,
      partner: 'KOF Builders',
      image:
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'Luxury 3-Bedroom Apartment',
      location: 'Plateau, Abidjan',
      price: 85000000,
      priceUSD: 142000,
      status: 'pending',
      type: 'Apartment',
      bedrooms: 3,
      area: 180,
      views: 890,
      partner: 'Prime Properties CI',
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=200&fit=crop',
    },
    {
      id: 3,
      title: 'Commercial Building - Downtown',
      location: 'Marcory, Abidjan',
      price: 450000000,
      priceUSD: 750000,
      status: 'active',
      type: 'Commercial',
      bedrooms: 0,
      area: 1200,
      views: 2340,
      partner: 'Ivory Coast Realty',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop',
    },
    {
      id: 4,
      title: 'Beach House - Grand Bassam',
      location: 'Grand-Bassam',
      price: 200000000,
      priceUSD: 333000,
      status: 'active',
      type: 'House',
      bedrooms: 5,
      area: 420,
      views: 1890,
      partner: 'Coastal Properties',
      image:
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop',
    },
    {
      id: 5,
      title: '2-Bedroom Apartment - Yopougon',
      location: 'Yopougon, Abidjan',
      price: 35000000,
      priceUSD: 58000,
      status: 'inactive',
      type: 'Apartment',
      bedrooms: 2,
      area: 95,
      views: 450,
      partner: 'Urban Living CI',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=200&fit=crop',
    },
  ];

  const stats = [
    {
      label:
        t('dashboard.pages.propertiesManagement.totalListings') ||
        'Total Listings',
      value: '247',
      icon: Building2,
      color: 'bg-blue-500',
    },
    {
      label: t('dashboard.pages.propertiesManagement.active') || 'Active',
      value: '189',
      icon: Check,
      color: 'bg-green-500',
    },
    {
      label:
        t('dashboard.pages.propertiesManagement.pendingApproval') || 'Pending',
      value: '23',
      icon: Eye,
      color: 'bg-yellow-500',
    },
    {
      label: 'Inactive',
      value: '35',
      icon: X,
      color: 'bg-gray-500',
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      active: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      inactive: 'bg-gray-100 text-gray-800',
    };
    const labels = {
      active: locale === 'fr' ? 'Actif' : 'Active',
      pending: locale === 'fr' ? 'En Attente' : 'Pending',
      inactive: locale === 'fr' ? 'Inactif' : 'Inactive',
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${badges[status]}`}
      >
        {labels[status]}
      </span>
    );
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || property.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h2 className='mb-2 text-3xl font-bold text-gray-900'>
          {t('dashboard.pages.propertiesManagement.title')}
        </h2>
        <p className='text-gray-600'>
          {t('dashboard.pages.propertiesManagement.subtitle')}
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className='rounded-lg bg-white p-6 shadow-sm'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-gray-600'>
                    {stat.label}
                  </p>
                  <p className='mt-2 text-3xl font-bold text-gray-900'>
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon className='h-6 w-6 text-white' />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters and Actions */}
      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          {/* Search */}
          <div className='relative flex-1 max-w-md'>
            <Search className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder={
                locale === 'fr'
                  ? 'Rechercher des propriétés...'
                  : 'Search properties...'
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20'
            />
          </div>

          {/* Status Filter */}
          <div className='flex items-center gap-4'>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className='rounded-lg border border-gray-300 px-4 py-2 focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20'
            >
              <option value='all'>
                {locale === 'fr' ? 'Tous' : 'All Status'}
              </option>
              <option value='active'>
                {locale === 'fr' ? 'Actif' : 'Active'}
              </option>
              <option value='pending'>
                {locale === 'fr' ? 'En Attente' : 'Pending'}
              </option>
              <option value='inactive'>
                {locale === 'fr' ? 'Inactif' : 'Inactive'}
              </option>
            </select>

            <button className='flex items-center gap-2 rounded-lg bg-[#E6B325] px-4 py-2 text-sm font-medium text-[#0F1B2E] hover:bg-[#d4a520] transition-colors'>
              <Building2 className='h-4 w-4' />
              {t('dashboard.pages.propertiesManagement.addProperty')}
            </button>
          </div>
        </div>
      </div>

      {/* Properties Table */}
      <div className='rounded-lg bg-white shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b border-gray-200'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {locale === 'fr' ? 'Propriété' : 'Property'}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {locale === 'fr' ? 'Emplacement' : 'Location'}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {locale === 'fr' ? 'Prix' : 'Price'}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {locale === 'fr' ? 'Statut' : 'Status'}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {locale === 'fr' ? 'Vues' : 'Views'}
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {locale === 'fr' ? 'Actions' : 'Actions'}
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {filteredProperties.map((property) => (
                <tr key={property.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <img
                        src={property.image}
                        alt={property.title}
                        className='h-12 w-16 rounded object-cover'
                      />
                      <div>
                        <div className='font-medium text-gray-900'>
                          {property.title}
                        </div>
                        <div className='text-sm text-gray-500'>
                          {property.type} • {property.bedrooms}{' '}
                          {locale === 'fr' ? 'chambres' : 'beds'} •{' '}
                          {property.area}m²
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-1 text-sm text-gray-900'>
                      <MapPin className='h-4 w-4 text-gray-400' />
                      {property.location}
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='text-sm font-medium text-gray-900'>
                      ${property.priceUSD.toLocaleString()}
                    </div>
                    <div className='text-xs text-gray-500'>
                      {property.price.toLocaleString()} FCFA
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    {getStatusBadge(property.status)}
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-1 text-sm text-gray-900'>
                      <Eye className='h-4 w-4 text-gray-400' />
                      {property.views.toLocaleString()}
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-2'>
                      <button
                        className='rounded p-1 hover:bg-gray-100'
                        title={locale === 'fr' ? 'Voir' : 'View'}
                      >
                        <Eye className='h-4 w-4 text-gray-600' />
                      </button>
                      <button
                        className='rounded p-1 hover:bg-gray-100'
                        title={locale === 'fr' ? 'Modifier' : 'Edit'}
                      >
                        <Edit className='h-4 w-4 text-blue-600' />
                      </button>
                      <button
                        className='rounded p-1 hover:bg-gray-100'
                        title={locale === 'fr' ? 'Supprimer' : 'Delete'}
                      >
                        <Trash2 className='h-4 w-4 text-red-600' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
