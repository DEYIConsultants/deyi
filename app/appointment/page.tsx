import type { Metadata } from 'next';
import { Clock3, Phone, Check } from 'lucide-react';
import { PageIntro } from '@/components/public/SiteSections';
import AppointmentBooking from '@/components/public/AppointmentBooking';
import { company } from '@/lib/site';

export const metadata: Metadata = { alternates: { canonical: '/appointment' }, title: 'Book A Free Structural Consultation', description: 'Book a free 15–30 minute phone consultation to discuss your structural engineering project and permit application assistance.' };

export default function Appointment() {
  const bookingUrl = process.env.NEXT_PUBLIC_APPOINTMENT_URL || process.env.NEXT_PUBLIC_APPOITMENT_URL;
  return <><PageIntro imageSrc="/images/pic32.jpg" eyebrow="Your Project Starts Here" title="Let’s Talk About What You’re Planning."><p>A free introductory phone call to discuss your structural needs, available information, and next steps.</p></PageIntro><section className="site-container booking-section"><div className="booking-benefits"><span><Clock3 size={19} aria-hidden="true" />15–30 minutes</span><span><Phone size={19} aria-hidden="true" />Phone consultation</span><span><Check size={19} aria-hidden="true" />Free introductory call</span></div><AppointmentBooking url={bookingUrl} /><div className="booking-help"><h2>Prefer To Get In Touch Directly?</h2><p>Call <a href={company.phoneHref}>{company.phone}</a> or email <a href={`mailto:${company.email}`}>{company.email}</a>.</p><p className="small-note">Have your project location and a short description ready. Plans and photos can help us understand the structural scope.</p></div></section></>;
}
