"use client";
import React, { useRef, useEffect } from "react";
import { X, AlertCircle } from "lucide-react";
import InputField from "./InputField";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function CreateTicketModal({ show, onClose, newTicket, setNewTicket, onSubmit, editing }) {
      const { locale } = useLanguage();
      const { t } = useTranslation(locale);
    const firstInputRef = useRef(null);

    useEffect(() => {
        if (show) {
            // focus the first input when modal opens
            setTimeout(() => {
                firstInputRef.current?.focus?.();
            }, 0);
        }
    }, [show]);

    if (!show) return null;

    const titleId = "create-ticket-title";

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" role="presentation" onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby={titleId}>
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200  rounded-t-2xl">
                    <h2 id={titleId} className="text-lg font-semibold">{editing ? t("dashboard.client.supportTicket.title") : t("dashboard.client.supportTicket.createTicket")}</h2>
                    <button onClick={onClose} aria-label="Close dialog" className="hover:bg-white/20 rounded-full p-2 transition">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField label={t("dashboard.client.supportTicket.createNewTicket.PropertyID")} type="number" value={newTicket.property_id} onChange={(e) => setNewTicket({ ...newTicket, property_id: e.target.value })} inputRef={firstInputRef} />
                        <InputField label={t("dashboard.client.supportTicket.createNewTicket.PropertyName")} value={newTicket.property_name} onChange={(e) => setNewTicket({ ...newTicket, property_name: e.target.value })} />
                        <InputField label={t("dashboard.client.supportTicket.createNewTicket.Subject")} value={newTicket.subject} onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })} />
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t("dashboard.client.supportTicket.createNewTicket.Priority")}</label>
                            <select value={newTicket.priority} onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]">
                                <option value="low">{t("dashboard.client.supportTicket.createNewTicket.Low")}</option>
                                <option value="medium">{t("dashboard.client.supportTicket.createNewTicket.Medium")}</option>
                                <option value="high">{t("dashboard.client.supportTicket.createNewTicket.High")}</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t("dashboard.client.supportTicket.createNewTicket.Description")}</label>
                        <textarea placeholder={t("dashboard.client.supportTicket.createNewTicket.DescriptionPlaceholder")} value={newTicket.description} onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]" />
                    </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 rounded-b-2xl">
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg text-gray-800 hover:bg-gray-300 transition">{t("dashboard.client.supportTicket.createNewTicket.Cancel")}</button>
                    <button type="button" onClick={onSubmit} className="px-4 py-2 bg-[#d4af37] text-white rounded-lg hover:bg-[#b38f2f] transition">{editing ? t("dashboard.client.supportTicket.createNewTicket.SaveChanges") : t("dashboard.client.supportTicket.createNewTicket.CreateTicket")}</button>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
