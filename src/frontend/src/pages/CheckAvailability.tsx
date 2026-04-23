import { Link } from "@tanstack/react-router";
import {
  BadgePercent,
  BedDouble,
  CheckCircle2,
  ChevronDown,
  Coffee,
  PhoneCall,
  Ruler,
  Shield,
  Tag,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { rooms } from "../data/rooms";
import type { Room, RoomType } from "../data/rooms";

// ─── Types ────────────────────────────────────────────────────────────────────

interface SearchState {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: RoomType | "All";
  promoCode: string;
}

const ROOM_TYPES: Array<RoomType | "All"> = [
  "All",
  "Deluxe",
  "Suite",
  "Villa",
  "Family",
  "Presidential",
];

const BENEFITS = [
  { icon: Shield, label: "Best Rate Guaranteed" },
  { icon: CheckCircle2, label: "Free Cancellation" },
  { icon: Coffee, label: "Complimentary Breakfast" },
  { icon: PhoneCall, label: "24/7 Concierge" },
];

const today = new Date().toISOString().split("T")[0];

function getMinCheckOut(checkIn: string) {
  if (!checkIn) return today;
  const d = new Date(checkIn);
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function nightsBetween(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  const ms = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  return Math.max(0, Math.floor(ms / 86400000));
}

function formatPrice(n: number) {
  return n.toLocaleString("en-IN");
}

// ─── Reusable field label ─────────────────────────────────────────────────────

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-body text-xs font-semibold uppercase tracking-widest"
      style={{ color: "var(--color-text-muted)" }}
    >
      {children}
    </label>
  );
}

// ─── Stepper ──────────────────────────────────────────────────────────────────

function Stepper({
  label,
  stepperLabelId,
  value,
  min,
  max,
  onChange,
  dataOcidBase,
}: {
  label: string;
  stepperLabelId: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  dataOcidBase: string;
}) {
  return (
    <fieldset className="flex flex-col gap-1.5 border-0 p-0 m-0">
      <legend
        id={stepperLabelId}
        className="font-body text-xs font-semibold uppercase tracking-widest float-left w-full"
        style={{ color: "var(--color-text-muted)" }}
      >
        {label}
      </legend>
      <div
        className="flex items-center gap-3 border rounded-lg px-4 py-2.5"
        style={{ borderColor: "rgba(45,90,39,0.2)" }}
      >
        <button
          type="button"
          data-ocid={`${dataOcidBase}.decrement_button`}
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="btn-3d w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg disabled:opacity-30"
          style={{ minHeight: "28px", padding: 0 }}
          aria-label={`Decrease ${label}`}
        >
          −
        </button>
        <span
          className="font-body font-semibold text-base w-6 text-center tabular-nums"
          style={{ color: "var(--color-text-primary)" }}
        >
          {value}
        </span>
        <button
          type="button"
          data-ocid={`${dataOcidBase}.increment_button`}
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="btn-3d w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg disabled:opacity-30"
          style={{ minHeight: "28px", padding: 0 }}
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </fieldset>
  );
}

// ─── Room Result Card ─────────────────────────────────────────────────────────

