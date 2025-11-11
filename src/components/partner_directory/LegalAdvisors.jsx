import Image from 'next/image';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

const legalPartners = [
  {
    name: 'Legis Ivoire',
    description:
      'Expert legal counsel for all your real estate transactions. We ensure every contract is secure and every title is clear.',
    logo: <FaCanadianMapleLeaf className="w-6 h-6" />,
    website: '#',
  },
];

export default function LegalAdvisors({ filteredPartners }) {
  // Use filtered partners if provided, otherwise use default legalPartners
  const partnersToDisplay = filteredPartners !== undefined ? filteredPartners : legalPartners;

  // Hide section if no partners to display
  if (partnersToDisplay.length === 0) {
    return null;
  }

  return (
    <section className='mb-10'>
      <div className='border-b-2 border-accent mb-6 pb-2'>
        <h2 className='font-display text-primary dark:text-text-dark text-3xl font-bold leading-tight tracking-tight px-4'>
          Legal Advisors
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {partnersToDisplay.map((partner) => (
          <div
            key={partner.name}
            className='bg-white dark:bg-primary/30 rounded-xl overflow-hidden flex flex-col p-6 border border-primary/10 dark:border-accent/10'
          >
            <div className='flex items-center gap-4 mb-4'>
              {partner.logo}
              <h3 className='font-display text-xl font-bold text-primary dark:text-text-dark'>
                {partner.name}
              </h3>
            </div>
            <p className='text-text-muted-light dark:text-text-muted-dark text-base mb-6 flex-grow'>
              {partner.description}
            </p>
            <a
              href={partner.website}
              {...(partner.website && partner.website !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`Contact ${partner.name}`}
              className='mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-accent text-black/70 text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            >
              <span>Contact Partner</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
