'use client';

import { useState, useEffect, memo, useMemo } from 'react';

const TimeBox = memo(({ value, label }) => (
  <div className='flex flex-col items-center bg-white rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]'>
    <div className='text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
      {String(value).padStart(2, '0')}
    </div>
    <div className='text-xs sm:text-sm text-gray-600 mt-1'>{label}</div>
  </div>
));

TimeBox.displayName = 'TimeBox';

const CountdownTimer = memo(({ targetDate, translations }) => {
  const calculateTimeLeft = useMemo(() => {
    return () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className='flex gap-2 sm:gap-4 justify-center'>
      <TimeBox value={timeLeft.days} label={translations.days} />
      <TimeBox value={timeLeft.hours} label={translations.hours} />
      <TimeBox value={timeLeft.minutes} label={translations.minutes} />
      <TimeBox value={timeLeft.seconds} label={translations.seconds} />
    </div>
  );
});

CountdownTimer.displayName = 'CountdownTimer';

export default CountdownTimer;
