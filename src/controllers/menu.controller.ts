import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MenuDto } from '../dto/menu-dto.dto';
import { MenuService } from '../services/menu.service';
import { MenuDocument } from 'src/schemas/menu.schema';


@Controller('Menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) { }

    @Post()
    async create(@Body() menuDto: MenuDto) {
        const res = this.menuService.create(menuDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.menuService.findAll();
    }

    @Get('/:id')
    async findMenuById(@Param('id') id:any) {
        return this.menuService.findMenuById(id)
    }
   

    @Post('/:id')
    update(@Param('id') id: string, @Body() menuDto: MenuDto) {
        return this.menuService.update(id, menuDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.menuService.delete(id);
    }
}