"use client";

import { use, useMemo, useState } from "react";
import { useTranslation } from "@/i18n";
import dynamic from "next/dynamic";
import StatsCard from "@/components/dashboard/admin/StatsCard";
import {
  Eye,
  MapPin,
  DollarSign,
  Plus,
  MessageSquare,
  Search,
  Filter,
} from "lucide-react";

// Lazy load Pagination component
const Pagination = dynamic(() => import("@/components/dashboard/Pagination"), {
  ssr: false,
});

export default function PartnerDashboardPage({ params }) {
  const { locale } = use(params);
  const { t } = useTranslation(locale);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Stats data matching admin dashboard style with SAME colors
  const [statsData, setStatsData] = useState([
    {
      title: t("Partner.statsData.totalProperties") || "New Inquiries",
      value: 12,
      trend: "+3 this month",
      variant: "primary",
    },
    {
      title: t("Partner.statsData.totalViews") || "Total Views",
      value: 8,
      trend: "+2 this week",
      variant: "success",
    },
    {
      title: t("Partner.statsData.totalViews") || "Total Views",
      value: 1247,
      trend: "+18.5%",
      variant: "info",
    },
    {
      title: t("Partner.statsData.newInquiries") || "New Inquiries",
      value: 5,
      trend: "+2 today",
      variant: "warning",
    },
  ]);

  // Recent properties data - Extended for pagination
  const recentProperties = useMemo(
    () => [
      {
        id: 1,
        title: "Luxury Villa in Cocody",
        location: "Cocody, Abidjan",
        price: "$450,000",
        views: 234,
        inquiries: 12,
        status: "active",
      },
      {
        id: 2,
        title: "Modern Apartment",
        location: "Plateau, Abidjan",
        price: "$280,000",
        views: 189,
        inquiries: 8,
        status: "active",
      },
      {
        id: 3,
        title: "Beachfront Property",
        location: "Grand-Bassam",
        price: "$620,000",
        views: 312,
        inquiries: 15,
        status: "pending",
      },
      {
        id: 4,
        title: "Penthouse Suite",
        location: "Marcory, Abidjan",
        price: "$890,000",
        views: 456,
        inquiries: 23,
        status: "active",
      },
      {
        id: 5,
        title: "Family Home",
        location: "Yopougon, Abidjan",
        price: "$320,000",
        views: 178,
        inquiries: 9,
        status: "active",
      },
      {
        id: 6,
        title: "Studio Apartment",
        location: "Treichville, Abidjan",
        price: "$150,000",
        views: 145,
        inquiries: 6,
        status: "active",
      },
      {
        id: 7,
        title: "Commercial Space",
        location: "Plateau, Abidjan",
        price: "$1,200,000",
        views: 289,
        inquiries: 18,
        status: "pending",
      },
      {
        id: 8,
        title: "Garden Villa",
        location: "Bingerville",
        price: "$520,000",
        views: 267,
        inquiries: 14,
        status: "active",
      },
      {
        id: 9,
        title: "Duplex Residence",
        location: "Cocody, Abidjan",
        price: "$680,000",
        views: 334,
        inquiries: 19,
        status: "active",
      },
      {
        id: 10,
        title: "Waterfront Estate",
        location: "Grand-Bassam",
        price: "$950,000",
        views: 412,
        inquiries: 27,
        status: "pending",
      },
    ],
    []
  );

  // Filter properties based on search and status
  const filteredProperties = useMemo(() => {
    return recentProperties.filter((property) => {
      const matchesSearch =
        searchQuery === "" ||
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        filterStatus === "all" || property.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [recentProperties, searchQuery, filterStatus]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value) => {
    setFilterStatus(value);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {t("Partner.welcome")}
            </h1>
            <p className="mt-2 text-sm text-gray-600">{t("Partner.title")}</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#E6B325] px-4 py-2.5 text-sm font-medium text-[#0F1B2E] transition-colors hover:bg-[#d4a520] focus:outline-none focus:ring-2 focus:ring-[#E6B325] focus:ring-offset-2">
            <Plus className="h-4 w-4" aria-hidden="true" />
            {t("Partner.addButton")}
          </button>
        </div>
      </div>

      {/* Stats Grid - Using Admin StatsCard component */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            variant={stat.variant}
          />
        ))}
      </div>

      {/* Recent Properties */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
               {t("Partner.AllInquiries")}
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Search Input */}
              <div className="relative flex-1 sm:w-64">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder={t("Partner.SearchInquiries")}
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm transition-colors focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]"
                  aria-label="Search inquiries"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <Filter
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
                <select
                  value={filterStatus}
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-gray-300 py-2 pl-10 pr-10 text-sm transition-colors focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325] sm:w-auto"
                  aria-label="Filter by status"
                >
                  <option value="all">{t("Partner.AllStatus")}</option>
                  <option value="active">{t("Partner.Active")}</option>
                  <option value="pending">{t("Partner.Pending")}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                 {t("Partner.Properties")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("Partner.Locations")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("Partner.Price")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("Partner.Views")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("Partner.Inquiries")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {t("Partner.Status")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {currentProperties.map((property) => (
                <tr
                  key={property.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {property.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-3.5 w-3.5 text-gray-400" />
                      {property.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                      <DollarSign className="h-3.5 w-3.5 text-gray-400" />
                      {property.price}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Eye className="h-3.5 w-3.5 text-gray-400" />
                      {property.views}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MessageSquare className="h-3.5 w-3.5 text-gray-400" />
                      {property.inquiries}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        property.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {property.status === "active" ? "Active" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="divide-y divide-gray-200 lg:hidden">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="mb-3">
                <h3 className="font-medium text-gray-900">{property.title}</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
                  <MapPin className="h-3.5 w-3.5 text-gray-400" />
                  {property.location}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                <div className="flex items-center gap-1 text-gray-600">
                  <DollarSign className="h-3.5 w-3.5 text-gray-400" />
                  <span className="font-medium">{property.price}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Eye className="h-3.5 w-3.5 text-gray-400" />
                  {property.views} views
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    property.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {property.status === "active" ? "Active" : "Pending"}
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MessageSquare className="h-3.5 w-3.5 text-gray-400" />
                  {property.inquiries} {t("Partner.inquiries")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentProperties.length === 0 && (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto h-12 w-12 text-gray-300">
              <MapPin className="h-12 w-12" />
            </div>
            <h3 className="mt-3 text-sm font-medium text-gray-900">
              {t("Partner.NoPropertiesFound")}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery || filterStatus !== "all"
                ? t("Partner.TryAdjusting")
                : t("Partner.NoPropertiesAdded")}
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredProperties.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredProperties.length}
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
        )}
      </div>
    </div>
  );
}
