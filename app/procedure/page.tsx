'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import PhoneIcon from '@/public/icons/phone.png';
import procedure1 from '@/public/images/pic24.jpg';
import procedure2 from '@/public/images/aboutpic.jpg';
import procedure3 from '@/public/images/homeImage.jpg';
import procedure4 from '@/public/images/aboutImage3.jpg';
import procedure5 from '@/public/images/aboutImage4.jpg';

const Procedure = () => {
  const router = useRouter();

  return (
    (<div className='h-auto flex flex-col overflow-hidden p-4 md:p-8'>
      <div className='flex flex-col items-start mt-32 mb-10 mx-10 text-primary gap-4'>
        <h1 className='font-bold text-3xl mb-4 text-primary'>
          THE REASON YOU WILL CHOOSE US
        </h1>
        <h2 className='text-base text-destructive'>
          At DEYI, we specialize in six core areas of expertise to meet all your
          construction and development needs. Our services include residential
          Structural Design, ensuring your homes are not just beautiful but also
          structurally sound and safe. We excel in Permit Application services,
          navigating the complex regulatory landscape to obtain the necessary
          approvals for your projects seamlessly. Our Landscape Detail
          Structural Design brings outdoor spaces to life with innovative and
          sustainable solutions. For playgrounds that inspire creativity and
          safety, our Playground Structural Design services are second to none.
          We offer expert Construction Administration, overseeing every aspect
          of your project to ensure timely completion and compliance. Finally,
          our Title 24 services focus on energy efficiency and environmental
          sustainability, aligning your projects with the latest standards.
          Partner with DEYI Consultants for unparalleled expertise and a
          commitment to excellence in every project we undertake.
        </h2>
      </div>
      <div className='flex flex-col sm:flex-row items-center mx-4 sm:mx-14 px-4 sm:px-6 bg-slate-200'>
        <div className='w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0'>
          <Image
            src='/images/pic30.jpg'
            alt='Residential Structural Design'
            width={600}
            height={400}
            className='w-full border-2 border-zinc-400 rounded-lg shadow-lg'
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }} />
        </div>
        <div className='w-full sm:w-1/2 flex flex-col justify-center items-center bg-slate-200 bg-opacity-60 text-primary h-[400px] p-6'>
          <span className='font-bold text-lg mb-2'>
            Step 1. Free Consultant
          </span>
          <span className='font-base mb-4'>
            Half Hour Phone Consultant for Free!
          </span>

          <Button
            onClick={() => router.push('/appoitment')}
            className='buttonAppointment bg-primary text-white hover:bg-primary-foreground font-base z-50 '
          >
            <Image
              src={PhoneIcon}
              alt='Phone icon'
              color='white'
              width={18}
              height={18}
              // filter invert
              className='mr-2 '
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <span className='underline'>Click Here to Schedule!</span>
          </Button>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center mx-4 sm:mx-14 px-4 sm:px-6 bg-slate-200'>
        <div className='w-full sm:w-1/2 flex flex-col justify-center items-center bg-slate-200 bg-opacity-60 text-primary h-[400px]'>
          <span className='font-bold text-lg'>Step 2. Design</span>
          <br />
          <span className='font-base'>Engineer Team Work on the Project</span>
        </div>
        <div className='w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0'>
          <Image
            src='/images/pic32.jpg'
            alt='Residential Structural Design'
            width={600}
            height={400}
            className='w-full border-2 border-zinc-400 rounded-lg shadow-lg'
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }} />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center mx-4 sm:mx-14 px-4 sm:px-6 bg-slate-200'>
        <div className='w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0'>
          <Image
            src='/images/pic34.jpg'
            alt='Residential Structural Design'
            width={600}
            height={400}
            className='w-full border-2 border-zinc-400 rounded-lg shadow-lg'
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }} />
        </div>
        <div className='w-full sm:w-1/2 flex flex-col justify-center items-center bg-thdwhite bg-opacity-60 text-primary h-[400px]'>
          <span className='font-bold text-lg'>Step 3. Submission</span>
          <br />
          <span className='font-base'>
            Submit Application Package to the City
          </span>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center mx-4 sm:mx-14 px-4 sm:px-6 bg-slate-200'>
        <div className='w-full sm:w-1/2 flex flex-col justify-center items-center bg-thdwhite bg-opacity-60 text-primary h-[400px]'>
          <span className='font-bold text-lg'>Step 4. Plan Check</span>
          <br />
          <span className='font-base'>Response Plan Check Promptly</span>
        </div>
        <div className='w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0'>
          <Image
            src='/images/pic31.jpg'
            alt='Residential Structural Design'
            width={600}
            height={400}
            className='w-full border-2 border-zinc-400 rounded-lg shadow-lg'
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }} />
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center mx-4 sm:mx-14 px-4 sm:px-6 bg-slate-200'>
        <div className='w-full sm:w-1/2 flex justify-center mb-4 sm:mb-0'>
          <Image
            src='/images/pic29.jpg'
            alt='Residential Structural Design'
            width={600}
            height={400}
            className='w-full border-2 border-zinc-400 rounded-lg shadow-lg'
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto"
            }} />
        </div>
        <div className='w-full sm:w-1/2 flex flex-col justify-center items-center bg-thdwhite bg-opacity-60 text-primary h-[400px]'>
          <span className='font-bold text-lg'>Step 5. Done</span>
          <br />
          <span className='font-base'>Wait Project to be Approaved</span>
        </div>
      </div>
    </div>)
  );
};

export default Procedure;
