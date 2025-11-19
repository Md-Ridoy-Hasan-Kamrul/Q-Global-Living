'use client';

import { use, useState, useMemo, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { useTranslation } from '@/i18n';
import UserFilters from '@/components/dashboard/admin/UserFilters';
import UsersTable from '@/components/dashboard/admin/UsersTable';
import Pagination from '@/components/dashboard/Pagination';

export default function AdminUsersPage({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const itemsPerPage = 5;

  // Mock data - 100 users for realistic pagination
  const allUsers = useMemo(() => {
    const users = [];
    const names = [
      'Alima Kouassi',
      'Yao Konan',
      'Fatou Diallo',
      'Moussa Traoré',
      'Aya Cissé',
      'Kwame Mensah',
      'Aminata Sow',
      'Ibrahim Kamara',
      'Mariama Keita',
      'Jean Dupont',
      'Sophie Martin',
      'Ahmed Hassan',
      'Nadia Benali',
      'Pierre Laurent',
      'Fatoumata Ba',
      'Omar Sy',
      'Aisha Johnson',
      'Mohamed Ali',
      'Grace Owusu',
      'Samuel Osei',
    ];
    const roles = [
      'buyer',
      'developer',
      'concierge',
      'admin',
      'partner',
      'agent',
    ];
    const statuses = ['active', 'inactive', 'suspended', 'pending'];

    for (let i = 1; i <= 100; i++) {
      const name = names[(i - 1) % names.length];
      const role = roles[i % roles.length];
      const status =
        i % 15 === 0
          ? 'suspended'
          : i % 10 === 0
          ? 'pending'
          : i % 8 === 0
          ? 'inactive'
          : 'active';
      const monthIndex = i % 12;
      const dayIndex = ((i * 7) % 28) + 1;

      users.push({
        id: i,
        userId: `U-${String(i).padStart(5, '0')}`,
        name: `${name} ${i > 20 ? i : ''}`,
        email: `${name.toLowerCase().replace(' ', '.')}${i > 20 ? i : ''}@${
          role === 'developer' ? 'construct.ci' : 'example.com'
        }`,
        role: role,
        roleLabel: t(`dashboard.admin.users.roles.${role}`),
        status: status,
        statusLabel: t(`dashboard.admin.users.statuses.${status}`),
        registrationDate: new Date(2022, monthIndex, dayIndex)
          .toISOString()
          .split('T')[0],
      });
    }
    return users;
  }, [t]);

  // Filter and search logic
  const filteredUsers = useMemo(() => {
    return allUsers.filter((user) => {
      const matchesSearch =
        searchTerm === '' ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.userId.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || user.status === statusFilter;
      const matchesRole = roleFilter === 'all' || user.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [allUsers, searchTerm, statusFilter, roleFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  }, [filteredUsers, currentPage, itemsPerPage]);

  // Reset to page 1 when filters change
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, []);

  const handleStatusChange = useCallback((value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  }, []);

  const handleRoleChange = useCallback((value) => {
    setRoleFilter(value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleActionClick = useCallback((action, user) => {
    // In production, implement actual actions
    console.log(`Action: ${action} on user:`, user);
  }, []);

  // Get translations object for components
  const userTranslations = useMemo(() => {
    return {
      filters: {
        status: t('dashboard.admin.users.filters.status'),
        statusAll: t('dashboard.admin.users.filters.statusAll'),
        role: t('dashboard.admin.users.filters.role'),
        roleAll: t('dashboard.admin.users.filters.roleAll'),
        lastActivity: t('dashboard.admin.users.filters.lastActivity'),
        last: t('dashboard.admin.users.filters.last'),
        days: t('dashboard.admin.users.filters.days'),
      },
      table: {
        userId: t('dashboard.admin.users.table.userId'),
        name: t('dashboard.admin.users.table.name'),
        email: t('dashboard.admin.users.table.email'),
        role: t('dashboard.admin.users.table.role'),
        registrationDate: t('dashboard.admin.users.table.registrationDate'),
        status: t('dashboard.admin.users.table.status'),
        actions: t('dashboard.admin.users.table.actions'),
      },
      roles: {
        buyer: t('dashboard.admin.users.roles.buyer'),
        developer: t('dashboard.admin.users.roles.developer'),
        concierge: t('dashboard.admin.users.roles.concierge'),
        admin: t('dashboard.admin.users.roles.admin'),
        partner: t('dashboard.admin.users.roles.partner'),
        agent: t('dashboard.admin.users.roles.agent'),
      },
      statuses: {
        active: t('dashboard.admin.users.statuses.active'),
        inactive: t('dashboard.admin.users.statuses.inactive'),
        suspended: t('dashboard.admin.users.statuses.suspended'),
        pending: t('dashboard.admin.users.statuses.pending'),
      },
      actions: {
        view: t('dashboard.admin.users.actions.view'),
        edit: t('dashboard.admin.users.actions.edit'),
        suspend: t('dashboard.admin.users.actions.suspend'),
        activate: t('dashboard.admin.users.actions.activate'),
        delete: t('dashboard.admin.users.actions.delete'),
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

  return (
    <div className='space-y-6'>
      {/* Page Header */}
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
            {t('dashboard.admin.users.title')}
          </h1>
        </div>
        <button className='flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md active:scale-95'>
          <Plus className='h-4 w-4' />
          {t('dashboard.admin.users.addUser')}
        </button>
      </div>

      {/* Filters */}
      <UserFilters
        searchPlaceholder={t('dashboard.admin.users.searchPlaceholder')}
        onSearchChange={handleSearchChange}
        onStatusChange={handleStatusChange}
        onRoleChange={handleRoleChange}
        translations={userTranslations}
      />

      {/* Users Table with Pagination */}
      <div className='rounded-lg bg-white shadow-sm overflow-hidden'>
        <UsersTable
          users={paginatedUsers}
          translations={userTranslations}
          onActionClick={handleActionClick}
        />
        {filteredUsers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredUsers.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            translations={paginationTranslations}
          />
        )}
      </div>
    </div>
  );
}
