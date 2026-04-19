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
    desc: "Breathtaking panoramic vistas of the Western Ghats",
  },
  {
    icon: Leaf,
    title: "Forest Retreat",
    desc: "Surrounded by 50 acres of pristine forest",
  },
  {
    icon: Star,
    title: "5-Star Service",
    desc: "Award-winning hospitality since 1985",
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
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 rounded-resort-lg transition-smooth hover:scale-[1.02] hover:shadow-resort-hover"
              style={{
                backgroundColor: "var(--color-bg-card)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(32,51,31,0.10)" }}
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
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span
              className="font-body font-semibold tracking-[0.25em] text-xs uppercase"
              style={{ color: "var(--color-secondary)" }}
            >
              Accommodations
            </span>
            <h2
              className="font-heading font-bold text-4xl mt-2 mb-4"
              style={{ color: "var(--color-text-primary)" }}
            >
              Our Signature Rooms
            </h2>
            <p
              className="font-body text-base max-w-xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Discover our handcrafted accommodations, each designed to immerse
              you in nature's finest luxury
            </p>
          </div>

          {/* Room Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {featuredRooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} index={i} />
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
