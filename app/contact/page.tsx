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
  const [successMessage, setSuccessMessage] = useState('');

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
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSuccessMessage(
        'There was an error sending your message. Please try again.'
      );
    }
  };

  return (
    <div className='relative container mx-auto flex flex-col lg:flex-row justify-center items-center h-screen w-full'>
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
      <div className='flex flex-col lg:flex-row lg:space-x-8 w-full lg:max-w-4xl z-10 h-auto'>
        {/* Contact Info Card */}
        <div className='lg:w-1/2 w-full h-full flex'>
          <Card className='bg-primary text-white p-8 flex-grow'>
            <CardHeader>
              <CardTitle>Let's Keep In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <h2 className='text-base font-semibold'>Irvine Office</h2>
                <p>3943 Irvine Blvd #765</p>
                <p>Irvine, CA 92602</p>
                <p>Tel: (949) 656 - 6134</p>
                <p>
                  Email:{' '}
                  <a
                    href='mailto:info@deyiconsultants'
                    className='text-blue-600'
                  >
                    info@deyiconsultants
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Card */}
        <div className='lg:w-1/2 w-full h-full flex mt-8 lg:mt-0'>
          <Card className='p-6 flex-grow'>
            <CardHeader>
              <CardTitle className='text-primary'>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
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
            {successMessage && (
              <CardFooter>
                <p className='text-green-500'>{successMessage}</p>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
