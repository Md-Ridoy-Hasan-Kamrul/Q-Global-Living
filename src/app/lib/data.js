// src/lib/data.js

const mockCollections = [
  {
    id: 1,
    title: "City Apartments",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbv6_n6PIxxn2ZEH9Mm7P56DCgty6h6YS_VzrL0qDJ0TVaH1cSfERivE57g5vQZnzaB8Q8dZ7wVdg5uDwF9fPC1RgzxfzpxVf__fAkcYM19wP1LyoMBGT1jArC-anrCEzhFNFtevrtRSgil7QLKkPU7AubuKExZpUMiBDIXpREEa5_jgJgUGEHOHh9GSXrwSrL685TsnqAPYQETfJMRRVzjX7ae3ax-d7d0_hkm4EB1i6xDU_CvjAnUVEf1idF_FIDlTTzAWzlsMw",
    alt: "Modern city apartment",
    href: "/buy",
  },
  {
    id: 2,
    title: "Beach Villas",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD81-2lU7ZtvCUbr0MaRkCzuUz5R1_WDXMbQuce1lMxXFkAQktAOgvRiiiLAbmRJoy_8GsBBdW1gYHhPSKbFE8cyYl9dmMYg52odLedjT5-ssCz36nWfZsuYWHiosWMs-CHblST9O_75Uxy0I5oo3lWAgpihpw2DmDLZSrontgP6-R_nBMbaQ8oXEKoDMqdfYrt7IIcLdO4loalxl5OLN44Pdcoa8UqoKx3KSe8GF741-VbG4QMU4NnxSKSlR6ms6j8PkEX-z_HGF8",
    alt: "Luxurious beach villa",
    href: "/buy",
  },
  {
    id: 3,
    title: "New Developments",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVVkzRkqpEh5NvwD4mYz8w_yKSBt0w21q141jZal8YOBH67M7eK5xaAUpffW31dpHfKILe8u0kBpFc22uuEh0x-D39li0lHBb-feKXg_uIBibDvMPRVpnicl4BLSK4HE2bZukXny3nEDqBlYJ-dgQ5LrMlgDGwtEP2V77_YhqT5iw9Hrvl_TjmnIYPHNfzL2srgsZPll9kxIy35IH5xZhxh4Ze43Btz59fsXe92thZHOX-c4u_dFRlifLhMB6S14QsXeE0js8YWME",
    alt: "New building development",
    href: "/properties/residential",
  },
  {
    id: 4,
    title: "Investment Units",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCwjfNQmrUe72xEBso4IUvDMVwMnOOC4taoR3ufL8ZQH10tZRsk-obTa2R59eAZNhIeRbUS6Qu23N8jX_I-H74zsmxHhyVDLlE5d6nfXxkr4vb_9LUsn0aWWPBN05aR9dpOFkkf1AC0kt7sTJc030ILByplyOV5RP9KLml1TkQa3gKqZotGQTNrO0dSCa-wBwRZ5-cFhSO2y7vIPx6FQVHEognNaYtlQTgjDv4Q96BnuOh_3wT2DlQ-BDqsgji2nrs20Eb9oMHlXVA",
    alt: "Investment townhouses",
    href: "/buy",
  },
];

