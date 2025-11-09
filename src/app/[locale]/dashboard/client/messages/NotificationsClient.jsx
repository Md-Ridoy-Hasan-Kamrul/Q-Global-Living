

"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';
import React, { useState } from 'react';

export default function PropertyNotifications() {
  const { locale } = useLanguage();
    const { t } = useTranslation(locale)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'New Listing Match',
      title: 'New 3-BR villa in Assinie',
      description: 'This property matches your saved search criteria. Featuring a private pool and ocean views.',
      time: '2 hours ago',
      read: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsIF2496ZETlZRcSQAvFV6hvbkbW5i8d5fKuuyVd5D4Mdcwm8pEuc3HMNi7vDGB-caxIzHdTegVmto6u_J276TJXHTAcaI1IKo8g4VRB_PJ-wb55R7DKGTJeJ4w_e92eNQhFzKse-DmmgwR_wGtQt1gDbgBWYSHTfPjWkHxVTib-kvMGexqV96yaDp8MF4LMTDWjQV7MZZzxb2Z3ubBApOwEJIblbNi3lv5r0ciKj3Py1gCoWwpldJ0yWQo3Ezcvu7w585fODWxcE',
      action: 'View Property'
    },
    {
      id: 2,
      type: 'Price Drop Alert',
      title: '4-bedroom villa in Cocody',
      description: 'The price on this property you saved has just dropped by 5%. Don\'t miss out on this opportunity.',
      time: 'Yesterday',
      read: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF4Ec3Rxbh8Qy2RveH_919BwN14HJU2gmUjDNp_Ktng7njB5kRAzco6hEsCSx8llkRr_OEjta-6CO5wYclgIzGr7z89YcBFfMFL5ulNLox3agWtQx8rEnlMVU68fNQP0q-En2_Wplv2Mw711pokNBhGK7zm9BmcuEliBjgadHXDLZTbT_duxK2Ml7vT2bo2AgyuQvcKnmxIRO_L5awrqDUgVy0XlOY2UMdye0a9MOhi7rlZPiOhdD3iNaGyHgsiyTmt0J33B5e8Tg',
      action: 'View Details'
    },
    {
      id: 3,
      type: 'Saved Search Update',
      title: 'New apartment in Marcory',
      description: 'A new property matches your \'2-bedroom apartment in Marcory\' saved search.',
      time: '3 days ago',
      read: false,
      image:'https://lh3.googleusercontent.com/aida-public/AB6AXuAacBJp6ynud4_vm3qygOKZjofLh3fg_U5QdsBJjo9RmB_wQPsEa9XCH8dbzpGgXru-KDcgQljpUZs74tt61cePOvfd_7av-kObFHPhbYe5UkjziBaJSr-hHOTa6bAKLdHETX1ulaejyBtMFur_5kgdGu-Awwrj-_QEcgYZB0FatwLWXWM7x_PsEcu7KhWILqIps1d1OeXkgfldgzvzUgha8mS_mCjeNH2TfH5dPTD60seSQvwBRtMe5O0o5L53HIKWNEpQX9f-q04',
      action: 'Go to Property'
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getTagColor = (type) => {
    return 'text-amber-600';
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8 md:mb-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
             {t('dashboard.client.yourNotifications')} ({unreadCount})
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              {t('dashboard.client.notificationSubtitle')}
            </p>
          </div>
          <button
            onClick={markAllAsRead}
            className="bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-800 transition text-sm md:text-base whitespace-nowrap"
          >
            {t('dashboard.client.markallRead')}
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-6 lg:space-y-8">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start border-y py-4 border-gray-300 pb-6 lg:pb-8"
            >
              {/* Dot indicator */}
              <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-0 lg:pt-1 flex-shrink-0">
                <div className={`w-3 h-3 rounded-full ${notif.read ? 'bg-gray-400' : 'bg-amber-500'}`}></div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className={`text-xs lg:text-sm font-semibold mb-2 ${getTagColor(notif.type)}`}>
                  {notif.type}
                </div>
                <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-2">
                  {notif.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 mb-3 break-words">
                  {notif.description}
                </p>
                <div className="text-xs lg:text-sm text-gray-500 mb-4">
                  {notif.time}
                </div>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition text-sm lg:text-base">
                  {notif.action}
                </button>
              </div>

              {/* Image */}
              <div className="w-full lg:w-64 flex-shrink-0 lg:flex-shrink">
                <img
                  src={notif.image}
                  alt={notif.title}
                  className="w-full lg:w-64 h-40 lg:h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}





