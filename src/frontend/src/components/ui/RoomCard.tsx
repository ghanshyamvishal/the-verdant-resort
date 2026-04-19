import { Link } from "@tanstack/react-router";
import { AirVent, Mountain, Users, Wifi } from "lucide-react";
import type { Room } from "../../data/rooms";

interface RoomCardProps {
  room: Room;
  index?: number;
}

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi size={14} />,
  AC: <AirVent size={14} />,
  "Forest View": <Mountain size={14} />,
  "Mountain View": <Mountain size={14} />,
  "Pool View": <Mountain size={14} />,
};

const TOP_AMENITIES = [
  "WiFi",
  "AC",
  "Forest View",
  "Mountain View",
  "Pool View",
];

export function RoomCard({ room, index = 0 }: RoomCardProps) {
  const displayAmenities = room.amenities
    .filter((a) => TOP_AMENITIES.includes(a))
    .slice(0, 3);
  if (displayAmenities.length < 3) {
    const extras = room.amenities
      .filter((a) => !TOP_AMENITIES.includes(a))
      .slice(0, 3 - displayAmenities.length);
    for (const a of extras) {
      displayAmenities.push(a);
    }
  }

  return (
    <article
      data-ocid={`rooms.item.${index + 1}`}
      className="group rounded-resort-lg overflow-hidden transition-smooth hover:scale-[1.02] cursor-pointer"
      style={{
        backgroundColor: "var(--color-bg-card)",
        boxShadow: "var(--shadow-card)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "var(--shadow-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card)";
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)",
          }}
        />
        {room.badge && (
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full font-body font-semibold text-xs"
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

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-heading font-semibold text-lg leading-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            {room.name}
          </h3>
          <span
            className="px-2 py-0.5 rounded-full font-body text-xs font-medium shrink-0"
            style={{
              backgroundColor: "rgba(44,95,46,0.08)",
              color: "var(--color-primary)",
            }}
          >
            {room.type}
          </span>
        </div>

        <p
          className="font-body text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {room.description}
        </p>

        {/* Amenity Icons */}
        <div className="flex gap-3 mb-4">
          {displayAmenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-1.5"
              style={{ color: "var(--color-text-muted)" }}
            >
              {amenityIcons[amenity] ?? <Wifi size={14} />}
              <span className="font-body text-xs">{amenity}</span>
            </div>
          ))}
        </div>

        {/* Room Meta */}
        <div
          className="flex items-center gap-4 pb-4 mb-4"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
        >
          <div
            className="flex items-center gap-1.5"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Users size={13} />
            <span className="font-body text-xs">Up to {room.maxGuests}</span>
          </div>
          <span
            className="font-body text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            {room.bedType}
          </span>
          <span
            className="font-body text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            {room.size} sq ft
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span
              className="font-body text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              From
            </span>
            <div className="flex items-baseline gap-1">
              <span
                className="font-heading font-bold text-xl"
                style={{ color: "var(--color-primary)" }}
              >
                ₹{room.price.toLocaleString("en-IN")}
              </span>
              <span
                className="font-body text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                / night
              </span>
            </div>
          </div>
          <Link
            to="/rooms/$slug"
            params={{ slug: room.slug }}
            data-ocid={`rooms.view_details_button.${index + 1}`}
            className="px-4 py-2 rounded-resort font-body font-semibold text-sm transition-smooth hover:opacity-90 hover:shadow-md hover:scale-105"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#fff",
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
