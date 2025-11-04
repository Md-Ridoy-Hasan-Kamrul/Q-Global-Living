export const metadata = {
  title: 'Audit Logs - Admin Dashboard',
  description: 'View system audit logs',
};

export default function AuditLogs() {
  return (
    <div className='space-y-6'>
      <div className='rounded-lg bg-white p-8 shadow-sm'>
        <h2 className='mb-4 text-3xl font-bold text-gray-900'>Audit Logs</h2>
        <p className='text-gray-600'>
          Track all system activities and user actions.
        </p>
      </div>

      <div className='rounded-lg bg-white p-6 shadow-sm'>
        <h3 className='mb-4 text-lg font-semibold text-gray-900'>
          Recent Activities
        </h3>
        <div className='text-center py-12 text-gray-500'>
          Audit logs will be displayed here.
        </div>
      </div>
    </div>
  );
}
