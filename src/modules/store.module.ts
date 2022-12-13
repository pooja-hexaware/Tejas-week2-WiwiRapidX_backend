import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreController } from '../controllers/store.controller';
import { StoreService } from '../services/store.service';
import { StoreRepo } from '../repository/store.repo';
import { Store, StoreSchema } from '../schemas/store.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }])
    ],
    controllers: [StoreController],
    providers: [StoreService, StoreRepo],
    exports: [StoreService, StoreRepo]
  })
  export class StoreModule { }