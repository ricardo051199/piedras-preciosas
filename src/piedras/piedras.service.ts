import { Injectable } from '@nestjs/common';
import { CreatePiedraDto } from './dto/create-piedra.dto';
import { UpdatePiedraDto } from './dto/update-piedra.dto';

@Injectable()
export class PiedrasService {
  create(createPiedraDto: CreatePiedraDto) {
    return 'This action adds a new piedra';
  }

  findAll() {
    return `This action returns all piedras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} piedra`;
  }

  update(id: number, updatePiedraDto: UpdatePiedraDto) {
    return `This action updates a #${id} piedra`;
  }

  remove(id: number) {
    return `This action removes a #${id} piedra`;
  }
}
