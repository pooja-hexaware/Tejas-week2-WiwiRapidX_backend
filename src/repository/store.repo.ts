import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store, StoreDocument } from 'src/schemas/store.schema';

@Injectable()
export class StoreRepo {
    constructor(
        @InjectModel(Store.name)
        private readonly storeModel: Model<StoreDocument>) {}

    async create(data): Promise<Store> {
        return new this.storeModel(data).save();
    }

    async findAll(): Promise<Store[]> {
        return this.storeModel.find({})
            .exec();
    }

    async findStorebyId(id: any): Promise<Store[]> {
        const filter = { _id: id };
        let menu = await this.storeModel.find(filter).populate('menu');
        return menu;

    }

    async update(storeId, data): Promise<Store> {
        const filter = { _id: storeId };
        return this.storeModel.findOneAndUpdate(filter, data);
    }

    async delete(storeId): Promise<Store> {
        const filter = { _id: storeId };
        return this.storeModel.findByIdAndDelete(storeId);
    }
}