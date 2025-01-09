'use client';

import Image from "next/legacy/image";
import aboutPic from '@/public/images/aboutpic.jpg';
import { useRouter } from 'next/navigation';

const Application = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row h-auto mt-16 ml-6 bottom-6'>
        <div className='w-full md:w-1/2 flex flex-col items-center justify-center p-4'>
          <h1 className='font-bold text-4xl text-primary'>
            Permit Application
          </h1>
          <h2 className='text-destructive my-4 text-center'>
            We provide an ADU permit application service that includes all
            necessary graphs per city code requirements, with an optional add-on
            design service.
          </h2>
        </div>
        <div className='w-full md:w-1/2 h-auto bg-primary p-6 flex flex-col items-center justify-center'>
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

      <h2 className='text-destructive mx-14 my-14'>
        We provide a comprehensive ADU (Accessory Dwelling Unit) permit
        application service that includes all necessary graphs and documentation
        to meet city code requirements. Our package ensures a smooth and
        efficient approval process, minimizing delays and reducing the stress
        associated with permit applications. In addition to the essential
        documentation, you have the option to enhance the package with our
        professional design service. This optional add-on allows you to create a
        functional and aesthetically pleasing ADU tailored to your specific
        needs, whether you are looking to expand living space, generate rental
        income, or accommodate family members. Our expert designers work closely
        with you to ensure the design aligns with your vision and meets all
        regulatory standards. By choosing our service, you benefit from expert
        guidance throughout the application process, meticulous attention to
        detail in documentation, and the flexibility to include additional
        design support, ensuring a seamless and customized solution from start
        to finish.
      </h2>

      <div className='flex flex-col items-center justify-center p-14 bg-gray-200'>
        <h3 className='text-sm font-sans md:text-sm font-semibold text-center text-primary mb-4'>
          Team up with our experts in ADU permit applications to create
          comprehensive, compliant plans and designs tailored to your specific
          needs and city requirements.
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

export default Application;
