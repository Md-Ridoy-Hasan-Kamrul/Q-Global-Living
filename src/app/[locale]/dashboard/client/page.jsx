import ClientDashboardContent from './content/ClientDashboardContent';
export const metadata = {
  title: 'Profile Details - Client Dashboard',
  description: 'View and manage your profile',
};
export default function ClientDashboardPage() {
  // Server component: render the client-only content component
  return <ClientDashboardContent />;
}
