import React from "react";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Divider from "../Divider/Divider";
import Typography from "../Typography";
import Button from "../Button/Button";
import CustomLink from "../CustomLink/CustomLink";

const MobileNav = () => {
  return (
    <div>
      <div className='desktop:hidden max-w-[1440px] m-auto px-5 flex items-center justify-between gap-5 py-[1.875rem]  overflow-hidden'>
        <ImageWithFallback
          src={"/assets/nav-logo.svg"}
          width={212.78}
          height={35}
        />

        <Button variant={"gradient"}>Start Now</Button>
      </div>
    </div>
  );
};

export default MobileNav;
