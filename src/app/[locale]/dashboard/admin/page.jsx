'use client';

import { use, useState, useMemo, useCallback } from 'react';
import { useTranslation } from '@/i18n';
import StatsCard from '@/components/dashboard/admin/StatsCard';
import UserEngagementChart from '@/components/dashboard/admin/UserEngagementChart';
import PropertiesTable from '@/components/dashboard/admin/PropertiesTable';
import Pagination from '@/components/dashboard/Pagination';

export default function AdminDashboardPage({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);

  // State
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  // Mock data - In production, fetch from API
  const statsData = [
    {
      title: t('dashboard.admin.stats.totalListings'),
      value: 1204,
      trend: '+5.2%',
      variant: 'primary',
    },
    {
      title: t('dashboard.admin.stats.newUsers'),
      value: 86,
      trend: '+12%',
      variant: 'success',
    },
    {
      title: t('dashboard.admin.stats.pendingVerifications'),
      value: 12,
      trend: '+2%',
      variant: 'info',
    },
    {
      title: t('dashboard.admin.stats.activeConciergeRequests'),
      value: 5,
      trend: '-1.5%',
      variant: 'warning',
    },
  ];

  const propertiesData = useMemo(
    () => [
      {
        id: 1,
        title: 'Modern Villa in Cocody',
        type: 'buy',
        typeLabel: t('dashboard.admin.propertiesTable.types.buy'),
        status: 'approved',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.approved'),
        agent: 'Jean Dupont',
        dateAdded: '2023-10-25',
      },
      {
        id: 2,
        title: 'Seaside Apartment',
        type: 'rent',
        typeLabel: t('dashboard.admin.propertiesTable.types.rent'),
        status: 'pending',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.pending'),
        agent: 'Amina Keita',
        dateAdded: '2023-10-24',
      },
      {
        id: 3,
        title: 'Riviera Golf Luxury Home',
        type: 'buy',
        typeLabel: t('dashboard.admin.propertiesTable.types.buy'),
        status: 'approved',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.approved'),
        agent: 'Moussa Traoré',
        dateAdded: '2023-10-22',
      },
      {
        id: 4,
        title: 'Downtown Office Space',
        type: 'rent',
        typeLabel: t('dashboard.admin.propertiesTable.types.rent'),
        status: 'rejected',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.rejected'),
        agent: 'Fatou Diallo',
        dateAdded: '2023-10-21',
      },
      {
        id: 5,
        title: 'Plateau Business Center',
        type: 'buy',
        typeLabel: t('dashboard.admin.propertiesTable.types.buy'),
        status: 'approved',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.approved'),
        agent: 'Kofi Mensah',
        dateAdded: '2023-10-20',
      },
      {
        id: 6,
        title: 'Marcory Family House',
        type: 'rent',
        typeLabel: t('dashboard.admin.propertiesTable.types.rent'),
        status: 'pending',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.pending'),
        agent: "Sophie N'Guessan",
        dateAdded: '2023-10-19',
      },
      {
        id: 7,
        title: 'Grand-Bassam Beach Villa',
        type: 'buy',
        typeLabel: t('dashboard.admin.propertiesTable.types.buy'),
        status: 'approved',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.approved'),
        agent: 'Ibrahim Sanogo',
        dateAdded: '2023-10-18',
      },
      {
        id: 8,
        title: 'Yopougon Commercial Space',
        type: 'rent',
        typeLabel: t('dashboard.admin.propertiesTable.types.rent'),
        status: 'rejected',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.rejected'),
        agent: 'Marie Coulibaly',
        dateAdded: '2023-10-17',
      },
      {
        id: 9,
        title: 'Angré Premium Residence',
        type: 'buy',
        typeLabel: t('dashboard.admin.propertiesTable.types.buy'),
        status: 'approved',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.approved'),
        agent: 'David Koffi',
        dateAdded: '2023-10-16',
      },
      {
        id: 10,
        title: 'Two Plateaus Luxury Apartment',
        type: 'rent',
        typeLabel: t('dashboard.admin.propertiesTable.types.rent'),
        status: 'pending',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.pending'),
        agent: 'Grace Touré',
        dateAdded: '2023-10-15',
      },
      {
        id: 11,
        title: 'Cocody Heights Penthouse',
        type: 'buy',
        typeLabel: t('dashboard.admin.propertiesTable.types.buy'),
        status: 'approved',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.approved'),
        agent: 'Laurent Bamba',
        dateAdded: '2023-10-14',
      },
      {
        id: 12,
        title: 'Riviera Palmeraie Villa',
        type: 'buy',
        typeLabel: t('dashboard.admin.propertiesTable.types.buy'),
        status: 'pending',
        statusLabel: t('dashboard.admin.propertiesTable.statuses.pending'),
        agent: 'Aminata Diabaté',
        dateAdded: '2023-10-13',
      },
    ],
    [t]
  );

  // Mock engagement data for the chart
  const engagementData = [45, 62, 58, 72, 55, 48, 68, 75, 42, 58, 78, 85];

  // Get properties table translations object
  const propertiesTableTranslations = useMemo(() => {
    return {
      table: {
        propertyTitle: t('dashboard.admin.propertiesTable.table.propertyTitle'),
        type: t('dashboard.admin.propertiesTable.table.type'),
        status: t('dashboard.admin.propertiesTable.table.status'),
        agent: t('dashboard.admin.propertiesTable.table.agent'),
        dateAdded: t('dashboard.admin.propertiesTable.table.dateAdded'),
        actions: t('dashboard.admin.propertiesTable.table.actions'),
      },
      types: {
        buy: t('dashboard.admin.propertiesTable.types.buy'),
        rent: t('dashboard.admin.propertiesTable.types.rent'),
      },
      statuses: {
        approved: t('dashboard.admin.propertiesTable.statuses.approved'),
        pending: t('dashboard.admin.propertiesTable.statuses.pending'),
        rejected: t('dashboard.admin.propertiesTable.statuses.rejected'),
      },
      actions: {
        edit: t('dashboard.admin.propertiesTable.actions.edit'),
      },
    };
  }, [t]);

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

  // Pagination
  const totalPages = Math.ceil(propertiesData.length / ITEMS_PER_PAGE);
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return propertiesData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [propertiesData, currentPage]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className='space-y-6'>
      {/* Stats Grid */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            variant={stat.variant}
          />
        ))}
      </div>

      {/* User Engagement Chart */}
      <UserEngagementChart
        title={t('dashboard.admin.performance.title')}
        subtitle={t('dashboard.admin.performance.subtitle')}
        period={t('dashboard.admin.performance.period')}
        change={t('dashboard.admin.performance.change')}
        weeks={[
          t('dashboard.admin.performance.weeks.week1'),
          t('dashboard.admin.performance.weeks.week2'),
          t('dashboard.admin.performance.weeks.week3'),
          t('dashboard.admin.performance.weeks.week4'),
        ]}
        data={engagementData}
      />

      {/* Properties Table with Pagination */}
      <div className='rounded-lg bg-white shadow-sm overflow-hidden'>
        <PropertiesTable
          title={t('dashboard.admin.propertiesTable.title')}
          addButtonText={t('dashboard.admin.propertiesTable.addProperty')}
          properties={paginatedProperties}
          translations={propertiesTableTranslations}
          locale={locale}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={propertiesData.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
          translations={paginationTranslations}
        />
      </div>
    </div>
  );
}
