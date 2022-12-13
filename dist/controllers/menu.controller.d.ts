import { MenuDto } from '../dto/menu-dto.dto';
import { MenuService } from '../services/menu.service';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(menuDto: MenuDto): Promise<import("src/schemas/menu.schema").Menu>;
    findAll(): Promise<import("src/schemas/menu.schema").Menu[]>;
    findMenuById(id: any): Promise<import("src/schemas/menu.schema").Menu[]>;
    update(id: string, menuDto: MenuDto): Promise<import("src/schemas/menu.schema").Menu>;
    delete(id: string): Promise<import("src/schemas/menu.schema").Menu>;
}
