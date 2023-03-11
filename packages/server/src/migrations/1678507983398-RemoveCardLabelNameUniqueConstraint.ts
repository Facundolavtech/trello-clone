import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveCardLabelNameUniqueConstraint1678507983398 implements MigrationInterface {
  name = 'RemoveCardLabelNameUniqueConstraint1678507983398';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" DROP CONSTRAINT "UQ_46592e212bc070593f2c82e94c0"`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1678507986'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1678507986'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "Board" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardMember" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCard" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ADD CONSTRAINT "UQ_46592e212bc070593f2c82e94c0" UNIQUE ("name")`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "updatedAt" SET DEFAULT '1677131635'`);
    await queryRunner.query(`ALTER TABLE "BoardList" ALTER COLUMN "createdAt" SET DEFAULT '1677131635'`);
  }
}
