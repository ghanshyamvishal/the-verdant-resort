import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  guestName: string;
  location: string;
  rating: number;
}

export function TestimonialCard({
  quote,
  guestName,
  location,
  rating,
}: TestimonialCardProps) {
  return (
    <article
      className="p-6 rounded-resort-lg relative"
      style={{
        backgroundColor: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      {/* Decorative quote mark */}
      <div
        className="font-accent text-7xl leading-none absolute top-3 left-5 pointer-events-none select-none"
        style={{ color: "var(--color-secondary)", opacity: 0.35 }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            fill={star <= rating ? "var(--color-secondary)" : "transparent"}
            style={{ color: "var(--color-secondary)" }}
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className="font-body text-sm leading-relaxed mb-6 relative z-10"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        "{quote}"
      </p>

      {/* Guest */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-base shrink-0"
          style={{
            backgroundColor: "rgba(212,168,83,0.2)",
            color: "var(--color-secondary)",
          }}
        >
          {guestName.charAt(0)}
        </div>
        <div>
          <p
            className="font-body font-semibold text-sm"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            {guestName}
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {location}
          </p>
        </div>
      </div>
    </article>
  );
}
