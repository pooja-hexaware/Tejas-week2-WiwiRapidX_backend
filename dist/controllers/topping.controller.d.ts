import { ToppingDto } from '../dto/topping-dto.dto';
import { ToppingService } from '../services/topping.service';
export declare class ToppingController {
    private readonly toppingService;
    constructor(toppingService: ToppingService);
    create(toppingDto: ToppingDto): Promise<import("../schemas/topping.schema").Topping>;
    findAll(): Promise<import("../schemas/topping.schema").Topping[]>;
    update(id: string, toppingDto: ToppingDto): Promise<import("../schemas/topping.schema").Topping>;
    delete(id: string): Promise<import("../schemas/topping.schema").Topping>;
}
