import { Controller, Get, Put, Post, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { ItemDto } from './dto/item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() requestDTO: ItemDto): Promise<Item> {
    return this.itemsService.create(requestDTO);
  }

  @Get()
  findAll(): Promise<Item[]> {
    let myVar = this.itemsService.findAll();
    return myVar;
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Item> {
    let myVar = this.itemsService.findOne(id);
    return myVar;
  }

  @Put(':id')
  update(@Body() requestDTO: Item, @Param('id') id: string): Promise<Item> {
    return this.itemsService.update(id, requestDTO);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Get('/a/:id')
  findByReq(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Response');
  }

  @Get('b/:id')
  findById1(@Param() param): string {
    console.log(param.id);
    return `Item ${param.id} ok`;
  }

  @Get('c/:id')
  findById2(@Param('id') id): string {
    console.log(id);
    return `Item ${id} ok`;
  }
}