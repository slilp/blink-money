import { Test, TestingModule } from '@nestjs/testing';
import { LovService } from './lov.service';

describe('LovService', () => {
  let service: LovService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LovService],
    }).compile();

    service = module.get<LovService>(LovService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
