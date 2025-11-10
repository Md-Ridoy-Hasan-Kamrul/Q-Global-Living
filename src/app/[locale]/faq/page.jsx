// "use client";
// import { useState } from "react";
// import { ChevronDown, HelpCircle } from "lucide-react";

// const faqs = [
//   {
//     question: "How do I make a hotel reservation?",
//     answer:
//       "Simply search for your preferred destination and dates, select a hotel and room type, and complete your booking online using a debit/credit card or other available payment options.",
//   },
//   {
//     question: "Can I modify or cancel my reservation?",
//     answer:
//       "Yes, you can modify or cancel your booking through your account dashboard or by contacting our support team. Please note that cancellation policies may vary by hotel and room type.",
//   },
//   {
//     question: "What is your refund policy?",
//     answer:
//       "If you cancel your booking within the free cancellation period, you’ll receive a full refund. Refunds are processed within 5–7 business days to your original payment method.",
//   },
//   {
//     question: "Do I need to pay at the time of booking?",
//     answer:
//       "Some hotels require prepayment, while others allow you to pay during check-in. The payment requirement is clearly mentioned before confirming your booking.",
//   },
//   {
//     question: "Are taxes and service fees included in the price?",
//     answer:
//       "Yes, all applicable taxes and service fees are displayed in the final price before you complete your booking. No hidden charges apply.",
//   },
//   {
//     question: "What time is check-in and check-out?",
//     answer:
//       "Standard check-in time is from 2:00 PM and check-out is by 12:00 PM. However, early check-in or late check-out may be available on request, depending on room availability.",
//   },
//   {
//     question: "Can I book a hotel for someone else?",
//     answer:
//       "Yes, you can book a room on behalf of someone else. Please make sure the guest’s name is correctly entered during the booking process.",
//   },
//   {
//     question: "Is breakfast included with my booking?",
//     answer:
//       "This depends on the room type and rate plan you select. Rooms with breakfast included are clearly marked during booking.",
//   },
//   {
//     question: "Do you offer group bookings or corporate rates?",
//     answer:
//       "Yes, we offer special rates and packages for group or corporate bookings. Please contact our support team for customized offers.",
//   },
//   {
//     question: "Do you have a loyalty or rewards program?",
//     answer:
//       "Yes, members of our loyalty program earn reward points on every booking. These points can be redeemed for future stays or discounts.",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mb-4 shadow-lg">
//             <HelpCircle className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-4xl font-bold text-white mb-3">
//             Frequently Asked Questions
//           </h1>
//           <p className="text-lg text-gray-400">
//             Everything you need to know about Next.js
//           </p>
//         </div>

//         {/* FAQ Items */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset transition-colors hover:bg-gray-750"
//               >
//                 <span className="font-semibold text-white pr-4">
//                   {faq.question}
//                 </span>
//                 <ChevronDown
//                   className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <div
//                 className={`transition-all duration-200 ease-in-out ${
//                   openIndex === index
//                     ? "max-h-96 opacity-100"
//                     : "max-h-0 opacity-0"
//                 } overflow-hidden`}
//               >
//                 <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
//                   {faq.answer}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";

const title = "Hotel Booking FAQs";
const subtitle =
  "Find answers to the most common questions about hotel reservations, payments, and cancellations.";

const faqs = [
  {
    question: "How do I make a hotel reservation?",
    answer:
      "Simply search for your preferred destination and dates, select a hotel and room type, and complete your booking online using a debit/credit card or other available payment options.",
  },
  {
    question: "Can I modify or cancel my reservation?",
    answer:
      "Yes, you can modify or cancel your booking through your account dashboard or by contacting our support team. Please note that cancellation policies may vary by hotel and room type.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you cancel your booking within the free cancellation period, you’ll receive a full refund. Refunds are processed within 5–7 business days to your original payment method.",
  },
  {
    question: "Do I need to pay at the time of booking?",
    answer:
      "Some hotels require prepayment, while others allow you to pay during check-in. The payment requirement is clearly mentioned before confirming your booking.",
  },
  {
    question: "Are taxes and service fees included in the price?",
    answer:
      "Yes, all applicable taxes and service fees are displayed in the final price before you complete your booking. No hidden charges apply.",
  },
  {
    question: "What time is check-in and check-out?",
    answer:
      "Standard check-in time is from 2:00 PM and check-out is by 12:00 PM. However, early check-in or late check-out may be available on request, depending on room availability.",
  },
  {
    question: "Can I book a hotel for someone else?",
    answer:
      "Yes, you can book a room on behalf of someone else. Please make sure the guest’s name is correctly entered during the booking process.",
  },
  {
    question: "Is breakfast included with my booking?",
    answer:
      "This depends on the room type and rate plan you select. Rooms with breakfast included are clearly marked during booking.",
  },
  {
    question: "Do you offer group bookings or corporate rates?",
    answer:
      "Yes, we offer special rates and packages for group or corporate bookings. Please contact our support team for customized offers.",
  },
  {
    question: "Do you have a loyalty or rewards program?",
    answer:
      "Yes, members of our loyalty program earn reward points on every booking. These points can be redeemed for future stays or discounts.",
  },
];

const FAQ = () => {
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
};

export default FAQ;
