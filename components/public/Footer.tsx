import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';

export default function Footer() {
  return (
    <footer className='w-full bg-white shadow-none z-50 my-6'>
      <div className='container mx-auto'>
        <Card className='bg-white shadow-none text-midnight-blue text-sm'>
          <CardHeader className='text-center py-1'>
            <CardTitle className='font-bold text-xs'>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-row items-center justify-center space-x-6 py-2'>
            <Link href='/' legacyBehavior passHref>
              <span className='text-midnight-blue cursor-pointer text-xs'>
                About
              </span>
            </Link>
            <Link href='/' legacyBehavior passHref>
              <span className='text-midnight-blue cursor-pointer text-xs'>
                Expertise
              </span>
            </Link>
            <Link href='/' legacyBehavior passHref>
              <span className='text-midnight-blue cursor-pointer text-xs'>
                Procedure
              </span>
            </Link>
            <Link href='/' legacyBehavior passHref>
              <span className='text-midnight-blue cursor-pointer text-xs'>
                Contact
              </span>
            </Link>
            <Link href='/' legacyBehavior passHref>
              <span className='text-midnight-blue cursor-pointer text-xs'>
                Login
              </span>
            </Link>
          </CardContent>
          <CardFooter className='justify-center text-gray-500 py-1 text-xs'>
            ©2016 - 2024 DEYI Consultants. All rights reserved.
          </CardFooter>
        </Card>
      </div>
    </footer>
  );
}
