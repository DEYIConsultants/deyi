import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, Check } from 'lucide-react';
import { ContactCTA, FAQ, ServiceCards } from '@/components/public/SiteSections';
import { steps } from '@/lib/site';

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow light"><span className="status-dot" /> Structural Engineering · Irvine, CA</p>
        <h1>Strong Structures.<br /><em>Clear Direction.</em></h1>
        <p className="hero-description">Structural engineering for the places you build, improve, and rely on. From the first question to permit assistance and construction support.</p>
        <div className="button-row"><Link href="/appointment" className="button button-accent">Book a free consultation <ArrowRight size={18} aria-hidden="true" /></Link><Link href="/expertise" className="button button-ghost">Explore our services</Link></div>
        <div className="hero-note"><Check size={16} aria-hidden="true" /> Residential & commercial <span /> Established in 2016</div>
      </div>
      <div className="hero-image"><Image src="/images/structural-site.webp" alt="Reinforcing steel and structural construction work at a building site" fill priority sizes="(max-width: 800px) 100vw, 48vw" /><div className="image-label"><span>Built On Sound Engineering.</span><span>DEYI CONSULTANTS</span></div></div>
    </section>
    <div className="intro-strip"><div className="site-container"><p>Structural Expertise.<br /><strong>From Plans To Progress.</strong></p><div><span>01 / Engineer</span><span>02 / Support Permits</span><span>03 / Support Construction</span></div><a href="#services" aria-label="Explore our structural services"><ArrowDown size={21} /></a></div></div>
    <section className="section site-container" id="services"><div className="section-heading"><div><p className="eyebrow">Our Expertise</p><h2>The Right Support.<br />For Your Next Project.</h2></div><p className="section-copy">A focused range of structural services for owners, contractors, and project teams. Practical guidance at every stage.</p></div><ServiceCards /></section>
    <section className="about-band"><div className="site-container about-band-inner"><div><p className="eyebrow">Focused On What Holds It All Together</p><h2>Your Project.<br />Our Structural Focus.</h2><Link href="/about" className="text-link">Get to know DEYI <ArrowRight size={18} aria-hidden="true" /></Link></div><div><p>Based in Irvine and established in 2016, DEYI Consultants helps clients move forward with structural engineering grounded in their project’s needs.</p><div className="principles"><div><Check aria-hidden="true" size={19} /><span><strong>A Defined Scope</strong>Know what engineering services and deliverables your project includes.</span></div><div><Check aria-hidden="true" size={19} /><span><strong>Practical Coordination</strong>Structural guidance that connects your plans, permit process, and construction team.</span></div><div><Check aria-hidden="true" size={19} /><span><strong>Direct Communication</strong>A conversation about your project, with clear next steps.</span></div></div></div></div></section>
    <section className="section site-container"><div className="section-heading"><div><p className="eyebrow">How We Work</p><h2>A Clear Path Forward.</h2></div><Link href="/procedure" className="text-link">See our process <ArrowRight size={18} aria-hidden="true" /></Link></div><div className="process-preview">{steps.slice(0, 4).map((step, i) => <div key={step.label}><span className="step-number">0{i + 1}</span><h3>{step.label}</h3><p>{step.description}</p></div>)}</div></section>
    <FAQ /><ContactCTA />
  </>;
}
