import React from 'react';
import Image from 'next/image';
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
  return (
    <div className='h-auto flex flex-col justify-center items-start overflow-hidden p-4 md:p-8'>
      <div className='flex flex-col items-start mt-16 md:mt-32 mb-10 mx-4 md:mx-14 text-priblue'>
        <h1 className='font-bold text-xl md:text-2xl mb-4 md:mb-6 text-primary'>
          Service Area We Specialize
        </h1>
        <h2 className='text-base md:text-lg text-destructive'>
          At DEYI, we specialize in six core areas of expertise to meet all your
          construction and development needs. Our services include residential
          Structural Design, ensuring your homes are not just beautiful but also
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
          commitment to excellence in every project we undertake.
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card className='h-auto my-4 md:my-8 mx-4 md:mx-14'>
          <CardActionArea>
            <CardMedia className='h-48 w-full'>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='responsive'
                width={500}
                height={300}
              />
            </CardMedia>
            <CardContent
              style={{
                backgroundColor: '#f0f0f0',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                Residential Structural Design
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
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
            <Button size='small' className='text-priblue'>
              Detail
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className='h-auto my-4 md:my-8 mx-4 md:mx-14'>
          <CardActionArea>
            <CardMedia className='h-48 w-full'>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='responsive'
                width={500}
                height={300}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Permit Application
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Permit Application services encompass a crucial aspect of
                construction and development projects, ensuring compliance with
                regulatory standards and legal requirements.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' className='text-priblue'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className='h-auto my-4 md:my-8 mx-4 md:mx-14'>
          <CardActionArea>
            <CardMedia className='h-48 w-full'>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='responsive'
                width={500}
                height={300}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Landscape Detail Structural Design
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Landscape Detail Structural Design services focus on the
                planning and engineering aspects of residential buildings,
                ensuring they are structurally sound, safe, and compliant with
                building codes and regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' className='text-priblue'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className='h-auto my-4 md:my-8 mx-4 md:mx-14'>
          <CardActionArea>
            <CardMedia className='h-48 w-full'>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='responsive'
                width={500}
                height={300}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Playground Structural Design
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Playground Structural Design services focus on the planning and
                engineering aspects of playgrounds, ensuring they are
                structurally sound, safe, and compliant with building codes and
                regulations.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' className='text-priblue'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className='h-auto mt-4 md:mt-8 mb-16 md:mb-28 mx-4 md:mx-14'>
          <CardActionArea>
            <CardMedia className='h-48 w-full'>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='responsive'
                width={500}
                height={300}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Construction Administration
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Construction Administration services focus on overseeing
                construction projects to ensure they are completed on time,
                within budget, and to the required quality standards.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' className='text-priblue'>
              Share
            </Button>
            <Button size='small' color='primary'>
              Learn More
            </Button>
          </CardActions>
        </Card>

        <Card className='h-auto mt-4 md:mt-8 mb-16 md:mb-28 mx-4 md:mx-14'>
          <CardActionArea>
            <CardMedia className='h-48 w-full'>
              <Image
                src='/images/iStock-104294966.jpg'
                alt='Expertise'
                layout='responsive'
                width={500}
                height={300}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Title 24
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                style={{ maxWidth: '100%', overflowWrap: 'break-word' }}
              >
                Title 24 services focus on energy efficiency and environmental
                sustainability, aligning your projects with the latest
                standards.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='flex flex-row'>
            <Button size='small' className='text-priblue'>
              Share
            </Button>
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
