export const textColors = {
  primary: "text-primary",
  "primary-variant-1": "text-primary-variant-1",
  "primary-variant-2": "text-primary-variant-2",
  secondary: "text-secondary",
  "secondary-variant-1": "text-secondary-variant-1",
  "secondary-variant-2": "text-secondary-variant-2",
  tertiary: "text-tertiary",
  "tertiary-variant-1": "text-tertiary-variant-1",
  "tertiary-variant-2": "text-tertiary-variant-2",
  white: "text-white",
  gray: "text-placeholder-variant",
  positive: "text-positive",
  "positive-2": "text-positive-2",
  negative: "text-negative",
  "negative-2": "text-negative-2",
  warning: "text-warning",
  "warning-2": "text-warning-2",
};

export const textLineClamp = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
};

export const textPosition = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export type ColorType =
  | "primary"
  | "primary-variant-1"
  | "primary-variant-2"
  | "secondary"
  | "secondary-variant-1"
  | "secondary-variant-2"
  | "tertiary"
  | "tertiary-variant-1"
  | "tertiary-variant-2"
  | "white"
  | "gray"
  | "positive"
  | "positive-2"
  | "negative"
  | "negative-2"
  | "warning"
  | "warning-2";

export type LineClamp = 1 | 2 | 3 | 4 | 5;

export type Position = "left" | "center" | "right";
