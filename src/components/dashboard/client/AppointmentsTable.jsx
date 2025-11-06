"use client";

import React from 'react';
import { Eye, Edit2, Trash2, Calendar, Clock } from 'lucide-react';

export default function AppointmentsTable({ appointments = [], onView, onEdit, onDelete, onStatusChange }) {
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                            <th className="px-6 py-4 text-left text-sm font-semibold">Date & Time</th>
                           
                            <th className="px-6 py-4 text-center text-sm font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {appointments.length > 0 ? (
                            appointments.map((apt) => (
                                <tr key={apt.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">
                                        <div>
                                            <p className="font-medium text-gray-900">{apt.full_name}</p>
                                            <p className="text-sm text-gray-600">{apt.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-700">{apt.appointment_type}</td>
                                    <td className="px-6 py-4 text-gray-700">
                                        <div className="text-sm">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                {apt.preferred_date ? new Date(apt.preferred_date).toLocaleDateString('en-US') : '-'}
                                            </div>
                                            <div className="flex items-center gap-1 mt-1">
                                                <Clock size={16} />
                                                {apt.preferred_time || '-'}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => onView(apt)}
                                                className="text-blue-600 hover:bg-blue-50 p-2 rounded transition"
                                                title="View Details"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button onClick={() => onEdit(apt.id)} className="text-green-600 hover:bg-green-50 p-2 rounded transition" title="Edit">
                                                <Edit2 size={18} />
                                            </button>
                                            <button onClick={() => onDelete(apt.id)} className="text-red-600 hover:bg-red-50 p-2 rounded transition" title="Delete">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                    No appointments found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
