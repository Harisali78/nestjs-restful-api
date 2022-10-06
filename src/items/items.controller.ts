import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
// import { Request, Response } from 'express';
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response {
  //   console.log(req.url);

  //   return res.send('Get All Items');
  // }
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  // @Get(':id')
  // findOne(@Param() param): string {
  //   return `Item : ${param.id}`;
  // }
  // shorthand of above route
  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }
  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
}
