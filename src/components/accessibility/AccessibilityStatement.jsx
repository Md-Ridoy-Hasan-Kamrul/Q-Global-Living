import Link from "next/link";

export default function AccessibilityStatement({ accessibility }) {
  if (!accessibility) {
    return <p>Accessibility statement data is loading or unavailable.</p>;
  }

  const TocLink = ({ href, text }) => (
    <Link
      href={href}
      className="flex items-center gap-4 bg-transparent px-4 min-h-14 justify-between hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="text-deep-navy dark:text-gray-300 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 shrink-0 size-10">
          <span className="material-symbols-outlined" aria-hidden="true">
            link
          </span>
        </div>
        <p className="text-dark-gray dark:text-gray-200 text-base font-medium leading-normal flex-1 truncate">
          {text}
        </p>
      </div>
      <span className="text-deep-navy dark:text-gold text-sm font-medium leading-normal shrink-0">
        Jump to section
      </span>
    </Link>
  );

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <header className="flex flex-wrap justify-between gap-3 p-4 mb-8">
          <div className="flex w-full flex-col gap-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {accessibility.pageTitle}
            </h1>
            <p
              className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90"
              style={{ lineHeight: 1.7 }}
            >
              {accessibility.pageDescription}
            </p>
          </div>
        </header>

        {/* Table of Contents */}
        <nav aria-labelledby="toc-heading" className="p-4 mb-12">
          <h2
            id="toc-heading"
            className="text-lg lg:text-xl font-bold tracking-tight leading-tight font-display px-4 pb-4 pt-4 border-b-2"
          >
            On this page
          </h2>
          <div className="flex flex-col pt-2">
            {accessibility.tableOfContents.map((item) => (
              <TocLink key={item.id} href={`#${item.id}`} text={item.title} />
            ))}
          </div>
        </nav>

        {/* Sections */}
        <div
          className="space-y-12 px-4 text-lg leading-relaxed"
          style={{ lineHeight: 1.7 }}
        >
          {accessibility.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
            >
              <h2
                id={`${section.id}-heading`}
                className="text-lg lg:text-xl font-bold tracking-tight leading-tight font-display pb-2"
              >
                {section.title}
              </h2>

              {/* HR now shows for all sections including last */}
              <hr className="my-2 border-amber-200 border dark:border-gray-700" />

              {section.content && (
                <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90">
                  {section.content}
                </p>
              )}

              {section.mainText && (
                <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90">
                  {section.mainText}
                </p>
              )}

              {section.contactMethods && (
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  {section.contactMethods.map((method) => (
                    <li key={method.type}>
                      <strong>{method.type}:</strong>
                      {method.link ? (
                        <Link
                          href={method.link}
                          className="text-deep-navy dark:text-gold underline hover:text-gold ml-1 transition-colors"
                        >
                          {method.value}
                        </Link>
                      ) : (
                        <span className="ml-1">{method.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {section.technologies && (
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  {section.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}

              {section.followUpText && (
                <p className="mt-4 font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90">
                  {section.followUpText}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
