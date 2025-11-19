"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import PropertyDeveloperForm from "@/components/dashboard/PropertyDeveloperForm";
import PropertyBuySellForm from "@/components/dashboard/PropertyBuySellForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function PartnerMyListingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  const handleAddNewClick = () => {
    setIsTypeModalOpen(true);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setIsTypeModalOpen(false);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    // TODO: Add API call to save data
    setIsModalOpen(false);
    setSelectedType(null);
  };

  const handleFormCancel = () => {
    setIsModalOpen(false);
    setSelectedType(null);
  };

  const handleTypeModalClose = () => {
    setIsTypeModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-8 shadow-sm">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          {t("Partner_my_listing.title")}
        </h2>
        <p className="text-gray-600">{t("Partner_my_listing.subtitle")}</p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {t("Partner_my_listing.subtitle")}
          </h3>
          <button
            onClick={handleAddNewClick}
            className="rounded-lg bg-[#E6B325] px-4 py-2 text-sm font-medium text-[#0F1B2E] hover:bg-[#d4a520] transition-colors"
          >
            + {t("Partner_my_listing.addButton")}
          </button>
        </div>
        <div className="text-center py-12 text-gray-500">
          {t("Partner_my_listing.Yourproperty")}
        </div>
      </div>

      {/* Type Selection Modal */}
      <Modal
        isOpen={isTypeModalOpen}
        onClose={handleTypeModalClose}
        title="Select Listing Type"
        maxWidth="max-w-md"
      >
        <div className="space-y-4">
          <button
            onClick={() => handleTypeSelect("developer")}
            className="w-full p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-left transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  {t("Partner_my_listing_Modal.PropertyDeveloper")}
                </h4>
                <p className="text-sm text-white/70">
                  {t("Partner_my_listing_Modal.Adddevelopmentprojectlisting")}
                </p>
              </div>
              <svg
                className="w-6 h-6 text-[#E6B325] group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={() => handleTypeSelect("buysell")}
            className="w-full p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-left transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-lg mb-1">
                  {t("Partner_my_listing_Modal.PropertyBuySell")}
                </h4>
                <p className="text-sm text-white/70">
                  {t("Partner_my_listing_Modal.AddProperty")}
                </p>
              </div>
              <svg
                className="w-6 h-6 text-[#E6B325] group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleFormCancel}
        title={
          selectedType === "developer"
            ? "Add Property Development"
            : "Add Property Buy/Sell"
        }
        maxWidth="max-w-3xl"
      >
        {selectedType === "developer" ? (
          <PropertyDeveloperForm
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        ) : (
          <PropertyBuySellForm
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        )}
      </Modal>
    </div>
  );
}
