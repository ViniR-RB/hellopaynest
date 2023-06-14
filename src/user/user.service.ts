import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as brcypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserAlreadyExists, UserNotFound } from './erros/user.erros';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const user = await this.userRepository.findOneOrFail({
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
    };
    const userCreated = await this.userRepository.save(
      this.userRepository.create(data),
    );

    return {
      ...userCreated,
      password: undefined,
    };
  }

  async findOne(email: string) {
    try {
      const user = await this.userRepository.findOneByOrFail({
        email,
      });

      return user;
    } catch (error) {
      throw new UserNotFound('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
