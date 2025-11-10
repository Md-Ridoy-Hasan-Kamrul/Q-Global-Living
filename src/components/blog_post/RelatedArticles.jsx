// import Image from "next/image";

// const initialData = [
//   {
//     id: 1,
//     title: "Discovering the Rise of Modern Abidjan Homes",
//     date: "Oct 22, 2023",
//     snippet:
//       "Explore the architectural trends shaping the residential landscape of Abidjan's most sought-after neighborhoods...",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAP59m53WYwjSwzzYDK51WmnmR6En8wUTrh_umYw3QZQg6QAb6D4YZtxp5mZkkyQbF-gjFBqt2tex-CJ-OgyUWIrH78Wxb7K1tx5drtSbkT9LRDVrV_xrmpAJReDzMKrgsTOqWCeJrzvc08kRB7OeFHiAFGbv5e_4OeMU6tajbDkZ07mXkMS-3AW5JnP6xD1fsOQfZVQkhKCehY0Jep5nmJaniVad0MncVvQxpH4BfbSjUzPNt7hmZcozpwSCwfGG1bjX7xXxFfCM8", // Replace with actual image URL
//     alt: "Exterior of a modern home with large windows",
//     url: "#",
//   },
//   {
//     id: 2,
//     title: "Top 5 Features of Luxury Apartments in Cocody",
//     date: "Oct 15, 2023",
//     snippet:
//       "From smart technology to infinity pools, we delve into what makes these modern apartments the pinnacle of luxury...",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuB5pOdZhhFtCfoNEYqyOBiPRFGJtg6mouHqOMIymbPY1eXSg3Ggu6DzT_BYm2vel_3D1as9fDwV4grKUGr6SEU_Zd5CduX3zI3A1YbQC6UYwD20mgnHXrtV0G8U2Gh0RuUBvRGPzfPeGr_Z-A5CjK1X7mherWHpkCj0r545axzDPrW4CRZT2F1ut9v3tTkq7A_mAHxm74VQGPuelQa7CVLjW7S4Kca4ijzCx1yOIBjymThDXvJQ9XZTfym-e77udDuJmJG4KI075gc",
//     alt: "Luxury apartment interior with a view of a city skyline",
//     url: "#",
//   },
//   {
//     id: 3,
//     title: "Investment Guide: New Builds in Côte d'Ivoire",
//     date: "Oct 08, 2023",
//     snippet:
//       "Thinking of investing? Our latest report breaks down the benefits and potential of new property developments...",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCEbGASMEpG8MBAhKABvXOWP66f25QZWwVEwXzT9xH5W1r2x3J0N_9cu_x0lfeJBBzOhJL0DSlUsN9CrWHmcKuX2WORz0zllV2xTOOEmGSLYWDuMz1Ad6dc64i7Qd6NeN2e46PdB2TtM9mt2szHzXVqMgEnXRcTI38sJ4-0z9MA-GshfWclq-6BWMbXO37qjsQyTed19j-aduMrLFoUe6gvr-hEtgCtIg73ZHPUto6rnYSwVxvXZPu3pLweiObp6cfmjnp2dR_9BOo",
//     alt: "Architectural drawing of a new building development",
//     url: "#",
//   },
//   {
//     id: 4,
//     title: "How to Find Family-Friendly Homes in Abidjan",
//     date: "Oct 01, 2023",
//     snippet:
//       "Safety, schools, and space are key. Here's our checklist for finding the perfect family home in the city...",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuD_dubFT_4oMCFU_pR1TRx2dMHcQQrEnDavMjHK7JD1vQaVOpgnm6ecGDC-QyUudBOV8DmIEZfLBtGZEpnv4aI_R1Ka5eBoFrqe3RN1Cr8PUXCeHyqTG1O-3Vmi6CxXtGuFO_hjQJiUmZoff1akT1XTOj2TvGTU4YiAy4vKMpL2OMJ4drWYsN2uYjhRuEm7W8hkqrHsrGbqzbJ5BVRY7RoPQNjI0D7yMLohCtOvpZVaJMmXhCiJFoCYz_FV4p8gLxCJwYgqA1CuriM",
//     alt: "A happy family playing in the backyard of a suburban home",
//     url: "#",
//   },
//   {
//     id: 5,
//     title: "The Ultimate Guide to Penthouses with a View",
//     date: "Sep 25, 2023",
//     snippet:
//       "Experience life at the top. We showcase the most breathtaking penthouse properties currently on the market...",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAvETtEqNKy7HyY5Xj0teYXd1D6uOuv-3oze_xKNeNdvjjCDd8-8JlSmCyBjcP-_ChIywTvWkfK9p_hkdQOJNTtPje3ov8tcK7HW652qoNQhWKj9hu4HzoIUV53UJGvPqrJHLddpn704JeGhLL6Pe3Ok1vZGKjsZayfQ-W6GfonCKJntEML3hM9buE4ZZsXEGeSV72wzLpIOIqEiU2cTTpdhBalAJpWABa7CYnOP_EFy6fKZ6i-DxlBXP2WpPKPDKG2GLJtp6ylggY",
//     alt: "A penthouse apartment with a stunning city view at dusk",
//     url: "#",
//   },
//   {
//     id: 6,
//     title: "Decorating Your New Modern Home: A Style Guide",
//     date: "Sep 18, 2023",
//     snippet:
//       "Turn your new house into a home with these expert tips on interior design for modern living spaces...",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuC-nFeNRvvAyDdYQmgQGbBMoD5VmH0xoTcGKfZOvroiSAcmpNrTiNghyKfAHbdsI1Gs7IbzdXvr5JFnIZ7MEM80nWfzY0Jer0BgCP9GGJSAVlzcEYqDIXskzz49oYTDe8JttrUHk7LvKNSS81ZodLYLVKNLUcJ0Yt2WBcfcX1HSYUTMQ5eWclP3vssiWCcl4wpsY1Ygyq84z1FipugHadYqSuOt3nBLihlVhqbqFpvk3idDaLQx87knDk0Wi9crALCoaKLsVEIcg5I",
//     alt: "Stylishly decorated modern living room",
//     url: "#",
//   },
// ];

