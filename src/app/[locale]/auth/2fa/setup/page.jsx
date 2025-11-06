import SetupClient from './SetupClient';

export const metadata = {
    title: 'Set Up Two-Factor Authentication',
    description: 'Set up an authenticator app or SMS for two-factor authentication.'
};

export default function SetupPage({ searchParams }) {
    const method = searchParams?.method || 'authenticator';
    return <SetupClient method={method} />;
}
