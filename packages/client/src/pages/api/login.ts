import { NextApiRequest, NextApiResponse } from 'next';
import http from '../../config/http';
import { ApiRoutes } from '../../config/routes';
import setSessionCookie from '../../utils/setSessionCookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const response = await http.api.post(`${ApiRoutes.AUTH}/local/login`, { email, password });

    res.setHeader('Set-Cookie', setSessionCookie(response.data.token));

    res.status(200).json({ success: 'Logged in' });
  } catch (error: any) {
    res.status(error?.response?.data.statusCode || 500).send(error.response.data);
  }
};
