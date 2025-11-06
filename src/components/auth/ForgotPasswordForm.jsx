"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FormInput from './FormInput';
import QHomesLogo from './QHomesLogo';
import { useTranslation } from '@/i18n';

const ForgotPasswordForm = () => {
    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'en';
          const { t } = useTranslation(locale);

    const [email, setEmail] = useState('');
    const [isLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [maskedEmail, setMaskedEmail] = useState('');

    const maskEmail = (addr) => {
        if (!addr || !addr.includes('@')) return addr;
        const [local, domain] = addr.split('@');
        const first = local.charAt(0) || '';
        return `${first}***@${domain}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Design only - show confirmation UI with masked email
        setMaskedEmail(maskEmail(email));
        setShowConfirmation(true);
    };

    const handleResend = (e) => {
        e?.preventDefault();
        // design-only: toggle/show confirmation again (could show a toast)
        setMaskedEmail(maskEmail(email));
        setShowConfirmation(true);
    };

    return (
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-8 sm:p-10 shadow-2xl">
            <div className="flex flex-col items-center gap-3 pb-2">
                <QHomesLogo className="h-12 w-auto" />
                <h1 className="text-charcoal-800 dark:text-background-light text-3xl sm:text-4xl font-bold tracking-tight text-center">
                    {t('auth.forgotPassword.title')}
                </h1>
                <p className="text-charcoal-500 dark:text-charcoal-300 text-center text-sm max-w-md">
                    {t('auth.forgotPassword.subtitle')}
                </p>
            </div>

            {!showConfirmation ? (
                <form onSubmit={handleSubmit} className="flex w-full flex-col items-stretch gap-4 mt-2" noValidate>
                    <FormInput
                        label={t('auth.forgotPassword.email')}
                        type="email"
                        name="email"
                        placeholder={t('auth.forgotPassword.emailPlaceholder')}
                        icon="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-bold text-charcoal-800 transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {t('auth.forgotPassword.submitButton')}
                    </button>

                    <p className="text-center text-sm text-charcoal-500 dark:text-charcoal-300 mt-2">
                        {t('auth.forgotPassword.backToLogin')}{' '}
                        <Link href={`/${locale}/login`} className="text-primary font-medium hover:underline">
                            {t('auth.forgotPassword.backToLogin')}
                        </Link>
                    </p>
                </form>
            ) : (
                <div className="w-full">
                    <div className="flex flex-col items-center gap-4 p-8 rounded-lg bg-white dark:bg-background-dark/80 text-center">
                        <div className="h-12 w-12 rounded-full bg-yellow-50 flex items-center justify-center">
                            <span className="material-symbols-outlined text-yellow-500">email</span>
                        </div>
                        <h2 className="text-2xl font-bold text-charcoal-800">{t('auth.forgotPassword.checkEmail')}</h2>
                        <p className="text-sm text-charcoal-500 max-w-xs">
                            {t('auth.forgotPassword.checkEmailInstructions', { email: maskedEmail })}
                        </p>

                        <div className="w-full mt-4">
                            <Link href={`/${locale}/login`} className="flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-bold text-charcoal-800 hover:bg-primary/90">
                                {t('auth.forgotPassword.returnToLogin')}
                            </Link>
                        </div>

                        <p className="text-sm text-charcoal-500 mt-3">
                            {t('auth.forgotPassword.didNotReceiveEmail')}{' '}
                            <a href="#" onClick={handleResend} className="underline text-primary hover:text-primary/90">{t('auth.forgotPassword.resend')}</a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPasswordForm;
