import { Animalss } from 'src/animalss/animals.entity';
import { Aquarium } from 'src/aquariums/aquarium.entity';
import { Employee } from 'src/employees/employee.entity';
export declare class DatasourceService {
    private animals;
    private aquariums;
    private employees;
    getAnimalss(): Animalss[];
    getAquariums(): Aquarium[];
    getEmployees(): Employee[];
}
