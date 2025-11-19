import PageLayout from '@/components/PageLayout';
import { AuthProvider } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata = {
  title: "Q Global Living - Real Estate Platform",
  description:
    'Q Global Living is your trusted gateway to buying, renting, and investing in African property through our Q Homes platform.',
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  return (
    <LanguageProvider initialLocale={locale}>
      <AuthProvider>
        <PageLayout locale={locale}>{children}</PageLayout>
      </AuthProvider>
    </LanguageProvider>
  );
}
