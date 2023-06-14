import { IsNumber, IsString } from 'class-validator';

export class CreateSignatureDto {
  @IsString()
  code: string;

  @IsNumber()
  value: number;
}
