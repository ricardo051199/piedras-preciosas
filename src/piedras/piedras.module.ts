import { Module } from '@nestjs/common';
import { PiedrasService } from './piedras.service';
import { PiedrasController } from './piedras.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Piedra } from './entities/piedra.entity';

@Module({
  controllers: [PiedrasController],
  providers: [PiedrasService],
  imports: [TypeOrmModule.forFeature([Piedra])],
})
export class PiedrasModule {}
