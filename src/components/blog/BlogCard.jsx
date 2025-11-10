"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BlogCard({ initialData, searchQuery }) {
  const filteredData = initialData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredData.length === 0) {
    return (
      <p className="text-center text-text-muted-light dark:text-text-muted-dark">
        No results found.
      </p>
    );
  }

  const pathname = usePathname() || "";
  const parts = pathname.split("/").filter(Boolean);
  const locale = parts.length > 0 ? parts[0] : "";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredData.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col gap-3 rounded-xl bg-background-light dark:bg-card-dark shadow-md border border-[#f6efcb] dark:border-border-dark overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="relative w-full aspect-5/3 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.alt}
              fill
              className="object-cover rounded-t-xl"
              priority={false}
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">
              {blog.title}
            </h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
              {blog.date}
            </p>
            <p className="text-text-light dark:text-text-dark flex-grow">
              {blog.snippet}
            </p>
            <Link
              href={`/${locale}/blog/product/${blog.id}?id=${blog.id}`}
              className="mt-4 inline-block text-accent hover:underline"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
