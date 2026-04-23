import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

interface NavLink {
  label: string;
  to: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms", to: "/rooms" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const prevPathRef = useRef(currentPath);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath;
      setIsMobileOpen(false);
    }
  });

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) setIsMobileOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMobileOpen]);

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <>
      {/* ─── Inline styles for pseudo-element hover effects ─── */}
      <style>{`
        .nav-link-item {
          position: relative;
          padding-bottom: 4px;
          color: rgba(255,255,255,0.85);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-decoration: none;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          border-radius: 2px;
          background: var(--color-secondary);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-item:hover {
          color: #fff;
        }
        .nav-link-item:hover::after,
        .nav-link-item.active::after {
          transform: scaleX(1);
        }
        .nav-link-item.active {
          color: var(--color-secondary);
          font-weight: 600;
        }
        .nav-link-item:focus-visible {
          outline: 2px solid var(--color-secondary);
          outline-offset: 4px;
          border-radius: 2px;
        }

        /* Hamburger animated bars */
        .hamburger-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transform-origin: center;
          transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.2s ease,
                      width 0.25s ease;
        }
        .hamburger-open .bar-top {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger-open .bar-mid {
          opacity: 0;
          width: 10px;
        }
        .hamburger-open .bar-bot {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile drawer slide */
        .mobile-drawer {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.28s ease;
        }
        .mobile-drawer.open {
          max-height: 520px;
          opacity: 1;
        }

        /* Mobile link hover */
        .mobile-nav-link {
          display: block;
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 500;
          padding: 14px 12px;
          border-bottom: 1px solid rgba(242,201,76,0.12);
          transition: background 0.2s ease, color 0.2s ease, padding-left 0.2s ease;
          text-decoration: none;
          color: rgba(255,255,255,0.82);
          border-radius: 6px;
        }
        .mobile-nav-link:hover {
          background: rgba(255,255,255,0.07);
          color: #fff;
          padding-left: 18px;
        }
        .mobile-nav-link.active {
          color: var(--color-secondary);
          background: rgba(242,201,76,0.1);
          font-weight: 600;
        }
        .mobile-nav-link:focus-visible {
          outline: 2px solid var(--color-secondary);
          outline-offset: 2px;
        }

        /* Book Now outline button hover */
        .btn-nav-outline {
          display: inline-flex;
          align-items: center;
          padding: 9px 20px;
          border: 1.5px solid rgba(255,255,255,0.4);
          border-radius: 6px;
          color: rgba(255,255,255,0.9);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease, transform 0.15s ease;
          white-space: nowrap;
          min-height: 40px;
        }
        .btn-nav-outline:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.85);
          color: #fff;
          transform: translateY(-1px);
        }
        .btn-nav-outline:active {
          transform: translateY(1px);
          background: rgba(255,255,255,0.08);
        }
        .btn-nav-outline:focus-visible {
          outline: 2px solid var(--color-secondary);
          outline-offset: 3px;
        }
      `}</style>

      <header
        data-ocid="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "var(--color-header-bg, #20331f)",
          borderBottom: "1px solid rgba(242,201,76,0.18)",
          boxShadow: isScrolled
            ? "0 4px 32px rgba(0,0,0,0.35), 0 1px 0 rgba(242,201,76,0.12)"
            : "0 2px 16px rgba(0,0,0,0.18)",
          transition: "box-shadow 0.35s ease",
        }}
      >
        <div
          style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            {/* ─── Logo + Brand Name ─── */}
            <Link
              to="/"
              data-ocid="navbar.logo_link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                flexShrink: 0,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              <img
                src="/assets/logo.png"
                alt="Divyam Resorts"
                style={{ height: "44px", width: "auto", objectFit: "contain" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--color-secondary)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Divyam
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Resorts
                </span>
              </div>
            </Link>

            {/* ─── Desktop Navigation ─── */}
            <nav
              className="hidden md:flex"
              style={{ alignItems: "center", gap: "2.25rem" }}
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                  className={`nav-link-item${isActive(link.to) ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* ─── Desktop CTA Buttons ─── */}
            <div
              className="hidden md:flex"
              style={{ alignItems: "center", gap: "10px" }}
            >
              <Link
                to="/check-availability"
                data-ocid="navbar.check_availability_button"
                className="btn-3d-yellow"
                style={{
                  padding: "9px 18px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  borderRadius: "6px",
                  minHeight: "40px",
                }}
              >
                Check Availability
              </Link>

              <Link
                to="/contact"
                data-ocid="navbar.book_now_button"
                className="btn-nav-outline"
              >
                Book Now
              </Link>
            </div>

            {/* ─── Hamburger (Mobile) ─── */}
            <button
              type="button"
              data-ocid="navbar.hamburger_button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-drawer"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "none";
              }}
            >
              <span
                className="hamburger-bar bar-top"
                style={
                  isMobileOpen
                    ? { transform: "translateY(7px) rotate(45deg)" }
                    : {}
                }
              />
              <span
                className="hamburger-bar bar-mid"
                style={isMobileOpen ? { opacity: 0, width: "10px" } : {}}
              />
              <span
                className="hamburger-bar bar-bot"
                style={
                  isMobileOpen
                    ? { transform: "translateY(-7px) rotate(-45deg)" }
                    : {}
                }
              />
            </button>
          </div>
        </div>

        {/* ─── Mobile Drawer ─── */}
        <div
          id="mobile-drawer"
          ref={menuRef}
          data-ocid="navbar.mobile_drawer"
          className={`md:hidden mobile-drawer${isMobileOpen ? " open" : ""}`}
          style={{ backgroundColor: "var(--color-header-bg, #20331f)" }}
          aria-hidden={!isMobileOpen}
        >
          <nav
            style={{
              padding: "8px 16px 20px",
              borderTop: "1px solid rgba(242,201,76,0.18)",
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                className={`mobile-nav-link${isActive(link.to) ? " active" : ""}`}
                tabIndex={isMobileOpen ? 0 : -1}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-secondary)",
                        display: "inline-block",
                      }}
                    />
                  )}
                </span>
              </Link>
            ))}

            {/* Mobile Check Availability */}
            <Link
              to="/check-availability"
              data-ocid="navbar.mobile_check_availability_link"
              className="btn-3d-yellow"
              tabIndex={isMobileOpen ? 0 : -1}
              style={{
                marginTop: "12px",
                width: "100%",
                padding: "14px 20px",
                fontSize: "0.9rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                borderRadius: "8px",
                justifyContent: "space-between",
              }}
            >
              Check Availability
              <span style={{ opacity: 0.7, fontSize: "1rem" }}>→</span>
            </Link>

            {/* Mobile Book Now */}
            <Link
              to="/contact"
              data-ocid="navbar.mobile_book_button"
              tabIndex={isMobileOpen ? 0 : -1}
              style={{
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "13px 20px",
                border: "1.5px solid rgba(255,255,255,0.35)",
                borderRadius: "8px",
                color: "rgba(255,255,255,0.9)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "background 0.2s ease, border-color 0.2s ease",
                minHeight: "50px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.65)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.35)";
              }}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </header>

      {/* ─── Click-outside Overlay ─── */}
      {isMobileOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            backgroundColor: "rgba(0,0,0,0.45)",
          }}
          onClick={() => setIsMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
