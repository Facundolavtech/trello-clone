import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveUniqueConstraint1676071422072 implements MigrationInterface {
  name = 'RemoveUniqueConstraint1676071422072';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1676071437'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1676071437'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1676071382'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1676071382'`);
  }
}
