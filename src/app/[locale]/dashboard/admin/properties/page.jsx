'use client';

import { use, useState, useMemo, useCallback } from 'react';
import { useTranslation } from '@/i18n';
import { Building2, Check, Eye, X } from 'lucide-react';
import StatsCard from '@/components/dashboard/admin/StatsCard';
import PropertiesFilters from '@/components/dashboard/admin/PropertiesFilters';
import PropertiesListTable from '@/components/dashboard/admin/PropertiesListTable';
import Pagination from '@/components/dashboard/Pagination';

// Mock properties data - deterministic generation
const generateMockProperties = () => {
  const locations = [
    'Cocody - Riviera Palmeraie, Abidjan',
    'Plateau, Abidjan',
    'Marcory, Abidjan',
    'Grand-Bassam',
    'Yopougon, Abidjan',
  ];

  const types = ['Villa', 'Apartment', 'Commercial', 'House'];
  const statuses = ['active', 'pending', 'inactive'];
  const images = [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=200&fit=crop',
  ];

  return [
    {
      id: 1,
      title: 'Modern 4-Bedroom Villa with Pool',
      location: locations[0],
      price: 150000000,
      priceUSD: 250000,
      status: 'active',
      type: types[0],
      bedrooms: 4,
      area: 350,
      views: 1250,
      partner: 'KOF Builders',
      image: images[0],
    },
    {
      id: 2,
      title: 'Luxury 3-Bedroom Apartment',
      location: locations[1],
      price: 85000000,
      priceUSD: 142000,
      status: 'pending',
      type: types[1],
      bedrooms: 3,
      area: 180,
      views: 890,
      partner: 'Prime Properties CI',
      image: images[1],
    },
    {
      id: 3,
      title: 'Commercial Building - Downtown',
      location: locations[2],
      price: 450000000,
      priceUSD: 750000,
      status: 'active',
      type: types[2],
      bedrooms: 0,
      area: 1200,
      views: 2340,
      partner: 'Ivory Coast Realty',
      image: images[2],
    },
    {
      id: 4,
      title: 'Beach House - Grand Bassam',
      location: locations[3],
      price: 200000000,
      priceUSD: 333000,
      status: 'active',
      type: types[3],
      bedrooms: 5,
      area: 420,
      views: 1890,
      partner: 'Coastal Properties',
      image: images[3],
    },
    {
      id: 5,
      title: '2-Bedroom Apartment - Yopougon',
      location: locations[4],
      price: 35000000,
      priceUSD: 58000,
      status: 'inactive',
      type: types[1],
      bedrooms: 2,
      area: 95,
      views: 450,
      partner: 'Urban Living CI',
      image: images[4],
    },
    {
      id: 6,
      title: 'Luxury Penthouse - Plateau',
      location: locations[1],
      price: 180000000,
      priceUSD: 300000,
      status: 'active',
      type: types[1],
      bedrooms: 4,
      area: 280,
      views: 1580,
      partner: 'KOF Builders',
      image: images[1],
    },
    {
      id: 7,
      title: 'Office Complex - Marcory',
      location: locations[2],
      price: 320000000,
      priceUSD: 533000,
      status: 'pending',
      type: types[2],
      bedrooms: 0,
      area: 900,
      views: 980,
      partner: 'Ivory Coast Realty',
      image: images[2],
    },
    {
      id: 8,
      title: 'Family Villa - Cocody',
      location: locations[0],
      price: 125000000,
      priceUSD: 208000,
      status: 'active',
      type: types[0],
      bedrooms: 5,
      area: 400,
      views: 2100,
      partner: 'Coastal Properties',
      image: images[0],
    },
    {
      id: 9,
      title: 'Studio Apartment - Yopougon',
      location: locations[4],
      price: 25000000,
      priceUSD: 42000,
      status: 'inactive',
      type: types[1],
      bedrooms: 1,
      area: 45,
      views: 320,
      partner: 'Urban Living CI',
      image: images[4],
    },
    {
      id: 10,
      title: 'Beachfront Resort - Grand Bassam',
      location: locations[3],
      price: 550000000,
      priceUSD: 917000,
      status: 'active',
      type: types[2],
      bedrooms: 0,
      area: 1800,
      views: 3200,
      partner: 'Prime Properties CI',
      image: images[3],
    },
    {
      id: 11,
      title: '3-Bedroom Townhouse - Plateau',
      location: locations[1],
      price: 95000000,
      priceUSD: 158000,
      status: 'pending',
      type: types[3],
      bedrooms: 3,
      area: 210,
      views: 760,
      partner: 'KOF Builders',
      image: images[1],
    },
    {
      id: 12,
      title: 'Commercial Warehouse - Marcory',
      location: locations[2],
      price: 275000000,
      priceUSD: 458000,
      status: 'active',
      type: types[2],
      bedrooms: 0,
      area: 1500,
      views: 1100,
      partner: 'Ivory Coast Realty',
      image: images[2],
    },
  ];
};

