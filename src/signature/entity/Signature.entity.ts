import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'signatures' })
export class SignatureEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column()
  code: string;

  @Column({ type: 'float' })
  value: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
