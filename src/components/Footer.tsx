'use client'

import React from 'react'
import { usePathname } from 'next/navigation';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

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
            <a href='https://www.facebook.com/tharindu.me' target='_blank' rel="noopener noreferrer">
              <Facebook size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
            <a href='https://www.linkedin.com/in/tharinduj/' target='_blank' rel="noopener noreferrer">
              <Linkedin size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
            <a href='https://www.instagram.com/tharindu.me/' target='_blank' rel="noopener noreferrer">
              <Instagram size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
            <a href='https://www.x.com/itzJambole/' target='_blank' rel="noopener noreferrer">
              <FaXTwitter size={20} className='text-muted-foreground hover:text-foreground' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer