import { NextResponse } from 'next/server';

/**
 * Proxy for handling locale and authentication
 * Ensures proper routing based on user authentication and role
 * Next.js 16: Renamed from middleware to proxy
 */
export function proxy(request) {
  const pathname = request.nextUrl.pathname;
  const searchParams = request.nextUrl.search;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = ['en', 'fr'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = 'en'; // Default locale
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}${searchParams}`, request.url)
    );
  }

  // Get user from cookie (for SSR) - In production, use JWT tokens
  const userCookie = request.cookies.get('user');
  const isAuthenticated = !!userCookie;

  // Protected dashboard routes
  const isDashboardRoute = pathname.includes('/dashboard/');

  // Login and register routes
  const isAuthRoute =
    pathname.includes('/login') || pathname.includes('/register');

  // Redirect unauthenticated users to login
  if (isDashboardRoute && !isAuthenticated) {
    const locale = pathname.split('/')[1] || 'en';
    const loginUrl = new URL(`/${locale}/login`, request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users away from login/register
  if (isAuthRoute && isAuthenticated) {
    try {
      const user = JSON.parse(userCookie.value);
      const locale = pathname.split('/')[1] || 'en';
      const dashboardRoutes = {
        admin: `/${locale}/dashboard/admin`,
        client: `/${locale}/dashboard/client`,
        partner: `/${locale}/dashboard/partner`,
      };
      return NextResponse.redirect(
        new URL(dashboardRoutes[user.role] || `/${locale}`, request.url)
      );
    } catch (error) {
      // Invalid cookie, continue to auth page
    }
  }

  // Role-based access control for dashboard routes
  if (isDashboardRoute && isAuthenticated) {
    try {
      const user = JSON.parse(userCookie.value);
      const requiredRole = pathname.includes('/dashboard/admin')
        ? 'admin'
        : pathname.includes('/dashboard/partner')
        ? 'partner'
        : pathname.includes('/dashboard/client')
        ? 'client'
        : null;

      if (requiredRole && user.role !== requiredRole) {
        const locale = pathname.split('/')[1] || 'en';
        const dashboardRoutes = {
          admin: `/${locale}/dashboard/admin`,
          client: `/${locale}/dashboard/client`,
          partner: `/${locale}/dashboard/partner`,
        };
        return NextResponse.redirect(
          new URL(dashboardRoutes[user.role] || `/${locale}`, request.url)
        );
      }
    } catch (error) {
      // Invalid cookie, redirect to login
      const locale = pathname.split('/')[1] || 'en';
      return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};
