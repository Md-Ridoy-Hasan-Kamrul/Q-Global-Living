/**
 * PropertyFeatures Component
 * Displays key property statistics in a grid layout
 * Features: Responsive grid, icon-based visualization
 */
export default function PropertyFeatures({ features }) {
  const { bedrooms = 0, bathrooms = 0, area = 0, garages = 0 } = features || {};

  const featureList = [
    {
      id: 'bedrooms',
      icon: (
        <svg
          className='w-10 h-10 text-yellow-600'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 001 1h1v4h2v-4h12v4h2v-4h1a1 1 0 001-1v-4c0-1.475-.81-2.75-2-3.443zM6 7h12v2.129c-.68-.083-1.388-.129-2-.129H8c-.612 0-1.32.046-2 .129V7z' />
        </svg>
      ),
      label: 'Bedrooms',
      value: bedrooms,
    },
    {
      id: 'bathrooms',
      icon: (
        <svg
          className='w-10 h-10 text-yellow-600'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 00-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 00-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z' />
        </svg>
      ),
      label: 'Bathrooms',
      value: bathrooms,
    },
    {
      id: 'area',
      icon: (
        <svg
          className='w-10 h-10 text-yellow-600'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M21 4h-3V3a1 1 0 00-2 0v1h-2V3a1 1 0 00-2 0v1h-2V3a1 1 0 00-2 0v1H6V3a1 1 0 00-2 0v1H3a1 1 0 00-1 1v3h20V5a1 1 0 00-1-1zM2 9v10a1 1 0 001 1h18a1 1 0 001-1V9H2zm13 9h-2v-2h2v2zm0-4h-2v-2h2v2zm-4 4H9v-2h2v2zm0-4H9v-2h2v2zm-4 4H5v-2h2v2zm0-4H5v-2h2v2zm10 4h-2v-2h2v2zm0-4h-2v-2h2v2z' />
        </svg>
      ),
      label: `${area} m²`,
      value: '',
    },
    {
      id: 'garages',
      icon: (
        <svg
          className='w-10 h-10 text-yellow-600'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M3 19V5.7c0-.4.3-.7.7-.7h16.6c.4 0 .7.3.7.7V19c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1zm11-6v-2h2v2h-2zm-8 0v-2h2v2H6z' />
        </svg>
      ),
      label: 'Garages',
      value: garages,
    },
  ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
      {featureList.map((feature) => (
        <div
          key={feature.id}
          className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg'
        >
          <div className='mb-3'>{feature.icon}</div>
          <p className='text-xl lg:text-2xl font-bold text-gray-900'>
            {feature.value || feature.label}
          </p>
          {feature.value !== '' && (
            <p className='text-sm text-gray-600 mt-1'>{feature.label}</p>
          )}
        </div>
      ))}
    </div>
  );
}
