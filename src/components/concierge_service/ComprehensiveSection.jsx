const services = [
  {
    icon: "description",
    title: "Relocation Planning",
    description: "Complete visa and logistics support for a smooth transition.",
  },
  {
    icon: "videocam",
    title: "Virtual & On-Ground Viewings",
    description:
      "Explore potential homes from anywhere with our expert guidance.",
  },
  {
    icon: "local_shipping",
    title: "Moving & Setup Assistance",
    description: "We handle the heavy lifting, from packing to final setup.",
  },
  {
    icon: "lightbulb",
    title: "Utilities & Furnishing",
    description:
      "Get your home ready with essential services and furniture coordination.",
  },
  {
    icon: "business_center",
    title: "Corporate Packages",
    description:
      "Tailored relocation solutions for your employees and business needs.",
  },
  {
    icon: "school",
    title: "Local Integration Support",
    description:
      "Find the best schools, healthcare, and local amenities with our help.",
  },
];

export default function ComprehensiveSection() {
  return (
    <section className="flex flex-col gap-6 px-4 py-12">
      <h2 className="text-3xl font-bold font-heading text-center">
        Our Comprehensive Concierge Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col gap-4 rounded-xl border border-subtle-light dark:border-subtle-dark bg-transparent p-6 items-start text-left hover:bg-accent/5 transition-colors"
          >
            <div className="text-accent">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "32px" }}
              >
                {service.icon}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold leading-tight">
                {service.title}
              </h3>
              <p className="text-text-light/80 dark:text-text-dark/80 text-sm font-normal leading-normal">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
