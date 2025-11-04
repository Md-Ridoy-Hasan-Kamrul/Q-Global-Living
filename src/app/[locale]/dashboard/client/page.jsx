export const metadata = {
  title: 'Profile Details - Client Dashboard',
  description: 'View and manage your profile',
};

export default function ClientDashboardPage() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>Hello Client</h2>
        <p className='text-gray-600'>
          Welcome to your Q Homes dashboard. Manage your properties and profile
          here.
        </p>
      </div>

      {/* Profile Overview */}
      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>
          Profile Details
        </h3>
        <div className='text-center py-12 text-gray-500'>
          Profile details interface will be displayed here.
        </div>
      </div>
    </div>
  );
}
