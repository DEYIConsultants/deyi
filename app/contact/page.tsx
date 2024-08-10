'use client';

import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import homeImage from '@/public/images/homeImage.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    message: '',
    type: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);

    if (response.ok) {
      setSuccessMessage({
        message: 'Your message has been sent successfully!',
        type: 'success',
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSuccessMessage({
        message: 'There was an error sending your message. Please try again.',
        type: 'error',
      });
    }
  };

  return (
    <div className='relative flex flex-col lg:flex-row justify-center items-center min-h-screen w-full'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={homeImage}
          alt='Home page background image'
          layout='fill'
          objectFit='cover'
          className='opacity-10'
        />
      </div>

      {/* Cards Container */}
      <div className='flex flex-col lg:flex-row lg:space-x-8 w-full lg:max-w-6xl z-10 h-auto mx-auto p-4 lg:p-8'>
        {/* Contact Info Card */}
        <div className='lg:w-1/2 w-full flex mx-auto'>
          <Card className='bg-primary text-white p-6 flex-grow min-h-[350px] flex flex-col justify-between'>
            <CardHeader>
              <CardTitle>Let&apos;s Keep In Touch</CardTitle>
            </CardHeader>
            <CardContent className='flex-grow'>
              <div className='space-y-2'>
                <h2 className='text-base font-semibold mt-4'>Irvine Office</h2>
                <p>3943 Irvine Blvd #765</p>
                <p>Irvine, CA 92602</p>
                <p>Tel: (949) 656 - 6134</p>
                <p>
                  Email:{' '}
                  <a
                    href='mailto:info@deyiconsultants.com'
                    className='text-blue-600'
                  >
                    info@deyiconsultants.com
                  </a>
                </p>
                <br />
                <p className='py-8'>
                  We invite you to contact us with questions, for more
                  information or for a Request for Proposal. We look forward to
                  assisting you.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Card */}
        <div className='lg:w-1/2 w-full flex mt-8 lg:mt-0 mx-auto'>
          <Card className='p-6 flex-grow min-h-[350px] flex flex-col justify-between'>
            <CardHeader>
              <CardTitle className='text-primary'>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className='flex-grow'>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Name
                  </label>
                  <Input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='mt-1 block w-full'
                  />
                </>
                <>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='mt-1 block w-full'
                  />
                </>
                <>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Message
                  </label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='mt-1 block w-full'
                    rows={4}
                  />
                </>
                <Button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-primary text-white hover:bg-primary-foreground'
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </Button>
              </form>
            </CardContent>
            {successMessage.message && (
              <CardFooter>
                <p
                  className={
                    successMessage.type === 'success'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {successMessage.message}
                </p>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
