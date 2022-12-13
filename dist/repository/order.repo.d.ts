import { Model } from 'mongoose';
import { order, orderDocument } from 'src/schemas/order.schema';
export declare class orderRepo {
    private readonly orderModel;
    constructor(orderModel: Model<orderDocument>);
    create(data: any): Promise<order>;
    findAll(): Promise<order[]>;
    update(orderId: any, data: any): Promise<order>;
    delete(orderId: any): Promise<order>;
}
