import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { createTestDatabase } from '../config/database';
import { Board } from '../boards/entities/board.entity';

describe('UsersService', () => {
  let module: TestingModule;
  let service: UsersService;
  let userRepository: Repository<User>;
  let boardRepository: Repository<Board>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [createTestDatabase, TypeOrmModule.forFeature([User, Board])],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    boardRepository = module.get<Repository<Board>>(getRepositoryToken(Board));
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
