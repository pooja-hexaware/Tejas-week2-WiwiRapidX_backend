import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StoreDto } from '../dto/store-dto.dto';
import { StoreService } from '../services/store.service';


@Controller('Store')
export class StoreController {
    constructor(private readonly storeService: StoreService) { }

    @Post()
    async create(@Body() storeDto: StoreDto) {
        const res = this.storeService.create(storeDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.storeService.findAll();
    }

   
    @Get('/:id')

    async findStorebyId(@Param('id') id: any) {

        return this.storeService.findStorebyId(id);

    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() storeDto: StoreDto) {
        return this.storeService.update(id, storeDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.storeService.delete(id);
    }
}