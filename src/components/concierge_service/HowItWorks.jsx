import React from "react";

const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "Share your needs and expectations with us in a free, no-obligation meeting.",
  },
  {
    number: 2,
    title: "Customized Plan",
    description:
      "We design a personalized relocation strategy that covers all your requirements.",
  },
  {
    number: 3,
    title: "Seamless Execution",
    description:
      "Relax as our team handles every detail, providing you with regular updates.",
  },
];

export default function HowItWorks() {
  return (
    <section className="flex flex-col gap-10 px-4 py-12">
      <h2 className="text-3xl font-bold font-heading text-center">
        A Simple Path to Your New Home
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        {/* Horizontal connecting line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-subtle-light dark:bg-subtle-dark hidden md:block"></div>

        {steps.map((step) => (
          <div
            key={step.number}
            className="relative flex flex-col items-center text-center gap-4 p-4"
          >
            <div className="bg-accent text-black/90 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold z-10 shadow-md">
              {step.number}
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-sm text-text-light/80 dark:text-text-dark/80 max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
