import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports: [DatasourceModule]
})
export class EmployeesModule {}
