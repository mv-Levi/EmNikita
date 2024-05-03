import { Module } from '@nestjs/common';
import { AquariumsService } from './aquariums.service';
import { AquariumsController } from './aquariums.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [AquariumsController],
  providers: [AquariumsService],
  imports: [DatasourceModule],
})
export class AquariumsModule {}