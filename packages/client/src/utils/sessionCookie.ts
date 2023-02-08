import { setCookies } from 'cookies-next';
import config from '../config';

export function setSessionCookie(token: string, req?: any, res?: any): void {
  return setCookies('thullo:sid', token, { req, res, ...config.Auth.Cookie });
}

export function deleteSessionCookie() {
  return (document.cookie = 'thullo:sid=; Max-Age=0; Path=/;');
}
