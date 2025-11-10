"use client";
import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the client UI with ssr:false inside a client component.
// This is required because `ssr: false` is not allowed from server components.
const ClientAppointments = dynamic(() => import('./ClientAppointments'), {
    ssr: false,
    loading: () => <div className="p-6">Loading appointments…</div>,
});

export default function ClientLoader() {
    return <ClientAppointments />;
}
