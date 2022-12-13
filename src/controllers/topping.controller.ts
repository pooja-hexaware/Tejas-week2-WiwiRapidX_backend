import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ToppingDto } from '../dto/topping-dto.dto';
import { ToppingService } from '../services/topping.service';


@Controller('Topping')
export class ToppingController {
    constructor(private readonly toppingService: ToppingService) { }

    @Post()
    async create(@Body() toppingDto: ToppingDto) {
        const res = this.toppingService.create(toppingDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.toppingService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() toppingDto: ToppingDto) {
        return this.toppingService.update(id, toppingDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.toppingService.delete(id);
    }
}