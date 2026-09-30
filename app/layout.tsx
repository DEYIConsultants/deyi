import type { Metadata } from 'next';
import NavBar from '@/components/public/NavBar';
import Footer from '@/components/public/Footer';
import Chatbot from '@/components/public/Chatbot';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.deyiconsultants.com'),
  title: { default: 'DEYI Consultants | Structural Engineering In Irvine, CA', template: '%s | DEYI Consultants' },
  description: 'Irvine-based structural engineering for residential, commercial, and outdoor structures. Structural evaluations, permit application assistance, and construction support.',
  openGraph: { type: 'website', siteName: 'DEYI Consultants', title: 'DEYI Consultants | Structural Engineering', description: 'Structural engineering, permit application assistance, and construction-phase support. Based in Irvine, California.', images: [{ url: '/images/structural-site.webp', width: 1800, height: 1200, alt: 'Structural construction site' }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main-content" className="skip-link">Skip to content</a><NavBar /><main id="main-content">{children}</main><Footer /><Chatbot /></body></html>;
}
