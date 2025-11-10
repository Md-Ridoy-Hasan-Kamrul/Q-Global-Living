
"use client";
import React, { useState, useCallback, useId } from "react";

const title = "Hotel Buying FAQs";
const subtitle =
  "Get answers to common questions about purchasing hotels, ownership process, legal requirements, and investment opportunities.";

const faqs = [
  {
    question: "How can I buy a hotel property through your platform?",
    answer:
      "You can browse listed hotels for sale, filter by location, budget, and type, then contact our sales team or submit an inquiry to start the buying process.",
  },
  {
    question: "Do I need a business license to buy a hotel?",
    answer:
      "Yes, owning or operating a hotel usually requires a valid business license, along with local government approvals and tax registration.",
  },
  {
    question: "Can international buyers purchase hotels?",
    answer:
      "Absolutely. Foreign investors can buy hotels in many regions, though some countries have restrictions on land ownership. Our legal partners can help guide you through this process.",
  },
  {
    question: "What documents are required for hotel purchase?",
    answer:
      "You’ll typically need your identification, proof of funds, a purchase agreement, and legal documents verifying the property’s ownership and permits.",
  },
  {
    question: "How long does the buying process take?",
    answer:
      "Depending on location and due diligence, a hotel purchase can take 30–90 days to finalize, including property inspection and legal verification.",
  },
  {
    question: "Can I get financing or a loan to buy a hotel?",
    answer:
      "Yes, we work with trusted financial partners to offer mortgage and commercial loan options for qualified buyers.",
  },
];

const ContactFAQ = React.memo(() => {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="w-full py-10 sm:py-16  px-4">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy dark:text-[#FFFFF0]">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-navy/70 dark:text-[#FFFFF0]/70">
            {subtitle}
          </p>
        </div>

        {/* Accordion (semantic dl/dt/dd) */}
        <dl className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const headerId = `${baseId}-header-${index}`;
            const contentId = `${baseId}-content-${index}`;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl bg-white p-4 sm:p-6 shadow-sm dark:bg-navy-light transition-all duration-300"
              >
                <dt>
                  <button
                    type="button"
                    id={headerId}
                    aria-controls={contentId}
                    aria-expanded={isOpen}
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between cursor-pointer text-left"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-navy dark:text-[#FFFFF0]">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-[#D4AF37] transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </dt>

                <dd
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`text-sm sm:text-base text-navy/70 dark:text-[#FFFFF0]/70 overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                    }`}
                >
                  <div>
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
});

ContactFAQ.displayName = "ContactFAQ";
export default ContactFAQ;
