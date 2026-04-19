import { useRef } from "react";
import { AmenitiesSection } from "../components/sections/AmenitiesSection";
import { CTASection } from "../components/sections/CTASection";
import { FeaturedRooms } from "../components/sections/FeaturedRooms";
import { HeroSection } from "../components/sections/HeroSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { GalleryGrid } from "../components/ui/GalleryGrid";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    alt: "Luxury resort bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    alt: "Private pool villa",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    alt: "Resort aerial view",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    alt: "Resort suite interior",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    alt: "Forest view room",
  },
  {
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    alt: "Mountain suite balcony",
  },
];

function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<Element | null>,
  );

  return (
    <section
      ref={ref}
      data-ocid="gallery.section"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="font-body font-semibold tracking-[0.25em] text-xs uppercase"
            style={{ color: "var(--color-secondary)" }}
          >
            Visual Journey
          </span>
          <h2
            className="font-heading font-bold text-4xl mt-2 mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Resort Gallery
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            A glimpse into the natural beauty and impeccable luxury that awaits
            you at The Verdant Resort
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <GalleryGrid images={galleryImages} />
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <div data-ocid="home.page">
      <HeroSection />
      <FeaturedRooms />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
