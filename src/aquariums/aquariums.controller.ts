import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AquariumsService } from './aquariums.service';
import { Aquarium } from './aquarium.entity';

@Controller('aquariums')
export class AquariumsController {
  constructor(private readonly aquariumsService: AquariumsService) {}

  @Get()
  findAll() {
    return this.aquariumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aquariumsService.findOne(+id);
  }

  @Post()
  create(@Body() createAquarium: Aquarium) {
    return this.aquariumsService.create(createAquarium);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAquarium: Aquarium) {
    return this.aquariumsService.update(+id, updateAquarium);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aquariumsService.remove(+id);
  }
}
