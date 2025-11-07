import CookieMainContent from "@/components/cookie_policy/CookieMainContent";

const cookie = {
  policy_title: "Cookie Policy",
  last_updated: "October 26, 2023",
  introduction:
    "This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, the information we collect using cookies, how that information is used, and how to control your cookie preferences. For further information on how we use, store, and keep your personal data secure, see our Privacy Policy.",
  table_of_contents: [
    "What are Cookies?",
    "How We Use Cookies",
    "Types of Cookies We Use",
    "Third-Party Cookies",
    "Your Choices Regarding Cookies",
    "Changes to Our Cookie Policy",
    "Contact Us",
  ],
  sections: [
    {
      heading: "What are Cookies?",
      content:
        "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information about use of the site. Cookies help us to remember your preferences and to understand how you use our website, which allows us to improve your experience.",
    },
    {
      heading: "How We Use Cookies",
      content:
        "We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.",
    },
    {
      heading: "Types of Cookies We Use",
      subsections: [
        {
          type: "Essential Cookies",
          purpose:
            "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.",
        },
        {
          type: "Performance & Analytics Cookies",
          purpose:
            "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.",
        },
        {
          type: "Functionality Cookies",
          purpose:
            "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
        },
        {
          type: "Targeting & Advertising Cookies",
          purpose:
            "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.",
        },
      ],
    },
    {
      heading: "Third-Party Cookies",
      content:
        "In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site. For example, this site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience.",
    },
    {
      heading: "Your Choices Regarding Cookies",
      content:
        "You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager or by opting out of certain types of web tracking technologies, such as certain cookies. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should use your browser's help menu for more information.",
    },
    {
      heading: "Changes to Our Cookie Policy",
      content:
        "We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please ensure you revisit the Cookie Policy regularly to stay informed about our use of cookies and related technologies.",
    },
    {
      heading: "Contact Us",
      content:
        "If you have any questions about our use of cookies or other technologies, please email us at support@chances.com.",
      email: "support@chances.com",
    },
  ],
};

export default function CookiePolicy() {
  return (
    <>
      <CookieMainContent cookie={cookie} />
    </>
  );
}
