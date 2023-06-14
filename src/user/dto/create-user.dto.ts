import {
  IsEmail,
  IsEnum,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { EstadoBrasil, Role } from 'src/core/utils/enums';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends UserEntity {
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

  @IsEnum(EstadoBrasil)
  state: EstadoBrasil;

  @IsEnum(Role)
  role: Role;
}
