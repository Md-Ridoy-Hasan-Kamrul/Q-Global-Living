// "use client";

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import LanguageSwitcher from "./LanguageSwitcher";
// import { getTranslation } from "@/i18n";

// export default function Header({ locale }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const translations = getTranslation(locale);
//   const t = (key) => {
//     const keys = key.split(".");
//     let value = translations;
//     for (const k of keys) {
//       value = value?.[k];
//     }
//     return value || key;
//   };

//   const navLinks = [
//     { href: `/${locale}/buy`, label: t("nav.buy") },
//     { href: `/${locale}/rent`, label: t("nav.rent") },
//     {
//       href: `/${locale}/properties/residential`,
//       label: t("nav.newDevelopments"),
//     },
//     { href: `/${locale}/about`, label: t("nav.about") },
//     { href: `/${locale}/contact`, label: t("nav.contact") },
//     { href: `/${locale}/blog`, label: t("nav.blog") },
//   ];

//   // Close mobile menu on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && mobileMenuOpen) {
//         setMobileMenuOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [mobileMenuOpen]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [mobileMenuOpen]);

//   return (
//     <header className="sticky top-0 z-50 border-b border-solid border-primary/20 bg-background-light/95 backdrop-blur-md dark:bg-background-dark/95 shadow-sm">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <Link
//           href={`/${locale}`}
//           className="flex items-center gap-2 sm:gap-3 shrink-0"
//           onClick={() => setMobileMenuOpen(false)}
//         >
//           <div className="size-7 sm:size-8 text-primary shrink-0">
//             <svg fill="none" viewBox="0 0 48 48" aria-hidden="true">
//               <path
//                 d="M44 11.27C44 14.01 39.84 16.4 33.69 17.64C39.84 18.88 44 21.26 44 24C44 26.74 39.84 29.12 33.69 30.36C39.84 31.6 44 33.99 44 36.73C44 40.74 35.05 44 24 44C12.95 44 4 40.74 4 36.73C4 33.99 8.16 31.6 14.31 30.36C8.16 29.12 4 26.74 4 24C4 21.26 8.16 18.88 14.31 17.64C8.16 16.4 4 14.01 4 11.27C4 7.26 12.95 4 24 4C35.05 4 44 7.26 44 11.27Z"
//                 fill="currentColor"
//               />
//             </svg>
//           </div>
//           <h2 className="text-lg sm:text-xl font-bold tracking-tight text-charcoal dark:text-white whitespace-nowrap">
//             Q HOMES
//           </h2>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6 lg:gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               className="text-sm font-medium text-charcoal dark:text-soft-grey hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
//               href={link.href}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop Actions */}
//         <div className="hidden md:flex items-center gap-3">
//           <Link
//             href={`/${locale}/login`}
//             className="flex items-center justify-center h-10 px-4 rounded-lg border border-primary text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white whitespace-nowrap"
//           >
//             Sign In
//           </Link>
//           <Link
//             href={`/${locale}/sell`}
//             className="flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md whitespace-nowrap"
//           >
//             {t("nav.listYourProperty")}
//           </Link>
//           <LanguageSwitcher currentLocale={locale} />
//         </div>

//         {/* Mobile Actions */}
//         <div className="flex md:hidden items-center gap-2">
//           <LanguageSwitcher currentLocale={locale} />
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="flex items-center justify-center w-10 h-10 rounded-lg text-charcoal dark:text-soft-grey hover:bg-primary/10 transition-colors"
//             aria-label="Toggle menu"
//             aria-expanded={mobileMenuOpen}
//           >
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div
//           className="md:hidden fixed inset-x-0 bg-background-light dark:bg-background-dark z-40 overflow-y-auto border-b border-primary/20 shadow-lg"
//           style={{ top: "61px", maxHeight: "calc(100vh - 61px)" }}
//         >
//           <nav className="flex flex-col px-4 py-6 space-y-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="px-4 py-3 text-base font-medium text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <div className="pt-4 border-t border-primary/20 space-y-3">
//               <Link
//                 href={`/${locale}/login`}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="flex items-center justify-center w-full h-12 px-4 rounded-lg border border-primary text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
//               >
//                 Sign In
//               </Link>
//               <Link
//                 href={`/${locale}/sell`}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="flex items-center justify-center w-full h-12 px-4 rounded-lg bg-primary text-base font-semibold text-white hover:bg-primary/90 transition-colors"
//               >
//                 {t("nav.listYourProperty")}
//               </Link>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslation } from "@/i18n";

