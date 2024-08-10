import Image from 'next/image';
import aboutPic from '@/public/images/aboutpic.jpg';
import divider from '@/public/icons/divider.png';

export default function About() {
  return (
    <>
      <div className='h-1/2 mt-16 bg-primary p-5 flex flex-row items-center justify-end'>
        <div className='flex flex-col items-end'>
          <h1 className='mr-6 mb-4 text-3xl font-bold text-right text-white'>
            ABOUT DEYI
          </h1>
          <h2 className='mr-6 text-base font-sans text-right text-secondary'>
            Established in 2016, we take pride in offering top-notch structural
            engineering design services that seamlessly blend functionality with
            aesthetic appeal at affordable budget
          </h2>
        </div>
        <Image
          src={aboutPic}
          alt='About picture'
          objectFit='cover'
          height={400}
          style={{ opacity: 1 }}
          className='z-10 border-2 border-zinc-400 rounded-lg'
        />
      </div>

      <div className='h-1/2 mx-10 mt-16 mb-16 flex flex-col items-center'>
        <div className='flex flex-row items-center justify-center'>
          <Image
            src={divider}
            alt='Divider icon'
            className='mr-4 h-1 w-32 divider'
            style={{ color: 'white' }}
          />
          <h1 className='text-primary font-bold mb-4 text-xl'>Our Mission</h1>
          <Image
            src={divider}
            alt='Divider icon'
            className='ml-4 h-1 w-32 divider'
            style={{ color: 'white' }}
          />
        </div>

        <h2 className='text-destructive flex flex-col'>
          <h3 className='my-4 font-base'>
            At DEYI Consultants, our mission is to provide innovative and
            sustainable design and construction solutions that meet the highest
            standards of quality and excellence. Established in 2016 and based
            in Irvine, we are committed to enhancing the built environment
            through our expertise in structural engineering and our dedication
            to client satisfaction. Our goal is to create spaces that not only
            fulfill functional needs but also inspire and uplift the communities
            we serve.
          </h3>
          <h3 className='my-4 font-base'>
            We believe that great design is not just about aesthetics but also
            about functionality, sustainability, and impact. Our team of
            experienced engineers and designers work collaboratively to ensure
            that every project we undertake is not only structurally sound but
            also environmentally responsible and socially beneficial.
          </h3>
          <h3 className='my-4 font-base'>
            <span className='font-bold underline text-primary'>Innovation</span>{' '}
            is at the heart of what we do. We continuously explore new
            materials, technologies, and methodologies to bring fresh ideas to
            life and solve complex engineering challenges. This forward-thinking
            approach allows us to deliver cutting-edge solutions that are both
            efficient and effective.
          </h3>
          <h3 className='my-4 font-base'>
            <span className='font-bold underline text-primary'>
              Sustainability
            </span>{' '}
            is a core value that guides our work. We are dedicated to reducing
            the environmental impact of our projects through eco-friendly
            practices and sustainable design principles. From energy-efficient
            buildings to green construction techniques, we strive to create
            structures that harmonize with the natural environment.
          </h3>
          <h3 className='my-4 font-base'>
            <span className='font-bold underline text-primary'>Excellence</span>{' '}
            is our standard. We are committed to delivering the highest quality
            in every aspect of our work, from initial design to final
            construction. Our meticulous attention to detail, rigorous quality
            control processes, and relentless pursuit of perfection ensure that
            our clients receive the best possible outcomes.
          </h3>
          <h3 className='my-4 font-base'>
            <span className='font-bold underline text-primary'>
              Client satisfaction
            </span>{' '}
            is our top priority. We build strong relationships with our clients
            based on trust, transparency, and mutual respect. By listening to
            their needs and understanding their vision, we are able to tailor
            our services to meet their specific requirements and exceed their
            expectations.
          </h3>
          <h3 className='my-4 font-base'>
            At DEYI Consultants, we are passionate about creating spaces that
            make a positive difference in people&apos;s lives. Whether it&apos;s
            a residential building, commercial development, or public
            infrastructure project, we are dedicated to making the world a
            better place through thoughtful design and expert engineering. Our
            mission is to not only build structures but to build a legacy of
            innovation, sustainability, and excellence that will stand the test
            of time.
          </h3>
        </h2>
      </div>
    </>
  );
}
