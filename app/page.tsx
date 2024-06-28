import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";

import React from "react";

const Page = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-11 '>
      <Button buttonType={"primary"}>Our Products</Button>
      <Button buttonType={"secondary"}>Learn More</Button>
      <CustomLink
        href={"/"}
        icon={true}
        iconHovered
        iconBg
        iconUrl={"/assets/icon/gaming-icon.svg"}
        iconProps={{ width: 30, height: 30, alt: "ALT" }}
        hoverColor={"hover:text-primary"}
        title={"iGaming"}
      />
      <CustomLink
        href={"/"}
        icon={true}
        iconHovered
        iconBg
        iconUrl={"/assets/icon/menu-payment-icon.svg"}
        iconProps={{ width: 25, height: 25, alt: "ALT" }}
        hoverColor={"hover:text-primary"}
        title={"Payments"}
        description={"Online Payments"}
      />
      <CustomLink
        href={"/"}
        icon={true}
        iconUrl={"/assets/icon/right-arrow.svg"}
        iconProps={{ width: 10, height: 10, alt: "ALT" }}
        hoverColor={"hover:text-primary"}
        title={"Europe"}
      />
    </div>
  );
};

export default Page;
