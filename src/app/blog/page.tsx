import React from 'react'
import { getCategories, getPosts } from '../../../sanity/lib/queries'
import { CategoryTypes, PostTypes } from '@/types';
import ClientAllPosts from '@/components/ClientAllPosts';

export const revalidate = 60;

const page = async () => {
  const allPosts = await getPosts() as PostTypes[];
  const allCategories = await getCategories() as CategoryTypes[];


  return (
    <div className='ruler min-h-fit'>
      <div className='pt-32 pb-20 px-10 w-full'>
        <div className='max-w-screen-md flex flex-col mx-auto p-4'>
          <div className='text-3xl md:text-4xl text-center font-bold'>Blog</div>
          <div className='text-muted-foreground text-center mt-3'>Code Chronicles: Tales from the Development World</div>
          <ClientAllPosts posts={allPosts} categories={allCategories} />
        </div>
      </div>
    </div>
  )
}

export default page