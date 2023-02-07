import { NextApiRequest, NextApiResponse } from 'next';
import { deleteSessionCookie } from '../../utils/sessionCookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  deleteSessionCookie(req, res);
  return res.status(200).json({ success: 'Logged out' });
};
