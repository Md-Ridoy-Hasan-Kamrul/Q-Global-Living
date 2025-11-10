"use client";

import { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import initialData from "@/lib/blogData";
import ArticleHeader from "@/components/blog_post/ArticleHeader";
import RelatedArticles from "@/components/blog_post/RelatedArticles";

export default function BlogPost({ relatedArticles, articleData, locale, serverDebug }) {
  const pathname = usePathname();
  const search = useSearchParams();

  // If server provided articleData, use it. Otherwise try to resolve on client.
  const resolved = useMemo(() => {
    if (articleData) return { articleData, from: "server" };

    // Try search param first
    const idFromSearch = search?.get("id");
    if (idFromSearch) {
      const blog = initialData.find((b) => String(b.id) === String(idFromSearch));
      if (blog) {
        const articleDataClient = {
          title: blog.title,
          subtitle: blog.subtitle || blog.snippet,
          author: blog.author || "",
          publishedDate: blog.publishedDate || blog.date,
          readTime: blog.readTime || "",
          heroImage: blog.heroImage || blog.image,
          sections: Array.isArray(blog.sections) && blog.sections.length > 0 ? blog.sections : [{ heading: blog.title, content: blog.snippet, image: blog.image }],
        };
        return { articleData: articleDataClient, relatedArticles: initialData.filter((b) => String(b.id) !== String(blog.id)).slice(0, 3), from: "client-search" };
      }
    }

    // Try pathname: expect /{locale}/blog/product/{id}
    if (pathname) {
      const parts = pathname.split("/").filter(Boolean);
      const maybeId = parts[parts.length - 1];
      if (maybeId) {
        const blog = initialData.find((b) => String(b.id) === String(maybeId));
        if (blog) {
          const articleDataClient = {
            title: blog.title,
            subtitle: blog.subtitle || blog.snippet,
            author: blog.author || "",
            publishedDate: blog.publishedDate || blog.date,
            readTime: blog.readTime || "",
            heroImage: blog.heroImage || blog.image,
            sections: Array.isArray(blog.sections) && blog.sections.length > 0 ? blog.sections : [{ heading: blog.title, content: blog.snippet, image: blog.image }],
          };
          return { articleData: articleDataClient, relatedArticles: initialData.filter((b) => String(b.id) !== String(blog.id)).slice(0, 3), from: "client-path" };
        }
      }
    }

    return { articleData: null, from: "not-found" };
  }, [articleData, pathname, search]);

  if (!resolved.articleData) {
    // Show helpful debug info (server-provided + client attempts)
    return (
      <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="py-12 text-center">
            <h2 className="text-xl font-semibold">Article not found</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mt-2">We couldn&apos;t resolve the article from the server or client URL.</p>
            <div className="mt-6 text-sm text-left mx-auto max-w-xl bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
              <p className="font-medium">Debug info</p>
              <pre className="whitespace-pre-wrap text-xs mt-2">server params: {JSON.stringify(serverDebug?.params)}</pre>
              <pre className="whitespace-pre-wrap text-xs mt-2">server searchParams: {JSON.stringify(serverDebug?.searchParams)}</pre>
              <pre className="whitespace-pre-wrap text-xs mt-2">availableIds: {JSON.stringify(serverDebug?.availableIds)}</pre>
              <pre className="whitespace-pre-wrap text-xs mt-2">client pathname: {String(pathname)}</pre>
              <pre className="whitespace-pre-wrap text-xs mt-2">client search id: {String(search?.get("id"))}</pre>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <ArticleHeader articleData={resolved.articleData} />
        <RelatedArticles relatedArticles={resolved.relatedArticles || relatedArticles} locale={locale} />
      </div>
    </main>
  );
}
