"use client"; 
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import React from "react";

const MainContent = ({ privacy, items }) => {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  return (
    <main className="w-full lg:w-3/4 space-y-6 lg:mt-0 md:mt-12 sm:mt-10 mt-8">
      <header>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
          {t("Policy.MainContent.title", "Privacy Policy")}
        </h2>
        <p className="text-sm text-black dark:text-soft-grey/80 mb-4">
          {t(
            "Policy.MainContent.lastUpdated",
            "Last Updated: October 26, 2023"
          )}
        </p>
        <p className="font-normal text-base sm:text-base text-black dark:text-soft-grey/90">
          {t("Policy.MainContent.subtitle")}
        </p>
      </header>

      <section className="space-y-6">
        {privacy.map((item, index) => {
          const matchingItem = items[index];

          const sectionId = matchingItem ? matchingItem.id : undefined;
          if (!sectionId) {
            if (index === 7 && item.title === "Contact Us") {
              return (
                <div key={item.id || item.title}>
                  <h3 className="text-lg lg:text-xl font-bold tracking-tight mb-3">
                    {item.title}
                  </h3>
                </div>
              );
            }
            return null;
          }

          return (
            <div
              key={item.id || item.title}
              id={sectionId}
              className="scroll-mt-20"
            >
              <h3 className="text-lg lg:text-xl font-bold tracking-tight mb-3">
                {item.title}
              </h3>
              <hr className="text-gray-300 w-full my-2" />

              <p className="font-normal text-base text-black dark:text-soft-grey/90 mb-3">
                {item.description}

                {item.email && (
                  <a
                    className="font-semibold text-[#d4af37] dark:text-yellow-200 text-lg hover:underline ml-2"
                    href={`mailto:${item.email.replace(/\.$/, "")}`}
                  >
                    {item.email}
                  </a>
                )}
              </p>

              {item.short_Description && (
                <p className="font-normal text-sm sm:text-base text-black dark:text-soft-grey/90">
                  {item.short_Description}
                </p>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default MainContent;
