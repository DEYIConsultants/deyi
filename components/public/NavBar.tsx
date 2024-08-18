'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'react-feather';
import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-1'>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='DEYI Logo'
          width={220}
          height={220}
          className='ml-6 flex-shrink-0'
        />
      </Link>

      <div className='sm:hidden'>
        <button
          onClick={toggleMenu}
          className='text-midnight-blue focus:outline-none'
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className='hidden sm:block'>
        <NavigationMenu>
          <NavigationMenuList className='text-midnight-blue'>
            <NavigationMenuItem>
              <Link href='/about' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  ABOUT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/expertise' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  EXPERTISE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/procedure' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  PROCEDURE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/contact' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold`}
                >
                  CONTACT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/sitevisit' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold bg-primary text-white px-3 py-2 rounded hover:bg-primary/70`}
                >
                  SCHEDULE SITE VISIT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {isMenuOpen && (
        <NavigationMenu className='sm:hidden absolute top-full right-0 w-full bg-white shadow-md'>
          <NavigationMenuList className='flex flex-col text-midnight-blue'>
            <NavigationMenuItem>
              <Link href='/about' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  ABOUT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/expertise' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  EXPERTISE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/procedure' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  PROCEDURE
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/contact' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  CONTACT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} font-bold py-2 px-4`}
                  onClick={toggleMenu}
                >
                  SCHEDULE SITE VISIT
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
}
