import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from 'src/schemas/menu.schema';

@Injectable()
export class MenuRepo {
    constructor(
        @InjectModel(Menu.name)
        private readonly menuModel: Model<MenuDocument>) {}

    async create(data): Promise<Menu> {
        return new this.menuModel(data).save();
    }

    async findAll(): Promise<Menu[]> {
        return this.menuModel.find({})
            .exec();
    }
    async findMenuById(id):Promise<Menu[]>{
    const filter = {_id:id };
    let topping = await this.menuModel.find(filter).populate('toppings');
    return topping;
    }
    
    async update(menuId, data): Promise<Menu> {
        const filter = { _id: menuId };
        return this.menuModel.findOneAndUpdate(filter, data);
    }

    async delete(menuId): Promise<Menu> {
        const filter = { _id: menuId };
        return this.menuModel.findByIdAndDelete(menuId);
    }
}