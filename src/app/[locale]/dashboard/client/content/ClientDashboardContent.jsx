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
            <header className="rounded-lg">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900">{t("dashboard.client.profile")}</h1>
                        <p className="mt-3 text-slate-500 text-lg max-w-2xl">{t("dashboard.client.subtitle")}</p>
                    </div>

                    {/* <div className="ml-4">
                        <button
                            type="button"
                            onClick={goTo2FA}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold"
                            aria-label="Go to Two Factor page"
                        >
                            Manage 2FA
                        </button>
                    </div> */}
                </div>
            </header>

            {/* Components: personal details and change password (client-side) */}
            <div className="space-y-6 ">
                <PersonalDetailsForm />
                <ChangePasswordForm />
            </div>
        </div>
    );
}
