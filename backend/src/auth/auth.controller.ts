import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../auth/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.signIn(loginUserDto);
  }
}
