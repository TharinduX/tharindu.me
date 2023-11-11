'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import { FaXTwitter, FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const path = usePathname();
  return (
    <footer className={path.startsWith("/dashboard") ? "hidden" : ""}>
      <div className='bg-background w-full p-10 border-t'>
        <div className='flex flex-col md:flex-row md:justify-between max-w-screen-md lg:max-w-screen-lg  items-center gap-5 mx-auto'>
          <div className='text-muted-foreground'>
            © 2023 Tharindu. All rights reserved.
          </div>
          <div className='flex gap-3 '>
            <a href='https://github.com/TharinduX' target='_blank' rel="noopener noreferrer">
              <FaGithub size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
            <a href='https://www.facebook.com/tharindu.me' target='_blank' rel="noopener noreferrer">
              <FaFacebook size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
            <a href='https://www.linkedin.com/in/tharinduj/' target='_blank' rel="noopener noreferrer">
              <FaLinkedin size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
            <a href='https://www.instagram.com/tharindu.me/' target='_blank' rel="noopener noreferrer">
              <FaInstagram size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
            <a href='https://www.x.com/tharindume/' target='_blank' rel="noopener noreferrer">
              <FaXTwitter size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer