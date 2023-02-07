import { NextApiRequest, NextApiResponse } from 'next';
import http from '../../config/http';
import { ApiRoutes } from '../../config/routes';
import cookie from 'cookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.body;

  try {
    const response = await http.api.post(`${ApiRoutes.AUTH}/google`, { token });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('thullo:sid', response.data.token, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 3600 * 1000,
        path: '/',
        sameSite: 'strict',
      })
    );

    res.status(200).json({ success: 'Logged in' });
  } catch (error: any) {
    res.status(error?.response?.data.statusCode || 500).send(error.response.data);
  }
};
