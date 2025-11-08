'use client';

import { useMemo } from 'react';

/**
 * UserEngagementChart Component
 * Displays user engagement trend with smooth SVG curve
 *
 * @param {Object} props
 * @param {string} props.title - Chart title
 * @param {string} props.subtitle - Chart subtitle
 * @param {string} props.period - Time period text
 * @param {string} props.change - Change percentage
 * @param {Array<string>} props.weeks - Week labels
 * @param {Array<number>} props.data - Data points (0-100 scale)
 */
export default function UserEngagementChart({
  title = 'Platform Performance',
  subtitle = 'User Engagement',
  period = 'Last 30 Days',
  change = '+7.8%',
  weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  data = [45, 62, 58, 72, 55, 48, 68, 75, 42, 58, 78, 85],
}) {
  // Generate smooth SVG path from data points
  const svgPath = useMemo(() => {
    if (!data || data.length === 0) return '';

    const width = 1000;
    const height = 200;
    const padding = 20;
    const availableWidth = width - padding * 2;
    const availableHeight = height - padding * 2;

    // Normalize data to fit in chart area
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;

    const points = data.map((value, index) => {
      const x = padding + (index / (data.length - 1)) * availableWidth;
      const y = height - padding - ((value - min) / range) * availableHeight;
      return { x, y };
    });

    // Create smooth curve using quadratic bezier
    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const controlX = (current.x + next.x) / 2;
      const controlY = (current.y + next.y) / 2;

      path += ` Q ${controlX} ${current.y}, ${controlX} ${controlY}`;
      path += ` Q ${controlX} ${next.y}, ${next.x} ${next.y}`;
    }

    return path;
  }, [data]);

  const isPositive = change.startsWith('+');

  return (
    <div className='rounded-xl bg-linear-to-br from-[#1e3a5f] to-[#2d5078] p-6 text-white shadow-lg'>
      {/* Header */}
      <div className='mb-6 flex flex-wrap items-start justify-between gap-4'>
        <div>
          <p className='text-sm font-medium opacity-80'>{title}</p>
          <h3 className='mt-1 text-2xl font-bold'>{subtitle}</h3>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-sm opacity-80'>{period}</span>
          <div
            className={`
              flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold
              ${
                isPositive
                  ? 'bg-green-500/20 text-green-100'
                  : 'bg-red-500/20 text-red-100'
              }
            `}
          >
            {change}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className='relative h-48 w-full overflow-hidden rounded-lg'>
        {/* SVG Chart */}
        <svg
          viewBox='0 0 1000 200'
          className='h-full w-full'
          preserveAspectRatio='none'
        >
          {/* Gradient for the line */}
          <defs>
            <linearGradient id='lineGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#d4af37' />
              <stop offset='50%' stopColor='#f0d682' />
              <stop offset='100%' stopColor='#d4af37' />
            </linearGradient>
          </defs>

          {/* Smooth curve path */}
          <path
            d={svgPath}
            fill='none'
            stroke='url(#lineGradient)'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='drop-shadow-lg'
          />
        </svg>

        {/* Week Labels */}
        <div className='absolute bottom-0 left-0 right-0 flex justify-between px-6 pb-2'>
          {weeks.map((week, index) => (
            <span key={index} className='text-xs font-medium opacity-70'>
              {week}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
