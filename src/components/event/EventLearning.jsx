'use client';

import { memo } from 'react';
import { CheckCircle } from 'lucide-react';

const EventLearning = memo(({ translations }) => {
  const learningPoints = [
    {
      id: 1,
      text: translations.point1,
    },
    {
      id: 2,
      text: translations.point2,
    },
    {
      id: 3,
      text: translations.point3,
    },
    {
      id: 4,
      text: translations.point4,
    },
  ];

  return (
    <div className='bg-white rounded-xl p-6 sm:p-8'>
      <h2 className='text-2xl sm:text-3xl font-bold text-[#E6B325] mb-6'>
        {translations.title}
      </h2>
      <div className='space-y-4'>
        {learningPoints.map((point) => (
          <div key={point.id} className='flex items-start gap-3'>
            <CheckCircle className='h-6 w-6 text-[#E6B325] shrink-0 mt-0.5' />
            <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});

EventLearning.displayName = 'EventLearning';

export default EventLearning;
