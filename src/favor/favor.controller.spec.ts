import { Test, TestingModule } from '@nestjs/testing';
import { FavoritController } from './favor.controller';

describe('FavorController', () => {
  let controller: FavoritController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritController],
    }).compile();

    controller = module.get<FavoritController>(FavoritController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
