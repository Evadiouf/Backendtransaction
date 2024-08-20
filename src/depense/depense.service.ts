import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Depense } from './depense.entity';

@Injectable()
export class DepenseService {
  constructor(
    @InjectRepository(Depense)
    private readonly depenseRepository: Repository<Depense>,
  ) {}

  async create(depense: Depense): Promise<Depense> {
    return this.depenseRepository.save(depense);
  }

  async findAll(): Promise<Depense[]> {
    return this.depenseRepository.find();
  }

  async remove(id: string): Promise<void> {
    await this.depenseRepository.delete(id);
  }
}
