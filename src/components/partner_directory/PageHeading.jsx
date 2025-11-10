export default function PageHeading() {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4 text-center my-8 md:my-16">
      <div className="flex w-full flex-col gap-4 max-w-3xl mx-auto">
        <h1 className="font-display text-primary dark:text-text-dark text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Our Trusted Partners: Your Network for a Seamless Move
        </h1>
        <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal leading-normal">
          Explore our curated network of vetted professionals, from legal
          advisors to moving specialists, ensuring every step of your real
          estate journey in Côte d’Ivoire is seamless and secure.
        </p>
      </div>
    </div>
  );
}
