import { NextApiRequest, NextApiResponse } from 'next';
import http from 'config/http';
import { ApiRoutes } from 'config/routes';
import { setSessionCookie } from 'utils/sessionCookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;

  try {
    const response = await http.api.post(`${ApiRoutes.AUTH}/local/login`, { email, password });

    setSessionCookie(response.data.token, req, res);

    res.status(200).json({ success: 'Logged in' });
  } catch (error: any) {
    res.status(error?.response?.data.statusCode || 500).send(error.response.data);
  }
};
