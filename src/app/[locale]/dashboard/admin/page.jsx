export const metadata = {
  title: 'Admin Dashboard - Q Homes',
  description: 'Admin dashboard for Q Homes real estate platform',
};

export default function AdminDashboardPage() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>Hello Admin</h2>
        <p className='text-gray-600'>
          Welcome to the Q Homes admin dashboard. Manage your platform from
          here.
        </p>
      </div>

      {/* Quick Stats */}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-lg bg-linear-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg'>
          <h3 className='text-sm font-medium opacity-90'>Total Users</h3>
          <p className='mt-2 text-3xl font-bold'>100</p>
        </div>
        <div className='rounded-lg bg-linear-to-br from-green-500 to-green-600 p-6 text-white shadow-lg'>
          <h3 className='text-sm font-medium opacity-90'>Properties</h3>
          <p className='mt-2 text-3xl font-bold'>256</p>
        </div>
        <div className='rounded-lg bg-linear-to-br from-purple-500 to-purple-600 p-6 text-white shadow-lg'>
          <h3 className='text-sm font-medium opacity-90'>Partners</h3>
          <p className='mt-2 text-3xl font-bold'>45</p>
        </div>
        <div className='rounded-lg bg-linear-to-br from-orange-500 to-orange-600 p-6 text-white shadow-lg'>
          <h3 className='text-sm font-medium opacity-90'>Pending Requests</h3>
          <p className='mt-2 text-3xl font-bold'>12</p>
        </div>
      </div>
    </div>
  );
}
