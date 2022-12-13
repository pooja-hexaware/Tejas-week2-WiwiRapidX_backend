import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from "./modules/store.module";
import { MenuModule } from "./modules/menu.module";
import { ToppingModule } from "./modules/topping.module";
import { orderModule } from "./modules/order.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        StoreModule,
        MenuModule,
        ToppingModule,
        orderModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
