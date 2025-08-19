import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/ui/**/*.{js,ts,jsx,tsx}",
  "./src/lib/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
     rotate: {
        'y-180': 'rotateY(180deg)',
      },
    fontFamily: {
      sans: ["'Space Grotesk'", ..._fontFamily.sans],
      mono: ["'IBM Plex Mono'", ..._fontFamily.mono],
    },
    colors: {
      primary: {
        DEFAULT: "#3B82F6",
        dark: "#1D4ED8",
        light: "#e0e5ec",
        primary: "#0077ff",

      },
      neutral: {
        DEFAULT: "#E5E7EB",
        light: "#F9FAFB",
        dark: "#111827",
      },
    },
    borderWidth: {
      DEFAULT: "2px",
    },
    borderRadius: {
      lg: "0.375rem",
    },
  },

};
export const plugins = [];
