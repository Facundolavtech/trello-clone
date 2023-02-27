import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveUniqueConstraint1677131632101 implements MigrationInterface {
  name = 'RemoveUniqueConstraint1677131632101';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" DROP CONSTRAINT "UQ_0a158aded46cf2bc95ba93a190e"`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ADD CONSTRAINT "UQ_0a158aded46cf2bc95ba93a190e" UNIQUE ("title")`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1676674061'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1676674061'`);
  }
}
