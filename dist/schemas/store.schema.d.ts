import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';
export declare type StoreDocument = Store & Document;
export declare class Store {
    storeName: string;
    address: string;
    zip: string;
    city: string;
    state: string;
    storePhone: string;
    kitchenPhone: string;
    menu: MongooseSchema.Types.ObjectId[];
}
export declare const StoreSchema: mongoose.Schema<Document<Store, any, any>, mongoose.Model<Document<Store, any, any>, any, any>, undefined, {}>;
