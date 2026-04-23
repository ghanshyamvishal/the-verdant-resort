import { useEffect, useRef, useState } from "react";

/* ─── Types ──────────────────────────────────────────────── */
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

/* ─── Inline SVG Icons ───────────────────────────────────── */
function PhoneIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8l10 6 10-6" />
    </svg>
  );
}

function MapPinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/* Facebook, Instagram, Twitter — brand-style SVGs */
function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

/* ─── Contact Info Cards Data ────────────────────────────── */
const infoCards = [
  {
    icon: PhoneIcon,
    title: "Call Us",
    primary: "+91 98765 43210",
    secondary: "+91 11 2345 6789",
    ocid: "contact.phone_card",
  },
  {
    icon: MailIcon,
    title: "Email Us",
    primary: "reservations@divyamresorts.com",
    secondary: "info@divyamresorts.com",
    ocid: "contact.email_card",
  },
  {
    icon: MapPinIcon,
    title: "Find Us",
    primary: "Rishikesh, Uttarakhand",
    secondary: "Near Ram Jhula, 249201",
    ocid: "contact.location_card",
  },
  {
    icon: ClockIcon,
    title: "Open Hours",
    primary: "Mon–Sat: 9:00 AM – 8:00 PM",
    secondary: "Sun: 10:00 AM – 6:00 PM",
    ocid: "contact.hours_card",
  },
];

/* ─── Validation ──────────────────────────────────────────── */
function validate(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.email.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email address.";
  if (!form.subject) errors.subject = "Please select a subject.";
  if (!form.message.trim()) errors.message = "Message cannot be empty.";
  return errors;
}

