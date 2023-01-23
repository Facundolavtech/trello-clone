import { User } from '../../modules/User/entities/User.entity';

export interface AuthenticatedRequest extends Express.Request {
  user: User;
}
