import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOne(id: number): Promise<User> {
    const userInfo = await this.userRepository.findOne({
      where: { uid: id },
    });
    if (!userInfo) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return userInfo;
  }

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const studentInfo = await this.userRepository.findOne({
      where: { username: createUserDto.username },
    });
    if (studentInfo) {
      throw new BadRequestException(`User ${createUserDto.username} is exist`);
    }
    const hash = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hash;
    return await this.userRepository.save(createUserDto);
  }

  public async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User | any> {
    const updateResult = await this.userRepository.update(id, updateUserDto);
    if (updateResult.affected === 0) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return updateResult.raw[0];
  }

  public async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
