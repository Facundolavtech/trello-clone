import { NextRequest, NextResponse } from 'next/server';
import config from '../config';
import { ApiRoutes, AppRoutes } from '../config/routes';

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const { origin } = req.nextUrl;

  const token = req.cookies['thullo.sess'];

  if (token) {
    try {
      const res = await fetch(`${config.Api.BaseURL}${ApiRoutes.AUTH.replace('/', '')}/status`, {
        credentials: 'include',
        method: 'GET',
        headers: {
          Cookie: `thullo.sess=${token};`,
        },
      });

      if (res.status !== 200) throw new Error();

      if (req.url.endsWith(AppRoutes.LOGIN) || req.url.endsWith(AppRoutes.REGISTER)) {
        return NextResponse.redirect(`${origin}${AppRoutes.DASHBOARD}`);
      }

      if (req.url === `${origin}/`) {
        return NextResponse.redirect(`${origin}${AppRoutes.DASHBOARD}`);
      }

      return response;
    } catch {
      response.headers.set('Set-Cookie', `thullo.sess=; Max-Age=0`);

      if (req.url.includes(AppRoutes.DASHBOARD) || req.url === `${origin}/`) {
        return NextResponse.redirect(`${origin}${AppRoutes.LOGIN}`);
      }

      return response;
    }
  } else {
    if (req.url.includes(AppRoutes.DASHBOARD) || req.url === `${origin}/`) {
      return NextResponse.redirect(`${origin}${AppRoutes.LOGIN}`);
    }

    return response;
  }
}
