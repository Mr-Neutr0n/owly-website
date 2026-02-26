import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // 1. Redirect non-www to www (301 permanent)
  if (
    hostname === 'owly.studio' ||
    hostname.startsWith('owly.studio:')
  ) {
    url.host = hostname.replace('owly.studio', 'www.owly.studio');
    return NextResponse.redirect(url, 301);
  }

  // 2. Redirect Vercel preview/deployment URLs to canonical domain (301)
  //    This is the primary fix for "Duplicate without user-selected canonical"
  //    Google was indexing owly-website.vercel.app as a duplicate of www.owly.studio
  if (
    hostname.endsWith('.vercel.app') ||
    hostname.includes('vercel.app')
  ) {
    const canonicalUrl = new URL(url.pathname + url.search, 'https://www.owly.studio');
    return NextResponse.redirect(canonicalUrl.toString(), 301);
  }

  // 3. Remove trailing slashes (except root /)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest)).*)',
  ],
};
