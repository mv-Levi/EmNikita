import { Injectable } from '@nestjs/common';
import { Animalss } from 'src/animalss/animals.entity';
import { Aquarium } from 'src/aquariums/aquarium.entity';
import { Employee } from 'src/employees/employee.entity';

@Injectable()
export class DatasourceService {
  private animals: Animalss[] = [];
  private aquariums: Aquarium[] = [];
  private employees: Employee[] = [];

  getAnimalss(): Animalss[] {
    return this.animals;
  }

  getAquariums(): Aquarium[] {
    return this.aquariums;
  }

  getEmployees(): Employee[] {
    return this.employees;
  }


}