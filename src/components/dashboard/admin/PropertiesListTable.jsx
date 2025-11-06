'use client';

import { memo } from 'react';
import Image from 'next/image';
import { MapPin, Eye, Edit, Trash2 } from 'lucide-react';

const STATUS_BADGE_STYLES = {
  active: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  inactive: 'bg-gray-100 text-gray-700',
};

const PropertiesListTable = memo(({ properties, translations }) => {
  const getStatusBadge = (status) => {
    const badgeStyle =
      STATUS_BADGE_STYLES[status] || 'bg-gray-100 text-gray-700';
    return (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${badgeStyle}`}
      >
        {translations.status[status]}
      </span>
    );
  };

  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b border-gray-200'>
            <tr>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.property}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.location}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.price}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.status}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.views}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.actions}
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {properties.map((property) => (
              <tr
                key={property.id}
                className='hover:bg-gray-50 transition-colors duration-150'
              >
                <td className='px-4 sm:px-6 py-4'>
                  <div className='flex items-center gap-3'>
                    <div className='relative h-12 w-16 shrink-0 rounded overflow-hidden'>
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className='object-cover'
                        sizes='64px'
                      />
                    </div>
                    <div className='min-w-0'>
                      <div className='font-medium text-sm text-gray-900 truncate max-w-xs'>
                        {property.title}
                      </div>
                      <div className='text-xs text-gray-500 mt-0.5'>
                        {property.type} • {property.bedrooms}{' '}
                        {translations.table.beds} • {property.area}m²
                      </div>
                    </div>
                  </div>
                </td>
                <td className='px-4 sm:px-6 py-4'>
                  <div className='flex items-start gap-1 text-xs sm:text-sm text-gray-900 max-w-xs'>
                    <MapPin className='h-4 w-4 text-gray-400 shrink-0 mt-0.5' />
                    <span className='line-clamp-2'>{property.location}</span>
                  </div>
                </td>
                <td className='px-4 sm:px-6 py-4 whitespace-nowrap'>
                  <div className='text-sm font-medium text-gray-900'>
                    ${property.priceUSD.toLocaleString()}
                  </div>
                  <div className='text-xs text-gray-500 mt-0.5'>
                    {property.price.toLocaleString()} FCFA
                  </div>
                </td>
                <td className='px-4 sm:px-6 py-4 whitespace-nowrap'>
                  {getStatusBadge(property.status)}
                </td>
                <td className='px-4 sm:px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center gap-1 text-sm text-gray-900'>
                    <Eye className='h-4 w-4 text-gray-400' />
                    <span>{property.views.toLocaleString()}</span>
                  </div>
                </td>
                <td className='px-4 sm:px-6 py-4 whitespace-nowrap'>
                  <div className='flex items-center gap-2'>
                    <button
                      type='button'
                      className='p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200'
                      title={translations.table.view}
                      aria-label={`${translations.table.view} ${property.title}`}
                    >
                      <Eye className='h-4 w-4 text-gray-600' />
                    </button>
                    <button
                      type='button'
                      className='p-1.5 rounded-lg hover:bg-blue-50 transition-colors duration-200'
                      title={translations.table.edit}
                      aria-label={`${translations.table.edit} ${property.title}`}
                    >
                      <Edit className='h-4 w-4 text-blue-600' />
                    </button>
                    <button
                      type='button'
                      className='p-1.5 rounded-lg hover:bg-red-50 transition-colors duration-200'
                      title={translations.table.delete}
                      aria-label={`${translations.table.delete} ${property.title}`}
                    >
                      <Trash2 className='h-4 w-4 text-red-600' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

PropertiesListTable.displayName = 'PropertiesListTable';

export default PropertiesListTable;
