import { lang } from "@/constants/nav";
import React from "react";
import Typography from "../Typography";
import ImageWithFallback from "../ImageWithFallback";
import SmartLink from "../SmartLink";

const LanguageSelector = () => {
  return (
    <div className='flex gap-2 justify-center items-center py-2 px-5 hover:bg-primary-variant-3 rounded-full'>
      <ImageWithFallback
        src={"/assets/icon/language-icon.svg"}
        width={20}
        height={20}
      />
      <SmartLink href={"/"}>
        <Typography.Subhead className='text-gray-500 uppercase'>
          {lang[0].title}
        </Typography.Subhead>
      </SmartLink>
    </div>
  );
};

export default LanguageSelector;
