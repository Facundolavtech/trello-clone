import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createTestDatabase } from '../config/database';
import { User } from '../users/entities/user.entity';
import { BoardService } from './board.service';
import { BoardMember } from './entities/board-member.entity';
import { Board } from './entities/board.entity';

describe('BoardService', () => {
  let module: TestingModule;
  let service: BoardService;
  let boardRepository: Repository<Board>;
  let userRepository: Repository<User>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        createTestDatabase,
        TypeOrmModule.forFeature([Board, User, BoardMember]),
      ],
      providers: [BoardService],
    }).compile();

    service = module.get<BoardService>(BoardService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    boardRepository = module.get<Repository<Board>>(getRepositoryToken(Board));
  });

  afterAll(async () => {
    await module.close();
  });

  const boardDto = {
    title: 'Test board',
    visible: true,
    cover: 'https://testcover.com',
    description: 'Test board description',
  };

  const privateBoardDto = {
    ...boardDto,
    visible: false,
    title: 'Private test board',
  };

  let testBoardId;
  let testUserId;

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('It should create a board, then search for it by its id and find it', async () => {
    const testUser = userRepository.create({
      email: 'test2@test.com',
      username: 'Test user',
      name: 'Test User',
    });

    const { id } = await userRepository.save(testUser);

    testUserId = id;

    const newBoard = await service.create(boardDto, id);

    const board = await boardRepository.save(newBoard);

    testBoardId = board.id;

    expect(board.title).toStrictEqual(boardDto.title);
  });

  it('Should try to create a board with existing title and get 400 code', async () => {
    const response = async () => {
      await service.create(boardDto, testUserId);
    };

    expect(response()).rejects.toEqual(
      new BadRequestException('Already board exists with same title'),
    );
  });

  it('Should return array with test board', async () => {
    const response = await service.findAllPublicBoards();

    expect(response).not.toBe([]);
  });

  it('Should find a test board by title and return it', async () => {
    const findBoard = await service.findOnePublicBoard(testBoardId);

    expect(findBoard.title).toStrictEqual(boardDto.title);
  });

  it('Should search for a private board and get a 404 code', async () => {
    const newPrivateBoard = await service.create(privateBoardDto, testUserId);

    const publicBoards = await service.findAllPublicBoards();

    expect(publicBoards).not.toContain([newPrivateBoard]);
  });

  it('Should update a board and expect new values', async () => {
    const newBoardTitle = 'Updated board';

    const findBoard = await service.findOnePublicBoard(testBoardId);

    await service.update(findBoard.id, {
      title: newBoardTitle,
    });

    expect(
      await (
        await service.findOnePublicBoard(testBoardId)
      ).title,
    ).toStrictEqual(newBoardTitle);
  });

  it('Should delete a board and get a 200 code', async () => {
    const { statusCode } = await service.remove(testBoardId);

    expect(statusCode).toBe(200);
  });
});
