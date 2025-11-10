"use client";
import { useParams } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import initialData from "@/lib/blogData";

export default function SingleProductPage() {
  const params = useParams() || {};
  const { id } = params;
  // find by numeric id or string id
  const blog = initialData.find((b) => String(b.id) === String(id));

  if (!blog) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-xl font-semibold">Article not found</h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mt-2">The article you are looking for does not exist.</p>
      </div>
    );
  }

  // Build a minimal articleData shape from the card data so BlogPost can render it.
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

  // For now keep relatedArticles empty or simple fallback.
  const relatedArticles = [];

  return (
    <div>
      <BlogPost articleData={articleData} relatedArticles={relatedArticles} />
    </div>
  );
}
