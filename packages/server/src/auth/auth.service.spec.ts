import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from '../boards/cards/entities/card.entity';
import { Board } from '../boards/entities/board.entity';
import { createTestDatabase } from '../config/database';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let module: TestingModule;
  let service: AuthService;
  let jwtService: JwtService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        JwtModule.registerAsync({
          useFactory: async () => ({
            secret: 'test-secret-jwt',
            signOptions: { expiresIn: '1d' },
          }),
        }),
        createTestDatabase,
        TypeOrmModule.forFeature([User, Board]),
      ],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  afterAll(async () => {
    await module.close();
  });

  const testUser = {
    email: 'test@test.com',
    name: 'test user',
    picture: 'https://testpic.com',
  };

  it('Should register a new user and return a valid JWT', async () => {
    const jwt = await service.signIn(testUser);
    const decodeJwt = jwtService.decode(jwt);
    expect(decodeJwt).toMatchObject({ email: testUser.email });
  });

  it('Should search test user by email and return it', async () => {
    const findUser = await service.findUserByEmail(testUser.email);
    expect(findUser).not.toBeNull();
    expect(findUser.name).toStrictEqual(testUser.name);
  });
});
