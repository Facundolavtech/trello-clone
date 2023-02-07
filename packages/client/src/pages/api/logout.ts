import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', 'thullo:sid=; Max-Age=0; Path=/;');
  return res.status(200).json({ success: 'Logged out' });
};
