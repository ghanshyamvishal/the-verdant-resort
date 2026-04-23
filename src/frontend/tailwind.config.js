import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        /* Shadcn compatibility */
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },

        /* ── Resort theme colors ──────────────────────────── */
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
          hover: "var(--color-secondary-hover)",
          active: "var(--color-secondary-active)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "oklch(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "var(--color-bg-card)",
          foreground: "var(--color-text-primary)",
        },

        /* ── Legacy aliases (backward compat) ─────────────── */
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        "bg-dark": "var(--color-bg-dark)",
        "bg-card": "var(--color-bg-card)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        "text-inverse": "var(--color-text-inverse)",

        /* ── New canonical color aliases ──────────────────── */
        "header-bg": "var(--color-header-bg)",

        /* Backgrounds */
        "color-bg": "var(--color-bg)",
        "color-bg-alt": "var(--color-bg-alt)",
        "color-surface": "var(--color-surface)",
        "color-surface-dark": "var(--color-surface-dark)",

        /* Text */
        "color-text": "var(--color-text)",
        "color-muted": "var(--color-muted)",
        "color-text-inverse": "var(--color-text-inverse)",

        /* Borders */
        "color-border": "var(--color-border)",
        "color-border-strong": "var(--color-border-strong)",
        "color-divider": "var(--color-divider)",

        /* Semantic */
        "color-success": "var(--color-success)",
        "color-success-bg": "var(--color-success-bg)",
        "color-danger": "var(--color-danger)",
        "color-danger-bg": "var(--color-danger-bg)",
        "color-warning": "var(--color-warning)",
        "color-info": "var(--color-info)",
      },

      fontFamily: {
        display: ["var(--font-display)", "serif"],
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      borderRadius: {
        /* Shadcn tokens */
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        /* Legacy resort tokens */
        resort: "var(--border-radius)",
        "resort-lg": "var(--border-radius-lg)",
        /* New canonical radius tokens */
        "radius-sm": "var(--radius-sm)",
        "radius-md": "var(--radius-md)",
        "radius-lg": "var(--radius-lg)",
        "radius-xl": "var(--radius-xl)",
        "radius-2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },

      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
        elevated: "0 12px 32px rgba(0,0,0,0.12)",
        subtle: "0 1px 4px rgba(0,0,0,0.06)",
        "3d": "var(--btn-shadow-3d)",
        "3d-hover": "var(--btn-shadow-3d-hover)",
        "3d-active": "var(--btn-shadow-3d-active)",
        /* New semantic shadow tokens */
        "shadow-sm": "var(--shadow-sm)",
        "shadow-md": "var(--shadow-md)",
        "shadow-lg": "var(--shadow-lg)",
        "shadow-xl": "var(--shadow-xl)",
      },

      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        section: "var(--spacing-section)",
      },

      transitionDuration: {
        DEFAULT: "300ms",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(12px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          from: { transform: "translateY(-12px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.3s ease-out",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
