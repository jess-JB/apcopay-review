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
    <div className='flex gap-[3.75rem] bg-white items-center justify-center py-[1.875rem] px-[6.25rem]'>
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
          {/* <CustomLink
            href={"/"}
            icon={true}
            iconUrl={"/assets/icon/nav-support-icon.svg"}
            iconProps={{ height: 20, alt: "Support Icon", width: 20 }}
          />
          <CustomLink
            href={"/"}
            icon={true}
            iconUrl={"/assets/icon/nav-search-icon.svg"}
            iconProps={{ height: 20, alt: "Support Icon", width: 20 }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
