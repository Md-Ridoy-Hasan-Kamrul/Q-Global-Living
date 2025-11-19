export default function Head() {
    const title = 'Blog — Q Global Living';
    const description =
        'Latest articles on property, investment and lifestyle in Côte d\'Ivoire — news, guides and tips from Q Global Living.';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        'name': title,
        'description': description,
    };

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* canonical - use path-only canonical to avoid hardcoding domain */}
            <link rel="canonical" href="/blog" />

            {/* Minimal JSON-LD for the page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
