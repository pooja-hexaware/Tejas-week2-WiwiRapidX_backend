"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDto = void 0;
const openapi = require("@nestjs/swagger");
class orderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { storeId: { required: true, type: () => String }, personName: { required: true, type: () => String }, street: { required: true, type: () => String }, postalcode: { required: true, type: () => String }, city: { required: true, type: () => String }, OrderItem: { required: true, type: () => Object }, mobile: { required: true, type: () => Number } };
    }
}
exports.orderDto = orderDto;
//# sourceMappingURL=order-dto.dto.js.map