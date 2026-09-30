import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { ContactCTA, FAQ, PageIntro } from '@/components/public/SiteSections';
import { steps } from '@/lib/site';

export const metadata: Metadata = { title: 'Our Process', description: 'From a free consultation and structural engineering proposal to permit application assistance and construction-phase structural support.' };

export default function Procedure() {
  return <><PageIntro imageSrc="/images/pic24.jpg" imagePosition="center 18%" mobileImagePosition="75% top" eyebrow="Our Process" title="Know What Comes Next."><p>From your first question to structural support in the field, we keep the scope and next steps clear.</p></PageIntro>
    <section className="section site-container process-layout"><div className="timeline">{steps.map((step, i) => <article key={step.label}><span className="step-number">0{i + 1}</span><div><p className="eyebrow">{step.label}</p><h2>{step.title}</h2><p>{step.description}</p></div></article>)}</div><aside className="preparation-card"><FileText size={30} strokeWidth={1.5} aria-hidden="true" /><h2>A Helpful Starting Point.</h2><p>For your first call, have the following ready if available:</p><ul><li>Project city or address</li><li>A short description of the work</li><li>Existing plans and site photos</li><li>Any structural plan-check comments</li><li>Your target schedule</li></ul><p>No plans yet? Start with a conversation.</p><Link href="/appointment" className="text-link">Book your free call <ArrowRight size={17} aria-hidden="true" /></Link></aside></section><FAQ /><ContactCTA /></>;
}
