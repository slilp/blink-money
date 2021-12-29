import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Yearly } from '../database/yaerly.entity';
import { CreateYearlyDto } from './dto/create-yearly.dto';
import { UpdateYearlyDto } from './dto/update-yearly.dto';

@Injectable()
export class YearlyService {
  constructor(
    @InjectRepository(Yearly)
    private yearlyRepository: Repository<Yearly>,
  ) {}

  public async findAll(uid: number): Promise<Yearly[]> {
    return await this.yearlyRepository.find({ where: { uid: uid } });
  }

  public async findOne(uid: number, id: number): Promise<Yearly> {
    const yearlyInfo = await this.yearlyRepository.findOne({
      where: { uid: uid, yid: id },
    });
    if (!yearlyInfo) {
      throw new NotFoundException(`Yearly ${id} not found`);
    }
    return yearlyInfo;
  }

  public async create(
    uid: number,
    createYearlyDto: CreateYearlyDto,
  ): Promise<Yearly> {
    try {
      return await this.yearlyRepository.save({ uid, ...createYearlyDto });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  public async update(
    uid: number,
    id: number,
    updateYearlyDto: UpdateYearlyDto,
  ): Promise<Yearly | any> {
    const updateResult = await this.yearlyRepository.update(
      { uid: uid, yid: id },
      updateYearlyDto,
    );
    if (updateResult.affected === 0) {
      throw new NotFoundException(`Yearly ${id} not found`);
    }
    return updateResult.raw[0];
  }

  public async remove(uid: number, id: number): Promise<void> {
    await this.yearlyRepository.delete({ uid: uid, yid: id });
  }
}
