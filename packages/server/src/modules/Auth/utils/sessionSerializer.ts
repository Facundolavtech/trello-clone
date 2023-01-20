import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from '../../user/entities/User.entity';
import { IUser } from '../../user/schemas/user.schema';
import { UserService } from '../../user/services/user.service';

type SerializedUser = IUser;

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UserService) {
    super();
  }

  serializeUser(user: SerializedUser, done: (err, user: SerializedUser) => void) {
    return done(null, user);
  }

  async deserializeUser(user: IUser, done: (err, user: User) => void) {
    const userDB = await this.userService.findByEmail(user.email);

    if (!userDB) {
      return done(null, null);
    }

    return done(null, userDB);
  }
}
