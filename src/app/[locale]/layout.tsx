import type { Metadata } from 'next';
import React from 'react';
import '@/globals/globals.css';
import '@/globals/tailwind.css';
import '@/globals/font.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Viewport } from 'next';
import NavbarContainer from '../components/layout/navbar-container';
import FooterContainer from '../components/layout/footer-container';
import { Providers } from './providers';
import UILoader from '../components/loader/ui-loader';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'PWA with Next',
  description: 'PWA application with Next',
  generator: 'Next.js',
  manifest: '/manifest.webmanifest',
  keywords: ['nextjs', 'nextjs14', 'next14', 'pwa', 'next-pwa'],
  authors: [
    { name: 'Kowit Narongtuwapan' },
    {
      name: 'Kowit Narongtuwapan',
      url: 'https://www.linkedin.com/in/kowit-narongtuwapan-4a6b2825a/',
    },
  ],
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/icon-128x128.png' },
    { rel: 'icon', url: 'icons/icon-128x128.png' },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#fff' }],
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'th';
  };
};

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  return (
    <html lang={locale}>
      <Head>
        <link
          rel="alternate"
          hrefLang="en"
          href={process.env.NEXT_PUBLIC_SITE_URL + '/en'}
        />
        <link
          rel="alternate"
          hrefLang="th"
          href={process.env.NEXT_PUBLIC_SITE_URL + '/th'}
        />
      </Head>
      <body className="font-SRB">
        <NextIntlClientProvider messages={useMessages()}>
          <UILoader>
            <Providers>
              <NavbarContainer />
              {children}
              <FooterContainer />
            </Providers>
          </UILoader>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
