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

  // This component renders only the main content area (no page wrapper).
  return (
    <main className="w-full lg:w-3/4 space-y-6 lg:mt-0 md:mt-12 sm:mt-10 mt-8">
      <Head>
        <title>{policy_title} | QHomes</title>
      </Head>

      <header>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
          {policy_title || "Cookie Policy"}
        </h1>
        <p className="text-base text-charcoal/80 dark:text-soft-grey/80 mb-4">
          Last updated: {last_updated || "Not available"}
        </p>
        <p className="font-normal text-base sm:text-base text-charcoal/90 dark:text-soft-grey/90">
          {introduction || "Introduction text not available."}
        </p>
      </header>

   

      <section className="space-y-6">
        {sections &&
          sections.map((section) => (
            <section
              key={section.heading}
              id={createAnchorId(section.heading)}
              className="scroll-mt-20"
            >
              <h2 className="text-xl lg:text-2xl font-bold tracking-tight ">
                {section.heading}
              </h2>

              {section.content && section.heading !== "Contact Us" && (
                <p className="font-normal text-base text-charcoal/90 dark:text-soft-grey/90 ">
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
                      <p className="font-normal text-base  text-charcoal/90 dark:text-soft-grey/90 mb-3 mt-1">
                        {cookieType.purpose}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.heading === "Contact Us" && section.content && (
                <p className="font-normal text-base  text-charcoal/90 dark:text-soft-grey/90 mb-3">
                  {section.content
                    .split(section.email)
                    .map((part, index, array) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <a
                            className="font-semibold text-[#d4af37] dark:text-yellow-200 hover:underline ml-2"
                            href={`mailto:${section.email.replace(/\.$/, "")}`}
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
      </section>
    </main>
  );
}