function RoomResultCard({
  room,
  nights,
  hasDiscount,
  index,
}: {
  room: Room;
  nights: number;
  hasDiscount: boolean;
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const displayPrice = hasDiscount ? Math.round(room.price * 0.9) : room.price;
  const totalPrice = displayPrice * nights;

  return (
    <div
      ref={ref}
      data-ocid={`room_results.item.${index + 1}`}
      className="card-3d card-shimmer rounded-xl overflow-hidden transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
      }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {room.badge && (
          <span
            className="absolute top-3 left-3 font-body text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
            style={{
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-primary-dark)",
            }}
          >
            {room.badge}
          </span>
        )}
        {hasDiscount && (
          <span
            className="absolute top-3 right-3 font-body text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide flex items-center gap-1"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-secondary)",
            }}
          >
            <Tag size={10} />
            10% OFF
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3
            className="font-heading text-xl font-semibold leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            {room.name}
          </h3>
          <p
            className="font-body text-sm mt-1 line-clamp-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {room.description}
          </p>
        </div>

        <div
          className="flex items-center gap-4 text-xs font-body"
          style={{ color: "var(--color-text-muted)" }}
        >
          <span className="flex items-center gap-1">
            <BedDouble size={13} />
            {room.bedType}
          </span>
          <span className="flex items-center gap-1">
            <Ruler size={13} />
            {room.size} sq ft
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} />
            Up to {room.maxGuests}
          </span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              {hasDiscount && (
                <span
                  className="font-body text-sm line-through"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  ₹{formatPrice(room.price)}
                </span>
              )}
              <span
                className="font-heading text-2xl font-bold"
                style={{ color: "var(--color-secondary-dark)" }}
              >
                ₹{formatPrice(displayPrice)}
              </span>
              <span
                className="font-body text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                /night
              </span>
            </div>
            {nights > 0 && (
              <p
                className="font-body text-xs mt-0.5"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {nights} night{nights > 1 ? "s" : ""} ={" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  ₹{formatPrice(totalPrice)}
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          <Link
            to="/rooms/$slug"
            params={{ slug: room.slug }}
            data-ocid={`room_results.view_details_link.${index + 1}`}
            className="btn-3d-outline flex-1 text-center text-sm py-2.5 rounded-lg"
          >
            View Details
          </Link>
          <Link
            to="/contact"
            data-ocid={`room_results.book_now_button.${index + 1}`}
            className="btn-3d-yellow flex-1 text-center text-sm py-2.5 rounded-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Input shared styles ──────────────────────────────────────────────────────

const inputBaseStyle: React.CSSProperties = {
  color: "var(--color-text-primary)",
  backgroundColor: "var(--color-bg-card)",
  borderColor: "rgba(45,90,39,0.2)",
};

// ─── Main Page ────────────────────────────────────────────────────────────────

export function CheckAvailability() {
  const [form, setForm] = useState<SearchState>({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    roomType: "All",
    promoCode: "",
  });
  const [errors, setErrors] = useState<{
    checkIn?: string;
    checkOut?: string;
  }>({});
  const [hasSearched, setHasSearched] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [heroVisible, setHeroVisible] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const set = <K extends keyof SearchState>(key: K, value: SearchState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const hasDiscount = form.promoCode.trim().toUpperCase() === "WELCOME10";

  function validate() {
    const newErrors: { checkIn?: string; checkOut?: string } = {};
    if (!form.checkIn) newErrors.checkIn = "Please select a check-in date.";
    if (!form.checkOut) newErrors.checkOut = "Please select a check-out date.";
    else if (form.checkOut <= form.checkIn)
      newErrors.checkOut = "Check-out must be after check-in.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const totalGuests = form.adults + form.children;
    const result = rooms.filter((r) => {
      const guestOk = r.maxGuests >= totalGuests;
      const typeOk = form.roomType === "All" || r.type === form.roomType;
      return guestOk && typeOk;
    });

    setFilteredRooms(result);
    setHasSearched(true);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  const nights = nightsBetween(form.checkIn, form.checkOut);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      {/* ── Hero Banner ───────────────────────────────────────────── */}
      <section
        data-ocid="check_availability.hero_section"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "45vh" }}
      >
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600"
          alt="Divyam Resorts luxury property"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(45,90,39,0.82)" }}
        />
        {/* Decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F2C94C 0, #F2C94C 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />

        <div
          className="relative z-10 text-center px-4 transition-all duration-700"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p
            className="font-accent text-lg mb-3 tracking-[0.2em] uppercase"
            style={{ color: "var(--color-secondary)" }}
          >
            Divyam Resorts
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Check Availability
          </h1>
          <div className="flex justify-center mb-4">
            <span
              className="block h-0.5 w-24 rounded-full"
              style={{ backgroundColor: "var(--color-secondary)" }}
            />
          </div>
          <p
            className="font-body text-base md:text-lg max-w-md mx-auto"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Find your perfect room at Divyam Resorts
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={26} style={{ color: "var(--color-secondary)" }} />
        </div>
      </section>

      {/* ── Booking Search Form ───────────────────────────────────── */}
      <section
        data-ocid="check_availability.search_section"
        className="relative z-20 px-4 sm:px-6 lg:px-8"
        style={{ marginTop: "-3rem" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="card-glass rounded-2xl p-7 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span
                className="w-1 h-7 rounded-full block"
                style={{ backgroundColor: "var(--color-secondary)" }}
              />
              <h2
                className="font-heading text-2xl md:text-3xl font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Plan Your Stay
              </h2>
            </div>

            <form
              onSubmit={handleSearch}
              data-ocid="check_availability.search_form"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Check-in */}
                <div className="flex flex-col gap-1.5">
                  <FieldLabel htmlFor="check-in">Check-in Date</FieldLabel>
                  <input
                    id="check-in"
                    type="date"
                    data-ocid="check_availability.checkin_input"
                    value={form.checkIn}
                    min={today}
                    onChange={(e) => {
                      set("checkIn", e.target.value);
                      if (form.checkOut && form.checkOut <= e.target.value)
                        set("checkOut", "");
                      setErrors((p) => ({ ...p, checkIn: undefined }));
                    }}
                    className="font-body text-sm rounded-lg border px-4 py-2.5 transition-smooth outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{
                      ...inputBaseStyle,
                      borderColor: errors.checkIn
                        ? "#c0392b"
                        : "rgba(45,90,39,0.2)",
                    }}
                  />
                  {errors.checkIn && (
                    <p
                      data-ocid="check_availability.checkin_field_error"
                      className="font-body text-xs"
                      style={{ color: "#c0392b" }}
                    >
                      {errors.checkIn}
                    </p>
                  )}
                </div>

                {/* Check-out */}
                <div className="flex flex-col gap-1.5">
                  <FieldLabel htmlFor="check-out">Check-out Date</FieldLabel>
                  <input
                    id="check-out"
                    type="date"
                    data-ocid="check_availability.checkout_input"
                    value={form.checkOut}
                    min={getMinCheckOut(form.checkIn)}
                    onChange={(e) => {
                      set("checkOut", e.target.value);
                      setErrors((p) => ({ ...p, checkOut: undefined }));
                    }}
                    className="font-body text-sm rounded-lg border px-4 py-2.5 transition-smooth outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{
                      ...inputBaseStyle,
                      borderColor: errors.checkOut
                        ? "#c0392b"
                        : "rgba(45,90,39,0.2)",
                    }}
                  />
                  {errors.checkOut && (
                    <p
                      data-ocid="check_availability.checkout_field_error"
                      className="font-body text-xs"
                      style={{ color: "#c0392b" }}
                    >
                      {errors.checkOut}
                    </p>
                  )}
                </div>

                {/* Room Type */}
                <div className="flex flex-col gap-1.5">
                  <FieldLabel htmlFor="room-type">Room Type</FieldLabel>
                  <select
                    id="room-type"
                    data-ocid="check_availability.room_type_select"
                    value={form.roomType}
                    onChange={(e) =>
                      set("roomType", e.target.value as RoomType | "All")
                    }
                    className="font-body text-sm rounded-lg border px-4 py-2.5 transition-smooth outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={inputBaseStyle}
                  >
                    {ROOM_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t === "All" ? "All Types" : t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Adults */}
                <Stepper
                  label="Adults"
                  stepperLabelId="adults-label"
                  value={form.adults}
                  min={1}
                  max={10}
                  onChange={(v) => set("adults", v)}
                  dataOcidBase="check_availability.adults"
                />

                {/* Children */}
                <Stepper
                  label="Children"
                  stepperLabelId="children-label"
                  value={form.children}
                  min={0}
                  max={6}
                  onChange={(v) => set("children", v)}
                  dataOcidBase="check_availability.children"
                />

                {/* Promo Code */}
                <div className="flex flex-col gap-1.5">
                  <FieldLabel htmlFor="promo-code">Promo Code</FieldLabel>
                  <div className="relative">
                    <input
                      id="promo-code"
                      type="text"
                      data-ocid="check_availability.promo_code_input"
                      value={form.promoCode}
                      onChange={(e) => set("promoCode", e.target.value)}
                      placeholder="e.g. WELCOME10"
                      className="w-full font-body text-sm rounded-lg border px-4 py-2.5 pr-10 transition-smooth outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      style={{
                        ...inputBaseStyle,
                        borderColor: hasDiscount
                          ? "var(--color-secondary)"
                          : "rgba(45,90,39,0.2)",
                      }}
                    />
                    {hasDiscount && (
                      <BadgePercent
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: "var(--color-secondary-dark)" }}
                      />
                    )}
                  </div>
                  {hasDiscount && (
                    <p
                      className="font-body text-xs flex items-center gap-1"
                      style={{ color: "var(--color-secondary-dark)" }}
                    >
                      <CheckCircle2 size={12} />
                      10% discount applied!
                    </p>
                  )}
                </div>
              </div>

              {/* Submit — 3D yellow push button */}
              <div className="mt-8">
                <button
                  type="submit"
                  data-ocid="check_availability.submit_button"
                  className="btn-3d-yellow w-full font-heading text-base font-semibold py-4 rounded-xl tracking-wide"
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ── Search Results ─────────────────────────────────────────── */}
      <section
        ref={resultsRef}
        data-ocid="check_availability.results_section"
        className="px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          {hasSearched && filteredRooms.length === 0 && (
            <div
              data-ocid="check_availability.results_empty_state"
              className="flex flex-col items-center gap-5 py-20 text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(45,90,39,0.08)" }}
              >
                <BedDouble
                  size={36}
                  style={{ color: "var(--color-primary)" }}
                />
              </div>
              <h3
                className="font-heading text-2xl font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                No Rooms Available
              </h3>
              <p
                className="font-body text-base max-w-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                No rooms match your search criteria. Try adjusting the guest
                count or room type.
              </p>
              <button
                type="button"
                data-ocid="check_availability.reset_button"
                onClick={() => {
                  setHasSearched(false);
                  setForm((p) => ({
                    ...p,
                    adults: 2,
                    children: 0,
                    roomType: "All",
                  }));
                }}
                className="btn-3d-outline font-body font-semibold text-sm px-6 py-3 rounded-lg"
              >
                Modify Search
              </button>
            </div>
          )}

          {hasSearched && filteredRooms.length > 0 && (
            <div>
              <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <h2
                    className="font-heading text-2xl md:text-3xl font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Available Rooms
                  </h2>
                  <p
                    className="font-body text-sm mt-1"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="font-semibold"
                      style={{ color: "var(--color-secondary-dark)" }}
                    >
                      {filteredRooms.length} room
                      {filteredRooms.length !== 1 ? "s" : ""}
                    </span>{" "}
                    available
                    {form.checkIn && form.checkOut
                      ? ` · ${formatDate(form.checkIn)} – ${formatDate(form.checkOut)}`
                      : ""}
                    {nights > 0
                      ? ` · ${nights} night${nights > 1 ? "s" : ""}`
                      : ""}
                  </p>
                </div>
                {hasDiscount && (
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-semibold"
                    style={{
                      backgroundColor: "rgba(242,201,76,0.12)",
                      color: "var(--color-secondary-dark)",
                      border: "1px solid var(--color-secondary)",
                    }}
                  >
                    <BadgePercent size={15} />
                    WELCOME10 — 10% off applied
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRooms.map((room, i) => (
                  <RoomResultCard
                    key={room.slug}
                    room={room}
                    nights={nights}
                    hasDiscount={hasDiscount}
                    index={i}
                  />
                ))}
              </div>
            </div>
          )}

          {!hasSearched && (
            <div
              data-ocid="check_availability.pre_search_hint"
              className="flex flex-col items-center gap-4 py-16 text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(45,90,39,0.06)" }}
              >
                <CheckCircle2
                  size={30}
                  style={{ color: "var(--color-primary)" }}
                />
              </div>
              <p
                className="font-body text-base"
                style={{ color: "var(--color-text-muted)" }}
              >
                Fill in your dates and preferences above, then click{" "}
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Check Availability
                </span>{" "}
                to see available rooms.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Why Book Direct Strip ──────────────────────────────────── */}
      <section
        data-ocid="check_availability.benefits_section"
        className="py-14 px-4"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-center font-accent text-sm uppercase tracking-[0.25em] mb-8"
            style={{ color: "var(--color-secondary)" }}
          >
            Why Book Direct
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {BENEFITS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="icon-glow-ring w-14 h-14 rounded-full flex items-center justify-center transition-smooth group-hover:scale-110"
                  style={{
                    backgroundColor: "rgba(242,201,76,0.15)",
                    border: "1px solid rgba(242,201,76,0.3)",
                  }}
                >
                  <Icon size={22} style={{ color: "var(--color-secondary)" }} />
                </div>
                <p
                  className="font-body text-sm font-medium leading-snug"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
