import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, Min } from 'class-validator';
import { LovType } from '../../database/lov.entity';

export class CreateLovDto {
  @ApiProperty()
  @IsNotEmpty()
  label: string;

  @ApiProperty()
  @IsNotEmpty()
  desc: string;

  @ApiProperty()
  @IsNotEmpty()
  logo: string;

  @ApiProperty()
  @IsNotEmpty()
  type: LovType;

  @ApiProperty()
  @IsInt()
  @Min(0)
  value: number;
}