// export default function RelatedrelatedArticles() {
//   return (
//     <div className="w-full mt-16">
//       <h3 className="text-3xl font-bold font-display text-center mb-8">
//         You Might Also Like
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {initialData.map((article, idx) => (
//           <div
//             key={idx}
//             className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
//           >
//             <div className="relative w-full h-48">
//               <Image
//                 src={article.image}
//                 alt={article.title}
//                 fill
//                 className="object-cover rounded-t-xl"
//                 sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//               />
//             </div>
//             <div className="p-6 flex flex-col flex-grow">
//               <h4 className="font-display font-bold text-xl mb-2 flex-grow">
//                 {article.title}
//               </h4>
//               <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
//                 {article.description}
//               </p>
//               <a
//                 className="text-accent font-bold text-sm hover:underline self-start"
//                 href={`/blog/product/${article.id}`}
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

const initialData = [
  {
    id: 1,
    title: "Discovering the Rise of Modern Abidjan Homes",
    date: "Oct 22, 2023",
    snippet:
      "Explore the architectural trends shaping the residential landscape of Abidjan's most sought-after neighborhoods...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP59m53WYwjSwzzYDK51WmnmR6En8wUTrh_umYw3QZQg6QAb6D4YZtxp5mZkkyQbF-gjFBqt2tex-CJ-OgyUWIrH78Wxb7K1tx5drtSbkT9LRDVrV_xrmpAJReDzMKrgsTOqWCeJrzvc08kRB7OeFHiAFGbv5e_4OeMU6tajbDkZ07mXkMS-3AW5JnP6xD1fsOQfZVQkhKCehY0Jep5nmJaniVad0MncVvQxpH4BfbSjUzPNt7hmZcozpwSCwfGG1bjX7xXxFfCM8", // Replace with actual image URL
    alt: "Exterior of a modern home with large windows",
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
  },
];

export default function RelatedrelatedArticles() {
  return (
    <div className="w-full mt-16">
      <h3 className="text-3xl font-bold font-display text-center mb-8">
        You Might Also Like
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initialData.map((article, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-primary/30 rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                className="object-cover rounded-t-xl"
                priority={true}
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark">
                {article.title}
              </h3>
              <p className="text-text-light dark:text-text-dark flex-grow">
                {article.description}
              </p>
              <a
                className="text-accent font-bold text-sm hover:underline self-start"
                href={`/blog/product/${article.id}`}
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
