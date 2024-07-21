'use client';

import NavBar from '@/components/public/NavBar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import homeImage from '../public/images/homeImage.jpg';

export default function Home() {
  return (
    <>
      <div className=''>
        <Image
          src={homeImage}
          alt='Home page background image'
          objectFit='cover'
          style={{ opacity: 0.3 }}
        ></Image>
        <h1 className='overlay-texth1'>Welcome to DEYI</h1>
        <h2 className='overlay-texth2'>
          Devoting Ourself to Ensure Your Project Stand Strong And Secure
        </h2>
      </div>
      <style jsx>{`
        .image-container {
          position: absolute;
          width: 100%;
          height: 400px;
        }
        .overlay-texth1 {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(25, 25, 112, 1);
          font-size: 32pt;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
        }
        .overlay-texth2 {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: rgba(25, 25, 112, 1);
          font-size: 16pt;
        }
      `}</style>
    </>
  );
}
