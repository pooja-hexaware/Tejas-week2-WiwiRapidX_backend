import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';
export declare type MenuDocument = Menu & Document;
export declare class Menu {
    foodName: string;
    description: string;
    foodPrice: number;
    toppings: MongooseSchema.Types.ObjectId[];
}
export declare const MenuSchema: mongoose.Schema<Document<Menu, any, any>, mongoose.Model<Document<Menu, any, any>, any, any>, undefined, {}>;
