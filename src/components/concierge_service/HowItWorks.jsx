import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import React from "react";

export default function HowItWorks() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const steps = [
    {
      number: 1,
      title: t("ConciergeService.HowItWorks.Initial.title"),
      description:
        t("ConciergeService.HowItWorks.Initial.description"),
    },
    {
      number: 2,
      title: t("ConciergeService.HowItWorks.Customized.title"),
      description:
        t("ConciergeService.HowItWorks.Customized.description"),
    },
    {
      number: 3,
      title: t("ConciergeService.HowItWorks.Seamless.title"),
      description:
        t("ConciergeService.HowItWorks.Seamless.description"),
    },
  ];
  return (
    <section className="flex flex-col gap-2 md:gap-10 px-4 pt-10 md:pt-20 md:pb-10">
      <h2 className="text-2xl md:text-3xl font-bold font-heading text-center">
        {t("ConciergeService.HowItWorks.title")}
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 ">
        {/* Horizontal connecting line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-subtle-light dark:bg-subtle-dark hidden md:block"></div>

        {steps.map((step) => (
          <div
            key={step.number}
            className="relative flex flex-col items-center text-center gap-2 md:gap-4 p-4"
          >
            <div className="bg-accent text-black rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold z-10 shadow-md">
              {step.number}
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-sm text-black dark:text-white max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
