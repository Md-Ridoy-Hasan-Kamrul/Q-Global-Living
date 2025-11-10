import React from "react";

const PrivacySidebar = ({ items }) => {
  return (
    <aside className="w-full lg:w-1/4 lg:sticky lg:top-10 self-start">
      <nav className="flex flex-col gap-1 p-4 bg-white dark:bg-background-dark rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 px-3 pb-2 border-b border-gray-200 dark:border-gray-700 mb-2">
          On this page
        </h3>
        {items.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-sm text-gray-600 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary font-medium px-3 py-2 rounded-md transition-colors duration-150"
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default PrivacySidebar;
