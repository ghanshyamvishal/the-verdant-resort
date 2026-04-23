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
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "460px" }}
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920"
        alt="Resort pool at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background:
            "linear-gradient(135deg, rgba(45,90,39,0.88) 0%, rgba(0,0,0,0.72) 50%, rgba(45,90,39,0.80) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Pulsing radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(242,201,76,0.12) 0%, transparent 65%)",
          animation: "gradientShift 5s ease infinite",
        }}
        aria-hidden="true"
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
        <h2
          className="font-heading font-bold text-4xl lg:text-5xl text-white mb-5 leading-tight"
          style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
        >
          Ready for an Unforgettable Experience?
        </h2>
        <p
          className="font-body text-base md:text-lg mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.78)" }}
        >
          Book your stay at Divyam Resorts and discover luxury redefined.
          Immerse yourself in nature's embrace with every comfort at your
          fingertips.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/check-availability" data-ocid="cta.book_stay_button">
            <Button variant="yellow" size="lg" className="shadow-lg">
              Check Availability
            </Button>
          </Link>
          <Link to="/rooms" data-ocid="cta.view_rooms_button">
            <button
              type="button"
              className="inline-flex items-center justify-center font-body font-semibold px-8 py-4 text-base rounded-resort transition-smooth"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid rgba(255,255,255,0.6)",
                minHeight: "48px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.6)";
              }}
            >
              Explore Rooms
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
