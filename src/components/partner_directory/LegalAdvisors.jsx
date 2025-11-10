'use client';

import Image from 'next/image';

const legalPartners = [
  {
    name: 'Legis Ivoire',
    description:
      'Expert legal counsel for all your real estate transactions. We ensure every contract is secure and every title is clear.',
    logo: 'https://placehold.co/200x80/D4AF37/0A2240?text=Legis+Ivoire&font=roboto',
    website: '#',
  },
];

export default function LegalAdvisors() {
  return (
    <section className='mb-16'>
      <div className='border-b-2 border-accent mb-6 pb-2'>
        <h2 className='font-display text-primary dark:text-text-dark text-3xl font-bold leading-tight tracking-tight px-4'>
          Legal Advisors
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {legalPartners.map((partner) => (
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
              <span>Contact Partner</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
