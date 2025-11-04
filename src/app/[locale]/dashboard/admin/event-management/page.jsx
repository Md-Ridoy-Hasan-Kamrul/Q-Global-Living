export const metadata = {
  title: 'Event Management - Admin Dashboard',
  description: 'Manage platform events',
};

export default function EventManagement() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>
          Event Management
        </h2>
        <p className='text-gray-600'>
          Create and manage property viewing events and webinars.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-gray-900'>
            Upcoming Events
          </h3>
          <button className='rounded-lg bg-[#E6B325] px-4 py-2 text-sm font-medium text-[#0F1B2E] hover:bg-[#d4a520] transition-colors'>
            + Create Event
          </button>
        </div>
        <div className='text-center py-12 text-gray-500'>
          Event management interface will be displayed here.
        </div>
      </div>
    </div>
  );
}
