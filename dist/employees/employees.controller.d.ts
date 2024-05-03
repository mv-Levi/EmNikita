import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    findAll(): Employee[];
    findOne(id: string): Employee;
    create(createAquarium: Employee): Employee;
    update(id: string, updateAquarium: Employee): Employee;
    remove(id: string): boolean;
}
