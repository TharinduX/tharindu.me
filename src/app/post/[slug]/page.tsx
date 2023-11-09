import { groq } from 'next-sanity'
import React from 'react'
import client from '../../../../sanity/lib/client'
import { PostTypes } from '@/types'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react'
import ClientSideBlog from '@/components/ClientSideBlog'
import { RichTextComponents } from '@/components/RichTextComponents'
import PostShare from '@/components/PostShare'
import { getPost } from '../../../../sanity/lib/queries'
import Link from 'next/link'
import dynamic from 'next/dynamic';
const CommentsLazy = dynamic(() => import('@/components/DisqusComments'), {
  loading: () => <div className='mt-10'>Loading...</div>,
  ssr: false,
})

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
    {
      slug,
    }
  `

  const slugs: PostTypes[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }))
}


async function Post({ params: { slug } }: Props) {


  const post: PostTypes = await getPost(slug);

  return (
    <article className='ruler'>
      <section className='md:max-h-fit h-full pt-32 pb-20 px-10 w-full'>
        <div className=' max-w-screen-md flex flex-col mx-auto p-4 gap-2'>
          <div className='relative text-3xl md:text-4xl text-left font-bold'>{post.title}
            <Button className='text-foreground absolute bg-background hover:bg-accent border -top-14 md:-top-0 md:-left-32 pb-3 gap-2 flex items-center justify-center'>
              <Link className='flex gap-2 items-center' href='/blog'>
                <ArrowLeft size={15} />
                Back
              </Link>
            </Button>
          </div>
          <div className='text-muted-foreground'>{post.subtitle}</div>
          <div className='flex flex-wrap gap-2 items-center'>
            {post.categories.map((category, index) => (
              <div key={index} className='mt-2 text-xs text-muted-foreground border border-muted-foreground/30 rounded-md px-2 py-1 hover:bg-accent cursor-pointer'>{category.title}</div>
            ))}
          </div>
          <ClientSideBlog post={post} />
          <div className='mt-3 text-md mb-3'>
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
          <PostShare post={post} />
          <CommentsLazy post={post} />
        </div>
      </section>
    </article >
  )
}

export default Post
