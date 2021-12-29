import { Module } from '@nestjs/common';
import { YearlyController } from './yearly.controller';
import { YearlyService } from './yearly.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Yearly } from '../database/yaerly.entity';
import { AssetModule } from '../asset/asset.module';

@Module({
  imports: [TypeOrmModule.forFeature([Yearly]), AssetModule],
  controllers: [YearlyController],
  providers: [YearlyService],
})
export class YearlyModule {}
