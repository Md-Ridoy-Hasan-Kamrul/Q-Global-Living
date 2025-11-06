"use client";

import React from 'react';
import { Plus } from 'lucide-react';

export default function AppointmentsHeader({ count = 0, onNew }) {
    return (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
                <p className="text-gray-600 mt-1">Total appointments: {count}</p>
            </div>

            <button
                onClick={onNew}
                className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 transition"
            >
                <Plus size={18} />
                New Appointment
            </button>
        </div>
    );
}
