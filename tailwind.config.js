/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      // Nautical theme colors
      navy: {
        900: "#0a192f",
        800: "#112240",
        700: "#1d3557",
        600: "#2a4365",
      },
      gold: {
        400: "#f7d070",
        500: "#e6c200",
        600: "#d4af37",
      },
      teal: {
        300: "#64ffda",
        400: "#38bdf8",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
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
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
    boxShadow: {
      "glow-gold": "0 0 15px rgba(230, 194, 0, 0.5)",
      "glow-teal": "0 0 15px rgba(100, 255, 218, 0.5)",
    },
    perspective: {
      default: "1000px",
    },
    backfaceVisibility: {
      hidden: "hidden",
    },
    transformStyle: {
      "preserve-3d": "preserve-3d",
    },
  },
};
export const plugins = [
  tailwindcssAnimate,
  function ({ addUtilities }) {
    const newUtilities = {
      ".perspective": {
        perspective: "1000px",
      },
      ".preserve-3d": {
        transformStyle: "preserve-3d",
      },
      ".backface-hidden": {
        backfaceVisibility: "hidden",
      },
    };
    addUtilities(newUtilities);
  },
];