import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateContact } from '@/lib/contact';
import { services } from '@/lib/site';

export const runtime = 'nodejs';
const MAX_BODY_BYTES = 24000;

export async function POST(request: NextRequest) {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ message: 'Please submit a JSON inquiry.' }, { status: 415 });
  }
  if (Number(request.headers.get('content-length') || 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ message: 'The inquiry is too long.' }, { status: 413 });
  }

  let body: unknown;
  try {
    const text = await request.text();
    if (Buffer.byteLength(text, 'utf8') > MAX_BODY_BYTES) {
      return NextResponse.json({ message: 'The inquiry is too long.' }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ message: 'Invalid inquiry format.' }, { status: 400 });
  }

  // A hidden field catches basic automated submissions without adding friction.
  if (body && typeof body === 'object' && 'website' in body && body.website) {
    return NextResponse.json({ message: 'Inquiry received.' });
  }
  const data = validateContact(body);
  if (!data) return NextResponse.json({ message: 'Please check the required fields and try again.' }, { status: 400 });

  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const recipient = process.env.RECEIVER_EMAIL;
  if (!user || !pass || !recipient) {
    return NextResponse.json({ message: 'The contact form is temporarily unavailable. Please email or call us.' }, { status: 503 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', port: 465, secure: true,
    auth: { user, pass },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
  });
  try {
    const service = services.find(item => item.id === data.service)?.title || 'Not specified';
    await transporter.sendMail({
      from: { name: 'DEYI Website', address: user },
      to: recipient,
      replyTo: { name: data.name, address: data.email },
      subject: 'New structural project inquiry — DEYI website',
      text: `Name: ${data.name}\nEmail: ${data.email}\nService: ${service}\nProject city: ${data.city || 'Not specified'}\n\n${data.message}`,
    });
    return NextResponse.json({ message: 'Your inquiry has been sent.' });
  } catch {
    console.error('Contact inquiry delivery failed.');
    return NextResponse.json({ message: 'We could not send your inquiry. Please email or call us.' }, { status: 502 });
  } finally {
    transporter.close();
  }
}
