
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Nav from '@/components/Nav';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Tharindu | Portfolio',
  description: 'Personal website of Tharindu Jayasanka',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='overflow-x-hidden'>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
