import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animalss } from './animals.entity';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(+id);
  }

  @Post()
  create(@Body() createAnimal: Animalss) {
    return this.animalsService.create(createAnimal);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAnimal: Animalss) {
    return this.animalsService.update(+id, updateAnimal);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalsService.remove(+id);
  }
}
