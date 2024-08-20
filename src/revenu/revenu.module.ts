import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenuService } from './revenu.service';
import { RevenuController } from './revenu.controller';
import { Revenu } from './revenu.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Revenu])], 
  controllers: [RevenuController],
  providers: [RevenuService],
})
export class RevenuModule {}
