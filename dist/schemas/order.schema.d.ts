import { Document } from 'mongoose';
export declare type orderDocument = order & Document;
export declare class order {
    storeId: string;
    personName: string;
    street: string;
    postalcode: string;
    city: string;
    mobile: number;
    OrderItem: Record<string, any>;
}
export declare const orderSchema: import("mongoose").Schema<Document<order, any, any>, import("mongoose").Model<Document<order, any, any>, any, any>, undefined, {}>;
