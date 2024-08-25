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
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json(
        { message: 'Invalid content type' },
        { status: 400 }
      );
    }

    const requestBody = await request.json();
    console.log('Request body:', requestBody);

    if (!request.body) {
      return NextResponse.json(
        { message: 'Request body is missing' },
        { status: 400 }
      );
    }

    const { name, email, message }: ContactFormData = requestBody;

    const userEmail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    if (!userEmail || !userPass || !receiverEmail) {
      throw new Error('Missing required environment variables');
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    const mailOptions = {
      from: `"Your Name" <${userEmail}>`,
      to: receiverEmail,
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log('>>> Email sent to:', receiverEmail);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error parsing JSON or sending email:', error);

    return NextResponse.json(
      { message: 'Error processing request', error: (error as Error).message },
      { status: 500 }
    );
  }
}
