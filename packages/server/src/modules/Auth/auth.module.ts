import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from '../../common/entities/entities.module';
import { User } from '../User/entities/User.entity';
import { UserService } from '../User/services/user.service';
import { UserModule } from '../User/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RegisterStrategy } from './strategies/register.strategy';
import { SessionSerializer } from './utils/sessionSerializer';

@Module({
  imports: [
    UserModule,
    EntitiesModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({
      session: true,
      defaultStrategy: 'google',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, RegisterStrategy, GoogleStrategy, SessionSerializer],
  exports: [AuthService],
})
export class AuthModule {}
