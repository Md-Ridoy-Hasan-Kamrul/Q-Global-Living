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
    image: 'https://images.unsplash.com/photo-1512917774080-9b274b3d0facb?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab7?w=400&h=300&fit=crop',
    action: 'Go to Property'
  }
];

export default function NotificationsPage() {
  // Server component: pass module-scope static data into a client component
  return <NotificationsClient initialNotifications={initialNotifications} />;
}