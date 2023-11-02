'use client'

import React from 'react'

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'

const PostShare = ({ post }: any) => {

  const hashtags = post.categories.map((category: any) => category.title)
  const convertedHashtags = hashtags.map((hashtag: any) => hashtag.replace(/\./g, '').replace(/\s/g, '').toLowerCase())

  return (
    <div>
      <p className='text-muted-foreground text-sm mt-2'>Share:</p>
      <div className='flex gap-3 mt-3'>
        <FacebookShareButton url={`https://tharindu.me/post/${post.slug.current}`} quote={post.title} blankTarget={true}>
          <FacebookIcon size={32} round className='transition ease-in-out hover:scale-150' />
        </FacebookShareButton>
        <TwitterShareButton url={`https://tharindu.me/post/${post.slug.current}`} title={post.title} hashtags={convertedHashtags} blankTarget={true}>
          <TwitterIcon size={32} round className='transition ease-in-out hover:scale-150' />
        </TwitterShareButton>
        <LinkedinShareButton url={`https://tharindu.me/post/${post.slug.current}`} title={post.title} blankTarget={true} >
          <LinkedinIcon size={32} round className='transition ease-in-out hover:scale-150' />
        </LinkedinShareButton>
        <RedditShareButton url={`https://tharindu.me/post/${post.slug.current}`} title={post.title} blankTarget={true}>
          <RedditIcon size={32} round className='transition ease-in-out hover:scale-150' />
        </RedditShareButton>
        <PinterestShareButton url={`https://tharindu.me/post/${post.slug.current}`} media={post.title}>
          <PinterestIcon size={32} round className='transition ease-in-out hover:scale-150' />
        </PinterestShareButton>
        <WhatsappShareButton url={`https://tharindu.me/post/${post.slug.current}`} title={post.title}>
          <WhatsappIcon size={32} round className='transition ease-in-out hover:scale-150' />
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default PostShare