'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import DevelopmentCard from '@/components/property/DevelopmentCard';
import DevelopmentFilters from '@/components/property/DevelopmentFilters';
import WhyInvestCard from '@/components/property/WhyInvestCard';
import DeveloperCTA from '@/components/property/DeveloperCTA';

/**
 * ResidentialPage - New Developments Page
 *
 * Displays new residential development projects in Côte d'Ivoire.
 * Features hero section, filters, property cards, benefits section, and developer CTA.
 * Fully responsive and optimized for performance.
 */
export default function ResidentialPage() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const [filters, setFilters] = useState({
    cityArea: 'all',
    developmentStage: 'all',
    propertyType: 'all',
    priceRange: 'all'
  });

  // Mock data for developments - Replace with API call in production
  const allDevelopments = useMemo(() => [
    {
      id: '1',
      title: 'Azure Residences',
      developer: 'Riviera Developers',
      location: 'Abidjan, Riviera',
      city: 'abidjan',
      propertyType: 'apartment',
      stage: 'construction',
      priceXOF: 85000000,
      priceUSD: 140000,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC_NsSUqsH956hUra2tT1odu-A12CS6QWgV6UpixeqbBG9Pgk_7Oy9LKqEeUqYmAOtpl_76rcDv4KzGoE4briLdO7cmamDp880BBYxTdcjVXtGiZTZMovfPMKmdW4HQHKO8FNVeMDRY-w23I_Y6a3WrDu66kMIAAu26Q0XjQ1-H5m50kbYDrNdxtkE4lsvRCg17IMg9HIeluImdaiQ4VqBxDxJ16sqffXsA2IleAp21qIFKUH24Ax3sF0-HuRXlNItOdAWQd0rilkU',
      verified: true,
      escrowEligible: true,
    },
    {
      id: '2',
      title: 'The Pearl of Cocody',
      developer: 'Prestige Homes',
      location: 'Abidjan, Cocody',
      city: 'abidjan',
      propertyType: 'penthouse',
      stage: 'completion',
      priceXOF: 120000000,
      priceUSD: 197000,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBr5qEUFUC4wNYz4DAi4fGtLd6sBfGfIGFpBZuO0ITOB7F5qKfCvgJwLSJPq5v3PcUecqPZFQrDSWKroLzxFRzGG6l-9-FmdnpvBYfWjBGuwIpnz1TavqDhlgZX1pLnz95390zm0udEspCpzxBPGqR8mlzF-V6qpQGKfx7oNUC0DAmjUapj56R_--WjvgtFpFMagVHjioxbwgBP2p-DeXYgiIKHR4kWK2a-1nt2l5skFKpYGKxR4NbmtB4XghEsnueikFxggGo25t8',
      verified: true,
      escrowEligible: false,
    },
    {
      id: '3',
      title: 'Baie des Milliardaires Villas',
      developer: 'Assinie Luxury',
      location: 'Assinie-Mafia',
      city: 'assinie',
      propertyType: 'villa',
      stage: 'planning',
      priceXOF: 350000000,
      priceUSD: 575000,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAndvJ-0zmlCvziH-APxIWtuL3lME5f-2Uub1kTNi6sN30wM1lLPDKPNTkO0exezLup_5I_2PMtdO_5UdeDgwEXnJ0ghO4S-S6DItzkhetbJYq8BxrJF6RqPc8MBrOrEaAy0t8U6c4CPRVEzd6_ISEouptWubL4kPOpJiAW6MkGZjBZMSGtMsEmku0daqn_OvfSQPzgAguA0jYWkEXauOzvLGysmMPcw9zeQwpepZV07EprKrHXu0m40ME5x5-61iRvboEZrQiFqX8',
      verified: true,
      escrowEligible: true,
    },
  ], []);

  // Filter developments based on selected filters
  const filteredDevelopments = useMemo(() => {
    return allDevelopments.filter((dev) => {
      // City filter
      if (filters.cityArea !== 'all' && dev.city !== filters.cityArea) {
        return false;
      }

      // Property type filter
      if (filters.propertyType !== 'all' && dev.propertyType !== filters.propertyType ) {
        return false;
      }

      // Development stage filter
      if (filters.developmentStage !== 'all' && dev.stage !== filters.developmentStage) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        const price = dev.priceXOF;
        switch (filters.priceRange) {
          case 'under100m':
            if (price >= 100000000) return false;
            break;
          case '100m-200m':
            if (price < 100000000 || price >= 200000000) return false;
            break;
          case '200m-500m':
            if (price < 200000000 || price >= 500000000) return false;
            break;
          case 'over500m':
            if (price < 500000000) return false;
            break;
        }
      }

      return true;
    });
  }, [filters, allDevelopments]);

  // Investment benefits data
  const investmentBenefits = [
    {
      icon: 'home_work',
      title: t('newDevelopments.whyInvest.modernAmenities.title'),
      description: t('newDevelopments.whyInvest.modernAmenities.description'),
    },
    {
      icon: 'payments',
      title: t('newDevelopments.whyInvest.flexiblePayment.title'),
      description: t('newDevelopments.whyInvest.flexiblePayment.description'),
    },
    {
      icon: 'trending_up',
      title: t('newDevelopments.whyInvest.highAppreciation.title'),
      description: t('newDevelopments.whyInvest.highAppreciation.description'),
    },
    {
      icon: 'construction',
      title: t('newDevelopments.whyInvest.qualityAssurance.title'),
      description: t('newDevelopments.whyInvest.qualityAssurance.description'),
    },
  ];

  // Event handlers
  const handleViewDetails = (id) => {
    console.log('View details for development:', id);
    // Navigate to development detail page
  };

  const handleInquire = (id) => {
    console.log('Inquire about development:', id);
    // Open inquiry form or modal
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleListProject = () => {
    console.log('List project clicked');
    // Navigate to list project page
  };

  return (
    <main className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
      {/* Hero Section */}
      <section className='w-full sm:mb-8'>
        <div
          className='flex sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center'
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.6) 0%, rgba(10, 25, 49, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9OD-HKYMCUrHYqizPl6bZVRzjkCy4ioyz484ZdQU0212i6RhwyfXTHRWEgiFpL0cLaTwyJNcJ0jSLl2EJyNToBOLg-JxeaLzyZOWlVb8saYJYGBzFOFJIt3GgpCa9HGRmWcxJaqglsWkHwgVwVJz_TF0uHjDASh_quW1mQqfRvqBMLqzpBNBHDBefNUc5HA8BbIoAUvXd4fNObIkob6Y7wIhqEZpLUNZzi1SH2tC2LFMqeowpe_pj0gy6aSKEJF0yvYgTe4lg9Ko")`,
          }}
          role='banner'
        >
          <div className='flex flex-col gap-4 max-w-3xl'>
            <h1 className='text-white text-2xl sm:text-3xl font-black leading-tight tracking-[-0.033em] lg:text-5xl'>
              {t('newDevelopments.hero.title')}
            </h1>
            <p className='text-gray-200 text-sm sm:text-base font-normal leading-normal lg:text-lg'>
              {t('newDevelopments.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <DevelopmentFilters onFilterChange={handleFilterChange} />

      {/* Featured Developments Section */}
      <section aria-labelledby='featured-developments'>
        <h2
          id='featured-developments'
          className='text-navy dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em]  pb-3 sm:pt-5'
        >
          {t('newDevelopments.section.featured')}
        </h2>

        {/* Development Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-6 my-1.5'>
          {filteredDevelopments.length > 0 ? (
            filteredDevelopments.map((development) => (
              <DevelopmentCard
                key={development.id}
                development={development}
                onViewDetails={handleViewDetails}
                onInquire={handleInquire}
              />
            ))
          ) : (
            <div className='col-span-full text-center py-12'>
              <p className='text-gray-500 dark:text-gray-400 text-lg'>
                {t('newDevelopments.noResults', 'No developments found matching your criteria.')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Invest Section */}
      <section
        className='lg:my-16 my-4 py-6 sm:py-12 dark:bg-navy/20 rounded-xl'
        aria-labelledby='why-invest'
      >
        <h2
          id='why-invest'
          className='text-navy dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 lg:pb-8 text-center'
        >
          {t('newDevelopments.whyInvest.title')}
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-6'>
          {investmentBenefits.map((benefit, index) => (
            <WhyInvestCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>

      {/* Developer CTA */}
      <DeveloperCTA onListProject={handleListProject} />
    </main>
  );
}
