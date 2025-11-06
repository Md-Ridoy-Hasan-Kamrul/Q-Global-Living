"use client";

import { useState } from "react";

export default function PersonalDetailsForm() {
    const [firstName, setFirstName] = useState("Amelia");
    const [lastName, setLastName] = useState("Lawson");
    const [email, setEmail] = useState("amelia.lawson@email.com");
    const [phone, setPhone] = useState("+225 00 00 00 00 00");
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage("");
        // Basic client-side validation
        if (!email) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setSaving(true);
        try {
            // Replace with real API call. Simulate network latency here.
            await new Promise((res) => setTimeout(res, 800));
            setMessage("Profile saved successfully.");
        } catch (err) {
            setMessage("Unable to save profile. Try again.");
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="rounded-lg bg-white shadow-sm">
            <div className="border-b border-gray-300 px-8 py-4">
                <h2 className="text-2xl font-semibold text-slate-800">Personal Details</h2>
            </div>

            <form id="personal-details-form" onSubmit={handleSubmit} className="px-8 py-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-base font-medium text-slate-700">First Name</label>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-base font-medium text-slate-700">Last Name</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label className="mb-2 block text-base font-medium text-slate-700">Email Address</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>

                <div className="mt-6">
                    <label className="mb-2 block text-base font-medium text-slate-700">Phone Number</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        className="w-full rounded-md border border-slate-200 px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
                    />
                </div>

                {message && <p className="mt-4 text-sm text-slate-600">{message}</p>}
            </form>

            {/* full-width divider that touches card edges */}
            <div className="border-t border-gray-200" />

            <div className="px-8 py-6 flex items-center justify-end">
                <button
                    type="submit"
                    form="personal-details-form"
                    disabled={saving}
                    className="inline-flex items-center rounded-md bg-primary px-5 py-2 text-base font-medium text-white hover:text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
                >
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}
