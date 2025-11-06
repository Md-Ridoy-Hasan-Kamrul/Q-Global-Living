'use client';

import { useParams } from 'next/navigation';
import Head from 'next/head';
import { useTranslation } from '@/i18n';
import {
  AboutHero,
  MissionVision,
  WhyChooseUs,
  TeamSection,
  AboutCTA,
} from '@/components/about';

/**
 * AboutPage Component
 * Main About page showcasing company mission, values, team, and CTA
 * Implements production-grade practices: SEO, i18n, performance optimization, accessibility
 */
export default function AboutPage() {
  // Get locale from URL params
  const params = useParams();
  const locale = params?.locale || 'en';

  // Initialize translations
  const { t } = useTranslation(locale);

  // SEO metadata
  const metaTitle = t('about.meta.title') || 'About Us - Q Homes';
  const metaDescription =
    t('about.meta.description') || 'Learn about Q Homes mission and team';

  // Hero data
  const heroData = {
    title: t('about.hero.title'),
    subtitle: t('about.hero.subtitle'),
  };

  // Mission & Vision data
  const missionData = {
    title: t('about.mission.title'),
    description: t('about.mission.description'),
  };

  // Why Choose Us data
  const whyChooseData = {
    title: t('about.whyChoose.title'),
    subtitle: t('about.whyChoose.subtitle'),
    features: [
      {
        icon: 'verified_user',
        title: t('about.whyChoose.features.verifiedListings.title'),
        description: t('about.whyChoose.features.verifiedListings.description'),
      },
      {
        icon: 'lock',
        title: t('about.whyChoose.features.escrowProtection.title'),
        description: t('about.whyChoose.features.escrowProtection.description'),
      },
      {
        icon: 'support_agent',
        title: t('about.whyChoose.features.conciergeService.title'),
        description: t('about.whyChoose.features.conciergeService.description'),
      },
      {
        icon: 'language',
        title: t('about.whyChoose.features.multilingualSupport.title'),
        description: t(
          'about.whyChoose.features.multilingualSupport.description'
        ),
      },
    ],
  };

  // Team data
  const teamData = {
    title: t('about.team.title'),
    subtitle: t('about.team.subtitle'),
    team: [
      {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCmGJedAtrX4qVqCyyJXXBUWPdBuh0_VsIHUysr-1xFr-QEsEEbnB8lYyhhLR8SJjIUPmXCmRFbLMMe1jvvOJu2FAfigb5bJ1mMowxlzpQOYUmNfCJ_y4nhn7Q_dCemgS5o6TKUoAzSAQa5BDzOd6iD7fRcksZL6oE1vk0hAPxa-i4AJsBxaASKpSvCLbf8Afj2HxrA5rEgNy1FggA6QRgMsGtg7-jGYGJW2PD-bRvrLgcYjb5PoPnt_MLEROKrE5iECTr8SaxqlPo',
        name: t('about.team.members.jeanClaude.name'),
        role: t('about.team.members.jeanClaude.role'),
        bio: t('about.team.members.jeanClaude.bio'),
        alt: 'Professional headshot of Jean-Claude Koffi',
      },
      {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCZnk4FoHLtSehWhaaGzvAqDXN6CRzDiR9MWmI28j1aeEAXm2_-x3EzAalgsZVg21DXCzmzC-eNYCrGYfAuz5LOkvlhuPquwUgGy2F6k2E4dOXYsd7OezNj0yILGPBuXcZ6wHucxNLlDG9bLaD0y_3GLsQIHM4_5p3kNTuHYkGoBK0ROFBo61JISmkqTdQRYxbcvS4s459medvUeV2XWLzaEKlmgYOqxHtwmXqqc2sozR-CcGT5vbp-halKI3xigqkkoMHByZH_QTc',
        name: t('about.team.members.aissata.name'),
        role: t('about.team.members.aissata.role'),
        bio: t('about.team.members.aissata.bio'),
        alt: 'Professional headshot of Aïssata Diop',
      },
      {
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDje7QnPiRj3g5Z6ANYIKuuEMk5YkXYEaWs8Xg8fDJpfkb5MTYQfMloVr7cUnB9sgxVVv-Qy7pko4eePuN0-JXnaWbHYCy8a09UiR76azwDIUg9hDwozSfJole7C0qTalcxwUV3Xi7gYOVSbTXvS3hVciYWyJQlYH6fcPIntSSbmDEzvkatFwaOZQV3GhaNpCA37D-YkgbPQnEhSXMXF4dWXFpwZ-DVe00OEPzZ7Tpz_BYua3q44Ayr1tJ98T0Ymsia42QC---U7m4',
        name: t('about.team.members.moussa.name'),
        role: t('about.team.members.moussa.role'),
        bio: t('about.team.members.moussa.bio'),
        alt: 'Professional headshot of Moussa Traoré',
      },
    ],
  };

  // CTA data
  const ctaData = {
    title: t('about.cta.title'),
    subtitle: t('about.cta.subtitle'),
    primaryButtonText: t('about.cta.primaryButton'),
    primaryButtonHref: `/${locale}/buy`,
    secondaryButtonText: t('about.cta.secondaryButton'),
    secondaryButtonHref: `/${locale}/contact`,
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta
          name='keywords'
          content="Q Homes, Côte d'Ivoire real estate, about us, mission, vision, team"
        />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:type' content='website' />
        <link rel='canonical' href={`https://qhomes.ci/${locale}/about`} />
      </Head>

      <main className='flex flex-col items-center bg-[#FFFFF0] dark:bg-navy-light'>
        <div className='w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          {/* Hero Section */}
          <AboutHero {...heroData} />

          {/* Mission & Vision Section */}
          <MissionVision {...missionData} />

          {/* Why Choose Us Section */}
          <WhyChooseUs {...whyChooseData} />

          {/* Team Section */}
          <TeamSection {...teamData} />

          {/* Call-to-Action Banner */}
          <AboutCTA {...ctaData} />
        </div>
      </main>
    </>
  );
}
