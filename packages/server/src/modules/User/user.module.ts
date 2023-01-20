import { Module } from '@nestjs/common';
import { EntitiesModule } from '../../common/entities/entities.module';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [EntitiesModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
