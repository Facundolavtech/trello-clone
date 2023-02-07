import { deleteCookie, setCookie } from 'cookies-next';
import config from '../config';

export function setSessionCookie(token: string, req?: any, res?: any): void {
  return setCookie('thullo:sid', token, { req, res, ...config.Auth.Cookie });
}

export function deleteSessionCookie(req?: any, res?: any): void {
  return deleteCookie('thullo:sid', { req, res });
}
