'use client'
import react, { use, useEffect, useState } from 'react'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/image'
import { Eye, Heart } from 'lucide-react';
import ViewCounter from './PostViews';
import LikeCounter from './PostLikes';
import { setCookie, hasCookie, deleteCookie } from 'cookies-next'


const ClientSideBlog = ({ post }: any) => {

  const [liked, setLiked] = useState(false)
  useEffect(() => {
    const heart = document.querySelector('.heart')!
    hasCookie('liked', post.slug.current) ? setLiked(true) : setLiked(false)
    heart.classList.add('fill-white')
  }, [])

  const handleLike = async () => {
    const plusOne = document.querySelector('.plus-one')!
    const heart = document.querySelector('.heart')!
    const minusOne = document.querySelector('.minus-one')!
    setLiked(!liked)
    if (liked) {
      const res = await fetch(`/api/likes/${post.slug.current}`, {
        method: 'POST'
      })
      setCookie('liked', post.slug.current)
      plusOne.classList.remove('hidden')
      heart.classList.add('fill-white')
    } else {
      deleteCookie('liked', post.slug.current)
      const res = await fetch(`/api/likes/${post.slug.current}`, {
        method: 'DELETE'
      })
      heart.classList.remove('fill-white')
      minusOne.classList.remove('hidden')
    }

    setTimeout(() => {
      plusOne.classList.add('hidden')
      minusOne.classList.add('hidden')
    }, 500)

  }


  // const handleLike = async () => {
  //   const plusOne = document.querySelector('.plus-one')!
  //   const heart = document.querySelector('.heart')!
  //   const minusOne = document.querySelector('.minus-one')!
  //   try {
  //     setLiked(!liked)
  //     if (liked) {
  //       const res = await fetch(`/api/likes/${post.slug.current}`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ liked: !liked })
  //       })
  //       heart.classList.add('fill-white')
  //       plusOne.classList.remove('hidden')
  //     } if (!liked) {
  //       const res = await fetch(`/api/likes/${post.slug.current}`, {
  //         method: 'DELETE',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ liked: !liked })
  //       })
  //       heart.classList.remove('fill-white')
  //       minusOne.classList.remove('hidden')
  //     }
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  //   setTimeout(() => {
  //     plusOne.classList.add('hidden')
  //     minusOne.classList.add('hidden')
  //   }, 500)
  // }

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
          <div className='flex gap-2 pl-3'>
            <Heart size={18} />
            <LikeCounter slug={post.slug.current} />
          </div>
        </div>
      </div>
      <div className='h-full mt-5 rounded-lg bg-gradient-to-b from-primary/20 to-primary border p-0.5'>
        <div className='relative h-full w-full group cursor-pointer'>
          <Image priority={true} className='object-contain w-full h-full rounded-lg' src={urlForImage(post.mainImage)} width={1200} height={600} alt={post.mainImage.alt} />
          <Heart className='heart absolute text-white -bottom-5 -right-5 bg-primary rounded-full p-2 transition ease-in-out hover:scale-150 hover:rotate-[360deg] duration-500' size={40} onClick={handleLike} />
          <p className='plus-one absolute hidden bottom-3 -right-12 text-primary text-lg font-bold'>+1</p>
          <p className='minus-one absolute hidden bottom-3 -right-12 text-primary text-lg font-bold'>-1</p>
        </div>
      </div>
    </div>
  )
}

export default ClientSideBlog
