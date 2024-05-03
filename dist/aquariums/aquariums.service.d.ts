import { Aquarium } from './aquarium.entity';
export declare class AquariumsService {
    private readonly aquariums;
    create(aquarium: Aquarium): Aquarium;
    findAll(): Aquarium[];
    findOne(id: number): Aquarium;
    update(id: number, updatedAquarium: Aquarium): Aquarium;
    remove(id: number): boolean;
}
