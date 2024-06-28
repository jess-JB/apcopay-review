import React, { Children } from "react";
import SmartLink from "../SmartLink";
import ImageWithFallback from "../ImageWithFallback";
import Typography from "../Typography";

type Props = {
  href: string;
  hoverColor?: string;
  iconHovered?: boolean;
  iconBg?: boolean;
  textSize?: string;
  children?: React.ReactNode;
  icon?: boolean;
  iconUrl?: string | null;
  iconProps?: {
    alt: string;
    width: number;
    height: number;
  };
  title?: string;
  description?: string;
};

const CustomLink = ({
  href,
  icon = false,
  hoverColor,
  iconHovered,
  iconBg,
  textSize,
  children,
  iconUrl = null,
  iconProps,
  title,
  description,
}: Props) => {
  return (
    <SmartLink href={href} className={`${textSize} ${hoverColor}`}>
      {icon && (
        <div className='flex gap-3 justify-center items-center group'>
          <div
            className={`${iconBg && "bg-primary-variant-4"} p-3 rounded-lg ${
              iconHovered &&
              "group-hover:bg-primary-variant-3 transition-all delay-100"
            }`}
          >
            <ImageWithFallback
              src={iconUrl}
              height={iconProps?.height}
              width={iconProps?.width}
              alt={iconProps?.alt}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <Typography.Headline
              level={3}
              className={`group-hover:text-primar1y transition-all delay-100`}
            >
              {title}
            </Typography.Headline>
            <Typography.Caption className=' text-gray-500'>
              {description}
            </Typography.Caption>
          </div>
        </div>
      )}
      {children}
    </SmartLink>
  );
};

export default CustomLink;
