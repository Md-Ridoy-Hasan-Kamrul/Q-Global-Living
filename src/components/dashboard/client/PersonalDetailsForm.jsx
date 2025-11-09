"use client";

import { useTranslation } from "@/i18n";
import { usePathname } from "next/navigation";
import { useCallback, useId, useState } from "react";

export default function PersonalDetailsForm() {
    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'en';
    const { t } = useTranslation(locale);
    const [firstName, setFirstName] = useState("Amelia");
    const [lastName, setLastName] = useState("Lawson");
    const [email, setEmail] = useState("amelia.lawson@email.com");
    const [phone, setPhone] = useState("+225 00 00 00 00 00");
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("info"); // 'info' | 'success' | 'error'

    const idFirst = useId();
    const idLast = useId();
    const idEmail = useId();
    const idPhone = useId();

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setMessage("");
        setMessageType("info");

        // Basic client-side validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMessage(t("dashboard.client.personalDetails.errors.emailInvalid"));
            setMessageType("error");
            return;
        }

        setSaving(true);
        try {
            // Replace with real API call.
            await new Promise((res) => setTimeout(res, 800));
            setMessage(t("dashboard.client.personalDetails.saved"));
            setMessageType("success");
        } catch (err) {
            setMessage(t("dashboard.client.personalDetails.errors.saveFailed"));
            setMessageType("error");
        } finally {
            setSaving(false);
        }
    }, [email, t]);

    return (
        <div className="rounded-lg bg-white shadow-sm">
            <div className="border-b border-gray-300 px-4 sm:px-8 py-4">
                <h2 className="text-2xl font-semibold text-slate-800">{t("dashboard.client.personalDetails.title")}</h2>
            </div>
            <form id="personal-details-form" onSubmit={handleSubmit} className="px-4 sm:px-8 py-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    <div>
                        <label htmlFor={idFirst} className="mb-2 block text-base font-medium text-slate-700">{t("dashboard.client.firstName")}</label>
                        <input
                            id={idFirst}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        />
                    </div>

                    <div>
                        <label htmlFor={idLast} className="mb-2 block text-base font-medium text-slate-700">{t("dashboard.client.lastName")}</label>
                        <input
                            id={idLast}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor={idEmail} className="mb-2 block text-base font-medium text-slate-700">{t("dashboard.client.email")}</label>
                    <input
                        id={idEmail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        aria-invalid={messageType === 'error'}
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor={idPhone} className="mb-2 block text-base font-medium text-slate-700">{t("dashboard.client.phone")}</label>
                    <input
                        id={idPhone}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>

                {message && (
                    <p className={`mt-4 text-sm ${messageType === 'error' ? 'text-red-600' : messageType === 'success' ? 'text-green-600' : 'text-slate-600'}`}>{message}</p>
                )}
            </form>

            {/* full-width divider that touches card edges */}
            <div className="border-t border-gray-200" />

            <div className="px-4 sm:px-8 py-6 flex items-center justify-end">
                <button
                    type="submit"
                    form="personal-details-form"
                    disabled={saving}
                    className="inline-flex items-center rounded-md bg-primary px-5 py-2 text-base font-medium text-white hover:text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                >
                    {saving ? t("dashboard.client.personalDetails.saving") : t("dashboard.client.personalDetails.saveButton")}
                </button>
            </div>
        </div>
    );
}
