import Button from "@/components/Button";

import React from "react";
import { nav } from "@/constants/nav";
import NavLink from "@/components/Navigation/NavLink";

const Page = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-11'>
      <Button buttonType={"primary"}>Our Products</Button>
      <Button buttonType={"secondary"}>Learn More</Button>
    </div>
  );
};

export default Page;
