'use client';

import Image from "next/legacy/image";
import { useRouter } from 'next/navigation';

const Landscape = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col'>
      <div className='h-full flex flex-row'>
        <div className='w-1/3 bg-primary text-white flex items-center justify-center mt-16'>
          <h1 className='text-4xl font-bold p-4 text-center'>
            Landscape Structural Design
          </h1>
        </div>
        <div className='h-full w-2/3 flex flex-col items-center justify-center p-8 mt-16'>
          <div className='w-full'>
            <Image
              src='/images/pic20.jpg'
              alt='Residential Structural Design'
              layout='responsive'
              width={600}
              height={400}
              className='w-full border-2 border-zinc-400 rounded-lg shadow-lg'
            />
          </div>
          <div className='mt-8 mb-8 text-justify'>
            <h2 className='text-base leading-relaxed text-destructive'>
              We offer comprehensive landscape structural design services that
              transform your outdoor spaces into stunning, functional
              environments. Our expert team specializes in creating custom
              landscape plans that harmonize with the natural surroundings while
              meeting all structural and safety requirements. We provide
              detailed design documentation, including structural drawings,
              material specifications, and construction guidelines, ensuring
              that every project is executed to the highest standards. Whether
              you&apos;re looking to enhance a residential property, commercial
              space, or public area, our landscape structural design services
              are tailored to your unique vision and needs. We focus on
              sustainable and innovative solutions that not only beautify your
              space but also add value and functionality. From initial
              consultation to final implementation, our dedicated professionals
              guide you through every step of the process, ensuring your
              landscape design is both aesthetically pleasing and structurally
              sound. Choose our landscape structural design service for expert
              guidance, meticulous planning, and creative solutions that bring
              your outdoor spaces to life.
            </h2>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center p-14 bg-gray-200'>
        <h3 className='text-sm font-sans md:text-sm font-semibold text-center text-primary mb-4'>
          Collaborate with our landscape structural design specialists to
          transform your outdoor spaces into sustainable and aesthetically
          pleasing environments. We create designs that seamlessly blend with
          natural surroundings while meeting structural integrity and local
          regulations, ensuring that your landscape not only enhances the beauty
          of your property but also stands the test of time.
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

export default Landscape;
