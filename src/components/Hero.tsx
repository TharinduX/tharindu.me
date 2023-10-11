'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className='pt-48 px-10 flex flex-col items-center text-center gap-8 mx-auto'>
      <div className='max-w-screen-md items-center flex flex-col gap-8 relative'>
        <img
          src='https://github.com/TharinduX.png'
          width={100}
          height={100}
          alt=''
          className='rounded-full border-2 border-primary-foreground'
        />
        <h1 className='text-4xl font-extrabold'>Hello!</h1>
        <p className='text-2xl text-muted-foreground'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          porta,eros non aliquam cursus.
        </p>
        <div className='items-center flex gap-4'>
          <Button variant={'secondary'}>Contact Me</Button>
          <Button>Projects</Button>
        </div>
      </div>
      <div className='absolute mt-96 flex justify-center items-end pb-10 -z-50'>
        <div className='circle rounded-full'></div>
      </div>
    </section>
  );
};

export default Hero;
