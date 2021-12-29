import {
  Controller,
  Put,
  Get,
  Param,
  Post,
  Body,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { YearlyService } from './yearly.service';
import { AssetService } from '../asset/asset.service';
import { CreateYearlyDto } from './dto/create-yearly.dto';
import { UpdateYearlyDto } from './dto/update-yearly.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Yearly } from '../database/yaerly.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('yearly')
export class YearlyController {
  constructor(
    private readonly yearlyService: YearlyService,
    private readonly assetService: AssetService,
  ) {}

  @ApiCreatedResponse({ type: Yearly })
  @Post()
  create(@Request() req: any, @Body() createYearlyDto: CreateYearlyDto) {
    return this.yearlyService.create(req.user.uid, createYearlyDto);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.yearlyService.findAll(req.user.uid);
  }

  @Get('remaining')
  async findRemaining(@Request() req: any) {
    const totalAsset = await this.assetService.totalAsset(req.user.uid);
    const allYear = await this.yearlyService.findAll(req.user.uid);
    return this.mapRemainingYear(allYear, totalAsset);
  }

  @Get(':id')
  findOne(@Request() req: any, @Param('id') id: number) {
    return this.yearlyService.findOne(req.user.uid, id);
  }

  @Put(':id')
  update(
    @Request() req: any,
    @Param('id') id: number,
    @Body() updateYearlyDto: UpdateYearlyDto,
  ) {
    return this.yearlyService.update(req.user.uid, id, updateYearlyDto);
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: number) {
    return this.yearlyService.remove(req.user.uid, id);
  }

  mapRemainingYear(years: Yearly[], totalAssetNow: number) {
    return years.map((year: Yearly) => {
      return {
        target: Number(year.value),
        monthRemaining:
          totalAssetNow >= year.value
            ? 0
            : (year.value - totalAssetNow) / (12 - new Date().getMonth()),
        yearRemaining:
          totalAssetNow >= year.value ? year.value : year.value - totalAssetNow,
      };
    });
  }
}
