import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import '@/globals/globals.css';
import '@/globals/tailwind.css';
import '@/globals/font.css';
import { MiddlewareInit } from '@/core/middlewares';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import type { Viewport } from 'next';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PWA with Next',
  description: 'PWA application with Next',
  generator: 'Next.js',
  manifest: '/manifest.json',
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
  minimumScale: 1,
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
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className="font-SRB">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
