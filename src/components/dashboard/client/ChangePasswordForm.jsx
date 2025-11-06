"use client";

import { useState } from "react";

export default function ChangePasswordForm() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setMessage("");

        if (!currentPassword) {
            setError("Please enter your current password.");
            return;
        }
        if (newPassword.length < 8) {
            setError("New password must be at least 8 characters.");
            return;
        }
        if (newPassword !== confirmPassword) {
            setError("New passwords do not match.");
            return;
        }

        setSaving(true);
        try {
            // Replace with real API call. Simulate network latency here.
            await new Promise((res) => setTimeout(res, 900));
            setMessage("Password updated successfully.");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (err) {
            setError("Unable to update password. Try again.");
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="rounded-lg bg-white shadow-sm mt-6">
            <div className="border-b px-8 border-gray-300 py-6">
                <h2 className="text-xl font-semibold text-slate-800">Change Password</h2>
            </div>

            <form id="change-password-form" onSubmit={handleSubmit} className="px-8 py-8">
                <div>
                    <label className="mb-2 block text-base font-medium text-slate-700">Current Password</label>
                    <input
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        type="password"
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-base font-medium text-slate-700">New Password</label>
                        <input
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            type="password"
                            placeholder="Enter new password"
                            className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-base font-medium text-slate-700">Confirm New Password</label>
                        <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        />
                    </div>
                </div>

                {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
                {message && <p className="mt-4 text-sm text-slate-600">{message}</p>}
            </form>

            {/* full-width divider */}
            <div className="border-t border-gray-200" />

            <div className="px-8 py-6 flex items-center justify-end">
                <button
                    type="submit"
                    form="change-password-form"
                    disabled={saving}
                    className="inline-flex items-center rounded-md bg-primary px-5 py-2 text-base font-medium text-white cursor-pointer hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                >
                    {saving ? "Updating..." : "Update Password"}
                </button>
            </div>
        </div>
    );
}
