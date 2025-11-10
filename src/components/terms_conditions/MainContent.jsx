import Link from "next/link";
import React from "react";

const MainContent = ({ terms, items }) => {
  return (
    <main className="w-full lg:w-3/4 space-y-8 lg:mt-0 md:mt-12 sm:mt-10 mt-8">
      <header>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
          Terms & Conditions
        </h2>
        <p className="text-sm text-charcoal/80 dark:text-soft-grey/80 mb-4">
          Last Updated: October 26, 2023
        </p>
        <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90">
          Welcome to Q Homes. These terms and conditions outline the rules and
          regulations for the use of Q Homes Website, located at qhomes.ci. By
          accessing this website we assume you accept these terms and
          conditions. Do not continue to use Q Homes if you do not agree to take
          all of the terms and conditions stated on this page.
        </p>
      </header>

      <section className="md:space-y-14 sm:space-y-12 space-y-10">
        {terms.map((item, index) => {
          const sectionId = items[index] ? items[index].id : "";

          return (
            <div
              key={item.id || item.title}
              id={sectionId}
              className="scroll-mt-32"
            >
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90 mb-3">
                {item.description
                  ? item.description
                      .split(item.contact)
                      .map((part, index, array) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < array.length - 1 && item.contact && (
                            <Link
                              href="/contact"
                              className="font-semibold text-yellow-200 dark:text-yellow-200 hover:underline"
                            >
                              {item.contact.replace(/\.$/, "")}
                            </Link>
                          )}
                          {index < array.length - 1 &&
                            item.contact.endsWith(".") &&
                            "."}
                        </React.Fragment>
                      ))
                  : null}
              </p>
              {item.short_Description && (
                <p className="font-normal text-sm sm:text-base text-charcoal/90 dark:text-soft-grey/90">
                  {item.short_Description}
                </p>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default MainContent;
