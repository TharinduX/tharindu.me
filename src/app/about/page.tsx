import React from 'react'
import { getAbout } from '../../../sanity/lib/queries'
import { AboutTypes } from '@/types'
import Image from 'next/image';

const page = async () => {
  const about = await getAbout() as AboutTypes[];
  return (
    <div className='ruler'>
      <div className='pt-32 pb-20 px-10 w-full'>
        <div className='max-w-screen-md flex flex-col mx-auto p-4'>
          <div className='text-3xl lg:text-4xl items-start flex font-bold text-foreground'>
            Hello, I'm Tharindu 👋
          </div>
          <div className='text-md text-muted-foreground mt-5'>A Fullstack developer based on Matara, Sri Lanka  </div>
          <div className='h-[300px] mt-5 rounded-lg bg-gradient-to-b from-primary/20 to-primary border p-0.5'>
            <div className='bg-accent w-full h-full rounded-lg overflow-hidden'>
              <Image className='object-cover rounded-lg h-full' src={about[0].aboutImage.image} alt='Tharindu Jayasanka Image' width={1000} height={765} priority />
            </div>
          </div>
          <div className='text-sm mt-2 text-muted-foreground'>And this is how i look like :)</div>
          <div className='text-3xl lg:text-4xl font-bold mt-5 text-foreground'>
            About Me
          </div>
          <div className='text-muted-foreground mt-5 leading-relaxed'>
            {about[0].aboutMe}
          </div>
          <div className='text-3xl lg:text-4xl font-bold mt-5 text-foreground'>
            Experience
          </div>
          <div className='text-muted-foreground mt-5 leading-relaxed'>
            {about[0].experience}
          </div>
          <div className='text-3xl lg:text-4xl font-bold mt-5 text-foreground'>
            Contributing
          </div>
          <div className='text-muted-foreground mt-5 leading-relaxed'>
            {about[0].contributing}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page