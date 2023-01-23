import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactor1674440447377 implements MigrationInterface {
  name = 'PostRefactor1674440447377';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1674440450'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1674440450'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1674439353'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1674439353'`);
  }
}
