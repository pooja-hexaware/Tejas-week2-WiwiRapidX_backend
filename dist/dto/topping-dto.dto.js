"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToppingDto = void 0;
const openapi = require("@nestjs/swagger");
class ToppingDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { ToppingName: { required: true, type: () => String }, ToppingPrice: { required: true, type: () => Number } };
    }
}
exports.ToppingDto = ToppingDto;
//# sourceMappingURL=topping-dto.dto.js.map