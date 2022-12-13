import { StoreDto } from '../dto/store-dto.dto';
import { StoreService } from '../services/store.service';
export declare class StoreController {
    private readonly storeService;
    constructor(storeService: StoreService);
    create(storeDto: StoreDto): Promise<import("../schemas/store.schema").Store>;
    findAll(): Promise<import("../schemas/store.schema").Store[]>;
    findStorebyId(id: any): Promise<import("../schemas/store.schema").Store[]>;
    update(id: string, storeDto: StoreDto): Promise<import("../schemas/store.schema").Store>;
    delete(id: string): Promise<import("../schemas/store.schema").Store>;
}
