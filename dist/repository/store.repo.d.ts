import { Model } from 'mongoose';
import { Store, StoreDocument } from 'src/schemas/store.schema';
export declare class StoreRepo {
    private readonly storeModel;
    constructor(storeModel: Model<StoreDocument>);
    create(data: any): Promise<Store>;
    findAll(): Promise<Store[]>;
    findStorebyId(id: any): Promise<Store[]>;
    update(storeId: any, data: any): Promise<Store>;
    delete(storeId: any): Promise<Store>;
}
