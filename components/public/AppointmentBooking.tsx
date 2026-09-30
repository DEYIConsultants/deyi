'use client';

import { useEffect, useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

function getBookingUrl(value?: string) {
  try {
    const url = new URL(value || '');
    return url.protocol === 'https:' && (url.hostname === 'calendly.com' || url.hostname.endsWith('.calendly.com')) ? url.href : null;
  } catch { return null; }
}

export default function AppointmentBooking({ url }: { url?: string }) {
  const [scheduled, setScheduled] = useState(false);
  const [ready, setReady] = useState(false);
  const [delayed, setDelayed] = useState(false);
  const bookingUrl = getBookingUrl(url);
  useEffect(() => {
    const timeout = window.setTimeout(() => setDelayed(true), 12000);
    return () => window.clearTimeout(timeout);
  }, []);
  useCalendlyEventListener({
    onProfilePageViewed: () => setReady(true),
    onEventTypeViewed: () => setReady(true),
    onDateAndTimeSelected: () => setReady(true),
    onEventScheduled: () => { setReady(true); setScheduled(true); },
  });
  if (!bookingUrl) return <div className="booking-fallback"><h2>Arrange A Call With Our Team.</h2><p>Online scheduling is currently unavailable. Send us your preferred times and a brief description of your project.</p><Link href="/contact" className="button button-primary">Request a consultation</Link></div>;
  return <>
    <div aria-live="polite">{scheduled && <p className="form-feedback success"><CheckCircle2 size={20} aria-hidden="true" />Your consultation is booked. Check your email for the details.</p>}</div>
    <p className="booking-external">Choose a time below, or <a href={bookingUrl} target="_blank" rel="noopener noreferrer">open scheduling in a new tab <ExternalLink size={14} aria-hidden="true" /></a>.</p>
    {!ready && <div className={delayed ? 'booking-fallback' : 'booking-loading'} role="status">
      {delayed ? <><h2>Let’s Get Your Call Scheduled.</h2><p>The calendar is taking longer than expected. You can open scheduling directly or contact our team to arrange a time.</p><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Open scheduling <ExternalLink size={16} aria-hidden="true" /></a></> : <p>Loading available consultation times…</p>}
    </div>}
    <div className={`booking-widget${delayed && !ready ? ' is-delayed' : ''}`} aria-hidden={delayed && !ready ? true : undefined}><InlineWidget url={bookingUrl} styles={{ height: '780px', width: '100%' }} pageSettings={{ hideLandingPageDetails: false, hideGdprBanner: false, primaryColor: '191970' }} /></div>
  </>;
}
