import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get('host') || '';

    // Configuration
    const rootDomain = 'neochainhk.cn';

    // 1. Exclude statics/APIs
    if (
        url.pathname.startsWith('/api') ||
        url.pathname.startsWith('/_next') ||
        url.pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // 2. Official Site (Root / WWW / Localhost)
    // Treats localhost:3000 as the Official Site for dev convenience
    if (
        hostname === rootDomain ||
        hostname === `www.${rootDomain}` ||
        hostname.includes('localhost')
    ) {
        url.pathname = `/official${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    // 3. SaaS Portal (app.)
    if (hostname === `app.${rootDomain}`) {
        url.pathname = `/portal${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    // 4. Tenant Subdomains (*.)
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
