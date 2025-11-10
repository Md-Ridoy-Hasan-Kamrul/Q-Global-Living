import Head from "next/head";
import React from "react";

export default function CookieMainContent({ cookie }) {
  const {
    policy_title,
    last_updated,
    introduction,
    table_of_contents,
    sections,
  } = cookie;

  const createAnchorId = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  if (!policy_title || !sections)
    return <div>Loading or Data not available...</div>;

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Head>
          <title>{policy_title} | QHomes</title>
        </Head>

        {/* <main className="flex flex-col gap-8 md:gap-12 px-6 md:p-10"> */}
        <main className="flex flex-col space-y-12 px-4 text-lg leading-relaxed">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                {policy_title || "Cookie Policy"}
              </h1>
              <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90">
                Last updated: {last_updated || "Not available"}
              </p>
            </div>
          </div>

          <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90 md:mb-8 mb-6">
            {introduction || "Introduction text not available."}
          </p>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white/50 dark:bg-background-dark/50">
            <h2 className="text-lg lg:text-xl font-bold tracking-tight leading-tight font-display mb-4">
              Table of Contents
            </h2>
            <ul className="space-y-2">
              {table_of_contents &&
                table_of_contents.map((item) => (
                  <li key={item}>
                    <a
                      className="text-brand-navy dark:text-text-dark hover:text-brand-gold dark:hover:text-brand-gold underline text-sm font-medium"
                      href={`#${createAnchorId(item)}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            {sections &&
              sections.map((section) => (
                <section
                  key={section.heading}
                  id={createAnchorId(section.heading)}
                 
                  className="scroll-mt-24"
                >
                  <h2 className="text-xl lg:text-2xl font-bold tracking-tight mb-3">
                    {section.heading}
                  </h2>

                  {section.content && section.heading !== "Contact Us" && (
                    <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90 mb-3">
                      {section.content}
                    </p>
                  )}

                  {section.subsections && (
                    <div className="space-y-5">
                      {section.subsections.map((cookieType) => (
                        <div key={cookieType.type}>
                          <h3 className="text-lg font-medium tracking-tight mb-3">
                            {cookieType.type}
                          </h3>
                          <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90 mb-3 mt-1">
                            {cookieType.purpose}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.heading === "Contact Us" && section.content && (
                    <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90 mb-3">
                      {section.content
                        .split(section.email)
                        .map((part, index, array) => (
                          <React.Fragment key={index}>
                            {part}
                            {index < array.length - 1 && (
                              <a
                                
                                className="font-semibold text-yellow-200 dark:text-yellow-200 hover:underline"
                                href={`mailto:${section.email}`}
                              >
                                {section.email}
                              </a>
                            )}
                          </React.Fragment>
                        ))}
                    </p>
                  )}
                </section>
              ))}
          </div>
        </main>
      </div>
    </main>
  );
}
