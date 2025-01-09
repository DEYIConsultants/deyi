import Image from "next/image";
import divider from '@/public/icons/divider.png';

export default function About() {
  return (<>
    {/* About Section */}
    <div className='flex flex-col md:flex-row items-center justify-between mt-16 bg-primary p-5'>
      <div className='md:w-1/2 w-full text-center md:text-right md:items-end flex flex-col justify-center'>
        <h1 className='mb-4 text-3xl font-bold text-white'>ABOUT DEYI</h1>
        <h2 className='text-base font-sans text-secondary'>
          Established in 2016, we take pride in offering top-notch structural
          engineering design services that seamlessly blend functionality with
          aesthetic appeal at affordable budgets.
        </h2>
      </div>
      <div className='mt-6 md:mt-0 md:w-1/2 w-full flex justify-center'>
        <Image
          src='/images/pic5.JPG'
          alt='About picture'
          height={400}
          width={400}
          className='border-2 border-zinc-400 rounded-lg'
          style={{
            opacity: 1,
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
          }} />
      </div>
    </div>
    {/* Mission Section */}
    <div className='mx-4 md:mx-10 mt-16 mb-16 flex flex-col items-center'>
      <div className='flex flex-row items-center justify-center'>
        <Image
          src={divider}
          alt='Divider icon'
          className='mr-4 h-1 w-16 md:w-32'
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
          }} />
        <h1 className='text-primary font-bold text-xl'>Our Mission</h1>
        <Image
          src={divider}
          alt='Divider icon'
          className='ml-4 h-1 w-16 md:w-32'
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
          }} />
      </div>

      <div className='text-destructive mt-8 text-sm md:text-base leading-relaxed'>
        <h3 className='my-4'>
          At DEYI Consultants, our mission is to provide innovative and
          sustainable design and construction solutions that meet the highest
          standards of quality and excellence. Established in 2016 and based
          in Irvine, we are committed to enhancing the built environment
          through our expertise in structural engineering and our dedication
          to client satisfaction. Our goal is to create spaces that not only
          fulfill functional needs but also inspire and uplift the communities
          we serve.
        </h3>
        <h3 className='my-4'>
          We believe that great design is not just about aesthetics but also
          about functionality, sustainability, and impact. Our team of
          experienced engineers and designers work collaboratively to ensure
          that every project we undertake is not only structurally sound but
          also environmentally responsible and socially beneficial.
        </h3>
        <h3 className='my-4'>
          <span className='font-bold underline text-primary'>Innovation</span>{' '}
          is at the heart of what we do. We continuously explore new
          materials, technologies, and methodologies to bring fresh ideas to
          life and solve complex engineering challenges. This forward-thinking
          approach allows us to deliver cutting-edge solutions that are both
          efficient and effective.
        </h3>
        <h3 className='my-4'>
          <span className='font-bold underline text-primary'>
            Sustainability
          </span>{' '}
          is a core value that guides our work. We are dedicated to reducing
          the environmental impact of our projects through eco-friendly
          practices and sustainable design principles. From energy-efficient
          buildings to green construction techniques, we strive to create
          structures that harmonize with the natural environment.
        </h3>
        <h3 className='my-4'>
          <span className='font-bold underline text-primary'>Excellence</span>{' '}
          is our standard. We are committed to delivering the highest quality
          in every aspect of our work, from initial design to final
          construction. Our meticulous attention to detail, rigorous quality
          control processes, and relentless pursuit of perfection ensure that
          our clients receive the best possible outcomes.
        </h3>
        <h3 className='my-4'>
          <span className='font-bold underline text-primary'>
            Client satisfaction
          </span>{' '}
          is our top priority. We build strong relationships with our clients
          based on trust, transparency, and mutual respect. By listening to
          their needs and understanding their vision, we are able to tailor
          our services to meet their specific requirements and exceed their
          expectations.
        </h3>
        <h3 className='my-4'>
          At DEYI Consultants, we are passionate about creating spaces that
          make a positive difference in people&apos;s lives. Whether it&apos;s
          a residential building, commercial development, or public
          infrastructure project, we are dedicated to making the world a
          better place through thoughtful design and expert engineering. Our
          mission is to not only build structures but to build a legacy of
          innovation, sustainability, and excellence that will stand the test
          of time.
        </h3>
      </div>
    </div>
  </>);
}
