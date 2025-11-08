'use client';

import { useMemo } from 'react';
import { useTranslation } from '@/i18n';
import { ChevronRight } from 'lucide-react';

export default function AdminPageLayout({
  children,
  title,
  subtitle,
  actions,
  breadcrumbs = [],
  locale,
}) {
  const { t } = useTranslation(locale);

  // Format breadcrumbs with translations
  const formattedBreadcrumbs = useMemo(
    () =>
      breadcrumbs.map((item) => ({
        ...item,
        label: item.translationKey ? t(item.translationKey) : item.label,
      })),
    [breadcrumbs, t]
  );

  return (
    <div className='min-h-full bg-gray-50'>
      {/* Page Header */}
      <header className='bg-white shadow-sm'>
        <div className='px-4 py-6 sm:px-6 lg:px-8'>
          {/* Breadcrumbs */}
          {formattedBreadcrumbs.length > 0 && (
            <nav
              className='mb-4 flex text-sm text-gray-500'
              aria-label='Breadcrumb'
            >
              <ol className='flex items-center space-x-2'>
                {formattedBreadcrumbs.map((item, index) => (
                  <li key={item.href || index} className='flex items-center'>
                    {index > 0 && (
                      <ChevronRight className='mx-2 h-4 w-4 shrink-0 text-gray-400' />
                    )}
                    {item.href ? (
                      <a
                        href={`/${locale}${item.href}`}
                        className='hover:text-gray-700 hover:underline'
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className='text-gray-900'>{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Title and Actions */}
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-semibold text-gray-900'>{title}</h1>
              {subtitle && (
                <p className='mt-1 text-sm text-gray-500'>{subtitle}</p>
              )}
            </div>
            {actions && (
              <div className='flex items-center gap-3'>{actions}</div>
            )}
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className='py-6 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>{children}</div>
      </main>
    </div>
  );
}
