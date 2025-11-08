'use client';

import { use, useState, useMemo, useCallback } from 'react';
import { useTranslation } from '@/i18n';
import { Download } from 'lucide-react';
import AuditLogsFilters from '@/components/dashboard/admin/AuditLogsFilters';
import AuditLogsTable from '@/components/dashboard/admin/AuditLogsTable';
import Pagination from '@/components/dashboard/Pagination';

// Generate deterministic mock audit logs
const generateAuditLogs = (count) => {
  const users = [
    'admin@qhomes.ci',
    'staff_member@qhomes.ci',
    'System',
    'agent@qhomes.ci',
    'another_agent@qhomes.ci',
  ];

  const actionTypes = [
    'propertyApproved',
    'userSuspended',
    'settingsChanged',
    'passwordReset',
    'propertyRejected',
    'userCreated',
    'loginSuccess',
    'loginFailed',
    'dataExported',
    'permissionChanged',
  ];

  const items = [
    'Property ID: 12345',
    'User: agent@qhomes.ci',
    'Payment Gateway',
    'User: another_agent@qhomes.ci',
    'Property ID: 67890',
    'User: client@qhomes.ci',
    'Export Report',
    'Admin Panel',
    'User Permissions',
    'Property ID: 45678',
  ];

  const baseDate = new Date('2023-10-27T14:30:15');

  return Array.from({ length: count }, (_, i) => {
    const dayOffset = Math.floor(i / 10);
    const hourOffset = i % 24;
    const minuteOffset = (i * 13) % 60;
    const secondOffset = (i * 7) % 60;

    const logDate = new Date(baseDate);
    logDate.setDate(logDate.getDate() - dayOffset);
    logDate.setHours(logDate.getHours() - hourOffset);
    logDate.setMinutes(minuteOffset);
    logDate.setSeconds(secondOffset);

    const year = logDate.getFullYear();
    const month = String(logDate.getMonth() + 1).padStart(2, '0');
    const day = String(logDate.getDate()).padStart(2, '0');
    const hours = String(logDate.getHours()).padStart(2, '0');
    const minutes = String(logDate.getMinutes()).padStart(2, '0');
    const seconds = String(logDate.getSeconds()).padStart(2, '0');

    const dateTime = `${year}-${month}-${day}, ${hours}:${minutes}:${seconds}`;
    const user = users[i % users.length];
    const actionType = actionTypes[i % actionTypes.length];
    const itemAffected = items[i % items.length];
    const ipAddress =
      user === 'System'
        ? 'N/A'
        : `${192 + (i % 4)}.${168 + (i % 2)}.${(i * 3) % 256}.${(i * 7) % 256}`;

    return {
      id: i + 1,
      dateTime,
      user,
      actionType,
      itemAffected,
      ipAddress,
    };
  });
};

