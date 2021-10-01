import { Test, TestingModule } from '@nestjs/testing';
import { CommonSrvService } from './common-srv.service';

describe('CommonSrvService', () => {
  let service: CommonSrvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonSrvService],
    }).compile();

    service = module.get<CommonSrvService>(CommonSrvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
