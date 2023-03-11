import { setCookies } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import config from '../../config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  setCookies(config.AUTH.COOKIE_NAME, '', {
    req,
    res,
    maxAge: 0,
    path: '/',
  });
  return res.status(200).json({ success: 'Logged out' });
};
