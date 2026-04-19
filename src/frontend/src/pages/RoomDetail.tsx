import { Link, useParams } from "@tanstack/react-router";
import {
  Bath,
  BedDouble,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  GlassWater,
  Maximize2,
  Minus,
  Mountain,
  Plus,
  Star,
  Tv,
  Users,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";
import { useState } from "react";
import { RoomCard } from "../components/ui/RoomCard";
import { rooms } from "../data/rooms";

// ─── Amenity icon map ───────────────────────────────────────────────────────
const AMENITY_ICONS: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={20} />,
  AC: <Wind size={20} />,
  Pool: <Waves size={20} />,
  "Private Pool": <Waves size={20} />,
  "Pool View": <Waves size={20} />,
  Minibar: <GlassWater size={20} />,
  TV: <Tv size={20} />,
  Bathtub: <Bath size={20} />,
  Jacuzzi: <Bath size={20} />,
  Balcony: <Mountain size={20} />,
  "Mountain View": <Mountain size={20} />,
  "Forest View": <Mountain size={20} />,
  "Room Service": <Bell size={20} />,
  Butler: <Bell size={20} />,
  Kitchen: <GlassWater size={20} />,
  Champagne: <GlassWater size={20} />,
  "Private Chef": <Bell size={20} />,
  "Cinema Room": <Tv size={20} />,
  "Wine Cellar": <GlassWater size={20} />,
  "Kids Amenities": <Star size={20} />,
  Yard: <Mountain size={20} />,
};

// ─── Policies ────────────────────────────────────────────────────────────────
const POLICIES = [
  {
    id: "checkin",
    title: "Check-in & Check-out",
    content:
      "Check-in: 2:00 PM | Check-out: 11:00 AM. Early check-in and late check-out available upon request (subject to availability, additional charges may apply).",
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    content:
      "Free cancellation up to 48 hours before arrival. Cancellations within 48 hours will be charged one night's stay. No-shows will be charged the full booking amount.",
  },
  {
    id: "pets",
    title: "Pet Policy",
    content:
      "We welcome well-behaved pets in select rooms. Please inform us in advance. A refundable pet deposit of ₹2,000 applies. Pets are not permitted in restaurant or spa areas.",
  },
  {
    id: "smoking",
    title: "Smoking Policy",
    content:
      "Divyam Resorts is entirely non-smoking. Smoking is permitted only in designated outdoor areas. A deep-cleaning fee of ₹5,000 applies for smoking in rooms.",
  },
];

const PERKS = [
  "Free Breakfast Included",
  "Free Cancellation (48hrs)",
  "Free WiFi",
];

// ─── Utility ─────────────────────────────────────────────────────────────────
function calcNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const d1 = new Date(checkIn).getTime();
  const d2 = new Date(checkOut).getTime();
  if (Number.isNaN(d1) || Number.isNaN(d2) || d2 <= d1) return 0;
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

