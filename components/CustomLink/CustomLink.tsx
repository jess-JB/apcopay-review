"use client";

import React, { AnchorHTMLAttributes } from "react";
import SmartLink from "../SmartLink/SmartLink";
import Typography from "../Typography";
import ImageWithFallback from "../ImageWithFallback";

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  // ,VariantProps<typeof linkVariants>
  href: string;
  className?: string;
  variant: "noIcon" | "onlyIcon" | "withIcon";
  children: React.ReactNode;
  iconProps?: {
    iconUrl: string | undefined;
    width?: number;
    height?: number;
    alt: string;
    noBG?: boolean;
    position: "top" | "left" | "right";
  };
  description?: boolean;
  textDescription?: React.ReactNode;
}

const CustomLink = ({
  href,
  className,
  variant,
  children,
  iconProps,
  description,
  textDescription,
  ...props
}: CustomLinkProps) => {
  // ICONS
  const linkIcon: React.ReactNode = (
    <div
      className={`p-3 rounded-lg ${
        variant === "onlyIcon" || iconProps?.noBG
          ? "group-hover:fill-primary fill-primary"
          : "bg-primary-variant-4 group-hover:bg-primary-variant-3 transition-all delay-100"
      }`}
    >
      <ImageWithFallback
        src={iconProps?.iconUrl || null}
        width={iconProps?.width || 25}
        height={iconProps?.height || 25}
        alt={iconProps?.alt}
        className='fill-current text-black hover:text-blue-500'
      />
    </div>
  );

  const textClassname = `${className} transition-all delay-100 group-hover:text-primary`;

  return (
    <SmartLink href={href} {...props} className={`group`}>
      {/* NO ICON */}
      {variant === "noIcon" && (
        <Typography.Footnote className={textClassname}>
          {children}
        </Typography.Footnote>
      )}

      {/* ONLY ICON */}
      {variant === "onlyIcon" && (
        <div className='flex justify-center items-center gap-3'>{linkIcon}</div>
      )}

      {/* WITH ICON */}
      {variant === "withIcon" && (
        <div
          className={`${
            iconProps?.position === "right" ? "flex-row-reverse" : ""
          } flex justify-center items-center gap-3`}
        >
          {linkIcon}
          <div className={`${description && "flex flex-col gap-1"}`}>
            <Typography.Body level={1} strong className={textClassname}>
              {children}
            </Typography.Body>
            {description && (
              <Typography.Caption>{textDescription}</Typography.Caption>
            )}
          </div>
        </div>
      )}
    </SmartLink>
  );
};

export default CustomLink;
