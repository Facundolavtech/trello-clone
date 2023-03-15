import { NextRequest, NextResponse } from 'next/server';
import { AppRoutes, privateRoutes, publicRoutes } from 'config/routes';
import config from 'config/index';

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const { origin } = req.nextUrl;

  const token = req.cookies.get(config.AUTH.COOKIE_NAME);

  const urlIsPrivate = privateRoutes.some((r) => req.url.includes(r));

  const urlIsPublic = publicRoutes.some((r) => req.url.includes(r));

  if (token) {
    if (urlIsPublic) {
      return NextResponse.redirect(`${origin}${AppRoutes.DASHBOARD}`);
    }
  } else {
    if (urlIsPrivate) {
      return NextResponse.redirect(`${origin}${AppRoutes.LOGIN}`);
    }
  }

  return response;
}
