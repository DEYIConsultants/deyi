'use client';

import Image from 'next/image';
import homeImage from '../public/images/homeImage.jpg';
import PhoneIcon from '@/public/icons/phone.png';
import NavigateIcon from '@/public/icons/navigate.png';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className='relative h-screen'>
        <Image
          src={homeImage}
          alt='Home page background image'
          fill
          className='z-0'
          style={{
            opacity: 0.3,
            objectFit: 'cover',
            // maxWidth: '100%',
            // height: 'auto',
          }}
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10 p-4'>
          <h1 className='overlay-texth1 text-4xl md:text-6xl text-center'>
            Welcome to DEYI
          </h1>
          <h2 className='overlay-texth2 my-4 text-lg md:text-2xl text-center'>
            Devoting Ourselves to Ensure Your Project Stands Strong And Secure
          </h2>
          <div className='mt-10 md:mt-20 space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row'>
            <Button
              onClick={() => router.push('/expertise')}
              className='buttonExplore bg-white text-midnight-blue font-base'
            >
              <Image
                src={NavigateIcon}
                alt='Navigate icon'
                width={18}
                height={18}
                className='mr-2'
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              Explore Our Service
            </Button>
            <Button
              onClick={() => router.push('/appointment')}
              className='buttonAppointment bg-midnight-blue text-white hover:bg-primary-foreground font-base'
            >
              <Image
                src={PhoneIcon}
                alt='Phone icon'
                width={18}
                height={18}
                className='mr-2 filter invert'
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              Book a Free Consultant
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overlay-texth1 {
          color: rgba(25, 25, 112, 1);
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
          font-family: 'Roboto', sans-serif;
        }
        .overlay-texth2 {
          color: rgba(25, 25, 112, 1);
          font-family: 'Roboto', sans-serif;
        }
        .buttonExplore {
          font-family: 'Barlow Semi Condensed', sans-serif;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          border: 1px solid rgba(25, 25, 112, 1);
        }
        .buttonAppointment {
          font-family: 'Barlow Semi Condensed', sans-serif;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
        }
      `}</style>
    </>
  );
}
