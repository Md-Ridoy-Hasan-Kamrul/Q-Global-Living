import en from '@/i18n/translations/en.json';
import fr from '@/i18n/translations/fr.json';

const translations = { en, fr };

/**
 * Metadata for Residential Properties / New Developments Page
 * Generates dynamic metadata based on locale for SEO optimization
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = translations[locale] || translations.en;

  return {
    title: t.newDevelopments.meta.title,
    description: t.newDevelopments.meta.description,
    keywords: [
      'New Developments',
      "Côte d'Ivoire",
      'Real Estate',
      'Off-plan Properties',
      'Investment Properties',
      'Abidjan',
      'Property Investment',
    ],
    openGraph: {
      title: t.newDevelopments.meta.title,
      description: t.newDevelopments.meta.description,
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t.newDevelopments.meta.title,
      description: t.newDevelopments.meta.description,
    },
  };
}

export default function ResidentialLayout({ children }) {
  return children;
}
