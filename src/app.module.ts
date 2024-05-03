import { Module } from '@nestjs/common';
import { AnimalssModule } from './animalss/animalss.module';
import { AquariumsModule } from './aquariums/aquariums.module';
import { EmployeesModule } from './employees/employees.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [AnimalssModule, AquariumsModule, EmployeesModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
