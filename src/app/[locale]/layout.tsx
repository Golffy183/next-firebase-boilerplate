import type { Metadata } from 'next';
import React from 'react';
import '@/globals/globals.css';
import '@/globals/tailwind.css';
import '@/globals/font.css';
import { MiddlewareInit } from '@/core/middlewares';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Viewport } from 'next';
import NavbarContainer from '../components/layout/navbar-container';
import Footer from '../components/layout/footer';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'PWA with Next',
  description: 'PWA application with Next',
  generator: 'Next.js',
  manifest: '/manifest.webmanifest',
  keywords: ['nextjs', 'nextjs14', 'next14', 'pwa', 'next-pwa'],
  alternates: {
    canonical: process.env.SITE_URL,
  },
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
  MiddlewareInit();

  return (
    <html lang={locale}>
      <body className="font-SRB">
        <NextIntlClientProvider messages={useMessages()}>
          <Providers>
            <NavbarContainer />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
