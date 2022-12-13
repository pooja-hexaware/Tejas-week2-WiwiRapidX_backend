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
exports.StoreRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const store_schema_1 = require("../schemas/store.schema");
let StoreRepo = class StoreRepo {
    constructor(storeModel) {
        this.storeModel = storeModel;
    }
    async create(data) {
        return new this.storeModel(data).save();
    }
    async findAll() {
        return this.storeModel.find({})
            .exec();
    }
    async findStorebyId(id) {
        const filter = { _id: id };
        let menu = await this.storeModel.find(filter).populate('menu');
        return menu;
    }
    async update(storeId, data) {
        const filter = { _id: storeId };
        return this.storeModel.findOneAndUpdate(filter, data);
    }
    async delete(storeId) {
        const filter = { _id: storeId };
        return this.storeModel.findByIdAndDelete(storeId);
    }
};
StoreRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(store_schema_1.Store.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StoreRepo);
exports.StoreRepo = StoreRepo;
//# sourceMappingURL=store.repo.js.map