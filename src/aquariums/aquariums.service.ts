import { Injectable } from '@nestjs/common';
import { Aquarium } from './aquarium.entity';

@Injectable()
export class AquariumsService {
  private readonly aquariums: Aquarium[] = [];

  create(aquarium: Aquarium): Aquarium {
    this.aquariums.push(aquarium);
    return aquarium;
  }

  findAll(): Aquarium[] {
    return this.aquariums;
  }

  findOne(id: number): Aquarium {
    return this.aquariums.find(aquarium => aquarium.id === id);
  }

  update(id: number, updatedAquarium: Aquarium): Aquarium {
    const index = this.aquariums.findIndex(aquarium => aquarium.id === id);
    this.aquariums[index] = updatedAquarium;
    return updatedAquarium;
  }

  remove(id: number): boolean {
    const index = this.aquariums.findIndex(aquarium => aquarium.id === id);
    if (index !== -1) {
      this.aquariums.splice(index, 1);
      return true;
    }
    return false;
  }
}