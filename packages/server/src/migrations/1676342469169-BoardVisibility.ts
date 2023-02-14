import { MigrationInterface, QueryRunner } from 'typeorm';

export class BoardVisibility1676342469169 implements MigrationInterface {
  name = 'BoardVisibility1676342469169';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Board" RENAME COLUMN "isPrivate" TO "visibility"`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1676342475'`);
    await queryRunner.query(`ALTER TABLE "Board" DROP COLUMN "visibility"`);
    await queryRunner.query(`ALTER TABLE "Board" ADD "visibility" character varying NOT NULL DEFAULT 'public'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Board" DROP COLUMN "visibility"`);
    await queryRunner.query(`ALTER TABLE "Board" ADD "visibility" boolean NOT NULL DEFAULT false`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1676334703'`);
    await queryRunner.query(`ALTER TABLE "Board" RENAME COLUMN "visibility" TO "isPrivate"`);
  }
}
