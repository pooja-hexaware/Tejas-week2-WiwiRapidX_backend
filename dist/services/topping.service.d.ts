import { ToppingRepo } from '../repository/topping.repo';
import { Topping } from '../schemas/topping.schema';
export declare class ToppingService {
    private readonly toppingRepo;
    constructor(toppingRepo: ToppingRepo);
    findAll(): Promise<Topping[]>;
    create(data: any): Promise<Topping>;
    update(toppingId: any, data: any): Promise<Topping>;
    delete(toppingId: any): Promise<Topping>;
}
