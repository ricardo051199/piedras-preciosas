import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PiedrasModule } from './piedras/piedras.module';

@Module({
  imports: [PiedrasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
