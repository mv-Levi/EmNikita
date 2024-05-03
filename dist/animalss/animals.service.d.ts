import { Animalss } from './animals.entity';
export declare class AnimalsService {
    private readonly animals;
    create(animal: Animalss): Animalss;
    findAll(): Animalss[];
    findOne(id: number): Animalss;
    update(id: number, updatedAnimal: Animalss): Animalss;
    remove(id: number): boolean;
}
