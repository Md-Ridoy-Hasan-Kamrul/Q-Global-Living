"use client";

import { useState, useMemo, useCallback } from "react";
import {
  User,
  Building2,
  Mail,
  Phone,
  FileText,
  Package,
  CheckCircle,
  XCircle,
  Calendar,
  Edit2,
  Save,
  X,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function PartnerProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const [formData, setFormData] = useState({
    id: 1,
    company_name: "Elite Properties Group",
    contact_person: "John Anderson",
    email: "john.anderson@eliteproperties.com",
    phone_number: "+225 07 45 67 89 01",
    project_names: ["Luxury Residences Cocody", "Modern Business Park"],
    package: "Premium",
    documents: ["Business License.pdf", "Tax Certificate.pdf", "ID Copy.pdf"],
    is_verified: true,
    is_paid: true,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-11-08T14:20:00Z",
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSave = useCallback(() => {
    // TODO: Add API call to save data
    console.log("Saving profile data:", formData);
    setIsEditing(false);
  }, [formData]);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    // Reset form data if needed
  }, []);

  const formatDate = useCallback((dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  const packageBadgeColor = useMemo(() => {
    switch (formData.package) {
      case "Premium":
        return "bg-purple-100 text-purple-800";
      case "Standard":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }, [formData.package]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-lg bg-white p-4 sm:p-6 lg:p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-gray-900">
              {t("PertnerProfile.title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              {t("PertnerProfile.subtitle")}
            </p>
          </div>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#E6B325] px-4 py-2 text-sm font-medium text-[#0F1B2E] hover:bg-[#d4a520] transition-colors whitespace-nowrap"
              aria-label="Edit profile"
            >
              <Edit2 className="h-4 w-4" />
              <span className="hidden sm:inline">Edit Profile</span>
              <span className="sm:hidden">Edit</span>
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-3 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                aria-label="Cancel editing"
              >
                <X className="h-4 w-4" />
                <span className="hidden sm:inline">Cancel</span>
              </button>
              <button
                onClick={handleSave}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#E6B325] px-3 sm:px-4 py-2 text-sm font-medium text-[#0F1B2E] hover:bg-[#d4a520] transition-colors"
                aria-label="Save changes"
              >
                <Save className="h-4 w-4" />
                <span className="hidden sm:inline">Save</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Verification Status Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3">
            {formData.is_verified ? (
              <CheckCircle
                className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 shrink-0"
                aria-label="Verified"
              />
            ) : (
              <XCircle
                className="h-8 w-8 sm:h-10 sm:w-10 text-red-500 shrink-0"
                aria-label="Not verified"
              />
            )}
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-gray-600">
                {t("PertnerProfile.VerificationStatus")}
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                {formData.is_verified ? t("PertnerProfile.Verified") : t("PertnerProfile.NotVerified")}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
          <div className="flex items-center gap-3">
            {formData.is_paid ? (
              <CheckCircle
                className="h-8 w-8 sm:h-10 sm:w-10 text-green-500 shrink-0"
                aria-label="Paid"
              />
            ) : (
              <XCircle
                className="h-8 w-8 sm:h-10 sm:w-10 text-red-500 shrink-0"
                aria-label="Unpaid"
              />
            )}
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-gray-600">{t("PertnerProfile.PaymentStatus")}</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                {formData.is_paid ? t("PertnerProfile.Paid") : t("PertnerProfile.Unpaid")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-gray-900">
          {t("PertnerProfile.CompanyInformation")}
        </h3>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {/* Partner ID */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <User className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{t("PertnerProfile.PartnerID")}</span>
            </label>
            <div className="rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900">
              #{formData.id}
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <Building2 className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{t("PertnerProfile.CompanyName")}</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 text-sm sm:text-base focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20"
                aria-label="Company Name"
              />
            ) : (
              <div className="rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900 break-all">
                {formData.company_name}
              </div>
            )}
          </div>

          {/* Contact Person */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <User className="h-4 w-4 text-gray-400 shrink-0" />
              <span>Contact Person</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                name="contact_person"
                value={formData.contact_person}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 text-sm sm:text-base focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20"
                aria-label="Contact Person"
              />
            ) : (
              <div className="rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900">
                {formData.contact_person}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <Mail className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{t("PertnerProfile.EmailAddress")}</span>
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 text-sm sm:text-base focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20"
                aria-label="Email Address"
              />
            ) : (
              <div className="rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900 break-all">
                {formData.email}
              </div>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <Phone className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{t("PertnerProfile.PhoneNumber")}</span>
            </label>
            {isEditing ? (
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 text-sm sm:text-base focus:border-[#E6B325] focus:outline-none focus:ring-2 focus:ring-[#E6B325]/20"
                aria-label="Phone Number"
              />
            ) : (
              <div className="rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900">
                {formData.phone_number}
              </div>
            )}
          </div>

          {/* Package */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <Package className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{t("PertnerProfile.PackageType")}</span>
            </label>
            <div className="rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 py-2">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs sm:text-sm font-semibold ${packageBadgeColor}`}
              >
                {formData.package}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Names */}
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <h3 className="mb-4 flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-900">
          <FileText className="h-5 w-5 text-gray-400 shrink-0" />
          {t("PertnerProfile.ProjectNames")}
        </h3>
        <div className="space-y-2 sm:space-y-3">
          {formData.project_names.map((project, index) => (
            <div
              key={`project-${index}`}
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 hover:bg-gray-100 transition-colors"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E6B325]">
                <span className="text-sm font-semibold text-[#0F1B2E]">
                  {index + 1}
                </span>
              </div>
              <span className="text-sm sm:text-base text-gray-900 break-all">
                {project}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <h3 className="mb-4 flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-900">
          <FileText className="h-5 w-5 text-gray-400 shrink-0" />
          {t("PertnerProfile.UploadedDocuments")}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {formData.documents.map((doc, index) => (
            <div
              key={`doc-${index}`}
              className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3 sm:p-4 hover:bg-gray-100 transition-colors cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`View ${doc}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                <FileText className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-xs sm:text-sm font-medium text-gray-900">
                  {doc}
                </p>
                <p className="text-xs text-gray-500">{t("PertnerProfile.PDFDocuments")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Account Timestamps */}
      <div className="rounded-lg bg-white p-4 sm:p-6 shadow-sm">
        <h3 className="mb-4 flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-900">
          <Calendar className="h-5 w-5 text-gray-400 shrink-0" />
          {t("PertnerProfile.AccountInformation")}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs sm:text-sm font-medium text-gray-700">
              {t("PertnerProfile.AccountCreated")}
            </label>
            <div className="rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-900">
              {formatDate(formData.created_at)}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs sm:text-sm font-medium text-gray-700">
              {t("PertnerProfile.LastUpdated")}
            </label>
            <div className="rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-900">
              {formatDate(formData.updated_at)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
