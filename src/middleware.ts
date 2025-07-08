// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Get the auth token from the cookies
  const token = req.cookies.get('lsq9fac67pp')?.value;

  // List of paths that don't require authentication
  const isPublicPath = req.nextUrl.pathname.startsWith('/signup') || req.nextUrl.pathname.startsWith('/login');

  if (!token && !isPublicPath) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Prevent logged in user from accessing auth pages
  if (token && isPublicPath) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Allow request to proceed if authenticated or accessing public routes
  return NextResponse.next();
}

// Apply the middleware to all routes
// middleware.ts
export const config = {
  matcher: [
    '/((?!api|_next|static|favicon.ico|images|fonts|assets).*)',
  ],
};
