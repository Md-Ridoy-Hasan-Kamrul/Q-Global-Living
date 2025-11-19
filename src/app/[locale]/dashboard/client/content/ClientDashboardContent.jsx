'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from "@/i18n";
import ChangePasswordForm from "@/components/dashboard/client/ChangePasswordForm";
import PersonalDetailsForm from '@/components/dashboard/client/PersonalDetailsForm';

export default function ClientDashboardContent() {

    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'en';
    const { t } = useTranslation(locale);
    const router = useRouter();

    const goTo2FA = () => {
        router.push(`/${locale}/auth/2fa`);
    };

    return (
        <div className="space-y-6">
            {/* Page header */}
            <header  className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5078] rounded-lg p-6 shadow-lg mb-6">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t("dashboard.client.profile")}</h1>
                        <p className="text-sm sm:text-base text-white/80">{t("dashboard.client.subtitle")}</p>
                 
                
            </header>

            {/* Components: personal details and change password (client-side) */}
            <div className="space-y-6 ">
                <PersonalDetailsForm />
                <ChangePasswordForm />
            </div>
        </div>
    );
}
