import { Injectable } from '@nestjs/common';
import { Animalss } from './animals.entity';

@Injectable()
export class AnimalsService {
  private readonly animals: Animalss[] = [];

  create(animal: Animalss): Animalss {
    this.animals.push(animal);
    return animal;
  }

  findAll(): Animalss[] {
    return this.animals;
  }

  findOne(id: number): Animalss {
    return this.animals.find(animal => animal.id === id);
  }

  update(id: number, updatedAnimal: Animalss): Animalss {
    const index = this.animals.findIndex(animal => animal.id === id);
    this.animals[index] = updatedAnimal;
    return updatedAnimal;
  }

  remove(id: number): boolean {
    const index = this.animals.findIndex(animal => animal.id === id);
    if (index !== -1) {
      this.animals.splice(index, 1);
      return true;
    }
    return false;
  }
}
