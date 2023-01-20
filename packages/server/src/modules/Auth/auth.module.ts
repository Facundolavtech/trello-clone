import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { EntitiesModule } from '../../common/entities/entities.module';
import { UserService } from '../user/services/user.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RegisterStrategy } from './strategies/register.strategy';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule.register({
      session: true,
      defaultStrategy: 'google',
    }),
    EntitiesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, RegisterStrategy, GoogleStrategy, SessionSerializer],
  exports: [AuthService],
})
export class AuthModule {}
