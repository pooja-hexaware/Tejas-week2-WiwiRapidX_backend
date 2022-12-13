import { orderRepo } from '../repository/order.repo';
import { order } from '../schemas/order.schema';
export declare class orderService {
    private readonly orderRepo;
    constructor(orderRepo: orderRepo);
    findAll(): Promise<order[]>;
    create(data: any): Promise<order>;
    update(orderId: any, data: any): Promise<order>;
    delete(orderId: any): Promise<order>;
}
