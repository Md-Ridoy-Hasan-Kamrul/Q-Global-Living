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
import React, { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-10 sm:py-16">
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

        {/* Accordion */}
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-4 sm:p-6 shadow-sm dark:bg-navy-light transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between cursor-pointer"
              >
                <h3 className="text-base sm:text-lg font-semibold text-navy dark:text-[#FFFFF0] text-left">
                  {faq.question}
                </h3>
                <span
                  className={`material-symbols-outlined text-[#D4AF37] transform transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Animated Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm sm:text-base text-navy/70 dark:text-[#FFFFF0]/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ContactFAQ.displayName = "ContactFAQ";
export default ContactFAQ;
