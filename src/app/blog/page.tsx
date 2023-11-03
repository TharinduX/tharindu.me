import React from 'react'
import { getPosts } from '../../../sanity/lib/queries'
import { PostTypes } from '@/types';
import PostList from '@/components/PostList';

export const revalidate = 60;

const page = async () => {
  const allPosts = await getPosts() as PostTypes[];
  return (
    <div className='ruler min-h-fit'>
      <div className='pt-32 pb-20 px-10 w-full'>
        <div className='max-w-screen-md flex flex-col mx-auto p-4'>
          <div className='text-3xl md:text-4xl text-center font-bold'>Blog</div>
          <div className='text-muted-foreground text-center mt-3'>Code Chronicles: Tales from the Development World</div>
          {allPosts.map((post, index) => (
            <PostList key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page