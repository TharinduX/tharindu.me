'use client'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { PostTypes } from '@/types';
const CommentsLazy = dynamic(() => import('@/components/DisqusComments'), {
  loading: () => <div className='mt-10 bg-accent/70 p-10 rounded-lg'>
    <div className='flex gap-4 animate-pulse'>
      <div className='h-20 w-20 rounded-lg bg-accent'></div>
      <div className='flex flex-col w-full gap-2'>
        <div className='bg-accent w-full h-4 rounded-full'></div>
        <div className='bg-accent w-full h-4 rounded-full'></div>
        <div className='bg-accent w-[80%] h-4 rounded-full'></div>
        <div className='bg-accent w-[60%] h-4 rounded-full'></div>
      </div>
    </div>
  </div>,
  ssr: false,
  delay: 1000,
})

type Props = {
  post: PostTypes
}

const Comments = ({ post }: Props) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 400) {
        setShown(true);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);



  return (
    <div>
      {shown && <CommentsLazy post={post} />}
    </div>
  )
}

export default Comments