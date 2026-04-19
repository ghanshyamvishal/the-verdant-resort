# Design Brief: The Verdant Resort

## Tone & Purpose
Luxury resort website inspiring bookings for exclusive mountain/forest retreat. Refined minimalism with organic warmth. Think Aman Hotels aesthetic: generous whitespace, serif-first typography, nature-grounded palette, selective prestige accents.

## Visual Direction
Editorial magazine-like authority through serif headings paired with refined sans-serif body. Forest green + warm gold creates intentional luxury (not generic). Alternating warm section backgrounds establish rhythm without heavy decoration.

## Color Palette (OKLCH)

| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| Primary (Forest Green) | 50 0.13 160 | #2C5F2E | Navigation, primary buttons, trust elements |
| Secondary (Warm Gold) | 70 0.18 70 | #D4A853 | CTAs, highlights, prestige accents |
| Accent (Earthy Brown) | 45 0.13 40 | #8B4513 | Secondary accents, grounding elements |
| Background Light | 98 0.01 80 | #FAFAF8 | Main background, primary sections |
| Background Warm | 92 0.02 70 | #F0EDE8 | Alternating sections (rhythm) |
| Background Dark | 12 0.01 250 | #1C1C1C | Dark sections, footer |
| Text Primary | 20 0.01 250 | #1A1A1A | Body text, headings (light mode) |
| Text Muted | 55 0.01 250 | #888888 | Secondary text, meta information |
| White/Card | 100 0 0 | #FFFFFF | Cards, content containers |

## Typography

| Layer | Font | Usage | Specs |
|-------|------|-------|-------|
| Display | Fraunces (serif) | H1–H3 headings, hero text | 400–900 weight, elegant high-impact |
| Body | DM Sans (sans-serif) | Paragraph text, body copy, labels | 400–700 weight, refined readable |
| Accent | Lora (serif) | Taglines, subheadings, luxury text | 400–700 weight, elegant secondary |

## Shape Language
- Card radius: 12px (soft, approachable)
- Input/subtle radius: 4px (minimal, functional)
- Shadow hierarchy: subtle (card), elevated (hover), hover scale 1.02

## Structural Zones

| Zone | Background | Treatment | Purpose |
|------|-----------|-----------|---------|
| Navbar (sticky) | Transparent → white on scroll | Border-bottom on scroll | Navigation, hierarchy |
| Hero Section | Background image + dark overlay | Full viewport height | Immersive entry |
| Content Sections | Alternating light (#FAFAF8) / warm (#F0EDE8) | 5rem vertical padding | Rhythm, visual breathing |
| Cards (rooms, testimonials) | White (#FFFFFF) with shadow-card | Hover: shadow-elevated + scale-102 | Interactivity, depth |
| Dark Sections (testimonials, footer) | #1C1C1C background | White/warm text | Contrast, prestige |
| Footer | #1C1C1C background | Border-top subtle | Grounding, information |

## Component Patterns
- **Buttons (two variants):** Filled (bg-secondary text-dark) and outline (border-primary text-primary). Gold sparingly on CTAs.
- **Room/Testimonial Cards:** White card with subtle shadow, hover → elevated shadow + slight scale. Price in gold accent.
- **Forms:** Primary color focus ring, warm beige input background on focus.
- **Icons:** Paired with text for amenities, features, social links.

## Motion & Transitions
- Default transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Fade-in: 0.4s ease-out (scroll-triggered)
- Slide-up: 0.5s ease-out (entry animations)
- Hover scale: 1.02 on cards, subtle shadow shift

## Responsive Breakpoints
- Mobile (320px): Single column, full-width padding
- Tablet (768px): Two-column grids, larger padding
- Desktop (1024px): Three-column grids, balanced whitespace
- Large (1440px): Max-width container, generous margins

## Anti-Patterns to Avoid
- Do NOT use generic blue or purple gradients.
- Do NOT apply gold uniformly; reserve for CTAs and highlights.
- Do NOT use uniform rounded corners; vary intentionally (0, 4px, 12px).
- Do NOT flatten hierarchy with same background everywhere; alternate section backgrounds.
- Do NOT over-animate; motion is purposeful and subtle.

## Signature Detail
Gold accent used exclusively for primary CTAs ("Book Now", "View Details") and price highlights — creates visual scarcity and prestige. Serif headings establish editorial authority and differentiate from generic tech-luxury sites.

## Accessibility
- Foreground-on-background: min 0.7 lightness difference
- Interactive elements: min 44px touch targets, focus ring always visible
- Contrast ratio: WCAG AA+ maintained in light and dark modes

## Design Assets
- Preview: `.platform/design/preview-1776615243919.jpg`
- Fonts: Fraunces (display), DM Sans (body), Lora (accent) — loaded from `/assets/fonts/`
