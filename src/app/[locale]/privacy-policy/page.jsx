"use client";
import MainContent from "@/components/privacy_policy/MainContent";
import PrivacySidebar from "@/components/privacy_policy/PrivacySidebar";
import React from "react";

const privacy = [
  {
    id: 1,
    title: "Information We Collect",
    description:
      "We collect information to provide and improve our services. This includes personal information you provide when you create an account, such as your name, email address, and phone number. We also collect information about your property searches, saved listings, and interactions with our platform.",
    short_Description:
      "Additionally, we automatically collect technical data, including your IP address, browser type, and device information, to ensure our platform functions correctly and to enhance security.",
  },
  {
    id: 2,
    title: "How We Use Your Information",
    description:
      "Your information is used to personalize your experience, connect you with real estate professionals, and provide you with relevant property listings. We may also use your data for internal analytics, to improve our platform's functionality, and to communicate with you about your account and our services.",
    short_Description: "",
  },
  {
    id: 3,
    title: "How We Share Your Information",
    description:
      "We may share your information with trusted third-party service providers who assist us in operating our platform, such as hosting services and analytics providers. We may also share your contact details with real estate agents when you express interest in a property. We do not sell your personal information to third parties.",
    short_Description: "",
  },
  {
    id: 4,
    title: "Your Privacy Rights",
    description:
      "You have the right to access, update, or delete your personal information at any time through your account settings. You can also opt-out of receiving marketing communications from us by following the unsubscribe link in our emails.",
    short_Description: "",
  },
  {
    id: 5,
    title: "Cookies and Tracking Technologies",
    description:
      "We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze platform traffic. You can control cookie settings through your browser, but disabling them may affect the functionality of our services.",
    short_Description: "",
  },
  {
    id: 6,
    title: "Data Security",
    description:
      "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.",
    short_Description: "",
  },
  {
    id: 7,
    title: "Third-Party Links",
    description:
      "Our platform may contain links to other websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to read their privacy policies before providing any personal information.",
    short_Description: "",
  },
  {
    id: 8,
    title: "Changes to Our Privacy Policy",
    description:
      "We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated Last Updated date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
    short_Description: "",
  },
  {
    id: 9,
    title: "Contact Us",
    description:
      "If you have any questions or concerns about this Privacy Policy, please contact us at",
    email: "privacy@qhomes.com.",
    short_Description: "",
  },
];

const items = [
  { id: "info-collect", label: "Information We Collect" },
  { id: "info-use", label: "How We Use Your Information" },
  { id: "info-share", label: "How We Share Your Information" },
  { id: "privacy-rights", label: "Your Privacy Rights" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "data-security", label: "Data Security" },
  { id: "third-party", label: "Third-Party Links" },
  { id: "changes", label: "Changes to Our Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:flex lg:gap-10">
        <PrivacySidebar items={items} />
        <MainContent items={items} privacy={privacy} />
      </div>
    </main>
  );
}
