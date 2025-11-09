import SmsSetupClient from './SmsSetupClient';

export const metadata = {
    title: 'SMS 2FA Setup - QHomes',
    description: 'Set up SMS Two-Factor Authentication for your account',
};

export default function SmsSetupPage() {
    return <SmsSetupClient />;
}
