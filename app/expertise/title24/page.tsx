'use client';

import Image from 'next/image';
import aboutPic from '@/public/images/aboutpic.jpg';
import { useRouter } from 'next/navigation';

const Title = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col'>
      <div className='w-full flex flex-row md:flex-row h-auto mt-16 bottom-6'>
        <div className='w-full flex flex-col'>
          <div className='w-full flex flex-col items-center justify-center p-4'>
            <h1 className='font-bold text-4xl text-primary mt-24'>Title 24</h1>
            <h2 className='text-destructive mx-14 my-14'>
              We provide a comprehensive Title 24 compliance service that
              includes all necessary calculations, reports, and documentation to
              meet California&apos;s energy efficiency standards. Our package
              ensures a smooth and efficient approval process, minimizing delays
              and reducing the stress associated with energy code compliance. In
              addition to the essential documentation, you have the option to
              enhance the package with our professional energy consulting
              service. This optional add-on allows you to optimize your
              building&apos;s energy performance, whether you are constructing a
              new building, renovating an existing one, or aiming to reduce
              operational costs. Our expert consultants work closely with you to
              ensure that your project not only meets Title 24 requirements but
              also aligns with your sustainability goals. By choosing our
              service, you benefit from expert guidance throughout the
              compliance process, meticulous attention to detail in
              documentation, and the flexibility to include additional energy
              optimization support. This ensures a seamless and customized
              solution from start to finish, helping you achieve energy
              efficiency, regulatory compliance, and long-term cost savings.
            </h2>
          </div>
          <div className='w-full h-auto bg-primary p-6 flex flex-row items-center justify-center'>
            <div className='bg-white m-2 p-3'>
              <Image
                src={aboutPic}
                alt='Residential Structural Design'
                objectFit='cover'
                width={600}
                height={400}
                className='z-10 border-2 border-zinc-400 shadow-2xl'
              />
            </div>
            <div className='bg-white m-2 p-3'>
              <Image
                src={aboutPic}
                alt='Residential Structural Design'
                objectFit='cover'
                width={600}
                height={400}
                className='z-10 border-2 border-zinc-400 shadow-2xl'
              />
            </div>
            <div className='bg-white m-2 p-3'>
              <Image
                src={aboutPic}
                alt='Residential Structural Design'
                objectFit='cover'
                width={600}
                height={400}
                className='z-10 border-2 border-zinc-400 shadow-2xl'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center p-14 bg-gray-200'>
        <h3 className='text-sm font-sans md:text-sm font-semibold text-center text-primary mb-4'>
          Team up with our experts in Title 24 compliance to create
          comprehensive, energy-efficient plans and documentation tailored to
          your specific project needs and California&apos;s stringent energy
          standards.
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

export default Title;
