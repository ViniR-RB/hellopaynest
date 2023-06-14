import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SignatureService } from './signature.service';

@Controller('signature')
export class SignatureController {
  constructor(private readonly signatureService: SignatureService) {}
  @Get()
  async showAll() {
    return await this.signatureService.findAll();
  }
  @Post()
  async create(@Body() body) {
    return await this.signatureService.create(body);
  }
  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.signatureService.findOneorFail(id);
  }
  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() data) {
    return await this.signatureService.update(id, data);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.signatureService.deleteById(id);
  }
}
