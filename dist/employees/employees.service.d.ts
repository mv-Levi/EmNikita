import { Employee } from './employee.entity';
export declare class EmployeesService {
    private readonly employees;
    create(employee: Employee): Employee;
    findAll(): Employee[];
    findOne(id: number): Employee;
    update(id: number, updatedEmployee: Employee): Employee;
    remove(id: number): boolean;
}
