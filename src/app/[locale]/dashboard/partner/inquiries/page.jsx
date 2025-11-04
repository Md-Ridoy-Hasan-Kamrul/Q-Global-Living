export const metadata = {
  title: 'Inquiries - Partner Dashboard',
  description: 'Manage property inquiries',
};

export default function PartnerInquiriesPage() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>Inquiries</h2>
        <p className='text-gray-600'>
          View and respond to property inquiries from potential buyers.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>
          Recent Inquiries
        </h3>
        <div className='text-center py-12 text-gray-500'>
          Property inquiries will be displayed here.
        </div>
      </div>
    </div>
  );
}
