'use client'

import React, { useState } from 'react'
import { DiscussionEmbed } from 'disqus-react';
import { PostTypes } from '@/types';
import { useTheme } from "next-themes";
type Props = {
  post: PostTypes
}

const DisqusComments = ({ post }: Props) => {
  const { theme } = useTheme();

  return (
    <div className='mt-10'>
      <div key={theme}>
        <DiscussionEmbed
          shortname='tharindu-me'
          config={
            {
              url: `https://tharindu.me/post/${post.slug.current}`,
              identifier: post.slug.current,
              title: post.title,
              language: 'en_US',
            }
          }
        />
      </div>
    </div>
  )
}

export default DisqusComments