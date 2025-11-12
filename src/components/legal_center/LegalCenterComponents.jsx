import Head from "next/head";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LegalCenterComponents({ legalDocuments }) {
  const { locale } = useLanguage();

  const { t } = useTranslation(locale);
  const lastUpdated = "October 26, 2023";

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-6">
        <header className="mb-6 md:mb-8 text-center">
          <h1 className="text-2xl md:text-5xl font-bold">{t("LegalCenter.title")}</h1>
          <p className="mx-auto mt-2 md:mt-4 max-w-2xl text-base text-subtle-light dark:text-subtle-dark md:text-lg">
            {t("LegalCenter.subtitle")}
          </p>
          <p className="mt-2 md:mt-4 text-base font-normal text-subtle-light dark:text-subtle-dark">
            {t("LegalCenter.Last Updated")} <strong>{lastUpdated}</strong>
          </p>
        </header>

        <div className="space-y-4">
          {legalDocuments.map((doc) => (
            <Link
              key={doc.title}
              href={doc.href || "#"}
              className="group flex items-center justify-between gap-4 rounded-lg bg-white/50 dark:bg-gray-700 p-2 md:p-4 min-h-[72px] border border-gray-200 transition-all hover:border-primary/50 hover:shadow-lg dark:hover:bg-gray-600"
            >
              <div className="flex items-center gap-2 md:gap-5">
                <div className="flex items-center justify-center rounded-lg md:bg-primary/10 dark:bg-primary/20 size-12 text-primary">
                  <span className="material-symbols-outlined text-xl md:text-2xl">
                    {doc.iconName}
                  </span>
                </div>
                <div>
                  <p className="text-base font-bold text-content-light dark:text-content-dark group-hover:text-primary transition-colors">
                    {doc.title}
                  </p>
                  <p className="text-sm text-subtle-light dark:text-subtle-dark line-clamp-2">
                    {doc.description}
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary">
                arrow_forward_ios
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
