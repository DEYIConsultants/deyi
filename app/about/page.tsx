import Image from 'next/image';
import aboutPic from '@/public/images/aboutpic.jpg';

export default function About() {
  return (
    <>
      <div className='h-1/2 mt-16 bg-primary p-5 text-white flex items-center justify-end'>
        <Image
          src={aboutPic}
          alt='About picture'
          objectFit='cover'
          height={400}
          style={{ opacity: 1 }}
          className='z-10'
        />
      </div>
    </>
  );
}
