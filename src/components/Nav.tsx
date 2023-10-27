
import React, { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import { ModeToggle } from '@/components/ui/toggle-mode';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }


  return (
    <header>
      <nav className='fixed w-full px-10 md:border z-50 bg-background'>
        <div className='max-w-screen-lg flex items-center justify-between mx-auto p-4'>
          <div className='text-xl font-semibold'>Tharindu<span className='text-primary'>X</span></div>
          <div className='flex items-center'>
            <div className='md:block hidden'>
              <Link className='px-5 rounded-full py-2 hover:bg-accent duration-300' href="/">Home
              </Link>
              <Link className='px-5 rounded-full py-2 hover:bg-accent duration-300' href="/">Blog
              </Link>
              <Link className='px-5 rounded-full py-2 hover:bg-accent duration-300' href="/">Contact
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-2'>
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
          <div className='flex flex-col p-5 items-center'>
            <Link className='px-5 rounded-full py-2 hover:bg-accent duration-300' href="/">Home
            </Link>
            <Link className='px-5 rounded-full py-2 hover:bg-accent duration-300' href="/">Blog
            </Link>
            <Link className='px-5 rounded-full py-2 hover:bg-accent duration-300' href="/">Contact
            </Link>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Nav;
