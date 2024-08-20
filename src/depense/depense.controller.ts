import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { DepenseService } from './depense.service';
import { Depense } from './depense.entity';

@Controller('depenses')
export class DepenseController {
  constructor(private readonly depenseService: DepenseService) {}

  @Post()
  async create(@Body() depense: Depense): Promise<Depense> {
    return this.depenseService.create(depense);
  }

  @Get()
  async findAll(): Promise<Depense[]> {
    return this.depenseService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.depenseService.remove(id);
  }
}
