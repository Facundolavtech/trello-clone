import { NextRequest, NextResponse } from 'next/server';
import config from './config';
import { AppRoutes } from './config/routes';

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const { origin } = req.nextUrl;

  const token = req.cookies.get(config.Auth.CookieName);

  if (token) {
    if (req.url.endsWith(AppRoutes.LOGIN) || req.url.endsWith(AppRoutes.REGISTER) || req.url === `${origin}/`) {
      return NextResponse.redirect(`${origin}${AppRoutes.DASHBOARD}`);
    }

    return response;
  } else {
    if (req.url.includes(AppRoutes.DASHBOARD) || req.url === `${origin}/`) {
      return NextResponse.redirect(`${origin}${AppRoutes.LOGIN}`);
    }
  }

  return response;
}
