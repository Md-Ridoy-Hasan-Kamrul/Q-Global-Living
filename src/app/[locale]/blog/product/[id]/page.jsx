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

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
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

  // related articles: exclude current and pick up to 3
  const relatedArticles = initialData.filter((b) => String(b.id) !== String(blog.id)).slice(0, 3);

  return (
    <div>
      <BlogPost articleData={articleData} relatedArticles={relatedArticles} locale={resolvedParams?.locale} />
    </div>
  );
}
