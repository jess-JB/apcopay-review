import Button from "@/components/Button";
import Typography from "@/components/Typography";
import HeroTypography from "@/components/Typography/Hero";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=' w-full h-full px-11 bg-gradient-to-r from-dark to-primary text-white'>
      {/* <Image
        src={"/assets/hero-background.svg"}
        alt='Hero Background'
        width={1440}
        height={2000}
        className='absolute z-[-1] top-[-105px] left-0'
      /> */}
      <div className='flex max-w-[1440px] m-auto gap-20 py-20 px-32 justify-center items-center'>
        <div className='flex flex-col gap-8'>
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
          <Button variant={"primary"} className='max-w-[150px] font-bold'>
            Let's Go
          </Button>
        </div>
        <Image
          src={"/assets/main-banner.svg"}
          alt='Hero Background'
          width={606}
          height={408}
          className='h-full w-full'
        />
      </div>
    </div>
  );
};

export default Hero;
