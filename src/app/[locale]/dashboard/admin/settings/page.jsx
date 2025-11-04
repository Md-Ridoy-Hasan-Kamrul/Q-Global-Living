export const metadata = {
  title: 'Settings - Admin Dashboard',
  description: 'Configure platform settings',
};

export default function AdminSettingsPage() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>Settings</h2>
        <p className='text-gray-600'>
          Configure platform settings and preferences.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>
          General Settings
        </h3>
        <div className='text-center py-12 text-gray-500'>
          Settings interface will be displayed here.
        </div>
      </div>
    </div>
  );
}
