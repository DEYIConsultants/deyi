import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/public/NavBar';
import Footer from '@/components/public/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DEYI Consultants',
  description: 'DEYI Consultants, Inc',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <>
          <AppRouterCacheProvider>
            <NavBar />
            {children}
            <Footer />
          </AppRouterCacheProvider>
        </>
      </body>
    </html>
  );
}
