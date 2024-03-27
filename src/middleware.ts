import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextIntlMiddleware = createMiddleware({
  locales: ['en', 'th'],
  defaultLocale: 'en',
});

export const nextIntl = (req: NextRequest): NextResponse => {
  return nextIntlMiddleware(req);
};

export const config = {
  matcher: ['/', '/(en|th)/:path*'],
};

export default nextIntl;
