import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message }: ContactFormData = await request.json();

    const userEmail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
    console.log('RECEIVER_EMAIL:', process.env.RECEIVER_EMAIL);

    if (!userEmail || !userPass || !receiverEmail) {
      throw new Error('Missing required environment variables');
    }

    // Create a transporter object using Gmail's SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, //465,
      secure: false, // true for port 465, false for port 587
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    // Set up email data with unicode symbols
    const mailOptions = {
      from: `"Your Name" <${userEmail}>`, // sender address
      to: receiverEmail, // receiver email address from .env file
      subject: 'New Contact Form Submission', // Subject line
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    // Log success to the console
    console.log('>>> Email sent to:', receiverEmail);

    // Return a successful response
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Return an error response
    return NextResponse.json(
      { message: 'Error sending email', error: (error as Error).message },
      { status: 500 }
    );
  }
}
