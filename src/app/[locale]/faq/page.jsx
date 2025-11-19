"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";
import React, { useState, useCallback, useId } from "react";

const ContactFAQ = React.memo(() => {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const title = t("faq.title");
  const subtitle = t("faq.subtitle");

  const faqs = [
    {
      question: "What is Q Homes?",
      answer:
        "Q Homes is a tech-driven real estate platform powered by Q Global Living. It connects verified properties, developers, and buyers across Africa through a transparent, data-driven experience",
    },
    {
      question: "How does Q Homes verify listings?",
      answer:
        "Every property goes through a five-step verification process: legal review, on-site validation, developer authentication, escrow readiness, and final digital approval.",
    },
    {
      question: " Who can list on Q Homes?",
      answer:
        "Q Homes welcomes property owners, developers, and partners who meet our basic eligibility and documentation requirements to publish listings on the platform.However, only those who complete our comprehensive verification process—including legal, ownership, and authenticity checks—receive the “Verified by Q Homes” digital badge, displayed on their listings and profiles.This badge distinguishes fully verified listings from basic entries, allowing users to identify properties and developers that have passed Q Global Living’s highest level of due diligence and compliance.",
    },
    {
      question: " Can I purchase property remotely from abroad?",
      answer:
        "Yes. Q Homes supports diaspora buyers through secure escrow payment systems, digital contracts, and verified notaries",
    },
    {
      question: " Is Q Homes a real-estate agency?",
      answer:
        "No. Q Homes is not an agency — it is a tech platform that provides verified property data, digital transaction tools, and compliance infrastructure.We do not act as brokers; we enable direct, verified connections between property owners, developers, and buyers",
    },
    {
      question: "What is the Q Global Concierge?",
      answer:
        "It’s a digital service that helps with relocation, temporary housing, airport pickup, and lifestyle setup for individuals or corporate clients moving to Africa.",
    },
    {
      question: "What is “Verified by Q Homes”?",
      answer:
        "It’s our quality seal confirming that a property, project, or developer has passed all verification and compliance checks. Look for this badge before engaging in any transaction.",
    },
    {
      question: "How does escrow protection work?",
      answer:
        "Funds are deposited with a Q Global Living partner bank and released only when all contractual conditions are met — protecting both buyers and developers.",
    },
    {
      question: "How does Q Homes use my information?",
      answer:
        "We collect limited personal data (name, contact, and inquiry details) solely to process property requests and improve your digital experience. Your information is never sold or shared.",
    },
    {
      question: "How can I contact Q Homes support?",
      answer:
        "You can reach us anytime via support@qglobaliving.com or through WhatsApp directly from the platform's footer and contact page.",
    },
  ];
  return (
    <section className="w-full py-6 min-h-screen sm:py-6  px-4">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center">
          <h2 className=" text-xl md:text-5xl font-bold text-navy dark:text-[#FFFFF0]">
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
                className="rounded-xl bg-white/50 p-4 sm:p-6 shadow-sm dark:bg-navy-light transition-all duration-300"
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
                      className={`w-6 h-6 text-[#D4AF37] transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </dt>

                <dd
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`text-sm sm:text-base text-navy/70 dark:text-[#FFFFF0]/70 overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100 mt-3"
                      : "max-h-0 opacity-0 mt-0"
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
