import { useState } from "react";
import { RoomCard } from "../components/ui/RoomCard";
import { rooms } from "../data/rooms";
import type { RoomType } from "../data/rooms";

type FilterOption = RoomType | "All";

const FILTER_OPTIONS: FilterOption[] = [
  "All",
  "Deluxe",
  "Suite",
  "Villa",
  "Family",
  "Presidential",
];

export function Rooms() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filteredRooms =
    activeFilter === "All"
      ? rooms
      : rooms.filter((r) => r.type === activeFilter);

  function handleFilterChange(filter: FilterOption) {
    if (filter === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsTransitioning(false);
    }, 200);
  }

  return (
    <main data-ocid="rooms.page">
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        data-ocid="rooms.hero.section"
        className="relative flex items-center justify-center"
        style={{ minHeight: "350px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920"
          alt="Luxury resort aerial view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
          <nav
            className="flex items-center gap-2 font-body text-sm"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <a
              href="/"
              className="hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <span>/</span>
            <span style={{ color: "var(--color-secondary)" }}>
              Rooms &amp; Suites
            </span>
          </nav>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 py-20">
          <p
            className="font-accent text-sm tracking-widest uppercase mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            Divyam Resorts
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
            Our Rooms &amp; Suites
          </h1>
          <p
            className="font-body text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Six unique sanctuaries, each crafted to offer a different
            perspective of nature's grandeur.
          </p>
        </div>
      </section>

      {/* ── FILTER + GRID ─────────────────────────────────────────────── */}
      <section
        data-ocid="rooms.listing.section"
        className="py-16 px-4 sm:px-6"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Filter bar */}
          <div
            data-ocid="rooms.filter.bar"
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {FILTER_OPTIONS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  data-ocid="rooms.filter.tab"
                  aria-pressed={isActive}
                  type="button"
                  onClick={() => handleFilterChange(filter)}
                  className="px-5 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={
                    isActive
                      ? {
                          backgroundColor: "var(--color-primary)",
                          color: "#ffffff",
                          border: "2px solid var(--color-primary)",
                          boxShadow:
                            "0 4px 0 #1a3517, 0 6px 12px rgba(45,90,39,0.3)",
                        }
                      : {
                          backgroundColor: "var(--color-bg-card)",
                          color: "var(--color-primary)",
                          border: "2px solid var(--color-primary)",
                        }
                  }
                >
                  {filter === "All" ? "All Rooms" : filter}
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <p
            className="text-center font-body text-sm mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            Showing{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              {filteredRooms.length}
            </span>{" "}
            {filteredRooms.length === 1 ? "room" : "rooms"}
            {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
          </p>

          {/* Rooms grid */}
          <div
            data-ocid="rooms.grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              minHeight: "480px",
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.2s ease",
            }}
          >
            {filteredRooms.map((room, index) => (
              <RoomCard key={room.slug} room={room} index={index} />
            ))}
          </div>

          {/* Empty state */}
          {filteredRooms.length === 0 && (
            <div
              data-ocid="rooms.empty_state"
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <p
                className="font-heading text-2xl mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                No rooms found
              </p>
              <p
                className="font-body text-sm mb-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                Try a different filter to explore our accommodations.
              </p>
              <button
                type="button"
                onClick={() => handleFilterChange("All")}
                className="btn-3d px-6 py-2.5 text-sm rounded-full"
              >
                View All Rooms
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ──────────────────────────────────────────────────── */}
      <section
        data-ocid="rooms.cta.section"
        className="py-14 px-4 sm:px-6 text-center"
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <p
          className="font-accent text-sm tracking-widest uppercase mb-3"
          style={{ color: "var(--color-secondary-dark)" }}
        >
          Can't decide?
        </p>
        <h2
          className="font-heading font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "var(--color-text-primary)" }}
        >
          Let Our Concierge Guide You
        </h2>
        <p
          className="font-body text-base mb-8 max-w-md mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Our team is available around the clock to help you find the perfect
          sanctuary for your stay.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            data-ocid="rooms.contact_cta.primary_button"
            className="btn-3d-yellow inline-block px-8 py-3 rounded-full text-sm font-bold"
          >
            Contact Concierge
          </a>
          <a
            href="tel:+911800123456"
            data-ocid="rooms.call_cta.secondary_button"
            className="btn-3d-outline inline-block px-8 py-3 rounded-full text-sm font-semibold"
          >
            Call +91 1800 123 456
          </a>
        </div>
      </section>
    </main>
  );
}
