'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Structuraldesign = () => {
  const router = useRouter();
  return (
    <div className='h-auto flex flex-col justify-center items-start overflow-hidden p-4 md:p-8 '>
      <div className='flex flex-col items-start mt-32 md:mt-32 mb-6 mx-4 md:mx-14 text-primary gap-4'>
        <h1 className='font-bold text-3xl mb-4 text-primary'>
          SERVICE AREA WE SPECIALIZE
        </h1>
        <h2 className='flex flex-col items-start text-destructive'>
          At DEYI Consultants, we offer comprehensive structural design for both
          residential and commercial projects, post-fire structural evaluation,
          construction administration services and more. With over a decade of
          industry experience, we are committed to delivering designs that are
          not only aesthetically pleasing but also structurally sound and
          compliant with all relevant building codes and regulations.
        </h2>
      </div>
      <div className='md:mt-4 mb-10 mx-4 md:mx-14 text-destructive'>
        <h1 className='w-full p-1 indent-4 bg-primary text-white text-2xl my-4 mt-8'>
          Structural Design
        </h1>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col md:w-2/3'>
            <h2>
              We are dedicated to delivering exceptional structural design and
              construction administration services that meet the diverse needs
              of our clients. With a wealth of experience and a team of highly
              skilled professionals, we specialize in creating innovative, safe,
              and efficient structural solutions for a wide range of projects.
              <ul className='my-2'>
                <li className='my-2'>
                  <span className='font-bold text-primary'>
                    Residential Structural Design:{' '}
                  </span>
                  Our residential structural design services ensure that your
                  home is built on a foundation of safety, durability, and
                  aesthetic appeal. Whether you&apos;re constructing a new
                  residence or remodeling an existing structure, our experts are
                  here to provide comprehensive design solutions that meet all
                  building codes and standards.
                </li>
                <li className='my-2'>
                  <span className='font-bold text-primary'>
                    Commercial Structural Design:{' '}
                  </span>
                  We understand the unique challenges of commercial projects and
                  offer tailored structural designs that cater to various
                  commercial building types. From office buildings to retail
                  spaces, our designs prioritize functionality, safety, and
                  long-term performance.
                </li>
                <li className='my-2'>
                  <span className='font-bold text-primary'>
                    Playground Structural Design:{' '}
                  </span>
                  Safety is paramount when it comes to playgrounds. Our
                  specialized structural design services for playgrounds ensure
                  that all structures are not only fun but also safe and
                  compliant with all relevant safety standards and regulations.
                </li>
                <li className='my-2'>
                  <span className='font-bold text-primary'>
                    Landscape Structural Design:{' '}
                  </span>
                  Our landscape structural design services enhance outdoor
                  spaces with thoughtfully designed structures that complement
                  the natural environment. From retaining walls to pergolas, we
                  blend form and function to create beautiful and lasting
                  outdoor areas.
                </li>
              </ul>
            </h2>
          </div>
          <div className='flex justify-center md:w-1/2 md:pl-6'>
            <Image
              src='/images/pic10.JPG'
              alt='Residential Structural Design'
              style={{ objectFit: 'cover' }}
              layout='responsive'
              width={600}
              height={400}
              className='z-10 border-2 border-zinc-400 rounded-lg'
            />
          </div>
        </div>
      </div>

      <div className='md:mt-4 mb-10 mx-4 md:mx-14 text-destructive'>
        <h1 className='w-full p-1 indent-4 bg-primary text-white text-2xl my-4 mt-8'>
          Post-Fire Structural Evaluation
        </h1>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col md:w-2/3'>
            <h2>
              We understand the urgency and importance of assessing structural
              integrity following a fire event. Our team of experienced
              engineers provides comprehensive post-fire structural evaluations
              to ensure the safety, functionality, and longevity of your
              structures. Our service includes:
            </h2>
            <ul className='my-2'>
              <li className='my-2'>
                <span className='font-bold text-primary'>
                  On-Site Inspection:{' '}
                </span>
                <ol className='list-disc pl-5'>
                  <li>
                    Conducting a detailed visual inspection of fire-damaged
                    structures to identify compromised components.
                  </li>
                  <li>
                    Documenting the extent of fire, smoke, and water damage to
                    structural elements.
                  </li>
                </ol>
              </li>
              <li className='my-2'>
                <span className='font-bold text-primary'>
                  Structural Assessment:{' '}
                </span>
                <ol className='list-disc pl-5'>
                  <li>
                    Analyzing the impact of heat and fire exposure on critical
                    structural elements such as beams, columns, and connections.
                  </li>
                  <li>
                    Utilizing advanced tools and techniques, including material
                    testing and non-destructive evaluation methods, to assess
                    residual structural capacity.
                  </li>
                </ol>
              </li>
              <li className='my-2'>
                <span className='font-bold text-primary'>
                  Detailed Reporting:{' '}
                </span>
                <ol className='list-disc pl-5'>
                  <li>
                    Delivering a comprehensive assessment report outlining the
                    current condition of the structure, repair recommendations,
                    and necessary safety measures.
                  </li>
                  <li>
                    Including repair options ranging from partial replacements
                    to full structural retrofitting based on damage severity.
                  </li>
                </ol>
              </li>
              <li className='my-2'>
                <span className='font-bold text-primary'>
                  Restoration Support:{' '}
                </span>
                <ol className='list-disc pl-5'>
                  <li>
                    Collaborating with contractors, architects, and property
                    owners to develop repair and restoration plans.
                  </li>
                  <li>
                    Offering ongoing consultation during the restoration process
                    to ensure structural integrity is restored.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
          <div className='flex justify-center md:w-1/2 md:pl-6'>
            <Image
              src='/images/pic35.JPG'
              alt='Post-fire structural design'
              style={{ objectFit: 'cover' }}
              layout='responsive'
              width={600}
              height={400}
              className='z-10 border-2 border-zinc-400 rounded-lg'
            />
          </div>
        </div>
      </div>

      <div className='md:mt-4 mb-10 mx-4 md:mx-14 text-destructive'>
        <h1 className='w-full p-1 indent-4 bg-primary text-white my-4 text-2xl'>
          Construction Administration
        </h1>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col md:w-2/3'>
            <h2>
              Our commitment to excellence extends beyond the design phase. We
              offer comprehensive construction administration services to ensure
              that your project is executed flawlessly. Our team oversees every
              aspect of the construction process, providing on-site inspections,
              managing contractors, and ensuring that all work complies with the
              design specifications and building codes. We act as your advocate,
              making sure your vision is realized on time and within budget.
              <ul className='my-2'>
                <li className='my-2'>
                  <span className='font-bold text-primary'>Expertise: </span>
                  Our team comprises licensed engineers and designers with
                  extensive experience in both residential and commercial
                  projects.
                </li>
                <li className='my-2'>
                  <span className='font-bold text-primary'>
                    Client-Centric Approach:{' '}
                  </span>
                  We work closely with our clients, listening to their needs and
                  delivering customized solutions.
                </li>
                <li className='my-2'>
                  <span className='font-bold text-primary'>
                    Quality Assurance:{' '}
                  </span>
                  We adhere to the highest industry standards, ensuring that
                  every project is built to last.
                </li>
                <li className='my-2'>
                  <span className='font-bold text-primary'>
                    End-to-End Service:{' '}
                  </span>
                  From initial consultation to final inspection, we are with you
                  every step of the way.
                </li>
              </ul>
            </h2>
          </div>
          <div className='flex justify-center md:w-1/2 md:pl-6'>
            <Image
              src='/images/pic7.JPG'
              alt='Commercial Structural Design'
              style={{ objectFit: 'cover' }}
              layout='responsive'
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
            Partner with our skilled structural design team to develop robust,
            code-compliant designs for your residential or commercial projects.
            We deliver customized solutions that meet your specific needs and
            local building regulations, ensuring the safety and integrity of
            your structures from concept to completion.
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
