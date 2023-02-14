import { NextRequest, NextResponse } from 'next/server';
import config from './config';
import { AppRoutes, privateRoutes, publicRoutes } from './config/routes';

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const { origin } = req.nextUrl;

  const token = req.cookies.get(config.Auth.CookieName);

  const urlIsPrivate = privateRoutes.find((r) => {
    if (req.url.includes(r)) {
      return true;
    }
  });

  const urlIsPublic = publicRoutes.find((r) => {
    if (req.url.includes(r)) {
      return true;
    }
  });

  if (token) {
    if (urlIsPublic) {
      return NextResponse.redirect(`${origin}${AppRoutes.DASHBOARD}`);
    }

    return response;
  } else {
    if (urlIsPrivate) {
      return NextResponse.redirect(`${origin}${AppRoutes.LOGIN}`);
    }
  }

  return response;
}
