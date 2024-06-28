import React, { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import SmartLink from "../SmartLink";
import ImageFallback from "../ImageFallback";
import Image from "next/image";

type Props = {
  title: string;
  className?: string;
  iconUrl?: string | null;
  description?: string;
  href: string;
} & Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "className"
>;

const Link = ({ title, className, href }: Props) => {
  return (
    <SmartLink href={href}>
      <div className='text-subhead-regular-sm capitalize rounded-full hover:bg-primary-variant-3 py-[0.5rem] px-[0.938rem]'>
        {title}
      </div>
    </SmartLink>
  );
};

export default Link;
