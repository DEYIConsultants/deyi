import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/lib/site';

export default function Footer() {
  return <footer className="site-footer"><div className="site-container"><div className="footer-grid"><div><Link href="/" className="footer-brand">DEYI<span>CONSULTANTS</span></Link><p>Structural engineering.<br />Practical guidance. Clear next steps.</p><span className="footer-location">Irvine, California · Established 2016</span></div><div><h2>Explore</h2><Link href="/expertise">Structural Services</Link><Link href="/about">About DEYI</Link><Link href="/procedure">Our Process</Link><Link href="/appointment">Free Consultation <ArrowUpRight size={13} aria-hidden="true" /></Link></div><div><h2>Let’s Connect</h2><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><address>3943 Irvine Blvd #765<br />Irvine, CA 92602</address></div></div><div className="footer-bottom"><span data-nosnippet="">© 2016–{new Date().getUTCFullYear()} DEYI Consultants. All rights reserved.</span><span>Structural engineering & permit application assistance</span></div></div></footer>;
}
