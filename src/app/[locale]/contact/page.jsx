"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "@/i18n";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  // Get locale from URL params
  const params = useParams();
  const locale = params?.locale || "en";

  // Initialize translations
  const { t } = useTranslation(locale);

  // Hero data
  const heroData = {
    title: t("contact.hero.title"),
    subtitle: t("contact.hero.subtitle"),
    whatsappButton: t("contact.hero.whatsappButton"),
    messageButton: t("contact.hero.messageButton"),
    whatsappNumber: "+2250123456789",
    whatsappMessage: t("contact.hero.whatsappMessage"),
  };

  // Form data
  const formData = {
    title: t("contact.form.title"),
    subtitle: t("contact.form.subtitle"),
    labels: {
      fullName: t("contact.form.fullName"),
      fullNamePlaceholder: t("contact.form.fullNamePlaceholder"),
      email: t("contact.form.email"),
      emailPlaceholder: t("contact.form.emailPlaceholder"),
      phone: t("contact.form.phone"),
      phonePlaceholder: t("contact.form.phonePlaceholder"),
      subject: t("contact.form.subject"),
      subjectPlaceholder: t("contact.form.subjectPlaceholder"),
      message: t("contact.form.message"),
      messagePlaceholder: t("contact.form.messagePlaceholder"),
    },
    privacyNote: t("contact.form.privacyNote"),
    submitButton: t("contact.form.submitButton"),
  };

  // Contact Info data
  const infoData = {
    title: t("contact.info.title"),
    subtitle: t("contact.info.subtitle"),
    contactDetails: [
      {
        icon: "location_on",
        title: t("contact.info.officeTitle"),
        content: t("contact.info.officeAddress"),
      },
      {
        icon: "call",
        title: t("contact.info.phoneTitle"),
        content: t("contact.info.phoneNumber"),
      },
      {
        icon: "mail",
        title: t("contact.info.emailTitle"),
        content: t("contact.info.emailAddress"),
      },
      {
        icon: "schedule",
        title: t("contact.info.hoursTitle"),
        content: t("contact.info.hoursContent"),
      },
    ],
    mapTitle: t("contact.info.mapTitle"),
  };

  // FAQ data
  const faqData = {
    title: t("contact.faq.title"),
    subtitle: t("contact.faq.subtitle"),
    faqs: [
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
    ],
  };

  // CTA data
  const ctaData = {
    title: t("contact.cta.title"),
    subtitle: t("contact.cta.subtitle"),
    primaryButton: t("contact.cta.primaryButton"),
    secondaryButton: t("contact.cta.secondaryButton"),
  };

  return (
    <main className="flex flex-col items-center bg-background-light dark:bg-navy-light">
      {/* Main Content Container - Max Width */}
      <div className="w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8 lg:space-y-16">
        {/* Hero Section */}
        <ContactHero {...heroData} />

        
          {/* Contact Form Section */}
          <ContactForm {...formData} />

          {/* Contact Info & Map Section */}
          <ContactInfo {...infoData} />

          {/* FAQ Section */}
          <ContactFAQ {...faqData} />

          {/* CTA Section */}
          <ContactCTA {...ctaData} />
      
      </div>
    </main>
  );
}
