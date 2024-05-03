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
exports.AquariumsController = void 0;
const common_1 = require("@nestjs/common");
const aquariums_service_1 = require("./aquariums.service");
const aquarium_entity_1 = require("./aquarium.entity");
let AquariumsController = class AquariumsController {
    constructor(aquariumsService) {
        this.aquariumsService = aquariumsService;
    }
    findAll() {
        return this.aquariumsService.findAll();
    }
    findOne(id) {
        return this.aquariumsService.findOne(+id);
    }
    create(createAquarium) {
        return this.aquariumsService.create(createAquarium);
    }
    update(id, updateAquarium) {
        return this.aquariumsService.update(+id, updateAquarium);
    }
    remove(id) {
        return this.aquariumsService.remove(+id);
    }
};
exports.AquariumsController = AquariumsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AquariumsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AquariumsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [aquarium_entity_1.Aquarium]),
    __metadata("design:returntype", void 0)
], AquariumsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, aquarium_entity_1.Aquarium]),
    __metadata("design:returntype", void 0)
], AquariumsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AquariumsController.prototype, "remove", null);
exports.AquariumsController = AquariumsController = __decorate([
    (0, common_1.Controller)('aquariums'),
    __metadata("design:paramtypes", [aquariums_service_1.AquariumsService])
], AquariumsController);
//# sourceMappingURL=aquariums.controller.js.map