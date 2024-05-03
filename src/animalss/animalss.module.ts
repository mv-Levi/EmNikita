import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { AnimalsController } from './animals.controller';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService],
  imports: [DatasourceModule]
})
export class AnimalssModule {}

