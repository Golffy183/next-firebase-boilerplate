import type { Metadata } from 'next';
import React from 'react';
import '@/globals/globals.css';
import '@/globals/tailwind.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Viewport } from 'next';
import NavbarContainer from '../components/layout/navbar-container';
import FooterContainer from '../components/layout/footer-container';
import { Providers } from './providers';
import UILoader from '../components/loader/ui-loader';
import localFont from 'next/font/local';

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
  alternates: {
    languages: {
      en: process.env.NEXT_PUBLIC_SITE_URL + '/en',
      th: process.env.NEXT_PUBLIC_SITE_URL + '/th',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'th';
  };
};

const localFontSRB = localFont({
  src: '../messages/fonts/Sarabun-Regular.ttf',
  variable: '--font-srb',
  display: 'swap',
  weight: '400',
  style: 'normal',
});

const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
  return (
    <html lang={locale}>
      <body className={`${localFontSRB.variable} font-sans`}>
        <UILoader>
          <NextIntlClientProvider messages={useMessages()}>
            <Providers>
              <NavbarContainer />
              {children}
              <FooterContainer />
            </Providers>
          </NextIntlClientProvider>
        </UILoader>
      </body>
    </html>
  );
};

export default RootLayout;
