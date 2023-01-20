import { User } from '../../modules/user/entities/User.entity';

export interface AuthenticatedRequest extends Express.Request {
  user: User;
}
