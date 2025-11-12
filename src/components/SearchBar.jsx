'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';

export default function SearchBar({ locale = 'en', onSearch }) {
  const router = useRouter();
  const [searchType, setSearchType] = useState(''); // placeholder default
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [cityArea, setCityArea] = useState('');
  const [priceRange, setPriceRange] = useState(''); // asc|desc later
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const handleSearch = () => {
    const filters = { type: searchType, cityArea, priceRange, bedrooms, propertyType };
    if (typeof onSearch === 'function') {
      onSearch(filters);
      return;
    }

    // Default behavior: navigate to listing page with query params
    const params = new URLSearchParams();
    if (cityArea) params.set('city', cityArea);
    if (priceRange) params.set('priceOrder', priceRange); // asc | desc
    if (bedrooms) params.set('bedrooms', bedrooms);
    if (propertyType) params.set('type', propertyType);
    const qs = params.toString();
    const typePath = searchType || 'buy'; // default to buy if placeholder
    const basePath = `/${locale}/${typePath}`; // e.g., /en/buy or /en/rent
    router.push(qs ? `${basePath}?${qs}` : basePath);
  };

  return (
    <section className='relative z-10 -mt-20 sm:-mt-13 px-4 sm:px-6'>
      <div className='mx-auto max-w-6xl rounded-2xl bg-[#F5F3EF] dark:bg-charcoal/95 p-4 sm:p-6 shadow-xm border border-gray-200'>
        {/* Mobile: Stack filters vertically */}
        <div className='block lg:hidden space-y-3'>
          {/* Primary filters always visible */}
          <div className='grid grid-cols-2 gap-2 sm:gap-3'>
            {/* Type */}
            <div className='relative'>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-8 outline-none'
                aria-label={t('searchBar.buy')}
              >
                <option value='' disabled>
                  {`${t('searchBar.buy')} / ${t('searchBar.rent', 'Rent')}`}
                </option>
                <option value='buy'>{t('searchBar.buy')}</option>
                <option value='rent'>{t('searchBar.rent', 'Rent')}</option>
              </select>
              <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
                <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </div>
            </div>
            {/* City/Area */}
            <div className='relative'>
              <select
                value={cityArea}
                onChange={(e) => setCityArea(e.target.value)}
                className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center outline-none appearance-none pr-8'
                aria-label={t('searchBar.cityArea')}
              >
                <option value='' disabled>
                  {t('searchBar.cityArea')}
                </option>
                <option value='abidjan'>{t('buy.filters.cities.abidjan', 'Abidjan')}</option>
                <option value='assinie'>{t('buy.filters.cities.assinie', 'Assinie-Mafia')}</option>
                <option value='yamoussoukro'>{t('buy.filters.cities.yamoussoukro', 'Yamoussoukro')}</option>
              </select>
              <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
                <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </div>
            </div>
          </div>

          {/* Toggle additional filters */}
          <button
            onClick={() => setShowAllFilters(!showAllFilters)}
            className='flex w-full h-11 items-center justify-center gap-2 rounded-lg bg-white/60 dark:bg-charcoal/30 px-3 py-2.5 text-charcoal dark:text-soft-grey text-sm font-medium transition-all hover:bg-white dark:hover:bg-charcoal/50'
          >
            <SlidersHorizontal className='h-4 w-4' />
            {showAllFilters ? 'Hide Filters' : 'More Filters'}
          </button>

          {/* Additional filters - collapsible on mobile */}
          {showAllFilters && (
            <div className='grid grid-cols-2 gap-2 sm:gap-3'>
              {/* Price Range */}
              <div className='relative'>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-8 outline-none '
                  aria-label={t('searchBar.priceRange')}
                >
                  <option value='' disabled>{t('searchBar.priceRange')}</option>
                  <option value='asc'>Min to Max</option>
                  <option value='desc'>Max to Min</option>
                </select>
                <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
                  <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                  </svg>
                </div>
              </div>
              {/* Bedrooms */}
              <div className='relative'>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-8 outline-none'
                  aria-label={t('searchBar.bedrooms')}
                >
                  <option value='' disabled>{t('searchBar.bedrooms')}</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3+'>3+</option>
                </select>
                <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
                  <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                  </svg>
                </div>
              </div>
              {/* Property Type */}
              <div className='relative col-span-2'>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-8'
                  aria-label={t('searchBar.propertyType')}
                >
                  <option value='' disabled>{t('searchBar.propertyType')}</option>
                  <option value='apartment'>{t('buy.propertyTypes.apartment', 'Apartment')}</option>
                  <option value='house'>{t('buy.propertyTypes.house', 'House')}</option>
                  <option value='villa'>{t('buy.propertyTypes.villa', 'Villa')}</option>
                  <option value='penthouse'>{t('newDevelopments.filters.types.penthouse', 'Penthouse')}</option>
                  <option value='townhouse'>{t('newDevelopments.filters.types.townhouse', 'Townhouse')}</option>
                </select>
                <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
                  <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Search button - full width on mobile */}
          <button onClick={handleSearch} className='flex w-full h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm lg:text-base font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg'>
            <Search className='h-5 w-5' />
            <span>{t('searchBar.search')}</span>
          </button>
        </div>

        {/* Desktop: Horizontal layout */}
        <div className='hidden lg:flex items-center gap-3'>
          {/* Type */}
          <div className='relative flex-1 min-w-[120px]'>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-10 outline-none focus:ring-1 focus:ring-primary'
              aria-label={t('searchBar.buy')}
            >
              <option value=''>
                {`${t('searchBar.buy')} / ${t('searchBar.rent', 'Rent')}`}
              </option>
              <option value='buy'>{t('searchBar.buy')}</option>
              <option value='rent'>{t('searchBar.rent', 'Rent')}</option>
            </select>
            <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </div>
          </div>
          {/* City/Area */}
          <div className='relative flex-1 min-w-[120px]'>
            <select
              value={cityArea}
              onChange={(e) => setCityArea(e.target.value)}
              className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-10 focus:ring-1 focus:ring-primary border-transparent outline-none'
              aria-label={t('searchBar.cityArea')}
            >
              <option value=''>{t('searchBar.cityArea')}</option>
              <option value='abidjan'>{t('buy.filters.cities.abidjan', 'Abidjan')}</option>
              <option value='assinie'>{t('buy.filters.cities.assinie', 'Assinie-Mafia')}</option>
              <option value='yamoussoukro'>{t('buy.filters.cities.yamoussoukro', 'Yamoussoukro')}</option>
            </select>
            <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </div>
          </div>
          {/* Price Range */}
          <div className='relative flex-1 min-w-[120px]'>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-10 border-transparent outline-none focus:ring-1 focus:ring-primary'
              aria-label={t('searchBar.priceRange')}
            >
              <option value=''>{t('searchBar.priceRange')}</option>
              <option value='asc'>Min to Max</option>
              <option value='desc'>Max to Min</option>
            </select>
            <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </div>
          </div>
          {/* Bedrooms */}
          <div className='relative flex-1 min-w-[120px]'>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-10 border-transparent outline-none focus:ring-1 focus:ring-primary'
              aria-label={t('searchBar.bedrooms')}
            >
              <option value=''>{t('searchBar.bedrooms')}</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3+'>3+</option>
            </select>
            <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </div>
          </div>
          {/* Property Type */}
          <div className='relative flex-1 min-w-[120px]'>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className='flex h-11 w-full items-center justify-center gap-1 rounded-lg bg-white dark:bg-charcoal/50 px-3 py-2.5 text-charcoal dark:text-soft-grey shadow-sm transition-all hover:shadow-md text-sm font-medium text-center appearance-none pr-10 focus:ring-1 focus:ring-primary outline-none border-transparent'
              aria-label={t('searchBar.propertyType')}
            >
              <option value=''>{t('searchBar.propertyType')}</option>
              <option value='apartment'>{t('buy.propertyTypes.apartment', 'Apartment')}</option>
              <option value='house'>{t('buy.propertyTypes.house', 'House')}</option>
              <option value='villa'>{t('buy.propertyTypes.villa', 'Villa')}</option>
              <option value='penthouse'>{t('newDevelopments.filters.types.penthouse', 'Penthouse')}</option>
              <option value='townhouse'>{t('newDevelopments.filters.types.townhouse', 'Townhouse')}</option>
            </select>
            <div className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2'>
              <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </div>
          </div>
          <button onClick={handleSearch} className='flex h-11 min-w-[140px] shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg'>
            <Search className='h-5 w-5' />
            <span className='truncate'>{t('searchBar.search')}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
