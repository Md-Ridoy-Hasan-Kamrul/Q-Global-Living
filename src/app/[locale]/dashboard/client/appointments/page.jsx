export const metadata = {
  title: 'Appointments - Client Dashboard',
  description: 'Manage your property viewing appointments',
};

export default function Appointments() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>Appointments</h2>
        <p className='text-gray-600'>
          View and manage your scheduled property viewings.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='text-lg font-semibold text-gray-900'>
            Upcoming Appointments
          </h3>
          <button className='rounded-lg bg-[#E6B325] px-4 py-2 text-sm font-medium text-[#0F1B2E] hover:bg-[#d4a520] transition-colors'>
            + Schedule Viewing
          </button>
        </div>
        <div className='text-center py-12 text-gray-500'>
          Your appointments will be displayed here.
        </div>
      </div>
    </div>
  );
}
