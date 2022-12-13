import { orderDto } from '../dto/order-dto.dto';
import { orderService } from '../services/order.service';
export declare class orderController {
    private readonly orderService;
    constructor(orderService: orderService);
    create(orderDto: orderDto): Promise<import("../schemas/order.schema").order>;
    findAll(): Promise<import("../schemas/order.schema").order[]>;
    update(id: string, orderDto: orderDto): Promise<import("../schemas/order.schema").order>;
    delete(id: string): Promise<import("../schemas/order.schema").order>;
}
