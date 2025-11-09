"use client";
import React, { useState, useEffect } from 'react';
import AppointmentsHeader from '../../../../../components/dashboard/client/AppointmentsHeader';
import AppointmentsTable from '../../../../../components/dashboard/client/AppointmentsTable';
import AppointmentDetailModal from '../../../../../components/dashboard/client/AppointmentDetailModal';
import NewAppointmentModal from '../../../../../components/dashboard/client/NewAppointmentModal';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      full_name: 'Rahim Ahmed',
      email: 'rahim@example.com',
      phone: '01700000001',
      appointment_type: 'Property Visit',
      preferred_date: '2025-11-15',
      preferred_time: '10:00 AM',
      status: 'confirmed',
      notes: 'Interested in viewing the property'
    },
    {
      id: 2,
      full_name: 'Fatema Khan',
      email: 'fatema@example.com',
      phone: '01800000002',
      appointment_type: 'Consultation',
      preferred_date: '2025-11-16',
      preferred_time: '02:00 PM',
      status: 'pending',
      notes: 'Wants to learn about loan facilities'
    },
    {
      id: 3,
      full_name: 'Karim Saheb',
      email: 'karim@example.com',
      phone: '01900000003',
      appointment_type: 'Document Verification',
      preferred_date: '2025-11-10',
      preferred_time: '11:00 AM',
      status: 'completed',
      notes: 'Document verification completed'
    }
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    appointment_type: 'Property Visit',
    preferred_date: '',
    preferred_time: '',
    notes: ''
  });

  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusLabel = (status) => {
    const labels = {
      confirmed: 'Confirmed',
      pending: 'Pending',
      completed: 'Completed',
      cancelled: 'Cancelled'
    };
    return labels[status] || status;
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments(appointments.map(apt =>
      apt.id === id ? { ...apt, status: newStatus } : apt
    ));
  };

  const handleCreateAppointment = () => {
    const newAppointment = {
      id: Math.max(...appointments.map(a => a.id), 0) + 1,
      ...formData,
      status: 'pending'
    };
    setAppointments([...appointments, newAppointment]);
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      appointment_type: 'Property Visit',
      preferred_date: '',
      preferred_time: '',
      notes: ''
    });
    setShowNewModal(false);
  };

  // prevent body scroll when any modal is open
  useEffect(() => {
    const open = showModal || showNewModal;
    const body = typeof document !== 'undefined' ? document.body : null;
    if (body) {
      if (open) {
        body.classList.add('overflow-hidden');
      } else {
        body.classList.remove('overflow-hidden');
      }
    }
    return () => {
      if (body) body.classList.remove('overflow-hidden');
    };
  }, [showModal, showNewModal]);

  return (
    <div className="min-h-screen bg-gray-50 space-y-6">

      <AppointmentsHeader count={appointments.length} onNew={() => setShowNewModal(true)} />

      <AppointmentsTable
        appointments={appointments}
        onView={(apt) => { setSelectedAppointment(apt); setShowModal(true); }}
        onEdit={(id) => { /* implement edit navigation or modal */ }}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />


      <AppointmentDetailModal
        appointment={selectedAppointment}
        show={showModal}
        onClose={() => setShowModal(false)}
        getStatusColor={getStatusColor}
        getStatusLabel={getStatusLabel}
      />

      <NewAppointmentModal
        show={showNewModal}
        onClose={() => setShowNewModal(false)}
        formData={formData}
        setFormData={setFormData}
        onCreate={handleCreateAppointment}
      />
    </div>
  );
}