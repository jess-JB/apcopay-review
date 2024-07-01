"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant, className }))}>
      {children}
    </button>
  );
};

const buttonVariants = cva(
  "inline-flex justify-center items-center rounded-lg text-subhead-regular-sm px-[1.875rem] py-[0.688rem] hover:cursor-pointer border transition-all delay-100",
  {
    variants: {
      variant: {
        primary:
          "border-secondary bg-secondary text-dark hover:border-primary hover:bg-primary hover:text-white active:border-primary active:bg-primary  disabled:bg-secondary",
        secondary:
          "border-primary bg-primary  text-white hover:border-primary-variant-2 hover:bg-primary-variant-2 active:border-primary active:bg-primary  disabled:bg-secondary",
        gradient:
          "text-white px-[1.875rem] py-[0.688rem] relative bg-gradient-to-r from-primary to-primary-variant-2 z-10 overflow-hidden button-gradient",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default Button;
