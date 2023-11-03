'use client'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import { Eye } from 'lucide-react';
import ViewCounter from './PostViews';

const ClientSideBlog = ({ post }: any) => {
  return (
    <div>
      <div className='flex justify-between items-end'>
        <div className='flex mt-3 items-center gap-3'>
          <div className='rounded-full h-10 w-10 bg-accent overflow-hidden border'>
            <Image alt="ss" src={post.author.image} width={50} height={50} />
          </div>
          <div>
            <div className='text-md'>{post.author.name}</div>
            <div className='text-xs text-muted-foreground'>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
        </div>
        <div className='text-muted-foreground flex flex-col gap-1 md:gap-2  md:divide-x-2 md:flex-row text-xs md:text-sm '>
          <div className='flex gap-2 px-3'>
            <Eye size={18} />
            <ViewCounter slug={post.slug.current} />
          </div>
        </div>
      </div>
      <div className='h-full mt-5 rounded-lg bg-gradient-to-b from-primary/20 to-primary border p-0.5'>
        <div className='relative h-full w-full group cursor-pointer'>
          <Image priority={true} className='object-contain w-full h-full rounded-lg' src={urlForImage(post.mainImage)} width={1200} height={600} alt={post.mainImage.alt} />

          <p className='plus-one absolute hidden bottom-3 -right-12 text-primary text-lg font-bold'>+1</p>
          <p className='minus-one absolute hidden bottom-3 -right-12 text-primary text-lg font-bold'>-1</p>
        </div>
      </div>
    </div>
  )
}

export default ClientSideBlog
