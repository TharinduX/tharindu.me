'use client';

import { Calendar as CalendarIcon, Github } from 'lucide-react';

import React from 'react';

const Project = () => {
  return (
    <>
      <div className='pt-10 items-center flex flex-col mx-auto h-screen relative'>
        <div className='flex gap-3 text-muted-foreground border-1 border-muted-foreground px-4 py-2 rounded-md text-md bg-background shadow-sm'>
          <CalendarIcon /> September 20, 2023
        </div>
        <div className='pb-10'>
          <div className='w-[1000px] h-[800px] bg-card mt-8 rounded-xl overflow-hidden border'>
            <div className='w-[70%] mt-10 flex mx-auto items-center rounded-lg h-10 bg-accent border-1'>
              <div className='flex text-muted-foreground items-center mx-auto'>
                <Github />
                <span className='ml-2'>
                  https://github.com/TharinduX/tharindu.me
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute mt-72 flex justify-center items-end pb-10 -z-50'>
          <div className='circle rounded-full'></div>
        </div>
      </div>
    </>
  );
};

export default Project;
