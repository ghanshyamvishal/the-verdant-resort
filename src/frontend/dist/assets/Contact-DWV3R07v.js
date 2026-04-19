import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, M as MapPin, P as Phone, a as Mail } from "./index-eJEhzJ6C.js";
import { B as Button } from "./ResortButton-D1D1fIoN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
const initialForm = {
  name: "",
  email: "",
  phone: "",
  checkin: "",
  checkout: "",
  roomType: "",
  requests: ""
};
const roomTypes = [
  "All Rooms",
  "Deluxe Forest Room",
  "Mountain View Suite",
  "Private Pool Villa",
  "Family Cottage",
  "Honeymoon Suite",
  "Presidential Suite"
];
const quickCards = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 98765 43210",
    sub: "Available 24/7",
    cta: "Call Now",
    href: "tel:+919876543210",
    ocid: "contact.call_card"
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "hello@divyamresorts.com",
    sub: "Response within 4 hours",
    cta: "Send Email",
    href: "mailto:hello@divyamresorts.com",
    ocid: "contact.email_card"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    info: "+91 98765 43210",
    sub: "Quick chat available",
    cta: "WhatsApp Us",
    href: "https://wa.me/919876543210",
    ocid: "contact.whatsapp_card"
  }
];
const inputClass = "w-full border border-gray-300 rounded-md p-3 font-body text-sm transition-smooth focus:outline-none focus:border-primary bg-white";
function Contact() {
  const [form, setForm] = reactExports.useState(initialForm);
  const [submitted, setSubmitted] = reactExports.useState(false);
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "contact.hero_section",
        className: "relative flex items-center justify-center text-center",
        style: { minHeight: "350px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920",
              alt: "Contact Divyam Resorts",
              className: "absolute inset-0 w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-4 fade-in-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-accent text-sm uppercase tracking-widest mb-3",
                style: { color: "var(--color-secondary)" },
                children: "Divyam Resorts"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-heading text-5xl md:text-6xl font-bold text-white mb-4", children: "Get In Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-lg max-w-xl mx-auto",
                style: { color: "rgba(255,255,255,0.70)" },
                children: "We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "contact.contact_section",
        className: "section-padding px-4 md:px-8 lg:px-16",
        style: { backgroundColor: "var(--color-bg-primary)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-10 lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 lg:w-3/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-heading text-3xl font-semibold mb-8",
                style: { color: "var(--color-text-primary)" },
                children: "Send Us a Message"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex flex-col gap-5", noValidate: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "name",
                    className: "block font-body text-sm font-semibold mb-1.5",
                    style: { color: "var(--color-text-secondary)" },
                    children: [
                      "Full Name",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--color-accent)" }, children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "name",
                    name: "name",
                    type: "text",
                    required: true,
                    value: form.name,
                    onChange: handleChange,
                    placeholder: "Your full name",
                    className: inputClass,
                    "data-ocid": "contact.name_input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "email",
                      className: "block font-body text-sm font-semibold mb-1.5",
                      style: { color: "var(--color-text-secondary)" },
                      children: [
                        "Email",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--color-accent)" }, children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "email",
                      name: "email",
                      type: "email",
                      required: true,
                      value: form.email,
                      onChange: handleChange,
                      placeholder: "your@email.com",
                      className: inputClass,
                      "data-ocid": "contact.email_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "phone",
                      className: "block font-body text-sm font-semibold mb-1.5",
                      style: { color: "var(--color-text-secondary)" },
                      children: "Phone"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "phone",
                      name: "phone",
                      type: "tel",
                      value: form.phone,
                      onChange: handleChange,
                      placeholder: "+91 00000 00000",
                      className: inputClass,
                      "data-ocid": "contact.phone_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "checkin",
                      className: "block font-body text-sm font-semibold mb-1.5",
                      style: { color: "var(--color-text-secondary)" },
                      children: "Check-in Date"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "checkin",
                      name: "checkin",
                      type: "date",
                      value: form.checkin,
                      onChange: handleChange,
                      className: inputClass,
                      "data-ocid": "contact.checkin_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "label",
                    {
                      htmlFor: "checkout",
                      className: "block font-body text-sm font-semibold mb-1.5",
                      style: { color: "var(--color-text-secondary)" },
                      children: "Check-out Date"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "checkout",
                      name: "checkout",
                      type: "date",
                      value: form.checkout,
                      onChange: handleChange,
                      className: inputClass,
                      "data-ocid": "contact.checkout_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "roomType",
                    className: "block font-body text-sm font-semibold mb-1.5",
                    style: { color: "var(--color-text-secondary)" },
                    children: "Room Type"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    id: "roomType",
                    name: "roomType",
                    value: form.roomType,
                    onChange: handleChange,
                    className: inputClass,
                    "data-ocid": "contact.roomtype_select",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a room type" }),
                      roomTypes.map((rt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: rt, children: rt }, rt))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "requests",
                    className: "block font-body text-sm font-semibold mb-1.5",
                    style: { color: "var(--color-text-secondary)" },
                    children: "Special Requests"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    id: "requests",
                    name: "requests",
                    rows: 4,
                    value: form.requests,
                    onChange: handleChange,
                    placeholder: "Any special requirements or questions...",
                    className: `${inputClass} resize-none`,
                    "data-ocid": "contact.requests_textarea"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "filled",
                  size: "lg",
                  className: "w-full",
                  onClick: handleSubmit,
                  "data-ocid": "contact.submit_button",
                  children: "Send Enquiry"
                }
              ) }),
              submitted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "contact.success_state",
                  className: "flex items-center gap-3 p-4 rounded-xl border",
                  style: {
                    backgroundColor: "rgba(32, 51, 31, 0.08)",
                    borderColor: "var(--color-primary)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                        style: { backgroundColor: "var(--color-primary)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "w-4 h-4 text-white",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2.5,
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M5 13l4 4L19 7"
                              }
                            )
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-sm font-medium",
                        style: { color: "var(--color-primary)" },
                        children: "Thank you! We'll get back to you within 24 hours."
                      }
                    )
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-2/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-heading text-3xl font-semibold mb-8",
                style: { color: "var(--color-text-primary)" },
                children: "Contact Information"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5 mb-8", children: [
              {
                icon: MapPin,
                label: "Address",
                value: "Nilgiri Hills, Tamil Nadu 643001, India",
                href: void 0
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 98765 43210",
                href: "tel:+919876543210"
              },
              {
                icon: Mail,
                label: "Email",
                value: "hello@divyamresorts.com",
                href: "mailto:hello@divyamresorts.com"
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+91 98765 43210",
                href: "https://wa.me/919876543210"
              }
            ].map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                  style: { backgroundColor: "rgba(32, 51, 31, 0.10)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Icon,
                    {
                      className: "w-5 h-5",
                      style: { color: "var(--color-primary)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs uppercase tracking-wider font-semibold mb-0.5",
                    style: { color: "var(--color-text-muted)" },
                    children: label
                  }
                ),
                href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href,
                    className: "font-body text-sm transition-smooth hover:opacity-70",
                    style: { color: "var(--color-text-primary)" },
                    target: href.startsWith("http") ? "_blank" : void 0,
                    rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
                    children: value
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm",
                    style: { color: "var(--color-text-primary)" },
                    children: value
                  }
                )
              ] })
            ] }, label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-full h-px mb-8",
                style: { backgroundColor: "var(--color-bg-secondary)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-heading text-xl font-semibold mb-4",
                  style: { color: "var(--color-text-primary)" },
                  children: "Opening Hours"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: [
                { label: "Check-in", value: "2:00 PM" },
                { label: "Check-out", value: "11:00 AM" },
                { label: "Reception", value: "24/7" }
              ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex justify-between items-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-sm",
                        style: { color: "var(--color-text-secondary)" },
                        children: label
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-body text-sm font-semibold",
                        style: { color: "var(--color-primary)" },
                        children: value
                      }
                    )
                  ]
                },
                label
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2701569764157!2d76.6913!3d11.4064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI0JzIzLjAiTiA3NsKwNDEnMjguNiJF!5e0!3m2!1sen!2sin!4v1620000000000",
                width: "100%",
                height: "250",
                style: { border: 0 },
                allowFullScreen: true,
                loading: "lazy",
                className: "rounded-xl mt-4",
                title: "Divyam Resorts — Nilgiri Hills"
              }
            )
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "contact.quick_cards_section",
        className: "section-padding px-4 md:px-8 lg:px-16",
        style: { backgroundColor: "var(--color-bg-secondary)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "font-heading text-3xl font-semibold",
                style: { color: "var(--color-text-primary)" },
                children: "Reach Us Instantly"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body mt-2",
                style: { color: "var(--color-text-secondary)" },
                children: "Choose the channel that works best for you."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: quickCards.map(
            ({ icon: Icon, title, info, sub, cta, href, ocid }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": ocid,
                className: "flex flex-col items-center text-center p-8 rounded-xl transition-smooth hover:scale-[1.02] hover:shadow-resort-hover cursor-pointer",
                style: {
                  backgroundColor: "var(--color-bg-card)",
                  boxShadow: "var(--shadow-card)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-full flex items-center justify-center mb-5",
                      style: { backgroundColor: "rgba(32, 51, 31, 0.10)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Icon,
                        {
                          className: "w-7 h-7",
                          style: { color: "var(--color-primary)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-heading text-xl font-semibold mb-2",
                      style: { color: "var(--color-text-primary)" },
                      children: title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm font-medium mb-1",
                      style: { color: "var(--color-text-primary)" },
                      children: info
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-body text-sm mb-6",
                      style: { color: "var(--color-text-muted)" },
                      children: sub
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href,
                      target: href.startsWith("http") ? "_blank" : void 0,
                      rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
                      className: "inline-flex items-center gap-2 font-body text-sm font-semibold transition-smooth hover:underline underline-offset-4",
                      style: { color: "var(--color-primary)" },
                      "data-ocid": `${ocid}.link`,
                      children: [
                        cta,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "path",
                              {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                              }
                            )
                          }
                        )
                      ]
                    }
                  )
                ]
              },
              title
            )
          ) })
        ] })
      }
    )
  ] });
}
export {
  Contact
};
