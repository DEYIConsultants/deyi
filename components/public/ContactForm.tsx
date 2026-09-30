'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { company, services } from '@/lib/site';

export default function ContactForm({ initialService = '' }: { initialService?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    setSubmitting(true);
    setStatus('idle');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('Unable to submit inquiry');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    } finally {
      window.clearTimeout(timeout);
      setSubmitting(false);
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit} aria-busy={submitting}>
    <h2>Send A Project Inquiry</h2><p>Fields marked * are required. A brief description is a great place to start.</p>
    <div className="field-grid"><div className="form-field"><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></div><div className="form-field"><label htmlFor="email">Email *</label><input type="email" id="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></div></div>
    <div className="field-grid"><div className="form-field"><label htmlFor="service">How can we help? <span>(optional)</span></label><select id="service" name="service" defaultValue={initialService}><option value="">Select a service</option>{services.map(service => <option value={service.id} key={service.id}>{service.title}</option>)}<option value="not-sure">I’m not sure yet</option></select></div><div className="form-field"><label htmlFor="city">Project city <span>(optional)</span></label><input id="city" name="city" maxLength={100} placeholder="e.g. Irvine" /></div></div>
    <div className="form-field"><label htmlFor="message">Tell us about your project *</label><textarea id="message" name="message" required maxLength={5000} rows={5} placeholder="Describe the proposed work, any structural questions, and your target schedule." /></div>
    <div className="form-trap" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="form-privacy">Your inquiry is sent to the DEYI team so we can respond about your project.</p>
    <button className="button button-primary" type="submit" disabled={submitting}>{submitting ? 'Sending your inquiry…' : 'Send project inquiry'}<ArrowRight size={17} aria-hidden="true" /></button>
    <div role="status" aria-live="polite" aria-atomic="true">{status === 'success' && <p className="form-feedback success"><CheckCircle2 size={20} aria-hidden="true" />Thank you. Your inquiry has been sent to DEYI. Our team will follow up by email.</p>}{status === 'error' && <p className="form-feedback error"><span>We couldn’t confirm that your inquiry was sent. Your details are still here. Please try again, or email <a href={`mailto:${company.email}`}>{company.email}</a>.</span></p>}</div>
  </form>;
}
