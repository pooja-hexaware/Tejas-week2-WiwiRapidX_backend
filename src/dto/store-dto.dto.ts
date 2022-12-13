import {Schema as MongooseSchema} from 'mongoose';


export class StoreDto {
    
    storeName: string; 
    
    address: string; 
    
    zip: string; 
    
    city: string; 
    
    state: string; 
    
    storePhone: string; 
    
    kitchenPhone: string; 
    
    menu:MongooseSchema.Types.ObjectId[] ; 
    
}