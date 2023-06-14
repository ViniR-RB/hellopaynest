import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignatureEntity } from './entity/Signature.entity';
import { SignatureController } from './signature.controller';
import { SignatureService } from './signature.service';

@Module({
  imports: [TypeOrmModule.forFeature([SignatureEntity])],
  providers: [SignatureService],
  controllers: [SignatureController],
})
export class SignatureModule {}
