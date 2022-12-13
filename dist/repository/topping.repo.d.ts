import { Model } from 'mongoose';
import { Topping, ToppingDocument } from 'src/schemas/topping.schema';
export declare class ToppingRepo {
    private readonly toppingModel;
    constructor(toppingModel: Model<ToppingDocument>);
    create(data: any): Promise<Topping>;
    findAll(): Promise<Topping[]>;
    update(toppingId: any, data: any): Promise<Topping>;
    delete(toppingId: any): Promise<Topping>;
}
