import { serialize } from 'cookie';
import config from '../config';

export default function setSessionCookie(token: string) {
  return serialize('thullo:sid', token, { ...config.Auth.Cookie });
}
