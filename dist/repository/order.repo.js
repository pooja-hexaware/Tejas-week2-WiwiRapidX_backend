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
exports.orderRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("../schemas/order.schema");
let orderRepo = class orderRepo {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async create(data) {
        return new this.orderModel(data).save();
    }
    async findAll() {
        return this.orderModel.find({})
            .exec();
    }
    async update(orderId, data) {
        const filter = { _id: orderId };
        return this.orderModel.findOneAndUpdate(filter, data);
    }
    async delete(orderId) {
        const filter = { _id: orderId };
        return this.orderModel.findByIdAndDelete(orderId);
    }
};
orderRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], orderRepo);
exports.orderRepo = orderRepo;
//# sourceMappingURL=order.repo.js.map