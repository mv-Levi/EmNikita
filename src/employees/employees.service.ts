import { Injectable } from '@nestjs/common';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
  private readonly employees: Employee[] = [];

  create(employee: Employee): Employee {
    this.employees.push(employee);
    return employee;
  }

  findAll(): Employee[] {
    return this.employees;
  }

  findOne(id: number): Employee {
    return this.employees.find(employee => employee.id === id);
  }

  update(id: number, updatedEmployee: Employee): Employee {
    const index = this.employees.findIndex(employee => employee.id === id);
    this.employees[index] = updatedEmployee;
    return updatedEmployee;
  }

  remove(id: number): boolean {
    const index = this.employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
      return true;
    }
    return false;
  }
}