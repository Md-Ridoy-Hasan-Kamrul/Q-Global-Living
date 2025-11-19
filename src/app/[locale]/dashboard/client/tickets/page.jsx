"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";

import Header from "./components/Header";
import StatsSection from "./components/StatsSection";
import SearchFilter from "./components/SearchFilter";
import TicketsTable from "./components/TicketsTable";
import CreateTicketModal from "./components/CreateTicketModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function UserTicketDashboard() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const [tickets, setTickets] = useState([
    {
      id: 1,
      property_id: 301,
      property_name: "Mohammadpur Apartment",
      subject: "Payment Issue",
      description: "Having trouble with property rent payment",
      status: "open",
      priority: "high",
      created_at: "2025-01-10",
      replies_count: 3,
    },
    {
      id: 2,
      property_id: 302,
      property_name: "Dhanmondi Flat",
      subject: "Maintenance Request",
      description: "Roof repair needed",
      status: "in_progress",
      priority: "medium",
      created_at: "2025-01-08",
      replies_count: 1,
    },
    {
      id: 3,
      property_id: 303,
      property_name: "Gulshan Residence",
      subject: "Documentation Help",
      description: "Questions about legal documents",
      status: "resolved",
      priority: "low",
      created_at: "2025-01-05",
      replies_count: 5,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [reply, setReply] = useState("");
  const [editingTicketId, setEditingTicketId] = useState(null);

  const [newTicket, setNewTicket] = useState({
    property_id: "",
    property_name: "",
    subject: "",
    description: "",
    priority: "medium",
  });

  const getStatusIcon = (status) => {
    if (status === "open")
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    if (status === "in_progress")
      return <Clock className="w-5 h-5 text-blue-500" />;
    if (status === "resolved")
      return <CheckCircle className="w-5 h-5 text-green-500" />;
  };

  const getStatusColor = (status) => {
    if (status === "open") return "bg-red-50 border-red-200";
    if (status === "in_progress") return "bg-blue-50 border-blue-200";
    if (status === "resolved") return "bg-green-50 border-green-200";
  };

  const getPriorityBadge = (priority) => {
    const styles = {
      high: "bg-red-100 text-red-700",
      medium: "bg-yellow-100 text-yellow-700",
      low: "bg-green-100 text-green-700",
    };
    const labels = { high: "High", medium: "Medium", low: "Low" };
    return (
      <span
        className={`px-2 py-1 rounded text-xs font-semibold ${styles[priority]}`}
      >
        {labels[priority]}
      </span>
    );
  };

  const handleAddTicket = useCallback(() => {
    if (newTicket.subject && newTicket.description && newTicket.property_id) {
      // If editing, update existing ticket
      if (editingTicketId) {
        setTickets((prev) =>
          prev.map((t) =>
            t.id === editingTicketId
              ? {
                  ...t,
                  property_id: parseInt(newTicket.property_id),
                  property_name: newTicket.property_name,
                  subject: newTicket.subject,
                  description: newTicket.description,
                  priority: newTicket.priority,
                }
              : t
          )
        );
        setEditingTicketId(null);
      } else {
        const ticket = {
          id: Math.max(...tickets.map((t) => t.id), 0) + 1,
          property_id: parseInt(newTicket.property_id),
          property_name: newTicket.property_name,
          subject: newTicket.subject,
          description: newTicket.description,
          priority: newTicket.priority,
          status: "open",
          created_at: new Date().toISOString().split("T")[0],
          replies_count: 0,
        };
        setTickets([ticket, ...tickets]);
      }

      setNewTicket({
        property_id: "",
        property_name: "",
        subject: "",
        description: "",
        priority: "medium",
      });
      setShowForm(false);
    }
  }, [newTicket, editingTicketId, tickets]);

  const handleDelete = useCallback((id) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
    setSelectedTicket((prev) => (prev && prev.id === id ? null : prev));
  }, []);

  const handleView = useCallback((ticket) => {
    setSelectedTicket(ticket);
  }, []);

  const handleEdit = useCallback((ticket) => {
    // populate the form with ticket data and open modal for editing
    setEditingTicketId(ticket.id);
    setNewTicket({
      property_id: ticket.property_id,
      property_name: ticket.property_name || "",
      subject: ticket.subject || "",
      description: ticket.description || "",
      priority: ticket.priority || "medium",
    });
    setShowForm(true);
  }, []);

  const filteredTickets = useMemo(
    () =>
      tickets.filter((ticket) => {
        const q = searchTerm.trim().toLowerCase();
        const matchesSearch =
          !q ||
          ticket.subject.toLowerCase().includes(q) ||
          ticket.description.toLowerCase().includes(q) ||
          ticket.property_name.toLowerCase().includes(q);
        const matchesFilter =
          filterStatus === "all" || ticket.status === filterStatus;
        return matchesSearch && matchesFilter;
      }),
    [tickets, searchTerm, filterStatus]
  );

  // --- Pagination logic ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  }, []);

  const handleFilterChange = useCallback((value) => {
    setFilterStatus(value);
    setCurrentPage(1);
  }, []);

  const totalItems = filteredTickets.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  // Derive an effective page that clamps to totalPages without causing extra state updates
  const effectiveCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  const paginatedTickets = useMemo(
    () =>
      filteredTickets.slice(
        (effectiveCurrentPage - 1) * itemsPerPage,
        effectiveCurrentPage * itemsPerPage
      ),
    [filteredTickets, effectiveCurrentPage, itemsPerPage]
  );

  const stats = {
    open: tickets.filter((t) => t.status === "open").length,
    in_progress: tickets.filter((t) => t.status === "in_progress").length,
    resolved: tickets.filter((t) => t.status === "resolved").length,
    total: tickets.length,
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-3 py-2 rounded shadow"
      >
        Skip to content
      </a>
      <main id="main-content">
        <div className="space-y-4 md:space-y-6">
          {/* Header */}
          <Header />

          {/* Stats */}
          <StatsSection stats={stats} />

          {/* Search + Filter */}
          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={handleSearchChange}
            filterStatus={filterStatus}
            setFilterStatus={handleFilterChange}
            onNew={() => {
              setEditingTicketId(null);
              setNewTicket({
                property_id: "",
                property_name: "",
                subject: "",
                description: "",
                priority: "medium",
              });
              setShowForm(true);
            }}
          />

          {/* Tickets Table (includes pagination bar) */}
          <TicketsTable
            tickets={paginatedTickets}
            onRowClick={(t) => setSelectedTicket(t)}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            getStatusIcon={getStatusIcon}
            currentPage={effectiveCurrentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={(p) => setCurrentPage(p)}
            translations={{
              showing: "Showing",
              to: "to",
              of: "of",
              results: "results",
              previous: "Previous",
              next: "Next",
            }}
          />
        </div>

        {/* 🟦 Create Ticket Modal */}
        <CreateTicketModal
          show={showForm}
          onClose={() => {
            setShowForm(false);
            setEditingTicketId(null);
          }}
          newTicket={newTicket}
          setNewTicket={setNewTicket}
          onSubmit={handleAddTicket}
          editing={Boolean(editingTicketId)}
        />
      </main>
    </>
  );
}

function InputField({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
