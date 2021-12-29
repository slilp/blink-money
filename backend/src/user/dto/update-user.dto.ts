import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(150)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(150)
  password: string;

  @ApiProperty()
  @MaxLength(150)
  firstName: string;

  @ApiProperty()
  @MaxLength(150)
  lastName: string;

  @ApiProperty()
  target: number;
}
