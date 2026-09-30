'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MessageCircle, Phone, X } from 'lucide-react';
import { company } from '@/lib/site';

export default function QuickContact() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  useEffect(() => { if (open) closeRef.current?.focus(); }, [open]);
  function close() { setOpen(false); triggerRef.current?.focus(); }

  return <div className="quick-contact" onKeyDown={event => { if (event.key === 'Escape') close(); }}>
    {open && <section id="quick-contact-panel" className="quick-contact-panel" aria-label="Contact DEYI"><div className="quick-contact-heading"><span>Let’s Talk Structures.</span><button ref={closeRef} onClick={close} aria-label="Close contact options"><X size={19} /></button></div><p>Have a project in mind? Connect directly with our team.</p><Link href="/appointment" onClick={close}>Book a free consultation <ArrowUpRight size={17} aria-hidden="true" /></Link><a href={company.phoneHref}><Phone size={16} aria-hidden="true" />{company.phone}</a><Link href="/contact" onClick={close}>Send a project inquiry <ArrowUpRight size={17} aria-hidden="true" /></Link></section>}
    <button ref={triggerRef} className="quick-contact-trigger" onClick={() => setOpen(!open)} aria-label={open ? 'Close contact options' : 'Open contact options'} aria-expanded={open} aria-controls="quick-contact-panel"><MessageCircle size={20} aria-hidden="true" /><span>Let’s talk</span></button>
  </div>;
}
