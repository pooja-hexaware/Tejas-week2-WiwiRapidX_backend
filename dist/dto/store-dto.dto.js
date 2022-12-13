"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreDto = void 0;
const openapi = require("@nestjs/swagger");
class StoreDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { storeName: { required: true, type: () => String }, address: { required: true, type: () => String }, zip: { required: true, type: () => String }, city: { required: true, type: () => String }, state: { required: true, type: () => String }, storePhone: { required: true, type: () => String }, kitchenPhone: { required: true, type: () => String }, menu: { required: true, type: () => [require("mongoose").Schema.Types.ObjectId] } };
    }
}
exports.StoreDto = StoreDto;
//# sourceMappingURL=store-dto.dto.js.map