import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (prevPathRef.current !== currentPath) {
      prevPathRef.current = currentPath;
      setIsMobileOpen(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <>
      <header
        data-ocid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
        style={{
          backgroundColor: isScrolled ? "var(--color-bg-card)" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              data-ocid="navbar.logo_link"
              className="flex items-center gap-2 transition-smooth hover:opacity-80"
            >
              <span
                className="font-heading font-bold text-xl md:text-2xl tracking-wide"
                style={{
                  color: isScrolled ? "var(--color-primary)" : "#fff",
                  textShadow: isScrolled ? "none" : "0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                The Verdant Resort
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                  className={`font-body text-sm font-medium transition-smooth relative pb-0.5 ${
                    isActive(link.to) ? "after:scale-x-100" : "after:scale-x-0"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-center after:transition-transform after:duration-300`}
                  style={{
                    color: isScrolled
                      ? isActive(link.to)
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)"
                      : isActive(link.to)
                        ? "var(--color-secondary)"
                        : "rgba(255,255,255,0.9)",
                    ["--tw-after-bg" as string]: isScrolled
                      ? "var(--color-primary)"
                      : "var(--color-secondary)",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                data-ocid="navbar.book_now_button"
                className="px-5 py-2.5 rounded-resort font-body font-semibold text-sm transition-smooth hover:opacity-90 hover:shadow-md hover:scale-105"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  color: "var(--color-text-primary)",
                }}
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              data-ocid="navbar.hamburger_button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 rounded-md transition-smooth"
              style={{
                color: isScrolled ? "var(--color-text-primary)" : "#fff",
              }}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          data-ocid="navbar.mobile_drawer"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ backgroundColor: "var(--color-bg-card)" }}
        >
          <nav
            className="px-6 pt-2 pb-6 flex flex-col gap-1 border-t"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                className={`font-body text-base font-medium py-3 px-2 rounded-md transition-smooth ${
                  isActive(link.to) ? "font-semibold" : ""
                }`}
                style={{
                  color: isActive(link.to)
                    ? "var(--color-primary)"
                    : "var(--color-text-secondary)",
                  backgroundColor: isActive(link.to)
                    ? "rgba(44,95,46,0.06)"
                    : "transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              data-ocid="navbar.mobile_book_button"
              className="mt-3 px-5 py-3 rounded-resort font-body font-semibold text-sm text-center transition-smooth hover:opacity-90"
              style={{
                backgroundColor: "var(--color-secondary)",
                color: "var(--color-text-primary)",
              }}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Close menu"
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setIsMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
