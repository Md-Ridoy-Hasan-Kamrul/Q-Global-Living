export const metadata = {
  title: 'Properties - Partner Dashboard',
  description: 'Manage your property listings',
};

export default function PartnerDashboardPage() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>Hello Partner</h2>
        <p className='text-gray-600'>
          Welcome to your Q Homes partner dashboard. Manage your properties and
          listings here.
        </p>
      </div>

      {/* Quick Stats */}
      <div className='grid gap-6 sm:grid-cols-3'>
        <div className='rounded-lg bg-linear-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg'>
          <h3 className='text-sm font-medium opacity-90'>Total Properties</h3>
          <p className='mt-2 text-3xl font-bold'>12</p>
        </div>
        <div className='rounded-lg bg-linear-to-br from-green-500 to-green-600 p-6 text-white shadow-lg'>
          <h3 className='text-sm font-medium opacity-90'>Active Listings</h3>
          <p className='mt-2 text-3xl font-bold'>8</p>
        </div>
        <div className='rounded-lg bg-linear-to-br from-purple-500 to-purple-600 p-6 text-white shadow-lg'>
          <h3 className='text-sm font-medium opacity-90'>New Inquiries</h3>
          <p className='mt-2 text-3xl font-bold'>5</p>
        </div>
      </div>
    </div>
  );
}
