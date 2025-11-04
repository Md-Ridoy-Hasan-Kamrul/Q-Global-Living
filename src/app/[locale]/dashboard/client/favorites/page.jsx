export const metadata = {
  title: 'Saved Properties - Client Dashboard',
  description: 'View your saved properties',
};

export default function ClientFavoritesPage() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>
          Saved Properties
        </h2>
        <p className='text-gray-600'>
          View and manage your favorite properties.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>
          Your Favorites
        </h3>
        <div className='text-center py-12 text-gray-500'>
          Your saved properties will be displayed here.
        </div>
      </div>
    </div>
  );
}
