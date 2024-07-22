'use client';

import NavBar from '@/components/public/NavBar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import homeImage from '../public/images/homeImage.jpg';
import PhoneIcon from '@/public/icons/phone1.png';
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
          layout='fill'
          objectFit='cover'
          style={{ opacity: 0.3 }}
          className='z-0' // Ensure it stays behind other elements
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
          <h1 className='overlay-texth1'>Welcome to DEYI</h1>
          <h2 className='overlay-texth2 my-4'>
            Devoting Ourselves to Ensure Your Project Stands Strong And Secure
          </h2>

          <div className='mt-20 space-x-8 flex'>
            <Button className='buttonExplore bg-white text-midnight-blue font-base'>
              <Image
                src={NavigateIcon}
                alt='Navigate icon'
                width={18}
                height={18}
                className='mr-2'
              />
              Explore Our Service
            </Button>
            <Button
              onClick={() => router.push('/appoitment')}
              className='buttonAppointment bg-midnight-blue text-white hover:bg-primary-foreground font-base'
            >
              <Image
                src={PhoneIcon}
                alt='Phone icon'
                color='white'
                width={18}
                height={18}
                className='mr-2 filter invert'
              />
              Book a Free Consultant
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overlay-texth1 {
          color: rgba(25, 25, 112, 1);
          font-size: 32pt;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
          font-family: 'Barlow Semi Condensed', sans-serif;
        }
        .overlay-texth2 {
          color: rgba(25, 25, 112, 1);
          font-size: 16pt;
          font-family: 'Barlow Semi Condensed', sans-serif;
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
