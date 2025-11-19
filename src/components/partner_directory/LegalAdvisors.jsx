"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import Link from "next/link";
import { memo } from "react";

const LegalAdvisors = memo(function LegalAdvisors({ filteredPartners }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);

  // Hide section if no partners to display
  if (!filteredPartners || filteredPartners.length === 0) {
    return null;
  }

  return (
    <section className="mb-8" aria-labelledby="legal-advisors-heading">
      <div className="mb-1.5 md:mb-3 pb-1.5 md:pb-3">
        <h2
          id="legal-advisors-heading"
          className="font-display text-black dark:text-text-dark text-2xl md:text-3xl font-bold leading-tight tracking-tight px-4 border-b-2 pb-2 border-primary/40"
        >
          {t("PartnerDirectory.Legal.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPartners.map((partner) => (
          <article
            key={partner.id}
            className="bg-white/50 dark:bg-primary/30 rounded-xl overflow-hidden flex flex-col p-6 border border-primary/10 dark:border-accent/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <h3 className="font-display text-xl font-bold text-black dark:text-text-dark">
                {partner.name}
              </h3>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base mb-6 grow">
              {partner.description}
            </p>
            <Link
              href={partner.website}
              {...(partner.website && partner.website !== "#"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={`Contact ${partner.name}`}
              className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span>{t("PartnerDirectory.Legal.contact")}</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
});

export default LegalAdvisors;
