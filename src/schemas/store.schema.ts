import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MenuDocument } from './menu.schema';
import * as mongoose from 'mongoose'
import {Schema as MongooseSchema} from 'mongoose';
import { Menu } from './menu.schema';

export type StoreDocument = Store & Document;

@Schema()
export class Store {
   
   @Prop()
   storeName: string; 
   
   @Prop()
   address: string; 
   
   @Prop()
   zip: string; 
   
   @Prop()
   city: string; 
   
   @Prop()
   state: string; 
   
   @Prop()
   storePhone: string; 
   
   @Prop()
   kitchenPhone: string; 
   
   @Prop({type:[{ type: MongooseSchema.Types.ObjectId, ref: Menu.name }]})
//@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }] })
   menu: MongooseSchema.Types.ObjectId[];
   
}

export const StoreSchema = SchemaFactory.createForClass(Store);