import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Button } from "../ResortButton";

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<Element | null>,
  );

  return (
    <section
      ref={ref}
      data-ocid="cta.section"
      className="relative flex items-center justify-center overflow-hidden min-h-[420px]"
      style={{ minHeight: "420px" }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920"
        alt="Resort pool at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(28,44,30,0.82) 0%, rgba(0,0,0,0.68) 100%)",
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto section-padding transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span
          className="font-body font-semibold tracking-[0.25em] text-xs uppercase mb-4 inline-block"
          style={{ color: "var(--color-secondary)" }}
        >
          Begin Your Journey
        </span>
        <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-5 leading-tight">
          Ready for an Unforgettable Experience?
        </h2>
        <p
          className="font-body text-base md:text-lg mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          Book your stay at The Verdant Resort and discover luxury redefined.
          Immerse yourself in nature's embrace with every comfort at your
          fingertips.
        </p>
        <Link to="/rooms" data-ocid="cta.book_stay_button">
          <Button
            variant="filled"
            size="lg"
            className="shadow-lg hover:shadow-xl"
          >
            Book Your Stay
          </Button>
        </Link>
      </div>
    </section>
  );
}
