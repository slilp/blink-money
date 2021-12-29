import { Test, TestingModule } from '@nestjs/testing';
import { YearlyController } from './yearly.controller';

describe('YearlyController', () => {
  let controller: YearlyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YearlyController],
    }).compile();

    controller = module.get<YearlyController>(YearlyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
