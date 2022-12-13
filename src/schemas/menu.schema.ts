import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Topping, ToppingDocument } from './topping.schema';
import {Schema as MongooseSchema} from 'mongoose';

export type MenuDocument = Menu & Document;


@Schema()
export class Menu {
   
   @Prop()
   foodName: string; 
   
   @Prop()
   description: string; 
   
   @Prop()
   foodPrice: number; 
   
   @Prop({type:[{ type: MongooseSchema.Types.ObjectId, ref: Topping.name }]})
  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topping' }] })
   toppings: MongooseSchema.Types.ObjectId[]; 
   
}

export const MenuSchema = SchemaFactory.createForClass(Menu);