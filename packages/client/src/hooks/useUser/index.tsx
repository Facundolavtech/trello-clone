import http from '../../config/http';
import { ApiRoutes } from '../../config/routes';
import { IUser } from '../../models/user.model';

const useUser = () => {
  const getProfile = async (): Promise<IUser> => {
    const res = await http.api.get(`${ApiRoutes.USER}/profile`);

    return res.data;
  };

  return {
    getProfile,
  };
};

export default useUser;
