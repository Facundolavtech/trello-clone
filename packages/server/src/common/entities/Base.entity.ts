import { AfterUpdate, BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    nullable: false,
    update: false,
    default: Math.floor(Date.now() / 1000),
  })
  createdAt: number;

  @Column({
    type: 'int',
    nullable: true,
    update: false,
    default: Math.floor(Date.now() / 1000),
  })
  updatedAt: number;

  @AfterUpdate()
  setUpdatedAt() {
    this.updatedAt = Math.floor(Date.now() / 1000);
  }

  @BeforeInsert()
  setTimestamps() {
    this.createdAt = Math.floor(Date.now() / 1000);
  }
}
