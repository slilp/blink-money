import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLovDto } from './dto/create-lov.dto';
import { UpdateLovDto } from './dto/update-lov.dto';
import { Lov } from 'src/database/lov.entity';

@Injectable()
export class LovService {
  constructor(
    @InjectRepository(Lov)
    private lovRepository: Repository<Lov>,
  ) {}

  public async findAll(uid: number): Promise<Lov[]> {
    return await this.lovRepository.find({ where: { uid: uid } });
  }

  public async findOne(uid: number, id: number): Promise<Lov> {
    const lovInfo = await this.lovRepository.findOne({
      where: { uid: uid, lid: id },
    });
    if (!lovInfo) {
      throw new NotFoundException(`Lov ${id} not found`);
    }
    return lovInfo;
  }

  public async create(uid: number, createLovDto: CreateLovDto): Promise<Lov> {
    try {
      return await this.lovRepository.save({ uid, ...createLovDto });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  public async update(
    uid: number,
    id: number,
    updateLovDto: UpdateLovDto,
  ): Promise<Lov | any> {
    const updateResult = await this.lovRepository.update(
      { uid: uid, lid: id },
      updateLovDto,
    );
    if (updateResult.affected === 0) {
      throw new NotFoundException(`Lov ${id} not found`);
    }
    return updateResult.raw[0];
  }

  public async remove(uid: number, id: number): Promise<void> {
    await this.lovRepository.delete({ uid: uid, lid: id });
  }
}
