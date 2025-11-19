import BlogPost from "@/components/blog/BlogPost";
import initialData from "@/lib/blogData";

// Generate metadata server-side for better SEO and social cards
export async function generateMetadata({ params, searchParams }) {
  // params may be a Promise in some Next.js environments — await it.
  const resolvedParams = await params;
  // prefer route params, but fall back to search params if params is empty
  const id = (resolvedParams && resolvedParams.id) ?? (searchParams && searchParams.id);
  const blog = initialData.find((b) => String(b.id) === String(id));

  if (!blog) {
    return {
      title: "Article not found - Blog",
      description: "The requested article was not found.",
    };
  }

  const title = blog.title;
  const description = blog.subtitle || blog.snippet || "";
  const image = blog.heroImage || blog.image;

  // Build a locale-aware canonical path (no domain so it's safe in dev)
  const localePrefix = resolvedParams && resolvedParams.locale ? `/${resolvedParams.locale}` : "";
  const canonicalPath = `${localePrefix}/blog/product/${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
    },
    // provide a canonical path so crawlers see a canonical link
    alternates: {
      canonical: canonicalPath,
    },
  };
}

export default async function SingleProductPage({ params, searchParams }) {
  // params may be a Promise — unwrap it before accessing properties
  const resolvedParams = await params;
  // route params may be empty in some environments; fall back to search params
  const id = (resolvedParams && resolvedParams.id) ?? (searchParams && searchParams.id);
  const blog = initialData.find((b) => String(b.id) === String(id));

  if (!blog) {

    const serverDebug = { params: resolvedParams || {}, searchParams: searchParams || {}, availableIds: initialData.map((i) => i.id) };

    return (
      <div>
        <BlogPost articleData={null} relatedArticles={initialData} locale={resolvedParams?.locale} serverDebug={serverDebug} />
      </div>
    );
  }

  const articleData = {
    title: blog.title,
    subtitle: blog.subtitle || blog.snippet,
    author: blog.author || "",
    publishedDate: blog.publishedDate || blog.date,
    readTime: blog.readTime || "",
    heroImage: blog.heroImage || blog.image,
    sections: Array.isArray(blog.sections) && blog.sections.length > 0
      ? blog.sections
      : [
        {
          heading: blog.title,
          content: blog.snippet,
          image: blog.image,
        },
      ],
  };

  // JSON-LD structured data for this article (server-rendered)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: articleData.title,
    description: articleData.subtitle,
    datePublished: new Date(articleData.publishedDate).toISOString(),
    author: articleData.author || undefined,
    image: articleData.heroImage || undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${(resolvedParams && resolvedParams.locale) ? `/${resolvedParams.locale}` : ''}/blog/product/${blog.id}`,
    },
  };

  // related articles: exclude current and pick up to 3
  const relatedArticles = initialData.filter((b) => String(b.id) !== String(blog.id)).slice(0, 3);

  return (
    <div>
      {/* JSON-LD for crawlers / rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost articleData={articleData} relatedArticles={relatedArticles} locale={resolvedParams?.locale} />
    </div>
  );
}
