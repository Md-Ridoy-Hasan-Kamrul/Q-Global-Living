'use client';

import { memo } from 'react';

const EventSpeakers = memo(({ translations }) => {
  const speakers = [
    {
      id: 1,
      name: translations.speaker1Name,
      role: translations.speaker1Role,
      avatar: '/images/avatar-placeholder.jpg',
      initials: 'JLB',
    },
    {
      id: 2,
      name: translations.speaker2Name,
      role: translations.speaker2Role,
      avatar: '/images/avatar-placeholder.jpg',
      initials: 'AK',
    },
  ];

  return (
    <div className='bg-white rounded-xl p-6 sm:p-8'>
      <h2 className='text-2xl sm:text-3xl font-bold text-[#E6B325] mb-8'>
        {translations.title}
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>
        {speakers.map((speaker) => (
          <div key={speaker.id} className='flex items-center gap-4'>
            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-[#1e3a5f] to-[#2d5078] flex items-center justify-center text-white font-bold text-xl sm:text-2xl shrink-0'>
              {speaker.initials}
            </div>
            <div>
              <h3 className='font-bold text-gray-900 text-lg sm:text-xl'>
                {speaker.name}
              </h3>
              <p className='text-gray-600 text-sm sm:text-base'>
                {speaker.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

EventSpeakers.displayName = 'EventSpeakers';

export default EventSpeakers;
