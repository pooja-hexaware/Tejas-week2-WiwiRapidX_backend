"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDto = void 0;
const openapi = require("@nestjs/swagger");
class MenuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { foodName: { required: true, type: () => String }, description: { required: true, type: () => String }, foodPrice: { required: true, type: () => Number }, toppings: { required: true, type: () => [require("mongoose").Schema.Types.ObjectId] } };
    }
}
exports.MenuDto = MenuDto;
//# sourceMappingURL=menu-dto.dto.js.map