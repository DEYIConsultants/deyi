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

const Expertise: React.FC = () => {
  const router = useRouter();
  return (
    <div className='h-auto flex flex-col justify-center items-start overflow-hidden p-4 md:p-8'>
      <div className='flex flex-col items-start mt-32 mb-10 mx-10 text-primary gap-4'>
        <h1 className='font-bold text-3xl mb-4 text-primary'>
          SERVICE AREA WE SPECIALIZE
        </h1>
        <h2 className='text-base text-destructive'>
          At DEYI Consultants, our extensive experience and dedication to
          excellence set us apart in the structural design industry. With a
          proven track record of delivering projects that meet and exceed city
          codes and regulations, we ensure that your construction and
          development needs are met with precision and reliability. We
          specialize in the following six core areas of expertise. Each of these
          services is tailored to ensure that your projects are not only
          aesthetically pleasing but also structurally sound and safe. Our team
          excels in navigating the complex regulatory landscape to obtain
          necessary approvals seamlessly. Whether it&apos;s creating innovative
          and sustainable outdoor spaces or ensuring energy efficiency and
          environmental sustainability, we are committed to aligning your
          projects with the latest standards. At DEYI Consultants, we pride
          ourselves on our professional approach and our ability to handle all
          structural design projects, even those not listed on our website.
          Partner with us for unparalleled expertise and a steadfast commitment
          to delivering quality and compliance in every project we undertake.
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card
          onClick={() => router.push('/expertise/design')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/pic1.JPG'
                alt='Expertise'
                fill
                style={{
                  objectFit: 'cover',
                  // maxWidth: "100%",
                  // height: "auto"
                }}
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
          onClick={() => router.push('/expertise/application')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                fill
                style={{
                  objectFit: 'cover',
                  // maxWidth: '100%',
                  // height: 'auto',
                }}
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
          onClick={() => router.push('/expertise/landscape')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/pic4.JPG'
                alt='Expertise'
                fill
                style={{
                  objectFit: 'cover',
                  // maxWidth: '100%',
                  // height: 'auto',
                }}
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
          onClick={() => router.push('/expertise/playground')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/pic11.JPG'
                alt='Expertise'
                fill
                style={
                  {
                    // objectFit: 'cover',
                    // maxWidth: '100%',
                    // height: 'auto',
                  }
                }
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
          onClick={() => router.push('/expertise/administration')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/pic16.JPG'
                alt='Expertise'
                fill
                style={{
                  objectFit: 'cover',
                  // maxWidth: '100%',
                  // height: 'auto',
                }}
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
          onClick={() => router.push('/expertise/title24')}
          className='my-4 md:my-8 lg:my-8 mx-8 md:mx-4 lg:mx-8 relative'
        >
          <CardActionArea>
            <CardMedia className='h-48 w-full' style={{ position: 'relative' }}>
              <Image
                src='/images/pic22.jpg'
                alt='Expertise'
                fill
                style={{
                  objectFit: 'cover',
                  // maxWidth: '100%',
                  // height: 'auto',
                }}
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

export default Expertise;
