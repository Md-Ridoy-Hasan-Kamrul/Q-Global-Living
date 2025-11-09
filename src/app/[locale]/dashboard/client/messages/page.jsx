import NotificationsClient from './NotificationsClient';

export const metadata = {
  title: 'Your Notifications | Property Alerts & Updates',
  description: 'View your latest property alerts and notifications including new listings, price drops, and saved search updates.',
  keywords: ['property notifications', 'real estate alerts', 'price drops', 'new listings'],
  openGraph: {
    title: 'Your Notifications | Property Alerts',
    description: 'Stay updated with latest property alerts and notifications',
    url: 'https://yourdomain.com/notifications'
  }
};
  
const initialNotifications = [
  {
    id: 1,
    type: 'new_listing',
    label: 'New Listing Match',
    title: 'New 3-BR villa in Assinie',
    message: 'This property matches your saved search criteria. Featuring a private pool and ocean views.',
    related_property_id: 101,
    is_read: false,
    created_at: '2025-11-04T10:00:00.000Z',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsIF2496ZETlZRcSQAvFV6hvbkbW5i8d5fKuuyVd5D4Mdcwm8pEuc3HMNi7vDGB-caxIzHdTegVmto6u_J276TJXHTAcaI1IKo8g4VRB_PJ-wb55R7DKGTJeJ4w_e92eNQhFzKse-DmmgwR_wGtQt1gDbgBWYSHTfPjWkHxVTib-kvMGexqV96yaDp8MF4LMTDWjQV7MZZzxb2Z3ubBApOwEJIblbNi3lv5r0ciKj3Py1gCoWwpldJ0yWQo3Ezcvu7w585fODWxcE',
    action: 'View Property'
  },
  {
    id: 2,
    type: 'price_drop',
    label: 'Price Drop Alert',
    title: '4-bedroom villa in Cocody',
    message: 'The price on this property you saved has just dropped by 5%. Don\'t miss out on this opportunity.',
    related_property_id: 102,
    is_read: false,
    created_at: '2025-11-03T09:00:00.000Z',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF4Ec3Rxbh8Qy2RveH_919BwN14HJU2gmUjDNp_Ktng7njB5kRAzco6hEsCSx8llkRr_OEjta-6CO5wYclgIzGr7z89YcBFfMFL5ulNLox3agWtQx8rEnlMVU68fNQP0q-En2_Wplv2Mw711pokNBhGK7zm9BmcuEliBjgadHXDLZTbT_duxK2Ml7vT2bo2AgyuQvcKnmxIRO_L5awrqDUgVy0XlOY2UMdye0a9MOhi7rlZPiOhdD3iNaGyHgsiyTmt0J33B5e8Tg',
    action: 'View Details'
  },
  {
    id: 3,
    type: 'saved_search_update',
    label: 'Saved Search Update',
    title: 'New apartment in Marcory',
    message: 'A new property matches your "2-bedroom apartment in Marcory" saved search.',
    related_property_id: 103,
    is_read: true,
    created_at: '2025-10-31T08:00:00.000Z',
    image:'https://lh3.googleusercontent.com/aida-public/AB6AXuAacBJp6ynud4_vm3qygOKZjofLh3fg_U5QdsBJjo9RmB_wQPsEa9XCH8dbzpGgXru-KDcgQljpUZs74tt61cePOvfd_7av-kObFHPhbYe5UkjziBaJSr-hHOTa6bAKLdHETX1ulaejyBtMFur_5kgdGu-Awwrj-_QEcgYZB0FatwLWXWM7x_PsEcu7KhWILqIps1d1OeXkgfldgzvzUgha8mS_mCjeNH2TfH5dPTD60seSQvwBRtMe5O0o5L53HIKWNEpQX9f-q04',
    action: 'Go to Property'
  }
];

export default function NotificationsPage() {
  // Server component: pass module-scope static data into a client component
  return <NotificationsClient initialNotifications={initialNotifications} />;
}