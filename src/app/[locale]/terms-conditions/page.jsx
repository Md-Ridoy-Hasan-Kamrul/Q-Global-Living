"use client";
import MainContent from "@/components/terms_conditions/MainContent";
import TermsSidebar from "@/components/terms_conditions/TermsSidebar";
import React from "react";

const terms = [
  {
    id: 1,
    title: "1. Introduction",
    description:
      "These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Q Homes accessible at qhomes.ci. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.",
    short_Description: "",
  },
  {
    id: 2,
    title: "2. User Obligations & Conduct",
    description:
      "You are granted a limited license only for purposes of viewing the material contained on this Website. You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website.",
    short_Description: "",
  },
  {
    id: 3,
    title: "3. Intellectual Property Rights",
    description:
      "Other than the content you own, under these Terms, Q Homes and/or its licensors own all the intellectual property rights and materials contained in this Website. This includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.",
    short_Description: "",
  },
  {
    id: 4,
    title: "4. Disclaimer",
    description:
      "The information provided by Q Homes on qhomes.ci is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.",
    short_Description:
      "The platform includes property listings and information provided by third-party agents, developers, and owners. Q Homes is not responsible for any inaccuracies, errors, or omissions in such third-party listings. The content is provided on an as-is and as available basis. Users are strongly advised to conduct their own due diligence and verify all information independently before entering into any agreements or transactions. Your use of the site and your reliance on any information on the site is solely at your own risk.",
  },
  {
    id: 5,
    title: "5. Limitation of Liability",
    description:
      "In no event shall Q Homes, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Q Homes, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.",
    short_Description: "",
  },
  {
    id: 6,
    title: "6. Governing Law & Jurisdiction",
    description:
      "These Terms will be governed by and interpreted in accordance with the laws of Côte d’Ivoire, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Côte d’Ivoire for the resolution of any disputes.",
    short_Description: "",
  },
  {
    id: 7,
    title: "7. Changes to Terms",
    description:
      "Q Homes is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis. We will notify you of any changes by posting the new Terms and Conditions on this page.",
    short_Description: "",
  },
  {
    id: 8,
    title: "8. Contact Information",
    description:
      "If you have any queries regarding any of our terms, please contact us. You can reach us via our Contact Page.",
    contact: "Contact Page.",
    short_Description: "",
  },
];

const items = [
  { id: "introduction", label: "1. Introduction" },
  { id: "user-obligations", label: "2. User Obligations & Conduct" },
  { id: "intellectual-property", label: "3. Intellectual Property Rights" },
  { id: "disclaimer", label: "4. Disclaimer" },
  { id: "limitation-liability", label: "5. Limitation of Liability" },
  { id: "changes-terms", label: "7. Changes to Terms" },
  { id: "contact-information", label: "8. Contact Information" },
];

export default function TermsCondition() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:flex lg:gap-10">
        <TermsSidebar items={items} />
        <MainContent items={items} terms={terms} />
      </div>
    </main>
  );
}
