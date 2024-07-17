'use client';

import NavBar from '@/components/public/NavBar';
import Footer from '@/components/public/Footer';
import Image from 'next/image';
import homeImage from '../public/images/homeImage.jpg';

export default function Home() {
  return (
    <>
      <NavBar />

      <Image
        src={homeImage}
        alt='Home page background image'
        objectFit='cover'
        style={{ opacity: 0.3 }}
      ></Image>
      <h1 className='overlay-text'>Welcome to DEYI</h1>
      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          height: 400px;
        }
        .overlay-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 36pt;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
      `}</style>

      <Footer />
    </>
  );
}
