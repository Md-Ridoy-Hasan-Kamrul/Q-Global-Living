export const metadata = {
  title: 'Messages - Client Dashboard',
  description: 'View your messages and communications',
};

export default function Messages() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>Messages</h2>
        <p className='text-gray-600'>
          Communicate with property owners and partners.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>
          Your Messages
        </h3>
        <div className='text-center py-12 text-gray-500'>
          Your messages will be displayed here.
        </div>
      </div>
    </div>
  );
}
