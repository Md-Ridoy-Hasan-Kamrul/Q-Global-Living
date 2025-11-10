const TermsSidebar = ({ items }) => {
  return (
    <aside className="w-full lg:w-1/4 lg:sticky lg:top-10 self-start">
      <nav className="flex flex-col gap-1 p-4 bg-white dark:bg-background-dark rounded-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
          Table of Contents
        </h2>
        {items.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-sm text-charcoal/90 dark:text-soft-grey/90 hover:bg-primary/10 hover:text-primary font-medium px-3 py-2 rounded-md"
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default TermsSidebar;
