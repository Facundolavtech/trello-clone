import {
  AfterUpdate,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'int',
    nullable: false,
    update: false,
    default: Math.floor(Date.now() / 1000),
  })
  created_at: number;

  @Column({
    type: 'int',
    nullable: true,
    update: false,
    default: Math.floor(Date.now() / 1000),
  })
  updated_at: number;

  @AfterUpdate()
  setUpdatedAt() {
    this.updated_at = Math.floor(Date.now() / 1000);
  }

  @BeforeInsert()
  setTimestamps() {
    this.created_at = Math.floor(Date.now() / 1000);
  }
}
