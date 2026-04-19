import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Button } from "../ResortButton";

export function HeroSection() {
  const scrollDown = () => {
    const next = document.getElementById("welcome-strip");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920"
        alt="The Verdant Resort aerial view"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Tag line */}
        <span
          className="font-body font-semibold tracking-[0.3em] text-xs uppercase mb-6 px-4 py-1.5 rounded-full"
          style={{
            color: "var(--color-secondary)",
            border: "1px solid rgba(212,168,83,0.4)",
            backgroundColor: "rgba(212,168,83,0.08)",
          }}
        >
          Luxury Redefined
        </span>

        {/* Headline */}
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Where Nature
          <br />
          Meets Luxury
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          style={{ color: "rgba(255,255,255,0.80)" }}
        >
          Nestled in the heart of nature, The Verdant Resort offers an
          unparalleled escape into luxury and tranquility. Experience the
          perfect harmony of forest, mountain, and five-star service.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/rooms" data-ocid="hero.explore_rooms_button">
            <Button variant="filled" size="lg">
              Explore Rooms
            </Button>
          </Link>
          <Link to="/about" data-ocid="hero.our_story_button">
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
              Our Story
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        aria-label="Scroll down"
        onClick={scrollDown}
        data-ocid="hero.scroll_down_button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow cursor-pointer"
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
