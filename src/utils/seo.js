/**
 * Production-grade SEO Utility Functions
 *
 * Features:
 * - Generate SEO-optimized metadata
 * - Create structured data (JSON-LD)
 * - Handle Open Graph and Twitter Cards
 * - Multi-language support
 */

/**
 * Generate metadata for Next.js pages
 * @param {Object} config - Metadata configuration
 * @returns {Object} Next.js metadata object
 */
export function generateMetadata(config) {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    locale = 'en',
    alternateLanguages = [],
  } = config;

  const siteName = "Q HOMES - Côte d'Ivoire Real Estate";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qhomes.ci';

  return {
    title: {
      default: title || siteName,
      template: `%s | ${siteName}`,
    },
    description:
      description ||
      'Your trusted gateway to buying, renting, and investing in Ivorian property.',
    keywords: keywords || [
      'real estate',
      "Côte d'Ivoire",
      'property',
      'buy',
      'rent',
      'invest',
      'Abidjan',
      'verified listings',
      'escrow protection',
    ],
    authors: [{ name: 'Q HOMES Team' }],
    creator: 'Q HOMES',
    publisher: 'Q HOMES',

    // Open Graph
    openGraph: {
      title: title || siteName,
      description: description,
      url: url || baseUrl,
      siteName,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title || siteName,
            },
          ]
        : [],
      locale,
      type,
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title || siteName,
      description: description,
      images: image ? [image] : [],
      creator: '@qhomes_ci',
    },

    // Alternate languages
    alternates: {
      canonical: url || baseUrl,
      languages: alternateLanguages.reduce((acc, lang) => {
        acc[lang.locale] = lang.url;
        return acc;
      }, {}),
    },

    // Robots
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

    // Verification
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
  };
}

/**
 * Generate property structured data (JSON-LD)
 * @param {Object} property - Property data
 * @returns {Object} JSON-LD structured data
 */
export function generatePropertyStructuredData(property) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    image: property.images?.[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.region,
      postalCode: property.postalCode,
      addressCountry: 'CI',
    },
    geo: property.coordinates
      ? {
          '@type': 'GeoCoordinates',
          latitude: property.coordinates.lat,
          longitude: property.coordinates.lng,
        }
      : undefined,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: property.currency || 'XOF',
      availability: 'https://schema.org/InStock',
      url: property.url,
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: property.area
      ? {
          '@type': 'QuantitativeValue',
          value: property.area,
          unitCode: 'MTK',
        }
      : undefined,
  };
}

/**
 * Generate organization structured data (JSON-LD)
 * @returns {Object} JSON-LD structured data
 */
export function generateOrganizationStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qhomes.ci';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Q HOMES',
    alternateName: "Q HOMES - Côte d'Ivoire Real Estate",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      'Your trusted gateway to buying, renting, and investing in Ivorian property.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abidjan',
      addressCountry: 'CI',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+225-01-23-45-67-89',
      contactType: 'customer service',
      availableLanguage: ['English', 'French'],
    },
    sameAs: [
      'https://www.facebook.com/qhomes',
      'https://www.twitter.com/qhomes_ci',
      'https://www.linkedin.com/company/qhomes',
      'https://www.instagram.com/qhomes_ci',
    ],
  };
}

/**
 * Generate breadcrumb structured data (JSON-LD)
 * @param {Array} breadcrumbs - Array of breadcrumb items
 * @returns {Object} JSON-LD structured data
 */
export function generateBreadcrumbStructuredData(breadcrumbs) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qhomes.ci';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Generate FAQ structured data (JSON-LD)
 * @param {Array} faqs - Array of FAQ items
 * @returns {Object} JSON-LD structured data
 */
export function generateFAQStructuredData(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate canonical URL
 * @param {string} path - Current path
 * @param {string} locale - Current locale
 * @returns {string} Canonical URL
 */
export function generateCanonicalUrl(path, locale = 'en') {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qhomes.ci';
  const cleanPath = path.replace(/\/$/, ''); // Remove trailing slash
  return `${baseUrl}/${locale}${cleanPath}`;
}

/**
 * Generate alternate language links
 * @param {string} path - Current path
 * @param {Array} locales - Available locales
 * @returns {Array} Array of alternate language links
 */
export function generateAlternateLanguages(path, locales = ['en', 'fr']) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qhomes.ci';
  const cleanPath = path.replace(/\/$/, '');

  return locales.map((locale) => ({
    locale,
    url: `${baseUrl}/${locale}${cleanPath}`,
  }));
}