export default function PropertiesManagementPage({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);

  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Constants
  const ITEMS_PER_PAGE = 5;

  // Memoized translations
  const propertiesTranslations = useMemo(
    () => ({
      title: t('dashboard.admin.properties.title'),
      subtitle: t('dashboard.admin.properties.subtitle'),
      addProperty: t('dashboard.admin.properties.addProperty'),
      searchPlaceholder: t('dashboard.admin.properties.searchPlaceholder'),
      allStatus: t('dashboard.admin.properties.allStatus'),
      stats: {
        totalListings: t('dashboard.admin.properties.stats.totalListings'),
        active: t('dashboard.admin.properties.stats.active'),
        pending: t('dashboard.admin.properties.stats.pending'),
        inactive: t('dashboard.admin.properties.stats.inactive'),
      },
      table: {
        property: t('dashboard.admin.properties.table.property'),
        location: t('dashboard.admin.properties.table.location'),
        price: t('dashboard.admin.properties.table.price'),
        status: t('dashboard.admin.properties.table.status'),
        views: t('dashboard.admin.properties.table.views'),
        actions: t('dashboard.admin.properties.table.actions'),
        beds: t('dashboard.admin.properties.table.beds'),
        view: t('dashboard.admin.properties.table.view'),
        edit: t('dashboard.admin.properties.table.edit'),
        delete: t('dashboard.admin.properties.table.delete'),
      },
      status: {
        active: t('dashboard.admin.properties.status.active'),
        pending: t('dashboard.admin.properties.status.pending'),
        inactive: t('dashboard.admin.properties.status.inactive'),
      },
    }),
    [t]
  );

  // Mock properties data
  const properties = useMemo(() => generateMockProperties(), []);

  // Stats configuration
  const stats = useMemo(
    () => [
      {
        label: propertiesTranslations.stats.totalListings,
        value: '247',
        trend: '+12.5%',
        icon: Building2,
        variant: 'primary',
      },
      {
        label: propertiesTranslations.stats.active,
        value: '189',
        trend: '+8.2%',
        icon: Check,
        variant: 'success',
      },
      {
        label: propertiesTranslations.stats.pending,
        value: '23',
        trend: '-3.1%',
        icon: Eye,
        variant: 'warning',
      },
      {
        label: propertiesTranslations.stats.inactive,
        value: '35',
        trend: '+5.4%',
        icon: X,
        variant: 'info',
      },
    ],
    [propertiesTranslations]
  );

  // Filter properties
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === 'all' || property.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [properties, searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProperties.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProperties, currentPage]);

  // Handlers
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
  }, []);

  const handleStatusChange = useCallback((value) => {
    setStatusFilter(value);
    setCurrentPage(1); // Reset to first page on filter change
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  // Pagination translations
  const paginationTranslations = useMemo(
    () => ({
      previous: t('common.previous'),
      next: t('common.next'),
      showing: t('common.showing'),
      to: t('common.to'),
      of: t('common.of'),
      results: t('common.results'),
    }),
    [t]
  );

  return (
    <div className='space-y-4 md:space-y-6'>
      {/* Header */}
      <div className='bg-linear-to-r from-[#1e3a5f] to-[#2d5078] rounded-lg p-4 sm:p-6 md:p-8 shadow-lg'>
        <h1 className='text-2xl sm:text-3xl font-bold text-white mb-2'>
          {propertiesTranslations.title}
        </h1>
        <p className='text-sm sm:text-base text-white/80'>
          {propertiesTranslations.subtitle}
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            label={stat.label}
            value={stat.value}
            trend={stat.trend}
            icon={stat.icon}
            variant={stat.variant}
          />
        ))}
      </div>

      {/* Filters */}
      <PropertiesFilters
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        onSearchChange={handleSearchChange}
        onStatusChange={handleStatusChange}
        translations={propertiesTranslations}
      />

      {/* Properties Table with Pagination */}
      <div className='rounded-lg bg-white shadow-sm overflow-hidden'>
        <PropertiesListTable
          properties={paginatedProperties}
          translations={propertiesTranslations}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredProperties.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
          translations={paginationTranslations}
        />
      </div>
    </div>
  );
}
