'use client'

import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import { Eye, Heart } from 'lucide-react';



const ClientSideBlog = ({ post }: any) => {


  const handleLike = () => {
    const plusOne = document.querySelector('.plus-one')!
    plusOne.classList.remove('hidden')
    setTimeout(() => {
      plusOne.classList.add('hidden')
    }, 500)
  }

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
        <div className='text-muted-foreground flex gap-2 text-sm divide-x-2'>
          <div className='flex gap-2 px-3'>
            <Eye size={18} />
            425
          </div>
          <div className='flex gap-2 pl-3'>
            <Heart size={18} />
            425
          </div>
        </div>
      </div>
      <div className='h-full mt-5 rounded-lg bg-gradient-to-b from-primary/20 to-primary border p-0.5'>
        <div className='relative h-full w-full group cursor-pointer'>
          <Image priority={true} className='heart object-contain w-full h-full rounded-lg' src={urlForImage(post.mainImage)} width={1200} height={600} alt={post.mainImage.alt} />
          <Heart className='absolute text-white -bottom-5 -right-5 bg-primary rounded-full p-2 transition ease-in-out hover:scale-150 hover:rotate-[360deg] duration-500' size={40} onClick={handleLike} />
          <p className='plus-one absolute hidden bottom-3 -right-12 text-primary text-lg font-bold'>+1</p>
        </div>
      </div>
    </div>
  )
}

export default ClientSideBlog
