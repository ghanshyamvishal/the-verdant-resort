import { Link } from "@tanstack/react-router";
import { Crown, Heart, Leaf, Trophy } from "lucide-react";
import { useRef } from "react";
import { Button } from "../components/ResortButton";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

// ─── Data ──────────────────────────────────────────────────────────────────

const stats = [
  { value: "35+", label: "Years of Excellence" },
  { value: "120", label: "Luxury Rooms" },
  { value: "50,000+", label: "Happy Guests" },
  { value: "15", label: "Awards Won" },
];

const team = [
  {
    name: "Vikram Verdant",
    role: "General Manager",
    bio: "With 20 years in luxury hospitality, Vikram leads with passion and precision.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    name: "Chef Ananya Krishnan",
    role: "Head Chef",
    bio: "Ananya blends traditional South Indian flavors with contemporary French techniques.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    name: "Dr. Priya Menon",
    role: "Spa Director",
    bio: "Certified in Ayurvedic medicine, Priya creates transformative wellness journeys.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "Rahul Sharma",
    role: "Activities Director",
    bio: "An adventure enthusiast who designs experiences from forest treks to stargazing events.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We operate with deep respect for the environment, from solar energy to zero-waste kitchen practices and organic farming.",
  },
  {
    icon: Crown,
    title: "Luxury",
    description:
      "Every touchpoint is crafted to exceed expectations — from handmade amenities to personalized butler service.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "We employ over 200 local staff and source 80% of our produce from local farmers, investing in our community.",
  },
];

const awards = [
  { year: "2023", title: "Best Luxury Resort", org: "India Travel Awards" },
  {
    year: "2022",
    title: "Eco-Friendly Resort of the Year",
    org: "Green Hospitality Summit",
  },
  {
    year: "2021",
    title: "Top 10 Honeymoon Destinations",
    org: "Travel + Leisure",
  },
  { year: "2019", title: "Culinary Excellence Award", org: "Gourmet India" },
];

// ─── Section wrapper with fade-in animation ────────────────────────────────

function FadeSection({
  children,
  className = "",
  style,
  "data-ocid": dataOcid,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "data-ocid"?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref as React.RefObject<Element>, {
    threshold: 0.1,
  });
  return (
    <section
      ref={ref}
      data-ocid={dataOcid}
      style={style}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export function About() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div
        data-ocid="about.hero"
        className="relative flex flex-col justify-center items-center text-center px-4"
        style={{ minHeight: "420px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920"
          alt="The Verdant Resort"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 z-10">
          <nav aria-label="Breadcrumb">
            <ol
              className="flex items-center gap-2 text-xs font-body"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li style={{ color: "rgba(255,255,255,0.4)" }}>/</li>
              <li style={{ color: "rgba(255,255,255,0.9)" }}>About</li>
            </ol>
          </nav>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1
            className="font-heading font-bold leading-tight"
            style={{ color: "#fff", fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}
          >
            Our Story
          </h1>
          <p
            className="font-body text-lg md:text-xl max-w-lg"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            A Legacy of Luxury Since 1985
          </p>
        </div>
      </div>

      {/* ── Story ────────────────────────────────────────────────────── */}
      <FadeSection className="section-padding bg-resort-primary px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-resort-hover">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
              alt="Resort heritage"
              className="w-full h-full object-cover transition-smooth hover:scale-105"
              style={{ minHeight: "320px" }}
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <span
              className="text-xs font-body font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--color-secondary)" }}
            >
              Our Heritage
            </span>
            <h2
              className="font-heading font-bold leading-snug"
              style={{
                color: "var(--color-text-primary)",
                fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
              }}
            >
              Four Decades of Crafting Unforgettable Experiences
            </h2>
            <p
              className="font-body leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Founded in 1985 by the Verdant family, our resort began as a
              vision to create a sanctuary where the boundaries between luxury
              and nature dissolve. Nestled in 50 acres of pristine forest in the
              Nilgiri Hills, we have spent four decades perfecting the art of
              hospitality.
            </p>
            <p
              className="font-body leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Our philosophy is simple: every guest deserves an experience that
              rejuvenates the soul, stimulates the senses, and creates memories
              that last a lifetime. From our farm-to-table cuisine to our forest
              spa treatments, every detail is crafted with intention and care.
            </p>
            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href="/rooms"
                data-ocid="about.explore_rooms_button"
              >
                Explore Our Rooms
              </Button>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ── Stats Bar ────────────────────────────────────────────────── */}
      <FadeSection
        data-ocid="about.stats"
        className="py-12 px-4 md:px-8"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1"
              data-ocid={`about.stat.${stats.indexOf(stat) + 1}`}
            >
              <span
                className="font-heading font-bold"
                style={{
                  color: "var(--color-secondary)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                }}
              >
                {stat.value}
              </span>
              <span
                className="font-body text-sm"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ── Team ─────────────────────────────────────────────────────── */}
      <FadeSection
        className="section-padding bg-resort-secondary px-4 md:px-8"
        data-ocid="about.team"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-heading font-bold text-4xl mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              Meet Our Team
            </h2>
            <p
              className="font-body max-w-lg mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The passionate individuals behind every unforgettable moment at
              The Verdant Resort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                data-ocid={`about.team_card.${i + 1}`}
                className="bg-resort-card rounded-xl p-6 flex flex-col items-center text-center shadow-resort-card transition-smooth hover:scale-105 hover:shadow-resort-hover"
              >
                <div
                  className="w-32 h-32 rounded-full overflow-hidden mb-4"
                  style={{
                    outline: "2px solid var(--color-secondary)",
                    outlineOffset: "2px",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3
                  className="font-heading font-semibold text-lg mb-1"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {member.name}
                </h3>
                <span
                  className="font-body text-sm font-medium mb-3"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {member.role}
                </span>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── Values ───────────────────────────────────────────────────── */}
      <FadeSection
        className="section-padding bg-resort-primary px-4 md:px-8"
        data-ocid="about.values"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-heading font-bold text-4xl mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              Our Core Values
            </h2>
            <p
              className="font-body max-w-lg mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Principles that guide every decision, every detail, every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  data-ocid={`about.value_card.${i + 1}`}
                  className="bg-resort-card rounded-xl p-8 flex flex-col items-center text-center shadow-resort-card transition-smooth hover:shadow-resort-hover hover:scale-105"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <Icon size={24} color="#fff" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="font-heading font-semibold text-xl mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </FadeSection>

      {/* ── Awards ───────────────────────────────────────────────────── */}
      <FadeSection
        className="section-padding bg-resort-secondary px-4 md:px-8"
        data-ocid="about.awards"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-heading font-bold text-4xl mb-3"
              style={{ color: "var(--color-text-primary)" }}
            >
              Awards &amp; Recognition
            </h2>
            <p
              className="font-body max-w-lg mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Industry accolades that reflect our unwavering commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, awardIdx) => (
              <div
                key={`${award.year}-${award.org}`}
                data-ocid={`about.award_card.${awardIdx + 1}`}
                className="bg-resort-card rounded-xl p-6 flex flex-col items-center text-center transition-smooth hover:scale-105 hover:shadow-resort-hover"
                style={{
                  border: "1.5px solid var(--color-secondary)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(212,168,83,0.12)" }}
                >
                  <Trophy
                    size={22}
                    style={{ color: "var(--color-secondary)" }}
                    strokeWidth={1.5}
                  />
                </div>
                <span
                  className="font-body text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {award.year}
                </span>
                <h3
                  className="font-heading font-semibold text-base leading-tight mb-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {award.title}
                </h3>
                <p
                  className="font-body text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {award.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>
    </div>
  );
}
