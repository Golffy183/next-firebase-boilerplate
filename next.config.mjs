import withNextIntl from 'next-intl/plugin';
import withPWA from 'next-pwa';
import million from 'million/compiler';

const nextIntlConfig = withNextIntl();

const PWA = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    unoptimized: true,
  },
};

const millionConfig = {
  auto: true,
};

export default million.next(PWA(nextIntlConfig(nextConfig), millionConfig));
