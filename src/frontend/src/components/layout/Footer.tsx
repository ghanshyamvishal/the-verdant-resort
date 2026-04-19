import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Rooms & Suites", to: "/rooms" },
  { label: "Contact", to: "/contact" },
];

const ROOM_LINKS = [
  { label: "Deluxe Forest Room", to: "/rooms/deluxe-forest-room" },
  { label: "Mountain View Suite", to: "/rooms/mountain-view-suite" },
  { label: "Private Pool Villa", to: "/rooms/private-pool-villa" },
  { label: "Family Cottage", to: "/rooms/family-cottage" },
  { label: "Honeymoon Suite", to: "/rooms/honeymoon-suite" },
  { label: "Presidential Suite", to: "/rooms/presidential-suite" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      data-ocid="footer"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/assets/logo.png"
                alt="Divyam Resorts"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p
              className="font-body text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Nestled in the heart of nature, Divyam Resorts offers an
              unparalleled luxury experience where pristine forests meet
              world-class hospitality.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href={`https://www.${label.toLowerCase()}.com`}
                  data-ocid={`footer.${label.toLowerCase()}_link`}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--color-secondary)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.7)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-heading font-semibold text-base mb-5"
              style={{ color: "var(--color-secondary)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                    className="font-body text-sm transition-smooth hover:translate-x-1 inline-block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.6)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h4
              className="font-heading font-semibold text-base mb-5"
              style={{ color: "var(--color-secondary)" }}
            >
              Our Rooms
            </h4>
            <ul className="space-y-3">
              {ROOM_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={`footer.room_${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                    className="font-body text-sm transition-smooth hover:translate-x-1 inline-block"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.6)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-heading font-semibold text-base mb-5"
              style={{ color: "var(--color-secondary)" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-secondary)" }}
                />
                <span
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  123 Forest Ridge Road,
                  <br />
                  Coorg, Karnataka 571201
                </span>
              </li>
              <li className="flex gap-3">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-secondary)" }}
                />
                <a
                  href="tel:+918001234567"
                  className="font-body text-sm transition-smooth hover:opacity-80"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  +91 800 123 4567
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--color-secondary)" }}
                />
                <a
                  href="mailto:reservations@divyamresorts.com"
                  className="font-body text-sm transition-smooth hover:opacity-80"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  reservations@divyamresorts.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="font-body text-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            © {year} Divyam Resorts. All rights reserved.
          </p>
          <p
            className="font-body text-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth hover:opacity-80"
              style={{ color: "var(--color-secondary)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
