'use client';

import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import { ModeToggle } from '@/components/ui/toggle-mode';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardSheet from './DashboardSheet';

const Nav = () => {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={path.startsWith("/dashboard") ? "hidden" : ""}>
      <nav className='fixed w-[100vw] px-10 border-b z-50 bg-background '>
        <div className='max-w-screen-lg flex items-center justify-between mx-auto p-4'>
          <div className='text-xl font-semibold'>
            <Link href='/'>Tharindu<span className='text-primary'>.me</span></Link>
          </div>
          <div className='flex items-center'>
            <div className='hidden md:flex gap-2'>
              <Link className={path === "/" ? "px-5 rounded-full py-2 bg-accent duration-300 shadow-inner" : "px-5 rounded-full py-2 hover:bg-accent duration-300"} href="/">Home
              </Link>
              <Link className={path === "/about" ? "px-5 rounded-full py-2 bg-accent duration-300 shadow-inner" : "px-5 rounded-full py-2 hover:bg-accent duration-300"} href="/about">About
              </Link>
              <Link className={path === "/blog" ? "px-5 rounded-full py-2 bg-accent duration-300 shadow-inner" : "px-5 rounded-full py-2 hover:bg-accent duration-300"} href="/blog">Blog
              </Link>
              <Link className={path === "/contact" ? "px-5 rounded-full py-2 bg-accent duration-300 shadow-inner" : "px-5 rounded-full py-2 hover:bg-accent duration-300"} href="/contact">Contact
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <DashboardSheet />
            <Button className='md:hidden bg-dark items-center justify-center border p-2 cursor-pointer hover:bg-accent' variant='outline' size='icon' onClick={showMobileMenu}>
              {isMobileMenuOpen ? (
                <X />
              ) : (
                <AlignJustify />
              )}
            </Button>
            <ModeToggle />
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='flex md:hidden flex-col p-5 items-center divide-y w-full'>
            <Link className='flex justify-center px-5 w-full py-4 hover:bg-accent duration-300' onClick={closeMobileMenu} href="/">Home
            </Link>
            <Link onClick={closeMobileMenu} className='flex justify-center px-5 w-full  py-4 hover:bg-accent duration-300' href="/about">About
            </Link>
            <Link onClick={closeMobileMenu} className='flex justify-center px-5 w-full  py-4 hover:bg-accent duration-300' href="/blog">Blog
            </Link>
            <Link onClick={closeMobileMenu} className='flex justify-center px-5 w-full  py-4 hover:bg-accent duration-300' href="/contact">Contact
            </Link>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Nav;
