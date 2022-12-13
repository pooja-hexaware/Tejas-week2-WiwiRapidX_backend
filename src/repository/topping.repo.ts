import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Topping, ToppingDocument } from 'src/schemas/topping.schema';

@Injectable()
export class ToppingRepo {
    constructor(
        @InjectModel(Topping.name)
        private readonly toppingModel: Model<ToppingDocument>) {}

    async create(data): Promise<Topping> {
        return new this.toppingModel(data).save();
    }

    async findAll(): Promise<Topping[]> {
        return this.toppingModel.find({})
            .exec();
    }

    async update(toppingId, data): Promise<Topping> {
        const filter = { _id: toppingId };
        return this.toppingModel.findOneAndUpdate(filter, data);
    }

    async delete(toppingId): Promise<Topping> {
        const filter = { _id: toppingId };
        return this.toppingModel.findByIdAndDelete(toppingId);
    }
}