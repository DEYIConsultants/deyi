'use client';

import Image from 'next/image';
import aboutPic from '@/public/images/aboutpic.jpg';
import { useRouter } from 'next/navigation';

const Administration = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col'>
      <div className='h-screen flex flex-row'>
        <div className='flex flex-col w-2/3 text-primary items-center justify-center'>
          <h1 className='text-4xl font-bold p-4 text-center'>
            Landscape Structural Design
          </h1>
          <h2 className='text-base leading-relaxed text-destructive mx-12'>
            We offer comprehensive Construction Administration services that
            ensure your project is executed with precision, quality, and
            adherence to all design and regulatory requirements. Our expert team
            specializes in overseeing every aspect of the construction process,
            from initial planning to final inspection, ensuring that all work
            aligns with your specifications and industry standards. We provide
            detailed administration services, including site inspections,
            progress reports, coordination with contractors, and quality
            control. Our team ensures that every phase of construction meets the
            highest standards of safety, efficiency, and craftsmanship. Whether
            you&apos;re managing a residential, commercial, or public project,
            our Construction Administration services are tailored to your unique
            needs and vision. We focus on proactive problem-solving and
            efficient communication, ensuring that your project stays on
            schedule and within budget. From the initial groundbreaking to the
            final walk-through, our dedicated professionals guide you through
            every step, ensuring that your construction project is completed to
            your satisfaction and in compliance with all relevant codes and
            regulations. Choose our Construction Administration service for
            expert oversight, meticulous attention to detail, and a commitment
            to delivering a successful project.
          </h2>
        </div>
        <div className='w-1/3 flex flex-col items-center justify-center p-8 bg-primary'>
          <div className='flex flex-col'>
            <div className='w-full mt-20 my-8'>
              <Image
                src={aboutPic}
                alt='Residential Structural Design'
                layout='responsive'
                width={600}
                height={400}
                className='w-full border-2 border-zinc-400 rounded-lg shadow-lg '
              />
            </div>
            <div className='w-full my-8'>
              <Image
                src={aboutPic}
                alt='Residential Structural Design'
                layout='responsive'
                width={600}
                height={400}
                className='w-full border-2 border-zinc-400 rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center p-14 bg-gray-200'>
        <h3 className='text-sm font-sans md:text-sm font-semibold text-center text-primary mb-4'>
          Team up with our experts in Construction Administration to oversee
          your project, ensuring that every phase meets your specific needs,
          design specifications, and all regulatory requirements.
        </h3>
        <button
          onClick={() => router.push('/contact')}
          className='px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition duration-300'
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Administration;
