'use client';

import Image from 'next/image';
import aboutPic from '@/public/images/aboutpic.jpg';
import { useRouter } from 'next/navigation';

const Structuraldesign = () => {
  const router = useRouter();
  return (
    <div className='h-auto flex flex-col justify-center items-start overflow-hidden p-4 md:p-8'>
      <h2 className='flex flex-col items-start mt-16 md:mt-32 mb-6 mx-4 md:mx-14 text-destructive'>
        At DEYI Consultants, we offer comprehensive structural design services
        for both residential and commercial projects. With over a decade of
        industry experience, we are committed to delivering designs that are not
        only aesthetically pleasing but also structurally sound and compliant
        with all relevant building codes and regulations.
      </h2>
      <div className='md:mt-4 mb-10 mx-4 md:mx-14 text-destructive'>
        <h1 className='w-full p-1 indent-4 bg-primary text-white text-2xl my-4 mt-8'>
          Residential Structural Design
        </h1>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col md:w-2/3'>
            <h2>
              Our residential structural design services ensure that your home
              is safe, durable, and built to last. We understand the unique
              challenges of residential construction and work closely with
              clients to create custom solutions that meet their specific needs.
              From single-family homes to multi-unit developments, we provide:
              <ul className='my-2'>
                <li className='my-2'>
                  <span className='font-bold'>
                    Detailed Structural Analysis:{' '}
                  </span>
                  Ensuring all elements of your home are capable of withstanding
                  various loads and stresses.
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Code Compliance: </span>
                  Making sure all designs adhere to local, state, and national
                  building codes.
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Sustainable Practices: </span>
                  Incorporating eco-friendly materials and techniques to enhance
                  energy efficiency and reduce environmental impact.
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Innovative Solutions: </span>
                  Utilizing the latest design software and techniques to deliver
                  modern, efficient, and cost-effective structural designs.
                </li>
              </ul>
            </h2>
          </div>
          <div className='flex justify-center md:w-1/2 md:pl-6'>
            <Image
              src={aboutPic}
              alt='Residential Structural Design'
              objectFit='cover'
              width={600}
              height={400}
              className='z-10 border-2 border-zinc-400 rounded-lg'
            />
          </div>
        </div>
      </div>
      <div className='md:mt-4 mb-10 mx-4 md:mx-14 text-destructive'>
        <h1 className='w-full p-1 indent-4 bg-primary text-white my-4 text-2xl'>
          Commercial Structural Design
        </h1>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col md:w-2/3'>
            <h2>
              Our commercial structural design services are tailored to meet the
              demands of larger, more complex projects. We specialize in
              creating robust structures that can accommodate a variety of uses,
              from office buildings to retail spaces, ensuring they are safe,
              functional, and adaptable. Our services include:
              <ul className='my-2'>
                <li className='my-2'>
                  <span className='font-bold'>
                    Comprehensive Design Solution:{' '}
                  </span>
                  From initial concept to final construction, we provide
                  thorough design services that cover every aspect of your
                  project.
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Regulatory Navigation: </span>
                  Assisting with permit applications and ensuring all designs
                  comply with commercial building codes and regulations.
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Advanced Engineering: </span>
                  Utilizing cutting-edge technology and methodologies to
                  optimize structural performance and efficiency.
                </li>
                <li className='my-2'>
                  <span className='font-bold'>Project Management: </span>
                  Overseeing the entire design process to ensure timely delivery
                  and adherence to budget constraints.
                </li>
              </ul>
            </h2>
          </div>
          <div className='flex justify-center md:w-1/2 md:pl-6'>
            <Image
              src={aboutPic}
              alt='Commercial Structural Design'
              objectFit='cover'
              width={600}
              height={400}
              className='z-10 border-2 border-zinc-400 rounded-lg'
            />
          </div>
        </div>
        <h2 className='flex flex-col items-start mt-4 md:mt-8 mb-6 text-destructive'>
          At DEYI Consultants, we pride ourselves on our commitment to
          excellence and our ability to handle projects of any size and
          complexity. Whether you are building a new home or developing a
          commercial property, our team of experienced professionals is here to
          provide the highest level of structural design services.
        </h2>
        <div className='flex flex-col items-center justify-center p-14 mt-20  bg-gray-200'>
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
    </div>
  );
};

export default Structuraldesign;
