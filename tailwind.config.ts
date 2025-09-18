import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        // Book-specific colors
        "warm-beige": "hsl(var(--warm-beige))",
        "soft-brown": "hsl(var(--soft-brown))",
        "deep-brown": "hsl(var(--deep-brown))",
        "cream": "hsl(var(--cream))",
        "sage": "hsl(var(--sage))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Accordion Animations
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" }
        },
        
        // Fade Animations
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)"
          },
          "100%": {
            opacity: "0",
            transform: "translateY(10px)"
          }
        },
        
        // Scale Animations
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" }
        },
        
        // Slide Animations
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        
        // Book-specific animations
        "book-hover": {
          "0%": { transform: "translateY(0) scale(1)" },
          "100%": { transform: "translateY(-4px) scale(1.02)" }
        },
        "card-glow": {
          "0%": { boxShadow: "0 4px 20px -4px hsl(var(--deep-brown) / 0.1)" },
          "100%": { boxShadow: "0 20px 40px -8px hsl(var(--deep-brown) / 0.25), 0 0 0 1px hsl(var(--primary) / 0.1)" }
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "card-entrance": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(20px) scale(0.95)",
            filter: "blur(4px)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0) scale(1)",
            filter: "blur(0px)"
          }
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" }
        }
      },
      animation: {
        // Basic Animations
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "scale-out": "scale-out 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        
        // Combined Animations
        "enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
        "exit": "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
        
        // Book Animations
        "book-hover": "book-hover 0.3s ease-out forwards",
        "card-glow": "card-glow 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "card-entrance": "card-entrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "bounce-subtle": "bounce-subtle 0.6s ease-in-out"
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        // Interactive Elements
        '.story-link': {
          '@apply relative inline-block after:content-[\'\'] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left': {}
        },
        '.hover-scale': {
          '@apply transition-transform duration-200 hover:scale-105': {}
        },
        '.hover-lift': {
          '@apply transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[var(--shadow-book)]': {}
        },
        '.card-hover-effect': {
          '@apply transition-all duration-500 ease-out hover:transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-8px_hsl(var(--deep-brown)_/_0.25),_0_0_0_1px_hsl(var(--primary)_/_0.1)]': {}
        },
        '.card-shimmer': {
          'background': 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.04), transparent)',
          'background-size': '200% 100%',
          '@apply animate-shimmer': {}
        },
        '.card-glow-border': {
          '@apply relative before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500': {}
        }
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
