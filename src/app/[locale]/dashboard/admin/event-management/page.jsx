'use client';

import { use, useState, useMemo } from 'react';
import { useTranslation } from '@/i18n';
import Image from 'next/image';
import {
  Calendar,
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  MapPin,
  Users,
  Clock,
  Eye,
} from 'lucide-react';

export default function EventManagement({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);

  // State for filters and search
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock events data - In production, fetch from API
  const eventsData = useMemo(
    () => [
      {
        id: 1,
        title: 'Q Global Living Investment Summit',
        type: 'summit',
        date: '2023-12-15',
        time: '09:00 AM',
        location: 'Le Plateau, Abidjan',
        status: 'upcoming',
        capacity: 200,
        registered: 156,
        image: '/investment-summit.jpg',
      },
      {
        id: 2,
        title: 'Property Showcase 2024',
        type: 'showcase',
        date: '2024-01-20',
        time: '10:00 AM',
        location: 'Cocody, Abidjan',
        status: 'draft',
        capacity: 150,
        registered: 0,
        image: '/property-showcase.jpg',
      },
      {
        id: 3,
        title: 'Real Estate Workshop',
        type: 'workshop',
        date: '2023-11-30',
        time: '02:00 PM',
        location: 'Riviera, Abidjan',
        status: 'ongoing',
        capacity: 50,
        registered: 47,
        image: '/workshop.jpg',
      },
      // Add more events as needed
    ],
    []
  );

  // Filter events based on search and status
  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        filterStatus === 'all' || event.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [eventsData, searchQuery, filterStatus]);

  // Status badge styles - Using consistent color scheme
  const getStatusStyle = (status) => {
    const styles = {
      upcoming: 'bg-blue-100 text-blue-800',
      ongoing: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800',
      draft: 'bg-yellow-100 text-yellow-800',
      cancelled: 'bg-red-100 text-red-800',
    };
    return styles[status] || styles.draft;
  };

  return (
    <div className='space-y-6'>
      {/* Page Header */}
      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h1 className='text-2xl font-bold text-gray-900'>
              {t('dashboard.pages.eventManagement.title')}
            </h1>
            <p className='mt-1 text-sm text-gray-600'>
              {t('dashboard.pages.eventManagement.subtitle')}
            </p>
          </div>
          <button
            type='button'
            className='inline-flex items-center justify-center gap-2 rounded-lg bg-[#E6B325] px-4 py-2.5 text-sm font-semibold text-[#0F1B2E] transition-colors hover:bg-[#d4a520]'
          >
            <Plus className='h-5 w-5' />
            {t('dashboard.pages.eventManagement.createEvent')}
          </button>
        </div>
      </div>
      {/* Filters Section */}
      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          {/* Search Bar */}
          <div className='relative flex-1 sm:max-w-md'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <Search className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='search'
              className='block w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20'
              placeholder={t(
                'dashboard.pages.eventManagement.searchPlaceholder'
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className='rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20'
          >
            <option value='all'>
              {t('dashboard.pages.eventManagement.filters.all')}
            </option>
            <option value='upcoming'>
              {t('dashboard.pages.eventManagement.filters.upcoming')}
            </option>
            <option value='ongoing'>
              {t('dashboard.pages.eventManagement.filters.ongoing')}
            </option>
            <option value='completed'>
              {t('dashboard.pages.eventManagement.filters.completed')}
            </option>
            <option value='draft'>
              {t('dashboard.pages.eventManagement.filters.draft')}
            </option>
            <option value='cancelled'>
              {t('dashboard.pages.eventManagement.filters.cancelled')}
            </option>
          </select>
        </div>
      </div>

      {/* Events Grid */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className='group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md'
          >
            {/* Event Image */}
            <div className='relative aspect-video overflow-hidden bg-gray-100'>
              <Image
                src={event.image}
                alt={event.title}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                priority={event.status === 'upcoming'}
              />
            </div>

            {/* Event Content */}
            <div className='p-5'>
              {/* Title and Menu */}
              <div className='mb-3 flex items-start justify-between gap-2'>
                <div className='min-w-0 flex-1'>
                  <h3 className='truncate text-base font-semibold text-gray-900'>
                    {event.title}
                  </h3>
                  <p className='mt-1 text-sm capitalize text-gray-500'>
                    {event.type}
                  </p>
                </div>
                <button
                  type='button'
                  className='shrink-0 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600'
                  aria-label='More options'
                >
                  <MoreVertical className='h-5 w-5' />
                </button>
              </div>

              {/* Event Details */}
              <div className='mb-4 space-y-2'>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Clock className='h-4 w-4 shrink-0' />
                  <span className='truncate'>
                    {event.date} at {event.time}
                  </span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <MapPin className='h-4 w-4 shrink-0' />
                  <span className='truncate'>{event.location}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Users className='h-4 w-4 shrink-0' />
                  <span>
                    {event.registered} / {event.capacity}{' '}
                    {t('dashboard.pages.eventManagement.registered')}
                  </span>
                </div>
              </div>

              {/* Status and Actions */}
              <div className='flex items-center justify-between border-t border-gray-100 pt-4'>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${getStatusStyle(
                    event.status
                  )}`}
                >
                  {t(`dashboard.pages.eventManagement.status.${event.status}`)}
                </span>

                {/* Action Buttons */}
                <div className='flex items-center gap-1'>
                  <button
                    type='button'
                    className='rounded p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-blue-600'
                    aria-label='View event'
                  >
                    <Eye className='h-4 w-4' />
                  </button>
                  <button
                    type='button'
                    className='rounded p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600'
                    aria-label='Edit event'
                  >
                    <Edit className='h-4 w-4' />
                  </button>
                  <button
                    type='button'
                    className='rounded p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600'
                    aria-label='Delete event'
                  >
                    <Trash2 className='h-4 w-4' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className='rounded-lg bg-white p-12 shadow-sm'>
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='rounded-full bg-gray-100 p-6'>
              <Calendar className='h-12 w-12 text-gray-400' />
            </div>
            <h3 className='mt-6 text-lg font-semibold text-gray-900'>
              {t('dashboard.pages.eventManagement.noEvents')}
            </h3>
            <p className='mt-2 text-sm text-gray-500'>
              {t('dashboard.pages.eventManagement.noEventsDescription')}
            </p>
            <button
              type='button'
              className='mt-6 inline-flex items-center gap-2 rounded-lg bg-[#E6B325] px-5 py-2.5 text-sm font-semibold text-[#0F1B2E] transition-colors hover:bg-[#d4a520]'
            >
              <Plus className='h-5 w-5' />
              {t('dashboard.pages.eventManagement.createFirstEvent')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
