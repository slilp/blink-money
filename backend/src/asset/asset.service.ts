import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Asset } from 'src/database/asset.entity';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
  ) {}

  public async findAll(uid: number): Promise<Asset[]> {
    return await this.assetRepository.find({
      where: {
        uid: uid,
      },
    });
  }

  public async totalAsset(uid: number): Promise<number> {
    const total = await this.assetRepository
      .createQueryBuilder('asset')
      .where({ uid: uid })
      .select('SUM(asset.value)', 'sum')
      .getRawOne();

    return total.sum;
  }

  public async findOne(id: number): Promise<Asset> {
    const assetInfo = await this.assetRepository.findOne({
      where: { aid: id },
    });
    if (!assetInfo) {
      throw new NotFoundException(`Asset ${id} not found`);
    }
    return assetInfo;
  }

  public async create(
    uid: number,
    createAssetDto: CreateAssetDto,
  ): Promise<Asset> {
    try {
      return await this.assetRepository.save({ uid, ...createAssetDto });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  public async update(
    uid: number,
    id: number,
    updateAssetDto: UpdateAssetDto,
  ): Promise<Asset | any> {
    const updateResult = await this.assetRepository.update(
      { aid: id, uid: uid },
      updateAssetDto,
    );
    if (updateResult.affected === 0) {
      throw new NotFoundException(`Asset ${id} not found`);
    }
    return updateResult.raw[0];
  }

  public async remove(uid: number, id: number): Promise<void> {
    await this.assetRepository.delete({ aid: id, uid: uid });
  }
}
