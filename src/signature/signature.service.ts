import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignatureEntity } from './entity/Signature.entity';

@Injectable()
export class SignatureService {
  constructor(
    @InjectRepository(SignatureEntity)
    private readonly signatureRepository: Repository<SignatureEntity>,
  ) {}

  async create(data) {
    await this.signatureRepository.save(this.signatureRepository.create(data));
  }
  async findAll() {
    await this.signatureRepository.find();
  }
  async findOneorFail(id: string) {
    try {
      return await this.signatureRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  async update(id: string, data) {
    const signature: SignatureEntity = await this.findOneorFail(id);
    this.signatureRepository.merge(signature, data);
    return await this.signatureRepository.save(signature);
  }
  async deleteById(id: string) {
    await this.findOneorFail(id);

    await this.signatureRepository.delete(id);
  }
}
