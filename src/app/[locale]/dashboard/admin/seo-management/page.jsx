export const metadata = {
  title: 'SEO Management - Admin Dashboard',
  description: 'Manage SEO settings and optimization',
};

export default function SEOManagement() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>
          SEO Management
        </h2>
        <p className='text-gray-600'>
          Optimize your platform for search engines and manage meta tags.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>
          SEO Settings
        </h3>
        <div className='text-center py-12 text-gray-500'>
          SEO management interface will be displayed here.
        </div>
      </div>
    </div>
  );
}
