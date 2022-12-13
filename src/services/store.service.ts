import { Injectable } from '@nestjs/common';
import { StoreRepo } from '../repository/store.repo';
import { Store } from '../schemas/store.schema';

@Injectable()
export class StoreService {
    constructor(
        private readonly storeRepo: StoreRepo
    ) { }

    async findAll(): Promise<Store[]> {
        return this.storeRepo.findAll();
    }
    async findStorebyId(id: any): Promise<Store[]> {
        return this.storeRepo.findStorebyId(id)
    }

    async create(data): Promise<Store> {
        data.createddate = new Date();
        return this.storeRepo.create(data);
    }

    async update(storeId, data): Promise<Store> {
        return this.storeRepo.update(storeId, data);
    }

    async delete(storeId): Promise<Store> {
        return this.storeRepo.delete(storeId);
    }
}