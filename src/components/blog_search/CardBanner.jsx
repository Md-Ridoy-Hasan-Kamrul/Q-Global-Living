import React from "react";

export default function CardBanner({ initialData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {initialData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 pb-3 rounded-lg overflow-hidden bg-primary/5 dark:bg-primary/20 shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image */}
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover"
            style={{ backgroundImage: `url(${item.image})` }}
            aria-label={item.alt}
          ></div>

          {/* Content */}
          <div className="p-4 pt-0 flex flex-col gap-2">
            <p className="text-lg font-bold font-display">
              {item.titleParts
                ? // If you want to highlight certain words using <mark>
                  item.titleParts.map((part, index) =>
                    part.highlight ? (
                      <mark
                        key={index}
                        className="bg-accent-gold/40 dark:bg-accent-gold/50 px-1 rounded"
                      >
                        {part.text}
                      </mark>
                    ) : (
                      <span key={index}>{part.text}</span>
                    )
                  )
                : item.title}
            </p>

            <p className="text-subtle-text-light dark:text-subtle-text-dark text-sm font-normal">
              {item.snippet}
            </p>

            <a
              className="text-accent-gold text-sm font-bold mt-2 hover:underline"
              href={item.url}
            >
              {item.date} · Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
