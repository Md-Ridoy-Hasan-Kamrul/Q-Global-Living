"use client";

import { useState } from "react";
import Image from "next/image";

export default function RegistrationCard() {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.email) {
            setStatus({ type: "error", message: "Please enter name and email." });
            return;
        }
        setStatus({ type: "loading", message: "Registering..." });
        // simulate API
        setTimeout(() => {
            setStatus({ type: "success", message: "You're registered — check your email for the link." });
            setForm({ name: "", email: "", phone: "" });
        }, 900);
    }

    return (
        <aside className="w-full">
            <div className="rounded-lg bg-white p-6 shadow-md">
                <h4 className="text-lg font-semibold text-slate-900">Save Your Seat</h4>
                <p className="mt-2 text-sm text-slate-500">Register for free to get the access link.</p>

                <form id="event-registration-form" className="mt-4 space-y-3" onSubmit={handleSubmit}>
                    <label className="block">
                        <div className="text-xs text-slate-600 mb-1">Full Name</div>
                        <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
                    </label>

                    <label className="block">
                        <div className="text-xs text-slate-600 mb-1">Email Address</div>
                        <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
                    </label>

                    <label className="block">
                        <div className="text-xs text-slate-600 mb-1">Phone Number <span className="text-xs text-slate-400">(Optional)</span></div>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
                    </label>

                    <div>
                        <button type="submit" className="w-full rounded-md bg-[#E6B325] px-4 py-2 text-sm font-semibold text-[#0F1B2E] hover:bg-[#d4a520]">
                            Register Now
                        </button>
                    </div>
                </form>

                {status && (
                    <div className={`mt-3 text-sm ${status.type === 'success' ? 'text-green-700' : status.type === 'error' ? 'text-red-600' : 'text-slate-600'}`}>
                        {status.message}
                    </div>
                )}

                <div className="mt-4 text-center text-xs text-slate-400">Share this exclusive event:</div>
                <div className="mt-3 flex items-center justify-center gap-3">
                    <button aria-label="share-linkedin" className="text-slate-600 hover:text-slate-800">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24H18v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8V8z" /></svg>
                    </button>
                    <button aria-label="share-facebook" className="text-slate-600 hover:text-slate-800">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3V21.9C18.34 21.12 22 16.99 22 12z" /></svg>
                    </button>
                    <button aria-label="share-twitter" className="text-slate-600 hover:text-slate-800">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.73 1.04A4.28 4.28 0 0 0 11.3 9.5c0 .34.04.67.12.99A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.33 5.72 4.22 4.22 0 0 1-1.94-.54v.06c0 2 .01 3.5 2.03 4.86a4.28 4.28 0 0 0 2.03.55c2.43 0 3.76-1.95 3.76-3.76v-.18c.26-.19.5-.42.71-.68.98-.06 1.9-.36 2.74-.86a8.6 8.6 0 0 1-2.15 2.23z" /></svg>
                    </button>
                </div>
            </div>
        </aside>
    );
}
