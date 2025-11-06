'use client';

import { use, useState, useMemo, useCallback } from 'react';
import { useTranslation } from '@/i18n';
import { Users, CheckCircle, Clock, FolderOpen } from 'lucide-react';
import StatsCard from '@/components/dashboard/admin/StatsCard';
import PartnersFilters from '@/components/dashboard/admin/PartnersFilters';
import PartnersTable from '@/components/dashboard/admin/PartnersTable';
import Pagination from '@/components/dashboard/Pagination';

// Mock partners data - deterministic generation based on DB schema
const generateMockPartners = () => {
  const companies = [
    'KOF Builders & Developers',
    'Prime Properties CI',
    'Ivory Coast Realty Group',
    'Coastal Properties Ltd',
    'Urban Living CI',
    'Abidjan Elite Homes',
    'West Africa Construction',
    'Horizon Developments',
    'Prestige Real Estate CI',
    'Modern Living Solutions',
    'Atlantic Coast Builders',
    'Golden Gate Properties',
  ];

  const contactPersons = [
    'Jean-Paul Kouassi',
    'Marie-Claire Diabate',
    'Ibrahim Traore',
    'Sophie Mensah',
    "David N'Guessan",
    'Fatou Diallo',
    'Eric Koffi',
    'Aminata Toure',
    'Laurent Yao',
    'Grace Ouattara',
    'Michel Bamba',
    'Awa Sanogo',
  ];

  const projects = [
    ['Riviera Golf Residences', 'Plateau Business Center'],
    [
      'Cocody Modern Apartments',
      'Marcory Luxury Villas',
      'Yopougon Family Homes',
    ],
    ['Grand-Bassam Beach Resort'],
    ['Abidjan Sky Tower', 'Plateau Office Complex', 'Cocody Commercial Plaza'],
    ['Affordable Housing Project'],
    ['Riviera Palm Villas', 'Angré Premium Residences'],
    ['Industrial Park Yopougon'],
    ['Eco-Friendly Homes Cocody', 'Smart City Development'],
    ['Luxury Beachfront Villas'],
    ['Mixed-Use Development Plateau'],
    ['Coastal Living Complex'],
    ['Golden Residences Marcory', 'Prestige Towers Plateau'],
  ];

  return companies.map((company, index) => ({
    id: index + 1,
    company_name: company,
    contact_person: contactPersons[index],
    email: `${contactPersons[index]
      .toLowerCase()
      .replace(/\s+/g, '.')}@${company.toLowerCase().replace(/\s+/g, '')}.ci`,
    phone_number:
      index % 3 === 0
        ? null
        : `+225 ${String(index + 10).padStart(2, '0')} ${String(
            index + 20
          ).padStart(2, '0')} ${String(index + 30).padStart(2, '0')} ${String(
            index + 40
          ).padStart(2, '0')}`,
    project_names: projects[index],
    package:
      index % 4 === 0 ? 'premium' : index % 3 === 0 ? 'standard' : 'basic',
    documents:
      index % 5 !== 0 ? ['business_license.pdf', 'tax_clearance.pdf'] : [],
    is_verified: index % 3 !== 2,
    is_paid: index % 4 !== 3,
    created_at: new Date(
      Date.now() - index * 15 * 24 * 60 * 60 * 1000
    ).toISOString(),
    updated_at: new Date(
      Date.now() - index * 5 * 24 * 60 * 60 * 1000
    ).toISOString(),
  }));
};

