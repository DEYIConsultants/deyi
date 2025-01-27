'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';

const Playground = () => {
  const router = useRouter();
  return (
    (<div className='flex flex-col'>
      <div className='flex flex-col md:flex-row h-auto mt-24 ml-6 mr-6 bottom-6'>
        <div className='w-full md:w-1/2 h-auto bg-primary p-6 flex flex-col items-center justify-center rounded-full'>
          <div className='bg-white m-2 p-3 rounded-full'>
            <Image
              src='/images/pic12.jpg'
              alt='Residential Structural Design'
              width={600}
              height={400}
              className='z-10 border-2 border-zinc-400 shadow-2xl rounded-full'
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col items-center justify-center p-4 ml-8'>
          <h1 className='font-bold text-4xl text-primary'>
            Playground Structural Design
          </h1>
          <h2 className='text-destructive my-4 text-center'>
            We provide a Playground Structural Design service that includes all
            necessary structural plans and safety documentation per local code
            requirements.
          </h2>
        </div>
      </div>
      <h2 className='text-destructive mx-14 my-14'>
        We provide a comprehensive Playground Structural Design service that
        includes all necessary structural plans, safety analysis, and
        documentation to meet local and national safety standards. Our package
        ensures a smooth and efficient design approval process, minimizing
        delays and reducing the stress associated with playground construction
        projects. In addition to the essential safety and structural
        documentation, you have the option to enhance the package with our
        professional design service. This optional add-on allows you to create a
        vibrant, engaging, and accessible playground tailored to the specific
        needs of your community or organization. Whether you are looking to
        build a small neighborhood play area or a large-scale recreational park,
        our expert designers work closely with you to ensure the design aligns
        with your vision and meets all regulatory standards. By choosing our
        service, you benefit from expert guidance throughout the design and
        approval process, meticulous attention to detail in safety and
        structural documentation, and the flexibility to include additional
        design support. This ensures a seamless and customized solution from
        start to finish, providing a safe and enjoyable play environment for
        children of all ages.
      </h2>
      <div className='flex flex-col items-center justify-center p-14 bg-gray-200'>
        <h3 className='text-sm font-sans md:text-sm font-semibold text-center text-primary mb-4'>
          Collaborate with our playground structural design experts to create
          safe, engaging, and durable play spaces. We focus on designing
          playgrounds that not only meet safety standards and local regulations
          but also inspire creativity and joy, ensuring a fun and secure
          environment for children of all ages.
        </h3>
        <button
          onClick={() => router.push('/contact')}
          className='px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition duration-300'
        >
          CONTACT US
        </button>
      </div>
    </div>)
  );
};

export default Playground;
