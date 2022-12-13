import { StoreRepo } from '../repository/store.repo';
import { Store } from '../schemas/store.schema';
export declare class StoreService {
    private readonly storeRepo;
    constructor(storeRepo: StoreRepo);
    findAll(): Promise<Store[]>;
    findStorebyId(id: any): Promise<Store[]>;
    create(data: any): Promise<Store>;
    update(storeId: any, data: any): Promise<Store>;
    delete(storeId: any): Promise<Store>;
}
