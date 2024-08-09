'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const Expertice: React.FC = () => {
  const router = useRouter();
  return (
    <div className='h-auto flex flex-col justify-center items-start overflow-hidden p-4 md:p-8'>
      <div className='flex flex-col items-start mt-16 md:mt-32 mb-10 mx-4 md:mx-14 text-primary'>
        <h1 className='font-bold text-xl md:text-2xl mb-4 md:mb-6 text-primary'>
          Service Area We Specialize
        </h1>
        <h2 className='text-base md:text-lg text-destructive'>
          At DEYI Consultants, our extensive experience and dedication to
          excellence set us apart in the structural design industry. With a
          proven track record of delivering projects that meet and exceed city
          codes and regulations, we ensure that your construction and
          development needs are met with precision and reliability. We
          specialize in six core areas of expertise: Residential/Commercial
          Structural Design, Permit Application services, Landscape Detail
          Structural Design, Playground Structural Design, Construction
          Administration, and Title 24 compliance. Each of these services is
          tailored to ensure that your projects are not only aesthetically
          pleasing but also structurally sound and safe. Our team excels in
          navigating the complex regulatory landscape to obtain necessary
          approvals seamlessly. Whether it’s creating innovative and sustainable
          outdoor spaces or ensuring energy efficiency and environmental
          sustainability, we are committed to aligning your projects with the
          latest standards. At DEYI Consultants, we pride ourselves on our
          professional approach and our ability to handle all structural design
          projects, even those not listed on our website. Partner with us for
          unparalleled expertise and a steadfast commitment to delivering
          quality and compliance in every project we undertake.
          {/* At DEYI, we specialize in six core areas of expertise but also open
          for all structural design to meet all your construction and
          development needs. 
          
          Our services include Residential/Commercial
          Structural Design, ensuring your projects are not just beautiful but also
          structurally sound and safe. We excel in Permit Application services,
          navigating the complex regulatory landscape to obtain the necessary
          approvals for your projects seamlessly. Our Landscape Detail
          Structural Design brings outdoor spaces to life with innovative and
          sustainable solutions. For playgrounds that inspire creativity and
          safety, our Playground Structural Design services are second to none.
          We offer expert Construction Administration, overseeing every aspect
          of your project to ensure timely completion and compliance. Finally,
          our Title 24 services focus on energy efficiency and environmental
          sustainability, aligning your projects with the latest standards.
          Partner with DEYI Consultants for unparalleled expertise and a
          commitment to excellence in every project we undertake. */}
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card
          onClick={() => router.push('/expertice/design')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='fill' // Use 'fill' to ensure the image covers the area
                objectFit='cover' // Ensures the image covers the area without distortion
              />
            </CardMedia>
            <CardContent
              className='flex flex-col bottom-0 left-0 right-0 p-4 bg-opacity-70 bg-gray-500 text-white'
              style={{
                borderRadius: '0 0 8px 8px', // Rounded corners only at the bottom
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Residential Structural Design
              </Typography>
              <Typography
                variant='body2'
                color='inherit'
                style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
              >
                Residential Structural Design services focus on the planning and
                engineering aspects of residential buildings, ensuring they are
                structurally sound, safe, and compliant with building codes and
                regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='flex flex-row'>
            {/* <Button size='small' className='text-primary'>
              Detail
            </Button> */}
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card
          onClick={() => router.push('/expertice/application')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='fill' // Use 'fill' to ensure the image covers the area
                objectFit='cover'
              />
            </CardMedia>
            <CardContent
              className='flex flex-col bottom-0 left-0 right-0 p-4 bg-opacity-70 bg-gray-500 text-white'
              style={{
                borderRadius: '0 0 8px 8px', // Rounded corners only at the bottom
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Permit Application
              </Typography>
              <Typography
                variant='body2'
                color='inherit'
                style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
              >
                Permit Application services encompass a crucial aspect of
                construction and development projects, ensuring compliance with
                regulatory standards and legal requirements.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='flex flex-row'>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card
          onClick={() => router.push('/expertice/landscape')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='fill' // Use 'fill' to ensure the image covers the area
                objectFit='cover'
              />
            </CardMedia>
            <CardContent
              className='flex flex-col bottom-0 left-0 right-0 p-4 bg-opacity-70 bg-gray-500 text-white'
              style={{
                borderRadius: '0 0 8px 8px', // Rounded corners only at the bottom
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Landscape Detail Structural Design
              </Typography>
              <Typography
                variant='body2'
                color='inherit'
                style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
              >
                Landscape Detail Structural Design services focus on the
                planning and engineering aspects of residential buildings,
                ensuring they are structurally sound, safe, and compliant with
                building codes and regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card
          onClick={() => router.push('/expertice/playground')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='fill' // Use 'fill' to ensure the image covers the area
                objectFit='cover'
              />
            </CardMedia>
            <CardContent
              className='flex flex-col bottom-0 left-0 right-0 p-4 bg-opacity-70 bg-gray-500 text-white'
              style={{
                borderRadius: '0 0 8px 8px', // Rounded corners only at the bottom
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Playground Structural Design
              </Typography>
              <Typography
                variant='body2'
                color='inherit'
                style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
              >
                Playground Structural Design services focus on the planning and
                engineering aspects of playgrounds, ensuring they are
                structurally sound, safe, and compliant with building codes and
                regulations. ensuring they are structurally sound, safe
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card
          onClick={() => router.push('/expertice/administration')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='fill' // Use 'fill' to ensure the image covers the area
                objectFit='cover'
              />
            </CardMedia>
            <CardContent
              className='flex flex-col bottom-0 left-0 right-0 p-4 bg-opacity-70 bg-gray-500 text-white'
              style={{
                borderRadius: '0 0 8px 8px', // Rounded corners only at the bottom
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Construction Administration
              </Typography>
              <Typography
                variant='body2'
                color='inherit'
                style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
              >
                Construction Administration services focus on overseeing
                construction projects to ensure they are completed on time,
                within budget, and to the required quality standards.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card
          onClick={() => router.push('/expertice/title24')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='fill' // Use 'fill' to ensure the image covers the area
                objectFit='cover'
              />
            </CardMedia>
            <CardContent
              className='flex flex-col bottom-0 left-0 right-0 p-4 bg-opacity-70 bg-gray-500 text-white'
              style={{
                borderRadius: '0 0 8px 8px', // Rounded corners only at the bottom
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Title 24
              </Typography>
              <Typography
                variant='body2'
                color='inherit'
                style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
              >
                Title 24 services focus on energy efficiency and environmental
                sustainability, aligning your projects with the latest
                standards.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='flex flex-row'>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Expertice;
