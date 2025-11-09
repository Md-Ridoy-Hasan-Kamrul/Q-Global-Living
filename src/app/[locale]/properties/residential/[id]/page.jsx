import React from 'react';
import Image from 'next/image';
import { MapPin, Download, Phone, CheckCircle, Shield, TrendingUp, Calendar, Building, Home, Waves, Dumbbell, TreePine, Smile } from 'lucide-react';
import Link from 'next/link';

const page = () => {
  const propertyData = {
    name: "Abidjan Heights",
    location: "Cocody, Abidjan, Côte d'Ivoire",
    developer: "Q Homes Development",
    verifiedBy: "Q Homes",
    escrowEligible: true,
    description: "Discover Abidjan Heights, a new pinnacle of luxury living in the vibrant heart of Cocody. This exclusive development offers a harmonious blend of modern architecture, sophisticated design, and unparalleled amenities, creating an oasis of comfort and elegance. Designed for those who appreciate the finer things in life, Abidjan Heights is more than a residence—it's a lifestyle statement.",
    overview: {
      unitTypes: "2-4 BR Villas, Penthouses",
      startingPrice: "XOF 150,000,000",
      completion: "Q4 2025"
    },
    investmentHighlights: [
      {
        icon: TrendingUp,
        text: "High potential for capital appreciation in a prime location."
      },
      {
        icon: Building,
        text: "Strong rental yield prospects due to high demand."
      },
      {
        icon: Shield,
        text: "Secure, gated community with premium amenities."
      }
    ],
    units: [
      {
        name: "2 Bedroom Villa",
        size: "150 sqm",
        price: "Starts from XOF 150,000,000",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=80"
      },
      {
        name: "4 Bedroom Penthouse",
        size: "320 sqm",
        price: "Price on Request",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80"
      }
    ],
    amenities: [
      { icon: Waves, name: "Swimming Pool" },
      { icon: Dumbbell, name: "Gymnasium" },
      { icon: Shield, name: "24/7 Security" },
      { icon: Building, name: "Clubhouse" },
      { icon: TreePine, name: "Landscaped Gardens" },
      { icon: Smile, name: "Children's Play Area" }
    ],
    paymentPlan: [
      { step: 1, title: "Reservation", detail: "10% on booking" },
      { step: 2, title: "Construction Milestone 1", detail: "20% on foundation completion" },
      { step: 3, title: "Construction Milestone 2", detail: "20% on structural completion" },
      { step: 4, title: "Handover", detail: "50% on completion & key handover" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fffff7] dark:bg-gray-900">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80')"
        }}
      >
  <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <h1 className="text-5xl font-bold text-white mb-2">{propertyData.name}</h1>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <p className="text-lg">{propertyData.location}</p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between py-4">
            <div className="flex gap-8">
              <a href="#overview" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition">Overview</a>
              <a href="#units" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition">Unit Plans & Pricing</a>
              <a href="#amenities" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition">Amenities</a>
              <a href="#location" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition">Location</a>
              <a href="#developer" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition">Developer</a>
              <a href="#payment" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#C5A572] transition">Payment Plans</a>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-soft-grey dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
              <button className="px-6 py-2 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition">
                Inquire
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-[#C5A572]">Home</Link>
              <span>/</span>
              <Link href="/new-developments" className="hover:text-[#C5A572]">New Developments</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">{propertyData.name}</span>
            </div>

            {/* Title & Badges */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">{propertyData.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">by {propertyData.developer}</p>
              <div className="flex gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Verified by {propertyData.verifiedBy}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm font-medium">
                  <Building className="w-4 h-4" />
                  Escrow Eligible
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {propertyData.description}
              </p>
            </div>

            {/* Unit Plans & Pricing */}
            <div id="units">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Unit Plans & Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {propertyData.units.map((unit, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                      <Image
                        src={unit.image}
                        alt={unit.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{unit.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{unit.size}</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">{unit.price}</p>
                      <button className="w-full py-2.5 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition">
                        View Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div id="amenities">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {propertyData.amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#C5A572]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#C5A572]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{amenity.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div id="location">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Location & Connectivity
              </h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Location Map"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 800px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Developer Profile */}
            <div id="developer">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Developer Profile
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#0A2540] flex items-center justify-center text-white font-bold text-xl">
                    Q
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{propertyData.developer}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      With over 15 years of experience in crafting premium residential properties, Q Homes Development is synonymous with quality, innovation, and trust. Our portfolio showcases a commitment to architectural excellence and creating communities that stand the test of time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Plans */}
            <div id="payment">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                Payment Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We offer flexible payment plans to suit your financial needs. Our team is available to discuss financing options and guide you through the process.
              </p>
              <div className="space-y-4">
                {propertyData.paymentPlan.map((plan) => (
                  <div key={plan.step} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] flex items-center justify-center text-white font-bold shrink-0">
                      {plan.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{plan.title}: {plan.detail}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Development Overview */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Development Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Unit Types</span>
                    <span className="font-medium text-gray-900 dark:text-white text-right">{propertyData.overview.unitTypes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Starting Price</span>
                    <span className="font-medium text-gray-900 dark:text-white">{propertyData.overview.startingPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Est. Completion</span>
                    <span className="font-medium text-gray-900 dark:text-white">{propertyData.overview.completion}</span>
                  </div>
                </div>
              </div>

              {/* Investment Highlights */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Investment Highlights</h3>
                <div className="space-y-4">
                  {propertyData.investmentHighlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#C5A572]/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-[#C5A572]" />
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{highlight.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 bg-[#0A2540] text-white rounded-lg hover:bg-[#0A2540]/90 transition font-medium">
                  Inquire About This Development
                </button>
                <button className="w-full py-3 bg-soft-grey dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition font-medium">
                  Book a Site Visit
                </button>
                <button className="w-full py-3 bg-[#25D366]/10 text-[#25D366] rounded-lg hover:bg-[#25D366]/20 transition font-medium flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;