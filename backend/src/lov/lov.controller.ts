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
import { LovService } from './lov.service';
import { CreateLovDto } from './dto/create-lov.dto';
import { UpdateLovDto } from './dto/update-lov.dto';
import { Lov } from '../database/lov.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('lov')
export class LovController {
  constructor(private readonly lovService: LovService) {}

  @ApiCreatedResponse({ type: Lov })
  @Post()
  create(@Request() req: any, @Body() createLovDto: CreateLovDto) {
    return this.lovService.create(req.user.uid, createLovDto);
  }

  @Get()
  findAll(@Request() req: any) {
    return this.lovService.findAll(req.user.uid);
  }

  @Get(':id')
  findOne(@Request() req: any, @Param('id') id: number) {
    return this.lovService.findOne(req.user.uid, id);
  }

  @Put(':id')
  update(
    @Request() req: any,
    @Param('id') id: number,
    @Body() updateLovDto: UpdateLovDto,
  ) {
    return this.lovService.update(req.user.uid, id, updateLovDto);
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: number) {
    return this.lovService.remove(req.user.uid, id);
  }
}
