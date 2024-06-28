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
        iconUrl={"/assets/icon/gaming-icon.svg"}
        iconProps={{ width: 30, height: 30, alt: "ALT" }}
        hoverColor={"hover:primary"}
        title={"iGaming"}
        description={"Gaming Purposes"}
      />
      <CustomLink
        href={"/"}
        icon={true}
        iconUrl={"/assets/icon/menu-payment-icon.svg"}
        iconProps={{ width: 30, height: 30, alt: "ALT" }}
        hoverColor={"hover:primary"}
        title={"Payments"}
      />
    </div>
  );
};

export default Page;
