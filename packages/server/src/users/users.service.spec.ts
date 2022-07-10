import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { createTestConfiguration } from '../../test/db';
import { Board } from '../boards/entities/board.entity';
import { List } from '../boards/lists/entities/list.entity';

describe('UsersService', () => {
  let module: TestingModule;
  let service: UsersService;
  let userRepository: Repository<User>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(createTestConfiguration([User, Board, List])),
        TypeOrmModule.forFeature([User]),
      ],

      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
