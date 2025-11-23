import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get('host') || '';
    const rootDomain = 'neochainhk.cn'; // HARDCODED for production

    console.log(`[Middleware] Hostname: ${hostname}, Path: ${url.pathname}`);

    // 1. Skip static files and APIs
    if (
        url.pathname.startsWith('/api') ||
        url.pathname.startsWith('/_next') ||
        url.pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // 2. Official Site (Root or WWW or Localhost)
    if (
        hostname === rootDomain ||
        hostname === `www.${rootDomain}` ||
        hostname.includes('localhost') // Relaxed for local testing
    ) {
        url.pathname = `/official${url.pathname}`;
        console.log(`[Middleware] Rewriting to: ${url.pathname}`);
        return NextResponse.rewrite(url);
    }

    // 3. Portal (App)
    if (hostname === `app.${rootDomain}`) {
        url.pathname = `/portal${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    // 4. Tenants (Subdomains)
    if (hostname.endsWith(`.${rootDomain}`)) {
        const subdomain = hostname.replace(`.${rootDomain}`, '');
        url.pathname = `/tenant/${subdomain}${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