export default function AuditLogs({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  const [actionFilter, setActionFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Memoized translations
  const auditLogsTranslations = useMemo(
    () => ({
      title: t('dashboard.admin.auditLogs.title'),
      exportCsv: t('dashboard.admin.auditLogs.exportCsv'),
      searchPlaceholder: t('dashboard.admin.auditLogs.searchPlaceholder'),
      dateRange: t('dashboard.admin.auditLogs.dateRange'),
      userActor: t('dashboard.admin.auditLogs.userActor'),
      actionType: t('dashboard.admin.auditLogs.actionType'),
      allDates: t('dashboard.admin.auditLogs.allDates'),
      allUsers: t('dashboard.admin.auditLogs.allUsers'),
      allActions: t('dashboard.admin.auditLogs.allActions'),
      last7Days: t('dashboard.admin.auditLogs.last7Days'),
      last30Days: t('dashboard.admin.auditLogs.last30Days'),
      last90Days: t('dashboard.admin.auditLogs.last90Days'),
      customRange: t('dashboard.admin.auditLogs.customRange'),
      table: {
        dateTime: t('dashboard.admin.auditLogs.table.dateTime'),
        userActor: t('dashboard.admin.auditLogs.table.userActor'),
        actionPerformed: t('dashboard.admin.auditLogs.table.actionPerformed'),
        itemAffected: t('dashboard.admin.auditLogs.table.itemAffected'),
        ipAddress: t('dashboard.admin.auditLogs.table.ipAddress'),
      },
      actions: {
        propertyApproved: t(
          'dashboard.admin.auditLogs.actions.propertyApproved'
        ),
        userSuspended: t('dashboard.admin.auditLogs.actions.userSuspended'),
        settingsChanged: t('dashboard.admin.auditLogs.actions.settingsChanged'),
        passwordReset: t('dashboard.admin.auditLogs.actions.passwordReset'),
        propertyRejected: t(
          'dashboard.admin.auditLogs.actions.propertyRejected'
        ),
        userCreated: t('dashboard.admin.auditLogs.actions.userCreated'),
        loginSuccess: t('dashboard.admin.auditLogs.actions.loginSuccess'),
        loginFailed: t('dashboard.admin.auditLogs.actions.loginFailed'),
        dataExported: t('dashboard.admin.auditLogs.actions.dataExported'),
        permissionChanged: t(
          'dashboard.admin.auditLogs.actions.permissionChanged'
        ),
      },
    }),
    [t]
  );

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

  // Generate 128 audit logs
  const allLogs = useMemo(() => generateAuditLogs(128), []);

  // Filter logs based on search and filters
  const filteredLogs = useMemo(() => {
    return allLogs.filter((log) => {
      const matchesSearch =
        !searchQuery ||
        log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.itemAffected.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.ipAddress.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesUser =
        userFilter === 'all' ||
        (userFilter === 'admin' && log.user.includes('admin')) ||
        (userFilter === 'staff' && log.user.includes('staff')) ||
        (userFilter === 'system' && log.user === 'System');

      const matchesAction =
        actionFilter === 'all' ||
        (actionFilter === 'property' &&
          (log.actionType.includes('property') ||
            log.actionType.includes('Property'))) ||
        (actionFilter === 'user' &&
          (log.actionType.includes('user') ||
            log.actionType.includes('User') ||
            log.actionType.includes('login') ||
            log.actionType.includes('permission'))) ||
        (actionFilter === 'settings' && log.actionType.includes('settings')) ||
        (actionFilter === 'security' &&
          (log.actionType.includes('password') ||
            log.actionType.includes('login')));

      return matchesSearch && matchesUser && matchesAction;
    });
  }, [allLogs, searchQuery, userFilter, actionFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentLogs = filteredLogs.slice(startIndex, endIndex);

  // Handlers
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleExportCsv = useCallback(() => {
    console.log('Exporting CSV with', filteredLogs.length, 'logs');
  }, [filteredLogs.length]);

  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, []);

  const handleDateRangeChange = useCallback((value) => {
    setDateRange(value);
    setCurrentPage(1);
  }, []);

  const handleUserFilterChange = useCallback((value) => {
    setUserFilter(value);
    setCurrentPage(1);
  }, []);

  const handleActionFilterChange = useCallback((value) => {
    setActionFilter(value);
    setCurrentPage(1);
  }, []);

  return (
    <div className='space-y-4 md:space-y-6'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
          {auditLogsTranslations.title}
        </h1>
        <button
          onClick={handleExportCsv}
          type='button'
          className='w-full sm:w-auto px-4 sm:px-6 py-2.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base font-medium transition-colors duration-200'
        >
          <Download size={18} />
          <span>{auditLogsTranslations.exportCsv}</span>
        </button>
      </div>

      {/* Filters */}
      <AuditLogsFilters
        searchQuery={searchQuery}
        dateRange={dateRange}
        userFilter={userFilter}
        actionFilter={actionFilter}
        onSearchChange={handleSearchChange}
        onDateRangeChange={handleDateRangeChange}
        onUserFilterChange={handleUserFilterChange}
        onActionFilterChange={handleActionFilterChange}
        translations={auditLogsTranslations}
      />

      {/* Audit Logs Table with Pagination */}
      <div className='rounded-lg bg-white shadow-sm overflow-hidden'>
        <AuditLogsTable
          logs={currentLogs}
          translations={auditLogsTranslations}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredLogs.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          translations={paginationTranslations}
        />
      </div>
    </div>
  );
}
