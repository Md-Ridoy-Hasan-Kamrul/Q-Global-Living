"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Next.js and why should I use it?",
    answer:
      "Next.js is a powerful React framework that provides server-side rendering, static site generation, and API routes out of the box. It helps you build fast, SEO-friendly websites with an excellent developer experience. With features like automatic code splitting and optimized performance, Next.js is perfect for production-ready applications.",
  },
  {
    question: "How does routing work in Next.js?",
    answer:
      "Next.js uses a file-based routing system. Simply create files in the 'pages' or 'app' directory, and routes are automatically generated. For example, creating 'pages/about.js' gives you an '/about' route. For dynamic routes, use bracket notation like '[id].js'. The App Router also supports nested layouts and parallel routes.",
  },
  {
    question: "What's the difference between SSR and SSG?",
    answer:
      "SSR (Server-Side Rendering) generates pages on each request, ideal for dynamic content that changes frequently. SSG (Static Site Generation) pre-renders pages at build time, resulting in blazing-fast load times perfect for static content. Next.js supports both strategies, and you can choose which to use on a per-page basis for optimal performance.",
  },
  {
    question: "How do I deploy my Next.js project?",
    answer:
      "The easiest way to deploy Next.js is using Vercel (created by Next.js makers), which offers seamless integration and automatic deployments. You can also deploy to Netlify, AWS, DigitalOcean, or any Node.js hosting platform. Simply run 'npm run build' to create an optimized production build, then 'npm start' to run it.",
  },
  {
    question: "How do I create API routes in Next.js?",
    answer:
      "Next.js has built-in API route support. Any file created in the 'pages/api' directory becomes an API endpoint. For example, 'pages/api/users.js' creates a '/api/users' endpoint. These work as serverless functions and are perfect for handling backend logic, database operations, and third-party API integrations without needing a separate server.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-2xl mb-4 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-400">
            Everything you need to know about Next.js
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-200 hover:border-accent"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset transition-colors hover:bg-gray-750"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
