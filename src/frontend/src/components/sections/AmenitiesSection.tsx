import { Link } from "@tanstack/react-router";
import { Sparkles, UtensilsCrossed, Waves, Zap } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Button } from "../ResortButton";

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

interface EnhancedAmenityCardProps {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

function EnhancedAmenityCard({
  icon: Icon,
  title,
  description,
  delay,
  isVisible,
}: EnhancedAmenityCardProps) {
  return (
    <div
      className={`card-3d card-shimmer flex gap-4 p-5 rounded-resort-lg group ${
        isVisible ? "animate-zoom-in opacity-init" : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        opacity: isVisible ? undefined : 0,
      }}
    >
      {/* Icon container */}
      <div
        className="icon-glow-ring w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-smooth group-hover:scale-110"
        style={{ backgroundColor: "rgba(45,90,39,0.10)" }}
      >
        <Icon size={20} style={{ color: "var(--color-primary)" }} />
      </div>
      <div className="min-w-0">
        <h4
          className="font-heading font-semibold text-base mb-1"
          style={{ color: "var(--color-text-primary)" }}
        >
          {title}
        </h4>
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text with slideInLeft animation */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <span
              className="font-body font-semibold tracking-[0.25em] text-xs uppercase"
              style={{ color: "var(--color-secondary-dark)" }}
            >
              World-Class Amenities
            </span>
            <h2
              className="font-heading font-bold text-4xl mt-3 mb-5 leading-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              Everything You Need for the Perfect Escape
            </h2>
            {/* Animated golden underline */}
            <span
              className="heading-line block mb-6"
              style={isVisible ? { transform: "scaleX(1)" } : {}}
            />
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
            {/* Floating decorative dots */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="animate-float w-3 h-3 rounded-full"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  animationDelay: "0s",
                }}
              />
              <div
                className="animate-float w-2 h-2 rounded-full"
                style={{
                  backgroundColor: "var(--color-secondary-light)",
                  opacity: 0.7,
                  animationDelay: "0.5s",
                }}
              />
              <div
                className="animate-float w-3 h-3 rounded-full"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  animationDelay: "1s",
                }}
              />
            </div>
            <Link to="/about" data-ocid="amenities.discover_more_button">
              <Button variant="outline" size="md">
                Discover More
              </Button>
            </Link>
          </div>

          {/* Right — 2×2 amenity grid with staggered zoom-in */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {amenities.map((amenity, i) => (
              <EnhancedAmenityCard
                key={amenity.title}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
                delay={i * 150}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
