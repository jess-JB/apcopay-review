import Button from "@/components/Button";
import React from "react";

const Page = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-11'>
      <Button buttonType={"primary"}>Our Products</Button>
      <Button buttonType={"secondary"}>Learn More</Button>
      <Button buttonType={"gradient"}>Start Now</Button>
    </div>
  );
};

export default Page;
