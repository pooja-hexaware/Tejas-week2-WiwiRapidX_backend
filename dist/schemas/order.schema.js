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
exports.orderSchema = exports.order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let order = class order {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], order.prototype, "storeId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], order.prototype, "personName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], order.prototype, "street", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], order.prototype, "postalcode", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], order.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], order.prototype, "mobile", void 0);
__decorate([
    (0, mongoose_1.Prop)((0, mongoose_1.raw)([{
            menuId: { type: String },
            menuName: { type: String },
            menuPrice: { type: Number },
            quantity: { type: Number },
            toppings: { type: [String] },
            priceWithQunt: { type: Number }
        }])),
    __metadata("design:type", Object)
], order.prototype, "OrderItem", void 0);
order = __decorate([
    (0, mongoose_1.Schema)()
], order);
exports.order = order;
exports.orderSchema = mongoose_1.SchemaFactory.createForClass(order);
//# sourceMappingURL=order.schema.js.map