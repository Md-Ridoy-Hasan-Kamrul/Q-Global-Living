import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function FinalCTASection() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  return (
    <section className="bg-[#0A1931] text-white rounded-xl p-6 md:p-16 md:mb-4 flex flex-col items-center text-center gap-3 md:gap-6">
      <h2 className="text-2xl md:text-3xl font-bold font-heading">{t("ConciergeService.finalCta.title")}</h2>

      <p className="max-w-2xl">
        {t("ConciergeService.finalCta.description")}
      </p>

      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
        <span className="truncate text-white">{t("ConciergeService.finalCta.button")}</span>
      </button>
    </section>
  );
}
