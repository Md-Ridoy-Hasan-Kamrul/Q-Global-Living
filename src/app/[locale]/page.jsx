import HeroSection from '@/components/home/HeroSection';
import SearchBar from '@/components/SearchBar';
import TrustBadges from '@/components/home/TrustBadges';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import DiasporaCta from '@/components/home/DiasporaCta';
import FinalCta from '@/components/home/FinalCta';
// Mock data (বাস্তবে API থেকে আসবে)
import { getCollections, getTestimonials } from '../lib/data';

export default async function HomePage({ params }) {
  const { locale } = await params;

  // fetch data from mock functions
  const collections = getCollections();
  const testimonials = getTestimonials();

  return (
    <>
      <HeroSection locale={locale} />
      <SearchBar locale={locale} />
      <TrustBadges locale={locale} />
      <FeaturedCollections locale={locale} collections={collections} />
      <HowItWorks locale={locale} />
      <Testimonials testimonials={testimonials} locale={locale} />
      <DiasporaCta locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
