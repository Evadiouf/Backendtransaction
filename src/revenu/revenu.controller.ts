import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RevenuService } from './revenu.service';
import { CreateRevenuDto } from './dto/create-revenu.dto';
import { UpdateRevenuDto } from './dto/update-revenu.dto';

@Controller('revenus')
export class RevenuController {
  constructor(private readonly revenuService: RevenuService) {}

  
  @Post()
  async create(@Body() createRevenuDto: CreateRevenuDto) {
    return this.revenuService.create(createRevenuDto);
  }

  
  @Get()
  async findAll() {
    return this.revenuService.findAll();
  }

  
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.revenuService.findOne(id);
  }

  
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateRevenuDto: UpdateRevenuDto) {
    return this.revenuService.update(id, updateRevenuDto);
  }

 
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.revenuService.remove(id);
  }
}
