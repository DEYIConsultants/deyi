import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { PageIntro } from '@/components/public/SiteSections';
import ContactForm from '@/components/public/ContactForm';
import { company, services } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact Our Structural Engineering Team', description: 'Contact DEYI Consultants in Irvine to discuss structural engineering, evaluations, permit application assistance, or construction-phase support.' };

export default function Contact({ searchParams }: { searchParams: { service?: string } }) {
  const initialService = services.some(service => service.id === searchParams.service) ? searchParams.service : '';
  return <><PageIntro imageSrc="/images/pic30.jpg" imagePosition="center 18%" mobileImagePosition="30% top" eyebrow="Contact DEYI" title="Tell Us What You Have In Mind."><p>A new project, an existing structure, or a question about permits. Let’s find the right structural support for your next step.</p></PageIntro><section className="section site-container contact-layout"><aside className="contact-info"><h2>A Conversation Starts Here.</h2><p>Reach out to discuss your project or request a proposal for structural services.</p><div className="contact-methods"><div className="contact-method"><Phone size={20} aria-hidden="true" /><div><span>Call Us</span><a href={company.phoneHref}>{company.phone}</a></div></div><div className="contact-method"><Mail size={20} aria-hidden="true" /><div><span>Email Us</span><a href={`mailto:${company.email}`}>{company.email}</a></div></div><div className="contact-method"><MapPin size={20} aria-hidden="true" /><div><span>Irvine Office</span><address>3943 Irvine Blvd #765<br />Irvine, CA 92602</address></div></div></div><Link href="/appointment" className="text-link">Prefer to schedule a call? <ArrowRight size={18} aria-hidden="true" /></Link></aside><ContactForm initialService={initialService} /></section></>;
}
