'use client';

import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from '@/i18n';
import PropertyFeatures from './PropertyFeatures';

/**
 * PropertyTabs Component
 * Tabbed interface for property details with i18n support and state preservation
 * Features: Overview, Features, Location, Developer Info, Payment Plan
 */
export default function PropertyTabs({ property }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = pathname.split('/')[1] || 'en';
  const { t } = useTranslation(locale);

  // Get tab from URL, defaults to 'overview' - this ensures state persists across language switches
  const urlTab = searchParams.get('tab') || 'overview';
  const [activeTab, setActiveTab] = useState(urlTab);

  // Use urlTab if it differs from activeTab (handles language switch case)
  const currentTab = urlTab !== activeTab ? urlTab : activeTab;

  // Update URL when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const newUrl = `${pathname}?tab=${tabId}`;
    window.history.replaceState({}, '', newUrl);
  };

  const tabs = [
    { id: 'overview', label: t('buy.property.tabs.overview') },
    { id: 'features', label: t('buy.property.tabs.features') },
    { id: 'location', label: t('buy.property.tabs.location') },
    { id: 'developer', label: t('buy.property.tabs.developer') },
    { id: 'payment', label: t('buy.property.tabs.payment') },
  ];

  return (
    <div className='w-full'>
      {/* Tab Navigation */}
      <div className='border-b border-gray-200 mb-6'>
        <nav className='-mb-px flex space-x-4 md:space-x-8 overflow-x-auto'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base transition-colors ${
                currentTab === tab.id
                  ? 'border-yellow-600 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className='py-4'>
        {currentTab === 'overview' && (
          <div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              {t('buy.property.tabs.overview')}
            </h3>
            <p className='text-gray-700 leading-relaxed mb-6'>
              {property?.description || t('buy.property.description')}
            </p>

            {/* Property Features Grid integrated in Overview */}
            <PropertyFeatures features={property?.features} />
          </div>
        )}

        {currentTab === 'features' && (
          <div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              {t('buy.property.tabs.features')}
            </h3>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <h4 className='font-semibold text-gray-900 mb-3'>
                  {t('buy.property.interiorTitle')}
                </h4>
                <ul className='space-y-2 text-gray-700'>
                  {property?.interiorFeatures?.map((feature, index) => (
                    <li key={index} className='flex items-center'>
                      <svg
                        className='w-5 h-5 mr-2 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {feature}
                    </li>
                  )) || (
                    <>
                      <li className='flex items-center'>
                        <svg
                          className='w-5 h-5 mr-2 text-green-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        {t('buy.property.interior.kitchen')}
                      </li>
                      <li className='flex items-center'>
                        <svg
                          className='w-5 h-5 mr-2 text-green-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        {t('buy.property.interior.ac')}
                      </li>
                      <li className='flex items-center'>
                        <svg
                          className='w-5 h-5 mr-2 text-green-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        {t('buy.property.interior.wardrobes')}
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h4 className='font-semibold text-gray-900 mb-3'>
                  {t('buy.property.exteriorTitle')}
                </h4>
                <ul className='space-y-2 text-gray-700'>
                  {property?.exteriorFeatures?.map((feature, index) => (
                    <li key={index} className='flex items-center'>
                      <svg
                        className='w-5 h-5 mr-2 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      {feature}
                    </li>
                  )) || (
                    <>
                      <li className='flex items-center'>
                        <svg
                          className='w-5 h-5 mr-2 text-green-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        {t('buy.property.exterior.pool')}
                      </li>
                      <li className='flex items-center'>
                        <svg
                          className='w-5 h-5 mr-2 text-green-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        {t('buy.property.exterior.garden')}
                      </li>
                      <li className='flex items-center'>
                        <svg
                          className='w-5 h-5 mr-2 text-green-500'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                            clipRule='evenodd'
                          />
                        </svg>
                        {t('buy.property.exterior.gated')}
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'location' && (
          <div>
            <h3 className='text-xl font-semibold text-gray-900 mb-6'>
              {t('buy.property.tabs.location')}
            </h3>
            {/* Map Section - matches design */}
            <div className='w-full h-80 md:h-96 bg-linear-to-br from-green-100 via-blue-50 to-green-50 rounded-lg overflow-hidden relative border border-gray-200'>
              {/* Map placeholder with styling similar to the design */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center'>
                  <svg
                    className='w-16 h-16 mx-auto mb-4 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  <p className='text-gray-600 font-medium'>
                    {t('buy.property.mapTitle')}
                  </p>
                  <p className='text-sm text-gray-500 mt-2'>
                    {t('buy.property.mapComing')}
                  </p>
                </div>
              </div>
              {/* Map attribution footer like in the image */}
              <div className='absolute bottom-0 right-0 bg-white/90 px-3 py-1.5 text-xs text-gray-600 rounded-tl'>
                © OpenStreetMap contributors
              </div>
            </div>
          </div>
        )}

        {currentTab === 'developer' && (
          <div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              {t('buy.property.tabs.developer')}
            </h3>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h4 className='font-semibold text-lg mb-2'>
                {property?.developer || 'KOF Builders'}
              </h4>
              <p className='text-gray-700 mb-4'>
                {property?.developerDescription ||
                  t('buy.property.developerDesc')}
              </p>
              <div className='border-t border-gray-200 pt-4 mt-4'>
                <button className='text-yellow-600 hover:text-yellow-700 font-medium flex items-center'>
                  {t('buy.property.viewPortfolio')}
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'payment' && (
          <div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
              {t('buy.property.tabs.payment')}
            </h3>
            <div className='space-y-4'>
              <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
                <h4 className='font-semibold text-gray-900 mb-3'>
                  {t('buy.property.paymentFlexible')}
                </h4>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <svg
                      className='w-5 h-5 mr-2 text-blue-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>{t('buy.property.paymentDown')}</span>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='w-5 h-5 mr-2 text-blue-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>{t('buy.property.paymentInstallment')}</span>
                  </li>
                  <li className='flex items-start'>
                    <svg
                      className='w-5 h-5 mr-2 text-blue-600 mt-0.5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>{t('buy.property.paymentEscrow')}</span>
                  </li>
                </ul>
              </div>

              <button className='w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors'>
                {t('buy.property.paymentTalkConcierge')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
