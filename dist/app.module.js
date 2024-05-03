"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const animalss_module_1 = require("./animalss/animalss.module");
const aquariums_module_1 = require("./aquariums/aquariums.module");
const employees_module_1 = require("./employees/employees.module");
const datasource_module_1 = require("./datasource/datasource.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [animalss_module_1.AnimalssModule, aquariums_module_1.AquariumsModule, employees_module_1.EmployeesModule, datasource_module_1.DatasourceModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map