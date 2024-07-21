import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export default function NavBar() {
  return (
    <header className='fixed top-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-1'>
      <Link href='/'>
        <Image src='/images/logo.png' alt='My Logo' width={220} height={220} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className='text-midnight-blue'>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-bold`}
              >
                ABOUT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-bold`}
              >
                EXPERTISE
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-bold`}
              >
                PROCEDURE
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-bold`}
              >
                CONTACT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} font-bold`}
              >
                LOGIN
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
