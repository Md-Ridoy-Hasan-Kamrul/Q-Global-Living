"use client";

import React from "react";

const ContactFAQ = React.memo(({ title, subtitle, faqs }) => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 sm:gap-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-[24px] font-bold text-navy dark:text-[#FFFFF0] sm:text-[28px] md:text-[32px] lg:text-[36px]">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] text-navy/70 dark:text-[#FFFFF0]/70 sm:mt-4 sm:text-[15px] md:text-base">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl bg-white p-4 shadow-sm dark:bg-navy-light sm:p-6"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-3 sm:gap-4">
                <h3 className="text-[14px] font-bold text-navy dark:text-[#FFFFF0] sm:text-[15px] md:text-base lg:text-lg">
                  {faq.question}
                </h3>
                <span className="material-symbols-outlined text-[#D4AF37] transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-3 text-[13px] text-navy/70 dark:text-[#FFFFF0]/70 sm:mt-4 sm:text-[14px] md:text-[15px]">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
});

ContactFAQ.displayName = "ContactFAQ";

export default ContactFAQ;
