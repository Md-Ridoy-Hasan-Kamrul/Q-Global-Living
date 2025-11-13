'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VerificationPage() {
    const [form, setForm] = useState({ name: '', email: '', age: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function validate() {
        const err = {};
        if (!form.name.trim()) err.name = 'Name is required';
        if (!form.email.trim()) err.email = 'Email is required';
        if (!form.age || Number(form.age) <= 0) err.age = 'Valid age is required';
        return err;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const err = validate();
        setErrors(err);
        if (Object.keys(err).length === 0) {
            // For now we simulate a successful submission client-side
            setSubmitted(true);
        }
    }
    const steps = [
        {
            number: 1,
            title: "Legal Review",
            description: "Ownership, land title & permits."
        },
        {
            number: 2,
            title: "On-Site Validation",
            description: "Digital mapping + inspection."
        },
        {
            number: 3,
            title: "Developer Authentication",
            description: "RCCM/K-bis + track record."
        },
        {
            number: 4,
            title: "Escrow Readiness",
            description: "Eligibility via partner banks."
        },
        {
            number: 5,
            title: "Final Verification Badge",
            description: "Listings passing all checks receive “Verified by Q Homes.”"
        },
    ];
    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-5xl font-bold text-center mb-4">Verified by Q Homes</h1>

            <p className="text-charcoal-600 mb-6 text-center max-w-xl mx-auto">
                Every property listed on Q Homes goes through a digital and physical verification protocol designed by Q Global Living.
            </p>
            <div className="text-center mb-8">
                <Link href="/en/partner-verification" className="inline-block px-6 py-3 bg-primary text-charcoal rounded-lg font-semibold hover:opacity-95">Request Verification</Link>
            </div>
            <section className="bg-background-light py-5 mb-6 lg:mb-8">
                <div className="max-w-7xl mx-auto ">
                    <h2 className="text-4xl font-bold text-center text-charcoal mb-6 lg:mb-16">
                        How to Get Verified in 5 Simple Steps
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-12">
                        {steps.slice(0, 3).map((step, index) => (
                            <article key={index} className="text-center">
                                <div
                                    className="inline-flex items-center justify-center lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-primary text-charcoal text-xl lg:text-2xl font-bold lg:mb-6 mb-2.5 shadow-md"
                                    title="Checks completed by Q Global Living (The Quiah Group)"
                                    aria-label={`Step ${step.number}: ${step.title} - Checks completed by Q Global Living (The Quiah Group)`}
                                >
                                    {step.number}
                                </div>
                                <h3 className="lg:text-xl font-bold text-charcoal mb-1.5 lg:mb-3">{step.title}</h3>
                                <p className="text-charcoal-600">{step.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-center gap-8">
                        {steps.slice(3).map((step, idx) => (
                            <article key={idx} className="text-center max-w-sm">
                                <div
                                    className="inline-flex items-center justify-center lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-primary text-charcoal text-xl lg:text-2xl font-bold mb-4 shadow-md"
                                    title="Checks completed by Q Global Living (The Quiah Group)"
                                    aria-label={`Step ${step.number}: ${step.title} - Checks completed by Q Global Living (The Quiah Group)`}
                                >
                                    {step.number}
                                </div>
                                <h3 className="lg:text-xl font-bold text-charcoal mb-1.5 lg:mb-3">{step.title}</h3>
                                <p className="text-charcoal-600">{step.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Why It Matters</h3>
                <p className="text-charcoal-600">
                    We combine human verification with digital traceability to remove fraud and protect local and diaspora investors.
                </p>
            </section>

            <section className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Request Verification</h3>

                {submitted ? (
                    <div className="p-4 bg-green-50 border border-green-200 rounded">
                        <p className="text-green-700 font-semibold">Your verification request has been submitted. We will contact you at the email provided.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Age</label>
                            <input name="age" type="number" value={form.age} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                            {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Message (optional)</label>
                            <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 h-24" />
                        </div>

                        <div>
                            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-charcoal rounded-md font-semibold">Submit Request</button>
                        </div>
                    </form>
                )}
            </section>
        </main>
    );
}
