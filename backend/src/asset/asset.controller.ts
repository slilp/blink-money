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
import { ApiCreatedResponse } from '@nestjs/swagger';
import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Asset } from '../database/asset.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @ApiCreatedResponse({ type: Asset })
  @Post()
  create(@Request() req: any, @Body() createAssetDto: CreateAssetDto) {
    return this.assetService.create(req.user.uid, createAssetDto);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.assetService.findAll(req.user.uid);
  }

  @Get('conclusion')
  async conclusion(@Request() req: any) {
    const total = await this.assetService.totalAsset(req.user.uid);
    return {
      totalAsset: Number(total),
      target: 5000,
      remaining: 1000000 - total >= 0 ? 1000000 - total : 0,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.assetService.findOne(id);
  }

  @Put(':id')
  update(
    @Request() req: any,
    @Param('id') id: number,
    @Body() updateAssetDto: UpdateAssetDto,
  ) {
    return this.assetService.update(req.user.uid, id, updateAssetDto);
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: number) {
    return this.assetService.remove(req.user.uid, id);
  }
}