export default function Header({ locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const translations = getTranslation(locale);
  const t = (key) => {
    const keys = key.split(".");
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const navLinks = [
    { href: `/${locale}/buy`, label: t("nav.buy") },
    { href: `/${locale}/rent`, label: t("nav.rent") },
    {
      href: `/${locale}/properties/residential`,
      label: t("nav.newDevelopments"),
    },
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
    { href: `/${locale}/blog`, label: t("nav.blog") },
  ];

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-solid border-primary/20 bg-background-light/95 backdrop-blur-md dark:bg-background-dark/95 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 sm:gap-3 shrink-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="size-7 sm:size-8 text-primary shrink-0">
            <svg fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path
                d="M44 11.27C44 14.01 39.84 16.4 33.69 17.64C39.84 18.88 44 21.26 44 24C44 26.74 39.84 29.12 33.69 30.36C39.84 31.6 44 33.99 44 36.73C44 40.74 35.05 44 24 44C12.95 44 4 40.74 4 36.73C4 33.99 8.16 31.6 14.31 30.36C8.16 29.12 4 26.74 4 24C4 21.26 8.16 18.88 14.31 17.64C8.16 16.4 4 14.01 4 11.27C4 7.26 12.95 4 24 4C35.05 4 44 7.26 44 11.27Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-charcoal dark:text-white whitespace-nowrap">
            Q HOMES
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 relative">
          {navLinks.map((link) => {
            if (link.label === t("nav.blog")) {
              return (
                <div key={link.href} className="relative group">
                  <Link
                    className="text-sm font-medium text-charcoal dark:text-soft-grey hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-56 bg-background-light dark:bg-background-dark rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-50">
                    <Link
                      href={`/${locale}/blog/slug/blog-search`}
                      className="block px-4 py-2 text-sm text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg"
                    >
                      Blog Search
                    </Link>
                    <Link
                      href={`/${locale}/blog/slug/blog-post`}
                      className="block px-4 py-2 text-sm text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg"
                    >
                      Blog Post
                    </Link>
                    <Link
                      href={`/${locale}/blog/slug/event-registration`}
                      className="block px-4 py-2 text-sm text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg"
                    >
                      Event Registration
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                className="text-sm font-medium text-charcoal dark:text-soft-grey hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={`/${locale}/login`}
            className="flex items-center justify-center h-10 px-4 rounded-lg border border-primary text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white whitespace-nowrap"
          >
            Sign In
          </Link>
          <Link
            href={`/${locale}/sell`}
            className="flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-md whitespace-nowrap"
          >
            {t("nav.listYourProperty")}
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher currentLocale={locale} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-charcoal dark:text-soft-grey hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 bg-background-light dark:bg-background-dark z-40 overflow-y-auto border-b border-primary/20 shadow-lg"
          style={{ top: "61px", maxHeight: "calc(100vh - 61px)" }}
        >
          <nav className="flex flex-col px-4 py-6 space-y-1">
            {navLinks.map((link) => {
              if (link.label === t("nav.blog")) {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                      className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                    >
                      {t("nav.blog")}
                      <span className="ml-2">
                        {blogDropdownOpen ? "▲" : "▼"}
                      </span>
                    </button>
                    {blogDropdownOpen && (
                      <div className="pl-4 mt-1 space-y-1">
                        <Link
                          href={`/${locale}/blog/slug/blog-search`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-base text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg"
                        >
                          Blog Search
                        </Link>
                        <Link
                          href={`/${locale}/blog/slug/blog-post`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-base text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg"
                        >
                          Blog Post
                        </Link>
                        <Link
                          href={`/${locale}/blog/slug/event-registration`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-base text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg"
                        >
                          Event Registration
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-charcoal dark:text-soft-grey hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Sign In / List Your Property */}
            <div className="pt-4 border-t border-primary/20 space-y-3">
              <Link
                href={`/${locale}/login`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full h-12 px-4 rounded-lg border border-primary text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href={`/${locale}/sell`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full h-12 px-4 rounded-lg bg-primary text-base font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                {t("nav.listYourProperty")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
