import AccessibilityStatement from "@/components/accessibility/AccessibilityStatement";
import React from "react";

const accessibility = {
  pageTitle: "Accessibility Statement",
  pageDescription:
    "Q Homes is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.",
  tableOfContents: [
    {
      id: "commitment",
      title: "Our Commitment",
    },
    {
      id: "standards",
      title: "Accessibility Standards",
    },
    {
      id: "feedback",
      title: "Feedback and Contact",
    },
    {
      id: "technical",
      title: "Technical Specifications",
    },
  ],
  sections: [
    {
      id: "commitment",
      title: "Our Commitment",
      content:
        "At Q Homes, we are dedicated to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We actively work to increase the accessibility and usability of our website and in doing so, adhere to many of the available standards and guidelines.",
    },
    {
      id: "standards",
      title: "Accessibility Standards",
      content:
        "This website endeavors to conform to level Double-A of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web content more accessible for people with disabilities. Conformance with these guidelines will help make the web more user-friendly for all people.",
    },
    {
      id: "feedback",
      title: "Feedback and Contact Information",
      mainText:
        "We welcome your feedback on the accessibility of Q Homes. If you have experienced any accessibility barriers while using any part of our website, please let us know:",
      contactMethods: [
        {
          type: "Email",
          value: "accessibility@qglobaliving.com",
          link: "mailto:accessibility@qglobaliving.com",
        },
        {
          type: "Phone",
          value: "+225 01 23 45 67 89",
        },
        {
          type: "Contact Form",
          value: "Visit our contact page",
          link: "#",
        },
      ],
      followUpText: "We try to respond to feedback within 5 business days.",
    },
    {
      id: "technical",
      title: "Technical Specifications",
      mainText:
        "Accessibility of Q Homes relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:",
      technologies: ["HTML", "WAI-ARIA", "CSS", "JavaScript"],
      followUpText:
        "These technologies are relied upon for conformance with the accessibility standards used.",
    },
  ],
};

export default function Accessibility() {
  return (
    <>
      <AccessibilityStatement accessibility={accessibility} />
    </>
  );
}
