import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, L as Link, X } from "./index-eJEhzJ6C.js";
import { u as useIntersectionObserver, L as Leaf } from "./useIntersectionObserver-CXtOSAlU.js";
import { B as Button } from "./ResortButton-D1D1fIoN.js";
import { W as Waves, S as Star, C as ChevronDown } from "./waves-B2hHEI25.js";
import { R as RoomCard, M as Mountain, r as rooms } from "./RoomCard-Cg9PWk1c.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
];
const UtensilsCrossed = createLucideIcon("utensils-crossed", __iconNode$2);
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
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
const ZoomIn = createLucideIcon("zoom-in", __iconNode);
function AmenityCard({
  icon: Icon,
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex gap-4 p-5 rounded-resort-lg transition-smooth group hover:scale-[1.02]",
      style: {
        backgroundColor: "var(--color-bg-card)",
        boxShadow: "var(--shadow-card)"
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-hover)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-card)";
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-smooth group-hover:scale-110",
            style: { backgroundColor: "rgba(44,95,46,0.1)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, style: { color: "var(--color-primary)" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h4",
            {
              className: "font-heading font-semibold text-base mb-1",
              style: { color: "var(--color-text-primary)" },
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm leading-relaxed",
              style: { color: "var(--color-text-secondary)" },
              children: description
            }
          )
        ] })
      ]
    }
  );
}
const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Perched at 3,000ft elevation with panoramic mountain views"
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness",
    description: "Full-service spa with traditional Ayurvedic treatments"
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Farm-to-table cuisine featuring local seasonal ingredients"
  },
  {
    icon: Zap,
    title: "Adventure Sports",
    description: "Trekking, zip-lining, rock climbing, and white-water rafting"
  }
];
function AmenitiesSection() {
  const ref = reactExports.useRef(null);
  const isVisible = useIntersectionObserver(
    ref
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      "data-ocid": "amenities.section",
      className: "section-padding",
      style: { backgroundColor: "var(--color-bg-secondary)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body font-semibold tracking-[0.25em] text-xs uppercase",
                  style: { color: "var(--color-secondary)" },
                  children: "World-Class Amenities"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-heading font-bold text-4xl mt-3 mb-5 leading-tight",
                  style: { color: "var(--color-text-primary)" },
                  children: "Everything You Need for the Perfect Escape"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-base leading-relaxed mb-8",
                  style: { color: "var(--color-text-secondary)" },
                  children: "From sunrise yoga on our mountain terrace to late-night stargazing by the campfire, Divyam Resorts offers a curated collection of world-class amenities designed to nourish your body, mind, and spirit. Every experience is crafted with care so you leave feeling truly restored."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", "data-ocid": "amenities.discover_more_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "md", children: "Discover More" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: amenities.map((amenity) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              AmenityCard,
              {
                icon: amenity.icon,
                title: amenity.title,
                description: amenity.description
              },
              amenity.title
            )) })
          ]
        }
      ) })
    }
  );
}
function CTASection() {
  const ref = reactExports.useRef(null);
  const isVisible = useIntersectionObserver(
    ref
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      "data-ocid": "cta.section",
      className: "relative flex items-center justify-center overflow-hidden min-h-[420px]",
      style: { minHeight: "420px" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920",
            alt: "Resort pool at sunset",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(135deg, rgba(32,51,31,0.84) 0%, rgba(0,0,0,0.68) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative z-10 text-center px-4 max-w-3xl mx-auto section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body font-semibold tracking-[0.25em] text-xs uppercase mb-4 inline-block",
                  style: { color: "var(--color-secondary)" },
                  children: "Begin Your Journey"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading font-bold text-4xl lg:text-5xl text-white mb-5 leading-tight", children: "Ready for an Unforgettable Experience?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-base md:text-lg mb-10 leading-relaxed",
                  style: { color: "rgba(255,255,255,0.78)" },
                  children: "Book your stay at Divyam Resorts and discover luxury redefined. Immerse yourself in nature's embrace with every comfort at your fingertips."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rooms", "data-ocid": "cta.book_stay_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "filled",
                  size: "lg",
                  className: "shadow-lg hover:shadow-xl",
                  children: "Book Your Stay"
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
const features = [
  {
    icon: Mountain,
    title: "Mountain Views",
    desc: "Breathtaking panoramic vistas of the Western Ghats"
  },
  {
    icon: Leaf,
    title: "Forest Retreat",
    desc: "Surrounded by 50 acres of pristine forest"
  },
  {
    icon: Star,
    title: "5-Star Service",
    desc: "Award-winning hospitality since 1985"
  }
];
function WelcomeStrip() {
  const ref = reactExports.useRef(null);
  const isVisible = useIntersectionObserver(
    ref
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "welcome-strip",
      ref,
      "data-ocid": "welcome.section",
      className: "section-padding",
      style: { backgroundColor: "var(--color-bg-secondary)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
          children: features.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center text-center p-8 rounded-resort-lg transition-smooth hover:scale-[1.02] hover:shadow-resort-hover",
              style: {
                backgroundColor: "var(--color-bg-card)",
                boxShadow: "var(--shadow-card)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-16 h-16 rounded-full flex items-center justify-center mb-5",
                    style: { backgroundColor: "rgba(32,51,31,0.10)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 28, style: { color: "var(--color-primary)" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-heading font-semibold text-lg mb-2",
                    style: { color: "var(--color-text-primary)" },
                    children: title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm leading-relaxed",
                    style: { color: "var(--color-text-secondary)" },
                    children: desc
                  }
                )
              ]
            },
            title
          ))
        }
      ) })
    }
  );
}
function FeaturedRooms() {
  const ref = reactExports.useRef(null);
  const isVisible = useIntersectionObserver(
    ref
  );
  const featuredRooms = rooms.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        ref,
        "data-ocid": "featured_rooms.section",
        className: "section-padding",
        style: { backgroundColor: "var(--color-bg-primary)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body font-semibold tracking-[0.25em] text-xs uppercase",
                    style: { color: "var(--color-secondary)" },
                    children: "Accommodations"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "font-heading font-bold text-4xl mt-2 mb-4",
                    style: { color: "var(--color-text-primary)" },
                    children: "Our Signature Rooms"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-base max-w-xl mx-auto",
                    style: { color: "var(--color-text-secondary)" },
                    children: "Discover our handcrafted accommodations, each designed to immerse you in nature's finest luxury"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
              children: featuredRooms.map((room, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(RoomCard, { room, index: i }, room.slug))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rooms", "data-ocid": "featured_rooms.view_all_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "filled", size: "lg", children: "View All Rooms" }) }) })
        ] })
      }
    )
  ] });
}
const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85",
    tag: "Luxury Redefined",
    heading: "Where Nature\nMeets Luxury",
    subheading: "Nestled in the heart of nature, Divyam Resorts offers an unparalleled escape into luxury and tranquility. Experience the perfect harmony of forest, mountain, and five-star service.",
    ctaPrimary: { label: "Explore Rooms", to: "/rooms" },
    ctaSecondary: { label: "Our Story", to: "/about" }
  },
  {
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=85",
    tag: "Unmatched Serenity",
    heading: "Your Private\nParadise Awaits",
    subheading: "Indulge in the finest luxury with private pool villas, panoramic mountain views, and impeccable service tailored to your every desire.",
    ctaPrimary: { label: "View Villas", to: "/rooms" },
    ctaSecondary: { label: "Contact Us", to: "/contact" }
  },
  {
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=85",
    tag: "Five-Star Experience",
    heading: "Crafted for\nthe Discerning",
    subheading: "Every room at Divyam Resorts is a masterpiece — handcrafted interiors, forest-facing balconies, and world-class amenities that redefine what a retreat can be.",
    ctaPrimary: { label: "See Our Rooms", to: "/rooms" },
    ctaSecondary: { label: "About Us", to: "/about" }
  },
  {
    image: "https://images.unsplash.com/photo-1540541338537-1220059812ff?w=1920&q=85",
    tag: "Nature's Embrace",
    heading: "50 Acres of\nPristine Forest",
    subheading: "Awaken to bird songs, dine under canopies of stars, and rejuvenate with Ayurvedic spa therapies — all wrapped in nature's most magnificent setting.",
    ctaPrimary: { label: "Book Your Stay", to: "/contact" },
    ctaSecondary: { label: "Explore Amenities", to: "/about" }
  },
  {
    image: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=1920&q=85",
    tag: "Award-Winning Hospitality",
    heading: "35 Years of\nExcellence",
    subheading: "A legacy built on care, craftsmanship, and an unwavering commitment to excellence. Join thousands of guests who've called Divyam Resorts their home away from home.",
    ctaPrimary: { label: "Our Heritage", to: "/about" },
    ctaSecondary: { label: "Get in Touch", to: "/contact" }
  }
];
const AUTOPLAY_INTERVAL = 5e3;
function HeroSection() {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isTransitioning, setIsTransitioning] = reactExports.useState(false);
  const [isPaused, setIsPaused] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const goTo = reactExports.useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 500);
    },
    [isTransitioning]
  );
  const goNext = reactExports.useCallback(() => {
    goTo((currentIndex + 1) % SLIDES.length);
  }, [currentIndex, goTo]);
  const goPrev = reactExports.useCallback(() => {
    goTo((currentIndex - 1 + SLIDES.length) % SLIDES.length);
  }, [currentIndex, goTo]);
  reactExports.useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goNext]);
  const scrollDown = () => {
    const next = document.getElementById("welcome-strip");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };
  const slide = SLIDES[currentIndex];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      "data-ocid": "hero.section",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden",
      onMouseEnter: () => setIsPaused(true),
      onMouseLeave: () => setIsPaused(false),
      children: [
        SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            style: { opacity: i === currentIndex ? 1 : 0, zIndex: 0 },
            "aria-hidden": i !== currentIndex,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: s.image,
                  alt: "",
                  className: "w-full h-full object-cover",
                  loading: i === 0 ? "eager" : "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: {
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.28) 50%, rgba(0,0,0,0.68) 100%)"
                  }
                }
              )
            ]
          },
          s.image
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto",
            style: {
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(12px)" : "translateY(0)",
              transition: "opacity 0.5s ease, transform 0.5s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body font-semibold tracking-[0.3em] text-xs uppercase mb-6 px-4 py-1.5 rounded-full",
                  style: {
                    color: "var(--color-secondary)",
                    border: "1px solid rgba(224,177,94,0.4)",
                    backgroundColor: "rgba(224,177,94,0.08)"
                  },
                  children: slide.tag
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 whitespace-pre-line", children: slide.heading }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-base md:text-lg leading-relaxed max-w-2xl mb-10",
                  style: { color: "rgba(255,255,255,0.80)" },
                  children: slide.subheading
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: slide.ctaPrimary.to, "data-ocid": "hero.explore_rooms_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "filled", size: "lg", children: slide.ctaPrimary.label }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: slide.ctaSecondary.to, "data-ocid": "hero.our_story_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "inline-flex items-center justify-center font-body font-semibold px-8 py-4 text-base rounded-resort transition-smooth hover:scale-105 hover:shadow-md",
                    style: {
                      backgroundColor: "transparent",
                      color: "white",
                      border: "2px solid rgba(255,255,255,0.7)"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.borderColor = "#fff";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                    },
                    children: slide.ctaSecondary.label
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Previous slide",
            "data-ocid": "hero.prev_slide_button",
            onClick: goPrev,
            className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-smooth hover:scale-110 focus-visible:ring-2 focus-visible:ring-white",
            style: {
              backgroundColor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.backgroundColor = "rgba(224,177,94,0.7)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 22 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": "Next slide",
            "data-ocid": "hero.next_slide_button",
            onClick: goNext,
            className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-smooth hover:scale-110 focus-visible:ring-2 focus-visible:ring-white",
            style: {
              backgroundColor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.backgroundColor = "rgba(224,177,94,0.7)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 22 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5",
            role: "tablist",
            "aria-label": "Slide navigation",
            children: SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": i === currentIndex,
                "aria-label": `Go to slide ${i + 1}`,
                "data-ocid": `hero.dot.${i + 1}`,
                onClick: () => goTo(i),
                className: "rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1",
                style: {
                  width: i === currentIndex ? "28px" : "8px",
                  height: "8px",
                  backgroundColor: i === currentIndex ? "var(--color-secondary)" : "rgba(255,255,255,0.5)"
                }
              },
              `dot-${s.tag}`
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "aria-label": "Scroll down",
            onClick: scrollDown,
            "data-ocid": "hero.scroll_down_button",
            className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow cursor-pointer z-20",
            style: { color: "rgba(255,255,255,0.65)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs tracking-widest uppercase", children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 22 })
            ]
          }
        )
      ]
    }
  );
}
function TestimonialCard({
  quote,
  guestName,
  location,
  rating
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: "p-6 rounded-resort-lg relative",
      style: {
        backgroundColor: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "font-accent text-7xl leading-none absolute top-3 left-5 pointer-events-none select-none",
            style: { color: "var(--color-secondary)", opacity: 0.35 },
            "aria-hidden": "true",
            children: '"'
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            size: 14,
            fill: star <= rating ? "var(--color-secondary)" : "transparent",
            style: { color: "var(--color-secondary)" }
          },
          star
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-body text-sm leading-relaxed mb-6 relative z-10",
            style: { color: "rgba(255,255,255,0.75)" },
            children: [
              '"',
              quote,
              '"'
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-base shrink-0",
              style: {
                backgroundColor: "rgba(212,168,83,0.2)",
                color: "var(--color-secondary)"
              },
              children: guestName.charAt(0)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body font-semibold text-sm",
                style: { color: "rgba(255,255,255,0.9)" },
                children: guestName
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs",
                style: { color: "rgba(255,255,255,0.5)" },
                children: location
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const testimonials = [
  {
    quote: "An extraordinary experience that surpassed all expectations. The forest views from our suite were simply magical, and the staff made us feel like royalty.",
    guestName: "Priya & Rajesh Sharma",
    location: "Mumbai, India",
    rating: 5
  },
  {
    quote: "Divyam Resorts redefined luxury for us. Every detail — from the organic toiletries to the impeccable service — spoke of true excellence.",
    guestName: "James & Sarah Mitchell",
    location: "London, UK",
    rating: 5
  },
  {
    quote: "We celebrated our anniversary here and it was beyond perfect. The honeymoon suite was breathtaking and the private dining experience was unforgettable.",
    guestName: "Arjun & Meera Nair",
    location: "Bangalore, India",
    rating: 5
  }
];
function TestimonialsSection() {
  const ref = reactExports.useRef(null);
  const isVisible = useIntersectionObserver(
    ref
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      "data-ocid": "testimonials.section",
      className: "section-padding",
      style: { backgroundColor: "var(--color-bg-dark)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body font-semibold tracking-[0.25em] text-xs uppercase",
                  style: { color: "var(--color-secondary)" },
                  children: "Guest Experiences"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-heading font-bold text-4xl mt-2 mb-4",
                  style: { color: "rgba(255,255,255,0.95)" },
                  children: "What Our Guests Say"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-base max-w-xl mx-auto",
                  style: { color: "rgba(255,255,255,0.55)" },
                  children: "Hear from the guests who have experienced the magic of Divyam Resorts first-hand"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
            children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-ocid": `testimonials.item.${i + 1}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TestimonialCard,
              {
                quote: t.quote,
                guestName: t.guestName,
                location: t.location,
                rating: t.rating
              }
            ) }, t.guestName))
          }
        )
      ] })
    }
  );
}
function GalleryGrid({ images }) {
  var _a, _b;
  const [lightboxIndex, setLightboxIndex] = reactExports.useState(null);
  const gridImages = images.slice(0, 6);
  const gridClasses = [
    "row-span-2",
    "col-span-1",
    "col-span-1",
    "col-span-1",
    "col-span-1",
    "col-span-1"
  ];
  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px]", children: gridImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "data-ocid": `gallery.item.${i + 1}`,
        "aria-label": `View ${img.alt}`,
        className: `relative overflow-hidden rounded-resort-lg cursor-pointer group ${gridClasses[i] ?? ""} p-0 border-0 bg-transparent`,
        onClick: () => openLightbox(i),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: img.src,
              alt: img.alt,
              className: "w-full h-full object-cover transition-smooth group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth",
              style: { backgroundColor: "rgba(44,95,46,0.5)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-full flex items-center justify-center",
                  style: { backgroundColor: "rgba(255,255,255,0.9)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { size: 20, style: { color: "var(--color-primary)" } })
                }
              )
            }
          )
        ]
      },
      img.src
    )) }),
    lightboxIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
        style: { backgroundColor: "rgba(0,0,0,0.92)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover:scale-110",
              style: { backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" },
              onClick: closeLightbox,
              "aria-label": "Close lightbox",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: (_a = gridImages[lightboxIndex]) == null ? void 0 : _a.src,
              alt: (_b = gridImages[lightboxIndex]) == null ? void 0 : _b.alt,
              className: "max-w-full max-h-[85vh] object-contain rounded-resort-lg"
            }
          )
        ]
      }
    )
  ] });
}
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    alt: "Luxury resort bedroom"
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    alt: "Private pool villa"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    alt: "Resort aerial view"
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    alt: "Resort suite interior"
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    alt: "Forest view room"
  },
  {
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    alt: "Mountain suite balcony"
  }
];
function GallerySection() {
  const ref = reactExports.useRef(null);
  const isVisible = useIntersectionObserver(
    ref
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref,
      "data-ocid": "gallery.section",
      className: "section-padding",
      style: { backgroundColor: "var(--color-bg-primary)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body font-semibold tracking-[0.25em] text-xs uppercase",
                  style: { color: "var(--color-secondary)" },
                  children: "Visual Journey"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-heading font-bold text-4xl mt-2 mb-4",
                  style: { color: "var(--color-text-primary)" },
                  children: "Resort Gallery"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-base max-w-xl mx-auto",
                  style: { color: "var(--color-text-secondary)" },
                  children: "A glimpse into the natural beauty and impeccable luxury that awaits you at Divyam Resorts"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryGrid, { images: galleryImages })
          }
        )
      ] })
    }
  );
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedRooms, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AmenitiesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GallerySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  Home
};
