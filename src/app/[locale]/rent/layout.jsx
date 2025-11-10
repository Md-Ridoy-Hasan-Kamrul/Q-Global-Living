import { headers } from 'next/headers';

/**
 * Metadata for Rent Page
 * SEO-optimized with proper meta tags, Open Graph, and Twitter Card
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEnglish = locale === 'en';

  const title = isEnglish
    ? "Rent Property in Côte d'Ivoire | Q Homes"
    : "Louer une Propriété en Côte d'Ivoire | Q Homes";

  const description = isEnglish
    ? "Discover verified, high-quality rental homes in Côte d'Ivoire. Short-term and long-term rentals available in Abidjan, Assinie, and more. Furnished and unfurnished options with flexible payment."
    : "Découvrez des maisons de location vérifiées et de haute qualité en Côte d'Ivoire. Locations à court et long terme disponibles à Abidjan, Assinie et plus. Options meublées et non meublées avec paiement flexible.";

  const ogImage =
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=630&fit=crop';

  return {
    title,
    description,
    keywords: isEnglish
      ? 'rent property ivory coast, rental homes abidjan, furnished apartments cocody, short term rentals assinie, long term rentals yamoussoukro, verified rentals cote divoire'
      : 'louer propriété côte ivoire, maisons location abidjan, appartements meublés cocody, locations court terme assinie, locations long terme yamoussoukro, locations vérifiées cote divoire',
    authors: [{ name: 'Q Homes' }],
    creator: 'Q Homes',
    publisher: 'Q Homes',
    alternates: {
      canonical: `/${locale}/rent`,
      languages: {
        en: '/en/rent',
        fr: '/fr/rent',
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/rent`,
      siteName: 'Q Homes',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: isEnglish
            ? "Rent properties in Côte d'Ivoire with Q Homes"
            : "Louer des propriétés en Côte d'Ivoire avec Q Homes",
        },
      ],
      locale: isEnglish ? 'en_US' : 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@qhomes',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'application-name': 'Q Homes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Q Homes',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
    },
  };
}

/**
 * JSON-LD Structured Data for SEO
 * Helps search engines understand the page content
 */
export function generateStructuredData(locale) {
  const isEnglish = locale === 'en';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: isEnglish
      ? "Rent Property in Côte d'Ivoire"
      : "Louer une Propriété en Côte d'Ivoire",
    description: isEnglish
      ? "Find verified rental properties in Côte d'Ivoire with Q Homes"
      : "Trouvez des propriétés de location vérifiées en Côte d'Ivoire avec Q Homes",
    url: `https://qhomes.ci/${locale}/rent`,
    inLanguage: isEnglish ? 'en-US' : 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Q Homes',
      url: 'https://qhomes.ci',
    },
    provider: {
      '@type': 'Organization',
      name: 'Q Homes',
      url: 'https://qhomes.ci',
      logo: 'https://qhomes.ci/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+225-XX-XX-XX-XX',
        contactType: 'Customer Service',
        areaServed: 'CI',
        availableLanguage: ['English', 'French'],
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: isEnglish ? 'Home' : 'Accueil',
          item: `https://qhomes.ci/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: isEnglish ? 'Rent' : 'Louer',
          item: `https://qhomes.ci/${locale}/rent`,
        },
      ],
    },
  };
}

export default function RentLayout({ children, params }) {
  return children;
}
