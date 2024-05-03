import { AnimalsService } from './animals.service';
import { Animalss } from './animals.entity';
export declare class AnimalsController {
    private readonly animalsService;
    constructor(animalsService: AnimalsService);
    findAll(): Animalss[];
    findOne(id: string): Animalss;
    create(createAnimal: Animalss): Animalss;
    update(id: string, updateAnimal: Animalss): Animalss;
    remove(id: string): boolean;
}
