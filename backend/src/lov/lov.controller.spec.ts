import { Test, TestingModule } from '@nestjs/testing';
import { LovController } from './lov.controller';

describe('LovController', () => {
  let controller: LovController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LovController],
    }).compile();

    controller = module.get<LovController>(LovController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