// ─── Component ──────────────────────────────────────────────────────────────
export function RoomDetail() {
  const { slug } = useParams({ from: "/rooms/$slug" });
  const room = rooms.find((r) => r.slug === slug);

  const [selectedImage, setSelectedImage] = useState<string>(
    room?.images[0] ?? "",
  );
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  if (!room) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
        <h1
          className="font-heading text-5xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          Room Not Found
        </h1>
        <p
          className="font-body text-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          The room you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/rooms"
          data-ocid="room_detail.back_to_rooms_link"
          className="px-6 py-3 rounded-resort font-body font-semibold text-sm transition-smooth hover:opacity-90"
          style={{ backgroundColor: "var(--color-primary)", color: "#fff" }}
        >
          ← Browse All Rooms
        </Link>
      </div>
    );
  }

  const nights = calcNights(checkIn, checkOut);
  const total = nights * room.price;
  const similarRooms = rooms.filter((r) => r.slug !== slug).slice(0, 3);
  const today = new Date().toISOString().split("T")[0];
  const descParagraphs = room.longDescription.split("\n\n");

  return (
    <div
      data-ocid="room_detail.page"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      {/* ── SECTION 1: Breadcrumb + Gallery ────────────────────────────── */}
      <section className="pt-8 pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav
          data-ocid="room_detail.breadcrumb"
          className="flex items-center gap-2 font-body text-sm mb-6"
          style={{ color: "var(--color-text-muted)" }}
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="transition-smooth hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="/rooms"
            className="transition-smooth hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            Rooms
          </Link>
          <span>/</span>
          <span>{room.name}</span>
        </nav>

        {/* Main image */}
        <div className="relative rounded-xl overflow-hidden mb-4 w-full h-72 sm:h-96 lg:h-[500px]">
          <img
            src={selectedImage}
            alt={room.name}
            className="w-full h-full object-cover transition-smooth"
          />
          {room.badge && (
            <span
              className="absolute top-4 left-4 px-3 py-1 rounded-full font-body font-semibold text-sm"
              style={{
                backgroundColor:
                  room.badge === "Best Seller"
                    ? "var(--color-secondary)"
                    : "var(--color-primary)",
                color:
                  room.badge === "Best Seller"
                    ? "var(--color-text-primary)"
                    : "#fff",
              }}
            >
              {room.badge}
            </span>
          )}
        </div>

        {/* Thumbnail strip */}
        <div
          data-ocid="room_detail.gallery_thumbnails"
          className="flex gap-3 overflow-x-auto pb-1"
        >
          {room.images.slice(0, 5).map((img, i) => (
            <button
              type="button"
              key={img}
              data-ocid={`room_detail.thumbnail.${i + 1}`}
              onClick={() => setSelectedImage(img)}
              className="shrink-0 rounded-lg overflow-hidden transition-smooth hover:opacity-80 focus:outline-none"
              style={{
                width: 100,
                height: 70,
                border:
                  selectedImage === img
                    ? "2.5px solid var(--color-primary)"
                    : "2.5px solid transparent",
                boxShadow: "var(--shadow-card)",
              }}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={img}
                alt={`${room.name} view ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* ── SECTION 2: Room Info + Booking Card ────────────────────────── */}
      <section
        className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pb-16"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT — Room Info */}
          <div className="flex-1 min-w-0" data-ocid="room_detail.info_panel">
            {/* Room name */}
            <h1
              className="font-heading font-bold text-4xl lg:text-5xl mb-4 leading-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              {room.name}
            </h1>

            {/* Badges row */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span
                className="flex items-center gap-2 px-3 py-1.5 rounded-full font-body text-sm font-medium"
                style={{
                  backgroundColor: "rgba(32,51,31,0.08)",
                  color: "var(--color-primary)",
                }}
              >
                <BedDouble size={15} />
                {room.bedType}
              </span>
              <span
                className="flex items-center gap-2 px-3 py-1.5 rounded-full font-body text-sm font-medium"
                style={{
                  backgroundColor: "rgba(32,51,31,0.08)",
                  color: "var(--color-primary)",
                }}
              >
                <Maximize2 size={15} />
                {room.size} sq ft
              </span>
              <span
                className="flex items-center gap-2 px-3 py-1.5 rounded-full font-body text-sm font-medium"
                style={{
                  backgroundColor: "rgba(32,51,31,0.08)",
                  color: "var(--color-primary)",
                }}
              >
                <Users size={15} />
                Up to {room.maxGuests} Guests
              </span>
            </div>

            {/* Long description */}
            <div className="mb-8 space-y-4">
              {descParagraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="font-body text-base leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Room Features */}
            <div className="mb-8">
              <h2
                className="font-heading text-xl font-semibold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Room Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {room.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities Included */}
            <div className="mb-8">
              <h2
                className="font-heading text-xl font-semibold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Amenities Included
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl text-center transition-smooth hover:scale-105"
                    style={{
                      backgroundColor: "var(--color-bg-card)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <span style={{ color: "var(--color-primary)" }}>
                      {AMENITY_ICONS[amenity] ?? <Star size={20} />}
                    </span>
                    <span
                      className="font-body text-xs font-medium leading-tight"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery strip */}
            <div>
              <h2
                className="font-heading text-xl font-semibold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Photo Gallery
              </h2>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {room.images.map((img, i) => (
                  <button
                    type="button"
                    key={img}
                    onClick={() => {
                      setSelectedImage(img);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="shrink-0 rounded-lg overflow-hidden transition-smooth hover:opacity-80"
                    style={{ width: 140, height: 96 }}
                    aria-label={`Gallery image ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${room.name} gallery ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Sticky Booking Card */}
          <aside
            data-ocid="room_detail.booking_card"
            className="w-full lg:w-96 lg:shrink-0 lg:sticky lg:top-24 self-start"
          >
            <div
              className="rounded-xl p-6"
              style={{
                backgroundColor: "var(--color-bg-card)",
                boxShadow: "var(--shadow-hover)",
              }}
            >
              {/* Price header */}
              <p
                className="font-body text-xs font-medium uppercase tracking-widest mb-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                Starting from
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="font-heading font-bold text-4xl"
                  style={{ color: "var(--color-primary)" }}
                >
                  ₹{room.price.toLocaleString("en-IN")}
                </span>
                <span
                  className="font-body text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  per night
                </span>
              </div>

              <hr
                className="my-4"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              />

              {/* Dates */}
              <div className="space-y-3 mb-4">
                <label className="block">
                  <div
                    className="flex items-center gap-2 font-body text-xs font-semibold mb-1.5 uppercase tracking-wide"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <CalendarDays size={14} />
                    Check-in Date
                  </div>
                  <input
                    type="date"
                    data-ocid="room_detail.checkin_input"
                    value={checkIn}
                    min={today}
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                      if (checkOut && e.target.value >= checkOut)
                        setCheckOut("");
                    }}
                    className="resort-date-input w-full px-3 py-2.5 rounded-resort font-body text-sm outline-none transition-smooth"
                    style={{
                      border: "1.5px solid rgba(0,0,0,0.12)",
                      color: "var(--color-text-primary)",
                      backgroundColor: "var(--color-bg-primary)",
                    }}
                  />
                </label>
                <label className="block">
                  <div
                    className="flex items-center gap-2 font-body text-xs font-semibold mb-1.5 uppercase tracking-wide"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <CalendarDays size={14} />
                    Check-out Date
                  </div>
                  <input
                    type="date"
                    data-ocid="room_detail.checkout_input"
                    value={checkOut}
                    min={checkIn || today}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="resort-date-input w-full px-3 py-2.5 rounded-resort font-body text-sm outline-none transition-smooth"
                    style={{
                      border: "1.5px solid rgba(0,0,0,0.12)",
                      color: "var(--color-text-primary)",
                      backgroundColor: "var(--color-bg-primary)",
                    }}
                  />
                </label>
              </div>

              {/* Guest selector */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-body text-sm font-semibold"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Guests
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    data-ocid="room_detail.guests_minus_button"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    disabled={guests <= 1}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-smooth hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      border: "1.5px solid var(--color-primary)",
                      color: "var(--color-primary)",
                    }}
                    aria-label="Decrease guests"
                  >
                    <Minus size={14} />
                  </button>
                  <span
                    data-ocid="room_detail.guests_count"
                    className="font-heading font-semibold text-lg w-6 text-center"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {guests}
                  </span>
                  <button
                    type="button"
                    data-ocid="room_detail.guests_plus_button"
                    onClick={() =>
                      setGuests((g) => Math.min(room.maxGuests, g + 1))
                    }
                    disabled={guests >= room.maxGuests}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-smooth hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{
                      border: "1.5px solid var(--color-primary)",
                      color: "var(--color-primary)",
                    }}
                    aria-label="Increase guests"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Price calculation */}
              {nights > 0 && (
                <div
                  className="rounded-xl p-4 mb-4"
                  style={{ backgroundColor: "rgba(32,51,31,0.06)" }}
                  data-ocid="room_detail.price_summary"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className="font-body text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {nights} night{nights !== 1 ? "s" : ""} × ₹
                      {room.price.toLocaleString("en-IN")}
                    </span>
                    <span
                      className="font-body text-sm font-medium"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      ₹{total.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <hr
                    style={{ borderColor: "rgba(32,51,31,0.15)" }}
                    className="my-2"
                  />
                  <div className="flex justify-between items-center">
                    <span
                      className="font-heading font-semibold text-base"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Total
                    </span>
                    <span
                      className="font-heading font-bold text-xl"
                      style={{ color: "var(--color-primary)" }}
                    >
                      ₹{total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              )}

              {/* Book Now CTA */}
              <button
                type="button"
                data-ocid="room_detail.book_now_button"
                className="w-full py-3.5 rounded-resort font-body font-semibold text-base transition-smooth hover:opacity-90 hover:shadow-lg active:scale-[0.98] mb-3"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  color: "var(--color-text-primary)",
                }}
              >
                Book Now
              </button>

              <p
                className="font-body text-xs text-center mb-4"
                style={{ color: "var(--color-text-muted)" }}
              >
                or Call to Book:{" "}
                <a
                  href="tel:+919876543210"
                  className="transition-smooth hover:underline font-medium"
                  style={{ color: "var(--color-primary)" }}
                >
                  +91 98765 43210
                </a>
              </p>

              {/* Perks */}
              <div
                className="space-y-2 pt-4"
                style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
              >
                {PERKS.map((perk) => (
                  <div key={perk} className="flex items-center gap-2">
                    <CheckCircle2
                      size={15}
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span
                      className="font-body text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── SECTION 3: Policies Accordion ──────────────────────────────── */}
      <section
        data-ocid="room_detail.policies_section"
        className="py-16 px-4 sm:px-6 lg:px-12"
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-heading text-3xl font-semibold text-center mb-10"
            style={{ color: "var(--color-text-primary)" }}
          >
            Hotel Policies
          </h2>
          <div className="space-y-2">
            {POLICIES.map((policy) => {
              const isOpen = openPolicy === policy.id;
              return (
                <div
                  key={policy.id}
                  data-ocid={`room_detail.policy_${policy.id}`}
                  className="rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenPolicy(isOpen ? null : policy.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left transition-smooth hover:opacity-80"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-heading font-semibold text-base"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {policy.title}
                    </span>
                    <span style={{ color: "var(--color-primary)" }}>
                      {isOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className="px-5 pb-4 font-body text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {policy.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Similar Rooms ────────────────────────────────────── */}
      <section
        data-ocid="room_detail.similar_rooms_section"
        className="py-16 px-4 sm:px-6 lg:px-12"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-heading text-3xl font-semibold text-center mb-2"
            style={{ color: "var(--color-text-primary)" }}
          >
            You May Also Like
          </h2>
          <p
            className="font-accent text-center text-lg mb-10"
            style={{ color: "var(--color-text-muted)" }}
          >
            Discover more luxurious accommodations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {similarRooms.map((r, i) => (
              <RoomCard key={r.slug} room={r} index={i} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/rooms"
              data-ocid="room_detail.view_all_rooms_link"
              className="inline-block px-8 py-3 rounded-resort font-body font-semibold text-sm transition-smooth hover:opacity-90 hover:scale-105"
              style={{
                border: "2px solid var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