export default function AdminPartnersPage({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);

  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [verificationFilter, setVerificationFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Constants
  const ITEMS_PER_PAGE = 5;

  // Memoized translations
  const partnersTranslations = useMemo(
    () => ({
      title: t('dashboard.admin.partners.title'),
      subtitle: t('dashboard.admin.partners.subtitle'),
      addPartner: t('dashboard.admin.partners.addPartner'),
      searchPlaceholder: t('dashboard.admin.partners.searchPlaceholder'),
      stats: {
        totalPartners: t('dashboard.admin.partners.stats.totalPartners'),
        verified: t('dashboard.admin.partners.stats.verified'),
        pending: t('dashboard.admin.partners.stats.pending'),
        activeProjects: t('dashboard.admin.partners.stats.activeProjects'),
      },
      filters: {
        verification: t('dashboard.admin.partners.filters.verification'),
        payment: t('dashboard.admin.partners.filters.payment'),
        allVerification: t('dashboard.admin.partners.filters.allVerification'),
        allPayment: t('dashboard.admin.partners.filters.allPayment'),
      },
      table: {
        company: t('dashboard.admin.partners.table.company'),
        contact: t('dashboard.admin.partners.table.contact'),
        email: t('dashboard.admin.partners.table.email'),
        phone: t('dashboard.admin.partners.table.phone'),
        projects: t('dashboard.admin.partners.table.projects'),
        verification: t('dashboard.admin.partners.table.verification'),
        payment: t('dashboard.admin.partners.table.payment'),
        actions: t('dashboard.admin.partners.table.actions'),
        view: t('dashboard.admin.partners.table.view'),
        edit: t('dashboard.admin.partners.table.edit'),
        delete: t('dashboard.admin.partners.table.delete'),
        joined: t('dashboard.admin.partners.table.joined'),
      },
      verification: {
        verified: t('dashboard.admin.partners.verification.verified'),
        pending: t('dashboard.admin.partners.verification.pending'),
        rejected: t('dashboard.admin.partners.verification.rejected'),
      },
      payment: {
        paid: t('dashboard.admin.partners.payment.paid'),
        unpaid: t('dashboard.admin.partners.payment.unpaid'),
        partial: t('dashboard.admin.partners.payment.partial'),
      },
    }),
    [t]
  );

  // Mock partners data
  const partners = useMemo(() => generateMockPartners(), []);

  // Calculate stats
  const stats = useMemo(() => {
    const verifiedCount = partners.filter((p) => p.is_verified).length;
    const pendingCount = partners.filter((p) => !p.is_verified).length;
    const totalProjects = partners.reduce(
      (sum, p) => sum + (p.project_names?.length || 0),
      0
    );

    return [
      {
        label: partnersTranslations.stats.totalPartners,
        value: String(partners.length),
        trend: '+8.3%',
        icon: Users,
        variant: 'primary',
      },
      {
        label: partnersTranslations.stats.verified,
        value: String(verifiedCount),
        trend: '+12.5%',
        icon: CheckCircle,
        variant: 'success',
      },
      {
        label: partnersTranslations.stats.pending,
        value: String(pendingCount),
        trend: '-5.2%',
        icon: Clock,
        variant: 'warning',
      },
      {
        label: partnersTranslations.stats.activeProjects,
        value: String(totalProjects),
        trend: '+15.8%',
        icon: FolderOpen,
        variant: 'info',
      },
    ];
  }, [partners, partnersTranslations]);

  // Filter partners
  const filteredPartners = useMemo(() => {
    return partners.filter((partner) => {
      const matchesSearch =
        partner.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.contact_person
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        partner.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesVerification =
        verificationFilter === 'all' ||
        (verificationFilter === 'verified' && partner.is_verified) ||
        (verificationFilter === 'pending' && !partner.is_verified) ||
        (verificationFilter === 'rejected' && false); // No rejected in mock data

      const matchesPayment =
        paymentFilter === 'all' ||
        (paymentFilter === 'paid' && partner.is_paid) ||
        (paymentFilter === 'unpaid' && !partner.is_paid) ||
        (paymentFilter === 'partial' && false); // No partial in mock data

      return matchesSearch && matchesVerification && matchesPayment;
    });
  }, [partners, searchTerm, verificationFilter, paymentFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredPartners.length / ITEMS_PER_PAGE);
  const paginatedPartners = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPartners.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredPartners, currentPage]);

  // Handlers
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page on search
  }, []);

  const handleVerificationChange = useCallback((value) => {
    setVerificationFilter(value);
    setCurrentPage(1); // Reset to first page on filter change
  }, []);

  const handlePaymentChange = useCallback((value) => {
    setPaymentFilter(value);
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
          {partnersTranslations.title}
        </h1>
        <p className='text-sm sm:text-base text-white/80'>
          {partnersTranslations.subtitle}
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
      <PartnersFilters
        searchTerm={searchTerm}
        verificationFilter={verificationFilter}
        paymentFilter={paymentFilter}
        onSearchChange={handleSearchChange}
        onVerificationChange={handleVerificationChange}
        onPaymentChange={handlePaymentChange}
        translations={partnersTranslations}
      />

      {/* Partners Table with Pagination */}
      <div className='rounded-lg bg-white shadow-sm overflow-hidden'>
        <PartnersTable
          partners={paginatedPartners}
          translations={partnersTranslations}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredPartners.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
          translations={paginationTranslations}
        />
      </div>
    </div>
  );
}
