import PageLayout from '@/components/PageLayout';
import { AuthProvider } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata = {
  title: "Q Global Living",
  description:
    'Your trusted gateway to buying, renting, and investing in Ivorian property.',
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
