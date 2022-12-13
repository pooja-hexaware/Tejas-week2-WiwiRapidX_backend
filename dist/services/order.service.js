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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const common_1 = require("@nestjs/common");
const order_repo_1 = require("../repository/order.repo");
let orderService = class orderService {
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    async findAll() {
        return this.orderRepo.findAll();
    }
    async create(data) {
        data.createddate = new Date();
        return this.orderRepo.create(data);
    }
    async update(orderId, data) {
        return this.orderRepo.update(orderId, data);
    }
    async delete(orderId) {
        return this.orderRepo.delete(orderId);
    }
};
orderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repo_1.orderRepo])
], orderService);
exports.orderService = orderService;
//# sourceMappingURL=order.service.js.map