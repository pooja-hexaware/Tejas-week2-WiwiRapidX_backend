import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToppingDocument = Topping & Document;

@Schema()
export class Topping {
   
   @Prop()
   ToppingName: string; 
   
   @Prop()
   ToppingPrice: number; 
   
}

export const ToppingSchema = SchemaFactory.createForClass(Topping);