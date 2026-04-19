import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-zJLe_Wga.js";
import { B as Button } from "./ResortButton-DTDHb4Ia.js";
import { L as Leaf, u as useIntersectionObserver } from "./useIntersectionObserver-BTVJ6liu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Crown = createLucideIcon("crown", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
];
const Trophy = createLucideIcon("trophy", __iconNode);
const stats = [
  { value: "35+", label: "Years of Excellence" },
  { value: "120", label: "Luxury Rooms" },
  { value: "50,000+", label: "Happy Guests" },
  { value: "15", label: "Awards Won" }
];
const team = [
  {
    name: "Vikram Verdant",
    role: "General Manager",
    bio: "With 20 years in luxury hospitality, Vikram leads with passion and precision.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
  },
  {
    name: "Chef Ananya Krishnan",
    role: "Head Chef",
    bio: "Ananya blends traditional South Indian flavors with contemporary French techniques.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
  },
  {
    name: "Dr. Priya Menon",
    role: "Spa Director",
    bio: "Certified in Ayurvedic medicine, Priya creates transformative wellness journeys.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    name: "Rahul Sharma",
    role: "Activities Director",
    bio: "An adventure enthusiast who designs experiences from forest treks to stargazing events.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
  }
];
const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We operate with deep respect for the environment, from solar energy to zero-waste kitchen practices and organic farming."
  },
  {
    icon: Crown,
    title: "Luxury",
    description: "Every touchpoint is crafted to exceed expectations — from handmade amenities to personalized butler service."
  },
  {
    icon: Heart,
    title: "Community",
    description: "We employ over 200 local staff and source 80% of our produce from local farmers, investing in our community."
  }
];
const awards = [
  { year: "2023", title: "Best Luxury Resort", org: "India Travel Awards" },
  {
    year: "2022",
    title: "Eco-Friendly Resort of the Year",
    org: "Green Hospitality Summit"
  },
  {
    year: "2021",
    title: "Top 10 Honeymoon Destinations",
    org: "Travel + Leisure"
  },
  { year: "2019", title: "Culinary Excellence Award", org: "Gourmet India" }
];
function FadeSection({
  children,
  className = "",
  style,
  "data-ocid": dataOcid
}) {
  const ref = reactExports.useRef(null);
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.1
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      "data-ocid": dataOcid,
      style,
      className: `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`,
      children
    }
  );
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "about.hero",
        className: "relative flex flex-col justify-center items-center text-center px-4",
        style: { minHeight: "420px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920",
              alt: "The Verdant Resort",
              className: "absolute inset-0 w-full h-full object-cover",
              loading: "eager"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "ol",
            {
              className: "flex items-center gap-2 text-xs font-body",
              style: { color: "rgba(255,255,255,0.6)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/",
                    className: "hover:text-white transition-colors duration-200",
                    children: "Home"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { color: "rgba(255,255,255,0.4)" }, children: "/" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { color: "rgba(255,255,255,0.9)" }, children: "About" })
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-heading font-bold leading-tight",
                style: { color: "#fff", fontSize: "clamp(2.5rem, 6vw, 3.75rem)" },
                children: "Our Story"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-lg md:text-xl max-w-lg",
                style: { color: "rgba(255,255,255,0.72)" },
                children: "A Legacy of Luxury Since 1985"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeSection, { className: "section-padding bg-resort-primary px-4 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl shadow-resort-hover", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
          alt: "Resort heritage",
          className: "w-full h-full object-cover transition-smooth hover:scale-105",
          style: { minHeight: "320px" },
          loading: "lazy"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-xs font-body font-semibold tracking-[0.2em] uppercase",
            style: { color: "var(--color-secondary)" },
            children: "Our Heritage"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-heading font-bold leading-snug",
            style: {
              color: "var(--color-text-primary)",
              fontSize: "clamp(1.875rem, 4vw, 2.5rem)"
            },
            children: "Four Decades of Crafting Unforgettable Experiences"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body leading-relaxed",
            style: { color: "var(--color-text-secondary)" },
            children: "Founded in 1985 by the Verdant family, our resort began as a vision to create a sanctuary where the boundaries between luxury and nature dissolve. Nestled in 50 acres of pristine forest in the Nilgiri Hills, we have spent four decades perfecting the art of hospitality."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "font-body leading-relaxed",
            style: { color: "var(--color-text-secondary)" },
            children: "Our philosophy is simple: every guest deserves an experience that rejuvenates the soul, stimulates the senses, and creates memories that last a lifetime. From our farm-to-table cuisine to our forest spa treatments, every detail is crafted with intention and care."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "md",
            href: "/rooms",
            "data-ocid": "about.explore_rooms_button",
            children: "Explore Our Rooms"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FadeSection,
      {
        "data-ocid": "about.stats",
        className: "py-12 px-4 md:px-8",
        style: { backgroundColor: "var(--color-primary)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center gap-1",
            "data-ocid": `about.stat.${stats.indexOf(stat) + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-heading font-bold",
                  style: {
                    color: "var(--color-secondary)",
                    fontSize: "clamp(2rem, 5vw, 3rem)"
                  },
                  children: stat.value
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body text-sm",
                  style: { color: "rgba(255,255,255,0.78)" },
                  children: stat.label
                }
              )
            ]
          },
          stat.label
        )) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FadeSection,
      {
        className: "section-padding bg-resort-secondary px-4 md:px-8",
        "data-ocid": "about.team",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-heading font-bold text-4xl mb-3",
                style: { color: "var(--color-text-primary)" },
                children: "Meet Our Team"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body max-w-lg mx-auto",
                style: { color: "var(--color-text-secondary)" },
                children: "The passionate individuals behind every unforgettable moment at The Verdant Resort."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: team.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `about.team_card.${i + 1}`,
              className: "bg-resort-card rounded-xl p-6 flex flex-col items-center text-center shadow-resort-card transition-smooth hover:scale-105 hover:shadow-resort-hover",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-32 h-32 rounded-full overflow-hidden mb-4",
                    style: {
                      outline: "2px solid var(--color-secondary)",
                      outlineOffset: "2px"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: member.image,
                        alt: member.name,
                        className: "w-full h-full object-cover",
                        loading: "lazy"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-heading font-semibold text-lg mb-1",
                    style: { color: "var(--color-text-primary)" },
                    children: member.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-sm font-medium mb-3",
                    style: { color: "var(--color-secondary)" },
                    children: member.role
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm leading-relaxed",
                    style: { color: "var(--color-text-secondary)" },
                    children: member.bio
                  }
                )
              ]
            },
            member.name
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FadeSection,
      {
        className: "section-padding bg-resort-primary px-4 md:px-8",
        "data-ocid": "about.values",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-heading font-bold text-4xl mb-3",
                style: { color: "var(--color-text-primary)" },
                children: "Our Core Values"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body max-w-lg mx-auto",
                style: { color: "var(--color-text-secondary)" },
                children: "Principles that guide every decision, every detail, every day."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: values.map((value, i) => {
            const Icon = value.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `about.value_card.${i + 1}`,
                className: "bg-resort-card rounded-xl p-8 flex flex-col items-center text-center shadow-resort-card transition-smooth hover:shadow-resort-hover hover:scale-105",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-full flex items-center justify-center mb-5",
                      style: { backgroundColor: "var(--color-primary)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24, color: "#fff", strokeWidth: 1.5 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-heading font-semibold text-xl mb-3",
                      style: { color: "var(--color-text-primary)" },
                      children: value.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm leading-relaxed",
                      style: { color: "var(--color-text-secondary)" },
                      children: value.description
                    }
                  )
                ]
              },
              value.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FadeSection,
      {
        className: "section-padding bg-resort-secondary px-4 md:px-8",
        "data-ocid": "about.awards",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-heading font-bold text-4xl mb-3",
                style: { color: "var(--color-text-primary)" },
                children: "Awards & Recognition"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body max-w-lg mx-auto",
                style: { color: "var(--color-text-secondary)" },
                children: "Industry accolades that reflect our unwavering commitment to excellence."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: awards.map((award, awardIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": `about.award_card.${awardIdx + 1}`,
              className: "bg-resort-card rounded-xl p-6 flex flex-col items-center text-center transition-smooth hover:scale-105 hover:shadow-resort-hover",
              style: {
                border: "1.5px solid var(--color-secondary)",
                boxShadow: "var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-12 rounded-full flex items-center justify-center mb-4",
                    style: { backgroundColor: "rgba(212,168,83,0.12)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Trophy,
                      {
                        size: 22,
                        style: { color: "var(--color-secondary)" },
                        strokeWidth: 1.5
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-xs font-semibold tracking-widest uppercase mb-1",
                    style: { color: "var(--color-secondary)" },
                    children: award.year
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-heading font-semibold text-base leading-tight mb-2",
                    style: { color: "var(--color-text-primary)" },
                    children: award.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs",
                    style: { color: "var(--color-text-muted)" },
                    children: award.org
                  }
                )
              ]
            },
            `${award.year}-${award.org}`
          )) })
        ] })
      }
    )
  ] });
}
export {
  About
};