/* ─── Animated Heading with golden line ──────────────────── */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lineRef.current) {
          lineRef.current.classList.add("visible");
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="font-accent text-sm uppercase tracking-widest mb-3"
          style={{ color: "var(--color-secondary)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-heading text-3xl md:text-4xl font-bold"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h2>
      <span
        ref={lineRef}
        className="heading-line"
        style={{
          maxWidth: center ? "80px" : "80px",
          margin: center ? "0 auto" : "0",
        }}
      />
      {subtitle && (
        <p
          className="font-body mt-4 text-base leading-relaxed"
          style={{
            color: "var(--color-text-secondary)",
            maxWidth: "520px",
            ...(center ? { margin: "1rem auto 0" } : {}),
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Info Card Component ────────────────────────────────── */
function InfoCard({
  icon: Icon,
  title,
  primary,
  secondary,
  ocid,
  delay,
}: {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  primary: string;
  secondary: string;
  ocid: string;
  delay: number;
}) {
  return (
    <div
      data-ocid={ocid}
      className="card-3d card-shimmer flex flex-col items-center text-center p-8 rounded-2xl opacity-init fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
        borderRadius: "var(--border-radius-lg)",
        cursor: "default",
      }}
    >
      {/* Icon badge */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5 icon-glow-ring"
        style={{
          background:
            "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)",
          color: "var(--color-primary-dark)",
          flexShrink: 0,
        }}
      >
        <Icon size={26} />
      </div>

      <h3
        className="font-heading text-xl font-bold mb-3"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h3>

      <p
        className="font-body text-sm font-semibold mb-1 break-words w-full"
        style={{ color: "var(--color-text-primary)" }}
      >
        {primary}
      </p>
      <p
        className="font-body text-sm break-words w-full"
        style={{ color: "var(--color-text-muted)" }}
      >
        {secondary}
      </p>
    </div>
  );
}

/* ─── Main Contact Page ──────────────────────────────────── */
export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      const updated = { ...form, [name]: value };
      const newErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: newErrors[name as keyof FormErrors],
      }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({
      ...prev,
      [name]: newErrors[name as keyof FormErrors],
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({ fullName: true, email: true, subject: true, message: true });
    if (Object.keys(newErrors).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
      setTouched({});
    }, 1200);
  }

  const inputBase: React.CSSProperties = {
    backgroundColor: "var(--color-bg-card)",
    color: "var(--color-text-primary)",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  function fieldClass(hasError: boolean) {
    return `w-full px-4 py-3 rounded-xl text-sm outline-none transition-smooth ${
      hasError
        ? "border-2 border-red-500"
        : "border border-opacity-20 focus:border-yellow-500 focus:shadow-sm"
    }`;
  }

  return (
    <div className="flex flex-col">
      {/* ── SECTION 1: HERO ──────────────────────────────── */}
      <section
        data-ocid="contact.hero_section"
        className="relative flex items-center justify-center text-center"
        style={{
          minHeight: "420px",
          background:
            "linear-gradient(135deg, #20331f 0%, var(--color-primary) 60%, #1a3517 100%)",
        }}
      >
        {/* Decorative floating orbs */}
        <div
          className="absolute top-8 left-12 w-32 h-32 rounded-full opacity-10 animate-float"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary), transparent)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute bottom-8 right-16 w-48 h-48 rounded-full opacity-10 animate-float-rev"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary), transparent)",
            filter: "blur(28px)",
          }}
        />

        <div className="relative z-10 px-6 fade-in-up">
          <p
            className="font-accent text-sm uppercase tracking-widest mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            Divyam Resorts — Rishikesh
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Get In Touch
          </h1>
          {/* Gold accent line */}
          <div
            className="mx-auto mb-6 animate-draw-line"
            style={{
              width: "80px",
              height: "3px",
              borderRadius: "2px",
              background:
                "linear-gradient(90deg, var(--color-secondary), var(--color-secondary-light))",
            }}
          />
          <p
            className="font-body text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            We'd love to hear from you. Reach out for reservations, inquiries,
            or just to say hello.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: INFO CARDS ────────────────────────── */}
      <section
        data-ocid="contact.info_cards_section"
        className="section-padding px-4 md:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Contact Details"
            title="How to Reach Us"
            subtitle="Multiple ways to connect with our team — choose what's most convenient for you."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, i) => (
              <InfoCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                primary={card.primary}
                secondary={card.secondary}
                ocid={card.ocid}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FORM + MAP ────────────────────────── */}
      <section
        data-ocid="contact.form_section"
        className="section-padding px-4 md:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            {/* LEFT: CONTACT FORM CARD */}
            <div
              className="card-glass rounded-2xl overflow-hidden animate-slide-in-left opacity-init"
              style={{ borderRadius: "var(--border-radius-lg)" }}
            >
              {/* Card header bar */}
              <div
                className="px-8 py-6"
                style={{
                  background:
                    "linear-gradient(135deg, #20331f 0%, var(--color-primary) 100%)",
                }}
              >
                <h2 className="font-heading text-2xl font-bold text-white mb-1">
                  Send Us a Message
                </h2>
                <p
                  className="font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  We'll respond within 24 hours
                </p>
              </div>

              <div className="px-8 py-8">
                {submitted ? (
                  <div
                    data-ocid="contact.success_state"
                    className="flex flex-col items-center text-center py-10 animate-zoom-in"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%)",
                        color: "var(--color-primary-dark)",
                      }}
                    >
                      <CheckCircleIcon />
                    </div>
                    <h3
                      className="font-heading text-2xl font-bold mb-3"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Message Sent!
                    </h3>
                    <p
                      className="font-body text-base mb-6 leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Thank you! We'll be in touch shortly.
                    </p>
                    <button
                      type="button"
                      className="btn-3d px-6 py-2 text-sm"
                      onClick={() => setSubmitted(false)}
                      data-ocid="contact.send_another_button"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-body text-sm font-semibold mb-1.5"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        Full Name{" "}
                        <span style={{ color: "var(--color-primary)" }}>*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        value={form.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your full name"
                        className={fieldClass(!!errors.fullName)}
                        style={{
                          ...inputBase,
                          borderColor: errors.fullName
                            ? "#ef4444"
                            : "rgba(45,90,39,0.25)",
                        }}
                        data-ocid="contact.name_input"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={
                          errors.fullName ? "err-fullName" : undefined
                        }
                      />
                      {errors.fullName && (
                        <p
                          id="err-fullName"
                          className="font-body text-xs mt-1"
                          style={{ color: "#ef4444" }}
                          data-ocid="contact.name_input.field_error"
                        >
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-body text-sm font-semibold mb-1.5"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          Email Address{" "}
                          <span style={{ color: "var(--color-primary)" }}>
                            *
                          </span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="your@email.com"
                          className={fieldClass(!!errors.email)}
                          style={{
                            ...inputBase,
                            borderColor: errors.email
                              ? "#ef4444"
                              : "rgba(45,90,39,0.25)",
                          }}
                          data-ocid="contact.email_input"
                          aria-invalid={!!errors.email}
                          aria-describedby={
                            errors.email ? "err-email" : undefined
                          }
                        />
                        {errors.email && (
                          <p
                            id="err-email"
                            className="font-body text-xs mt-1"
                            style={{ color: "#ef4444" }}
                            data-ocid="contact.email_input.field_error"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-body text-sm font-semibold mb-1.5"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+91 00000 00000"
                          className={fieldClass(false)}
                          style={{
                            ...inputBase,
                            borderColor: "rgba(45,90,39,0.25)",
                          }}
                          data-ocid="contact.phone_input"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block font-body text-sm font-semibold mb-1.5"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        Subject{" "}
                        <span style={{ color: "var(--color-primary)" }}>*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${fieldClass(!!errors.subject)} appearance-none pr-10`}
                          style={{
                            ...inputBase,
                            borderColor: errors.subject
                              ? "#ef4444"
                              : "rgba(45,90,39,0.25)",
                          }}
                          data-ocid="contact.subject_select"
                          aria-invalid={!!errors.subject}
                          aria-describedby={
                            errors.subject ? "err-subject" : undefined
                          }
                        >
                          <option value="">Select a subject</option>
                          <option value="General">General Enquiry</option>
                          <option value="Reservation">Reservation</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                        <span
                          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <ChevronDownIcon />
                        </span>
                      </div>
                      {errors.subject && (
                        <p
                          id="err-subject"
                          className="font-body text-xs mt-1"
                          style={{ color: "#ef4444" }}
                          data-ocid="contact.subject_select.field_error"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-body text-sm font-semibold mb-1.5"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        Message{" "}
                        <span style={{ color: "var(--color-primary)" }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us how we can help you..."
                        className={`${fieldClass(!!errors.message)} resize-none`}
                        style={{
                          ...inputBase,
                          borderColor: errors.message
                            ? "#ef4444"
                            : "rgba(45,90,39,0.25)",
                        }}
                        data-ocid="contact.message_textarea"
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "err-message" : undefined
                        }
                      />
                      {errors.message && (
                        <p
                          id="err-message"
                          className="font-body text-xs mt-1"
                          style={{ color: "#ef4444" }}
                          data-ocid="contact.message_textarea.field_error"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-3d w-full py-4 text-base mt-1"
                      disabled={submitting}
                      data-ocid="contact.submit_button"
                      style={{ opacity: submitting ? 0.8 : 1 }}
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              strokeOpacity="0.25"
                            />
                            <path d="M12 2a10 10 0 010 20" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT: MAP + INFO CARD */}
            <div className="flex flex-col gap-6 animate-slide-in-right opacity-init">
              {/* Map embed card */}
              <div
                className="card-3d rounded-2xl overflow-hidden"
                style={{ borderRadius: "var(--border-radius-lg)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789012!2d78.3046!3d30.0869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909228fd949a88b%3A0x6c2c3a78a4a5ad62!2sRam%20Jhula%2C%20Rishikesh%2C%20Uttarakhand%20249304!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Divyam Resorts — Rishikesh"
                />
              </div>

              {/* Resort info / decorative card */}
              <div
                className="card-glass rounded-2xl p-8"
                style={{
                  borderRadius: "var(--border-radius-lg)",
                  borderLeft: "4px solid var(--color-secondary)",
                }}
              >
                <p
                  className="font-accent text-sm uppercase tracking-widest mb-3"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Our Location
                </p>
                <h3
                  className="font-heading text-2xl font-bold mb-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Divyam Resorts, Rishikesh
                </h3>
                <p
                  className="font-body text-sm leading-relaxed mb-6"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Nestled amidst the majestic Himalayas along the holy Ganges,
                  our resort offers an unparalleled blend of luxury, nature, and
                  tranquility just steps from Ram Jhula.
                </p>

                {/* Address block */}
                <div className="flex items-start gap-3 mb-6">
                  <span
                    style={{
                      color: "var(--color-secondary)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <MapPinIcon size={18} />
                  </span>
                  <div>
                    <p
                      className="font-body text-sm font-semibold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Near Ram Jhula, Rishikesh
                    </p>
                    <p
                      className="font-body text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Uttarakhand 249201, India
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="w-full h-px mb-5"
                  style={{ backgroundColor: "rgba(45,90,39,0.12)" }}
                />

                {/* Social icons */}
                <div>
                  <p
                    className="font-body text-xs uppercase tracking-widest font-semibold mb-4"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Follow Us
                  </p>
                  <div className="flex items-center gap-3">
                    {[
                      {
                        label: "Facebook",
                        href: "https://facebook.com",
                        Icon: FacebookIcon,
                        ocid: "contact.facebook_link",
                      },
                      {
                        label: "Instagram",
                        href: "https://instagram.com",
                        Icon: InstagramIcon,
                        ocid: "contact.instagram_link",
                      },
                      {
                        label: "Twitter",
                        href: "https://twitter.com",
                        Icon: TwitterIcon,
                        ocid: "contact.twitter_link",
                      },
                    ].map(({ label, href, Icon, ocid }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        data-ocid={ocid}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth"
                        style={{
                          backgroundColor: "rgba(45,90,39,0.08)",
                          color: "var(--color-primary)",
                          border: "1px solid rgba(45,90,39,0.15)",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.backgroundColor = "var(--color-secondary)";
                          el.style.color = "var(--color-primary-dark)";
                          el.style.borderColor = "var(--color-secondary)";
                          el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.backgroundColor = "rgba(45,90,39,0.08)";
                          el.style.color = "var(--color-primary)";
                          el.style.borderColor = "rgba(45,90,39,0.15)";
                          el.style.transform = "translateY(0)";
                        }}
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CTA STRIP ─────────────────────────── */}
      <section
        data-ocid="contact.cta_section"
        className="relative py-20 px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #20331f 0%, var(--color-primary) 50%, #1a3517 100%)",
        }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute left-0 top-0 w-72 h-72 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary), transparent)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-64 h-64 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"
          style={{
            background:
              "radial-gradient(circle, var(--color-secondary), transparent)",
            filter: "blur(36px)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto fade-in-up">
          <p
            className="font-accent text-sm uppercase tracking-widest mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            Ready for an Escape?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            Ready for an Unforgettable Stay?
          </h2>
          <p
            className="font-body text-base mb-8 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Immerse yourself in the serenity of the Himalayas. Our team is ready
            to craft the perfect experience just for you.
          </p>
          <a
            href="/check-availability"
            className="btn-3d-yellow inline-flex items-center gap-2 px-10 py-4 text-base"
            data-ocid="contact.book_now_button"
          >
            Book Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
