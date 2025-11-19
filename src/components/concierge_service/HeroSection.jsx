import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function HeroSection() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  return (
    <div className="@container">
      <div className="@[480px]:p-0">
        <div
          className="flex sm:min-h-[480px] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-start justify-center text-center px-4 py-10 @[480px]:px-10 bg-cover bg-center bg-no-repeat mb-4 md:mb-10"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 25, 49, 0.7), rgba(10, 25, 49, 0.4)), url('https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1920&q=80')`,
          }}
        >
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 className="text-white text-2xl md:text-5xl font-bold leading-tight tracking-tight font-heading">
              {t("ConciergeService.title")}
            </h1>
            <h2 className="text-white text-base @[480px]:text-lg font-normal leading-normal">
              {t("ConciergeService.subtitle")}
            </h2>
          </div>

          <button className="flex mx-auto min-w-[84px] max-w-[480px] h-12 @[480px]:h-14 items-center justify-center rounded-lg px-5 @[480px]:px-8 bg-accent text-primary text-sm @[480px]:text-base font-bold tracking-[0.015em] hover:opacity-90 transition-opacity">
            <span className="truncate text-white">
              {t("ConciergeService.contactButton")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
