import { Test, TestingModule } from '@nestjs/testing';
import { PiedrasController } from './piedras.controller';
import { PiedrasService } from './piedras.service';

describe('PiedrasController', () => {
  let controller: PiedrasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PiedrasController],
      providers: [PiedrasService],
    }).compile();

    controller = module.get<PiedrasController>(PiedrasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
