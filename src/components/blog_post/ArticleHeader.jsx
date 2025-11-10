import Image from "next/image";
import Link from "next/link";

// Main ArticleHeader component
export default function ArticleHeader({ articleData }) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="flex flex-wrap gap-2 px-2 pb-6">
        <Link
          href="/"
          className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-accent"
        >
          Home
        </Link>
        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          /
        </span>
        <Link
          href="/blog"
          className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-accent"
        >
          Blog
        </Link>
        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          /
        </span>
        <span className="text-text-light dark:text-text-dark text-sm font-medium truncate max-w-xs sm:max-w-none">
          {articleData.title}
        </span>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
        <Image
          src={articleData.heroImage}
          alt={articleData.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {/* Article Header */}
      <article className="max-w-7xl mx-auto w-full">
        <h1 className="text-text-light dark:text-text-dark font-display tracking-tight text-2xl md:text-4xl  font-bold leading-tight text-left pb-3">
          {articleData.title}
        </h1>
        <h2 className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-body leading-relaxed text-left pb-4">
          {articleData.subtitle}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal pb-8 pt-1 border-b border-subtle-light dark:border-subtle-dark">
          By {articleData.author} | Published on {articleData.publishedDate} |{" "}
          {articleData.readTime}
        </p>

        {/* Article Sections mapped dynamically */}
        <div className="prose prose-lg dark:prose-invert max-w-none font-body text-text-light dark:text-text-dark pt-8 space-y-6">
          {articleData.sections.map((section, idx) => (
            <section key={idx}>
              <h3 className="font-display font-bold text-2xl !mt-2 !mb-2">
                {section.heading}
              </h3>
              <p>{section.content}</p>

              {/* Optional Blockquote */}
              {section.blockquote && (
                <blockquote className="border-l-4 border-accent bg-gray-100 dark:bg-subtle-dark/50 p-4 rounded-r-lg my-6">
                  <p className="italic text-gray-700 dark:text-gray-300">
                    {section.blockquote}
                  </p>
                </blockquote>
              )}

              {/* Optional Image */}
              {section.image && (
                <figure className="w-full">
                  {/* responsive heights: small screens shorter, large screens ~300px */}
                  <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-[700px] rounded-lg overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.heading}
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>
                  <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {section.heading}
                  </figcaption>
                </figure>
              )}

              {/* Optional List */}
              {section.list && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Social Share */}
        <div className="py-8 mt-10 border-t border-b border-subtle-light dark:border-subtle-dark">
          <h4 className="text-center text-lg font-bold mb-4 font-display">
            Share This Article
          </h4>
          <div className="flex justify-center items-center gap-4">
            {["share", "link", "mail"].map((icon, i) => (
              <a
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-subtle-light dark:bg-subtle-dark hover:bg-accent hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  {icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
