import { Prop, Schema, SchemaFactory,raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type orderDocument = order & Document;

@Schema()
export class order {
   
   @Prop()
   storeId: string; 
   
   @Prop()
   personName: string; 
   
   @Prop()
   street: string; 
   
   @Prop()
   postalcode: string; 
   
   @Prop()
   city: string; 

    @Prop()
   mobile: number; 
   
   @Prop(raw([{
      menuId : {type: String},
      menuName: { type: String },
      menuPrice: { type: Number},
      quantity:{type: Number},
      toppings: { type: [String] },
      priceWithQunt: { type: Number }
    }]))
    OrderItem: Record<string, any>; 
   
  
   
}

export const orderSchema = SchemaFactory.createForClass(order);