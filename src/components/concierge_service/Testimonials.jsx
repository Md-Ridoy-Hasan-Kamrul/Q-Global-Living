"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "The team at Q HOMES made our dream of owning a beachfront villa a reality. Their professionalism and local knowledge are unmatched. The entire process was seamless, from the virtual tours to the final paperwork.",
    name: "Amina Diop",
    title: "Investor from France",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    quote:
      "As a first-time buyer in Abidjan, I was nervous. Q HOMES guided me every step of the way with patience and expertise. I couldn't be happier with my new apartment and the secure transaction process.",
    name: "Koffi Brou",
    title: "Abidjan Resident",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    quote:
      "Selling our family property from overseas seemed daunting, but Q HOMES handled everything. Their marketing was fantastic, and they found a verified buyer quickly. Highly recommended for diaspora owners!",
    name: "Fatou Camara",
    title: "Seller from Canada",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    quote:
      "The team at Q HOMES made our dream of owning a beachfront villa a reality. Their professionalism and local knowledge are unmatched. The entire process was seamless, from the virtual tours to the final paperwork.",
    name: "Amina Diop",
    title: "Investor from France",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    quote:
      "As a first-time buyer in Abidjan, I was nervous. Q HOMES guided me every step of the way with patience and expertise. I couldn't be happier with my new apartment and the secure transaction process.",
    name: "Koffi Brou",
    title: "Abidjan Resident",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const hasOverflow = scrollWidth > clientWidth + 5;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(
        hasOverflow && scrollLeft < scrollWidth - clientWidth - 10
      );
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.85;

      container.scrollTo({
        left:
          direction === "left"
            ? container.scrollLeft - scrollAmount
            : container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });

      setTimeout(checkScrollButtons, 350);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-8 md:py-12 lg:pb-16 px-4 sm:px-6 lg:px-8   dark:bg-charcoal/20">
      <div className="mx-auto max-w-7xl ">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-charcoal dark:text-white">
            Trusted by Buyers and Sellers Worldwide
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-charcoal/70 dark:text-soft-grey/70">
            Hear from clients who found their dream property with Q HOMES.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 rounded-full bg-white dark:bg-charcoal border-2 border-primary/20 dark:border-accent/20 p-3 shadow-xl transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right Navigation Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 rounded-full bg-white dark:bg-charcoal border-2 border-primary/20 dark:border-accent/20 p-3 shadow-xl transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {testimonials.map((item) => (
              <article
                key={item.id}
                className="flex w-[85%] sm:w-[70%] md:w-[45%] lg:w-[calc(33.333%-1rem)] shrink-0 snap-start flex-col justify-between rounded-2xl border border-primary/20 dark:border-accent/20 bg-background-light dark:bg-charcoal p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Quote */}
                <blockquote className="text-sm sm:text-base leading-relaxed text-charcoal dark:text-soft-grey ">
                  <span className="text-4xl text-primary dark:text-accent opacity-40 leading-none">
                    &ldquo;
                  </span>
                  {item.quote}
                  <span className="text-4xl text-primary dark:text-accent opacity-40 leading-none">
                    &rdquo;
                  </span>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-primary/10 dark:border-accent/10">
                  <div className="relative shrink-0">
                    <Image
                      alt={item.name}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20 dark:ring-accent/20"
                      src={item.imageUrl}
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-base text-charcoal dark:text-white truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-charcoal/60 dark:text-soft-grey/60 truncate">
                      {item.title}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
