import withNextIntl from 'next-intl/plugin';
import withPWA from 'next-pwa';

const nextIntlConfig = withNextIntl();

const PWA = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
};

export default PWA(nextIntlConfig(nextConfig));
