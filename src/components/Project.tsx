'use client';

import { Calendar as CalendarIcon, Github } from 'lucide-react';

import React from 'react';

const Project = () => {
  return (
    <>
      <div className='items-center flex flex-col relative'>
        <div className='bg-accent rounded-lg p-0.5'>
          <div className='px-4 py-2 flex gap-3 text-muted-foreground border rounded-md text-md bg-background shadow-sm'>
            <CalendarIcon /> September 20, 2023
          </div>
        </div>
        <div className='w-[60%] p-1 bg-accent mt-8 rounded-2xl border mb-8'>
          <div className='w-full h-full flex flex-col bg-card rounded-2xl border shadow-glow shadow-primary/30 overflow-hidden'>
            <div className='flex w-full bg-accent/50 p-5 border-b '>
              <div className='w-[70%] flex mx-auto items-center rounded-lg h-10 bg-accent border shadow-inner'>
                <div className='flex text-muted-foreground items-center mx-auto'>
                  <Github />
                  <span className='ml-2'>
                    https://github.com/TharinduX/tharindu.me
                  </span>
                </div>
              </div>
            </div>
            <div className='flex gap-5 p-10 w-full'>
              <div className=" p-5 border-dashed border rounded-lg w-full relative">
                <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit'>Screenshot</div>
                <div className='rounded-lg bg-accent/50 border h-full'></div>
              </div>
              <div className='flex flex-col gap-5 w-full'>
                <div className="border-dashed border rounded-lg relative">
                  <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit'>Website</div>
                  <div className='flex p-5'>
                    <div className='flex flex-col gap-3'>
                      <div className='flex gap-5 items-center'>
                        <div className='bg-accent/50 rounded-full border w-28 h-28'>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <div className='text-2xl'>Fullstack Blog</div>
                          <div className='flex gap-2'>
                            <div className='border bg-accent/50 rounded-full px-3 py-1 text-muted-foreground'>Next.js</div>
                            <div className='border bg-accent/50 rounded-full px-3 py-1 text-muted-foreground'>Sanity</div>
                            <div className='border bg-accent/50 rounded-full px-3 py-1 text-muted-foreground'>Tailwind</div>
                          </div>
                        </div>
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu libero arcu. Nullam mollis id massa in efficitur. Etiam ultrices blandit arcu eget blandit. Proin tincidunt vestibulum sodales. Quisque mollis eros eu erat imperdiet interdum.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-dashed border rounded-lg relative">
                  <div className='px-3 absolute -top-4 left-5 right-0 z-10 text-muted-foreground text-md bg-card max-w-fit'>Features</div>
                  <div className='p-5'>
                    <div className='mt-5'>
                      <div className='text-lg'>Components</div>
                      <div className='text-muted-foreground mt-2'>Multiple Activities, Fragment, AppCompat, RecyclerView, ViewPager</div>
                    </div>
                    <div className='mt-5'>
                      <div className='text-lg'>Libraries</div>
                      <div className='text-muted-foreground mt-2'>Multiple Retrofit, OkHttp, Gson, Glide, Butterknife</div>
                    </div>
                    <div className='mt-5'>
                      <div className='text-lg'>Backend</div>
                      <div className='text-muted-foreground mt-2'>Multiple Firebase Cloud Firestore, Firebase Cloud Functions</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
