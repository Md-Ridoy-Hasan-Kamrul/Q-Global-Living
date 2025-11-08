/**
 * Production-grade Loading Components
 *
 * Features:
 * - Multiple loading states for different contexts
 * - Accessible with ARIA labels
 * - Performance optimized
 * - Follows loading skeleton best practices
 */

/**
 * Full Page Loading Spinner
 * Used for page transitions and initial loads
 */
export function PageLoader({ message = 'Loading...' }) {
  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark'
      role='status'
      aria-live='polite'
      aria-label={message}
    >
      <div className='relative w-16 h-16'>
        <div className='absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full'></div>
        <div className='absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
      </div>
      <p className='mt-4 text-charcoal dark:text-soft-grey font-medium'>
        {message}
      </p>
    </div>
  );
}

/**
 * Inline Loading Spinner
 * Used for inline loading states (buttons, cards, etc.)
 */
export function Spinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      role='status'
      aria-label='Loading'
    >
      <div className='absolute inset-0 border-2 border-current opacity-20 rounded-full'></div>
      <div className='absolute inset-0 border-2 border-current border-t-transparent rounded-full animate-spin'></div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
}

/**
 * Property Card Skeleton
 * Used while property listings are loading
 */
export function PropertyCardSkeleton() {
  return (
    <div className='bg-white dark:bg-charcoal-800 rounded-xl overflow-hidden shadow-md animate-pulse'>
      {/* Image skeleton */}
      <div className='w-full h-48 bg-charcoal-200 dark:bg-charcoal-700'></div>

      <div className='p-4 space-y-3'>
        {/* Title skeleton */}
        <div className='h-5 bg-charcoal-200 dark:bg-charcoal-700 rounded w-3/4'></div>

        {/* Location skeleton */}
        <div className='h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded w-1/2'></div>

        {/* Features skeleton */}
        <div className='flex gap-4'>
          <div className='h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded w-16'></div>
          <div className='h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded w-16'></div>
          <div className='h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded w-16'></div>
        </div>

        {/* Price skeleton */}
        <div className='h-6 bg-charcoal-200 dark:bg-charcoal-700 rounded w-1/3'></div>

        {/* Button skeleton */}
        <div className='h-10 bg-charcoal-200 dark:bg-charcoal-700 rounded'></div>
      </div>
    </div>
  );
}

/**
 * Text Skeleton
 * Used for loading text content
 */
export function TextSkeleton({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className='h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded loading-shimmer'
          style={{
            width: index === lines - 1 ? '60%' : '100%',
          }}
        ></div>
      ))}
    </div>
  );
}

/**
 * Button Loading State
 * Used for button loading states
 */
export function ButtonLoader({ children, isLoading, disabled, ...props }) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`relative ${props.className || ''} ${
        isLoading ? 'cursor-not-allowed' : ''
      }`}
    >
      <span className={isLoading ? 'opacity-0' : ''}>{children}</span>
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <Spinner size='sm' />
        </div>
      )}
    </button>
  );
}

/**
 * Content Loader with Suspense-like behavior
 * Used for lazy loaded content
 */
export function ContentLoader({
  isLoading,
  error,
  children,
  fallback = <PageLoader />,
  errorFallback = <ErrorMessage />,
}) {
  if (error) {
    return errorFallback;
  }

  if (isLoading) {
    return fallback;
  }

  return children;
}

/**
 * Error Message Component
 */
function ErrorMessage({
  message = 'Failed to load content. Please try again.',
}) {
  return (
    <div className='text-center py-12'>
      <p className='text-red-600 dark:text-red-400'>{message}</p>
    </div>
  );
}
