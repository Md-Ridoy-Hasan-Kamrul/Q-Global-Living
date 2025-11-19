import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function PageHeading() {
  const { locale } = useLanguage();
    const { t } = useTranslation(locale);
    
  return (
    <div className="flex flex-wrap justify-between gap-3  text-center my-4">
      <div className="flex w-full flex-col gap-4 max-w-3xl mx-auto">
        <h1 className="font-display text-black dark:text-text-dark text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          {t('PartnerDirectory.Title')}
          
        </h1>
        <p className="text-text-muted-light dark:text-text-muted-dark text-base md:text-lg font-normal leading-normal">
          {t('PartnerDirectory.Subtitle')}
        </p>
      </div>
    </div>
  );
}
