import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min } from 'class-validator';

export class CreateAssetDto {
  @ApiProperty()
  @IsNotEmpty()
  label: string;

  @ApiProperty()
  @Min(0)
  value: number;
}
