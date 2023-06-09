import { Role, State } from '@prisma/client';

export class User {
  email: string;
  password: string;
  name: string;
  document: string;
  phone: string;
  addres: string;
  zipCode: string;
  houseNumber: number;
  state: State;
  role: Role;
  createdAt?: Date;
  updateAt: Date;
}
