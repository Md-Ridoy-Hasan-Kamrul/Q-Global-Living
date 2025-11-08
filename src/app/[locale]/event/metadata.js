export async function generateMetadata({ params }) {
  const { locale } = params;

  const metadata = {
    en: {
      title:
        "Exclusive Webinar: Investing in Abidjan's Real Estate Market | Q Homes",
      description:
        "Join our expert panel to uncover the lucrative opportunities in Côte d'Ivoire's thriving property market. Learn key strategies for successful investment.",
    },
    fr: {
      title:
        "Webinaire Exclusif: Investir dans le Marché Immobilier d'Abidjan | Q Homes",
      description:
        "Rejoignez notre panel d'experts pour découvrir les opportunités lucratives dans le marché immobilier florissant de la Côte d'Ivoire. Apprenez les stratégies clés pour un investissement réussi.",
    },
  };

  const currentMetadata = metadata[locale] || metadata.en;

  return {
    title: currentMetadata.title,
    description: currentMetadata.description,
    openGraph: {
      title: currentMetadata.title,
      description: currentMetadata.description,
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMetadata.title,
      description: currentMetadata.description,
    },
    alternates: {
      canonical: `/event`,
      languages: {
        en: '/en/event',
        fr: '/fr/event',
      },
    },
  };
}

export { default } from './page';
