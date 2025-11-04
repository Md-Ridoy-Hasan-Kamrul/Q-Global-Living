export const metadata = {
  title: 'Concierge Requests - Admin Dashboard',
  description: 'Manage concierge service requests',
};

export default function ConciergeRequests() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>
          Concierge Requests
        </h2>
        <p className='text-gray-600'>
          Manage and respond to concierge service requests.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>
          Active Requests
        </h3>
        <div className='text-center py-12 text-gray-500'>
          Concierge requests will be displayed here.
        </div>
      </div>
    </div>
  );
}
