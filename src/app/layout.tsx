
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Nav from '@/components/Nav';

import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import client from '@/lib/wakatimeClient';
import { RANGE, SUMMARY_RANGE } from '@nick22985/wakatime-api';

import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tharindu | Portfolio',
  description: 'Personal website of Tharindu Jayasanka',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getStats = await client.getMyStats(RANGE.LAST_30_DAYS);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Toaster />
          <Nav stats={getStats} />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
