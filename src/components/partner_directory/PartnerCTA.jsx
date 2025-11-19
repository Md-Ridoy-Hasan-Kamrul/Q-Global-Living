import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function PartnerCTA() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  return (
    <section className="my-2 md:my-4 md:mb-8">
      <div className="bg-[#001f3f] dark:bg-[#001f3f]/80 text-white rounded-xl shadow-lg flex flex-col md:flex-col items-center justify-between p-8 md:p-12 gap-8">
        <div className="text-center ">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            {t("PartnerDirectory.partnerCTA.title")}
          </h2>
          <p className="text-lg text-white/80">
            {t("PartnerDirectory.partnerCTA.subtitle")}
          </p>
        </div>
        <button className="shrink-0 flex  cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-black/70 text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
          <span>{t("PartnerDirectory.partnerCTA.button")}</span>
        </button>
      </div>
    </section>
  );
}
