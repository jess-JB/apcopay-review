import Button from "@/components/Button";
import Link from "@/components/Link";
import React from "react";
import { nav } from "@/constants/nav";

const Page = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-11'>
      <Button buttonType={"primary"}>Our Products</Button>
      <Button buttonType={"secondary"}>Learn More</Button>
      <Button buttonType={"gradient"}>Start Now</Button>
      {nav.map((item) => (
        <Link title={item.title} href={item.href} />
      ))}
    </div>
  );
};

export default Page;
