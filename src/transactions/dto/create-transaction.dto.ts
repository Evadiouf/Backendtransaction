// src/transactions/dto/create-transaction.dto.ts
import { IsEnum, IsNumber, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateTransactionDto {
  @IsEnum(['revenue', 'expense'])
  type: 'revenue' | 'expense';

  @IsNumber()
  somme: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDate()
  date: Date;
}
