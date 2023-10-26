'use client';

import React from 'react';
import { ModeToggle } from '@/components/ui/toggle-mode';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathName = usePathname();
  return (
    <header>
      <nav className='fixed w-full px-10 border z-50 bg-background'>
        <div className='max-w-screen-lg flex items-center justify-between mx-auto p-4'>
          <div className='text-xl font-semibold'>Tharindu</div>
          <div className='items-center'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href='/'
                    legacyBehavior
                    passHref
                    className={pathName == "/" ? 'active' : ''}
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/docs' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href='/docs' legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className='items-center'>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
