"use client";
import Image from "next/image";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredData.map((blog) => (
        <div
          key={blog.id}
          className="bg-white dark:bg-primary/30 rounded-xl shadow-md overflow-hidden flex flex-col"
        >
          <div className="relative h-48 w-full">
            <Image
              src={blog.image}
              alt={blog.alt}
              fill
              className="object-cover rounded-t-xl"
              priority={true}
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">
              {blog.title}
            </h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
              {blog.date}
            </p>
            <p className="text-text-light dark:text-text-dark flex-grow">
              {blog.snippet}
            </p>
            <a
              href={`/blog/product/${blog.id}`}
              className="mt-4 inline-block text-accent hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
