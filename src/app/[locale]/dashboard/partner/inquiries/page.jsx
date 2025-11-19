"use client";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Search, Filter, Eye, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

const Pagination = dynamic(() => import("@/components/dashboard/Pagination"), {
  ssr: false,
});

export default function PartnerInquiriesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 5;

  // Mock data based on database schema
  const inquiries = useMemo(
    () => [
      {
        id: 1,
        user_id: "USR001",
        property_id: "PROP101",
        property_development_id: "DEV201",
        partner_id: "PART301",
        inquiry_type: "General",
        full_name: "John Smith",
        email: "john.smith@email.com",
        phone: "+1-555-0101",
        subject: "Property Investment Inquiry",
        message:
          "I am interested in investing in your luxury development project.",
        status: "pending",
        response: null,
        responded_by: null,
        responded_at: null,
        created_at: "2024-11-08T10:30:00Z",
        updated_at: "2024-11-08T10:30:00Z",
      },
      {
        id: 2,
        user_id: "USR002",
        property_id: "PROP102",
        property_development_id: null,
        partner_id: "PART301",
        inquiry_type: "Viewing",
        full_name: "Sarah Johnson",
        email: "sarah.j@email.com",
        phone: "+1-555-0102",
        subject: "Schedule Property Viewing",
        message: "Would like to schedule a viewing for the downtown apartment.",
        status: "responded",
        response:
          "Thank you for your interest. We have scheduled your viewing for next week.",
        responded_by: "ADMIN001",
        responded_at: "2024-11-07T14:20:00Z",
        created_at: "2024-11-07T09:15:00Z",
        updated_at: "2024-11-07T14:20:00Z",
      },
      {
        id: 3,
        user_id: "USR003",
        property_id: null,
        property_development_id: "DEV202",
        partner_id: "PART301",
        inquiry_type: "Pricing",
        full_name: "Michael Chen",
        email: "michael.chen@email.com",
        phone: "+1-555-0103",
        subject: "Payment Plan Details",
        message: "Can you provide more details about the payment plan options?",
        status: "pending",
        response: null,
        responded_by: null,
        responded_at: null,
        created_at: "2024-11-08T15:45:00Z",
        updated_at: "2024-11-08T15:45:00Z",
      },
      {
        id: 4,
        user_id: "USR004",
        property_id: "PROP103",
        property_development_id: null,
        partner_id: "PART301",
        inquiry_type: "Documentation",
        full_name: "Emily Davis",
        email: "emily.davis@email.com",
        phone: "+1-555-0104",
        subject: "Property Documents Request",
        message: "I need copies of the property title and survey documents.",
        status: "in-progress",
        response: "We are preparing the documents for you.",
        responded_by: "ADMIN002",
        responded_at: "2024-11-06T11:30:00Z",
        created_at: "2024-11-06T08:20:00Z",
        updated_at: "2024-11-06T11:30:00Z",
      },
      {
        id: 5,
        user_id: "USR005",
        property_id: "PROP104",
        property_development_id: "DEV203",
        partner_id: "PART301",
        inquiry_type: "General",
        full_name: "Robert Wilson",
        email: "robert.w@email.com",
        phone: "+1-555-0105",
        subject: "Investment Opportunity",
        message: "Looking for investment opportunities in your projects.",
        status: "responded",
        response:
          "Thank you for reaching out. Our team will contact you shortly with investment options.",
        responded_by: "ADMIN001",
        responded_at: "2024-11-05T16:00:00Z",
        created_at: "2024-11-05T13:10:00Z",
        updated_at: "2024-11-05T16:00:00Z",
      },
      {
        id: 6,
        user_id: "USR006",
        property_id: "PROP105",
        property_development_id: null,
        partner_id: "PART301",
        inquiry_type: "Viewing",
        full_name: "Lisa Anderson",
        email: "lisa.anderson@email.com",
        phone: "+1-555-0106",
        subject: "Weekend Viewing Request",
        message: "Is it possible to schedule a viewing during the weekend?",
        status: "pending",
        response: null,
        responded_by: null,
        responded_at: null,
        created_at: "2024-11-08T17:30:00Z",
        updated_at: "2024-11-08T17:30:00Z",
      },
      {
        id: 7,
        user_id: "USR007",
        property_id: null,
        property_development_id: "DEV204",
        partner_id: "PART301",
        inquiry_type: "Pricing",
        full_name: "David Martinez",
        email: "david.m@email.com",
        phone: "+1-555-0107",
        subject: "Unit Pricing Information",
        message: "What are the current prices for 2-bedroom units?",
        status: "pending",
        response: null,
        responded_by: null,
        responded_at: null,
        created_at: "2024-11-08T12:00:00Z",
        updated_at: "2024-11-08T12:00:00Z",
      },
      {
        id: 8,
        user_id: "USR008",
        property_id: "PROP106",
        property_development_id: null,
        partner_id: "PART301",
        inquiry_type: "General",
        full_name: "Jennifer Lee",
        email: "jennifer.lee@email.com",
        phone: "+1-555-0108",
        subject: "Property Features Question",
        message: "Does the property include parking and storage facilities?",
        status: "responded",
        response:
          "Yes, the property includes 2 parking spaces and a storage unit.",
        responded_by: "ADMIN003",
        responded_at: "2024-11-04T10:15:00Z",
        created_at: "2024-11-04T09:00:00Z",
        updated_at: "2024-11-04T10:15:00Z",
      },
      {
        id: 9,
        user_id: "USR009",
        property_id: "PROP107",
        property_development_id: "DEV205",
        partner_id: "PART301",
        inquiry_type: "Documentation",
        full_name: "James Brown",
        email: "james.brown@email.com",
        phone: "+1-555-0109",
        subject: "Legal Documentation",
        message: "Need information about legal procedures for purchase.",
        status: "in-progress",
        response: "Our legal team is preparing the information for you.",
        responded_by: "ADMIN002",
        responded_at: "2024-11-03T14:30:00Z",
        created_at: "2024-11-03T11:20:00Z",
        updated_at: "2024-11-03T14:30:00Z",
      },
      {
        id: 10,
        user_id: "USR010",
        property_id: "PROP108",
        property_development_id: null,
        partner_id: "PART301",
        inquiry_type: "Viewing",
        full_name: "Patricia Garcia",
        email: "patricia.g@email.com",
        phone: "+1-555-0110",
        subject: "Virtual Tour Request",
        message: "Can I get a virtual tour of the property?",
        status: "pending",
        response: null,
        responded_by: null,
        responded_at: null,
        created_at: "2024-11-08T16:20:00Z",
        updated_at: "2024-11-08T16:20:00Z",
      },
    ],
    []
  );

  // Filter inquiries
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inquiry) => {
      const matchesSearch =
        inquiry.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inquiry.inquiry_type.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter =
        filterStatus === "all" || inquiry.status === filterStatus;

      return matchesSearch && matchesFilter;
    });
  }, [inquiries, searchQuery, filterStatus]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInquiries = filteredInquiries.slice(startIndex, endIndex);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: "bg-yellow-100 text-yellow-800",
      "in-progress": "bg-blue-100 text-blue-800",
      responded: "bg-green-100 text-green-800",
    };
    return statusConfig[status] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">{t("InquiryDetails.title")}</h2>
        <p className="text-gray-600">
          {t("InquiryDetails.subtitle")}
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-sm">
        {/* Search and Filter */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t("InquiryDetails.SearchByName")}
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20"
            />
          </div>

          <div className="relative w-full sm:w-auto">
            <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none z-10" />
            <select
              value={filterStatus}
              onChange={handleFilterChange}
              onFocus={() => setIsFilterOpen(true)}
              onBlur={() => setIsFilterOpen(false)}
              className="appearance-none w-full sm:w-auto rounded-md border border-gray-300 bg-white pl-9 pr-10 py-2 text-sm text-gray-700 font-medium hover:border-gray-400 focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20 cursor-pointer transition-colors"
            >
              <option value="all">{t("InquiryDetails.AllStatus")}</option>
              <option value="pending">{t("InquiryDetails.Pending")}</option>
              <option value="in-progress">{t("InquiryDetails.InProgress")}</option>
              <option value="responded">{t("InquiryDetails.Responded")}</option>
            </select>
            <svg
              className={`absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none transition-transform duration-200 z-10 ${
                isFilterOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {t("InquiryDetails.ID")}
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {t("InquiryDetails.ContactInfo")}
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {t("InquiryDetails.Type")}
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {t("InquiryDetails.Subject")}
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {t("InquiryDetails.Status")}
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {t("InquiryDetails.Date")}
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  {t("InquiryDetails.Actions")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm text-gray-900">
                    #{inquiry.id}
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">
                        {inquiry.full_name}
                      </div>
                      <div className="text-gray-500">{inquiry.email}</div>
                      <div className="text-gray-500">{inquiry.phone}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                      {inquiry.inquiry_type}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-900 max-w-xs truncate">
                    {inquiry.subject}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusBadge(
                        inquiry.status
                      )}`}
                    >
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    {formatDate(inquiry.created_at)}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => setSelectedInquiry(inquiry)}
                      className="inline-flex items-center gap-1 text-[#E6B325] hover:text-[#d4a520]"
                    >
                      <Eye className="h-4 w-4" />
                      <span className="text-sm font-medium">View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {currentInquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              className="border border-gray-200 rounded-lg p-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-gray-900">
                    {inquiry.full_name}
                  </div>
                  <div className="text-sm text-gray-500">#{inquiry.id}</div>
                </div>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusBadge(
                    inquiry.status
                  )}`}
                >
                  {inquiry.status}
                </span>
              </div>

              <div className="space-y-1 text-sm">
                <div className="text-gray-600">{inquiry.email}</div>
                <div className="text-gray-600">{inquiry.phone}</div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                  {inquiry.inquiry_type}
                </span>
              </div>

              <div className="text-sm text-gray-900 font-medium">
                {inquiry.subject}
              </div>

              <div className="text-xs text-gray-500">
                {formatDate(inquiry.created_at)}
              </div>

              <button
                onClick={() => setSelectedInquiry(inquiry)}
                className="w-full flex items-center justify-center gap-2 bg-[#E6B325] hover:bg-[#d4a520] text-black font-medium px-4 py-2 rounded-lg transition-colors"
              >
                <Eye className="h-4 w-4" />
                {t("InquiryDetails.ViewDetails")}
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentInquiries.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              {t("InquiryDetails.NoInquiriesFound")}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {t("InquiryDetails.TryAdjusting")}
            </p>
          </div>
        )}

        {/* Pagination */}
        {currentInquiries.length > 0 && (
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={filteredInquiries.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
              translations={{
                showing: t("Partner.Showing"),
                to: t("Partner.to"),
                of: t("Partner.of"),
                results: t("Partner.results"),
                previous: t("Partner.Previous"),
                next: t("Partner.Next"),
              }}
            />
          </div>
        )}
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Inquiry Details
              </h3>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry ID
                  </label>
                  <div className="text-gray-900">#{selectedInquiry.id}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusBadge(
                      selectedInquiry.status
                    )}`}
                  >
                    {selectedInquiry.status}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type
                  </label>
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                    {selectedInquiry.inquiry_type}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Created At
                  </label>
                  <div className="text-gray-900">
                    {formatDate(selectedInquiry.created_at)}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="text-gray-900">
                      {selectedInquiry.full_name}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="text-gray-900">{selectedInquiry.email}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <div className="text-gray-900">{selectedInquiry.phone}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      User ID
                    </label>
                    <div className="text-gray-900">
                      {selectedInquiry.user_id}
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Property Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedInquiry.property_id && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Property ID
                      </label>
                      <div className="text-gray-900">
                        {selectedInquiry.property_id}
                      </div>
                    </div>
                  )}
                  {selectedInquiry.property_development_id && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Development ID
                      </label>
                      <div className="text-gray-900">
                        {selectedInquiry.property_development_id}
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Partner ID
                    </label>
                    <div className="text-gray-900">
                      {selectedInquiry.partner_id}
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Details */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Inquiry Details
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <div className="text-gray-900">
                      {selectedInquiry.subject}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <div className="text-gray-900 bg-gray-50 rounded-lg p-4">
                      {selectedInquiry.message}
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Information */}
              {selectedInquiry.response && (
                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Response
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Response Message
                      </label>
                      <div className="text-gray-900 bg-green-50 rounded-lg p-4">
                        {selectedInquiry.response}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Responded By
                        </label>
                        <div className="text-gray-900">
                          {selectedInquiry.responded_by}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Responded At
                        </label>
                        <div className="text-gray-900">
                          {formatDate(selectedInquiry.responded_at)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors"
              >
                Close
              </button>
              {selectedInquiry.status === "pending" && (
                <button className="px-6 py-2 bg-[#E6B325] hover:bg-[#d4a520] text-black font-semibold rounded-lg transition-colors">
                  Respond
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
