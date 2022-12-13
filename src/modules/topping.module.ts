import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToppingController } from '../controllers/topping.controller';
import { ToppingService } from '../services/topping.service';
import { ToppingRepo } from '../repository/topping.repo';
import { Topping, ToppingSchema } from '../schemas/topping.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Topping.name, schema: ToppingSchema }])
    ],
    controllers: [ToppingController],
    providers: [ToppingService, ToppingRepo],
    exports: [ToppingService, ToppingRepo]
  })
  export class ToppingModule { }