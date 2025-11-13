import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import Link from "next/link";
import React from "react";

const MainContent = ({ terms, items }) => {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  return (
    <main className="w-full lg:w-3/4 space-y-6  lg:mt-0 md:mt-12 sm:mt-10 mt-8">
      <header>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
          {t("Terms.MainContent.title")}
        </h2>
        <p className="text-sm text-black dark:text-soft-grey/80 mb-4">
          {t("Terms.MainContent.lastUpdated")}
        </p>
        <p className="font-normal text-sm sm:text-base text-black dark:text-soft-grey/90">
          {t("Terms.MainContent.subtitle")}
        </p>
      </header>

      <section className=" space-y-6">
        {terms.map((item, index) => {
          const sectionId = items[index] ? items[index].id : "";

          return (
            <div
              key={item.id || item.title}
              id={sectionId}
              className="scroll-mt-32"
            >
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="font-normal text-base text-black dark:text-soft-grey/90 mb-3">
                {item.description
                  ? item.description
                      .split(item.contact)
                      .map((part, index, array) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < array.length - 1 && item.contact && (
                            <Link
                              href="/contact"
                              className="font-semibold text-lg text-[#d4af37] dark:text-yellow-200 hover:underline"
                            >
                              {item.contact.replace(/\.$/, "")}
                            </Link>
                          )}
                          {index < array.length - 1 &&
                            item.contact.endsWith(".") &&
                            "."}
                        </React.Fragment>
                      ))
                  : null}
              </p>
              {item.short_Description && (
                <p className="font-normal text-base text-black dark:text-soft-grey/90">
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
