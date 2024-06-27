import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "21.438rem",
      tablet: "43.5rem",
      desktop: "69.75rem",
    },
    container: {
      screens: {
        mobile: "21.438rem",
        tablet: "43.5rem",
        desktop: "69.75rem",
      },
    },
    extend: {
      spacing: {
        13: "3.25rem",
        18: "4.5rem",
        68: "17rem",
        84: "21rem",
        86: "21.5rem",
      },
      width: {
        13: "3.25rem",
        18: "4.5rem",
        68: "17rem",
        84: "21rem",
        86: "21.5rem",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "hero-1": [
          "2.875rem",
          {
            lineHeight: "3.438rem",
            fontWeight: "700",
          },
        ],
        "hero-1-md": [
          "2.75rem",
          {
            lineHeight: "3.313rem",
            fontWeight: "700",
          },
        ],
        "hero-1-sm": [
          "2.5rem",
          {
            lineHeight: "3rem",
            fontWeight: "700",
          },
        ],
        "hero-2": [
          "2.125rem",
          {
            lineHeight: "2.563rem",
            fontWeight: "700",
          },
        ],
        "hero-2-md": [
          "2.25rem",
          {
            lineHeight: "2.688rem",
            fontWeight: "700",
          },
        ],
        "hero-2-sm": [
          "2rem",
          {
            lineHeight: "2.375rem",
            fontWeight: "700",
          },
        ],
        "headline-1": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
          },
        ],
        "headline-1-md": [
          "2rem",
          {
            lineHeight: "2.375rem",
            fontWeight: "700",
          },
        ],
        "headline-1-sm": [
          "1.75rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "700",
          },
        ],
        "headline-2": [
          "1.625rem",
          {
            lineHeight: "1.938rem",
            fontWeight: "700",
          },
        ],
        "headline-2-md": [
          "1.75rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "700",
          },
        ],
        "headline-2-sm": [
          "1.5rem",
          {
            lineHeight: "1.813rem",
            fontWeight: "700",
          },
        ],
        "headline-3": [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "700",
          },
        ],
        "headline-3-md": [
          "1.375rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "700",
          },
        ],
        "headline-3-sm": [
          "1.125rem",
          {
            lineHeight: "1.375rem",
            fontWeight: "700",
          },
        ],
        "headline-4": [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        "headline-4-md": [
          "1.375rem",
          {
            lineHeight: "1.625rem",
            fontWeight: "400",
          },
        ],
        "headline-4-sm": [
          "1.125rem",
          {
            lineHeight: "1.375rem",
            fontWeight: "400",
          },
        ],
        "subhead-medium": [
          "1.125rem",
          {
            lineHeight: "148%",
            fontWeight: "400",
          },
        ],
        "subhead-medium-md": [
          "1.25rem",
          {
            lineHeight: "148%",
            fontWeight: "400",
          },
        ],
        "subhead-medium-sm": [
          "1rem",
          {
            lineHeight: "148%",
            fontWeight: "400",
          },
        ],
        "subhead-regular": [
          "1.125rem",
          {
            lineHeight: "148%",
            fontWeight: "600",
          },
        ],
        "subhead-regular-md": [
          "1.25rem",
          {
            lineHeight: "148%",
            fontWeight: "600",
          },
        ],
        "subhead-regular-sm": [
          "0.938rem",
          {
            lineHeight: "148%",
            fontWeight: "600",
          },
        ],
        "subhead-bold": [
          "1.125rem",
          {
            lineHeight: "148%",
            fontWeight: "700",
          },
        ],
        "subhead-bold-md": [
          "1.25rem",
          {
            lineHeight: "148%",
            fontWeight: "700",
          },
        ],
        "subhead-bold-sm": [
          "1rem",
          {
            lineHeight: "148%",
            fontWeight: "700",
          },
        ],
        "body-1": [
          "1.125rem",
          {
            lineHeight: "148%",
            fontWeight: "400",
          },
        ],
        "body-1-md": [
          "1.25rem",
          {
            lineHeight: "148%",
            fontWeight: "400",
          },
        ],
        "body-1-sm": [
          "1rem",
          {
            lineHeight: "1.188rem",
            fontWeight: "400",
          },
        ],
        "body-1-bold": [
          "1.125rem",
          {
            lineHeight: "1.375rem",
            fontWeight: "700",
          },
        ],
        "body-1-bold-md": [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "700",
          },
        ],
        "body-1-bold-sm": [
          "1rem",
          {
            lineHeight: "1.188rem",
            fontWeight: "700",
          },
        ],
        "body-2": [
          "1rem",
          {
            lineHeight: "148%",
            fontWeight: "400",
          },
        ],
        "body-2-md": [
          "1.125rem",
          {
            lineHeight: "148%",
            fontWeight: "400",
          },
        ],
        "body-2-sm": [
          "0.875rem",
          {
            lineHeight: "1.063rem",
            fontWeight: "400",
          },
        ],
        "body-2-bold": [
          "1rem",
          {
            lineHeight: "1.188rem",
            fontWeight: "700",
          },
        ],
        "body-2-bold-md": [
          "1.125rem",
          {
            lineHeight: "1.375rem",
            fontWeight: "700",
          },
        ],
        "body-2-bold-sm": [
          "0.875rem",
          {
            lineHeight: "1.063rem",
            fontWeight: "700",
          },
        ],
        caption: [
          "0.813rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        "caption-md": [
          "1rem",
          {
            lineHeight: "1.188rem",
            fontWeight: "400",
          },
        ],
        "caption-sm": [
          "0.688rem",
          {
            lineHeight: "0.813rem",
            fontWeight: "400",
          },
        ],
        footnote: [
          "0.875rem",
          {
            lineHeight: "1.063rem",
            fontWeight: "500",
          },
        ],
        "footnote-md": [
          "0.938rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "500",
          },
        ],
        "footnote-sm": [
          "0.75rem",
          {
            lineHeight: "0.875rem",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        primary: "#2A64E6",
        "primary-variant-1": "#4566AE",
        "primary-variant-2": "#45C2DA",
        "primary-variant-3": "#DAEDF1",
        secondary: "#E6AE2A",
        tertiary: "#3C3524",
        positive: "#1f8256",
        negative: "#c90000",
        warning: "#ff9900",
      },
      backgroundImage: {
        // bg-purple-variant-1 ... and so on
        "blue-variant-1":
          "linear-gradient(99.93deg, #2A64E6 3.58%, #45C2DA 95.71%",
        "blue-variant-2":
          "linear-gradient(137.91deg, #252D3D 2.5%, #2A64E6 95.61%)",
      },
      boxShadow: {
        // shadow-1
        1: "0 1.30178px 21.6964px rgba(0, 0, 0, 0.05)",
        menu: "0px 57px 50px rgba(0, 0, 0, 0.05)",
      },
      listStyleImage: {
        bullet: 'url("/assets/icons/mono/bullet.svg")',
        check: 'url("/assets/icons/mono/check.svg")',
        checkCircle: 'url("/assets/icons/mono/checkCircle.svg")',
        cross: 'url("/assets/icons/mono/closeRed.svg")',
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
export default config;
