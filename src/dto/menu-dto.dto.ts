import {Schema as MongooseSchema} from 'mongoose';


export class MenuDto {
    
    foodName: string; 
    
    description: string; 
    
    foodPrice: number; 
    
    toppings:MongooseSchema.Types.ObjectId[]; 
    
}