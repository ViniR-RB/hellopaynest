import { HttpStatus, Injectable } from '@nestjs/common';
import * as brcypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserAlreadyExists, UserNotFound } from './erros/user.erros';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      throw new UserAlreadyExists('Usuário já existe', HttpStatus.CONFLICT);
    }
    const password: string = await brcypt.hash(createUserDto.password, 10);
    const data = {
      ...createUserDto,
      password,
      secret: undefined,
      updateAt: new Date(createUserDto.updateAt),
    };
    const userCreated = await this.prisma.user.create({
      data,
    });

    return {
      ...userCreated,
      password: undefined,
    };
  }

  async findOne(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (user === undefined) {
      throw new UserNotFound('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
