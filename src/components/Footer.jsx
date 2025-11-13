import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "@/i18n";

export default function Footer({ locale }) {
  const { t } = useTranslation(locale);

  const footerLinks = {
    quick: [
      { href: `/${locale}/about`, label: t("footer.aboutUs") },
      { href: `/${locale}/contact#faq`, label: t("footer.faq") },
      { href: `/${locale}/contact`, label: t("footer.contactUs") },
      { href: `/${locale}/blog`, label: t("footer.blog") },
    ],
    legal: [
      {
        href: `/${locale}/partner-directory`,
        label: t("Partner Directory"),
        key: "partner",
      },
      {
        href: `/${locale}/concierge-service`,
        label: t("Concierge Service"),
        key: "concierge",
      },
      {
        href: `/${locale}/cookie-policy`,
        label: t("Cookie Policy"),
        key: "cookie",
      },
      {
        href: `/${locale}/legal-center`,
        label: t("Legal Center"),
        key: "legal",
      },
    ],
    // legal: [
    //   {
    //     href: `/${locale}/cookie-preferences`,
    //     label: t("Cookie Preferences"),
    //     key: "preferences",
    //   },
    //   {
    //     href: `/${locale}/cookie-consent`,
    //     label: t("Cookie Consent"),
    //     key: "consent",
    //   },
    //   {
    //     href: `/${locale}/accessibility`,
    //     label: t("Accessibility"),
    //     key: "accessibility",
    //   },
    // ],
    // legal: [
    //   {
    //     href: `/${locale}/privacy-policy`,
    //     label: t("footer.privacyPolicy"),
    //     key: "privacy",
    //   },
    //   {
    //     href: `/${locale}/terms-conditions`,
    //     label: t("footer.termsOfService"),
    //     key: "terms",
    //   },
    //   {
    //     href: `/${locale}/cookie-policy`,
    //     label: t("footer.CookiePolicy"),
    //     key: "cookie",
    //   },
    // ],
  };

  return (
    <footer className="bg-charcoal py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.quick.map((link, index) => (
                <li key={`quick-${index}`}>
                  <Link
                    className="text-sm text-white/80 hover:text-white hover:underline transition-colors inline-block"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-sm text-white/80 hover:text-white hover:underline transition-colors inline-block"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@qgloballiving.com"
                  className="text-sm text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  support@qgloballiving.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2250123456789"
                  className="text-sm text-white/80 hover:text-white hover:underline transition-colors inline-block"
                >
                  +225 01 23 45 67 89 (Sample)
                </a>
              </li>
              <li className="text-sm text-white/80">
                Abidjan, Côte d&apos;Ivoire
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t("footer.followUs")}
            </h3>
            <div className="flex gap-4">
              <a
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 hover:bg-primary hover:text-white transition-all hover:scale-110"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 hover:bg-primary hover:text-white transition-all hover:scale-110"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white/80 hover:bg-primary hover:text-white transition-all hover:scale-110"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* (platform note moved into bottom bar for visual hierarchy) */}

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="md:w-1/2 text-center sm:text-left">
              <p className="text-sm text-white/80 mb-2">A platform by The Quiah Group.</p>
              <p className="text-sm text-white/70">© {new Date().getFullYear()} Q Global Living. All rights reserved.</p>
            </div>
            {/* <div className="flex gap-6">
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href={`/${locale}/terms-conditions`}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div> */}
            <div className="flex gap-6">
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {t("Privacy Policy")}
              </Link>
              <Link
                href={`/${locale}/terms-conditions`}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {t("Terms of Service")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
