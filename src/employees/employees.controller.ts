import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';

@Controller('aquariums')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Post()
  create(@Body() createAquarium: Employee) {
    return this.employeesService.create(createAquarium);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAquarium: Employee) {
    return this.employeesService.update(+id, updateAquarium);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