const mockTestimonials = [
  {
    id: 1,
    quote:
      "The team at Q HOMES made our dream of owning a beachfront villa a reality. Their professionalism and local knowledge are unmatched. The entire process was seamless, from the virtual tours to the final paperwork.",
    name: "Amina Diop",
    title: "Investor from France",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxV9ZnK1KhYV1TXZbKZBM35XAN52r0_ijPviuX0Zx9WeQ8xpmKx281EXp3ADJnUdFG1EAzulwBFGRQu8zh2TNEbi5CmNdnuhlfp8mUBsA30ikb4FkS_pEpszbYLSpVWUM1ZhQffM4CoucJBhVPHWtPIJdVJkDnRsgpGRtQcVG-BJf5H5aKCRoiMUgwDqlYsiBjS2cjJGw2IICQbW6pTOewbdtL22LvyITQZg3OctnshccxaBfK5JOCKu7LQbZm0LqmUxkNw624u2k",
  },
  {
    id: 2,
    quote:
      "As a first-time buyer in Abidjan, I was nervous. Q HOMES guided me every step of the way with patience and expertise. I couldn't be happier with my new apartment and the secure transaction process.",
    name: "Koffi Brou",
    title: "Abidjan Resident",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtnqzNHlkh-mSieej3A5QiFCkoBqsbH8VizjdgsLcww-vqSny1AGpJLrr8y7K18m8mLd1rHWxYjcQfSbV3gr783KA9QsYxN3Sg3RuKL5wkYfPAHoihAmJiGvgRpJSwgifU-5IVSTHjw8CNp42zVCls09NkSMerhvz8sQsutcZSsjdD76DqLlU2as6iIim7x9qTtnF4VTwZapUbeC1k7GfujzK04A8Wqwnff51IqxH1V7f6Cql88oTZkF0c4L80bw2q4kfuF7l_4UE",
  },
  {
    id: 3,
    quote:
      "Selling our family property from overseas seemed daunting, but Q HOMES handled everything. Their marketing was fantastic, and they found a verified buyer quickly. Highly recommended for diaspora owners!",
    name: "Fatou Camara",
    title: "Seller from Canada",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCG0ONCJDurc9bifsOTJSCV4_QI3wFy5deujc385awPKUJT--MjK9iTjBFaa7pKeQ3Mz3YwgvnHGf_MFIqnz6zzUzIJVulauf52HGeu18CQMf3ai261qiRJglhKHUG47Nqh7AMOjRbb__lS5wOJpwzC_R28s_LfoJVaxDLaQB7rs9w2wQX-MF3DfedzkCL9zgrQ9ijxQkrlTUVN4HciE1sn-uumm_H7_bU9WETZ8eCzr5Dn-uqdD53yKZvGxj7wg1o2Q2XtvpkieXA",
  },
  {
    id: 4,
    quote:
      "I invested in three commercial properties through Q HOMES. Their market analysis was spot-on, and the rental yields exceeded my expectations. They truly understand the local real estate landscape.",
    name: "Marcus Johnson",
    title: "Business Owner from USA",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6IZFqbF5BxNbLqQo6HJPBzLCG8_8n3qR5Ks3Rn2Vw4YdLKPmZoQxJv7RhTgNfW8sYuXqKcMz6rLpH9VvGn3ZwQxYj4RmNfL8sKqTpVwXyRzJ5nMgLcYxWpQvRsNfH6tZj9qMxLp",
  },
  {
    id: 5,
    quote:
      "Outstanding service from start to finish! Q HOMES helped us find the perfect family home in Cocody. The virtual tour technology made it easy to view properties from abroad before our visit.",
    name: "Aisha Mensah",
    title: "Teacher from Ghana",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnL9XpYgZwKqRvNfH7TmPsJc6VdWxYzA8BqCr3DtEuF4GvHsI2JxKyL0MzN1OxPyQzR3SxTyU4VxWyX5YzZ6AxByC1DxEyF2GxHyI3JxKyL4MxNyO5PxQyR6SxTyU7VxWyX8YzZ9AxByC",
  },
  {
    id: 6,
    quote:
      "Q HOMES made relocating to Côte d'Ivoire stress-free. They understood our needs, showed us great options, and negotiated a fair price. We love our new home and the community.",
    name: "David Okafor",
    title: "Engineer from Nigeria",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyM3NxOzP1QxRyS4TxUyV6WxXyY7ZxA8ByC9DxEyF0GxHyI1JxKyL2MxNyO3PxQyR4SxTyU5VxWyX6YzZ7AxByC8DxEyF9GxHyI0JxKyL1MxNyO2PxQyR3SxTyU4VxWyX5YzZ6AxByC7DxE",
  },
];

//return mock data functions
export const getCollections = () => {
  return mockCollections;
};

export const getTestimonials = () => {
  return mockTestimonials;
};
