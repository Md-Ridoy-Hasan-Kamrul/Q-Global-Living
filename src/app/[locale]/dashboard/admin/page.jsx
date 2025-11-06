'use client';

import { usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n';
import StatsCard from '@/components/dashboard/admin/StatsCard';
import UserEngagementChart from '@/components/dashboard/admin/UserEngagementChart';
import PropertiesTable from '@/components/dashboard/admin/PropertiesTable';

export default function AdminDashboardPage() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const { t } = useTranslation(locale);

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

  const propertiesData = [
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
  ];

  // Mock engagement data for the chart
  const engagementData = [45, 62, 58, 72, 55, 48, 68, 75, 42, 58, 78, 85];

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

      {/* Properties Table */}
      <PropertiesTable
        title={t('dashboard.admin.propertiesTable.title')}
        addButtonText={t('dashboard.admin.propertiesTable.addProperty')}
        properties={propertiesData}
        translations={t('dashboard.admin.propertiesTable')}
        locale={locale}
      />
    </div>
  );
}
