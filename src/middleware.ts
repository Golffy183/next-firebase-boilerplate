import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, localePrefix } from './core/navigation';

const nextIntlMiddleware = createMiddleware({
  defaultLocale: 'en',
  localePrefix,
  locales,
});

export const nextIntl = (req: NextRequest): NextResponse => {
  return nextIntlMiddleware(req);
};

export const config = {
  matcher: ['/', '/(en|th)/:path*'],
};

export default nextIntl;
