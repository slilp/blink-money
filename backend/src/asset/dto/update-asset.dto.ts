import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min } from 'class-validator';

export class UpdateAssetDto {
  @ApiProperty()
  @IsNotEmpty()
  label: string;

  @ApiProperty()
  @Min(0)
  value: number;
}
