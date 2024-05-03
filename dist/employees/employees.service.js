"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
let EmployeesService = class EmployeesService {
    constructor() {
        this.employees = [];
    }
    create(employee) {
        this.employees.push(employee);
        return employee;
    }
    findAll() {
        return this.employees;
    }
    findOne(id) {
        return this.employees.find(employee => employee.id === id);
    }
    update(id, updatedEmployee) {
        const index = this.employees.findIndex(employee => employee.id === id);
        this.employees[index] = updatedEmployee;
        return updatedEmployee;
    }
    remove(id) {
        const index = this.employees.findIndex(employee => employee.id === id);
        if (index !== -1) {
            this.employees.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)()
], EmployeesService);
//# sourceMappingURL=employees.service.js.map