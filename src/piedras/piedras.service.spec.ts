import { Test, TestingModule } from '@nestjs/testing';
import { PiedrasService } from './piedras.service';

describe('PiedrasService', () => {
  let service: PiedrasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PiedrasService],
    }).compile();

    service = module.get<PiedrasService>(PiedrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
