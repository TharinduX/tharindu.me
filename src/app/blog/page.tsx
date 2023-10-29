import React from 'react'
import { CalendarIcon } from 'lucide-react'
import { getPosts } from '../../../sanity/lib/queries'
import { PostTypes } from '@/types';
import Image from 'next/image';

const page = async () => {
  const posts = await getPosts() as PostTypes[];
  return (
    <div className='ruler min-h-fit'>
      <div className='pt-32 pb-20 px-10 w-full'>
        <div className='max-w-screen-md flex flex-col mx-auto p-4'>
          <div className='text-3xl md:text-4xl text-center font-bold'>Blog</div>
          <div className='text-muted-foreground text-center mt-3'>Code Chronicles: Tales from the Development World</div>
          {posts.map((post, index) => (
            <div className='flex mt-8'>
              <div className='bg-gradient-to-b from-primary/20 to-primary border p-0.5 h-full w-full rounded-lg'>
                <div className='md:flex md:gap-5 bg-card w-full h-full rounded-lg p-5 cursor-pointer hover:shadow-primary/25 hover:shadow-glow md:items-center'>
                  <div className='w-full bg-accent h-[10rem] md:h-[14rem] md:max-h-fit rounded-lg p-1'>
                    <Image priority={true} className='object-cover h-full rounded-lg' src={post.mainImage?.image} width={1000} height={1000} alt="Screenshot of the application" />
                  </div>
                  <div className='flex flex-col'>
                    <div className='mt-5 md:mt-0 text-xl font-semibold'>{post.title}</div>
                    <div className='flex flex-wrap gap-2 items-center'>
                      {post.categories.map((category, index) => (
                        <div className='mt-2 text-xs text-muted-foreground border border-muted-foreground/30 rounded-md px-2 py-1 hover:bg-accent cursor-pointer'>{category.title}</div>
                      ))}
                    </div>
                    <div className='mt-3 text-muted-foreground pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh est, hendrerit mattis ultricies non, porta sit amet enim.</div>
                    <div className='border-t border-muted-foreground/40 pt-3'>
                      <div className='flex justify-between'>
                        <div className='text-sm text-muted-foreground flex items-center gap-2'>
                          <CalendarIcon size={17} />
                          28th, November 2023</div>
                        <div className='text-sm text-muted-foreground'>6min read</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page