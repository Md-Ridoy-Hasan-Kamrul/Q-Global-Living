"use client";

import { useCallback, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/i18n";

export default function ChangePasswordForm() {
    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'en';
    const { t } = useTranslation(locale);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const idCurrent = useId();
    const idNew = useId();
    const idConfirm = useId();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!currentPassword) {
            setError(t("dashboard.client.password.errors.currentRequired"));
            return;
        }
        if (newPassword.length < 8) {
            setError(t("dashboard.client.password.errors.minLength"));
            return;
        }
        if (newPassword !== confirmPassword) {
            setError(t("dashboard.client.password.errors.mismatch"));
            return;
        }

        setSaving(true);
        try {
            // Replace with real API call. Simulate network latency here.
            await new Promise((res) => setTimeout(res, 900));
            setMessage(t("dashboard.client.password.updated"));
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (err) {
            setError(t("dashboard.client.password.errors.updateFailed"));
        } finally {
            setSaving(false);
        }
    }, [currentPassword, newPassword, confirmPassword, t]);

    return (
        <div className="rounded-lg bg-white shadow-sm mt-6">
            <div className="border-b px-4 sm:px-8 border-gray-300 py-6">
                <h2 className="text-xl font-semibold text-slate-800">{t("dashboard.client.password.title")}</h2>
            </div>
            <form id="change-password-form" onSubmit={handleSubmit} className="px-4 sm:px-8 py-6">
                <div>
                    <label htmlFor={idCurrent} className="mb-2 block text-base font-medium text-slate-700">{t("dashboard.client.password.currentPassword")}</label>
                    <input
                        id={idCurrent}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        type="password"
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    <div>
                        <label htmlFor={idNew} className="mb-2 block text-base font-medium text-slate-700">{t("dashboard.client.password.newPassword")}</label>
                        <input
                            id={idNew}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            type="password"
                            placeholder={t("dashboard.client.password.placeholders.new")}
                            className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        />
                    </div>

                    <div>
                        <label htmlFor={idConfirm} className="mb-2 block text-base font-medium text-slate-700">{t("dashboard.client.password.confirmPassword")}</label>
                        <input
                            id={idConfirm}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            placeholder={t("dashboard.client.password.placeholders.confirm")}
                            className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        />
                    </div>
                </div>

                {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
            </form>

            {/* full-width divider */}
            <div className="border-t border-gray-200" />

            <div className="px-4 sm:px-8 py-6 flex items-center justify-end">
                <button
                    type="submit"
                    form="change-password-form"
                    disabled={saving}
                    className="inline-flex items-center rounded-md bg-primary px-5 py-2 text-base font-medium text-white cursor-pointer hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                >
                    {saving ? t("dashboard.client.password.saving") : t("dashboard.client.password.updateButton")}
                </button>
            </div>
        </div>
    );
}
