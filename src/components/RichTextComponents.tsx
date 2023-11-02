
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../../sanity/lib/image'
import ClientSyntax from './ClientSyntax'
import { ExternalLink } from 'lucide-react'

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative w-full h-72 md:h-96  m-10 mx-auto'>
          <Image className='object-contain' width={1000} height={765} src={urlForImage(value)} alt='blog post image' />
        </div>
      )
    },
    code: ({ value }: any) => {
      return (
        <ClientSyntax value={value} />
      )
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className='ml-10 py-5 list-disc space-y-2'>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className='mt-lg list-decimal'>{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className='text-5xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='text-4xl py-10 font-bold'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h2 className='text-3xl py-10 font-bold'>{children}</h2>
    ),
    h4: ({ children }: any) => (
      <h4 className='text-4xl py-10 font-bold'>{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className='border-l-primary border-l-4 pl-5 my-5 text-xl py-8 italic'>{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noopener noreferrer" : undefined;

      return (
        <Link href={value.href} rel={rel} className='underline text-primary decoration-primary hover:decoration-accent gap-1 flex items-center'>
          {children}<ExternalLink size={15} />
        </Link >
      )
    },
    code: ({ children }: any) => (
      <code className='bg-accent border border-foreground/20 rounded-lg p-1 text-foreground items-center'>{children}</code>

    )
  }
}
