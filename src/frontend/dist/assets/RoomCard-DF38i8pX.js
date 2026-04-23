import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-CByRBKgt.js";
import { U as Users } from "./rooms-Eo8FehO-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12", key: "yd12zl" }],
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "larmp2"
    }
  ],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5", key: "1x1kqn" }]
];
const AirVent = createLucideIcon("air-vent", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]];
const Mountain = createLucideIcon("mountain", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
];
const Wifi = createLucideIcon("wifi", __iconNode);
const amenityIcons = {
  WiFi: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { size: 14 }),
  AC: /* @__PURE__ */ jsxRuntimeExports.jsx(AirVent, { size: 14 }),
  "Forest View": /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { size: 14 }),
  "Mountain View": /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { size: 14 }),
  "Pool View": /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { size: 14 })
};
const TOP_AMENITIES = [
  "WiFi",
  "AC",
  "Forest View",
  "Mountain View",
  "Pool View"
];
function RoomCard({ room, index = 0 }) {
  const displayAmenities = room.amenities.filter((a) => TOP_AMENITIES.includes(a)).slice(0, 3);
  if (displayAmenities.length < 3) {
    const extras = room.amenities.filter((a) => !TOP_AMENITIES.includes(a)).slice(0, 3 - displayAmenities.length);
    for (const a of extras) {
      displayAmenities.push(a);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      "data-ocid": `rooms.item.${index + 1}`,
      className: "group card-3d card-shimmer rounded-resort-lg overflow-hidden transition-smooth cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden h-56", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: room.images[0],
              alt: room.name,
              className: "w-full h-full object-cover transition-smooth group-hover:scale-110"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)"
              }
            }
          ),
          room.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute top-3 left-3 px-3 py-1 rounded-full font-body font-semibold text-xs",
              style: {
                backgroundColor: room.badge === "Best Seller" ? "var(--color-secondary)" : "var(--color-primary)",
                color: room.badge === "Best Seller" ? "var(--color-primary-dark)" : "#fff"
              },
              children: room.badge
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-heading font-semibold text-lg leading-tight",
                style: { color: "var(--color-text-primary)" },
                children: room.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2 py-0.5 rounded-full font-body text-xs font-medium shrink-0",
                style: {
                  backgroundColor: "rgba(45,90,39,0.08)",
                  color: "var(--color-primary)"
                },
                children: room.type
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-sm leading-relaxed mb-4 line-clamp-2",
              style: { color: "var(--color-text-secondary)" },
              children: room.description
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mb-4", children: displayAmenities.map((amenity) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5",
              style: { color: "var(--color-text-muted)" },
              children: [
                amenityIcons[amenity] ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs", children: amenity })
              ]
            },
            amenity
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-4 pb-4 mb-4",
              style: { borderBottom: "1px solid rgba(45,90,39,0.10)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5",
                    style: { color: "var(--color-text-muted)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-xs", children: [
                        "Up to ",
                        room.maxGuests
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-xs",
                    style: { color: "var(--color-text-muted)" },
                    children: room.bedType
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-body text-xs",
                    style: { color: "var(--color-text-muted)" },
                    children: [
                      room.size,
                      " sq ft"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-body text-xs",
                  style: { color: "var(--color-text-muted)" },
                  children: "From"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: "font-heading font-bold text-xl",
                    style: { color: "var(--color-primary)" },
                    children: [
                      "₹",
                      room.price.toLocaleString("en-IN")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-xs",
                    style: { color: "var(--color-text-muted)" },
                    children: "/ night"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/rooms/$slug",
                params: { slug: room.slug },
                "data-ocid": `rooms.view_details_button.${index + 1}`,
                className: "btn-3d px-4 py-2 text-sm",
                children: "View Details"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  Mountain as M,
  RoomCard as R,
  Wifi as W
};
