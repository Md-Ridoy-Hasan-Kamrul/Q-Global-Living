import ClientLoader from './ClientLoader';

export default function AppointmentsPage() {
  // Server component rendering a small client wrapper that performs the
  // client-only dynamic import. This keeps the page server-rendered but
  // moves the `ssr:false` usage into a client component (required by Next).
  return <ClientLoader />;
}