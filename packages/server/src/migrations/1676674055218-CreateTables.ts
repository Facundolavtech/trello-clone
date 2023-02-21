import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1676674055218 implements MigrationInterface {
  name = 'CreateTables1676674055218';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "BoardList" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" integer NOT NULL DEFAULT '1676674061', "updatedAt" integer DEFAULT '1676674061', "name" character varying NOT NULL, "boardId" uuid NOT NULL, CONSTRAINT "PK_b0e0066af9f0fd83e215e775415" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "BoardCardAttachment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" integer NOT NULL DEFAULT '1676674061', "updatedAt" integer DEFAULT '1676674061', "name" character varying NOT NULL, "url" character varying NOT NULL, "type" character varying NOT NULL, "cardId" uuid NOT NULL, CONSTRAINT "PK_31f07b5262495c4119112160be3" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "BoardCardComment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" integer NOT NULL DEFAULT '1676674061', "updatedAt" integer DEFAULT '1676674061', "content" character varying NOT NULL, "authorId" uuid NOT NULL, "cardId" uuid NOT NULL, CONSTRAINT "PK_64ed98615bb67caf472232409fd" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "BoardCardLabel" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" integer NOT NULL DEFAULT '1676674061', "updatedAt" integer DEFAULT '1676674061', "name" character varying NOT NULL, "color" character varying NOT NULL, "cardId" uuid NOT NULL, CONSTRAINT "UQ_46592e212bc070593f2c82e94c0" UNIQUE ("name"), CONSTRAINT "PK_a06aaf0b032043993ec27676d04" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "BoardCard" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" integer NOT NULL DEFAULT '1676674061', "updatedAt" integer DEFAULT '1676674061', "title" character varying NOT NULL, "description" character varying, "cover" character varying, "boardId" uuid NOT NULL, "listId" uuid NOT NULL, CONSTRAINT "UQ_0a158aded46cf2bc95ba93a190e" UNIQUE ("title"), CONSTRAINT "PK_0570e1b88228f62371847f5dae1" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "BoardMember" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" integer NOT NULL DEFAULT '1676674061', "updatedAt" integer DEFAULT '1676674061', "boardId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_6ca4394253c61d8b07cca6ad85a" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" integer NOT NULL DEFAULT '1676674061', "updatedAt" integer DEFAULT '1676674061', "provider" character varying NOT NULL, "providerId" character varying, "email" character varying NOT NULL, "password" character varying, "name" character varying NOT NULL, "username" character varying NOT NULL, "picture" character varying, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "UQ_29a05908a0fa0728526d2833657" UNIQUE ("username"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "Board" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" integer NOT NULL DEFAULT '1676674061', "updatedAt" integer DEFAULT '1676674061', "title" character varying NOT NULL, "cover" character varying, "description" character varying, "visibility" character varying NOT NULL DEFAULT 'public', "adminId" uuid NOT NULL, CONSTRAINT "UQ_c018f9458bef524115e9b7c12b0" UNIQUE ("title"), CONSTRAINT "PK_a898df2ad483f1ad130bdcb56cc" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "BoardCardMember" ("cardId" uuid NOT NULL, "memberId" uuid NOT NULL, CONSTRAINT "PK_969da69e364aa07689cae2b261e" PRIMARY KEY ("cardId", "memberId"))`
    );
    await queryRunner.query(`CREATE INDEX "IDX_d34926791c5ddf8037d0ad6b8d" ON "BoardCardMember" ("cardId") `);
    await queryRunner.query(`CREATE INDEX "IDX_12461fada98a69ec3fe60e1074" ON "BoardCardMember" ("memberId") `);
    await queryRunner.query(
      `ALTER TABLE "BoardList" ADD CONSTRAINT "FK_51d2f3fb35debc9c6a0272df43f" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardCardAttachment" ADD CONSTRAINT "FK_169d812309f922c68fd86fd41c1" FOREIGN KEY ("cardId") REFERENCES "BoardCard"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardCardComment" ADD CONSTRAINT "FK_005e2e081aff486240f75e32afa" FOREIGN KEY ("authorId") REFERENCES "BoardMember"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardCardComment" ADD CONSTRAINT "FK_ddd0882b2a24017d8cec6d1d090" FOREIGN KEY ("cardId") REFERENCES "BoardCard"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardCardLabel" ADD CONSTRAINT "FK_b305d480c05b756358ba57bac3f" FOREIGN KEY ("cardId") REFERENCES "BoardCard"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardCard" ADD CONSTRAINT "FK_416c7736afead1096615e4f9ffd" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardCard" ADD CONSTRAINT "FK_612e84bde443c3b504bd35e913a" FOREIGN KEY ("listId") REFERENCES "BoardList"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardMember" ADD CONSTRAINT "FK_06cb42d9e039c7aade21ac5da93" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardMember" ADD CONSTRAINT "FK_acf611ed266fd3ae7ddf224fccd" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "Board" ADD CONSTRAINT "FK_67d27aefe78c0f142cd3f420b83" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardCardMember" ADD CONSTRAINT "FK_d34926791c5ddf8037d0ad6b8d5" FOREIGN KEY ("cardId") REFERENCES "BoardCard"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "BoardCardMember" ADD CONSTRAINT "FK_12461fada98a69ec3fe60e10749" FOREIGN KEY ("memberId") REFERENCES "BoardMember"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "BoardCardMember" DROP CONSTRAINT "FK_12461fada98a69ec3fe60e10749"`);
    await queryRunner.query(`ALTER TABLE "BoardCardMember" DROP CONSTRAINT "FK_d34926791c5ddf8037d0ad6b8d5"`);
    await queryRunner.query(`ALTER TABLE "Board" DROP CONSTRAINT "FK_67d27aefe78c0f142cd3f420b83"`);
    await queryRunner.query(`ALTER TABLE "BoardMember" DROP CONSTRAINT "FK_acf611ed266fd3ae7ddf224fccd"`);
    await queryRunner.query(`ALTER TABLE "BoardMember" DROP CONSTRAINT "FK_06cb42d9e039c7aade21ac5da93"`);
    await queryRunner.query(`ALTER TABLE "BoardCard" DROP CONSTRAINT "FK_612e84bde443c3b504bd35e913a"`);
    await queryRunner.query(`ALTER TABLE "BoardCard" DROP CONSTRAINT "FK_416c7736afead1096615e4f9ffd"`);
    await queryRunner.query(`ALTER TABLE "BoardCardLabel" DROP CONSTRAINT "FK_b305d480c05b756358ba57bac3f"`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" DROP CONSTRAINT "FK_ddd0882b2a24017d8cec6d1d090"`);
    await queryRunner.query(`ALTER TABLE "BoardCardComment" DROP CONSTRAINT "FK_005e2e081aff486240f75e32afa"`);
    await queryRunner.query(`ALTER TABLE "BoardCardAttachment" DROP CONSTRAINT "FK_169d812309f922c68fd86fd41c1"`);
    await queryRunner.query(`ALTER TABLE "BoardList" DROP CONSTRAINT "FK_51d2f3fb35debc9c6a0272df43f"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_12461fada98a69ec3fe60e1074"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_d34926791c5ddf8037d0ad6b8d"`);
    await queryRunner.query(`DROP TABLE "BoardCardMember"`);
    await queryRunner.query(`DROP TABLE "Board"`);
    await queryRunner.query(`DROP TABLE "User"`);
    await queryRunner.query(`DROP TABLE "BoardMember"`);
    await queryRunner.query(`DROP TABLE "BoardCard"`);
    await queryRunner.query(`DROP TABLE "BoardCardLabel"`);
    await queryRunner.query(`DROP TABLE "BoardCardComment"`);
    await queryRunner.query(`DROP TABLE "BoardCardAttachment"`);
    await queryRunner.query(`DROP TABLE "BoardList"`);
  }
}
