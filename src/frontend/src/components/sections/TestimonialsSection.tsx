import { useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { TestimonialCard } from "../ui/TestimonialCard";

const testimonials = [
  {
    quote:
      "An extraordinary experience that surpassed all expectations. The forest views from our suite were simply magical, and the staff made us feel like royalty.",
    guestName: "Priya & Rajesh Sharma",
    location: "Mumbai, India",
    rating: 5,
  },
  {
    quote:
      "The Verdant Resort redefined luxury for us. Every detail — from the organic toiletries to the impeccable service — spoke of true excellence.",
    guestName: "James & Sarah Mitchell",
    location: "London, UK",
    rating: 5,
  },
  {
    quote:
      "We celebrated our anniversary here and it was beyond perfect. The honeymoon suite was breathtaking and the private dining experience was unforgettable.",
    guestName: "Arjun & Meera Nair",
    location: "Bangalore, India",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(
    ref as React.RefObject<Element | null>,
  );

  return (
    <section
      ref={ref}
      data-ocid="testimonials.section"
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
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
            Hear from the guests who have experienced the magic of The Verdant
            Resort first-hand
          </p>
        </div>

        {/* Cards grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {testimonials.map((t, i) => (
            <div key={t.guestName} data-ocid={`testimonials.item.${i + 1}`}>
              <TestimonialCard
                quote={t.quote}
                guestName={t.guestName}
                location={t.location}
                rating={t.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
