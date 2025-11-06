'use client';

import { use, useState, useMemo, useCallback } from 'react';
import { useTranslation } from '@/i18n';
import { Bell, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import StatsCard from '@/components/dashboard/admin/StatsCard';
import ConciergeRequestsFilters from '@/components/dashboard/admin/ConciergeRequestsFilters';
import ConciergeRequestsTable from '@/components/dashboard/admin/ConciergeRequestsTable';
import Pagination from '@/components/dashboard/Pagination';

// Service types for concierge requests
const SERVICE_TYPES = [
  'Property Viewing Coordination',
  'Document Translation',
  'Legal Assistance',
  'Moving & Relocation',
  'Utility Setup',
  'Property Maintenance',
  'Interior Design Consultation',
  'Cleaning Services',
  'Security Installation',
  'Rental Agreement Support',
  'Property Insurance',
  'Furniture Rental',
];

// Mock concierge requests - deterministic generation
const generateMockRequests = () => {
  const clients = [
    {
      name: 'Jean Kouassi',
      email: 'jean.kouassi@email.com',
      phone: '+225 07 45 67 89 01',
    },
    {
      name: 'Marie Diabate',
      email: 'marie.diabate@email.com',
      phone: '+225 05 12 34 56 78',
    },
    {
      name: 'Ibrahim Traore',
      email: 'ibrahim.traore@email.com',
      phone: null,
    },
    {
      name: 'Sophie Mensah',
      email: 'sophie.mensah@email.com',
      phone: '+225 01 23 45 67 89',
    },
    {
      name: "David N'Guessan",
      email: 'david.nguessan@email.com',
      phone: '+225 07 89 12 34 56',
    },
    {
      name: 'Fatou Diallo',
      email: 'fatou.diallo@email.com',
      phone: null,
    },
    {
      name: 'Eric Koffi',
      email: 'eric.koffi@email.com',
      phone: '+225 05 67 89 01 23',
    },
    {
      name: 'Aminata Toure',
      email: 'aminata.toure@email.com',
      phone: '+225 01 34 56 78 90',
    },
    {
      name: 'Laurent Yao',
      email: 'laurent.yao@email.com',
      phone: '+225 07 12 45 78 90',
    },
    {
      name: 'Grace Ouattara',
      email: 'grace.ouattara@email.com',
      phone: null,
    },
    {
      name: 'Michel Bamba',
      email: 'michel.bamba@email.com',
      phone: '+225 05 89 01 23 45',
    },
    {
      name: 'Awa Sanogo',
      email: 'awa.sanogo@email.com',
      phone: '+225 01 56 78 90 12',
    },
    {
      name: 'Pierre Coulibaly',
      email: 'pierre.coulibaly@email.com',
      phone: '+225 07 23 45 67 89',
    },
    {
      name: 'Aisha Kone',
      email: 'aisha.kone@email.com',
      phone: null,
    },
    {
      name: 'Christophe Soro',
      email: 'christophe.soro@email.com',
      phone: '+225 05 34 56 78 90',
    },
  ];

  const properties = [
    'Riviera Golf, Villa 3 chambres',
    'Cocody Angré, Appartement 2 pièces',
    'Plateau, Bureau 150m²',
    null,
    'Marcory Zone 4, Duplex 4 chambres',
    'Yopougon, Maison 5 chambres',
    'Grand-Bassam, Villa bord de mer',
    'Abidjan Mall Area, Studio meublé',
    null,
    'Bingerville, Résidence sécurisée',
    'Cocody Riviera, Penthouse',
    null,
    'Plateau Dokui, Local commercial',
    'Abobo, Logement économique',
    'Port-Bouët, Appartement vue mer',
  ];

  const statuses = ['pending', 'in-progress', 'completed', 'cancelled'];
  const priorities = ['high', 'medium', 'low'];

  return clients.map((client, index) => ({
    id: index + 1,
    client_name: client.name,
    client_email: client.email,
    client_phone: client.phone,
    service_type: SERVICE_TYPES[index % SERVICE_TYPES.length],
    property_address: properties[index],
    priority: priorities[index % priorities.length],
    status: statuses[index % statuses.length],
    created_at: new Date(
      Date.now() - index * 3 * 24 * 60 * 60 * 1000
    ).toISOString(),
    updated_at: new Date(
      Date.now() - index * 1 * 24 * 60 * 60 * 1000
    ).toISOString(),
  }));
};

export default function ConciergeRequestsPage({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);

  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Constants
  const ITEMS_PER_PAGE = 5;

  // Generate mock data
  const requestsData = useMemo(() => generateMockRequests(), []);

  // Filter and search
  const filteredRequests = useMemo(() => {
    return requestsData.filter((request) => {
      // Search filter
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        request.client_name.toLowerCase().includes(searchLower) ||
        request.client_email.toLowerCase().includes(searchLower) ||
        request.service_type.toLowerCase().includes(searchLower);

      // Status filter
      const matchesStatus =
        statusFilter === 'all' || request.status === statusFilter;

      // Priority filter
      const matchesPriority =
        priorityFilter === 'all' || request.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [requestsData, searchTerm, statusFilter, priorityFilter]);

  // Calculate stats
  const stats = useMemo(() => {
    const total = requestsData.length;
    const pending = requestsData.filter((r) => r.status === 'pending').length;
    const inProgress = requestsData.filter(
      (r) => r.status === 'in-progress'
    ).length;

    // Completed today (last 24 hours)
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const completedToday = requestsData.filter(
      (r) => r.status === 'completed' && new Date(r.updated_at) > oneDayAgo
    ).length;

    return { total, pending, inProgress, completedToday };
  }, [requestsData]);

  // Pagination
  const totalPages = Math.ceil(filteredRequests.length / ITEMS_PER_PAGE);

  const paginatedRequests = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRequests.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredRequests, currentPage]);

  // Handlers
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, []);

  const handleStatusChange = useCallback((value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  }, []);

  const handlePriorityChange = useCallback((value) => {
    setPriorityFilter(value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  // Translations
  const conciergeTranslations = useMemo(
    () => ({
      title: t('dashboard.admin.conciergeRequests.title'),
      subtitle: t('dashboard.admin.conciergeRequests.subtitle'),
      addRequest: t('dashboard.admin.conciergeRequests.addRequest'),
      searchPlaceholder: t(
        'dashboard.admin.conciergeRequests.searchPlaceholder'
      ),
      filters: {
        allStatus: t('dashboard.admin.conciergeRequests.filters.allStatus'),
        allPriority: t('dashboard.admin.conciergeRequests.filters.allPriority'),
      },
      status: {
        pending: t('dashboard.admin.conciergeRequests.status.pending'),
        inProgress: t('dashboard.admin.conciergeRequests.status.inProgress'),
        completed: t('dashboard.admin.conciergeRequests.status.completed'),
        cancelled: t('dashboard.admin.conciergeRequests.status.cancelled'),
      },
      priority: {
        high: t('dashboard.admin.conciergeRequests.priority.high'),
        medium: t('dashboard.admin.conciergeRequests.priority.medium'),
        low: t('dashboard.admin.conciergeRequests.priority.low'),
      },
      table: {
        requestId: t('dashboard.admin.conciergeRequests.table.requestId'),
        client: t('dashboard.admin.conciergeRequests.table.client'),
        service: t('dashboard.admin.conciergeRequests.table.service'),
        property: t('dashboard.admin.conciergeRequests.table.property'),
        priority: t('dashboard.admin.conciergeRequests.table.priority'),
        status: t('dashboard.admin.conciergeRequests.table.status'),
        requestDate: t('dashboard.admin.conciergeRequests.table.requestDate'),
        actions: t('dashboard.admin.conciergeRequests.table.actions'),
        view: t('dashboard.admin.conciergeRequests.table.view'),
      },
    }),
    [t]
  );

  const statsTranslations = useMemo(
    () => ({
      totalRequests: t('dashboard.admin.conciergeRequests.stats.totalRequests'),
      pending: t('dashboard.admin.conciergeRequests.stats.pending'),
      inProgress: t('dashboard.admin.conciergeRequests.stats.inProgress'),
      completed: t('dashboard.admin.conciergeRequests.stats.completed'),
    }),
    [t]
  );

  const paginationTranslations = useMemo(
    () => ({
      showing: t('common.showing'),
      to: t('common.to'),
      of: t('common.of'),
      results: t('common.results'),
      previous: t('common.previous'),
      next: t('common.next'),
    }),
    [t]
  );

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
          {conciergeTranslations.title}
        </h1>
        <p className='text-sm sm:text-base text-gray-600 mt-1'>
          {conciergeTranslations.subtitle}
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <StatsCard
          title={statsTranslations.totalRequests}
          value={stats.total}
          icon={Bell}
          trend='+12%'
          trendLabel='vs last month'
        />
        <StatsCard
          title={statsTranslations.pending}
          value={stats.pending}
          icon={Clock}
          trend='+5%'
          trendLabel='vs last week'
        />
        <StatsCard
          title={statsTranslations.inProgress}
          value={stats.inProgress}
          icon={AlertCircle}
          trend='+8%'
          trendLabel='active now'
        />
        <StatsCard
          title={statsTranslations.completed}
          value={stats.completedToday}
          icon={CheckCircle}
          trend='+15%'
          trendLabel='vs yesterday'
        />
      </div>

      {/* Filters */}
      <ConciergeRequestsFilters
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        statusFilter={statusFilter}
        onStatusChange={handleStatusChange}
        priorityFilter={priorityFilter}
        onPriorityChange={handlePriorityChange}
        translations={conciergeTranslations}
      />

      {/* Table with Pagination */}
      <div className='rounded-lg bg-white shadow-sm overflow-hidden'>
        <ConciergeRequestsTable
          requests={paginatedRequests}
          translations={conciergeTranslations}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredRequests.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
          translations={paginationTranslations}
        />
      </div>
    </div>
  );
}
