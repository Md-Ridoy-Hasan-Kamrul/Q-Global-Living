import Head from "next/head";
import React from "react";

export default function LegalCenterComponents({ legalDocuments }) {
  const lastUpdated = "October 26, 2023";

  return (
    <main className="lg:h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 ">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:flex lg:gap-10">
        <Head>
          <title>Legal Center - Q Homes | Terms, Privacy, and Policies</title>
          <meta
            name="description"
            content="This page is the central repository for all important legal documents governing the use of the Q Homes platform, ensuring transparency and trust."
          />
        </Head>

        <main className="flex-grow bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
          <div className="container mx-auto">
            <div className="">
              <header className="mb-8 text-center">
                <h1 className="text-primary-deep-navy dark:text-primary text-4xl font-black leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                  Legal Center
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base text-subtle-light dark:text-subtle-dark md:text-lg">
                  This page is the central repository for all important legal
                  documents governing the use of the Q Homes platform, ensuring
                  transparency and trust.
                </p>
              </header>

              <p className="text-center text-sm font-normal text-subtle-light dark:text-subtle-dark pb-8 pt-2">
                Last Updated: **{lastUpdated}**
              </p>

              <div className="space-y-4">
                {legalDocuments.map((doc) => (
                  <a
                    key={doc.title}
                    // href={doc.href}
                    className="group flex items-center gap-4 rounded-lg bg-white dark:bg-gray-700 p-4 min-h-[72px] justify-between border border-transparent transition-all hover:border-primary/50 hover:shadow-lg dark:hover:bg-gray-600"
                  >
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-12 text-primary">
                        <span className="material-symbols-outlined text-2xl">
                          {doc.iconName}
                        </span>
                      </div>

                      <div className="flex flex-col justify-center">
                        <p className="text-base font-bold text-content-light dark:text-content-dark group-hover:text-primary transition-colors">
                          {doc.title}
                        </p>
                        <p className="text-sm text-subtle-light dark:text-subtle-dark line-clamp-2">
                          {doc.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="material-symbols-outlined">
                        arrow_forward_ios
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
