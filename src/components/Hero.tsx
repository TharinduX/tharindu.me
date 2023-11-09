
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Separator } from "@/components/ui/separator"

const Hero = () => {
  return (
    <section className='pt-32 px-10 flex flex-col items-center text-center gap-8 mx-auto mb-8'>
      <div className='max-w-screen-md items-center flex flex-col gap-3 relative'>
        <img
          src='https://github.com/TharinduX.png'
          width={100}
          height={100}
          className='rounded-full border-2 border-primary-foreground'
        />
        <h1 className='text-4xl font-extrabold'>Hello,</h1>
        <div className='divider max-w-lg'>
          <p className='text-lg text-muted-foreground px-10 md:px-1'>
            I'm Tharindu, and welcome to my portfolio. I'm a full-stack developer, and I love to build things.
          </p>
        </div>
      </div>
      <div className='hidden absolute mt-72 dark:flex justify-center items-center pb-10 -z-50'>
        <div className='circle rounded-full'></div>
      </div>
    </section>
  );
};

export default Hero;
