'use client';

import { Box, ThemeProvider } from '@primer/react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { ReactNode } from 'react';

import BreadCrumbs from '@/components/breadCrumbs/BreadCrumbs';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

import '../styles/global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  /*
   * must contain the html and body tags.
   * */

  const pathname = usePathname();
  const pathArray = pathname.split('/').slice(1);

  return (
    <html>
      <Script src="https://embed.zenn.studio/js/listen-embed-event.js"></Script>
      <body>
        <ThemeProvider>
          <Header />
          <BreadCrumbs pathname={pathArray} />
          <Box backgroundColor={'#f5f5f5'}>
            <main>{children}</main>
          </Box>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
