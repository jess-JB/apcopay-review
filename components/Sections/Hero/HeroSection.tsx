import Button from "@/components/Button";
import Typography from "@/components/Typography";
import HeroTypography from "@/components/Typography/Hero";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=' w-full h-full  bg-gradient-to-r from-dark to-primary text-white'>
      <div className='mobile:max-w-screen-mobile tablet:max-w-screen-tablet desktop:max-w-screen-desktop desktop:flex m-auto gap-15 py-20 justify-center items-center'>
        <div className='flex flex-col gap-8 max-desktop:mb-20 max-desktop:text-center max-desktop:items-center'>
          <HeroTypography level={1}>
            Put The
            <span className='text-primary-variant-2'>
              {" "}
              Power Of Payments
            </span>{" "}
            In Your Hands
          </HeroTypography>
          <Typography.Headline level={2}>
            In one fully integrated payment platform.
          </Typography.Headline>
          <Button
            variant={"primary"}
            className='desktop:max-w-[150px] w-full  font-bold'
          >
            Let's Go
          </Button>
        </div>

        <Image
          src={"/assets/main-banner.svg"}
          alt='Hero Background'
          width={606}
          height={408}
          className='m-auto'
        />
      </div>
    </div>
  );
};

export default Hero;
