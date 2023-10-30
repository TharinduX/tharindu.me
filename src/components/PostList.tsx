import { PostTypes } from '@/types'
import React from 'react'
import { CalendarIcon } from 'lucide-react'
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';
import { PortableText } from '@portabletext/react'

type Props = {
  post: PostTypes
}

const PostList = ({ post }: Props) => {
  return (
    <ClientSideRoute route={`/post/${post.slug.current}`}>
      <div className='flex mt-8 group'>
        <div className='bg-gradient-to-b from-primary/20 to-primary border p-0.5 h-full w-full rounded-lg '>
          <div className='md:flex md:gap-5 bg-card w-full h-full rounded-lg p-5 cursor-pointer hover:shadow-primary/25 hover:shadow-glow md:items-center'>
            <div className='w-full md:w-[50%] bg-accent h-[10rem] md:h-[14rem] md:max-h-fit rounded-lg p-1'>
              <Image priority={true} className='object-cover h-full rounded-lg' src={post.mainImage?.image} width={700} height={500} alt={post.mainImage.alt} />
            </div>
            <div className='flex flex-col w-full md:w-[50%]'>
              <div className='mt-5 md:mt-0 text-xl font-semibold'>{post.title}</div>
              <div className='flex flex-wrap gap-2 items-center'>
                {post.categories.map((category, index) => (
                  <div key={index} className='mt-2 text-xs text-muted-foreground border border-muted-foreground/30 rounded-md px-2 py-1 hover:bg-accent cursor-pointer'>{category.title}</div>
                ))}
              </div>
              <div className='line-clamp-3 mt-3 text-muted-foreground mb-3'>
                <PortableText value={post.body[0]} />
              </div>
              <div className='border-t border-muted-foreground/40 pt-3'>
                <div className='flex justify-between'>
                  <div className='text-sm text-muted-foreground flex items-center gap-2'>
                    <CalendarIcon size={17} />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <div className='text-sm text-muted-foreground'>{post.estimatedReadingTime} min read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientSideRoute>
  )
}

export default PostList