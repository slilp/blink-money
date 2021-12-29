import { Test, TestingModule } from '@nestjs/testing';
import { YearlyService } from './yearly.service';

describe('YearlyService', () => {
  let service: YearlyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YearlyService],
    }).compile();

    service = module.get<YearlyService>(YearlyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
