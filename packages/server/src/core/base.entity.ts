import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', width: 11, nullable: false, readonly: true })
  created_at: number;

  @Column({ type: 'int', width: 11, nullable: true })
  updated_at: number;

  @BeforeUpdate()
  public setUpdatedAt() {
    this.updated_at = Math.floor(Date.now() / 1000);
  }

  @BeforeInsert()
  public setCreatedAt() {
    this.created_at = Math.floor(Date.now() / 1000);
  }
}
