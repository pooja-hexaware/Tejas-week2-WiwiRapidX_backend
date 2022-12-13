import { Document } from 'mongoose';
export declare type ToppingDocument = Topping & Document;
export declare class Topping {
    ToppingName: string;
    ToppingPrice: number;
}
export declare const ToppingSchema: import("mongoose").Schema<Document<Topping, any, any>, import("mongoose").Model<Document<Topping, any, any>, any, any>, undefined, {}>;
