"use client";
import BlogPost from "@/components/blog/BlogPost";

const articleData = {
  title: "Top 5 Emerging Neighborhoods in Abidjan for 2024",
  subtitle:
    "Discover the hidden gems and investment hotspots in Côte d'Ivoire's bustling economic capital.",
  author: "Jane Doe",
  publishedDate: "August 15, 2024",
  readTime: "7 min read",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ0Hz_fURKgBi8b8t_yTQ3lFiQjv0oySFe_xHwTPERW99n5Ia61q-aFYOhUO0o7CLkV2jZ6af5VhWKJRoKXmrA5K-g6T6FSLOBOLDHQR5BUAtrM30gEI1UUrpe09RaV48yQl_a9qOPPpkG1BJ9wEeBapiKB-vLSmfZ1JVg_W0EvXUXDczvr3MWniAKfnup5NQo37o3txwu8Us6bes6XQDgsS81FFXd0p0I0TtBCTZESGe176hmh2G5D-YB_hrk7eX6poH-T54xQnY",
  sections: [
    {
      heading: "1. Cocody - Angré",
      content:
        "Once considered a distant suburb, Angré has transformed into one of the most sought-after residential areas in Abidjan. It boasts a mix of modern villas and upscale apartments, catering to a growing middle and upper class. With its numerous restaurants, international schools, and shopping centers, Angré offers a high quality of life with all the necessary amenities at your doorstep.",
      blockquote: `"The growth in Angré has been phenomenal. It perfectly blends residential tranquility with commercial vibrancy, making it a prime spot for both families and young professionals."`,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD3TfmGBSyBzPyyfiR84-AngIMNSX1kL595o93KElzBVsScPMNKcNqEchZ0CduT4ZaT_If6OMKvZOXMAB1bNF3XI1KWEcW5RWMjc3YFk8kgjeBDO-UmMs7OtG4C1Nq9447Ua7q_j47J835PezkLEfEIVIwHhY0V3gSKh1vPSVtLMqERD5zRTUz9LObacwuwaDvUhKQixT0xCJsNqTT2LyZ0WBysUPg5v5CiCB2yC94D9inntJ7RL_3Zi43F-llKSRVkHPZcXC4FahU",
    },
    {
      heading: "2. Zone 4 - Biétry",
      content:
        "Known for its expatriate community and lively nightlife, Zone 4 continues to evolve. The Biétry area, in particular, is seeing a surge in luxury waterfront developments along the lagoon. Its strategic location near the airport and the city center, combined with an eclectic mix of international cuisine and entertainment options, makes it a perennial favorite for those seeking a dynamic urban lifestyle.",
    },
    {
      heading: "3. Bingerville",
      content:
        "Located on the outskirts of Abidjan, Bingerville is experiencing a residential boom. It offers a more serene and spacious alternative to the bustling city center.",
      list: [
        "More affordable land and property prices.",
        "Development of new infrastructure, including roads and public services.",
        "Proximity to the new industrial zones, creating employment opportunities.",
        "A quieter, more family-friendly environment with green spaces.",
      ],
    },
    {
      heading: "4. Riviera Palmeraie",
      content:
        "This vast residential area is known for its organized layout and secure gated communities. Palmeraie is ideal for families looking for security and community living. The neighborhood is self-sufficient, with its own schools, clinics, and supermarkets. Recent infrastructure upgrades have improved connectivity to other parts of Abidjan, increasing its appeal.",
    },
    {
      heading: "5. Port-Bouët (around the new bridge)",
      content:
        "The construction of the fourth bridge has been a game-changer for the Port-Bouët area. Previously disconnected, this district is now an emerging hub with significant investment potential. Its proximity to the Vridi industrial zone and the international airport makes it attractive for commercial and residential real estate development. Early investors are poised to benefit from the area's anticipated appreciation in value.",
    },
  ],
};

const relatedArticles = [
  {
    id: "first-home-guide-cote-divoire",
    title: "A Guide to Buying Your First Home in Côte d'Ivoire",
    description:
      "Navigating the property market can be daunting. Here are the essential steps for first-time homebuyers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8OzwXCVD_jk6Bh3osqbYzwCXBjyLOVjLvRwN88DFB7KNKq4_Hrrqhn96fHkKigI-vFf-DjKy2NaWWIhb1DJGch_rd90bpTECjbNzYJSakwhoOy5Hhc32bnuRu0xG3FFNiI85v4co6dByrMf5JJV-GSV0T4xXG01K_VZKDYFp4PJJmaxWdFSfTnO50EzLVEfArJTwsVQN-hpksNNwwC9x3FbOPFhxkkyXkgwuPMHRGAiq7pICAbg7ojCAbEUmeR_oQDAhI3sB0iqk",
    imageAlt: "Modern living room interior",
    slug: "/blog/first-home-guide-cote-divoire",
    category: "Buying Guide",
    publishedDate: "2024-08-10",
    readTime: "5 min read",
  },
  {
    id: "property-taxes-abidjan",
    title: "Understanding Property Taxes in Abidjan",
    description:
      "A simple breakdown of the taxes you can expect to pay as a property owner in the economic capital.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3vN-_VXIeRMayaeao1NnazecYGQoJ8zbF1rgadH1laNPVG2uGu3ENEAsdo59FIGmsZ5KQ-Puqdt0LK2DlxBBVXd_6Qf1mKBAMNN6vgCH9_ZnQKc6p07e8zDSADY9IyvESUBkhVjCGbl9N9QeIj4XP0H6l21C1Wopmph4KbcgP18f9K0bDgXdVEox9G6c3vKcy0HpjO5jhnVFJZvqpFJ5Z3OgaVnkAMYs0BFs7nI7VDcJtCJE8Yxt6HRhW1S9FmlupZ-JX14hdzQ",
    imageAlt: "Close up of a house key in a lock",
    slug: "/blog/property-taxes-abidjan",
    category: "Finance",
    publishedDate: "2024-08-12",
    readTime: "4 min read",
  },
  {
    id: "interior-design-trends-2024",
    title: "2024 Interior Design Trends for Ivorian Homes",
    description:
      "Discover the latest trends in home decor, blending local craftsmanship with modern aesthetics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_d3ktsTMsRp5zVIt5uAgvWNUzuGJjfLxmzRzMkM0XXWzbwa-VrtMx-Q_0blrWrmBZh2qUBdSh6xczJV2nOO0pwDHU4pALasnOTC_9sp5DhYP1YlajOcMbGtCIGfDgFWDFhMvuNPM66tMw9yYRcnR2jdXOS5P9fPQFXfwT500UIsRuHtssLXH34VC5pXfXPMuK--IXcAT_mUZvZXbGazIFy_ldGfi9H3OlLoKox6OMDNo_oFxmzfl0YLtALsvkQtIGZgA_DsbFl_c",
    imageAlt: "Luxury modern kitchen with minimalist design",
    slug: "/blog/interior-design-trends-2024",
    category: "Design",
    publishedDate: "2024-08-14",
    readTime: "6 min read",
  },
];

export default function SingleProductPage() {
  return (
    <div>
      <BlogPost articleData={articleData} relatedArticles={relatedArticles} />
    </div>
  );
}
