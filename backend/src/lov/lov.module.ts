import { Module } from '@nestjs/common';
import { LovController } from './lov.controller';
import { LovService } from './lov.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lov } from '../database/lov.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lov])],
  controllers: [LovController],
  providers: [LovService],
})
export class LovModule {}
