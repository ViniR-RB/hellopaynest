import {
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';
import { Role, State } from '@prisma/client';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  name: string;

  @IsString()
  @MaxLength(11)
  @Matches(/^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/, {
    message: 'Document is Invalid',
  })
  document: string;

  @IsString()
  @MaxLength(11)
  @Matches(/^\d{11}$/, {
    message: 'Number is Invalid',
  })
  phone: string;

  @IsString()
  addres: string;

  @IsString()
  @MaxLength(10)
  @Matches(/^\d{10}$/)
  zipCode: string;

  @Matches(/^\d+$/, {
    message: 'House Number is Invalid',
  })
  houseNumber: number;

  @IsEnum(State)
  state: State;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  createdAt?: Date;

  @IsDate()
  updateAt: Date;
}
