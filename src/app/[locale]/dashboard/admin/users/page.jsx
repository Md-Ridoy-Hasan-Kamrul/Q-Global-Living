export const metadata = {
  title: 'User Management - Admin Dashboard',
  description: 'Manage users on Q Homes platform',
};

export default function AdminUsersPage() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>
          User Management
        </h2>
        <p className='text-gray-600'>
          View and manage all registered users on the platform.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-gray-900'>All Users</h3>
          <button className='rounded-lg bg-[#E6B325] px-4 py-2 text-sm font-medium text-[#0F1B2E] hover:bg-[#d4a520] transition-colors'>
            + Add New User
          </button>
        </div>
        <div className='text-center py-12 text-gray-500'>
          User management interface will be displayed here.
        </div>
      </div>
    </div>
  );
}
