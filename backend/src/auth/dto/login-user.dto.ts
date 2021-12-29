import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';
import { User } from '../../database/user.entity';

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export interface LoginUserResponseDto {
  user: User;
  accessToken: string;
}
