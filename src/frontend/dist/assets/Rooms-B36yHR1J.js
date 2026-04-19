import { r as reactExports, j as jsxRuntimeExports } from "./index-zJLe_Wga.js";
import { r as rooms, R as RoomCard } from "./RoomCard-D_hoqT63.js";
const FILTER_OPTIONS = [
  "All",
  "Deluxe",
  "Suite",
  "Villa",
  "Family",
  "Presidential"
];
function Rooms() {
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const [isTransitioning, setIsTransitioning] = reactExports.useState(false);
  const filteredRooms = activeFilter === "All" ? rooms : rooms.filter((r) => r.type === activeFilter);
  function handleFilterChange(filter) {
    if (filter === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsTransitioning(false);
    }, 200);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { "data-ocid": "rooms.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "rooms.hero.section",
        className: "relative flex items-center justify-center",
        style: { minHeight: "350px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920",
              alt: "Luxury resort aerial view",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.65) 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "nav",
            {
              className: "flex items-center gap-2 font-body text-sm",
              style: { color: "rgba(255,255,255,0.6)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "/",
                    className: "hover:text-white transition-colors duration-200",
                    children: "Home"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--color-secondary)" }, children: "Rooms & Suites" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 py-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-accent text-sm tracking-widest uppercase mb-4",
                style: { color: "var(--color-secondary)" },
                children: "The Verdant Resort"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight", children: "Our Rooms & Suites" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-base md:text-lg max-w-xl mx-auto leading-relaxed",
                style: { color: "rgba(255,255,255,0.72)" },
                children: "Six unique sanctuaries, each crafted to offer a different perspective of nature's grandeur."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "rooms.listing.section",
        className: "py-16 px-6",
        style: { backgroundColor: "var(--color-bg-primary)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "rooms.filter.bar",
              className: "flex flex-wrap items-center justify-center gap-3 mb-12",
              children: FILTER_OPTIONS.map((filter) => {
                const isActive = activeFilter === filter;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "data-ocid": "rooms.filter.tab",
                    "aria-pressed": isActive,
                    type: "button",
                    onClick: () => handleFilterChange(filter),
                    className: "px-5 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    style: isActive ? {
                      backgroundColor: "var(--color-primary)",
                      color: "#ffffff",
                      borderColor: "var(--color-primary)",
                      boxShadow: "0 4px 12px rgba(44,95,46,0.3)"
                    } : {
                      backgroundColor: "var(--color-bg-card)",
                      color: "var(--color-primary)",
                      borderColor: "var(--color-primary)"
                    },
                    children: filter === "All" ? "All Rooms" : filter
                  },
                  filter
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "text-center font-body text-sm mb-8",
              style: { color: "var(--color-text-muted)" },
              children: [
                "Showing",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-semibold",
                    style: { color: "var(--color-primary)" },
                    children: filteredRooms.length
                  }
                ),
                " ",
                filteredRooms.length === 1 ? "room" : "rooms",
                activeFilter !== "All" ? ` in ${activeFilter}` : ""
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "rooms.grid",
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              style: {
                minHeight: "480px",
                opacity: isTransitioning ? 0 : 1,
                transition: "opacity 0.2s ease"
              },
              children: filteredRooms.map((room, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoomCard, { room, index }, room.slug))
            }
          ),
          filteredRooms.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "rooms.empty_state",
              className: "flex flex-col items-center justify-center py-24 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-heading text-2xl mb-2",
                    style: { color: "var(--color-text-secondary)" },
                    children: "No rooms found"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm mb-6",
                    style: { color: "var(--color-text-muted)" },
                    children: "Try a different filter to explore our accommodations."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleFilterChange("All"),
                    className: "px-6 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300",
                    style: {
                      backgroundColor: "var(--color-primary)",
                      color: "#fff"
                    },
                    children: "View All Rooms"
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "rooms.cta.section",
        className: "py-14 px-6 text-center",
        style: { backgroundColor: "var(--color-bg-secondary)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-accent text-sm tracking-widest uppercase mb-3",
              style: { color: "var(--color-secondary-dark)" },
              children: "Can't decide?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-heading font-bold text-2xl md:text-3xl mb-3",
              style: { color: "var(--color-text-primary)" },
              children: "Let Our Concierge Guide You"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-base mb-8 max-w-md mx-auto",
              style: { color: "var(--color-text-secondary)" },
              children: "Our team is available around the clock to help you find the perfect sanctuary for your stay."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "/contact",
                "data-ocid": "rooms.contact_cta.primary_button",
                className: "inline-block px-8 py-3 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:scale-105",
                style: {
                  backgroundColor: "var(--color-secondary)",
                  color: "var(--color-text-primary)"
                },
                children: "Contact Concierge"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "tel:+911800123456",
                "data-ocid": "rooms.call_cta.secondary_button",
                className: "inline-block px-8 py-3 rounded-full font-body font-semibold text-sm border-2 transition-all duration-300 hover:opacity-80",
                style: {
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)"
                },
                children: "Call +91 1800 123 456"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  Rooms
};
