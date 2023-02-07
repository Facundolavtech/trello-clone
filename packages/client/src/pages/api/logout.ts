import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default async (_, res: NextApiResponse) => {
  res.setHeader(
    'Set-Cookie',
    serialize('thullo:sid', '', {
      maxAge: -1,
      path: '/',
    })
  );
  return res.status(200).json({ success: 'Logged out' });
};
