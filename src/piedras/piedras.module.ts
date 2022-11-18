import { Module } from '@nestjs/common';
import { PiedrasService } from './piedras.service';
import { PiedrasController } from './piedras.controller';

@Module({
  controllers: [PiedrasController],
  providers: [PiedrasService]
})
export class PiedrasModule {}
