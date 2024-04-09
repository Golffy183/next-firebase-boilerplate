import withNextIntl from 'next-intl/plugin';
import withPWA from 'next-pwa';
import million from 'million/compiler';

const nextIntlConfig = withNextIntl();

const PWA = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  maximumFileSizeToCacheInBytes: 5000000,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    unoptimized: true,
  },
  swcMinify: true,
};

const millionConfig = {
  auto: true,
};

export default million.next(PWA(nextIntlConfig(nextConfig)), millionConfig);
