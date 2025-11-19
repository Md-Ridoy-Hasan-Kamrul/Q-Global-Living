"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogCard({ initialData, searchQuery }) {
  const filteredData = initialData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pathname = usePathname() || "";
  const parts = pathname.split("/").filter(Boolean);
  const locale = parts.length > 0 ? parts[0] : "";

  if (filteredData.length === 0) {
    return (
      <p className="text-center text-text-muted-light dark:text-text-muted-dark">
        No results found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
      {filteredData.map((blog) => {
        // Try to parse a machine-readable date for <time>. Fall back to the raw string.
        let isoDate = "";
        try {
          const d = new Date(blog.date);
          if (!Number.isNaN(d.getTime())) isoDate = d.toISOString();
        } catch (e) {
          isoDate = "";
        }

        return (
          <article
            key={blog.id}
            itemScope
            itemType="https://schema.org/BlogPosting"
            className="flex flex-col gap-3 rounded-xl bg-white/50 dark:bg-card-dark shadow-md border border-[#f6efcb] dark:border-border-dark overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-full aspect-5/3 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.alt || blog.title}
                fill
                className="object-cover rounded-t-xl"
                priority={false}
              />
            </div>

            <div
              className="p-4 flex flex-col flex-grow"
              itemProp="mainEntityOfPage"
            >
              <header>
                <h2 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">
                  <Link
                    href={`/${locale}/blog/product/${blog.id}?id=${blog.id}`}
                    className="hover:underline"
                    aria-label={`Read full article: ${blog.title}`}
                    rel="bookmark"
                    itemProp="url"
                  >
                    <span itemProp="headline">{blog.title}</span>
                  </Link>
                </h2>
              </header>

              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
                {isoDate ? (
                  <time dateTime={isoDate} itemProp="datePublished">
                    {blog.date}
                  </time>
                ) : (
                  <span itemProp="datePublished">{blog.date}</span>
                )}
              </p>

              <p
                className="text-text-light dark:text-text-dark grow"
                itemProp="description"
              >
                {blog.snippet}
              </p>

              <div className="mt-4">
                <Link
                  href={`/${locale}/blog/product/${blog.id}?id=${blog.id}`}
                  className="inline-block text-accent hover:underline"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
