import { nav } from "@/constants/nav";
import React from "react";
import NavLink from "./NavLink";
import ImageWithFallback from "../ImageWithFallback";
import Button from "../Button/Button";
import LanguageSelector from "../LanguageSelector";
import Divider from "../Divider";
import Typography from "../Typography";
import CustomLink from "../CustomLink";
import MobileNav from "./MobileNav";

const NavMenu = () => {
  return (
    <div className='w-full h-full bg-white/95'>
      <div className='mobile:max-w-screen-mobile tablet:max-w-screen-tablet desktop:max-w-[1440px] max-desktop:hidden m-auto px-5 flex items-center justify-between gap-5 py-[1.875rem]  overflow-hidden'>
        <ImageWithFallback
          src={"/assets/nav-logo.svg"}
          width={212.78}
          height={35}
        />
        <div className='flex gap-3'>
          {nav.map((item) => (
            <NavLink key={item.title} title={item.title} href={item.href} />
          ))}
        </div>
        <div className='flex gap-3 '>
          <LanguageSelector />
          <Divider />
          <div className='flex gap-3 justify-center items-center'>
            <Typography.Body level={2} className='text-gray-500'>
              Login
            </Typography.Body>
            <Button variant={"gradient"}>Start Now</Button>
            <CustomLink
              variant={"onlyIcon"}
              href='/'
              iconProps={{
                iconUrl: "/assets/icon/nav-support-icon.svg",
                alt: "Search Icon",
                width: 20,
                height: 20,
              }}
            />
            <CustomLink
              variant={"onlyIcon"}
              href='/'
              iconProps={{
                iconUrl: "/assets/icon/nav-search-icon.svg",
                alt: "Search Icon",
                width: 20,
                height: 20,
              }}
            />
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default NavMenu;
