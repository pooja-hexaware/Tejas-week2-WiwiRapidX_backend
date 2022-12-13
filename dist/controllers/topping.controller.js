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
exports.ToppingController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const topping_dto_dto_1 = require("../dto/topping-dto.dto");
const topping_service_1 = require("../services/topping.service");
let ToppingController = class ToppingController {
    constructor(toppingService) {
        this.toppingService = toppingService;
    }
    async create(toppingDto) {
        const res = this.toppingService.create(toppingDto);
        return res;
    }
    async findAll() {
        return this.toppingService.findAll();
    }
    update(id, toppingDto) {
        return this.toppingService.update(id, toppingDto);
    }
    delete(id) {
        return this.toppingService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../schemas/topping.schema").Topping }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [topping_dto_dto_1.ToppingDto]),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../schemas/topping.schema").Topping] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ToppingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/:id'),
    openapi.ApiResponse({ status: 201, type: require("../schemas/topping.schema").Topping }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, topping_dto_dto_1.ToppingDto]),
    __metadata("design:returntype", void 0)
], ToppingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    openapi.ApiResponse({ status: 200, type: require("../schemas/topping.schema").Topping }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToppingController.prototype, "delete", null);
ToppingController = __decorate([
    (0, common_1.Controller)('Topping'),
    __metadata("design:paramtypes", [topping_service_1.ToppingService])
], ToppingController);
exports.ToppingController = ToppingController;
//# sourceMappingURL=topping.controller.js.map