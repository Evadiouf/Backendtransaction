// src/transactions/transactions.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async addTransaction(@Body() createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionsService.addTransaction(createTransactionDto);
  }

  @Get()
  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionsService.getTransactions();
  }

  @Get(':id')
  async getTransaction(@Param('id') id: number): Promise<Transaction> {
    return this.transactionsService.getTransactionById(id);
  }

  @Put(':id')
  async updateTransaction(
    @Param('id') id: number,
    @Body() updatedTransaction: Partial<CreateTransactionDto>,
  ): Promise<Transaction> {
    return this.transactionsService.updateTransaction(id, updatedTransaction);
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: number): Promise<void> {
    return this.transactionsService.deleteTransaction(id);
  }

  @Get('summary')
  async getBudgetSummary() {
    return this.transactionsService.getBudgetSummary();
  }
}
