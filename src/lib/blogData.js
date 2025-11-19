// Shared blog data used by the listing and the article page.
// This keeps a single source of truth so clicking a card can open
// its detail page and render the same data.

export const initialData = [
  {
    id: 1,
    title: "Discovering the Rise of Modern Abidjan Homes",
    date: "Oct 22, 2023",
    snippet:
      "Explore the architectural trends shaping the residential landscape of Abidjan's most sought-after neighborhoods...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP59m53WYwjSwzzYDK51WmnmR6En8wUTrh_umYw3QZQg6QAb6D4YZtxp5mZkkyQbF-gjFBqt2tex-CJ-OgyUWIrH78Wxb7K1tx5drtSbkT9LRDVrV_xrmpAJReDzMKrgsTOqWCeJrzvc08kRB7OeFHiAFGbv5e_4OeMU6tajbDkZ07mXkMS-3AW5JnP6xD1fsOQfZVQkhKCehY0Jep5nmJaniVad0MncVvQxpH4BfbSjUzPNt7hmZcozpwSCwfGG1bjX7xXxFfCM8",
    alt: "Exterior of a modern home with large windows",
    sections: [
      {
        heading: "1. Cocody - Angré",
        content:
          "Once considered a distant suburb, Angré has transformed into one of the most sought-after residential areas in Abidjan. It boasts a mix of modern villas and upscale apartments, catering to a growing middle and upper class. With its numerous restaurants, international schools, and shopping centers, Angré offers a high quality of life with all the necessary amenities at your doorstep.",
        blockquote:
          "The growth in Angré has been phenomenal. It perfectly blends residential tranquility with commercial vibrancy, making it a prime spot for both families and young professionals.",
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
  },
  {
    id: 2,
    title: "Top 5 Features of Luxury Apartments in Cocody",
    date: "Oct 15, 2023",
    snippet:
      "From smart technology to infinity pools, we delve into what makes these modern apartments the pinnacle of luxury...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5pOdZhhFtCfoNEYqyOBiPRFGJtg6mouHqOMIymbPY1eXSg3Ggu6DzT_BYm2vel_3D1as9fDwV4grKUGr6SEU_Zd5CduX3zI3A1YbQC6UYwD20mgnHXrtV0G8U2Gh0RuUBvRGPzfPeGr_Z-A5CjK1X7mherWHpkCj0r545axzDPrW4CRZT2F1ut9v3tTkq7A_mAHxm74VQGPuelQa7CVLjW7S4Kca4ijzCx1yOIBjymThDXvJQ9XZTfym-e77udDuJmJG4KI075gc",
    alt: "Luxury apartment interior with a view of a city skyline",
   sections: [
      {
        heading: "1. Cocody - Angré",
        content:
          "Once considered a distant suburb, Angré has transformed into one of the most sought-after residential areas in Abidjan. It boasts a mix of modern villas and upscale apartments, catering to a growing middle and upper class. With its numerous restaurants, international schools, and shopping centers, Angré offers a high quality of life with all the necessary amenities at your doorstep.",
        blockquote:
          "The growth in Angré has been phenomenal. It perfectly blends residential tranquility with commercial vibrancy, making it a prime spot for both families and young professionals.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB5pOdZhhFtCfoNEYqyOBiPRFGJtg6mouHqOMIymbPY1eXSg3Ggu6DzT_BYm2vel_3D1as9fDwV4grKUGr6SEU_Zd5CduX3zI3A1YbQC6UYwD20mgnHXrtV0G8U2Gh0RuUBvRGPzfPeGr_Z-A5CjK1X7mherWHpkCj0r545axzDPrW4CRZT2F1ut9v3tTkq7A_mAHxm74VQGPuelQa7CVLjW7S4Kca4ijzCx1yOIBjymThDXvJQ9XZTfym-e77udDuJmJG4KI075gc",
    alt: "Luxury apartment interior with a view of a city skyline",
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
  },
  {
    id: 3,
    title: "Investment Guide: New Builds in Côte d'Ivoire",
    date: "Oct 08, 2023",
    snippet:
      "Thinking of investing? Our latest report breaks down the benefits and potential of new property developments...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEbGASMEpG8MBAhKABvXOWP66f25QZWwVEwXzT9xH5W1r2x3J0N_9cu_x0lfeJBBzOhJL0DSlUsN9CrWHmcKuX2WORz0zllV2xTOOEmGSLYWDuMz1Ad6dc64i7Qd6NeN2e46PdB2TtM9mt2szHzXVqMgEnXRcTI38sJ4-0z9MA-GshfWclq-6BWMbXO37qjsQyTed19j-aduMrLFoUe6gvr-hEtgCtIg73ZHPUto6rnYSwVxvXZPu3pLweiObp6cfmjnp2dR_9BOo",
    alt: "Architectural drawing of a new building development",
   sections: [
      {
        heading: "1. Cocody - Angré",
        content:
          "Once considered a distant suburb, Angré has transformed into one of the most sought-after residential areas in Abidjan. It boasts a mix of modern villas and upscale apartments, catering to a growing middle and upper class. With its numerous restaurants, international schools, and shopping centers, Angré offers a high quality of life with all the necessary amenities at your doorstep.",
        blockquote:
          "The growth in Angré has been phenomenal. It perfectly blends residential tranquility with commercial vibrancy, making it a prime spot for both families and young professionals.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCEbGASMEpG8MBAhKABvXOWP66f25QZWwVEwXzT9xH5W1r2x3J0N_9cu_x0lfeJBBzOhJL0DSlUsN9CrWHmcKuX2WORz0zllV2xTOOEmGSLYWDuMz1Ad6dc64i7Qd6NeN2e46PdB2TtM9mt2szHzXVqMgEnXRcTI38sJ4-0z9MA-GshfWclq-6BWMbXO37qjsQyTed19j-aduMrLFoUe6gvr-hEtgCtIg73ZHPUto6rnYSwVxvXZPu3pLweiObp6cfmjnp2dR_9BOo",
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
  },
  {
    id: 4,
    title: "How to Find Family-Friendly Homes in Abidjan",
    date: "Oct 01, 2023",
    snippet:
      "Safety, schools, and space are key. Here's our checklist for finding the perfect family home in the city...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_dubFT_4oMCFU_pR1TRx2dMHcQQrEnDavMjHK7JD1vQaVOpgnm6ecGDC-QyUudBOV8DmIEZfLBtGZEpnv4aI_R1Ka5eBoFrqe3RN1Cr8PUXCeHyqTG1O-3Vmi6CxXtGuFO_hjQJiUmZoff1akT1XTOj2TvGTU4YiAy4vKMpL2OMJ4drWYsN2uYjhRuEm7W8hkqrHsrGbqzbJ5BVRY7RoPQNjI0D7yMLohCtOvpZVaJMmXhCiJFoCYz_FV4p8gLxCJwYgqA1CuriM",
    alt: "A happy family playing in the backyard of a suburban home",
   sections: [
      {
        heading: "1. Cocody - Angré",
        content:
          "Once considered a distant suburb, Angré has transformed into one of the most sought-after residential areas in Abidjan. It boasts a mix of modern villas and upscale apartments, catering to a growing middle and upper class. With its numerous restaurants, international schools, and shopping centers, Angré offers a high quality of life with all the necessary amenities at your doorstep.",
        blockquote:
          "The growth in Angré has been phenomenal. It perfectly blends residential tranquility with commercial vibrancy, making it a prime spot for both families and young professionals.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD_dubFT_4oMCFU_pR1TRx2dMHcQQrEnDavMjHK7JD1vQaVOpgnm6ecGDC-QyUudBOV8DmIEZfLBtGZEpnv4aI_R1Ka5eBoFrqe3RN1Cr8PUXCeHyqTG1O-3Vmi6CxXtGuFO_hjQJiUmZoff1akT1XTOj2TvGTU4YiAy4vKMpL2OMJ4drWYsN2uYjhRuEm7W8hkqrHsrGbqzbJ5BVRY7RoPQNjI0D7yMLohCtOvpZVaJMmXhCiJFoCYz_FV4p8gLxCJwYgqA1CuriM",
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
  },
  {
    id: 5,
    title: "The Ultimate Guide to Penthouses with a View",
    date: "Sep 25, 2023",
    snippet:
      "Experience life at the top. We showcase the most breathtaking penthouse properties currently on the market...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvETtEqNKy7HyY5Xj0teYXd1D6uOuv-3oze_xKNeNdvjjCDd8-8JlSmCyBjcP-_ChIywTvWkfK9p_hkdQOJNTtPje3ov8tcK7HW652qoNQhWKj9hu4HzoIUV53UJGvPqrJHLddpn704JeGhLL6Pe3Ok1vZGKjsZayfQ-W6GfonCKJntEML3hM9buE4ZZsXEGeSV72wzLpIOIqEiU2cTTpdhBalAJpWABa7CYnOP_EFy6fKZ6i-DxlBXP2WpPKPDKG2GLJtp6ylggY",
    alt: "A penthouse apartment with a stunning city view at dusk",
    sections: [
      {
        heading: "1. Cocody - Angré",
        content:
          "Once considered a distant suburb, Angré has transformed into one of the most sought-after residential areas in Abidjan. It boasts a mix of modern villas and upscale apartments, catering to a growing middle and upper class. With its numerous restaurants, international schools, and shopping centers, Angré offers a high quality of life with all the necessary amenities at your doorstep.",
        blockquote:
          "The growth in Angré has been phenomenal. It perfectly blends residential tranquility with commercial vibrancy, making it a prime spot for both families and young professionals.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAvETtEqNKy7HyY5Xj0teYXd1D6uOuv-3oze_xKNeNdvjjCDd8-8JlSmCyBjcP-_ChIywTvWkfK9p_hkdQOJNTtPje3ov8tcK7HW652qoNQhWKj9hu4HzoIUV53UJGvPqrJHLddpn704JeGhLL6Pe3Ok1vZGKjsZayfQ-W6GfonCKJntEML3hM9buE4ZZsXEGeSV72wzLpIOIqEiU2cTTpdhBalAJpWABa7CYnOP_EFy6fKZ6i-DxlBXP2WpPKPDKG2GLJtp6ylggY",
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
  },
  {
    id: 6,
    title: "Decorating Your New Modern Home: A Style Guide",
    date: "Sep 18, 2023",
    snippet:
      "Turn your new house into a home with these expert tips on interior design for modern living spaces...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-nFeNRvvAyDdYQmgQGbBMoD5VmH0xoTcGKfZOvroiSAcmpNrTiNghyKfAHbdsI1Gs7IbzdXvr5JFnIZ7MEM80nWfzY0Jer0BgCP9GGJSAVlzcEYqDIXskzz49oYTDe8JttrUHk7LvKNSS81ZodLYLVKNLUcJ0Yt2WBcfcX1HSYUTMQ5eWclP3vssiWCcl4wpsY1Ygyq84z1FipugHadYqSuOt3nBLihlVhqbqFpvk3idDaLQx87knDk0Wi9crALCoaKLsVEIcg5I",
    alt: "Stylishly decorated modern living room",
   sections: [
      {
        heading: "1. Cocody - Angré",
        content:
          "Once considered a distant suburb, Angré has transformed into one of the most sought-after residential areas in Abidjan. It boasts a mix of modern villas and upscale apartments, catering to a growing middle and upper class. With its numerous restaurants, international schools, and shopping centers, Angré offers a high quality of life with all the necessary amenities at your doorstep.",
        blockquote:
          "The growth in Angré has been phenomenal. It perfectly blends residential tranquility with commercial vibrancy, making it a prime spot for both families and young professionals.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC-nFeNRvvAyDdYQmgQGbBMoD5VmH0xoTcGKfZOvroiSAcmpNrTiNghyKfAHbdsI1Gs7IbzdXvr5JFnIZ7MEM80nWfzY0Jer0BgCP9GGJSAVlzcEYqDIXskzz49oYTDe8JttrUHk7LvKNSS81ZodLYLVKNLUcJ0Yt2WBcfcX1HSYUTMQ5eWclP3vssiWCcl4wpsY1Ygyq84z1FipugHadYqSuOt3nBLihlVhqbqFpvk3idDaLQx87knDk0Wi9crALCoaKLsVEIcg5I",
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
  },
];

export default initialData;
