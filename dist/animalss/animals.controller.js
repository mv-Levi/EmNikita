"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalsController = void 0;
const common_1 = require("@nestjs/common");
const animals_service_1 = require("./animals.service");
const animals_entity_1 = require("./animals.entity");
let AnimalsController = class AnimalsController {
    constructor(animalsService) {
        this.animalsService = animalsService;
    }
    findAll() {
        return this.animalsService.findAll();
    }
    findOne(id) {
        return this.animalsService.findOne(+id);
    }
    create(createAnimal) {
        return this.animalsService.create(createAnimal);
    }
    update(id, updateAnimal) {
        return this.animalsService.update(+id, updateAnimal);
    }
    remove(id) {
        return this.animalsService.remove(+id);
    }
};
exports.AnimalsController = AnimalsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnimalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnimalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [animals_entity_1.Animalss]),
    __metadata("design:returntype", void 0)
], AnimalsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, animals_entity_1.Animalss]),
    __metadata("design:returntype", void 0)
], AnimalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnimalsController.prototype, "remove", null);
exports.AnimalsController = AnimalsController = __decorate([
    (0, common_1.Controller)('animals'),
    __metadata("design:paramtypes", [animals_service_1.AnimalsService])
], AnimalsController);
//# sourceMappingURL=animals.controller.js.map