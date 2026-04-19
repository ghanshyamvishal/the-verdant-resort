import { Link } from "@tanstack/react-router";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ResortButton";

interface Slide {
  image: string;
  tag: string;
  heading: string;
  subheading: string;
  ctaPrimary: { label: string; to: string };
  ctaSecondary: { label: string; to: string };
}

const SLIDES: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85",
    tag: "Luxury Redefined",
    heading: "Where Nature\nMeets Luxury",
    subheading:
      "Nestled in the heart of nature, Divyam Resorts offers an unparalleled escape into luxury and tranquility. Experience the perfect harmony of forest, mountain, and five-star service.",
    ctaPrimary: { label: "Explore Rooms", to: "/rooms" },
    ctaSecondary: { label: "Our Story", to: "/about" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=85",
    tag: "Unmatched Serenity",
    heading: "Your Private\nParadise Awaits",
    subheading:
      "Indulge in the finest luxury with private pool villas, panoramic mountain views, and impeccable service tailored to your every desire.",
    ctaPrimary: { label: "View Villas", to: "/rooms" },
    ctaSecondary: { label: "Contact Us", to: "/contact" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=85",
    tag: "Five-Star Experience",
    heading: "Crafted for\nthe Discerning",
    subheading:
      "Every room at Divyam Resorts is a masterpiece — handcrafted interiors, forest-facing balconies, and world-class amenities that redefine what a retreat can be.",
    ctaPrimary: { label: "See Our Rooms", to: "/rooms" },
    ctaSecondary: { label: "About Us", to: "/about" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1540541338537-1220059812ff?w=1920&q=85",
    tag: "Nature's Embrace",
    heading: "50 Acres of\nPristine Forest",
    subheading:
      "Awaken to bird songs, dine under canopies of stars, and rejuvenate with Ayurvedic spa therapies — all wrapped in nature's most magnificent setting.",
    ctaPrimary: { label: "Book Your Stay", to: "/contact" },
    ctaSecondary: { label: "Explore Amenities", to: "/about" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=1920&q=85",
    tag: "Award-Winning Hospitality",
    heading: "35 Years of\nExcellence",
    subheading:
      "A legacy built on care, craftsmanship, and an unwavering commitment to excellence. Join thousands of guests who've called Divyam Resorts their home away from home.",
    ctaPrimary: { label: "Our Heritage", to: "/about" },
    ctaSecondary: { label: "Get in Touch", to: "/contact" },
  },
];

const AUTOPLAY_INTERVAL = 5000;

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 500);
    },
    [isTransitioning],
  );

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % SLIDES.length);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + SLIDES.length) % SLIDES.length);
  }, [currentIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goNext]);

  const scrollDown = () => {
    const next = document.getElementById("welcome-strip");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  const slide = SLIDES[currentIndex];

  return (
    <section
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide backgrounds — crossfade via opacity */}
      {SLIDES.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === currentIndex ? 1 : 0, zIndex: 0 }}
          aria-hidden={i !== currentIndex}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.68) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? "translateY(12px)" : "translateY(0)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {/* Tag line */}
        <span
          className="font-body font-semibold tracking-[0.3em] text-xs uppercase mb-6 px-4 py-1.5 rounded-full"
          style={{
            color: "var(--color-secondary)",
            border: "1px solid rgba(224,177,94,0.4)",
            backgroundColor: "rgba(224,177,94,0.08)",
          }}
        >
          {slide.tag}
        </span>

        {/* Headline */}
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 whitespace-pre-line">
          {slide.heading}
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          style={{ color: "rgba(255,255,255,0.80)" }}
        >
          {slide.subheading}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={slide.ctaPrimary.to} data-ocid="hero.explore_rooms_button">
            <Button variant="filled" size="lg">
              {slide.ctaPrimary.label}
            </Button>
          </Link>
          <Link to={slide.ctaSecondary.to} data-ocid="hero.our_story_button">
            <button
              type="button"
              className="inline-flex items-center justify-center font-body font-semibold px-8 py-4 text-base rounded-resort transition-smooth hover:scale-105 hover:shadow-md"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid rgba(255,255,255,0.7)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.borderColor = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.7)";
              }}
            >
              {slide.ctaSecondary.label}
            </button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        data-ocid="hero.prev_slide_button"
        onClick={goPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-smooth hover:scale-110 focus-visible:ring-2 focus-visible:ring-white"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "rgba(224,177,94,0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "rgba(255,255,255,0.15)";
        }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        data-ocid="hero.next_slide_button"
        onClick={goNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-smooth hover:scale-110 focus-visible:ring-2 focus-visible:ring-white"
        style={{
          backgroundColor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "rgba(224,177,94,0.7)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor =
            "rgba(255,255,255,0.15)";
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot Indicators */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"
        role="tablist"
        aria-label="Slide navigation"
      >
        {SLIDES.map((s, i) => (
          <button
            key={`dot-${s.tag}`}
            type="button"
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to slide ${i + 1}`}
            data-ocid={`hero.dot.${i + 1}`}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1"
            style={{
              width: i === currentIndex ? "28px" : "8px",
              height: "8px",
              backgroundColor:
                i === currentIndex
                  ? "var(--color-secondary)"
                  : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        aria-label="Scroll down"
        onClick={scrollDown}
        data-ocid="hero.scroll_down_button"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow cursor-pointer z-20"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        <span className="font-body text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={22} />
      </button>
    </section>
  );
}
