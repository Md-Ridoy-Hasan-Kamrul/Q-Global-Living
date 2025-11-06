'use client';

import { memo } from 'react';

const ACTION_BADGE_STYLES = {
  propertyApproved: 'bg-green-100 text-green-700',
  userSuspended: 'bg-red-100 text-red-700',
  settingsChanged: 'bg-blue-100 text-blue-700',
  passwordReset: 'bg-yellow-100 text-yellow-700',
  propertyRejected: 'bg-orange-100 text-orange-700',
  userCreated: 'bg-purple-100 text-purple-700',
  loginSuccess: 'bg-emerald-100 text-emerald-700',
  loginFailed: 'bg-rose-100 text-rose-700',
  dataExported: 'bg-indigo-100 text-indigo-700',
  permissionChanged: 'bg-amber-100 text-amber-700',
};

const AuditLogsTable = memo(({ logs, translations }) => {
  const getActionBadgeStyle = (actionType) => {
    return ACTION_BADGE_STYLES[actionType] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className='overflow-hidden'>
      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead className='bg-gray-50 border-b border-gray-200'>
            <tr>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.dateTime}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.userActor}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.actionPerformed}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.itemAffected}
              </th>
              <th className='px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap'>
                {translations.table.ipAddress}
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {logs.map((log) => (
              <tr
                key={log.id}
                className='hover:bg-gray-50 transition-colors duration-150'
              >
                <td className='px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500'>
                  {log.dateTime}
                </td>
                <td className='px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 font-medium'>
                  {log.user}
                </td>
                <td className='px-4 sm:px-6 py-4 whitespace-nowrap'>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${getActionBadgeStyle(
                      log.actionType
                    )}`}
                  >
                    {translations.actions[log.actionType] || log.action}
                  </span>
                </td>
                <td className='px-4 sm:px-6 py-4 text-xs sm:text-sm text-gray-600'>
                  {log.itemAffected}
                </td>
                <td className='px-4 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500'>
                  {log.ipAddress}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

AuditLogsTable.displayName = 'AuditLogsTable';

export default AuditLogsTable;
