import { NextApiResponse } from 'next';

export default async (_, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', 'thullo:sid=; path=/; Max-Age=0;');
  return res.status(200).json({ success: 'Logged out' });
};
