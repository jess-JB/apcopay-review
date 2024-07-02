import React from "react";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import Button from "../Button/Button";

const MobileNav = () => {
  return (
    <div>
      <div className='desktop:hidden max-w-[1440px] m-auto px-5 flex items-center justify-between gap-5 py-[1.875rem]  overflow-hidden'>
        <div className='flex gap-8'>
          <ImageWithFallback
            src={"/assets/icon/mobile-menu-icon.svg"}
            width={19}
            height={19}
          />
          <ImageWithFallback
            src={"/assets/icon/mobile-apcopay-logo.svg"}
            width={40}
            height={43}
          />
        </div>
        <Button variant={"gradient"}>Start Now</Button>
      </div>
    </div>
  );
};

export default MobileNav;
