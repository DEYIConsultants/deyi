import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ContactCTA, PageIntro } from '@/components/public/SiteSections';

export const metadata: Metadata = { title: 'About Our Structural Engineering Practice', description: 'Established in 2016 and based in Irvine, DEYI Consultants provides structural engineering and related project support.' };

export default function About() {
  return <><PageIntro imageSrc="/images/pic5.JPG" eyebrow="About DEYI" title="A Focused Practice. A Solid Foundation."><p>Structural engineering is what we do. Helping you understand your project’s structural needs is where we begin.</p></PageIntro>
    <section className="section site-container about-story"><div className="story-image"><Image src="/images/pic14.JPG" alt="Concrete walls and timber framing at a construction site" fill sizes="(max-width: 800px) 100vw, 45vw" /></div><div><p className="eyebrow">Irvine, California · Since 2016</p><h2>Engineering That Moves Your Project Forward.</h2><p>DEYI Consultants provides structural engineering and related services for residential, commercial, and outdoor structures.</p><p>We help owners, contractors, and project teams understand structural requirements, develop engineering documents, and address structural questions through the permit and construction process.</p><p>Every project starts with a conversation about your goals, existing conditions, and the support you need. From there, we define a clear scope and the next steps together.</p><Link href="/expertise" className="text-link">Explore our structural services <ArrowRight size={17} aria-hidden="true" /></Link></div></section>
    <section className="about-band"><div className="site-container section"><p className="eyebrow">Our Approach</p><h2>Clarity At Every Step.</h2><div className="values-grid"><div><span className="step-number">01</span><h3>Understand The Structure</h3><p>Start with the project requirements and available information. Identify structural questions early.</p></div><div><span className="step-number">02</span><h3>Make The Scope Clear</h3><p>Discuss deliverables, responsibilities, fees, and the anticipated engineering schedule before work begins.</p></div><div><span className="step-number">03</span><h3>Work Together</h3><p>Coordinate with your project team and provide structural guidance as the project progresses.</p></div></div></div></section><ContactCTA /></>;
}
