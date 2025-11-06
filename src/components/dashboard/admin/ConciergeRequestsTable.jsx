'use client';

import { memo } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Calendar,
  User,
} from 'lucide-react';

const ConciergeRequestsTable = memo(({ requests, translations }) => {
  const getStatusBadge = (status) => {
    const badges = {
      pending: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        icon: Clock,
        label: translations.status.pending,
      },
      'in-progress': {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        icon: AlertCircle,
        label: translations.status.inProgress,
      },
      completed: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        icon: CheckCircle,
        label: translations.status.completed,
      },
      cancelled: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        icon: XCircle,
        label: translations.status.cancelled,
      },
    };

    const badge = badges[status] || badges.pending;
    const Icon = badge.icon;

    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}
      >
        <Icon className='h-3.5 w-3.5' />
        {badge.label}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      high: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: translations.priority.high,
      },
      medium: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        label: translations.priority.medium,
      },
      low: {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        label: translations.priority.low,
      },
    };

    const badge = badges[priority] || badges.medium;

    return (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}
      >
        {badge.label}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div>
      {/* Desktop Table */}
      <div className='hidden lg:block overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b border-gray-200'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {translations.table.requestId}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {translations.table.client}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {translations.table.service}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {translations.table.property}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {translations.table.priority}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {translations.table.status}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {translations.table.requestDate}
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                {translations.table.actions}
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {requests.map((request) => (
              <tr
                key={request.id}
                className='hover:bg-gray-50 transition-colors'
              >
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm font-medium text-gray-900'>
                    #{request.id.toString().padStart(4, '0')}
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex flex-col'>
                    <div className='text-sm font-medium text-gray-900'>
                      {request.client_name}
                    </div>
                    <div className='text-xs text-gray-500 flex items-center gap-1 mt-0.5'>
                      <Mail className='h-3 w-3' />
                      {request.client_email}
                    </div>
                    {request.client_phone && (
                      <div className='text-xs text-gray-500 flex items-center gap-1 mt-0.5'>
                        <Phone className='h-3 w-3' />
                        {request.client_phone}
                      </div>
                    )}
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <div className='text-sm text-gray-900'>
                    {request.service_type}
                  </div>
                </td>
                <td className='px-6 py-4'>
                  {request.property_address ? (
                    <div className='flex items-start gap-1 text-sm text-gray-600'>
                      <MapPin className='h-4 w-4 shrink-0 mt-0.5' />
                      <span className='line-clamp-2'>
                        {request.property_address}
                      </span>
                    </div>
                  ) : (
                    <span className='text-sm text-gray-400'>N/A</span>
                  )}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {getPriorityBadge(request.priority)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {getStatusBadge(request.status)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center gap-1.5 text-sm text-gray-600'>
                    <Calendar className='h-4 w-4' />
                    {formatDate(request.created_at)}
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center gap-2'>
                    <button
                      className='p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'
                      title={translations.table.view}
                    >
                      <Eye className='h-4 w-4' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className='lg:hidden space-y-4'>
        {requests.map((request) => (
          <div
            key={request.id}
            className='bg-white border border-gray-200 rounded-lg p-4 space-y-3'
          >
            {/* Header */}
            <div className='flex items-start justify-between'>
              <div className='flex-1'>
                <div className='text-sm font-semibold text-gray-900'>
                  #{request.id.toString().padStart(4, '0')}
                </div>
                <div className='text-sm font-medium text-gray-700 mt-1'>
                  {request.service_type}
                </div>
              </div>
              <div className='flex flex-col items-end gap-1.5'>
                {getStatusBadge(request.status)}
                {getPriorityBadge(request.priority)}
              </div>
            </div>

            {/* Client Info */}
            <div className='space-y-1.5 pt-2 border-t border-gray-100'>
              <div className='flex items-center gap-2 text-sm'>
                <User className='h-4 w-4 text-gray-400 shrink-0' />
                <span className='font-medium text-gray-900'>
                  {request.client_name}
                </span>
              </div>
              <div className='flex items-center gap-2 text-sm text-gray-600'>
                <Mail className='h-4 w-4 text-gray-400 shrink-0' />
                <span className='truncate'>{request.client_email}</span>
              </div>
              {request.client_phone && (
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <Phone className='h-4 w-4 text-gray-400 shrink-0' />
                  <span>{request.client_phone}</span>
                </div>
              )}
            </div>

            {/* Property */}
            {request.property_address && (
              <div className='flex items-start gap-2 text-sm text-gray-600 pt-2 border-t border-gray-100'>
                <MapPin className='h-4 w-4 text-gray-400 shrink-0 mt-0.5' />
                <span className='line-clamp-2'>{request.property_address}</span>
              </div>
            )}

            {/* Footer */}
            <div className='flex items-center justify-between pt-2 border-t border-gray-100'>
              <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                <Calendar className='h-3.5 w-3.5' />
                {formatDate(request.created_at)}
              </div>
              <button className='px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1.5'>
                <Eye className='h-4 w-4' />
                {translations.table.view}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

ConciergeRequestsTable.displayName = 'ConciergeRequestsTable';

export default ConciergeRequestsTable;
