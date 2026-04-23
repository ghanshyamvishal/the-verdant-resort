import { Link } from "@tanstack/react-router";
import { Leaf, Mountain, Star } from "lucide-react";
import { useRef } from "react";
import { rooms } from "../../data/rooms";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Button } from "../ResortButton";
import { RoomCard } from "../ui/RoomCard";

const features = [
  {
    icon: Mountain,
    title: "Mountain Views",
    desc: "Breathtaking panoramic vistas of the Himalayas",
    delay: 100,
  },
  {
    icon: Leaf,
    title: "Forest Retreat",
    desc: "Surrounded by 50 acres of pristine forest",
    delay: 300,
  },
  {
    icon: Star,
    title: "5-Star Service",
    desc: "Award-winning hospitality since 1985",
    delay: 500,
  },
];

function WelcomeStrip() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<Element | null>,
  );

  return (
    <section
      id="welcome-strip"
      ref={ref}
      data-ocid="welcome.section"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, delay }) => (
            <div
              key={title}
              className={`card-3d card-shimmer flex flex-col items-center text-center p-8 rounded-resort-lg ${
                isVisible ? "animate-zoom-in opacity-init" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${delay}ms` : "0ms",
                opacity: isVisible ? undefined : 0,
              }}
            >
              <div
                className="icon-glow-ring w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-smooth"
                style={{ backgroundColor: "rgba(45,90,39,0.10)" }}
              >
                <Icon size={28} style={{ color: "var(--color-primary)" }} />
              </div>
              <h3
                className="font-heading font-semibold text-lg mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                {title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Golden divider with center diamond
function GoldenDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div
        className="flex-1 h-px max-w-[120px]"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-secondary))",
        }}
      />
      <div
        className="w-2 h-2 rotate-45"
        style={{ backgroundColor: "var(--color-secondary)" }}
      />
      <div
        className="w-1.5 h-1.5 rotate-45"
        style={{
          backgroundColor: "var(--color-secondary-light)",
          opacity: 0.7,
        }}
      />
      <div
        className="w-2 h-2 rotate-45"
        style={{ backgroundColor: "var(--color-secondary)" }}
      />
      <div
        className="flex-1 h-px max-w-[120px]"
        style={{
          background:
            "linear-gradient(to left, transparent, var(--color-secondary))",
        }}
      />
    </div>
  );
}

export function FeaturedRooms() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<Element | null>,
  );
  const featuredRooms = rooms.slice(0, 3);

  return (
    <>
      <WelcomeStrip />

      <section
        ref={ref}
        data-ocid="featured_rooms.section"
        className="section-padding"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div
            className={`text-center mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span
              className="font-body font-semibold tracking-[0.25em] text-xs uppercase"
              style={{ color: "var(--color-secondary-dark)" }}
            >
              Accommodations
            </span>
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2
                className="font-heading font-bold text-4xl mt-2 mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                Our Signature Rooms
              </h2>
            </div>
            <p
              className="font-body text-base max-w-xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Discover our handcrafted accommodations, each designed to immerse
              you in nature's finest luxury
            </p>
          </div>

          {/* Golden decorative divider */}
          <GoldenDivider />

          {/* Room Grid — staggered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredRooms.map((room, i) => (
              <div
                key={room.slug}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + i * 150}ms` : "0ms",
                }}
              >
                <RoomCard room={room} index={i} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Link to="/rooms" data-ocid="featured_rooms.view_all_button">
              <Button variant="filled" size="lg">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
