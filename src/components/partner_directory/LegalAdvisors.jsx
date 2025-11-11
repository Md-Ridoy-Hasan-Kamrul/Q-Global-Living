import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import Image from "next/image";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const legalPartners = [
  {
    name: "Legis Ivoire",
    description:
      "Expert legal counsel for all your real estate transactions. We ensure every contract is secure and every title is clear.",
    logo: <FaCanadianMapleLeaf className="w-6 h-6" />,
    website: "#",
  },
];

export default function LegalAdvisors({ filteredPartners }) {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  // Use filtered partners if provided, otherwise use default legalPartners
  const partnersToDisplay =
    filteredPartners !== undefined ? filteredPartners : legalPartners;

  // Hide section if no partners to display
  if (partnersToDisplay.length === 0) {
    return null;
  }

  return (
    <section className="mb-8">
      <div className="mb-1.5 md:mb-3 pb-1.5 md:pb-3">
        <h2 className="font-display text-black dark:text-text-dark text-2xl md:text-3xl font-bold leading-tight tracking-tight px-4">
          {t("PartnerDirectory.Legal.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnersToDisplay.map((partner) => (
          <div
            key={partner.name}
            className="bg-white/50 dark:bg-primary/30 rounded-xl overflow-hidden flex flex-col p-6 border border-primary/10 dark:border-accent/10"
          >
            <div className="flex items-center gap-4 mb-4">
              {partner.logo}
              <h3 className="font-display text-xl font-bold text-black dark:text-text-dark">
                {partner.name}
              </h3>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base mb-6 grow">
              {partner.description}
            </p>
            <a
              href={partner.website}
              {...(partner.website && partner.website !== "#"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={`Contact ${partner.name}`}
              className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-accent text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>{t("PartnerDirectory.Legal.contact")}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
