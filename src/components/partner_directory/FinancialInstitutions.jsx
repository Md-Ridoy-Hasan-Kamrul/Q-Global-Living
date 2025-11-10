'use client';

import Image from 'next/image';

const partners = [
  {
    name: 'FinBank CI',
    description:
      'Your trusted partner for mortgage solutions and real estate financing in Côte d’Ivoire. Tailored loans for every home buyer.',
    logo: 'https://placehold.co/200x80/D4AF37/0A2240?text=FinBank+CI&font=roboto',
    website: '#',
  },
  {
    name: 'Prestige Mortgages',
    description:
      'Specializing in premium mortgage services for luxury properties. We provide expert financial guidance for your high-value investments.',
    logo: 'https://placehold.co/200x80/D4AF37/0A2240?text=Prestige&font=roboto',
    website: '#',
  },
  {
    name: 'Abidjan Credit Union',
    description:
      'Community-focused banking offering competitive home loans and financial planning services for families and individuals.',
    logo: 'https://placehold.co/200x80/D4AF37/0A2240?text=ACU&font=roboto',
    website: '#',
  },
];

export default function FinancialInstitutions() {
  return (
    <section className='mb-16'>
      <div className='border-b-2 border-accent mb-6 pb-2'>
        <h2 className='font-display text-primary dark:text-text-dark text-3xl font-bold leading-tight tracking-tight px-4'>
          Financial Institutions
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {partners.map((partner) => (
          <div
            key={partner.name}
            className='bg-white dark:bg-primary/30 rounded-xl shadow-md overflow-hidden flex flex-col p-6 border border-primary/10 dark:border-accent/10'
          >
            <div className='flex items-center gap-4 mb-4'>
              <div className='relative h-14 w-14 flex-shrink-0 rounded-lg overflow-hidden'>
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  fill
                  className='object-cover'
                />
              </div>
              <h3 className='font-display text-xl font-bold text-primary dark:text-text-dark'>
                {partner.name}
              </h3>
            </div>
            <p className='text-text-muted-light dark:text-text-muted-dark text-base mb-6 flex-grow'>
              {partner.description}
            </p>
            <button className='mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-accent text-black/70 text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity'>
              <span>Visit Website</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
