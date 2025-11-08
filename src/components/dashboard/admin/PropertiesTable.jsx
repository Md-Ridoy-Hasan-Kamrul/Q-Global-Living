'use client';

import Link from 'next/link';
import { Plus } from 'lucide-react';

/**
 * PropertiesTable Component
 * Displays recent properties with status badges and actions
 *
 * @param {Object} props
 * @param {string} props.title - Table title
 * @param {string} props.addButtonText - Add button text
 * @param {Array} props.properties - Property data array
 * @param {Object} props.translations - i18n translations object
 * @param {string} props.locale - Current locale
 */
export default function PropertiesTable({
  title,
  addButtonText,
  properties = [],
  translations,
  locale = 'en',
}) {
  const getStatusStyles = (status) => {
    const styles = {
      approved: 'bg-green-500/10 text-green-600 border-green-500/20',
      pending: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
      rejected: 'bg-red-500/10 text-red-600 border-red-500/20',
    };
    return styles[status.toLowerCase()] || styles.pending;
  };

  const getTypeStyles = (type) => {
    const styles = {
      buy: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      rent: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    };
    return styles[type.toLowerCase()] || styles.buy;
  };

  return (
    <div className='overflow-hidden'>
      {/* Header */}
      <div className='flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 bg-linear-to-r from-[#1e3a5f] to-[#2d5078] px-6 py-4'>
        <h2 className='text-xl font-bold text-white'>{title}</h2>
        <button className='flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md active:scale-95'>
          <Plus className='h-4 w-4' />
          {addButtonText}
        </button>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='w-full min-w-[800px]'>
          <thead className='bg-[#2d4d6a] text-white'>
            <tr>
              <th className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider opacity-90'>
                {translations.table.propertyTitle}
              </th>
              <th className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider opacity-90'>
                {translations.table.type}
              </th>
              <th className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider opacity-90'>
                {translations.table.status}
              </th>
              <th className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider opacity-90'>
                {translations.table.agent}
              </th>
              <th className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider opacity-90'>
                {translations.table.dateAdded}
              </th>
              <th className='px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider opacity-90'>
                {translations.table.actions}
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100 bg-white'>
            {properties.map((property, index) => (
              <tr
                key={property.id || index}
                className='transition-colors hover:bg-gray-50'
              >
                {/* Property Title */}
                <td className='px-6 py-4'>
                  <p className='font-semibold text-gray-900'>
                    {property.title}
                  </p>
                </td>

                {/* Type */}
                <td className='px-6 py-4'>
                  <span
                    className={`
                      inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium
                      ${getTypeStyles(property.type)}
                    `}
                  >
                    {property.typeLabel}
                  </span>
                </td>

                {/* Status */}
                <td className='px-6 py-4'>
                  <span
                    className={`
                      inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium
                      ${getStatusStyles(property.status)}
                    `}
                  >
                    {property.statusLabel}
                  </span>
                </td>

                {/* Agent */}
                <td className='px-6 py-4'>
                  <p className='text-sm text-gray-700'>{property.agent}</p>
                </td>

                {/* Date Added */}
                <td className='px-6 py-4'>
                  <p className='text-sm text-gray-600'>{property.dateAdded}</p>
                </td>

                {/* Actions */}
                <td className='px-6 py-4'>
                  <Link
                    href={`/${locale}/dashboard/admin/properties/${property.id}`}
                    className='font-semibold text-primary transition-colors hover:text-primary/80'
                  >
                    {translations.actions.edit}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {properties.length === 0 && (
        <div className='py-12 text-center'>
          <p className='text-gray-500'>No properties found</p>
        </div>
      )}
    </div>
  );
}
