import { Injectable } from '@nestjs/common';
import { ToppingRepo } from '../repository/topping.repo';
import { Topping } from '../schemas/topping.schema';

@Injectable()
export class ToppingService {
    constructor(
        private readonly toppingRepo: ToppingRepo
    ) { }

    async findAll(): Promise<Topping[]> {
        return this.toppingRepo.findAll();
    }

    async create(data): Promise<Topping> {
        data.createddate = new Date();
        return this.toppingRepo.create(data);
    }

    async update(toppingId, data): Promise<Topping> {
        return this.toppingRepo.update(toppingId, data);
    }

    async delete(toppingId): Promise<Topping> {
        return this.toppingRepo.delete(toppingId);
    }
}