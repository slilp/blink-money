import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/user.entity';
import { LoginUserDto, LoginUserResponseDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  public async signIn(
    loginUserDto: LoginUserDto,
  ): Promise<LoginUserResponseDto> {
    const userInfo = await this.userRepository.findOne({
      where: { username: loginUserDto.username },
    });
    if (!userInfo) {
      throw new NotFoundException(
        `User ${loginUserDto.username} not found or invalid password`,
      );
    }
    const isMatch = await bcrypt.compare(
      loginUserDto.password,
      userInfo.password,
    );
    if (!isMatch)
      throw new NotFoundException(
        `User ${loginUserDto.username} not found or invalid password`,
      );
    userInfo.password = null;
    const payload = { data: JSON.stringify(userInfo) };
    return {
      user: userInfo,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
