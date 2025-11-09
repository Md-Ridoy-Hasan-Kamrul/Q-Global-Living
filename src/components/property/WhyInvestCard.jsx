'use client';

/**
 * WhyInvestCard Component
 *
 * A reusable card component for displaying investment benefits.
 * Used in the "Why Invest in New Developments" section.
 *
 * @param {Object} props - Component props
 * @param {string} props.icon - Material icon name
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 */
export default function WhyInvestCard({ icon, title, description }) {
  return (
    <div className='flex flex-col items-center gap-3 text-center border border-[#d4af37]/20 shadow-sm p-5 rounded-lg'>
      {/* Icon Container */}
      <div
        className='flex items-center justify-center size-14 bg-accent/20 rounded-full text-accent'
        aria-hidden='true'
      >
        <span className='material-symbols-outlined text-3xl!'>{icon}</span>
      </div>

      {/* Title */}
      <h3 className='font-bold text-lg text-navy dark:text-white'>{title}</h3>

      {/* Description */}
      <p className='text-gray-600 dark:text-gray-300 text-sm'>{description}</p>
    </div>
  );
}
