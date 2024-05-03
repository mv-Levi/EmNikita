import { AquariumsService } from './aquariums.service';
import { Aquarium } from './aquarium.entity';
export declare class AquariumsController {
    private readonly aquariumsService;
    constructor(aquariumsService: AquariumsService);
    findAll(): Aquarium[];
    findOne(id: string): Aquarium;
    create(createAquarium: Aquarium): Aquarium;
    update(id: string, updateAquarium: Aquarium): Aquarium;
    remove(id: string): boolean;
}
