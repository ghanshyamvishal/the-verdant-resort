import { useCallback, useEffect, useRef, useState } from "react";
import { AmenitiesSection } from "../components/sections/AmenitiesSection";
import { CTASection } from "../components/sections/CTASection";
import { FeaturedRooms } from "../components/sections/FeaturedRooms";
import { HeroSection } from "../components/sections/HeroSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { GalleryGrid } from "../components/ui/GalleryGrid";
import type { GalleryImage } from "../components/ui/GalleryGrid";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export { GalleryGrid };

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    alt: "Luxury suite bedroom",
    title: "Luxury Suite Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    alt: "Private pool villa",
    title: "Private Pool Villa",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    alt: "Resort aerial view",
    title: "Resort Aerial View",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    alt: "Luxury pool at sunset",
    title: "Infinity Pool at Sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    alt: "Spa treatment room",
    title: "Signature Spa Treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    alt: "Mountain suite balcony",
    title: "Mountain Suite Balcony",
  },
];

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [imgKey, setImgKey] = useState(currentIndex);
  const touchStartX = useRef<number>(0);

  // Fade-in on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  // Update imgKey when navigating to trigger image re-animation
  useEffect(() => {
    setImgKey(currentIndex);
  }, [currentIndex]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onPrev, onNext, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? 0;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0]?.clientX ?? 0;
    const delta = touchStartX.current - endX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? onNext() : onPrev();
    }
  };

  const image = images[currentIndex];

  return (
    <div
      data-ocid="gallery.dialog"
      aria-label="Image lightbox"
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      style={{
        backgroundColor: `rgba(0,0,0,${isVisible ? 0.92 : 0})`,
        backdropFilter: isVisible ? "blur(4px)" : "none",
        transition: "background-color 0.25s ease, backdrop-filter 0.25s ease",
      }}
      onClick={handleOverlayClick}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        type="button"
        data-ocid="gallery.close_button"
        aria-label="Close lightbox"
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center z-10"
        style={{
          backgroundColor: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#ffffff",
          transition: "background-color 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "rgba(255,255,255,0.28)";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "rgba(255,255,255,0.12)";
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
        }}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev button */}
      <button
        type="button"
        data-ocid="gallery.pagination_prev"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-10"
        style={{
          backgroundColor: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#ffffff",
          transition: "background-color 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "rgba(255,255,255,0.28)";
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-50%) scale(1.05)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "rgba(255,255,255,0.12)";
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-50%) scale(1)";
        }}
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative flex flex-col items-center px-16 md:px-20"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="presentation"
      >
        <img
          key={imgKey}
          src={image?.src}
          alt={image?.alt ?? "Gallery image"}
          style={{
            maxWidth: "90vw",
            maxHeight: "80vh",
            objectFit: "contain",
            borderRadius: "0.75rem",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            animation:
              "lightbox-zoom-in 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",
          }}
        />
        {/* Caption */}
        {image?.title && (
          <div
            className="mt-4 text-center"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {image.title}
          </div>
        )}
      </div>

      {/* Next button */}
      <button
        type="button"
        data-ocid="gallery.pagination_next"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-10"
        style={{
          backgroundColor: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#ffffff",
          transition: "background-color 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "rgba(255,255,255,0.28)";
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-50%) scale(1.05)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "rgba(255,255,255,0.12)";
          (e.currentTarget as HTMLButtonElement).style.transform =
            "translateY(-50%) scale(1)";
        }}
      >
        <svg
          aria-hidden="true"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Image counter */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "rgba(255,255,255,0.85)",
          fontFamily: "var(--font-body)",
          fontSize: "0.8rem",
          letterSpacing: "0.1em",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

// ─── Gallery Section ──────────────────────────────────────────────────────────

function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<Element | null>,
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes lightbox-zoom-in {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <section
        ref={ref}
        data-ocid="gallery.section"
        className="section-padding"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span
              className="font-body font-semibold tracking-[0.25em] text-xs uppercase"
              style={{ color: "var(--color-secondary-dark)" }}
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
              A glimpse into the natural beauty and impeccable luxury that
              awaits you at Divyam Resorts
            </p>
          </div>

          {/* Gallery grid */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <GalleryGrid images={galleryImages} onImageClick={openLightbox} />
          </div>
        </div>
      </section>

      {/* Lightbox Portal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
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
