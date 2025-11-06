'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

/**
 * StatsCard Component
 * Reusable metric card with trend indicators
 *
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Main metric value
 * @param {string} props.trend - Trend percentage (e.g., "+5.2%", "-1.5%")
 * @param {string} props.variant - Color variant (primary, success, info, warning)
 */
export default function StatsCard({
  title,
  value,
  trend,
  variant = 'primary',
}) {
  const isPositive = trend?.startsWith('+');
  const isNegative = trend?.startsWith('-');

  const variantStyles = {
    primary: 'bg-linear-to-br from-[#1e3a5f] to-[#2d5078]',
    success: 'bg-linear-to-br from-[#2d5078] to-[#3d6088]',
    info: 'bg-linear-to-br from-[#3d6088] to-[#4d7098]',
    warning: 'bg-linear-to-br from-[#4d7098] to-[#5d80a8]',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl p-6 text-white shadow-lg 
        transition-transform duration-300 hover:scale-105 hover:shadow-xl
        ${variantStyles[variant]}
      `}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white' />
        <div className='absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-white' />
      </div>

      {/* Content */}
      <div className='relative z-10'>
        <div className='flex items-start justify-between'>
          <div>
            <p className='text-sm font-medium opacity-90'>{title}</p>
            <p className='mt-2 text-4xl font-bold tracking-tight'>
              {value.toLocaleString()}
            </p>
          </div>

          {/* Trend Indicator */}
          {trend && (
            <div
              className={`
                flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold
                ${isPositive ? 'bg-green-500/20 text-green-100' : ''}
                ${isNegative ? 'bg-red-500/20 text-red-100' : ''}
                ${!isPositive && !isNegative ? 'bg-white/10 text-white' : ''}
              `}
            >
              {isPositive && <TrendingUp className='h-3 w-3' />}
              {isNegative && <TrendingDown className='h-3 w-3' />}
              <span>{trend}</span>
            </div>
          )}
        </div>
      </div>

      {/* Subtle Border Glow */}
      <div className='absolute inset-0 rounded-xl border border-white/10' />
    </div>
  );
}
