"use client";

import React, { useMemo, useState, useEffect } from 'react';
import { Eye, Edit, Trash2, Calendar, Clock } from 'lucide-react';
import Pagination from '../Pagination';

export default function AppointmentsTable({
  appointments = [],
  onView,
  onEdit,
  onDelete,
  onStatusChange,
  translations = {},
  query = '',
  onQueryChange,
}) {
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const getStatusStyles = (status) => {
    const styles = {
      confirmed: 'bg-green-50 text-green-700 border-green-200',
      pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      completed: 'bg-blue-50 text-blue-700 border-blue-200',
      cancelled: 'bg-red-50 text-red-700 border-red-200',
    };
    return styles[(status || '').toLowerCase()] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  const getStatusDot = (status) => {
    const colors = {
      confirmed: 'bg-green-500',
      pending: 'bg-yellow-500',
      completed: 'bg-blue-500',
      cancelled: 'bg-red-500',
    };
    return colors[(status || '').toLowerCase()] || 'bg-gray-400';
  };

  // 🔹 Filter appointments by query
  const filtered = useMemo(() => {
    const q = (query || '').trim().toLowerCase();
    if (!q) return appointments;
    return appointments.filter((apt) =>
      String(apt.full_name || '').toLowerCase().includes(q) ||
      String(apt.email || '').toLowerCase().includes(q) ||
      String(apt.appointment_type || '').toLowerCase().includes(q) ||
      String(apt.preferred_date || '').toLowerCase().includes(q)
    );
  }, [appointments, query]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pageItems = filtered.slice(start, end);

  useEffect(() => {
    if (page !== 1) setPage(1);
  }, [query, filtered.length]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {['ID', 'Name', 'Email', 'Type', 'Date', 'Status', 'Actions'].map((h) => (
                <th
                  key={h}
                  className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {pageItems.length > 0 ? (
              pageItems.map((apt) => (
                <tr key={apt.id} className="transition-colors hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{apt.id}</p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">{apt.full_name}</p>
                  </td>

                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">{apt.email}</p>
                  </td>

                  <td className="px-6 py-4 text-gray-700">{apt.appointment_type}</td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {apt.preferred_date
                            ? new Date(apt.preferred_date).toLocaleDateString('en-US')
                            : '-'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-4 w-4" />
                        <span>{apt.preferred_time || '-'}</span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyles(
                        apt.status
                      )}`}
                    >
                      <span className={`h-2 w-2 rounded-full ${getStatusDot(apt.status)}`} />
                      {apt.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onView?.(apt.id)}
                        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        title={translations?.table?.view || 'View'}
                        aria-label={`${translations?.table?.view || 'View'} ${apt.full_name}`}
                      >
                        <Eye className="h-4 w-4 text-gray-600" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onEdit?.(apt.id)}
                        className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                        title={translations?.table?.edit || 'Edit'}
                        aria-label={`${translations?.table?.edit || 'Edit'} ${apt.full_name}`}
                      >
                        <Edit className="h-4 w-4 text-blue-600" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete?.(apt.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 transition-colors duration-200"
                        title={translations?.table?.delete || 'Delete'}
                        aria-label={`${translations?.table?.delete || 'Delete'} ${apt.full_name}`}
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                  No appointments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        totalItems={total}
        itemsPerPage={pageSize}
        onPageChange={(p) => setPage(p)}
        translations={
          translations.pagination || {
            showing: 'Showing',
            to: 'to',
            of: 'of',
            results: 'results',
            previous: 'Previous',
            next: 'Next',
          }
        }
      />
    </div>
  );
}
