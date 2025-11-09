'use client';

const SocialButton = ({ provider, onClick, disabled = false, children }) => {
  const getProviderStyles = () => {
    switch (provider?.toLowerCase()) {
      case 'google':
        return 'border border-charcoal-200 dark:border-charcoal-600 bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-background-light hover:bg-charcoal-50 dark:hover:bg-charcoal-700 focus:ring-charcoal-400 dark:focus:ring-charcoal-500';
      case 'facebook':
        return 'bg-[#1877F2] text-white hover:bg-[#166fe5] focus:ring-[#1877F2]/50';
      default:
        return 'border border-charcoal-200 dark:border-charcoal-600 bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-background-light hover:bg-charcoal-50 dark:hover:bg-charcoal-700 focus:ring-charcoal-400';
    }
  };

  const getProviderIcon = () => {
    switch (provider?.toLowerCase()) {
      case 'google':
        return (
          <svg
            className='h-4 w-4 sm:h-5 sm:w-5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              fill='#4285F4'
            />
            <path
              d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              fill='#34A853'
            />
            <path
              d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z'
              fill='#FBBC05'
            />
            <path
              d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              fill='#EA4335'
            />
            <path d='M1 1h22v22H1z' fill='none' />
          </svg>
        );
      case 'facebook':
        return (
          <svg
            className='h-5 w-5 sm:h-6 sm:w-6'
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z' />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={`
        flex w-full items-center justify-center gap-2 sm:gap-3
        rounded-lg h-11 sm:h-12 px-4 sm:px-6
        text-sm sm:text-base font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-offset-background-light dark:focus:ring-offset-background-dark
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getProviderStyles()}
      `}
      aria-label={`Continue with ${provider}`}
    >
      <span className='shrink-0'>{getProviderIcon()}</span>
      <span className='truncate'>{children}</span>
    </button>
  );
};

export default SocialButton;
