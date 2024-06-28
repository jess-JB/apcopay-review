import React, { Children } from "react";
import SmartLink from "../SmartLink";
import ImageWithFallback from "../ImageWithFallback";

type Props = {
  href: string;
  hoverColor: string;
  textSize?: string;
  children?: React.ReactNode;
  icon?: boolean;
  iconUrl?: string | null;
  iconProps?: {
    alt: string;
    width: number;
    height: number;
  };
};

const CustomLink = ({
  href,
  icon = false,
  hoverColor,
  textSize,
  children,
  iconUrl = null,
  iconProps,
}: Props) => {
  return (
    <SmartLink href={href} className={`${textSize} ${hoverColor}`}>
      {icon ? (
        <ImageWithFallback
          src={iconUrl}
          height={iconProps?.height}
          width={iconProps?.width}
          alt={iconProps?.alt}
          className='hover:fill-primary'
        />
      ) : (
        ""
      )}
      {children}
    </SmartLink>
  );
};

export default CustomLink;
