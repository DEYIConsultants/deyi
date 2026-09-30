import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { ContactCTA, PageIntro } from '@/components/public/SiteSections';
import { services } from '@/lib/site';

export const metadata: Metadata = { alternates: { canonical: '/expertise' }, title: 'Structural Engineering Services', description: 'Residential and commercial structural engineering, outdoor structures, structural evaluations, permit application assistance, and construction-phase support.' };

export default function Expertise() {
  return <><PageIntro imageSrc="/images/pic7.JPG" eyebrow="Our Expertise" title="Structural Expertise. Project By Project."><p>Focused engineering services for the structures you build, improve, and maintain. We work with you to define the right scope for your project.</p></PageIntro>
    <div className="site-container service-jump-links" aria-label="Service categories">{services.map(service => <a href={`#${service.id}`} key={service.id}>{service.title}</a>)}</div>
    <div className="site-container service-details">{services.map((service, i) => <section id={service.id} key={service.id} className="service-detail"><div className="detail-heading"><span className="step-number">0{i + 1}</span><h2>{service.title}</h2></div><div><p>{service.description}</p><ul className="check-list">{service.details.map(detail => <li key={detail}><Check size={18} aria-hidden="true" />{detail}</li>)}</ul>{service.id === 'permit' && <p className="small-note">Permit requirements vary by jurisdiction. The local authority determines approval and review timing; we help with the structural scope of the application.</p>}<Link href={`/contact?service=${service.id}`} className="text-link">Discuss your project <ArrowRight size={17} aria-hidden="true" /></Link></div></section>)}</div><ContactCTA /></>;
}
