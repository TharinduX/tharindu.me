import { groq } from 'next-sanity'
import React from 'react'
import client from '../../../../sanity/lib/client'
import { PostTypes } from '@/types'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  params: {
    slug: string
  }
}


async function Post({ params: { slug } }: Props) {

  const query = groq`
  *[_type == "post" && slug.current == $slug][0]
  {
   ...,
   mainImage {"image": asset->url, "alt": asset->alt},
   author->,
   categories[]->
  }
 `;

  const post: PostTypes = await client.fetch(query, { slug });
  console.log(post.mainImage);
  return (
    <article className='ruler'>
      <section className='md:max-h-fit h-full pt-32 pb-20 px-10 w-full'>
        <div className=' max-w-screen-md flex flex-col mx-auto p-4 gap-2'>
          <div className='relative text-3xl md:text-4xl text-left font-bold'>{post.title}
            <Button className='absolute bg-background hover:bg-accent border -top-14 md:-top-0 md:-left-32 pb-3 gap-2 flex items-center justify-center'><ArrowLeft size={15} />
              Back</Button>
          </div>
          <div className='text-muted-foreground'>{post.subtitle}</div>
          <div className='flex flex-wrap gap-2 items-center'>
            {post.categories.map((category, index) => (
              <div key={index} className='mt-2 text-xs text-muted-foreground border border-muted-foreground/30 rounded-md px-2 py-1 hover:bg-accent cursor-pointer'>{category.title}</div>
            ))}
          </div>
          <div className='h-full mt-5 rounded-lg bg-gradient-to-b from-primary/20 to-primary border p-0.5'>
            <div className='h-full w-full'>
              <Image priority={true} className='object-contain w-full h-full  rounded-lg' src={post.mainImage.image} width={1000} height={500} alt={post.mainImage.alt} />
            </div>
          </div>
          <div className='mt-3 text-muted-foreground mb-3'>
            <PortableText value={post.body} />
          </div>
        </div>
      </section>
    </article >
  )
}

export default Post
