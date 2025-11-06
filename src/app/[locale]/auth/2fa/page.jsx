export const metadata = {
    title: 'Two-Factor Authentication',
    description: 'Enter the 6-digit code sent to your device to complete sign in.'
};

import TwoFactorClient from './TwoFactorClient';

export default function TwoFactorPage() {
    // Server component: keeps metadata & server-side checks here if needed.
    // For this dummy page we simply render the client-side form.
    return <TwoFactorClient />;
}
