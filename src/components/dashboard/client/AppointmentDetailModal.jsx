"use client";

import React from 'react';
import { X, Calendar, Clock, Mail, Phone } from 'lucide-react';

export default function AppointmentDetailModal({ appointment, show, onClose, getStatusColor, getStatusLabel }) {
    if (!show || !appointment) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl h-full w-full ">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold">Appointment Details</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 grid grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-600 text-sm flex items-center gap-1">Name</p>
                        <p className="font-semibold text-gray-900">{appointment.full_name}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm flex items-center gap-1"><Mail size={14} /> Email</p>
                        <p className="font-semibold text-gray-900">{appointment.email}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm flex items-center gap-1"><Phone size={14} /> Phone</p>
                        <p className="font-semibold text-gray-900">{appointment.phone}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">Appointment Type</p>
                        <p className="font-semibold text-gray-900">{appointment.appointment_type}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm flex items-center gap-1"><Calendar size={14} /> Preferred Date</p>
                        <p className="font-semibold text-gray-900">{appointment.preferred_date ? new Date(appointment.preferred_date).toLocaleDateString('en-US') : '-'}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm flex items-center gap-1"><Clock size={14} /> Preferred Time</p>
                        <p className="font-semibold text-gray-900">{appointment.preferred_time || '-'}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-600 text-sm">Notes</p>
                        <p className="font-semibold text-gray-900">{appointment.notes}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-gray-600 text-sm">Status</p>
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                            {getStatusLabel(appointment.status)}
                        </span>
                    </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">Close</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Edit Appointment</button>
                </div>
            </div>
        </div>
    );
}



