'use client';

import { memo } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const EventAbout = memo(({ translations }) => {
  return (
    <div className='bg-white rounded-xl p-6 sm:p-8'>
      <h2 className='text-2xl sm:text-3xl font-bold text-[#E6B325] mb-4'>
        {translations.title}
      </h2>
      <p className='text-gray-700 leading-relaxed mb-6 text-base sm:text-lg'>
        {translations.description}
      </p>

      <div className='space-y-4'>
        <div className='flex items-start gap-3'>
          <Calendar className='h-5 w-5 text-[#E6B325] shrink-0 mt-0.5' />
          <div>
            <h3 className='font-semibold text-gray-900 mb-1'>
              {translations.dateTimeLabel}
            </h3>
            <p className='text-gray-600'>{translations.dateTime}</p>
          </div>
        </div>

        <div className='flex items-start gap-3'>
          <MapPin className='h-5 w-5 text-[#E6B325] shrink-0 mt-0.5' />
          <div>
            <h3 className='font-semibold text-gray-900 mb-1'>
              {translations.locationLabel}
            </h3>
            <p className='text-gray-600'>{translations.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

EventAbout.displayName = 'EventAbout';

export default EventAbout;
