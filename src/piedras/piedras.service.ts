import { Injectable } from '@nestjs/common';
import { CreatePiedraDto } from './dto/create-piedra.dto';
import { UpdatePiedraDto } from './dto/update-piedra.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Piedra } from './entities/piedra.entity';

@Injectable()
export class PiedrasService {
  constructor(
    @InjectRepository(Piedra) private piedraRepository: Repository<Piedra>,
  ) {}
  create(createPiedraDto: CreatePiedraDto) {
    return this.piedraRepository.save(createPiedraDto);
  }

  findAll() {
    return this.piedraRepository.find();
  }

  findOne(id: number) {
    return this.piedraRepository.findOneBy({ id });
  }

  async update(id: number, updatePiedraDto: UpdatePiedraDto) {
    await this.piedraRepository.update({ id }, updatePiedraDto);
  }

  async remove(id: number) {
    await this.piedraRepository.delete(id);
  }
}
