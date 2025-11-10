import {
  TrendingUp,
  Building,
  Shield,
  Waves,
  Dumbbell,
  TreePine,
  Smile,
} from 'lucide-react';

/**
 * Mock data for residential development properties
 * Replace with API calls in production
 */
export const RESIDENTIAL_PROPERTIES = [
  {
    id: '1',
    name: 'Azure Residences',
    title: 'Azure Residences',
    developer: 'Riviera Developers',
    location: 'Abidjan, Riviera',
    propertyType: '2-3 BR Apartments',
    priceXOF: 85000000,
    priceUSD: 140000,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    heroImage:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    verified: true,
    verifiedBy: 'Q Homes',
    escrowEligible: true,
    description:
      "Discover Azure Residences, a new pinnacle of luxury living in the vibrant heart of Riviera. This exclusive development offers a harmonious blend of modern architecture, sophisticated design, and unparalleled amenities, creating an oasis of comfort and elegance. Designed for those who appreciate the finer things in life, Azure Residences is more than a residence—it's a lifestyle statement.",
    overview: {
      unitTypes: '2-3 BR Apartments',
      startingPrice: 'XOF 85,000,000',
      completion: 'Q2 2026',
    },
    investmentHighlights: [
      {
        icon: TrendingUp,
        text: 'High potential for capital appreciation in a prime Riviera location.',
      },
      {
        icon: Building,
        text: 'Strong rental yield prospects due to high demand in the area.',
      },
      {
        icon: Shield,
        text: 'Secure, gated community with premium amenities and 24/7 security.',
      },
    ],
    units: [
      {
        name: '2 Bedroom Apartment',
        size: '120 sqm',
        price: 'Starts from XOF 85,000,000',
        image:
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=80',
      },
      {
        name: '3 Bedroom Apartment',
        size: '180 sqm',
        price: 'Starts from XOF 120,000,000',
        image:
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
      },
    ],
    amenities: [
      { icon: Waves, name: 'Swimming Pool' },
      { icon: Dumbbell, name: 'Fitness Center' },
      { icon: Shield, name: '24/7 Security' },
      { icon: Building, name: 'Community Center' },
      { icon: TreePine, name: 'Landscaped Gardens' },
      { icon: Smile, name: "Children's Play Area" },
    ],
    paymentPlan: [
      { step: 1, title: 'Reservation', detail: '10% on booking' },
      {
        step: 2,
        title: 'Construction Milestone 1',
        detail: '20% on foundation completion',
      },
      {
        step: 3,
        title: 'Construction Milestone 2',
        detail: '20% on structural completion',
      },
      {
        step: 4,
        title: 'Handover',
        detail: '50% on completion & key handover',
      },
    ],
  },
  {
    id: '2',
    name: 'The Pearl of Cocody',
    title: 'The Pearl of Cocody',
    developer: 'Prestige Homes',
    location: 'Abidjan, Cocody',
    propertyType: '3-5 BR Penthouses',
    priceXOF: 120000000,
    priceUSD: 197000,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    heroImage:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    verified: true,
    verifiedBy: 'Q Homes',
    escrowEligible: false,
    description:
      "The Pearl of Cocody represents the epitome of luxurious urban living. Nestled in the prestigious Cocody district, this exclusive development features stunning penthouses with panoramic views, state-of-the-art amenities, and impeccable design. Experience a lifestyle of sophistication and comfort in one of Abidjan's most desirable neighborhoods.",
    overview: {
      unitTypes: '3-5 BR Penthouses',
      startingPrice: 'XOF 120,000,000',
      completion: 'Q4 2025',
    },
    investmentHighlights: [
      {
        icon: TrendingUp,
        text: 'Prime Cocody location with exceptional appreciation potential.',
      },
      {
        icon: Building,
        text: 'Luxury penthouses with high rental demand from executives.',
      },
      {
        icon: Shield,
        text: 'Premium security and exclusive resident services.',
      },
    ],
    units: [
      {
        name: '3 Bedroom Penthouse',
        size: '220 sqm',
        price: 'Starts from XOF 120,000,000',
        image:
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=80',
      },
      {
        name: '5 Bedroom Penthouse',
        size: '380 sqm',
        price: 'Price on Request',
        image:
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
      },
    ],
    amenities: [
      { icon: Waves, name: 'Infinity Pool' },
      { icon: Dumbbell, name: 'Private Gymnasium' },
      { icon: Shield, name: 'Concierge Service' },
      { icon: Building, name: 'Sky Lounge' },
      { icon: TreePine, name: 'Rooftop Garden' },
      { icon: Smile, name: 'Spa & Wellness' },
    ],
    paymentPlan: [
      { step: 1, title: 'Reservation', detail: '15% on booking' },
      {
        step: 2,
        title: 'Construction Milestone 1',
        detail: '25% on foundation completion',
      },
      {
        step: 3,
        title: 'Construction Milestone 2',
        detail: '25% on structural completion',
      },
      {
        step: 4,
        title: 'Handover',
        detail: '35% on completion & key handover',
      },
    ],
  },
  {
    id: '3',
    name: 'Baie des Milliardaires Villas',
    title: 'Baie des Milliardaires Villas',
    developer: 'Assinie Luxury',
    location: 'Assinie-Mafia',
    propertyType: '4-6 BR Villas',
    priceXOF: 350000000,
    priceUSD: 575000,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    heroImage:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
    verified: true,
    verifiedBy: 'Q Homes',
    escrowEligible: true,
    description:
      'Welcome to Baie des Milliardaires, an ultra-luxury beachfront villa development in the pristine paradise of Assinie-Mafia. These exclusive waterfront properties offer unparalleled privacy, breathtaking ocean views, and world-class amenities. Live the ultimate coastal lifestyle in your own private sanctuary.',
    overview: {
      unitTypes: '4-6 BR Villas',
      startingPrice: 'XOF 350,000,000',
      completion: 'Q3 2026',
    },
    investmentHighlights: [
      {
        icon: TrendingUp,
        text: 'Exclusive beachfront location with limited inventory and high demand.',
      },
      {
        icon: Building,
        text: 'Premium vacation rental potential in a sought-after destination.',
      },
      {
        icon: Shield,
        text: 'Private gated estate with beach access and luxury amenities.',
      },
    ],
    units: [
      {
        name: '4 Bedroom Villa',
        size: '450 sqm',
        price: 'Starts from XOF 350,000,000',
        image:
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=80',
      },
      {
        name: '6 Bedroom Villa',
        size: '650 sqm',
        price: 'Price on Request',
        image:
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
      },
    ],
    amenities: [
      { icon: Waves, name: 'Private Beach Access' },
      { icon: Dumbbell, name: 'Private Gym' },
      { icon: Shield, name: 'Estate Security' },
      { icon: Building, name: 'Beach Club' },
      { icon: TreePine, name: 'Tropical Gardens' },
      { icon: Smile, name: 'Kids Club' },
    ],
    paymentPlan: [
      { step: 1, title: 'Reservation', detail: '10% on booking' },
      {
        step: 2,
        title: 'Construction Milestone 1',
        detail: '20% on foundation completion',
      },
      {
        step: 3,
        title: 'Construction Milestone 2',
        detail: '30% on structural completion',
      },
      {
        step: 4,
        title: 'Handover',
        detail: '40% on completion & key handover',
      },
    ],
  },
];

/**
 * Get a single residential property by ID
 * @param {string} id - Property ID
 * @returns {Object|null} Property object or null if not found
 */
export function getResidentialPropertyById(id) {
  return RESIDENTIAL_PROPERTIES.find((property) => property.id === id) || null;
}
