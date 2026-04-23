import { Star } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const testimonials = [
  {
    quote:
      "An extraordinary experience that surpassed all expectations. The forest views from our suite were simply magical, and the staff made us feel like royalty.",
    guestName: "Priya & Rajesh Sharma",
    location: "Mumbai, India",
    rating: 5,
    float: false,
  },
  {
    quote:
      "Divyam Resorts redefined luxury for us. Every detail — from the organic toiletries to the impeccable service — spoke of true excellence.",
    guestName: "James & Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    float: true,
  },
  {
    quote:
      "We celebrated our anniversary here and it was beyond perfect. The honeymoon suite was breathtaking and the private dining experience was unforgettable.",
    guestName: "Arjun & Meera Nair",
    location: "Bangalore, India",
    rating: 5,
    float: false,
  },
];

interface TestimonialCardInlineProps {
  quote: string;
  guestName: string;
  location: string;
  rating: number;
  floatAnim: boolean;
  isVisible: boolean;
  delay: number;
}

function EnhancedTestimonialCard({
  quote,
  guestName,
  location,
  rating,
  floatAnim,
  isVisible,
  delay,
}: TestimonialCardInlineProps) {
  return (
    <article
      className={`relative p-6 rounded-resort-lg transition-smooth ${
        floatAnim ? "animate-float" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(242,201,76,0.18)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow:
          "0 2px 4px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.10), 0 20px 40px rgba(0,0,0,0.08)",
        transitionDelay: `${delay}ms`,
        transitionDuration: "700ms",
        animationDelay: floatAnim ? `${delay}ms` : "0ms",
      }}
    >
      {/* Giant decorative quote mark background */}
      <div
        className="font-accent absolute top-0 left-3 pointer-events-none select-none leading-none z-0"
        style={{
          fontSize: "9rem",
          color: "var(--color-secondary)",
          opacity: isVisible ? 0.12 : 0,
          transition: "opacity 0.8s ease",
          transitionDelay: `${delay + 200}ms`,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4 relative z-10">
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
        style={{ color: "rgba(255,255,255,0.78)" }}
      >
        "{quote}"
      </p>

      {/* Guest */}
      <div className="flex items-center gap-3 relative z-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-base shrink-0"
          style={{
            backgroundColor: "rgba(242,201,76,0.2)",
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

      {/* Bottom yellow glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-resort-lg"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(242,201,76,0.5), transparent)",
        }}
      />
    </article>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<Element | null>,
  );

  return (
    <section
      ref={ref}
      data-ocid="testimonials.section"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      {/* Subtle radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(45,90,39,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="font-body font-semibold tracking-[0.25em] text-xs uppercase"
            style={{ color: "var(--color-secondary)" }}
          >
            Guest Experiences
          </span>
          <h2
            className="font-heading font-bold text-4xl mt-2 mb-4"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            What Our Guests Say
          </h2>
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Hear from the guests who have experienced the magic of Divyam
            Resorts first-hand
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.guestName} data-ocid={`testimonials.item.${i + 1}`}>
              <EnhancedTestimonialCard
                quote={t.quote}
                guestName={t.guestName}
                location={t.location}
                rating={t.rating}
                floatAnim={t.float}
                isVisible={isVisible}
                delay={200 + i * 150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
