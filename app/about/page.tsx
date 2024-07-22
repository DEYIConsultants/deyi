import Image from 'next/image';
import aboutPic from '@/public/images/aboutpic.jpg';

export default function About() {
  return (
    <>
      <div className='h-1/2 mt-16 bg-primary p-5 flex flex-row items-center justify-end'>
        <div className='flex flex-col items-end'>
          <h1 className='mr-6 mb-4 text-xl font-bold text-right text-white'>
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

      <div className='h-1/2 '></div>
    </>
  );
}
