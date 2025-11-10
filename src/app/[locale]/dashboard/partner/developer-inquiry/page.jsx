'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import StatsCard from '@/components/dashboard/admin/StatsCard';
import {
  MessageSquare,
  Search,
  Filter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Building2,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  MoreVertical,
  Eye,
  Send,
  Archive,
} from 'lucide-react';

// Lazy load Pagination component
const Pagination = dynamic(() => import('@/components/dashboard/Pagination'), {
  ssr: false,
});

/**
 * Developer Inquiry Page
 * Production-grade component for managing developer inquiries and messages
 * Following SOLID principles, optimized for performance and accessibility
 */
export default function DeveloperInquiryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Mock data - Memoized to prevent recreation on every render
  const inquiries = useMemo(
    () => [
      {
        id: 1,
        name: 'Jean Baptiste',
        email: 'jean.baptiste@email.com',
        phone: '+225 07 08 09 10 11',
        project: 'Luxury Residence Complex',
        subject: 'Investment Opportunity',
        message:
          'I am interested in learning more about investment opportunities in your luxury residence complex. Could you provide more details about pricing and payment plans?',
        date: '2024-11-09',
        status: 'new',
        priority: 'high',
        location: 'Cocody, Abidjan',
      },
      {
        id: 2,
        name: 'Marie Koné',
        email: 'marie.kone@email.com',
        phone: '+225 01 02 03 04 05',
        project: 'Modern Villas Estate',
        subject: 'Partnership Inquiry',
        message:
          'We are a construction company looking to partner on your modern villas estate project. Would love to discuss collaboration opportunities.',
        date: '2024-11-08',
        status: 'pending',
        priority: 'medium',
        location: 'Plateau, Abidjan',
      },
      {
        id: 3,
        name: 'Paul Diarra',
        email: 'paul.diarra@email.com',
        phone: '+225 05 06 07 08 09',
        project: 'Waterfront Apartments',
        subject: 'Unit Availability',
        message:
          'Are there any units still available in the Waterfront Apartments? I am looking for a 3-bedroom unit with a view.',
        date: '2024-11-07',
        status: 'resolved',
        priority: 'low',
        location: 'Marcory, Abidjan',
      },
      {
        id: 4,
        name: 'Sophie Traoré',
        email: 'sophie.traore@email.com',
        phone: '+225 09 10 11 12 13',
        project: 'Garden Heights',
        subject: 'Site Visit Request',
        message:
          'I would like to schedule a site visit to the Garden Heights development. What days are available this week?',
        date: '2024-11-09',
        status: 'new',
        priority: 'high',
        location: 'Yopougon, Abidjan',
      },
      {
        id: 5,
        name: 'Ibrahim Diaby',
        email: 'ibrahim.diaby@email.com',
        phone: '+225 02 03 04 05 06',
        project: 'Luxury Residence Complex',
        subject: 'Financing Options',
        message:
          'What financing options do you offer for international buyers? I am currently based in Paris.',
        date: '2024-11-06',
        status: 'pending',
        priority: 'medium',
        location: 'Paris, France',
      },
      {
        id: 6,
        name: 'Fatou Camara',
        email: 'fatou.camara@email.com',
        phone: '+225 03 04 05 06 07',
        project: 'Skyline Towers',
        subject: 'Bulk Purchase Inquiry',
        message:
          'We are interested in purchasing multiple units for corporate housing. Can we discuss volume discounts?',
        date: '2024-11-05',
        status: 'new',
        priority: 'high',
        location: 'Cocody, Abidjan',
      },
      {
        id: 7,
        name: 'Ahmed Sesay',
        email: 'ahmed.sesay@email.com',
        phone: '+225 04 05 06 07 08',
        project: 'Palm Gardens',
        subject: 'Amenities Question',
        message:
          'What amenities are included in the Palm Gardens development? Is there a gym and swimming pool?',
        date: '2024-11-04',
        status: 'resolved',
        priority: 'low',
        location: 'Bingerville',
      },
      {
        id: 8,
        name: 'Aicha Sanogo',
        email: 'aicha.sanogo@email.com',
        phone: '+225 05 06 07 08 09',
        project: 'Coastal View Residences',
        subject: 'Maintenance Fees',
        message:
          'Could you provide information about the monthly maintenance fees for Coastal View Residences?',
        date: '2024-11-03',
        status: 'pending',
        priority: 'medium',
        location: 'Grand-Bassam',
      },
      {
        id: 9,
        name: 'Mamadou Toure',
        email: 'mamadou.toure@email.com',
        phone: '+225 06 07 08 09 10',
        project: 'Urban Living Complex',
        subject: 'Completion Date',
        message:
          'When is the expected completion date for the Urban Living Complex? I need to plan my relocation.',
        date: '2024-11-02',
        status: 'resolved',
        priority: 'medium',
        location: 'Treichville, Abidjan',
      },
      {
        id: 10,
        name: 'Aminata Bamba',
        email: 'aminata.bamba@email.com',
        phone: '+225 07 08 09 10 11',
        project: 'Green Valley Estates',
        subject: 'Parking Availability',
        message:
          'How many parking spaces are allocated per unit in Green Valley Estates? I have two vehicles.',
        date: '2024-11-01',
        status: 'new',
        priority: 'low',
        location: 'Anyama',
      },
      {
        id: 11,
        name: 'Youssouf Dao',
        email: 'youssouf.dao@email.com',
        phone: '+225 08 09 10 11 12',
        project: 'Executive Suites',
        subject: 'Customization Options',
        message:
          'Are there any customization options available for interior finishes in the Executive Suites?',
        date: '2024-10-31',
        status: 'pending',
        priority: 'high',
        location: 'Plateau, Abidjan',
      },
      {
        id: 12,
        name: 'Salimata Kone',
        email: 'salimata.kone@email.com',
        phone: '+225 09 10 11 12 13',
        project: 'Modern Villas Estate',
        subject: 'Security Features',
        message:
          'What security features are included in the Modern Villas Estate? Is there 24/7 security?',
        date: '2024-10-30',
        status: 'closed',
        priority: 'medium',
        location: 'Plateau, Abidjan',
      },
    ],
    []
  );

  const stats = [
    {
      title: 'Total Inquiries',
      value: 48,
      trend: '+8 this week',
      variant: 'primary',
    },
    {
      title: 'New Inquiries',
      value: 12,
      trend: '+4 today',
      variant: 'success',
    },
    {
      title: 'Pending',
      value: 15,
      trend: '-3 this week',
      variant: 'info',
    },
    {
      title: 'Resolved',
      value: 21,
      trend: '+7 this week',
      variant: 'warning',
    },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      new: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        icon: AlertCircle,
        label: 'New',
      },
      pending: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        icon: Clock,
        label: 'Pending',
      },
      resolved: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        icon: CheckCircle,
        label: 'Resolved',
      },
      closed: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        icon: XCircle,
        label: 'Closed',
      },
    };

    const config = statusConfig[status] || statusConfig.new;
    const Icon = config.icon;

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
      >
        <Icon className='h-3.5 w-3.5' aria-hidden='true' />
        {config.label}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      high: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: 'High',
      },
      medium: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        label: 'Medium',
      },
      low: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        label: 'Low',
      },
    };

    const config = priorityConfig[priority] || priorityConfig.medium;

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
      >
        {config.label}
      </span>
    );
  };

  // Filter inquiries based on search and status
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inquiry) => {
      const matchesSearch =
        searchQuery === '' ||
        inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.project.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter =
        filterStatus === 'all' || inquiry.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [inquiries, searchQuery, filterStatus]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInquiries = filteredInquiries.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value) => {
    setFilterStatus(value);
    setCurrentPage(1);
  };

  return (
    <div className='space-y-6'>
      {/* Page Header */}
      <div className='rounded-lg bg-white p-6 shadow-sm border border-gray-200'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              Developer Inquiry
            </h1>
            <p className='mt-2 text-sm text-gray-600'>
              Manage and respond to developer inquiries and customer messages
            </p>
          </div>
          <button
            className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#E6B325] px-4 py-2.5 text-sm font-medium text-[#0F1B2E] transition-colors hover:bg-[#d4a520] focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:ring-offset-2'
            aria-label='Compose new message'
          >
            <Mail className='h-4 w-4' aria-hidden='true' />
            Compose Message
          </button>
        </div>
      </div>

      {/* Stats Grid - Using Admin StatsCard */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            variant={stat.variant}
          />
        ))}
      </div>

      {/* Inquiries Table */}
      <div className='rounded-lg bg-white shadow-sm border border-gray-200'>
        <div className='border-b border-gray-200 p-6'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <h2 className='text-lg font-semibold text-gray-900'>
              All Inquiries
            </h2>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
              {/* Search */}
              <div className='relative flex-1 sm:w-64'>
                <Search
                  className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400'
                  aria-hidden='true'
                />
                <input
                  type='text'
                  placeholder='Search inquiries...'
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className='w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm transition-colors focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]'
                  aria-label='Search inquiries'
                />
              </div>

              {/* Filter */}
              <div className='relative'>
                <Filter
                  className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400'
                  aria-hidden='true'
                />
                <select
                  value={filterStatus}
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className='w-full appearance-none rounded-lg border border-gray-300 py-2 pl-10 pr-10 text-sm transition-colors focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325] sm:w-auto'
                  aria-label='Filter by status'
                >
                  <option value='all'>All Status</option>
                  <option value='new'>New</option>
                  <option value='pending'>Pending</option>
                  <option value='resolved'>Resolved</option>
                  <option value='closed'>Closed</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className='hidden overflow-x-auto lg:block'>
          <table className='w-full'>
            <thead className='bg-gray-50 border-b border-gray-200'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Contact
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Project
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Subject
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Date
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Priority
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Status
                </th>
                <th className='px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {currentInquiries.map((inquiry) => (
                <tr
                  key={inquiry.id}
                  className='transition-colors hover:bg-gray-50 cursor-pointer'
                  onClick={() => setSelectedInquiry(inquiry)}
                >
                  <td className='px-6 py-4'>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-2'>
                        <User className='h-4 w-4 text-gray-400' />
                        <span className='font-medium text-gray-900'>
                          {inquiry.name}
                        </span>
                      </div>
                      <div className='flex items-center gap-1 text-xs text-gray-500'>
                        <Mail className='h-3 w-3' />
                        {inquiry.email}
                      </div>
                      <div className='flex items-center gap-1 text-xs text-gray-500'>
                        <Phone className='h-3 w-3' />
                        {inquiry.phone}
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-2'>
                      <Building2 className='h-4 w-4 text-gray-400' />
                      <span className='text-sm text-gray-900'>
                        {inquiry.project}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='text-sm font-medium text-gray-900'>
                      {inquiry.subject}
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-1 text-sm text-gray-600'>
                      <Calendar className='h-3.5 w-3.5 text-gray-400' />
                      {new Date(inquiry.date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    {getPriorityBadge(inquiry.priority)}
                  </td>
                  <td className='px-6 py-4'>
                    {getStatusBadge(inquiry.status)}
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center justify-end gap-2'>
                      <button
                        className='rounded p-1.5 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#E6B325]'
                        title='View inquiry'
                        aria-label='View inquiry'
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedInquiry(inquiry);
                        }}
                      >
                        <Eye className='h-4 w-4 text-gray-600' />
                      </button>
                      <button
                        className='rounded p-1.5 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#E6B325]'
                        title='Reply'
                        aria-label='Reply to inquiry'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Send className='h-4 w-4 text-[#E6B325]' />
                      </button>
                      <button
                        className='rounded p-1.5 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500'
                        title='Archive'
                        aria-label='Archive inquiry'
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Archive className='h-4 w-4 text-gray-600' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className='divide-y divide-gray-200 lg:hidden'>
          {currentInquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className='p-4 transition-colors hover:bg-gray-50 cursor-pointer'
              onClick={() => setSelectedInquiry(inquiry)}
            >
              <div className='flex items-start justify-between mb-3'>
                <div className='flex-1'>
                  <div className='flex items-center gap-2 mb-1'>
                    <User className='h-4 w-4 text-gray-400' />
                    <h3 className='font-medium text-gray-900'>
                      {inquiry.name}
                    </h3>
                  </div>
                  <p className='text-sm font-medium text-gray-700 mb-1'>
                    {inquiry.subject}
                  </p>
                  <p className='text-xs text-gray-500'>{inquiry.project}</p>
                </div>
                <button
                  className='rounded p-1.5 transition-colors hover:bg-gray-100'
                  aria-label='More options'
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreVertical className='h-4 w-4 text-gray-600' />
                </button>
              </div>

              <div className='mb-3 space-y-2'>
                <div className='flex items-center gap-2 text-xs text-gray-600'>
                  <Mail className='h-3 w-3 text-gray-400' />
                  <span className='truncate'>{inquiry.email}</span>
                </div>
                <div className='flex items-center gap-2 text-xs text-gray-600'>
                  <Phone className='h-3 w-3 text-gray-400' />
                  {inquiry.phone}
                </div>
                <div className='flex items-center gap-2 text-xs text-gray-600'>
                  <Calendar className='h-3 w-3 text-gray-400' />
                  {new Date(inquiry.date).toLocaleDateString()}
                </div>
              </div>

              <div className='flex items-center justify-between flex-wrap gap-2'>
                <div className='flex items-center gap-2'>
                  {getPriorityBadge(inquiry.priority)}
                  {getStatusBadge(inquiry.status)}
                </div>
                <div className='flex items-center gap-2'>
                  <button
                    className='rounded p-1.5 transition-colors hover:bg-gray-100'
                    title='View'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye className='h-4 w-4 text-gray-600' />
                  </button>
                  <button
                    className='rounded p-1.5 transition-colors hover:bg-gray-100'
                    title='Reply'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Send className='h-4 w-4 text-[#E6B325]' />
                  </button>
                  <button
                    className='rounded p-1.5 transition-colors hover:bg-gray-100'
                    title='Archive'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Archive className='h-4 w-4 text-gray-600' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentInquiries.length === 0 && (
          <div className='px-6 py-12 text-center'>
            <MessageSquare className='mx-auto h-12 w-12 text-gray-300' />
            <h3 className='mt-3 text-sm font-medium text-gray-900'>
              No inquiries found
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              {searchQuery || filterStatus !== 'all'
                ? 'Try adjusting your search or filters'
                : 'No inquiries have been received yet'}
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredInquiries.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredInquiries.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            translations={{
              showing: 'Showing',
              to: 'to',
              of: 'of',
              results: 'inquiries',
              previous: 'Previous',
              next: 'Next',
            }}
          />
        )}
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className='max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-xl'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='sticky top-0 flex items-center justify-between border-b border-gray-200 bg-white p-6'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900'>
                  {selectedInquiry.subject}
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  {selectedInquiry.project}
                </p>
              </div>
              <button
                onClick={() => setSelectedInquiry(null)}
                className='rounded-lg p-2 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#E6B325]'
                aria-label='Close modal'
              >
                <XCircle className='h-5 w-5 text-gray-500' />
              </button>
            </div>

            <div className='p-6 space-y-6'>
              {/* Contact Information */}
              <div className='rounded-lg border border-gray-200 p-4'>
                <h4 className='mb-3 text-sm font-semibold text-gray-900'>
                  Contact Information
                </h4>
                <div className='space-y-2'>
                  <div className='flex items-center gap-2 text-sm'>
                    <User className='h-4 w-4 text-gray-400' />
                    <span className='font-medium text-gray-900'>
                      {selectedInquiry.name}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <Mail className='h-4 w-4 text-gray-400' />
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className='hover:text-[#E6B325] hover:underline'
                    >
                      {selectedInquiry.email}
                    </a>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <Phone className='h-4 w-4 text-gray-400' />
                    <a
                      href={`tel:${selectedInquiry.phone}`}
                      className='hover:text-[#E6B325] hover:underline'
                    >
                      {selectedInquiry.phone}
                    </a>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-gray-600'>
                    <MapPin className='h-4 w-4 text-gray-400' />
                    {selectedInquiry.location}
                  </div>
                </div>
              </div>

              {/* Inquiry Details */}
              <div>
                <h4 className='mb-2 text-sm font-semibold text-gray-900'>
                  Message
                </h4>
                <p className='text-sm leading-relaxed text-gray-700'>
                  {selectedInquiry.message}
                </p>
              </div>

              {/* Metadata */}
              <div className='flex flex-wrap items-center gap-3'>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Calendar className='h-4 w-4 text-gray-400' />
                  {new Date(selectedInquiry.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                {getPriorityBadge(selectedInquiry.priority)}
                {getStatusBadge(selectedInquiry.status)}
              </div>

              {/* Actions */}
              <div className='flex flex-col gap-3 sm:flex-row'>
                <button className='flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#E6B325] px-4 py-2.5 text-sm font-medium text-[#0F1B2E] transition-colors hover:bg-[#d4a520] focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:ring-offset-2'>
                  <Send className='h-4 w-4' />
                  Reply to Inquiry
                </button>
                <button className='flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:ring-offset-2'>
                  <Archive className='h-4 w-4' />
                  Archive
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
