import { CiBank } from "react-icons/ci";
import { FaHome, FaPlaceOfWorship } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// const partners = [
//   {
//     name: "FinBank CI",
//     description:
//       "Your trusted partner for mortgage solutions and real estate financing in Côte d’Ivoire. Tailored loans for every home buyer.",
//     logo: <CiBank className="w-6 h-6 "/>,
//     website: "#",
//   },
//   {
//     name: "Prestige Mortgages",
//     description:
//       "Specializing in premium mortgage services for luxury properties. We provide expert financial guidance for your high-value investments.",
//     logo: <FaHome className="w-6 h-6"/>,
//     website: "#",
//   },
//   {
//     name: "Abidjan Credit Union",
//     description:
//       "Community-focused banking offering competitive home loans and financial planning services for families and individuals.",
//     logo: <FaPlaceOfWorship className="w-6 h-6"/>,
//     website: "#",
//   },
// ];

export default function FinancialInstitutions({ filteredPartners }) {
  // Use filtered partners if provided, otherwise use default partners
  const partnersToDisplay = filteredPartners !== undefined ? filteredPartners : partners;

  // Hide section if no partners to display
  if (partnersToDisplay.length === 0) {
    return null;
  }

  return (
    <section className="mb-10">
      <div className="border-b-2 border-accent mb-6 pb-3 md:pb-4">
        <h2 className="font-display text-primary dark:text-text-dark text-3xl font-bold leading-tight tracking-tight px-4">
          Financial Institutions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partnersToDisplay.map((partner) => (
          <div
            key={partner.name}
            className="bg-white dark:bg-primary/30 rounded-xl  overflow-hidden flex flex-col p-6 border border-primary/10 dark:border-accent/10"
          >
            <div className="flex items-center gap-4 mb-4">
              {partner.logo}
              <h3 className="font-display text-xl font-bold text-primary dark:text-text-dark">
                {partner.name}
              </h3>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base mb-6 flex-grow">
              {partner.description}
            </p>
            {/* Use anchor for navigation (better for accessibility and SEO) */}
            <Link
              href={partner.website}
              {...(partner.website && partner.website !== "#"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={`Visit ${partner.name} website`}
              className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-accent text-black/70 text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span>Visit Website</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
