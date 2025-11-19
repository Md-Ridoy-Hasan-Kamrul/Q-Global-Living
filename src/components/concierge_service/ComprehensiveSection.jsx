import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function ComprehensiveSection() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const services = [
    {
      icon: "description",
      title: t("ConciergeService.ComprehensiveSection.card.relocationPlanning.title"),
      description: t("ConciergeService.ComprehensiveSection.card.relocationPlanning.description"),
    },
    {
      icon: "videocam",
      title: t("ConciergeService.ComprehensiveSection.card.virtual.title"),
      description: t("ConciergeService.ComprehensiveSection.card.virtual.description"),
    },
    {
      icon: "local_shipping",
      title: t("ConciergeService.ComprehensiveSection.card.moving.title"),
      description: t("ConciergeService.ComprehensiveSection.card.moving.description"),
    },
    {
      icon: "lightbulb",
      title: t("ConciergeService.ComprehensiveSection.card.utilities.title"),
      description: t("ConciergeService.ComprehensiveSection.card.utilities.description"),
    },
    {
      icon: "business_center",
      title: t("ConciergeService.ComprehensiveSection.card.corporate.title"),
      description: t("ConciergeService.ComprehensiveSection.card.corporate.description"),
    },
    {
      icon: "school",
      title: t("ConciergeService.ComprehensiveSection.card.Local.title"),
      description: t("ConciergeService.ComprehensiveSection.card.Local.description"),
    },
  ];
  return (
    <section className="flex flex-col gap-6 ">
      <h2 className="text-2xl md:text-3xl font-bold font-heading text-center">
        {t("ConciergeService.ComprehensiveSection.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 md:pt-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col gap-2 md:gap-4 rounded-xl border border-subtle-light dark:border-subtle-dark bg-transparent p-6 items-start text-left "
          >
            <div className="text-accent">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "32px" }}
              >
                {service.icon}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">
                {service.title}
              </h3>
              <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
