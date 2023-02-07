import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from '../../common/entities/entities.module';
import config from '../../config';
import { User } from '../User/entities/User.entity';
import { UserService } from '../User/services/user.service';
import { UserModule } from '../User/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RegisterStrategy } from './strategies/register.strategy';

@Module({
  imports: [
    UserModule,
    EntitiesModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigType<typeof config>) => ({
        secret: configService.auth.jwt.secret,
        signOptions: {
          expiresIn: configService.auth.jwt.expiresIn,
        },
      }),
      inject: [config.KEY],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, RegisterStrategy, JwtStrategy, GoogleStrategy],
  exports: [AuthService],
})
export class AuthModule {}
