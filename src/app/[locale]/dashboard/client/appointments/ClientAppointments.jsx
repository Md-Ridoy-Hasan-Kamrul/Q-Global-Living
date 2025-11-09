"use client";
import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/i18n';

// Lazy load heavier child components to split bundles
const AppointmentsHeader = React.lazy(() => import('../../../../../components/dashboard/client/AppointmentsHeader'));
const AppointmentsTable = React.lazy(() => import('../../../../../components/dashboard/client/AppointmentsTable'));
const AppointmentDetailModal = React.lazy(() => import('../../../../../components/dashboard/client/AppointmentDetailModal'));
const NewAppointmentModal = React.lazy(() => import('../../../../../components/dashboard/client/NewAppointmentModal'));

export default function ClientAppointments() {
    const [appointments, setAppointments] = useState([
        { id: 1, full_name: 'Rahim Ahmed', email: 'rahim@example.com', phone: '01700000001', appointment_type: 'Property Visit', preferred_date: '2025-11-15', preferred_time: '10:00 AM', status: 'confirmed', notes: 'Interested in viewing the property' },
        { id: 2, full_name: 'Fatema Khan', email: 'fatema@example.com', phone: '01800000002', appointment_type: 'Consultation', preferred_date: '2025-11-16', preferred_time: '02:00 PM', status: 'pending', notes: 'Wants to learn about loan facilities' },
        { id: 3, full_name: 'Karim Saheb', email: 'karim@example.com', phone: '01900000003', appointment_type: 'Document Verification', preferred_date: '2025-11-10', preferred_time: '11:00 AM', status: 'completed', notes: 'Document verification completed' }
    ]);

    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);
    const [query, setQuery] = useState('');
    const [formData, setFormData] = useState({ full_name: '', email: '', phone: '', appointment_type: 'Property Visit', preferred_date: '', preferred_time: '', notes: '' });

    const getStatusColor = (status) => {
        const colors = { confirmed: 'bg-green-100 text-green-800', pending: 'bg-yellow-100 text-yellow-800', completed: 'bg-blue-100 text-blue-800', cancelled: 'bg-red-100 text-red-800' };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const getStatusLabel = (status) => {
        const labels = { confirmed: 'Confirmed', pending: 'Pending', completed: 'Completed', cancelled: 'Cancelled' };
        return labels[status] || status;
    };

    const handleDelete = (id) => setAppointments((prev) => prev.filter(apt => apt.id !== id));
    const handleStatusChange = (id, newStatus) => setAppointments((prev) => prev.map(apt => (apt.id === id ? { ...apt, status: newStatus } : apt)));

    const handleCreateAppointment = () => {
        const newAppointment = { id: Math.max(...appointments.map(a => a.id), 0) + 1, ...formData, status: 'pending' };
        setAppointments((prev) => [...prev, newAppointment]);
        setFormData({ full_name: '', email: '', phone: '', appointment_type: 'Property Visit', preferred_date: '', preferred_time: '', notes: '' });
        setShowNewModal(false);
    };

    // prevent body scroll when any modal is open
    useEffect(() => {
        const open = showModal || showNewModal;
        const body = typeof document !== 'undefined' ? document.body : null;
        if (body) {
            if (open) body.classList.add('overflow-hidden'); else body.classList.remove('overflow-hidden');
        }
        return () => { if (body) body.classList.remove('overflow-hidden'); };
    }, [showModal, showNewModal]);

    const { locale } = useLanguage();
    const { t } = useTranslation(locale);

    return (
        <div className="min-h-screen bg-gray-50 space-y-6">
            <div className="flex items-start justify-between gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('dashboard.client.appointments') || 'All Appointments'}</h1>

                {/* New button - inline SVG plus to avoid pulling icon library */}
                <div className="shrink-0">
                    <button onClick={() => setShowNewModal(true)} className="bg-primary text-white px-4 py-2 md:px-6 md:py-2 rounded-lg flex items-center gap-2 transition text-sm md:text-base">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {t('dashboard.client.newAppointment') || '+ New Appointment'}
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <Suspense fallback={<div className="py-6">Loading header…</div>}>
                    <AppointmentsHeader count={appointments.length} query={query} onQueryChange={(q) => setQuery(q)} />
                </Suspense>

                <Suspense fallback={<div className="py-6">Loading table…</div>}>
                    <AppointmentsTable appointments={appointments} query={query} onQueryChange={(q) => setQuery(q)} onView={(apt) => { setSelectedAppointment(apt); setShowModal(true); }} onEdit={(id) => { }} onDelete={handleDelete} onStatusChange={handleStatusChange} />
                </Suspense>
            </div>

            <Suspense fallback={null}>
                <AppointmentDetailModal appointment={selectedAppointment} show={showModal} onClose={() => setShowModal(false)} getStatusColor={getStatusColor} getStatusLabel={getStatusLabel} />
            </Suspense>

            <Suspense fallback={null}>
                <NewAppointmentModal show={showNewModal} onClose={() => setShowNewModal(false)} formData={formData} setFormData={setFormData} onCreate={handleCreateAppointment} />
            </Suspense>
        </div>
    );
}
