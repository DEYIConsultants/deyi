import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ArrowRight, Building2, FileCheck2, HardHat, House, Layers, Search } from 'lucide-react';
import { faqs, services } from '@/lib/site';

const icons = { home: House, building: Building2, layers: Layers, search: Search, file: FileCheck2, hardhat: HardHat };

export function ServiceCards() {
  return <div className="service-grid">{services.map((service, index) => {
    const Icon = icons[service.icon];
    return <Link className="service-card" href={`/expertise#${service.id}`} key={service.id}>
      <div className="service-card-top"><Icon size={27} strokeWidth={1.5} aria-hidden="true" /><span>0{index + 1}</span></div>
      <h3>{service.title}</h3><p>{service.short}</p>
      <span className="text-link">Explore service <ArrowRight size={17} aria-hidden="true" /></span>
    </Link>;
  })}</div>;
}

export function ContactCTA() {
  return <section className="cta-section"><div className="site-container cta-inner">
    <div><p className="eyebrow light">Let’s Talk About Your Project</p><h2>A Clear Next Step.<br />A Stronger Foundation.</h2><p>Tell us what you’re planning. We’ll help identify the structural support you need.</p></div>
    <div className="cta-actions"><Link href="/appointment" className="button button-accent">Book a free consultation <ArrowRight size={18} aria-hidden="true" /></Link><span>15–30 minute phone call · No consultation fee</span></div>
  </div></section>;
}

export function FAQ() {
  return <section className="section site-container faq-layout"><div><p className="eyebrow">A Little Clarity</p><h2>Before We Get Started.</h2><p className="section-copy">A few answers to help you take the next step.</p><Link href="/contact" className="text-link">Have another question? <ArrowRight size={17} aria-hidden="true" /></Link></div><div className="faq-list">{faqs.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>;
}

export function PageIntro({
  eyebrow,
  title,
  children,
  imageSrc,
  imagePosition = 'center 55%',
  mobileImagePosition = imagePosition,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imagePosition?: string;
  mobileImagePosition?: string;
}) {
  return (
    <section className="page-intro" style={{
      '--intro-image-position': imagePosition,
      '--intro-image-position-mobile': mobileImagePosition,
    } as CSSProperties}>
      <Image src={imageSrc} alt="" aria-hidden="true" fill priority sizes="100vw" className="page-intro-image" />
      <div className="site-container page-intro-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="intro-copy">{children}</div>
      </div>
    </section>
  );
}
