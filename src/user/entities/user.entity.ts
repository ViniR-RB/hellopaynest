import { EstadoBrasil, Role } from 'src/core/utils/enums';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column({ width: 11 })
  document: string;
  @Column({ width: 11 })
  phone: string;
  @Column()
  addres: string;
  @Column({ width: 10 })
  zipCode: string;
  @Column({ type: 'int' })
  houseNumber: number;
  @Column({ type: 'enum', enum: EstadoBrasil })
  state: EstadoBrasil;
  @Column({ type: 'enum', enum: Role })
  role: Role;
  @CreateDateColumn({ name: 'create_at' })
  createdAt: string;
  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;
}
