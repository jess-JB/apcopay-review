"use client";

import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  forwardRef,
  memo,
} from "react";
import classNames from "classnames";

/**
 * Extends the default button html tag to apply style based on the button type
 * @param children
 * @param buttonType 'primary' | 'secondary' | 'secondary' | 'gradient-primary' | 'gradient-secondary'
 * @param mini
 * @param className additional classnames to further customize the button
 * @param as
 * @param props other button props
 * @constructor
 */

type ButtonProps = {
  children: React.ReactNode;
  buttonType: "primary" | "secondary" | "gradientPrimary" | "gradientSecondary";
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, buttonType = "primary", className, ...props },
  ref
) {
  const buttonVariants = {
    primary: "button-primary",
    secondary: "button-secondary",
    gradientPrimary: "button-gradient-primary",
    gradientSecondary: "button-gradient-secondary",
  };

  return (
    <button
      ref={ref}
      className={classNames(buttonVariants[buttonType], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default memo(Button);
