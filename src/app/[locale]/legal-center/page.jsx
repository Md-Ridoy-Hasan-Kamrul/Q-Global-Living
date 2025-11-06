import React from "react";
import LegalCenterComponents from "@/components/legal_center/LegalCenterComponents";

const legalDocuments = [
  {
    title: "Terms & Conditions",
    description:
      "Outlines the rules and guidelines for using our services and platform.",
    iconName: "description",
    href: "/legal/terms",
  },
  {
    title: "Privacy Policy",
    description: "Details how we collect, use, and protect your personal data.",
    iconName: "shield_lock",
    href: "/legal/privacy",
  },
  {
    title: "Cookie Policy",
    description:
      "Explains how we use cookies to enhance your browsing experience.",
    iconName: "cookie",
    href: "/legal/cookies",
  },
  {
    title: "Accessibility Statement",
    description:
      "Our commitment to ensuring our platform is usable by everyone.",
    iconName: "accessibility_new",
    href: "/legal/accessibility",
  },
  {
    title: "Legal Disclaimer",
    description:
      "Important information about limitations of liability and platform use.",
    iconName: "gavel",
    href: "/legal/disclaimer",
  },
];

export default function LegalCenter() {
  return (
    <>
      <LegalCenterComponents legalDocuments={legalDocuments} />
    </>
  );
}
