import { nav } from "@/constants/nav";
import React from "react";
import NavLink from "./NavLink";
import ImageWithFallback from "../ImageWithFallback";
import Button from "../Button/Button";
import LanguageSelector from "../LanguageSelector";
import Divider from "../Divider";
import Typography from "../Typography";
import CustomLink from "../CustomLink";

const NavMenu = () => {
  return (
    <div className=' flex gap-[3.75rem] bg-white/95 items-center justify-center py-[1.875rem] '>
      <ImageWithFallback
        src={"/assets/nav-logo.svg"}
        width={212.78}
        height={45}
      />
      <div className='flex gap-6'>
        {nav.map((item) => (
          <NavLink key={item.title} title={item.title} href={item.href} />
        ))}
      </div>
      <div className='flex gap-5 '>
        <LanguageSelector />
        <Divider />
        <div className='flex gap-5 justify-center items-center'>
          <Typography.Body className='text-gray-500'>Login</Typography.Body>
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
  );
};

export default NavMenu;
