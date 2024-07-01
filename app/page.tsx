import Button from "@/components/Button/Button";
import CustomLink from "@/components/CustomLink";
import Hero from "@/components/Sections/Hero/HeroSection";
import Typography from "@/components/Typography";

import React from "react";

const Page = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-11 '>
      <Button variant={"primary"}>Our Products</Button>
      <Button variant={"secondary"}>Learn More</Button>
      <CustomLink
        href={"/"}
        variant={"onlyIcon"}
        iconProps={{
          iconUrl: "/assets/icon/nav-search-icon.svg",
          position: "left",
          alt: "Search Icon",
        }}
      >
        iGaming
      </CustomLink>
      <CustomLink
        href={"/"}
        variant={"withIcon"}
        iconProps={{
          iconUrl: "/assets/icon/menu-payment-icon.svg",
          position: "left",
          alt: "Payment Icon",
        }}
        description
        textDescription={"Online Payments"}
      >
        Payments
      </CustomLink>
      <CustomLink
        href={"/"}
        variant={"withIcon"}
        iconProps={{
          iconUrl: "/assets/icon/gaming-icon.svg",
          position: "left",
          alt: "Gaming Icon Button",
        }}
      >
        iGaming
      </CustomLink>
      <CustomLink
        href={"/"}
        variant={"withIcon"}
        iconProps={{
          iconUrl: "/assets/icon/right-arrow.svg",
          height: 10,
          width: 10,
          noBG: true,
          position: "left",
          alt: "right arrow icon",
        }}
      >
        TEST LINK
      </CustomLink>
      <CustomLink
        className='text-primary-variant-1 group-hover:text-primary-variant-2'
        href={"/"}
        variant={"withIcon"}
        iconProps={{
          iconUrl: "/assets/icon/right-arrow.svg",
          noBG: true,
          height: 10,
          width: 10,
          position: "right",
          alt: "right arrow icon",
        }}
      >
        TEST LINK
      </CustomLink>{" "}
      <CustomLink
        className='text-primary-variant-2 group-hover:text-secondary'
        href={"/"}
        variant={"withIcon"}
        iconProps={{
          iconUrl: "/assets/icon/right-arrow.svg",
          noBG: true,
          height: 10,
          width: 10,
          position: "right",
          alt: "right arrow icon",
        }}
      >
        TEST LINK
      </CustomLink>
      <CustomLink href={"/"} variant={"noIcon"}>
        FOOTER LINK
      </CustomLink>
      {/* <Hero /> */}
    </div>
  );
};

export default Page;
