import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, Min } from 'class-validator';

export class UpdateYearlyDto {
  @ApiProperty()
  @IsNotEmpty()
  year: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  value: number;
}
