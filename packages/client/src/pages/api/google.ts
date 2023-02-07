import { NextApiRequest, NextApiResponse } from 'next';
import http from '../../config/http';
import { ApiRoutes } from '../../config/routes';
import { setSessionCookie } from '../../utils/sessionCookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body;

  try {
    const response = await http.api.post(`${ApiRoutes.AUTH}/google`, { token });

    setSessionCookie(response.data.token, req, res);

    res.status(200).json({ success: 'Logged in' });
  } catch (error: any) {
    res.status(error?.response?.data.statusCode || 500).send(error.response.data);
  }
};
