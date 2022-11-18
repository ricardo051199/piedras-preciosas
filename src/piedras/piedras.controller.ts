import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PiedrasService } from './piedras.service';
import { CreatePiedraDto } from './dto/create-piedra.dto';
import { UpdatePiedraDto } from './dto/update-piedra.dto';

@Controller('piedras')
export class PiedrasController {
  constructor(private readonly piedrasService: PiedrasService) {}

  @Post()
  create(@Body() createPiedraDto: CreatePiedraDto) {
    return this.piedrasService.create(createPiedraDto);
  }

  @Get()
  findAll() {
    return this.piedrasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.piedrasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePiedraDto: UpdatePiedraDto) {
    return this.piedrasService.update(+id, updatePiedraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.piedrasService.remove(+id);
  }
}
