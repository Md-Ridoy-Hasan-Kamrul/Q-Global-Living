"use client";

import { useParams } from "next/navigation";
import Head from "next/head";
import { useTranslation } from "@/i18n";
import {
  AboutHero,
  MissionVision,
  WhyChooseUs,
  TeamSection,
  AboutCTA,
} from "@/components/about";
import { CheckCircle, Briefcase, Shield, Globe } from "lucide-react";

/**
 * AboutPage Component
 * Main About page showcasing company mission, values, team, and CTA
 * Implements production-grade practices: SEO, i18n, performance optimization, accessibility
 */
export default function AboutPage() {
  // Get locale from URL params
  const params = useParams();
  const locale = params?.locale || "en";

  // Initialize translations
  const { t } = useTranslation(locale);

  // SEO metadata
  const metaTitle = t("about.meta.title") || "About Us - Q Homes";
  const metaDescription =
    t("about.meta.description") || "Learn about Q Homes mission and team";

  // Hero data
  const heroData = {
    title: t("about.hero.title"),
    subtitle: t("about.hero.subtitle"),
  };

  // Mission & Vision data
  const missionData = {
    title: t("about.mission.title"),
    description: t("about.mission.description"),
  };

  // Why Choose Us data
  const whyChooseData = {
    title: t("about.whyChoose.title"),
    subtitle: t("about.whyChoose.subtitle"),
    features: [
      {
        icon: "verified_user",
        title: t("about.whyChoose.features.verifiedListings.title"),
        description: t("about.whyChoose.features.verifiedListings.description"),
      },
      {
        icon: "lock",
        title: t("about.whyChoose.features.escrowProtection.title"),
        description: t("about.whyChoose.features.escrowProtection.description"),
      },
      {
        icon: "support_agent",
        title: t("about.whyChoose.features.conciergeService.title"),
        description: t("about.whyChoose.features.conciergeService.description"),
      },
      {
        icon: "language",
        title: t("about.whyChoose.features.multilingualSupport.title"),
        description: t(
          "about.whyChoose.features.multilingualSupport.description"
        ),
      },
    ],
  };

  // Team data
  const teamData = {
    title: t("about.team.title"),
    subtitle: t("about.team.subtitle"),
    team: [
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCmGJedAtrX4qVqCyyJXXBUWPdBuh0_VsIHUysr-1xFr-QEsEEbnB8lYyhhLR8SJjIUPmXCmRFbLMMe1jvvOJu2FAfigb5bJ1mMowxlzpQOYUmNfCJ_y4nhn7Q_dCemgS5o6TKUoAzSAQa5BDzOd6iD7fRcksZL6oE1vk0hAPxa-i4AJsBxaASKpSvCLbf8Afj2HxrA5rEgNy1FggA6QRgMsGtg7-jGYGJW2PD-bRvrLgcYjb5PoPnt_MLEROKrE5iECTr8SaxqlPo",
        name: t("about.team.members.jeanClaude.name"),
        role: t("about.team.members.jeanClaude.role"),
        bio: t("about.team.members.jeanClaude.bio"),
        alt: "Professional headshot of Jean-Claude Koffi",
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCZnk4FoHLtSehWhaaGzvAqDXN6CRzDiR9MWmI28j1aeEAXm2_-x3EzAalgsZVg21DXCzmzC-eNYCrGYfAuz5LOkvlhuPquwUgGy2F6k2E4dOXYsd7OezNj0yILGPBuXcZ6wHucxNLlDG9bLaD0y_3GLsQIHM4_5p3kNTuHYkGoBK0ROFBo61JISmkqTdQRYxbcvS4s459medvUeV2XWLzaEKlmgYOqxHtwmXqqc2sozR-CcGT5vbp-halKI3xigqkkoMHByZH_QTc",
        name: t("about.team.members.aissata.name"),
        role: t("about.team.members.aissata.role"),
        bio: t("about.team.members.aissata.bio"),
        alt: "Professional headshot of Aïssata Diop",
      },
      {
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDje7QnPiRj3g5Z6ANYIKuuEMk5YkXYEaWs8Xg8fDJpfkb5MTYQfMloVr7cUnB9sgxVVv-Qy7pko4eePuN0-JXnaWbHYCy8a09UiR76azwDIUg9hDwozSfJole7C0qTalcxwUV3Xi7gYOVSbTXvS3hVciYWyJQlYH6fcPIntSSbmDEzvkatFwaOZQV3GhaNpCA37D-YkgbPQnEhSXMXF4dWXFpwZ-DVe00OEPzZ7Tpz_BYua3q44Ayr1tJ98T0Ymsia42QC---U7m4",
        name: t("about.team.members.moussa.name"),
        role: t("about.team.members.moussa.role"),
        bio: t("about.team.members.moussa.bio"),
        alt: "Professional headshot of Moussa Traoré",
      },
    ],
  };

  // CTA data
  const ctaData = {
    title: t("about.cta.title"),
    subtitle: t("about.cta.subtitle"),
    primaryButtonText: t("about.cta.primaryButton"),
    primaryButtonHref: `/${locale}/buy`,
    secondaryButtonText: t("about.cta.secondaryButton"),
    secondaryButtonHref: `/${locale}/contact`,
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="Q Homes, Côte d'Ivoire real estate, about us, mission, vision, team"
        />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://qhomes.ci/${locale}/about`} />
      </Head>

      <main className="flex flex-col items-center bg-[#FFFFF0] dark:bg-navy-light">
        <div className="w-full max-w-7xl px-4 pt-8 pb-2 sm:px-6 lg:px-8">
          {/*
            Previous About page composition (kept for reference - do not remove):

            <AboutHero {...heroData} />
            <MissionVision {...missionData} />
            <WhyChooseUs {...whyChooseData} />
            <TeamSection {...teamData} />
            <AboutCTA {...ctaData} />

            The client requested the above blocks be preserved as comments so we can revert
            quickly if needed. The new production-ready section below replaces the visible
            content while keeping the original implementation commented for safekeeping.
          */}

          {/* New production-ready About layout
              - Uses the existing AboutHero component for a strong LCP-friendly hero
              - Two-column responsive layout beneath the hero
              - Primary CTAs wired to canonical routes
              - Previous component composition kept above as comments for rollback
          */}

          {/* Render hero (keeps hero image + overlay from AboutHero component) */}
          <AboutHero
            title={heroData.title}
            subtitle={heroData.subtitle || "Tech-enabled, trusted property marketplace for Africa."}
          />

          {/* Main content beneath hero */}
          <section className="mx-auto w-full max-w-7xl py-4 md:py-8 ">
            <div className="mx-auto">
              {/* Left: primary narrative */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-3xl lg:text-4xl">
                    {t("about.overview.title")}
                  </h2>

                  <article className="mt-4 space-y-2">
                    <p className="text-base md:text-lg leading-relaxed text-black dark:text-white/90">
                      {t("about.overview.p1")}
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black dark:text-white/90">
                      {t("about.overview.p2")}
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-black dark:text-white/90">
                      {t("about.overview.p3")}
                    </p>
                  {/* 
                  <div className='grid gap-4 sm:grid-cols-2'>
                    <div className='flex items-start gap-3'>
                      <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                        <CheckCircle className='h-5 w-5' aria-hidden='true' />
                      </span>
                      <div>
                        <h3 className='text-sm font-semibold text-charcoal dark:text-white'>Verified Listings</h3>
                        <p className='mt-1 text-sm text-charcoal/80 dark:text-white/80'>Every listing goes through our digital & physical verification process.</p>
                      </div>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                        <Shield className='h-5 w-5' aria-hidden='true' />
                      </span>
                      <div>
                        <h3 className='text-sm font-semibold text-charcoal dark:text-white'>Escrow Protection</h3>
                        <p className='mt-1 text-sm text-charcoal/80 dark:text-white/80'>Secure payment flows with partner banks to protect buyers and developers.</p>
                      </div>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                        <Globe className='h-5 w-5' aria-hidden='true' />
                      </span>
                      <div>
                        <h3 className='text-sm font-semibold text-charcoal dark:text-white'>Multilingual Support</h3>
                        <p className='mt-1 text-sm text-charcoal/80 dark:text-white/80'>Local languages and diaspora-focused services for easy cross-border transactions.</p>
                      </div>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                        <Briefcase className='h-5 w-5' aria-hidden='true' />
                      </span>
                      <div>
                        <h3 className='text-sm font-semibold text-charcoal dark:text-white'>Concierge Services</h3>
                        <p className='mt-1 text-sm text-charcoal/80 dark:text-white/80'>Relocation, inspection and lifestyle support to simplify moves and investments.</p>
                      </div>
                    </div>
                  </div>

                  <div className='mt-6 flex flex-wrap gap-3'>
                    <a
                      href={`/${locale}/explore`}
                      className='inline-flex items-center justify-center h-12 px-6 rounded-lg bg-gradient-to-r from-primary to-primary/90 text-white font-semibold shadow-lg hover:from-primary/95 focus:outline-none focus:ring-2 focus:ring-primary transition'
                      aria-label='Explore Verified Properties'
                    >
                      Explore Verified Properties
                    </a>

                    <a
                      href={`/${locale}/concierge-form`}
                      className='inline-flex items-center justify-center h-12 px-6 rounded-lg border border-primary text-primary font-semibold bg-white/0 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary transition'
                      aria-label='Talk to a Concierge'
                    >
                      Talk to a Concierge
                    </a>
                  </div>

                  <p className='mt-4 text-sm text-charcoal/70 dark:text-white/70'>
                    Need help with a specific property? Use the “Book Viewing” button on any listing or contact our concierge for a tailored experience.
                  </p> */}
                </article>
              </div>

              {/* Two stacked cards: Ecosystem and Values */}
              <div className="mt-4 md:mt-10 space-y-6">
                <div className="rounded-xl border border-solid border-primary/6 bg-white/50 dark:bg-background-dark p-6 shadow-md">
                  <h3 className="text-xl md:text-xl lg:text-2xl font-semibold text-black dark:text-white mb-3">
                    {t("about.ecosystem.title")}
                  </h3>
                  <ul className="list-inside list-disc space-x-1 md:space-y-2 text-base md:text-lg text-black dark:text-white/80 ml-2 md:ml-4">
                    <li>{t("about.ecosystem.qhomes")}</li>
                    <li>{t("about.ecosystem.concierge")}</li>
                    <li>{t("about.ecosystem.developments")}</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-solid border-primary/6 bg-white/50 dark:bg-background-dark p-6 shadow-md">
                  <h3 className="text-xl md:text-xl lg:text-2xl font-semibold text-black dark:text-white mb-3">
                    {t("about.values.title")}
                  </h3>
                  <ul className="list-inside list-disc space-x-1 md:space-y-2 text-base md:text-lg text-black  dark:text-white/80 ml-2 md:ml-4">
                    <li>{t("about.values.v1")}</li>
                    <li>{t("about.values.v2")}</li>
                    <li>{t("about.values.v3")}</li>
                    <li>{t("about.values.v4")}</li>
                  </ul>

                  <p className="mt-3 md:mt-6 text-sm md:text-base text-black dark:text-white/70">
                    {t("about.values.conclusion")}
                  </p>
                </div>
              </div>

              {/* Support and CTAs at bottom of stack */}
              {/* <div className="mt-8 text-center">
                <a
                  href={`/${locale}/partner-verification`}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-white font-semibold shadow-sm hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Request Verification"
                  title="Checks completed by Q Global Living (The Quiah Group)"
                >
                  Request Verification
                </a>

                <div className="mt-4 text-sm text-charcoal/70 dark:text-white/70">
                  Support:{" "}
                  <a
                    href="mailto:support@qgloballiving.com"
                    className="underline"
                  >
                    support@qgloballiving.com
                  </a>
                </div>
              </div> */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
