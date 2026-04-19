import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ResortButton";

interface FormState {
  name: string;
  email: string;
  phone: string;
  checkin: string;
  checkout: string;
  roomType: string;
  requests: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  checkin: "",
  checkout: "",
  roomType: "",
  requests: "",
};

const roomTypes = [
  "All Rooms",
  "Deluxe Forest Room",
  "Mountain View Suite",
  "Private Pool Villa",
  "Family Cottage",
  "Honeymoon Suite",
  "Presidential Suite",
];

const quickCards = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 98765 43210",
    sub: "Available 24/7",
    cta: "Call Now",
    href: "tel:+919876543210",
    ocid: "contact.call_card",
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "hello@verdantresort.com",
    sub: "Response within 4 hours",
    cta: "Send Email",
    href: "mailto:hello@verdantresort.com",
    ocid: "contact.email_card",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "+91 98765 43210",
    sub: "Quick chat available",
    cta: "WhatsApp Us",
    href: "https://wa.me/919876543210",
    ocid: "contact.whatsapp_card",
  },
];

const inputClass =
  "w-full border border-gray-300 rounded-md p-3 font-body text-sm transition-smooth focus:outline-none focus:border-primary bg-white";

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <div className="flex flex-col">
      {/* SECTION 1 — PAGE HERO */}
      <section
        data-ocid="contact.hero_section"
        className="relative flex items-center justify-center text-center"
        style={{ minHeight: "350px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920"
          alt="Contact The Verdant Resort"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 px-4 fade-in-up">
          <p
            className="font-accent text-sm uppercase tracking-widest mb-3"
            style={{ color: "var(--color-secondary)" }}
          >
            The Verdant Resort
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p
            className="font-body text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            We'd love to hear from you. Reach out for reservations, inquiries,
            or just to say hello.
          </p>
        </div>
      </section>

      {/* SECTION 2 — CONTACT GRID */}
      <section
        data-ocid="contact.contact_section"
        className="section-padding px-4 md:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-bg-primary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* LEFT — CONTACT FORM */}
            <div className="flex-1 lg:w-3/5">
              <h2
                className="font-heading text-3xl font-semibold mb-8"
                style={{ color: "var(--color-text-primary)" }}
              >
                Send Us a Message
              </h2>

              <form className="flex flex-col gap-5" noValidate>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-sm font-semibold mb-1.5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Full Name{" "}
                    <span style={{ color: "var(--color-accent)" }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                    data-ocid="contact.name_input"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-body text-sm font-semibold mb-1.5"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Email{" "}
                      <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                      data-ocid="contact.email_input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-body text-sm font-semibold mb-1.5"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={inputClass}
                      data-ocid="contact.phone_input"
                    />
                  </div>
                </div>

                {/* Check-in + Check-out */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="checkin"
                      className="block font-body text-sm font-semibold mb-1.5"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Check-in Date
                    </label>
                    <input
                      id="checkin"
                      name="checkin"
                      type="date"
                      value={form.checkin}
                      onChange={handleChange}
                      className={inputClass}
                      data-ocid="contact.checkin_input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout"
                      className="block font-body text-sm font-semibold mb-1.5"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      Check-out Date
                    </label>
                    <input
                      id="checkout"
                      name="checkout"
                      type="date"
                      value={form.checkout}
                      onChange={handleChange}
                      className={inputClass}
                      data-ocid="contact.checkout_input"
                    />
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <label
                    htmlFor="roomType"
                    className="block font-body text-sm font-semibold mb-1.5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Room Type
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={form.roomType}
                    onChange={handleChange}
                    className={inputClass}
                    data-ocid="contact.roomtype_select"
                  >
                    <option value="">Select a room type</option>
                    {roomTypes.map((rt) => (
                      <option key={rt} value={rt}>
                        {rt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    htmlFor="requests"
                    className="block font-body text-sm font-semibold mb-1.5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="requests"
                    name="requests"
                    rows={4}
                    value={form.requests}
                    onChange={handleChange}
                    placeholder="Any special requirements or questions..."
                    className={`${inputClass} resize-none`}
                    data-ocid="contact.requests_textarea"
                  />
                </div>

                {/* Submit */}
                <div>
                  <Button
                    variant="filled"
                    size="lg"
                    className="w-full"
                    onClick={handleSubmit}
                    data-ocid="contact.submit_button"
                  >
                    Send Enquiry
                  </Button>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div
                    data-ocid="contact.success_state"
                    className="flex items-center gap-3 p-4 rounded-xl border"
                    style={{
                      backgroundColor: "rgba(44, 95, 46, 0.08)",
                      borderColor: "var(--color-primary)",
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p
                      className="font-body text-sm font-medium"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* RIGHT — CONTACT INFO */}
            <div className="lg:w-2/5">
              <h2
                className="font-heading text-3xl font-semibold mb-8"
                style={{ color: "var(--color-text-primary)" }}
              >
                Contact Information
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "Nilgiri Hills, Tamil Nadu 643001, India",
                    href: undefined,
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 98765 43210",
                    href: "tel:+919876543210",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@verdantresort.com",
                    href: "mailto:hello@verdantresort.com",
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp",
                    value: "+91 98765 43210",
                    href: "https://wa.me/919876543210",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(44, 95, 46, 0.10)" }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: "var(--color-primary)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="font-body text-xs uppercase tracking-wider font-semibold mb-0.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-body text-sm transition-smooth hover:opacity-70"
                          style={{ color: "var(--color-text-primary)" }}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          className="font-body text-sm"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Separator */}
              <div
                className="w-full h-px mb-8"
                style={{ backgroundColor: "var(--color-bg-secondary)" }}
              />

              {/* Opening Hours */}
              <div className="mb-6">
                <h3
                  className="font-heading text-xl font-semibold mb-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Opening Hours
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Check-in", value: "2:00 PM" },
                    { label: "Check-out", value: "11:00 AM" },
                    { label: "Reception", value: "24/7" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex justify-between items-center"
                    >
                      <span
                        className="font-body text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {label}
                      </span>
                      <span
                        className="font-body text-sm font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2701569764157!2d76.6913!3d11.4064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI0JzIzLjAiTiA3NsKwNDEnMjguNiJF!5e0!3m2!1sen!2sin!4v1620000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl mt-4"
                title="The Verdant Resort — Nilgiri Hills"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — QUICK CONTACT CARDS */}
      <section
        data-ocid="contact.quick_cards_section"
        className="section-padding px-4 md:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="font-heading text-3xl font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Reach Us Instantly
            </h2>
            <p
              className="font-body mt-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Choose the channel that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickCards.map(
              ({ icon: Icon, title, info, sub, cta, href, ocid }) => (
                <div
                  key={title}
                  data-ocid={ocid}
                  className="flex flex-col items-center text-center p-8 rounded-xl transition-smooth hover:scale-[1.02] hover:shadow-resort-hover cursor-pointer"
                  style={{
                    backgroundColor: "var(--color-bg-card)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(44, 95, 46, 0.10)" }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  <h3
                    className="font-heading text-xl font-semibold mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="font-body text-sm font-medium mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {info}
                  </p>
                  <p
                    className="font-body text-sm mb-6"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {sub}
                  </p>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-smooth hover:underline underline-offset-4"
                    style={{ color: "var(--color-primary)" }}
                    data-ocid={`${ocid}.link`}
                  >
                    {cta}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
