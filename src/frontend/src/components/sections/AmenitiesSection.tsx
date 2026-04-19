import { Link } from "@tanstack/react-router";
import { Sparkles, UtensilsCrossed, Waves, Zap } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Button } from "../ResortButton";
import { AmenityCard } from "../ui/AmenityCard";

const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Perched at 3,000ft elevation with panoramic mountain views",
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness",
    description: "Full-service spa with traditional Ayurvedic treatments",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Farm-to-table cuisine featuring local seasonal ingredients",
  },
  {
    icon: Zap,
    title: "Adventure Sports",
    description: "Trekking, zip-lining, rock climbing, and white-water rafting",
  },
] as const;

export function AmenitiesSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<Element | null>,
  );

  return (
    <section
      ref={ref}
      data-ocid="amenities.section"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left — text */}
          <div>
            <span
              className="font-body font-semibold tracking-[0.25em] text-xs uppercase"
              style={{ color: "var(--color-secondary)" }}
            >
              World-Class Amenities
            </span>
            <h2
              className="font-heading font-bold text-4xl mt-3 mb-5 leading-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              Everything You Need for the Perfect Escape
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              From sunrise yoga on our mountain terrace to late-night stargazing
              by the campfire, Divyam Resorts offers a curated collection of
              world-class amenities designed to nourish your body, mind, and
              spirit. Every experience is crafted with care so you leave feeling
              truly restored.
            </p>
            <Link to="/about" data-ocid="amenities.discover_more_button">
              <Button variant="outline" size="md">
                Discover More
              </Button>
            </Link>
          </div>

          {/* Right — 2×2 amenity grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {amenities.map((amenity) => (
              <AmenityCard
                key={amenity.title}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
