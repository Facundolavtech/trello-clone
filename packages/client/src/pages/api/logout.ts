import { setCookies } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  setCookies('thullo:sid', '', {
    req,
    res,
    maxAge: 0,
    path: '/',
  });
  return res.status(200).json({ success: 'Logged out' });
};
